d3.json("JSON_data/Aus_Population.json").then(incomingData)

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