'use strict';

const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf8').then((content) => {
  const newContentInNewFile = `OLD CONTENT:${content}\nNEW CONTENT: LOREM IPSUM`;
  fs.writeFile('./newFile.txt', newContentInNewFile, 'utf8');
});

/* 

1) Прочесть файл 
2) Создать новый файл, содержимое первого файла 
+ с новой строки "lorem10"

*/
