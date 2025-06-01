#!/usr/bin/perl
use warnings;
use strict;
use feature ':5.10';

use Data::Dumper; $Data::Dumper::Sortkeys=1;
use JSON::XS 'encode_json';
use Text::CSV_XS 'csv';

my $JSON = JSON::XS->new->utf8->pretty->canonical;

main();

sub main {
    export_numbers();
    my $gear = get_gear();
    my $companies = get_companies();

    my @lt = localtime();
    my $date = sprintf '%04d-%02d-%02d', $lt[5]+1900, $lt[4]+1, $lt[3];
    
    print <<"EOT";
var lastModified = new Date("${date}T12:00:00+0000")
var equipment_data = {}
EOT
    print "var equipment = ", $JSON->encode($gear), "\n";
    print "var links = ", $JSON->encode($companies);
}

sub get_gear {
    my $dir = "$ENV{HOME}/Downloads/Guitar Strings";
    open my $gd_fh, '<', "$dir/Gear Detail-Table 1.csv" or die $!;
    my $gd = '';
    while (my $line = <$gd_fh>) {
        if ($line =~ s/^,//) {
            $gd .= $line;
        }
    }
    my $detail      = csv(in => \$gd, headers => "auto");
    my $data        = csv(in => "$dir/All Gear-Table 1.csv",     headers => "auto");
    my $manuals     = csv(in => "$dir/Gear Manuals-Table 1.csv", headers => "auto");
    my $instrumans  = csv(in => "$dir/Instruments-Table 1.csv",  headers => "auto");

    my %detail;
    for my $x (@$detail) {
        $detail{ $x->{'Model'} }{ $x->{'Key'} } = $x->{'Value'};
    }

    my %manuals;
    for my $x (@$manuals) {
        $manuals{ $x->{'Model'} }{ $x->{'Name'} } = $x->{'File'};
    }

    my %instrumans;
    for my $x (@$instrumans) {
        $instrumans{ $x->{'Model'} } = $x->{'Last Strung'}
            if $x->{'Last Strung'} && $x->{'Last Strung'} ne '-';
    }

    my @out;
    for my $x (@$data) {
        my $y = {
            model           => $x->{'Model'},
            make            => $x->{'Make'},
            category        => $x->{'Category'},
            type            => $x->{'Type'},
            year            => $x->{'Year'},
#             production_year => idx($x->{'Production Year'}),
#             serial          => idx($x->{'Serial'}),
#             local_serial    => idx($x->{'Local Serial'}),
#             location        => idx($x->{'Location'}),
            strings         => $x->{'Strings'},
            instrument      => $x->{'Instrument'},
            notes           => $x->{'Notes'},
            link            => $x->{'Link'}, # TBD
    
            image           => bool($x->{'Image'}),
            year_uncertain  => bool($x->{'Year Uncertain'}),
            featured        => bool($x->{'Featured'}),
            hide            => bool($x->{'Hide'}),
            not_mine        => bool($x->{'Not Mine'}),
            inactive        => bool($x->{'Inactive'}),
            no_reverb       => bool($x->{'No Reverb'}),
        };

        for my $k (keys %$y) {
            delete $y->{$k} unless length $y->{$k};
        }

        if ($y->{notes}) {
            $y->{notes} = [split ', ', $y->{notes}];
        }
        if ($y->{instrument}) {
            $y->{notes} //= [];
            unshift @{$y->{notes}}, split ', ', $y->{instrument};
        }
        if ($y->{strings}) {
            $y->{notes} //= [];
            unshift @{$y->{notes}}, split ', ', $y->{strings};
            if ($instrumans{$y->{model}}) {
                $y->{notes}[0] .= " ($instrumans{$y->{model}})";
            }
        }

        $y->{'detail'} = $detail{$y->{model}} if $detail{$y->{model}};
        $y->{'manuals'} = $manuals{$y->{model}} if $manuals{$y->{model}};

        unless ($y->{inactive}) {
            push @out, $y;
        }
    }

    for my $x (@out) {
        for my $k (keys %$x) {
            delete $x->{$k} unless length$x->{$k};
        }
    }

    return \@out;
}

sub get_companies {
    my $data = csv(in => "$ENV{HOME}/Downloads/Guitar Strings/Companies-Table 1.csv", headers => "auto");

    my %out;
    for my $x (@$data) {
        $out{$x->{'Name'}} = $x->{'Link'} unless bool($x->{'Inactive'});
    }

    return \%out;
}

sub bool {
    return $_[0] && $_[0] eq 'TRUE'
        ? $JSON::XS::true
        : '';
}

sub idx {
    return $_[0] && $_[0] ne '0'
        ? $_[0]
        : '';
}

sub export_numbers {
    my $script = <<"EOS";
tell application "Numbers"
	export document 1 as CSV to POSIX file "$ENV{HOME}/Downloads/Guitar Strings"
end tell
EOS

    system(osascript => '-e', $script);

}

__END__
