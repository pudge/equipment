#!/usr/bin/perl -s
use warnings;
use strict;
use feature ':5.10';

use Data::Dumper; $Data::Dumper::Sortkeys=1;
use JSON::XS;

our $force;

my $JSON = JSON::XS->new->pretty->canonical;

my %md5s;
my @main = qw(
    data.js conf.js code.js
    footer.js lastmod.js
    dracula-variables.css style.css
    github.png reverb.webp
);

my $rev = sprintf '%08x', int(rand(2**32));

get_md5s();
my $changes = compare_md5s(open_md5s());
if ($force || $changes) {
    save_md5s();
    save_index();
    say "Done.";
}
else {
    say "No changes.";
}
exit();

sub get_md5s {
    # get main files
    md5sum($_, \%md5s) for @main;
    
    # get image/pdf files
    for (qw(images pic manuals)) {
        md5sum("$_/*/*", \%md5s);
    }

    md5sum("vendor/*.*", \%md5s);
    md5sum("vendor/fonts/*", \%md5s);

    $md5s{'./md5s.js'} = $rev;
}

sub compare_md5s {
    my($old) = @_;
    my $changes = 0;
    for my $f (sort keys %$old) {
        next if $f eq './md5s.js';
        if (! exists $md5s{$f}) {
            $changes++;
            print "Deleted : $f\n";
        }
        elsif ($old->{$f} ne $md5s{$f}) {
            $changes++;
            print "Modified: $f\n";
        }
    }

    for my $f (sort keys %md5s) {
        next if $f eq './md5s.js';
        if (! exists $old->{$f}) {
            $changes++;
            print "Created : $f\n";
        }
    }

    return $changes;
}

sub open_md5s {
    open my $fh, '<', 'md5s.js' or die "cannot open md5.js: $!";
    my $md5s_json = join('', <$fh>) =~ s/^const md5s = //r;
    return eval { $JSON->decode($md5s_json)} || {};
}

sub save_md5s {
    open my $fh, '>', 'md5s.js' or die "cannot open md5.js: $!";
    my $md5s_json = $JSON->encode(\%md5s);
    printf $fh "const md5s = $md5s_json\n";
    close $fh;
}

sub save_index {
    open my $fh, '<', 'index.html' or die "cannot open index.html: $!";
    my $index = join '', <$fh>;
    close $fh;

    for (keys %md5s) {
        $index =~ s!((?:href|src)="$_)\?.*?"!$1?$md5s{$_}"!;
    }

    open $fh, '>', 'index.html' or die "cannot open index.html: $!";
    print $fh $index;
    close $fh;
}

sub md5sum {
    my($f, $m) = @_;
    chomp(my @md5s = `md5sum $f`);
    for my $line (@md5s) {
        my($md5, $file) = split ' ', $line, 2;
        $m->{'./' . $file} = $md5;
    }
}
