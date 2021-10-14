var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mysql'
});
 
connection.connect();
 
connection.query("update ds_first set name='wodepig' where name='syx'", function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});


var sql = 'insert into ds_first(name,age) values ?';
var value =[];
var name = ['name','nickname'];
var count =100;
for(x of name){
    for(var y=1;y<=count;y++){
        value.push([`${x}${y}`,y]);
    }
}
http = require("http");

console.log(value);
// connection.query(sql,[value], function (error, results, fields) {
// if (error) throw error;
// console.log(results);


// });
var fs = require('fs');

connection.query('select * from ds_first', function (error, results, fields) {
    if(error){
        console.log('error',error);
    }
    a = JSON.stringify(results); // 把查询到的数据，转换为json格式
            var fs = require('fs');
            fs.writeFile('user.json', a, function (error) {//json文件写入到data文件夹下
                if (error) console.log('json-文件写入失败');
            });
})
// connection.query("select * from ds_first", function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
//   });