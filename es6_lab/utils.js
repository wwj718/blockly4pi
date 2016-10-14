/*
export function hello(content) {
  return `hello ${content}`
}
*/
//export hello;   //当只有一个名称时，诸如类，可以使用default，用户 import crc32 from 'crc32'; 不需要{crc32}就可导入
//export/import不支持
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
var p = new Point(1,2)
