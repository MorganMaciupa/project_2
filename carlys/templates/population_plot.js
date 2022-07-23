var source = '../JSON_data/Aus_Population.json'

function buildPlots(state) {
    d3.json(source).then(function (data) {
       console.log(data.map(row => row.State));

       var state = data.map(row => row.State)
       var totals = data.map(row => row.Total)

        // Build the bar chart//
        var trace = {
            type: 'bar',
            x: state,
            y: totals,
            text: state,
            name: "State Populations",
        };

        // Apply the group barmode to the layout
        var layout = {
            title: "State Populations",
};

        // Apply the group barmode to the layout
        var layout = {
            title: "State Populations",
};

        Plotly.newPlot("plot", trace, layout);
    })
};

buildPlots(source)