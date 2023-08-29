// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.filter.canvasFilterObject.turbulence.inputTypes.tentative
// Description:Test exceptions on CanvasFilter() turbulence object
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Test exceptions on CanvasFilter() turbulence object");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  const errorTestCases = [
    {baseFrequency: {}},
    {baseFrequency: -1},
    {baseFrequency: [0, -1]},
    {baseFrequency: NaN},
    {baseFrequency: Infinity},
    {baseFrequency: undefined},
    {baseFrequency: -Infinity},
    {baseFrequency: 'test'},

    {numOctaves: {}},
    {numOctaves: -1},
    {numOctaves: NaN},
    {numOctaves: Infinity},
    {numOctaves: undefined},
    {numOctaves: -Infinity},
    {numOctaves: [1, 1]},
    {numOctaves: 'test'},

    {seed: {}},
    {seed: NaN},
    {seed: Infinity},
    {seed: undefined},
    {seed: -Infinity},
    {seed: [1, 1]},
    {seed: 'test'},

    {stitchTiles: {}},
    {stitchTiles: NaN},
    {stitchTiles: Infinity},
    {stitchTiles: undefined},
    {stitchTiles: -Infinity},
    {stitchTiles: [1, 1]},
    {stitchTiles: 'test'},
    {stitchTiles: null},
    {stitchTiles: []},
    {stitchTiles: [10]},
    {stitchTiles: 30},
    {stitchTiles: false},
    {stitchTiles: true},
    {stitchTiles: '10'},
    {stitchTiles: -1},

    {type: {}},
    {type: NaN},
    {type: Infinity},
    {type: undefined},
    {type: -Infinity},
    {type: [1, 1]},
    {type: 'test'},
    {type: null},
    {type: []},
    {type: [10]},
    {type: 30},
    {type: false},
    {type: true},
    {type: '10'},
    {type: -1},
  ]

  // null and [] = 0 when parsed as number
  const workingTestCases = [
    {baseFrequency: null},
    {baseFrequency: []},
    {baseFrequency: [10]},
    {baseFrequency: [10, 3]},
    {baseFrequency: 30},
    {baseFrequency: false},
    {baseFrequency: true},
    {baseFrequency: '10'},

    {numOctaves: null},
    {numOctaves: []},
    {numOctaves: [10]},
    {numOctaves: 30},
    {numOctaves: false},
    {numOctaves: true},
    {numOctaves: '10'},

    {seed: null},
    {seed: []},
    {seed: [10]},
    {seed: 30},
    {seed: false},
    {seed: true},
    {seed: '10'},
    {seed: -1},

    {stitchTiles: 'stitch'},
    {stitchTiles: 'noStitch'},

    {type: 'fractalNoise'},
    {type: 'turbulence'},
  ]

  for (testCase of errorTestCases) {
    const filterOptions = {...{name: 'turbulence'}, ...testCase};
    assert_throws_js(TypeError, function() { new CanvasFilter(filterOptions); });
  }

  for (testCase of workingTestCases) {
    const filterOptions = {...{name: 'turbulence'}, ...testCase};
    _assert(new CanvasFilter(filterOptions) != null, "new CanvasFilter(filterOptions) != null");
  }
  t.done();
});
done();
