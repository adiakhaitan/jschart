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
        "uk": 3
    }, {
        "month": 'feb',
        "italy": 4,
        "germany": 2,
        "uk": 6
    }, {
        "month": 'mar',
        "italy": 2,
        "germany": 3,
        "uk": 1
    }, {
        "month": 'apr',
        "italy": 3,
        "germany": 4,
        "uk": 1
    }, {
        "month": 'may',
        "italy": 5,
        "germany": 1,
        "uk": 2
    }, {
        "month": 'jun',
        "italy": 3,
        "germany": 2,
        "uk": 1
    }, {
        "month": 'jul',
        "italy": 1,
        "germany": 2,
        "uk": 3
    }, {
        "month": 'aug',
        "italy": 2,
        "germany": 1,
        "uk": 5
    }, {
        "month": 'sep',
        "italy": 3,
        "germany": 5,
        "uk": 2
    }, {
        "month": 'oct',
        "italy": 4,
        "germany": 3,
        "uk": 6
    }, {
        "month": 'nov',
        "italy": 1,
        "germany": 2,
        "uk": 4
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
        "title": "Italy",
        "valueField": "italy",
		"fillAlphas": 0
    }, {
        "balloonText": "loan taken by Germany in [[category]]: [[value]]",
        "bullet": "diamond",
        "title": "Germany",
        "valueField": "germany",
		"fillAlphas": 0
    }, {
        "balloonText": "loan taken by UK in [[category]]: [[value]]",
        "bullet": "round",
        "title": "United Kingdom",
        "valueField": "uk",
		"fillAlphas": 0
    }],
    "chartCursor": {
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "month",
    "categoryAxis": {
        "gridPosition": "start",
        "bullet": "diamond",
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
