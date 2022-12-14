function getFilesToBackup(lastBackup, changes) {
  let a = changes.map((item) => {
    return item[1] > lastBackup ? item[0] : '';
  });

  return [...new Set(a)]
    .filter((item) => item)
    .sort((a, b) => {
      return a > b ? 1 : -1;
    });
}

