var pop_source = '../JSON_data/Aus_Population.json'
var income_source = '../JSON_data/Aus_Income.json'

function buildPopPlot(state) {
    d3.json(pop_source).then(function (data) {
      // console.log(data.map(object => object.State));

       var state = data.map(object => object.State)
       var totals = data.map(object => object.Total)

        // Build the bar chart//
        var trace = {
            type: 'bar',
            x: state,
            y: totals,
            text: state,
            name: "State Populations",
        };

        var plot_data = [trace];

        // Apply the group barmode to the layout
        var layout = {
            title: "State Populations",
            bargap: 0.5,
};

        Plotly.newPlot("plot", plot_data, layout);
    })
};

buildPopPlot(pop_source)

function buildIncomePlot(state) {
    d3.json(income_source).then(function (data) {
      // console.log(data.map(object => object.State));

       var state = data.map(object => object.State)
       var income = data.map(object => object.Median_Income)

        // Build the bar chart//
        var trace = {
            type: 'bar',
            x: state,
            y: income,
            text: state,
            name: "Median Income per State",
        };

        var plot_data = [trace];

        // Apply the group barmode to the layout
        var layout = {
            title: "Median Income per State",
            bargap: 0.5,
};

        Plotly.newPlot("income_plot", plot_data, layout);
    })
};

buildPopPlot(pop_source)
buildIncomePlot(income_source)