var pop_source = '../JSON_data/Aus_Population.json'
var income_source = '../JSON_data/Aus_Income.json'
var per_capita_source = '../JSON_data/energy_production_per_capita'

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



function buildPerCapita(state) {
    d3.json(per_capita_source).then(function (data) {
      console.log(state);

       var state = data.State;
       var renewable = data.Renewable_MWh_Per_Capita;
       var non_renewable = data.Non_Renewable_MWh_Per_Capita;

        // Build the bar chart//
        var trace_renewable = {
            type: 'bar',
            x: state,
            y: renewable,
            text: state,
            name: "Renewable Energy per Capita",
        };

        // var trace_nonrenewable = {
           // type: 'bar'
            // x: state,
            // y: non_renewable
           // text: state,
            //name: "Non-Renewable Energy per Capita",
        // }

        var plot_data = [trace_renewable];

        // Apply the group barmode to the layout
        var layout = {
            title: "Energy Production per Capita",
            bargap: 0.5,
};

        Plotly.newPlot("per_capita_plot", plot_data, layout);
    })
};

buildPopPlot(pop_source)
buildIncomePlot(income_source)
buildPerCapita(per_capita_source)