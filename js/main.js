(function(){
  console.log("This is the main js file");
  var months = ["January","February","March","April","June","July","August","September","October","November","December"];
  var data = [{
    month:"January",
    year:"2010",
    killings:[{
      name:"Abc Xyz",
      body_cam:"True",
      race:"African",
      fleeting:"True"
      },{
        name:"Abc Def",
        body_cam:"False",
        race:"African",
        fleeting:"False"
        }]
    }];
var display_data;
d3.json("data.json", function(data) {
  console.log(data);
  display_data = data;

});
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
var currentMonth = display_data1;

    d3.select("#month_text").text(months[currentMonth.month]+" "+currentMonth.year);
    var dots = d3.select("#main-dots").selectAll("span").data(currentMonth.african.cam_on);
    var dot_Enter = dots.enter().append("span").attr("class","dot-african");
    dots = d3.select("#main-dots").selectAll("span").data(currentMonth.hispanic.cam_off);
    console.log(dots);
    dot_Enter = dots.update().append("span").attr("class","dot-latin");


    // dots = d3.select(".african-1").selectAll("li").data(aggregate_time.african.cam_on);
    // dot_Enter = dots.enter().append("li").attr("class","dot-african-small");
    //
    // dots = d3.select(".african-2").selectAll("li").data(aggregate_time.african.cam_off);
    // dot_Enter = dots.enter().append("li").attr("class","dot-african-small");
    console.log(dots);


  d3.select(".african-1")
  .selectAll("li")
  .classed("dot-african-small");

})();
