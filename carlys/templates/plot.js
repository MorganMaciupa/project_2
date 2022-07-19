// Use d3.json() to fetch data from JSON file

// DF Titles & Column Headers:

// Energy Tables: Titled 14_15_Energy_Production, 17_18_Energy_Production & 20_21_Energy_Production
// Energy Tables Column Headers: 
// # Reporting entity 	
// # Facility name 	
// # Type 	
// # State 	
// # Electricity production (GJ) 	
// # Electricity production (MWh) 	
// # Total scope 1 emissions (t CO2-e) 	
// # Total scope 2 emissions (t CO2-e) 	
// # Total emissions (t CO2-e) 	
// # Emission intensity (t CO2-e/ MWh) 	
// # Grid connected 	
// # Grid 	
// # Primary fuel
// # Year

// Population Table Titled Aus_Population
// Aus_Population Column Headers:
// # State	
// # Male	
// # Female	
// # Total 

// Income Table Titled Aus_Income
// Aus_Income Column Headers:
// # State	
// # Median_Income	

// VISUALISATIONS:

// Which state has the highest population? Which state has the lowest?
// Using table Aus_Population, columns State & Total
// Trace Population Data
d3.json("data/data.json").then(incomingData)

var trace = {
    x: data.map(row => row.State),
    y: data.map(row => row.Total),
    text: data.map(row => row.State),
    name: "State Populations",
    type: "bar"
};

// Apply the group barmode to the layout
var layout = {
    title: "State Populations",
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", trace, layout);

// Which state has the highest median income? Which state has the lowest?
// Using table Aus_Income, columns State & Median_Income	
d3.json("data/data.json").then(incomingData)

var trace = {
    x: data.map(row => row.State),
    y: data.map(row => row.Median_Income),
    text: data.map(row => row.State),
    name: "State Incomes",
    type: "bar"
};

// Apply the group barmode to the layout
var layout = {
    title: "State Incomes",
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", trace, layout);

// Which state produces the most energy per capita? which state produces the least? 
// Divided into renewable vs non renewable.


// Do states with a higher population have a higher percentage of renewable energy
// production? State population vs the % of energy productions that is renewable.


// Do states with a higher median income have a higher percentage of renewable energy
// production? State median income vs the % of energy productions that is renewable.


// Show each state renewables growth. Ie, a double bar graph, showing the amount
// of renewable plants in WA in 2013 next to the amount of renewable plants in WA in 2020



// Incoming data is internally referred to as incomingData
d3.json("data/data.json").then((incomingData) => {
    function filterMovieRatings(movie) {
        return movie.imdbRating > 8.9;
    }

    // Use filter() to pass the function as its argument
    var filteredMovies = incomingData.filter(filterMovieRatings);

    //  Check to make sure your are filtering your movies.
    console.log(filteredMovies);

    // Use the map method with the arrow function to return all the filtered movie titles.
    var titles = filteredMovies.map(movies => movies.title);

    // Use the map method with the arrow function to return all the filtered movie metascores.
    var ratings = filteredMovies.map(movies => movies.metascore);

    // Check your filtered metascores.
    console.log(ratings);

    // Create your trace.
    var trace = {
        x: titles,
        y: ratings,
        type: "bar"
    };

    // Create the data array for our plot
    var data = [trace];

    // Define the plot layout
    var layout = {
        title: "The highest critically acclaimed movies.",
        xaxis: { title: "Title" },
        yaxis: { title: "Metascore (Critic) Rating" }
    };

    // Plot the chart to a div tag with id "bar-plot"
    Plotly.newPlot("bar-plot", data, layout);
});



// Trace1 for the Greek Data
var trace1 = {
    x: data.map(row => row.pair),
    y: data.map(row => row.greekSearchResults),
    text: data.map(row => row.greekName),
    name: "Greek",
    type: "bar"
};

// Trace 2 for the Roman Data
var trace2 = {
    x: data.map(row => row.pair),
    y: data.map(row => row.romanSearchResults),
    text: data.map(row => row.romanName),
    name: "Roman",
    type: "bar"
};

// Combining both traces
var traceData = [trace1, trace2];

// Apply the group barmode to the layout
var layout = {
    title: "Greek vs Roman gods search results",
    barmode: "group"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);