#!/usr/bin/perl
use warnings;
use strict;
use feature ':5.10';

use JSON::XS;

my @dirs = ('images', 'images/sm');
my %md5s;
for my $dir (@dirs) {
    chomp(my @md5s = `md5sum $dir/*.png`);
    for my $line (@md5s) {
        my($md5, $file) = split ' ', $line, 2;
        $md5s{'./' . $file} = $md5;
    }
}

my $JSON = JSON::XS->new->pretty->canonical;
open my $fh, '>', 'md5s.js';
printf $fh <<EOT, $JSON->encode(\%md5s);
const md5s = %s
EOT
