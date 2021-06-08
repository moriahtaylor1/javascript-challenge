// from data.js
var tableData = data;

// console.log ufo data from data.js
console.log(tableData)

var tbody = d3.select("tbody");

//tableData.forEach((UFOSighting) => {
//    var row = tbody.append("tr");
//    Object.entries(UFOSighting).forEach(([key, value]) => {
//        var cell = row.append("td");
//        cell.text(value)
//    });
//});

var UFO_date = d3.select("#datetime").text();

function isDate(datetime){
    return (datetime===UFO_date)
}

tableData.filter(isDate).forEach((UFOSighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value)
    });
});
