#!/usr/bin/perl
use warnings;
use strict;
use feature ':5.10';

use File::Path qw(make_path);
use File::Basename qw(basename);

# User-Agent matters: Google Fonts serves different font formats (woff2 vs ttf
# vs eot) based on what the UA advertises. A modern Safari UA gets woff2.
my $UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 '
       . '(KHTML, like Gecko) Version/17.0 Safari/605.1.15';

my @FETCH = (
    {
        url   => 'https://cdn.datatables.net/v/bs4-4.1.1/jq-3.6.0/dt-1.12.1/b-2.2.3/fh-3.2.4/r-2.3.0/datatables.min.css',
        local => 'vendor/datatables.min.css',
    },
    {
        url   => 'https://cdn.datatables.net/v/bs4-4.1.1/jq-3.6.0/dt-1.12.1/b-2.2.3/fh-3.2.4/r-2.3.0/datatables.min.js',
        local => 'vendor/datatables.min.js',
    },
    {
        url   => 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.30.1/moment.min.js',
        local => 'vendor/moment.min.js',
    },
    {
        url   => 'https://kit.fontawesome.com/f4cd074eec.js',
        local => 'vendor/fontawesome-kit.js',
    },
    {
        url           => 'https://fonts.googleapis.com/css2?family=New+Rocker&display=swap',
        local         => 'vendor/fonts/new-rocker.css',
        rewrite_fonts => 1,
    },
    {
        url           => 'https://fonts.googleapis.com/css2?family=Karla&display=swap',
        local         => 'vendor/fonts/karla.css',
        rewrite_fonts => 1,
    },
);

make_path('vendor/fonts');

for my $f (@FETCH) {
    fetch_one($f);
}
update_index();
exit();

sub fetch_one {
    my ($f) = @_;
    my $body = curl_get($f->{url});
    if ($f->{rewrite_fonts}) {
        $body = rewrite_css_fonts($body, dirname_of($f->{local}));
    }
    write_file($f->{local}, $body);
    print "Saved: $f->{local}\n";
}

sub rewrite_css_fonts {
    my ($css, $localdir) = @_;
    $css =~ s{url\(\s*['"]?(https?://fonts\.gstatic\.com/[^'")\s]+)['"]?\s*\)}{
        my $url = $1;
        my $name = basename($url);
        $name =~ s/[^\w.-]/_/g;
        my $path = "$localdir/$name";
        unless (-e $path) {
            write_file($path, curl_get($url));
            print "Saved: $path\n";
        }
        "url($name)"
    }ge;
    return $css;
}

sub curl_get {
    my ($url) = @_;
    my $safe_url = $url;
    $safe_url =~ s/'/'\\''/g;
    my $out = `curl -sSL -A '$UA' '$safe_url'`;
    die "fetch failed: $url\n" unless length $out;
    return $out;
}

sub write_file {
    my ($path, $body) = @_;
    my $dir = dirname_of($path);
    make_path($dir) if $dir && ! -d $dir;
    open my $fh, '>', $path or die "cannot write $path: $!";
    binmode $fh;
    print $fh $body;
    close $fh;
}

sub dirname_of {
    my ($p) = @_;
    (my $d = $p) =~ s!/[^/]+$!!;
    return $d eq $p ? '' : $d;
}

sub update_index {
    open my $fh, '<', 'index.html' or die "cannot open index.html: $!";
    my $html = join '', <$fh>;
    close $fh;

    # Replace each CDN URL with its local path.
    for my $f (@FETCH) {
        my $from = $f->{url};
        my $to   = $f->{local};
        $html =~ s{\Q$from\E}{$to}g;
    }

    # Preconnects are no longer useful once fonts are local. Strip them.
    $html =~ s{^\s*<link\s+rel="preconnect"\s+href="https://fonts\.(?:googleapis|gstatic)\.com"[^>]*>\s*\n}{}gm;

    # Cross-origin hints are wrong now that the files are same-origin. Strip them.
    $html =~ s{\s+crossorigin(?:="[^"]*")?}{}g;
    $html =~ s{\s+referrerpolicy="[^"]*"}{}g;

    open $fh, '>', 'index.html' or die "cannot open index.html: $!";
    print $fh $html;
    close $fh;
}
