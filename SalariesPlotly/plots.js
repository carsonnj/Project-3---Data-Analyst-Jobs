console.log(Salary);

// Create a custom function to return salaries with range greater than 100k.
function Jobs(Data_Analytics) {
  return Data_Analytics.Salary > 100000;
}

// Call the custom function with filter()
let JobsData_Analytics = Salary.filter(Jobs);

// Trace for the Job Titles and Salaries Data
let trace1 = {
    x: JobsData_Analytics.map(row => row.Job_Title),
    y: JobsData_Analytics.map(row => row.Salary),
    type: "bar",
    
};

// Data trace array
let data = [trace1];

// Apply a title to the layout
var layout = {
  title: "Job Title and salaries",
  showlegend: true
  
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout, {displyModeBar: true});
