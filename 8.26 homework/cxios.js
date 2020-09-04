// cxios
var cxios = {};
// get 
cxios.get = function (url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.send();
    xhr.onload = function (red) {
      resolve(red);
    }
    xhr.onerror = function (da) {
      reject(da);

    }
  })
}