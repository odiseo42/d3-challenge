"strict";

var d3Shapes = function(){
  //'private' variables
  var _svgCanvas,
      _path;
  var _init = function(divId, extendedShapes){
    //we need to make sure a d3 selector is valid
    var selection = d3.select("#"+divId);
    if (!selection.empty()){
      selection.append("div").attr('id', 'options');

      //creating our canvas
      _svgCanvas = selection.append("svg")
                            .attr("width", 640)
                            .attr("height", 480);

      _path = _svgCanvas.append("path")
                        .attr("transform", "translate(240, 0)");
      //let's bind our shapes data to each button
      d3.select("#options").append("div").selectAll("button")
          .data(d3.entries(extendedShapes))
        .enter().append("button").attr("class", "btn btn-primary btn-large")
          .text(function(d) { return d.key; })
          .on("click", function(d) {
            //every clicked button will draw its shape
            _draw(d.value);
          });
    }
    else {
      throw new Error ("The selector id " +divId+ " does not exist");
    }
  };

  var _draw = function(dString){
    //draw on path canvas, a little animation
    _path.transition()
      .delay(100)
      .duration(1000)
    .attr("d", dString);
  };
  //we only really need to expose init and draw methods
  return {
    init: _init,
    draw: _draw
  }
}();