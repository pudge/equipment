#!/usr/bin/perl
use warnings;
use strict;
use feature ':5.10';

use JSON::XS;

my %md5s;
my @main = qw(data.js code.js style.css lastmod.js footer.js);

get_md5s();
save_md5s();
save_index();
exit();

sub get_md5s {
    # get main files
    md5sum($_, \%md5s) for @main;
    
    # get image files
    my @dirs = ('images', 'images/sm');
    for my $dir (@dirs) {
        md5sum("$dir/*.webp", \%md5s);
    }

    md5sum("manuals/*/*", \%md5s);
}

sub save_md5s {
    my $JSON = JSON::XS->new->pretty->canonical;
    open my $fh, '>', 'md5s.js' or die "cannot open md5.js: $!";
    my $md5s_json = $JSON->encode(\%md5s);
    printf $fh "const md5s = $md5s_json\n";
    close $fh;
}

sub save_index {
    md5sum("md5s.js", \%md5s);
    open my $fh, '<', 'index.html' or die "cannot open index.html: $!";
    my $index = join '', <$fh>;
    close $fh;

    $index =~ s!((?:href|src)="./$_)\?.*?"!$1?$md5s{"./$_"}"! for (@main, 'md5s.js');

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
