var testFolder = './data'; //data 폴더의 항목들을 배열에 담아 출력하는 것
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})
