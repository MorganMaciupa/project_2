//// IMPORT JSON FILES ////

var pop_source = '../JSON_data/Aus_Population.json'
var income_source = '../JSON_data/Aus_Income.json'
var per_capita_source = '../JSON_data/energy_production_per_capita.json'
var energy_progression_source = '../JSON_data/energy_progression.json'
var population_renewable_energy_source = '../JSON_data/population_renewable_energy.json'
var income_renewable_energy_source = '../JSON_data/income_renewable_energy.json'

// var pop_source = 'JSON_data/Aus_Population.json'
// var income_source = 'JSON_data/Aus_Income.json'
// var per_capita_source = 'JSON_data/energy_production_per_capita.JSON'
// var energy_progression_source = 'JSON_data/energy_progression.JSON'
// var population_renewable_energy_source = 'JSON_data/population_renewable_energy.JSON'
// var income_renewable_energy_source = 'JSON_data/income_renewable_energy.JSON'

//// COLOUR REFERENCES ////
// colorway : ['#f3cec9', '#e7a4b6', '#cd7eaf', '#a262a9', '#6f4d96', '#3d3b72', '#182844']

//cute states colourway
// NSW 1CFFCE (AQUA)
// VIC DEA0FD (LILAC)
// QLD B6E880 (GREEN)
// SA FECB52 (YELLOW)
// WA FF97FF (PINK)
// TAS 2ED9FF (BLUE)
// NT AB63FA (PURPLE)
// ACT FF9DA6 (PEACHY)
// colorway: ['#1CFFCE', '#DEA0FD', '#B6E880', '#FECB52', '#FF97FF', '#2ED9FF', '#AB63FA', '#FF9DA6']


//// STATE POPULATIONS PLOT - COMPLETE ////

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
            colorway: ['#f3cec9']
        };

        Plotly.newPlot("plot", plot_data, layout);
    })
};

buildPopPlot(pop_source)



//// STATE INCOME PLOT - COMPLETE ////

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
            colorway: ['#e7a4b6']
        };

        Plotly.newPlot("income_plot", plot_data, layout);
    })
};



//// STATE ENERGY PRODUCTION PER CAPITA PLOT ////

// function buildPerCapita(state) {
   // d3.json(per_capita_source).then(function (data) {
     //   var arrayObject = Object.values(per_capita_source)
        
       // console.log(arrayObject);
        
        // var state = data.Non_Renewable_MWh_Per_Capita[1]
        // var renewable = data.Renewable_MWh_Per_Capita;
        // var non_renewable = data.Non_Renewable_MWh_Per_Capita;

        // Build the bar chart//
        // var trace_renewable = {
           // type: 'bar',
            // x: state,
            // y: renewable,
            // text: state,
            // name: "Renewable Energy per Capita",
        // };

        // var trace_nonrenewable = {
           // type: 'bar',
            // x: state,
            // y: non_renewable,
            // text: state,
            // name: "Non-Renewable Energy per Capita",
        // }

        // var plot_data = [trace_renewable, trace_nonrenewable];

        // Apply the group barmode to the layout
        // var layout = {
           // title: "Energy Production per Capita",
            // bargap: 0.5,
            // colorway: ['#cd7eaf', '#a262a9']
        // };

        // Plotly.newPlot("per_capita_plot", plot_data, layout);
    // })
// };



//// STATE RENEWABLE & NON RENEWABLE ENERGY PROGRESSIONS (2014 - 2021) PLOT ////
// id="energy_progression_plot"

function buildProgressionPlot(progression) {
    d3.json(energy_progression_source).then(function (data) {
        console.log(data.map(object => object.State));

        var State = data.map(object => object.State)
        var Renewable_Energy_Plants_2014_2015 = data.map(object => object.Renewable_Energy_Plants_2014_2015)
        var Non_Renewable_Energy_Plants_2014_2015 = data.map(object => object.Non_Renewable_Energy_Plants_2014_2015)
        var Renewable_Energy_Plants_2017_2018 = data.map(object => object.Renewable_Energy_Plants_2017_2018)
        var Non_Renewable_Energy_Plants_2017_2018 = data.map(object => object.Non_Renewable_Energy_Plants_2017_2018)
        var Renewable_Energy_Plants_2020_2021 = data.map(object => object.Renewable_Energy_Plants_2020_2021)
        var Non_Renewable_Energy_Plants_2020_2021 = data.map(object => object.Non_Renewable_Energy_Plants_2020_2021)


        function randomNumbersBetween0and9(n) {
            var randomNumberArray = [];
            for (var i = 0; i < n; i++) {
                var randomNumber = Math.floor(Math.random() * 10);
                randomNumberArray.push(randomNumber);
            }
            return randomNumberArray;
        }

        // Create our first trace
        var trace1 = {
            x: [1, 2, 3, 4, 5],
            y: randomNumbersBetween0and9(5),
            type: "scatter"
        };

        // Create our second trace
        var trace2 = {
            x: [1, 2, 3, 4, 5],
            y: randomNumbersBetween0and9(5),
            type: "scatter"
        };

        // The data array consists of both traces
        var data = [trace1, trace2];

        // Note that we omitted the layout object this time
        // This will use default parameters for the layout
        Plotly.newPlot("energy_progression_plot", data);
    })
};



//// STATE RENEWABLE ENERGY PRODUCTION VS STATE POPULATION PLOT ////
// id="population_vs_renewable_energy_plot"

function buildPopulationVsRenewablePlot(PVR) {
    d3.json(population_renewable_energy_source).then(function (data) {
        console.log(data.map(object => object.State));

        var state = data.map(object => object.State)
        var population = data.map(object => object.Population_Total)
        var Renewable_MWh_Per_Capita = data.map(object => object.Renewable_MWh_Per_Capita)


        var trace1 = {
            x: [1, 2, 3, 4, 5],
            y: [1, 6, 3, 6, 1],
            mode: 'markers',
            type: 'scatter',
            name: 'States',
            text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
            marker: { size: 12 }
        };

        var data = [trace1];

        var layout = {
            xaxis: { range: [0.75, 5.25] },
            yaxis: { range: [0, 8] },
            title: 'Income vs Renewable Energy Production Per Capita'
        };


        Plotly.newPlot("population_vs_renewable_energy_plot", data, layout);
    })
};




//// STATE RENEWABLE ENERGY PRODUCTION VS STATE INCOME PLOT ////
// id="income_vs_renewable_energy_plot"

function buildIncomeVsRenewablePlot(IVR) {
    d3.json(income_renewable_energy_source).then(function (data) {
        console.log(data.map(object => object.State));

        var state = data.map(object => object.State)
        var Median_Income = data.map(object => object.Median_Income)
        var Renewable_MWh_Per_Capita = data.map(object => object.Renewable_MWh_Per_Capita)

        var trace1 = {
            x: [1, 2, 3, 4, 5],
            y: [1, 6, 3, 6, 1],
            mode: 'markers',
            type: 'scatter',
            name: 'States',
            text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
            marker: { size: 12 }
        };

        var data = [trace1];

        var layout = {
            xaxis: { range: [0.75, 5.25] },
            yaxis: { range: [0, 8] },
            title: 'Income vs Renewable Energy Production Per Capita'
        };


        Plotly.newPlot("income_vs_renewable_energy_plot", data, layout);
        Plotly.newPlot("plot", plot_data, layout);
    })
};





//// RUN ALL PLOT FUNCTIONS ////

buildPopPlot(pop_source)
buildIncomePlot(income_source)
buildPerCapita(per_capita_source)
buildIncomeVsRenewablePlot(income_renewable_energy_source)
buildPopulationVsRenewablePlot(population_renewable_energy_source)
buildProgressionPlot(energy_progression_source)

