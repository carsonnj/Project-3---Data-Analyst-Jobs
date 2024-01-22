import './style.css';

document.getElementById("mapButton").onclick = function () {
    location.href = "./data/map.html";
};

document.getElementById("salaryButton").onclick = function () {
    location.href = "./data/salary.html";
};

document.getElementById("sectorButton").onclick = function () {
    location.href = "./data/sector.html";
};


anychart.onDocumentReady(function() {
    var data = [
        {"x": "Group Data Analyst", "value": 527000000, category: "Entry-level"},
        {"x": "Senior Data Analyst", "value": 281000000, category: "Mid-level"},
        {"x": "Data Engineer II", "value": 1090000000, category: "Senior-level"},
        {"x": "Analytics Enginee", "value": 983000000, category: "Mid-level"},
        {"x": "Salesforce Business/Data Analyst", "value": 544000000, category: "Senior-level"},
        {"x": "Data Scientist, Analytics", "value": 422000000, category: "Senior-level"},
        {"x": "Senior Project Manager - Data & Analytics", "value": 281000000, category: "Senior-level"},
        {"x": "BI Data Analyst", "value": 281000000, category: "Entry-level"},
        {"x": "Manager - Data Analytics", "value": 281000000, category: "Entry-level"},
        {"x": "Data Analyst", "value": 281000000, category: "Executive-level"},
        {"x": "Lead Reporting Data Analyst", "value": 281000000, category: "Executive-level"},
    ];
  
   // create a tag (word) cloud chart
    var chart = anychart.tagCloud(data);
  
     // set a chart title
    chart.title('Job Titles vs Experience');
    // set an array of angles at which the words will be laid out
    chart.angles([0])
    // enable a color range
    chart.colorRange(true);
    // set the color range length
    chart.colorRange().length('80%');
  
    // display the word cloud chart
    chart.container("container");
    chart.draw();
  
    // add an event listener
    chart.listen("pointClick", function(e){
    var url = "https://en.wikipedia.org/wiki/" + e.point.get("x");
    window.open(url, "_blank");
  
  });
});