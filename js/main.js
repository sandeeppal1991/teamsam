var display_data = data;
var scrollctr = 5;
var currentMonth;
var aggregate_data = {
  Black_cam_on : [],
  Black_cam_off : [],
  White_cam_on : [],
  White_cam_off : [],
  Hispanic_cam_on : [],
  Hispanic_cam_off : [],
  Black_flee_yes : [],
  Black_flee_no : [],
  White_flee_yes : [],
  White_flee_no : [],
  Hispanic_flee_yes : [],
  Hispanic_flee_no : [],
  Black_mental_illness_yes : [],
  Black_mental_illness_no : [],
  White_mental_illness_yes : [],
  White_mental_illness_no : [],
  Hispanic_mental_illness_yes : [],
  Hispanic_mental_illness_no : []
};
var races = ["Black","White","Hispanic"];
var facets = ["cam_on","cam_off","mental_illness_yes","mental_illness_no","flee_yes","flee_no"];
var month_counter = 0;
'use strict';

// Declare app level module which depends on views, and components

(function(){
  console.log("This is the main js file");
  console.log(display_data);
//console.log(display_data);
  var currentMonth = display_data[0];
  console.log(currentMonth);
  aggregate_data = data_aggregation(currentMonth);

 d3stuff(currentMonth);
 $('[data-toggle="tooltip"]').tooltip();

    //dots = d3.select("#main-dots").selectAll("span").data(currentMonth.Hispanic.cam_off);
    //dot_Enter = dots.update().append("span").attr("class","dot-latin");


    //dots = d3.select(".african-1").selectAll("li").data(aggregate_time.african.cam_on);
    // dot_Enter = dots.enter().append("li").attr("class","dot-african-small");
    //
    // dots = d3.select(".african-2").selectAll("li").data(aggregate_time.african.cam_off);
    // dot_Enter = dots.enter().append("li").attr("class","dot-african-small");

})();
function data_aggregation(currentMonth){
  var selectedVal = $('#facet').val();
  console.log(selectedVal);
  console.log(currentMonth);
  for(var k =0;k<facets.length;k++)
  {
    for( var j=0;j<races.length;j++)
    {
      var len = eval("currentMonth."+races[j]+"."+facets[k]+".length")
      for( var i=0;i<len;i++)
      {
        var pushable_data = eval("currentMonth."+races[j]+"."+facets[k]+"[i]")
        eval("aggregate_data."+races[j]+"_"+facets[k]+".push(pushable_data)");
      }
    }
  }

  console.log("aggregate_data");
  console.log(aggregate_data);
  return aggregate_data;
}
function d3stuff(currentMonth){
  var i =0;
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var blacks = [];
  var whites = [];
  var hispanics = [];
  for (i=0;i<currentMonth.Black.cam_on.length;i++){ blacks.push(currentMonth.Black.cam_on[i]); }
  for (i=0;i<currentMonth.Black.cam_off.length;i++){ blacks.push(currentMonth.Black.cam_off[i]); }
  for (i=0;i<currentMonth.White.cam_on.length;i++){ whites.push(currentMonth.White.cam_on[i]); }
  for (i=0;i<currentMonth.White.cam_off.length;i++){ whites.push(currentMonth.White.cam_off[i]); }
  for (i=0;i<currentMonth.Hispanic.cam_on.length;i++){ hispanics.push(currentMonth.Hispanic.cam_on[i]); }
  for (i=0;i<currentMonth.Hispanic.cam_off.length;i++){ hispanics.push(currentMonth.Hispanic.cam_off[i]); }
  d3.select("#month_text").text(months[currentMonth.month]+" "+currentMonth.year);
  var black = d3.select("#main-dot-af").selectAll("span").data(blacks);
  black.exit().remove();
  black.enter()
  .append("span")
  .attr("class","dot-african")
  .attr("data-toggle","tooltip")
  .attr("data-html","true")
  .attr("title", function(d){return ("Name: <b>"+d.name+"</b> City: <b>"+d.city + "</b> Age: <b>"+ d.age+"</b>")});
  var white = d3.select("#main-dot-wh").selectAll("span").data(whites);
  white.exit().remove();
  white.enter()
  .append("span")
  .attr("class","dot-white")
  .attr("data-toggle","tooltip")
  .attr("data-html","true")
  .attr("title", function(d){return ("Name: <b>"+d.name+"</b> City: <b>"+d.city + "</b> Age: <b>"+ d.age+"</b>")});
  console.log("hispanics this month");
  console.log(hispanics.length);
  var hispanic = d3.select("#main-dot-la").selectAll("span").data(hispanics);
  hispanic.exit().remove();
  hispanic.enter()
  .append("span")
  .attr("class","dot-latin")
  .attr("data-toggle","tooltip")
  .attr("data-html","true")
  .attr("title", function(d){return ("Name: <b>"+d.name+"</b> City: <b>"+d.city + "</b> Age: <b>"+ d.age+"</b>")});
  console.log("Doing D3 stuff now");
  console.log(aggregate_data);

  for(var k =0;k<facets.length;k++)
  {
    for(var j=0;j<races.length;j++)
    {
        d3.select("#"+races[j]+"-"+facets[k]).selectAll("li")
        .data(eval("aggregate_data."+races[j]+"_"+facets[k]))
        .enter()
        .append("li")
        .attr("class","dot-"+races[j]+"-small")
        .attr("data-toggle","tooltip")
        .attr("data-html","true")
        .attr("title", function(d){return ("Name: <b>"+d.name+"</b> City: <b>"+d.city + "</b> Age: <b>"+ d.age+"</b>")});
    }
  }
      // dot_Enter = dots;
}
function next_month(event){

month_counter += 1;
console.log("Next Month"+ month_counter);
currentMonth = display_data[month_counter];
aggregate_data = data_aggregation(currentMonth);
console.log(aggregate_data);
d3stuff(currentMonth);
$('[data-toggle="tooltip"]').tooltip();
}
$(window).scroll(function (event) {

    var scroll = $(window).scrollTop();
    var d3scroll = $('#d3scroll').offset().top;
    if(scroll >= d3scroll+100)
    {
      scrollctr = scrollctr-1;
      if(scrollctr === 0){
      month_counter += 1;
      console.log("Next Month"+ month_counter);
      currentMonth = display_data[month_counter];
      aggregate_data = data_aggregation(currentMonth);
      console.log(aggregate_data);
      d3stuff(currentMonth);
      $('[data-toggle="tooltip"]').tooltip();
      scrollctr=5;
      }
    }
    // Do something
});
