// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.object.set
// Description:ImageData.data can be modified
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("ImageData.data can be modified");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  var imgdata = ctx.getImageData(0, 0, 10, 10);
  imgdata.data[0] = 100;
  _assertSame(imgdata.data[0], 100, "imgdata.data[\""+(0)+"\"]", "100");
  imgdata.data[0] = 200;
  _assertSame(imgdata.data[0], 200, "imgdata.data[\""+(0)+"\"]", "200");
  t.done();
});
done();
