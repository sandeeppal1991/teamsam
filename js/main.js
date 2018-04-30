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
var display_data = [{
	'month': 0,
	'year': 2017,
	'African-American': {
		'count': 0,
		'cam_on': [],
		'cam_off': [],
		'mental_illness_yes': [],
		'mental_illness_no': [],
		'flee_yes': [],
		'flee_no': []
	},
	'Hispanic': {
		'count': 0,
		'cam_on': [],
		'cam_off': [],
		'mental_illness_yes': [],
		'mental_illness_no': [],
		'flee_yes': [],
		'flee_no': []
	},
	'White': {
		'count': 0,
		'cam_on': [],
		'cam_off': [],
		'mental_illness_yes': [],
		'mental_illness_no': [],
		'flee_yes': [],
		'flee_no': []
	}
}, {
	'month': 1,
	'year': 2017,
	'African-American': {
		'count': 0,
		'cam_on': [],
		'cam_off': [],
		'mental_illness_yes': [],
		'mental_illness_no': [],
		'flee_yes': [],
		'flee_no': []
	},
	'Hispanic': {
		'count': 0,
		'cam_on': [],
		'cam_off': [],
		'mental_illness_yes': [],
		'mental_illness_no': [],
		'flee_yes': [],
		'flee_no': []
	},
	'White': {
		'count': 0,
		'cam_on': [],
		'cam_off': [],
		'mental_illness_yes': [],
		'mental_illness_no': [],
		'flee_yes': [],
		'flee_no': []
	}
}, {
	'month': 3,
	'year': 2017,
	'African-American': {
		'count': 0,
		'cam_on': [],
		'cam_off': [],
		'mental_illness_yes': [],
		'mental_illness_no': [],
		'flee_yes': [],
		'flee_no': []
	},
	'Hispanic': {
		'count': 1,
		'cam_on': [],
		'cam_off': [{
			'name': 'Jose Gonzales Rendon',
			'age': 36,
			'city': 'Santa Paula'
		}],
		'mental_illness_yes': [],
		'mental_illness_no': [{
			'name': 'Jose Gonzales Rendon',
			'age': 36,
			'city': 'Santa Paula'
		}],
		'flee_yes': [{
			'name': 'Jose Gonzales Rendon',
			'age': 36,
			'city': 'Santa Paula'
		}],
		'flee_no': []
	},
	'White': {
		'count': 0,
		'cam_on': [],
		'cam_off': [],
		'mental_illness_yes': [],
		'mental_illness_no': [],
		'flee_yes': [],
		'flee_no': []
	}
}, {
	'month': 0,
	'year': 2018,
	'African-American': {
		'count': 1,
		'cam_on': [{
			'name': 'Shaleem Tindle',
			'age': 28,
			'city': 'Oakland'
		}],
		'cam_off': [],
		'mental_illness_yes': [{
			'name': 'Shaleem Tindle',
			'age': 28,
			'city': 'Oakland'
		}],
		'mental_illness_no': [],
		'flee_yes': [],
		'flee_no': [{
			'name': 'Shaleem Tindle',
			'age': 28,
			'city': 'Oakland'
		}]
	},
	'Hispanic': {
		'count': 1,
		'cam_on': [],
		'cam_off': [{
			'name': 'Alejandro Valdez',
			'age': 27,
			'city': 'Santa Maria'
		}],
		'mental_illness_yes': [{
			'name': 'Alejandro Valdez',
			'age': 27,
			'city': 'Santa Maria'
		}],
		'mental_illness_no': [],
		'flee_yes': [],
		'flee_no': [{
			'name': 'Alejandro Valdez',
			'age': 27,
			'city': 'Santa Maria'
		}]
	},
	'White': {
		'count': 0,
		'cam_on': [],
		'cam_off': [],
		'mental_illness_yes': [],
		'mental_illness_no': [],
		'flee_yes': [],
		'flee_no': []
	}
}, {
	'month': 1,
	'year': 2018,
	'African-American': {
		'count': 0,
		'cam_on': [],
		'cam_off': [],
		'mental_illness_yes': [],
		'mental_illness_no': [],
		'flee_yes': [],
		'flee_no': []
	},
	'Hispanic': {
		'count': 0,
		'cam_on': [],
		'cam_off': [],
		'mental_illness_yes': [],
		'mental_illness_no': [],
		'flee_yes': [],
		'flee_no': []
	},
	'White': {
		'count': 1,
		'cam_on': [{
			'name': 'Jason Richard Sienze',
			'age': 35,
			'city': 'Nice'
		}],
		'cam_off': [],
		'mental_illness_yes': [],
		'mental_illness_no': [{
			'name': 'Jason Richard Sienze',
			'age': 35,
			'city': 'Nice'
		}],
		'flee_yes': [{
			'name': 'Jason Richard Sienze',
			'age': 35,
			'city': 'Nice'
		}],
		'flee_no': []
	}
}, {
	'month': 3,
	'year': 2018,
	'African-American': {
		'count': 0,
		'cam_on': [],
		'cam_off': [],
		'mental_illness_yes': [],
		'mental_illness_no': [],
		'flee_yes': [],
		'flee_no': []
	},
	'Hispanic': {
		'count': 0,
		'cam_on': [],
		'cam_off': [],
		'mental_illness_yes': [],
		'mental_illness_no': [],
		'flee_yes': [],
		'flee_no': []
	},
	'White': {
		'count': 0,
		'cam_on': [],
		'cam_off': [],
		'mental_illness_yes': [],
		'mental_illness_no': [],
		'flee_yes': [],
		'flee_no': []
	}
}]
console.log(display_data);
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
var currentMonth = display_data[0]

    d3.select("#month_text").text(months[currentMonth.month]+" "+currentMonth.year);
    var dots = d3.select("#main-dots").selectAll("span").data(currentMonth.african.cam_on);
    var dot_Enter = dots.enter().append("span").attr("class","dot-african");
    dots = d3.select("#main-dots").selectAll("span").data(currentMonth.hispanic.cam_off);
    console.log(dots);
    dot_Enter = dots.update().append("span").attr("class","dot-latin");


    dots = d3.select(".african-1").selectAll("li").data(aggregate_time.african.cam_on);
    dot_Enter = dots.enter().append("li").attr("class","dot-african-small");

    dots = d3.select(".african-2").selectAll("li").data(aggregate_time.african.cam_off);
    dot_Enter = dots.enter().append("li").attr("class","dot-african-small");
    console.log(dots);


  d3.select(".african-1")
  .selectAll("li")
  .classed("dot-african-small");

})();
