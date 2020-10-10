/**
 * 事件代理
 * 在DOM事件处理时，利用浏览器冒泡机制为DOM元素添加事件代理
 * 在纯JS编程中，我们也可以使用这样的编程模式，来创建代理对象来操作目标对象
 * 
 */
var delegate = function (client, clientMethod) {
  return function () {
    return clientMethod.apply(client, arguments);
  }
}
var ClassA = function () {
  var _color = "red";
  return {
    getColor: function () {
      console.log("Color: " + _color);
    },
    setColor: function (color) {
      _color = color;
    }
  };
};

var a = new ClassA();
a.getColor();  //Color: red
a.setColor("green");
a.getColor();  //Color: green
console.log("执行代理！");
var d = delegate(a, a.setColor);
d("blue");
console.log("执行完毕！");
a.getColor();  //Color: blue

/**
 * 上面的例子中，通过调用delegate()函数创建的代理函数d来操作对a的修改。
 * 这种方式尽管是使用了apply（call也可以）来实现了调用对象的转移，
 * 但是从编程模式上实现了对某些对象的隐藏，可以保护这些对象不被随便访问和修改。
 */