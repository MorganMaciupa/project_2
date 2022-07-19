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
// # Median Income	


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