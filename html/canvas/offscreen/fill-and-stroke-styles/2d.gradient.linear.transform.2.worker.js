// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.gradient.linear.transform.2
// Description:Linear gradient coordinates are relative to the coordinate space at the time of filling
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Linear gradient coordinates are relative to the coordinate space at the time of filling");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.translate(100, 0);
  var g = ctx.createLinearGradient(0, 0, 200, 0);
  g.addColorStop(0, '#f00');
  g.addColorStop(0.25, '#0f0');
  g.addColorStop(0.75, '#0f0');
  g.addColorStop(1, '#f00');
  ctx.fillStyle = g;
  ctx.translate(-150, 0);
  ctx.fillRect(50, 0, 100, 50);
  _assertPixel(canvas, 25,25, 0,255,0,255);
  _assertPixel(canvas, 50,25, 0,255,0,255);
  _assertPixel(canvas, 75,25, 0,255,0,255);
  t.done();
});
done();
