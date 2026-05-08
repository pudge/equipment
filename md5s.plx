#!/usr/bin/perl
use warnings;
use strict;
use feature ':5.10';

use Data::Dumper; $Data::Dumper::Sortkeys=1;
use JSON::XS;

my $JSON = JSON::XS->new->pretty->canonical;

my %md5s;
my @main = qw(data.js code.js footer.js lastmod.js style.css);

my $rev = sprintf '%08x', int(rand(2**32));

get_md5s();
my $changes = compare_md5s(open_md5s());
if ($changes) {
    save_md5s();
    save_index();
    save_sw();
}
exit();

sub get_md5s {
    # get main files
    md5sum($_, \%md5s) for @main;
    
    # get image files
    my @dirs = ('images', 'images/sm', 'pic');
    for my $dir (@dirs) {
        md5sum("$dir/*.webp", \%md5s);
    }

    md5sum("manuals/*/*", \%md5s);
    md5sum("vendor/*.*", \%md5s);
    md5sum("vendor/fonts/*", \%md5s);
}

sub compare_md5s {
    my($old) = @_;
    my $changes = 0;
    for my $f (sort keys %$old) {
        last if $f eq 'MANIFEST_REV';
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
        last if $f eq 'MANIFEST_REV';
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
    return $JSON->decode($md5s_json);
}

sub save_md5s {
    open my $fh, '>', 'md5s.js' or die "cannot open md5.js: $!";
    $md5s{'MANIFEST_REV'} = $rev;
    my $md5s_json = $JSON->encode(\%md5s);
    printf $fh "const md5s = $md5s_json\n";
    close $fh;
}

sub save_index {
    md5sum("md5s.js", \%md5s);
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

sub save_sw {
    open my $fh, '<', 'sw.js' or die "cannot open sw.js: $!";
    my $sw = join '', <$fh>;
    close $fh;

    return unless $sw =~ s/(const MANIFEST_REV = ')[^']*(')/$1$rev$2/;

    open $fh, '>', 'sw.js' or die "cannot open sw.js: $!";
    print $fh $sw;
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
