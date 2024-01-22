const educationJsonData = [
    {"Education Level": "High School", "Salary": 90315},
    {"Education Level": "Bachelor's", "Salary": 100255},
    {"Education Level": "Master's", "Salary": 134867},
    {"Education Level": "PhD", "Salary": 176750}
];

// Extract x and y data
const education_xData = educationJsonData.map(entry => entry["Education Level"]);
const education_yData = educationJsonData.map(entry => entry.Salary);

// Specify different colors for each bar
const education_colors = ['#85C1E1', '#9ECDE0', '#B8D9DF', '#D3E5DE'];

// Create a Plotly trace
const education_trace = {
    x: education_xData,
    y: education_yData,
    type: 'bar',
    text: education_yData.map(value => `<b>$${value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</b>`),  // Display bold salary with commas
    textposition: 'auto',  // Automatically position the text above the bars
    marker: {
        color: education_colors  // customize bar color
    }
};

// Create layout
const education_layout = {
    title: 'Salary by Education Level',
    xaxis: { title: 'Education Level' },
    yaxis: { title: 'Salary' }
};

// Create Plotly data array
const education_plotData = [education_trace];

// Create a Plotly chart
Plotly.newPlot('educationPlotlyChart', education_plotData, education_layout);

// Sample data
const yoeJsonData =  [{"Years of Experience":0.0,"Salary":50331},{"Years of Experience":1.0,"Salary":60100},{"Years of Experience":1.5,"Salary":40000},{"Years of Experience":2.0,"Salary":67567},{"Years of Experience":3.0,"Salary":83249},{"Years of Experience":4.0,"Salary":94347},{"Years of Experience":5.0,"Salary":113658},{"Years of Experience":6.0,"Salary":127538},{"Years of Experience":7.0,"Salary":131831},{"Years of Experience":8.0,"Salary":140756},{"Years of Experience":9.0,"Salary":150643},{"Years of Experience":10.0,"Salary":144815},{"Years of Experience":11.0,"Salary":172547},{"Years of Experience":12.0,"Salary":165667},{"Years of Experience":13.0,"Salary":162133},{"Years of Experience":14.0,"Salary":172379},{"Years of Experience":15.0,"Salary":165565},{"Years of Experience":16.0,"Salary":179700},{"Years of Experience":17.0,"Salary":187637},{"Years of Experience":18.0,"Salary":188335},{"Years of Experience":19.0,"Salary":182257},{"Years of Experience":20.0,"Salary":170584},{"Years of Experience":21.0,"Salary":174261},{"Years of Experience":22.0,"Salary":194902},{"Years of Experience":23.0,"Salary":189154},{"Years of Experience":24.0,"Salary":209071},{"Years of Experience":25.0,"Salary":174633},{"Years of Experience":26.0,"Salary":187717},{"Years of Experience":27.0,"Salary":187923},{"Years of Experience":28.0,"Salary":189775},{"Years of Experience":29.0,"Salary":181437},{"Years of Experience":30.0,"Salary":163340},{"Years of Experience":31.0,"Salary":183027},{"Years of Experience":32.0,"Salary":192541},{"Years of Experience":33.0,"Salary":186401},{"Years of Experience":34.0,"Salary":188651}]

// Extract x and y data
const yoe_xData = yoeJsonData.map(entry => entry["Years of Experience"]);
const yoe_yData = yoeJsonData.map(entry => entry.Salary);

// Create a Plotly trace
const yoe_trace = {
    x: yoe_xData,
    y: yoe_yData,
    mode: 'lines',
    type: 'scatter',
    name: 'Average Salary'
};

// Create layout
const yoe_layout = {
    title: 'Average Salary per Years of Experience',
    xaxis: { title: 'Years of Experience' },
    yaxis: { 
        title: 'Salary',
        tickformat: '$,.0f'  // Format tick values as currency with no decimal places and commas
    }
};

// Create Plotly data array
const yoe_plotData = [yoe_trace];

// Create a Plotly chart
Plotly.newPlot('yearsOfExperienceChart', yoe_plotData, yoe_layout);


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
  title: "Job Title vs Salaries",
  showlegend: true
  
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("salaryDataChart", data, layout, {displyModeBar: true});