// Sample data
const jsonData =  [{"Years of Experience":0.0,"Salary":50331},{"Years of Experience":1.0,"Salary":60100},{"Years of Experience":1.5,"Salary":40000},{"Years of Experience":2.0,"Salary":67567},{"Years of Experience":3.0,"Salary":83249},{"Years of Experience":4.0,"Salary":94347},{"Years of Experience":5.0,"Salary":113658},{"Years of Experience":6.0,"Salary":127538},{"Years of Experience":7.0,"Salary":131831},{"Years of Experience":8.0,"Salary":140756},{"Years of Experience":9.0,"Salary":150643},{"Years of Experience":10.0,"Salary":144815},{"Years of Experience":11.0,"Salary":172547},{"Years of Experience":12.0,"Salary":165667},{"Years of Experience":13.0,"Salary":162133},{"Years of Experience":14.0,"Salary":172379},{"Years of Experience":15.0,"Salary":165565},{"Years of Experience":16.0,"Salary":179700},{"Years of Experience":17.0,"Salary":187637},{"Years of Experience":18.0,"Salary":188335},{"Years of Experience":19.0,"Salary":182257},{"Years of Experience":20.0,"Salary":170584},{"Years of Experience":21.0,"Salary":174261},{"Years of Experience":22.0,"Salary":194902},{"Years of Experience":23.0,"Salary":189154},{"Years of Experience":24.0,"Salary":209071},{"Years of Experience":25.0,"Salary":174633},{"Years of Experience":26.0,"Salary":187717},{"Years of Experience":27.0,"Salary":187923},{"Years of Experience":28.0,"Salary":189775},{"Years of Experience":29.0,"Salary":181437},{"Years of Experience":30.0,"Salary":163340},{"Years of Experience":31.0,"Salary":183027},{"Years of Experience":32.0,"Salary":192541},{"Years of Experience":33.0,"Salary":186401},{"Years of Experience":34.0,"Salary":188651}]

// Extract x and y data
const xData = jsonData.map(entry => entry["Years of Experience"]);
const yData = jsonData.map(entry => entry.Salary);

// Create a Plotly trace
const trace = {
    x: xData,
    y: yData,
    mode: 'lines',
    type: 'scatter',
    name: 'Average Salary'
};

// Create layout
const layout = {
    title: 'Average Salary per Years of Experience',
    xaxis: { title: 'Years of Experience' },
    yaxis: { 
        title: 'Salary',
        tickformat: '$,.0f'  // Format tick values as currency with no decimal places and commas
    }
};

// Create Plotly data array
const plotData = [trace];

// Create a Plotly chart
Plotly.newPlot('plotlyChart', plotData, layout);