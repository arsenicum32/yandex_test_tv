var testData = [{
  color: 'a',
  class: "pA",
  times: [{
    "starting_time": (new Date()).getTime() - 3500000,
    "ending_time": (new Date()).getTime() + 250000
  }, {
    "starting_time": (new Date()).getTime() - 3500000,
    "ending_time": (new Date()).getTime() + 350000
  }]
}, {
  color: 'b',
  class: "pB",
  times: [{
    "starting_time": (new Date()).getTime(),
    "ending_time": (new Date()).getTime() + 9500000
  }, {
    display: "circle",
    "starting_time": (new Date()).getTime() + 2000000
  }]
}, {
  color: 'c',
  class: "pC",
  times: [{
    "starting_time": (new Date()).getTime() + 500000,
    "ending_time": (new Date()).getTime() + 7000000
  }]
}, ];

var cols = d3.scale.ordinal().range(['#6b0000', '#ef9b0f', '#ffee00'])
  .domain(['a', 'b', 'c']);

var chart = d3.timeline()
  .tickFormat({
    format: d3.time.format("%H:%M"),
    tickTime: d3.time.hours,
    tickInterval: 1,
    tickSize: 1
  })
  .colors(cols)
  .colorProperty('color')
  .showToday()
  .margin({left: 0 , right: 0, top: 0, bottom:0 })
  .showTodayFormat({
    marginTop: 0, 
    marginBottom: 0 , 
    width: 3, 
    color: 'red'
  })
  .itemHeight(10)
  .width(4000)
  //.background('yellow') /// верхняя жёлтая полоска
  .beginning((new Date()).getTime() - 1000 * 3600 * 2)
  .ending((new Date()).getTime() + 1000 * 3600 * 24)
  .scroll(function(x, scale) {
    // x is the current position of the scroll
    // scale is the scale of the axis used
    //alert('scroll');
  }).mouseover(function(d, i, datum) {
    // d is the current rendering object
    // i is the index during d3 rendering
    // datum is the data object
  }).mouseout(function(d, i, datum) {
    // d is the current rendering object
    // i is the index during d3 rendering
    // datum is the data object
  })

var svg;

$(window).on('resize load', function() {
  svg ? svg.remove() : void(0);
  svg = d3.select(".timeline").append("svg").attr({
    "width": $(window).width(),
    "height": 40
  }).style({
    'margin': 0
  }).datum(testData).call(chart);
})