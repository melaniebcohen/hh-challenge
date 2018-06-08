let colorData =  `Blue	E0FFFF	Light Cyan
Blue	AFEEEE	Pale Turquoise
Blue	40E0D0	Turquoise
Blue	B0C4DE	Light Steel Blue
Blue	B0E0E6	Powder Blue
Blue	ADD8E6	Light Blue
Blue	87CEEB	Sky Blue
Blue	87CEFA	Light Sky Blue
Blue	00BFFF	Deep Sky Blue
Blue	1E90FF	Dodger Blue
Blue	000080	Navy
Blue	0000FF	Blue
Blue	6495ED	Cornflower Blue
Blue	4682B4	Steel Blue
Blue	4169E1	Royal Blue
Blue	191970	Midnight Blue
Brown	F5DEB3	Wheat
Brown	DEB887	Burly Wood
Brown	D2B48C	Tan
Brown	BC8F8F	Rosy Brown
Brown	F4A460	Sandy Brown
Brown	DAA520	Goldenrod
Brown	B8860B	Dark Goldenrod
Brown	CD853F	Peru
Brown	D2691E	Chocolate
Brown	8B4513	Saddle Brown
Brown	A0522D	Sienna
Brown	A52A2A	Brown
Gray	DCDCDC	Gainsboro
Gray	D3D3D3	Light Gray
Gray	C0C0C0	Silver
Gray	A9A9A9	Dark Gray
Gray	808080	Gray
Gray	696969	Dim Gray
Gray	778899	Light Slate Gray
Gray	708090	Slate Gray
Gray	2F4F4F	Dark Slate Gray
Gray	000000	Black
Green	556B2F	Dark Olive Green
Green	808000	Olive
Green	6B8E23	Olive Drab
Green	9ACD32	Yellow Green
Green	32CD32	Lime Green
Green	00FF00	Lime
Green	7CFC00	Lawn Green
Green	7FFF00	Chartreuse
Green	ADFF2F	Green Yellow
Green	00FF7F	Spring Green
Green	00FA9A	Medium Spring Green
Green	90EE90	Light Green
Green	98FB98	Pale Green
Green	8FBC8F	Dark Sea Green
Green	66CDAA	Medium Aquamarine
Green	3CB371	Medium Sea Green
Green	2E8B57	Sea Green
Green	228B22	Forest Green
Green	008000	Green
Green	006400	Dark Green
Orange	FF4500	Orange Red
Orange	FF6347	Tomato
Orange	FF7F50	Coral
Orange	FF8C00	Dark Orange
Orange	FFA500	Orange
Red	FFA07A	Light Salmon
Red	FA8072	Salmon
Red	E9967A	Dark Salmon
Red	F08080	Light Coral
Red	CD5C5C	Indian Red
Red	DC143C	Crimson
Red	B22222	Fire Brick
Red	8B0000	Dark Red
Red	FF0000	Red
Yellow	FFFF00	Yellow
Yellow	FFFFE0	Light Yellow
Yellow	FFFACD	Lemon Chiffon
Yellow	FAFAD2	Light Goldenrod Yellow
Yellow	FFEFD5	Papaya Whip
Yellow	FFE4B5	Moccasin
Yellow	FFDAB9	PeachPuff
Yellow	EEE8AA	PaleGoldenrod
Yellow	F0E68C	Khaki
Yellow	BDB76B	DarkKhaki
Yellow	FFD700	Gold
Purple	E6E6FA	Lavender
Purple	D8BFD8	Thistle
Purple	DDA0DD	Plum
Purple	EE82EE	Violet
Purple	DA70D6	Orchid
Purple	FF00FF	Fuchsia
Purple	FF00FF	Magenta
Purple	BA55D3	Medium Orchid
Purple	9370DB	Medium Purple
Purple	8A2BE2	Blue Violet
Purple	9400D3	Dark Violet
Purple	9932CC	Dark Orchid
Purple	8B008B	Dark Magenta
Purple	800080	Purple
Purple	4B0082	Indigo
Purple	483D8B	Dark Slate Blue
Purple	6A5ACD	Slate Blue
Purple	7B68EE	Medium Slate Blue`;

let allColors = colorData.split('\n');

module.exports = allColors.map(color => {
  let colorInfo = color.split('\t');

  let colorObj = {
    colorFamily: colorInfo[0],
    hexCode: colorInfo[1],
    colorName: colorInfo[2],
  };

  return colorObj;
});