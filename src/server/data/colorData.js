let colorData =  `Blue	B0C4DE	Light Steel Blue
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
Blue	191970	Midnight Blue`;

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