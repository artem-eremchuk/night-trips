function rectangle(width, height){
  const topLeftCorner = '\u250C';
  const topRightCorner = '\u2510';
  const bottomRightCorner = '\u2518';
  const bottomLefCorner = '\u2514';
  const verticalLine = '\u2502';
  const horizontalLine = '\u2500';
  let rectangleFigure = '';

  for(let h = 1; h <= height; h += 1){
    for(let w = 1; w <= width; w += 1){
      if (h === 1 && w === 1) {
        rectangleFigure += topLeftCorner;
      } else if (h === 1 && w === width) {
        rectangleFigure += topRightCorner;
      } else if (h === height && w === width) {
        rectangleFigure += bottomRightCorner;
      } else if (h === height && w === 1) {
        rectangleFigure += bottomLefCorner;
      } else if ((h === 1 || h === height) && (w > 1 && w < width)) {
        rectangleFigure += horizontalLine;
      } else if ((w === 1 || w === width) && (h > 1 && h < height)) {
        rectangleFigure += verticalLine;
      } else {
        rectangleFigure += ' ';
      }
    }
    rectangleFigure += '\n';
  }
  return rectangleFigure;
}


rectangle(2, 2)