// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.measure.actualBoundingBox
// Description:Testing actualBoundingBox
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

promise_test(async t => {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  var f = new FontFace("CanvasTest", "url('/fonts/CanvasTest.ttf')");
  f.load();
  self.fonts.add(f);
  await self.fonts.ready;
  ctx.font = '50px CanvasTest';
  ctx.direction = 'ltr';
  ctx.align = 'left'
  ctx.baseline = 'alphabetic'
  // Different platforms may render text slightly different.
  // Values that are nominally expected to be zero might actually vary by a
  // pixel or so if the UA accounts for antialiasing at glyph edges, so we
  // allow a slight deviation.
  _assert(Math.abs(ctx.measureText('A').actualBoundingBoxLeft) <= 1, "Math.abs(ctx.measureText('A').actualBoundingBoxLeft) <= 1");
  _assert(ctx.measureText('A').actualBoundingBoxRight >= 50, "ctx.measureText('A').actualBoundingBoxRight >= 50");
  _assert(ctx.measureText('A').actualBoundingBoxAscent >= 35, "ctx.measureText('A').actualBoundingBoxAscent >= 35");
  _assert(Math.abs(ctx.measureText('A').actualBoundingBoxDescent) <= 1, "Math.abs(ctx.measureText('A').actualBoundingBoxDescent) <= 1");

  _assert(ctx.measureText('D').actualBoundingBoxLeft >= 48, "ctx.measureText('D').actualBoundingBoxLeft >= 48");
  _assert(ctx.measureText('D').actualBoundingBoxLeft <= 52, "ctx.measureText('D').actualBoundingBoxLeft <= 52");
  _assert(ctx.measureText('D').actualBoundingBoxRight >= 75, "ctx.measureText('D').actualBoundingBoxRight >= 75");
  _assert(ctx.measureText('D').actualBoundingBoxRight <= 80, "ctx.measureText('D').actualBoundingBoxRight <= 80");
  _assert(ctx.measureText('D').actualBoundingBoxAscent >= 35, "ctx.measureText('D').actualBoundingBoxAscent >= 35");
  _assert(ctx.measureText('D').actualBoundingBoxAscent <= 40, "ctx.measureText('D').actualBoundingBoxAscent <= 40");
  _assert(ctx.measureText('D').actualBoundingBoxDescent >= 12, "ctx.measureText('D').actualBoundingBoxDescent >= 12");
  _assert(ctx.measureText('D').actualBoundingBoxDescent <= 15, "ctx.measureText('D').actualBoundingBoxDescent <= 15");

  _assert(Math.abs(ctx.measureText('ABCD').actualBoundingBoxLeft) <= 1, "Math.abs(ctx.measureText('ABCD').actualBoundingBoxLeft) <= 1");
  _assert(ctx.measureText('ABCD').actualBoundingBoxRight >= 200, "ctx.measureText('ABCD').actualBoundingBoxRight >= 200");
  _assert(ctx.measureText('ABCD').actualBoundingBoxAscent >= 85, "ctx.measureText('ABCD').actualBoundingBoxAscent >= 85");
  _assert(ctx.measureText('ABCD').actualBoundingBoxDescent >= 37, "ctx.measureText('ABCD').actualBoundingBoxDescent >= 37");
  t.done();
}, "Testing actualBoundingBox");
done();
