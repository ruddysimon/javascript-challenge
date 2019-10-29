// from data.js
var tableData = data;
console.log(data);

// Select the table body
var tbody = d3.select("tbody");
console.log(tbody);


function buildTable(tableData) {
    tbody.html("");

    // loop through `data` and console log each data
    tableData.forEach(function(ufoData){
        console.log(ufoData);
        // use d3 to append one table row `tr` for each data object
        var row = tbody.append("tr");
        // use `object` to console data value
        Object.values(ufoData).forEach(function(datas) {
            console.log(datas);
            // use d3 to append 1 cell per data report value
            var cell = row.append("td");
            cell.text(datas);
        });
    });
}

function handleClick() {
    // d3.event.preventDefault();

    var date = d3.select("#datetime").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");
    var city = d3.select("#city").property("value");


    var filteredData = tableData;



    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    if (state) {
        filteredData = filteredData.filter(row => row.state === state);
    }

    if (country) {
        filteredData = filteredData.filter(row => row.country === country);
    }

    if (shape) {
        filteredData = filteredData.filter(row => row.shape === shape);
    }

    if (city) {
        filteredData = filteredData.filter(row => row.city === city);
    }

    






    buildTable(filteredData);
}
    

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);



