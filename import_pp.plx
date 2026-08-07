#!/usr/bin/perl
use warnings;
use strict;
use feature ':5.10';

use Data::Dumper; $Data::Dumper::Sortkeys=1;
use JSON 'decode_json';
use HTML::TreeBuilder; # needed from CPAN

our $MAX = 1_000_000;

my(%found, %gear, $el_a, $el_b, $el_z);
my($input, $first, $first_top, $last, $firstwidth) = @ARGV;

if (@ARGV == 4) {
    ($input, $first, $first_top, $last, $firstwidth) =
        ($input, $first, undef, $first_top, $last);
}

binmode(STDOUT, ':encoding(UTF-8)');

process_gear();
create_map();

sub create_map {
    my $note = $first_top ? "\Q$first\E \Q$first_top\E" : "\Q$first\E";
    say((' ' x (4 * 4)) . "<!-- $0 $note \Q$last\E $firstwidth -->");
    for my $id (sort {
        $a eq $el_a
            ||
        $gear{$b}->{left_s} <=> $gear{$a}->{left_s}
            ||
        $gear{$b}->{top_s} <=> $gear{$a}->{top_s}
    } keys %gear) {
        my $item = $gear{$id};
        printf(
            (' ' x (4 * 4)) .
            qq[<area shape="rect" coords="%d,%d,%d,%d" alt="%s">\n],
                $item->{left_s},
                $item->{top_s},
                $item->{left_s} + $item->{width_s},
                $item->{top_s} + $item->{height_s},
                $item->{title},
        );
    }
}

sub process_gear {
    my $json = do {
        open my $fh, '<', $input or die "Cannot open `$input`: $!";
        join '', <$fh>;
    };
    my($canvas) = HTML::TreeBuilder->new_from_content( decode_json($json)->{canvas} );

    for my $body ($canvas->look_down(_tag => 'body')) {
        $body->traverse(sub {
            my($node, $startflag, $depth) = @_;
            return process_node($node) if $depth == 1;
            return 1;   # keep descending
        }, 0);
    }
#     print Dumper \%gear; exit;

    my($scale, $off_top, $off_left) = (1, 0, 0);
    if ($el_a) {
        my $item    = $gear{$el_a};
        if ($firstwidth) {
            $scale  = $firstwidth / $item->{width};
        }
        $off_top    = $scale * $item->{top}  - 32;
        $off_left   = $scale * $item->{left} - 32;
    }

    if ($el_b) {
        my $item    = $gear{$el_b};
        $off_top    = $scale * $item->{top}  - 32;
    }

    my($Left, $Top, $Right, $Bottom) = (0, 0, $MAX, $MAX);
    for my $id (keys %gear) {
        my $item    = $gear{$id};
        my $title   = $item->{title};
        my $top     = $scale * $item->{top} - $off_top;
        my $left    = $scale * $item->{left} - $off_left;
        my $width   = $scale * $item->{width};
        my $height  = $scale * $item->{height};

        if ($item->{rotate}) {
            my $scaldim = ($width - $height) / 2;
            $top -= $scaldim;
            $left += $scaldim;
            ($width, $height) = ($height, $width);
        }
        my $bottom = $top + $height;
        my $right  = $left + $width;

        %$item = (
            %$item,
            top_s     => $top,
            left_s    => $left,
            width_s   => $width,
            height_s  => $height,
            bottom_s  => $bottom,
            right_s   => $right,
        );

        if ($id eq $el_a || $id eq $el_b || $id eq $el_z) {
            $Top = $top if $top < $Top || $Top <= 0;
            $Left = $left if $left < $Left || $Left <= 0;

            $Bottom = $bottom if $bottom > $Bottom || $Bottom >= $MAX;
            $Right = $right if $right > $Right || $Right >= $MAX;
        }
    }

    for my $id (keys %gear) {
        my $item = $gear{$id};
        if (
            $item->{top_s} > $Bottom || $item->{left_s} > $Right
                ||
            $item->{bottom_s} < $Top || $item->{right_s} < $Left
        ) {
            delete $gear{$id};
        }
    }
}

sub process_node {
    my($node) = @_;
    return if $found{$node->as_HTML}++;

    my $id = $node->attr('id');
    return if $id !~ /^item-\d+$/;
    my $title = $node->attr('title');
    my $rotate = $node->attr('class') =~ /\brotate\b/;
    my $style1 = $node->attr('style');
    my $style2 = $style1;

    unless ($style1 =~ /\bwidth:/ && $style1 =~ /\bheight:/) {
        my($artwork) = $node->look_down(_tag => 'div', class => 'artwork');
        $style2 = $artwork->attr('style');
    }

    my($top)    = $style1 =~    /\btop: *([\d\.]+)px;/;
    my($left)   = $style1 =~   /\bleft: *([\d\.]+)px;/;
    my($width)  = $style2 =~  /\bwidth: *([\d\.]+)px;/;
    my($height) = $style2 =~ /\bheight: *([\d\.]+)px;/;

    $gear{$id} = {
        title   => $title,
        rotate  => $rotate,
        top     => $top,
        left    => $left,
        width   => $width,
        height  => $height,
    };

    if (!$el_a && $title =~ /^\Q$first\E/) {
        $el_a = $id;
    }
    if (!$el_b && $title =~ /^\Q$first_top\E/) {
        $el_b = $id;
    }
    if (!$el_z && $title =~ /^\Q$last\E/) {
        $el_z = $id;
    }
}

__END__
