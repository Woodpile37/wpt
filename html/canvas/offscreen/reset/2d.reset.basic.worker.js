// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.reset.basic
// Description:reset clears to transparent black
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("reset clears to transparent black");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.reset();
  _assertPixel(canvas, 0,0, 0,0,0,0);
  _assertPixel(canvas, 50,25, 0,0,0,0);
  _assertPixel(canvas, 25,50, 0,0,0,0);
  _assertPixel(canvas, 100,50, 0,0,0,0);
  _assertPixel(canvas, 0,50, 0,0,0,0);
  _assertPixel(canvas, 100,0, 0,0,0,0);
  t.done();
  t.done();
});
done();
