var display_data = data;
var currentMonth;
var month_counter = 0;
(function(){
  console.log("This is the main js file");
  var months = ["January","February","March","April","June","July","August","September","October","November","December"];
console.log(display_data);
//console.log(display_data);
var display_data1 = [{
  month:"January",
  year:"2010",
  african:{
    cam_on:[{
      name:"ABC XYZ",
      age:"24",
      city:"Sacramento"
    },{}],
    cam_off:[1,1,1,1],
    fleeting:[1,1,1,1,1],
    not_fleeting:[1,1,1,1,1],
    mental:[1,1],
    not_mental:[1,1,1,1,1]
  },
  white:{
    cam_on:[1,1,1,1,1,1],
    cam_off:[1,1,1,1],
    fleeting:[1,1,1,1,1,1],
    not_fleeting:[1,1,1,1,1],
    mental:[1,1],
    not_mental:[1,1,1,1,1,1]
  },
  hispanic:{
    cam_on:[1,1,1,1,1,1,1,1],
    cam_off:[1,1,1,1],
    fleeting:[1,1,1,1,1],
    not_fleeting:[1,1,1,1,1],
    mental:[1,1],
    not_mental:[1,1,1,1,1]
  }
}]

var currentMonth = display_data[0];
var i =0;
var blacks = [];
var whites = [];
var latinos = [];
for (i=0;i<currentMonth.Black.count;i++){
blacks.push(1);
}
for (i=0;i<currentMonth.White.count;i++){
whites.push(1);
}
for (i=0;i<currentMonth.Hispanic.count;i++){
latinos.push(1);
}
console.log(currentMonth.Hispanic.cam_on);
    d3.select("#month_text").text(months[currentMonth.month]+" "+currentMonth.year);
    var dots = d3.select("#main-dots").selectAll("span").data(currentMonth.blacks);
    var dot_Enter = dots.enter().append("span").attr("class","dot-latin");
    //dots = d3.select("#main-dots").selectAll("span").data(currentMonth.Hispanic.cam_off);
    console.log(dots);
    //dot_Enter = dots.update().append("span").attr("class","dot-latin");


    //dots = d3.select(".african-1").selectAll("li").data(aggregate_time.african.cam_on);
    // dot_Enter = dots.enter().append("li").attr("class","dot-african-small");
    //
    // dots = d3.select(".african-2").selectAll("li").data(aggregate_time.african.cam_off);
    // dot_Enter = dots.enter().append("li").attr("class","dot-african-small");
    console.log(dots);


  d3.select(".african-1")
  .selectAll("li")
  .classed("dot-african-small");


})();
function next_month(event){
month_counter += 1;
currentMonth = display_data[month_counter];
}
