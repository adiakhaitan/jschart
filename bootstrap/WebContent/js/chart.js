var chart = new Highcharts.Chart({

    chart: {
        renderTo: 'container',
        backgroundColor: '#f3f3f3'
    },
    
    title: {
        text: 'line Chart '
    },

    credits: {
        enabled: false
    },

    legend: {
        itemWidth: 150,
        adjustChartSize: true
    },

    series: [{
        data: [6, 4, 2],
        name: 'First Series'
    }, {
        data: [7, 3, 2],
        name: 'Second Series'
    }, {
        data: [9, 4, 8],
        name: 'Third Series'
    }, {
        data: [1, 2, 6],
        name: 'Fourth Series'
    }, {
        data: [4, 6, 4],
        name: 'Fifth Series'
    }, {
        data: [1, 2, 7],
        name: 'Sixth Series'
    }, {
        data: [4, 2, 5],
        name: 'Seventh Series'
    }, {
        data: [8, 3, 2],
        name: 'Eighth Series'
    }, {
        data: [4, 5, 6],
        name: 'Ninth Series'
    }]
});