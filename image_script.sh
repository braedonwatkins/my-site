magick ~/Downloads/saleh.png \
-colorspace Gray \
-ordered-dither h4x4a \
-threshold 50% \
-transparent white \
-gravity South \
-chop 0x800 \
-fill "#85839d" \
-colorize 100 \
tmp.png

