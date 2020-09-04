// 2.手动实现一个类似于axios的库，get方法
var bxios = {
  version: '30而立'
}
bxios.get = function (url) {
  var promise = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
      resolve(xhr.response);
    }
    xhr.onerror = function () {
      reject(xhr.statusText);
    }
  });

  return promise
}