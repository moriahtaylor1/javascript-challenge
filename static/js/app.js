// from data.js
var tableData = data;

// console.log ufo data from data.js
console.log(tableData)

var tbody = d3.select("tbody");

tableData.forEach((UFOSighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function(){
    tbody.html("");
    // select html input
    var inputHTML = d3.select("#datetime");
    // get value property
    var inputValue = inputHTML.property("value");
    // log value
    console.log(inputValue);
    // filter to selected date
    var filteredSightings = tableData.filter(sighting => sighting.datetime === inputValue);
    // log filtered values
    console.log(filteredSightings)

    // populate data in table
    filteredSightings.forEach(function(selectedSighting){
        // log sighting
        console.log(selectedSighting);
        // add row to table
        var row = tbody.append("tr");
        // use `Object.entries` to console log each value and append to table
        Object.entries(selectedSighting).forEach(function([key, value]){
            // log key and value
            console.log(key, value);
            // append cell to row
            var cell = row.append("td");
            // populate cell with value
            cell.text(value);
        });
    });
});