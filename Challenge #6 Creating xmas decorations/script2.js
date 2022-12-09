function createCube(size) {
  let upper = '';
  let bottom = '';
  let upperFacePattern = '_\\';
  let upperBorderPattern = '/\\';
  let bottomFacePattern = '\\/';
  let bottomBorderPattern = '_/';

  const buildPattern = (pattern, size) => 
  pattern.repeat(size);

  for (let index = 0; index < size; index++) {
    const borderTop =
      buildPattern(' ', size - (index + 1)) +
      buildPattern(upperBorderPattern, index + 1);
    upper = upper.concat(borderTop, buildPattern(upperFacePattern, size), '\n');

    const borderBottom =
      buildPattern(' ', index) + buildPattern(bottomFacePattern, size - index);
    bottom = bottom.concat(
      borderBottom,
      buildPattern(bottomBorderPattern, size),
      '\n'
    );
  }
  return `${upper}${bottom.trimEnd()}`;
}


