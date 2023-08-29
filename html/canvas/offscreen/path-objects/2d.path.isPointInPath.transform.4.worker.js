// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.isPointInPath.transform.4
// Description:isPointInPath() handles transformations correctly
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("isPointInPath() handles transformations correctly");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.translate(50, 0);
  ctx.rect(50, 0, 20, 20);
  ctx.translate(0, 50);
  _assertSame(ctx.isPointInPath(60, 10), false, "ctx.isPointInPath(60, 10)", "false");
  _assertSame(ctx.isPointInPath(110, 10), true, "ctx.isPointInPath(110, 10)", "true");
  _assertSame(ctx.isPointInPath(110, 60), false, "ctx.isPointInPath(110, 60)", "false");
  t.done();
});
done();
