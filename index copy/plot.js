// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData


d3.json("datesfinal.json").then((incomingData) => {
    function filterplaces(vacation) {
        return vacation.ave_rest_rating > 4.2;
    }

    // Use filter() to pass the function as its argument
    var filteredvaca = incomingData.filter(filterplaces);


    console.log(filteredvaca);

    // Use the map method with the arrow function to return all the filtered movie titles.
    var titles = filteredvaca.map(place => place.Places);

    // Use the map method with the arrow function to return all the filtered movie metascores.
    var ratings = filteredvaca.map(place => place.ave_attraction_rating);

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
        title: "The best Destinations with good resraunts and good attractions",
        xaxis: { title: "Destinations" },
        yaxis: { title: "attraction rating" }
    };

    // Plot the chart to a div tag with id "bar-plot"
    Plotly.newPlot("bar-plot", data, layout);
});