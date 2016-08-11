
var color=function(){
	if(maximum==italy){
		return "blue";
	}
};

var chart = AmCharts.makeChart("container", {
    "type": "serial",
    "theme": "light",
    "legend": {
        "useGraphSettings": true
    },
    "dataProvider": [{
        "month":'jan' ,
        "italy": 6,
        "germany": 5,
        "uk": 3,
        "max":0 ,
        "maximum":6,
       "customBullet":"bullet-black.png",
        //"bulletColor":
        },
        
        {
        "month": 'feb',
        "italy": 4,
        "germany": 2,
        "uk": 6,
        "max":0 ,
        "maximum":6,
        "customBullet":"bullet-green.png"
    }, {
        "month": 'mar',
        "italy": 2,
        "germany": 3,
        "uk": 1,
        "maximum":3,
        "max":0,
        "customBullet":"blue-bullet-icone-5638-32.png"
       
    }, {
        "month": 'apr',
        "italy": 3,
        "germany": 4,
        "uk": 1,
        "maximum":4,
        "max":0,
        "customBullet":"blue-bullet-icone-5638-32.png"
    }, {
        "month": 'may',
        "italy": 5,
        "germany": 1,
        "uk": 2,
        "maximum":5,
        "max":0,
        "customBullet":"bullet-black.png"
    }, {
        "month": 'jun',
        "italy": 3,
        "germany": 2,
        "uk": 1,
        "maximum":6,
        "max":0,
        "customBullet":"bullet-green.png"
    }, {
        "month": 'jul',
        "italy": 1,
        "germany": 2,
        "uk": 3,
        "maximum":3,
        "max":0,
        "customBullet":"bullet-green.png"
    }, {
        "month": 'aug',
        "italy": 2,
        "germany": 1,
        "uk": 5,
        "maximum":5,
        "max":0,
        "customBullet":"bullet-green.png"
    }, {
        "month": 'sep',
        "italy": 3,
        "germany": 5,
        "uk": 2,
        "maximum":5,
        "max":0,
        "customBullet":"blue-bullet-icone-5638-32.png"
    }, {
        "month": 'oct',
        "italy": 4,
        "germany": 3,
        "uk": 6,
        "maximum":6,
        "max":0,
        "customBullet":"bullet-green.png"
    }, {
        "month": 'nov',
        "italy": 1,
        "germany": 2,
        "uk": 4,
        "maximum":4,
        "max":0,
        "customBullet":"bullet-green.png"
    }],
    "valueAxes": [{
        "integersOnly": true,
        "maximum": 10,
        "minimum": 0,
        "reversed": false,
        "axisAlpha": 0,
        "dashLength": 5,
        "gridCount": 10,
        "position": "left",
        "title": "Loan Amount (in crore)"
    }],
    "startDuration": 0.5,
    "graphs": [{
        "balloonText": "loan taken by Italy in [[category]]: [[value]]",
        "hidden": false,
        /*"bullet": "diamond",*/
        "color":"blue",
        "title": "Italy",
        "valueField": "italy",
		"fillAlphas": 0
    }, {
        "balloonText": "loan taken by Germany in [[category]]: [[value]]",
      /*  "bullet": "diamond",*/
        "color":"yellow",
        "title": "Germany",
        "valueField": "germany",
		"fillAlphas": 0
    }, {
        "balloonText": "loan taken by UK in [[category]]: [[value]]",
       /* "bullet": "round",*/
        "color":"green",
        "title": "United Kingdom",
        "valueField": "uk",
		"fillAlphas": 0
    },{
        "balloonText": "max loan taken in [[category]]: [[maximum]]",
        /*"bulletColor":"red",
        "bullet": "diamond",*/
         "title": "max",
         "customBulletField":"customBullet",
         "bulletSize":25,
         "valueField": "max",
 		"fillAlphas": 0
     }],
    "chartCursor": {
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "month",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "fillAlpha": 0.05,
        "fillColor": "#000000",
        "gridAlpha": 0,
        "position": "bottom",
        "title":"month"
    },
    "export": {
    	"enabled": true,
        "position": "bottom-right"
     }
});
