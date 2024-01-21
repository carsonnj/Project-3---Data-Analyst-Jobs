const jsonData = [
    {"Education Level": "High School", "Salary": 90315},
    {"Education Level": "Bachelor's", "Salary": 100255},
    {"Education Level": "Master's", "Salary": 134867},
    {"Education Level": "PhD", "Salary": 176750}
];

// Extract x and y data
const xData = jsonData.map(entry => entry["Education Level"]);
const yData = jsonData.map(entry => entry.Salary);

// Specify different colors for each bar
const colors = ['#85C1E1', '#9ECDE0', '#B8D9DF', '#D3E5DE'];

// Create a Plotly trace
const trace = {
    x: xData,
    y: yData,
    type: 'bar',
    text: yData.map(value => `<b>$${value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</b>`),  // Display bold salary with commas
    textposition: 'auto',  // Automatically position the text above the bars
    marker: {
        color: colors  // customize bar color
    }
};

// Create layout
const layout = {
    title: 'Salary by Education Level',
    xaxis: { title: 'Education Level' },
    yaxis: { title: 'Salary' }
};

// Create Plotly data array
const plotData = [trace];

// Create a Plotly chart
Plotly.newPlot('plotlyChart', plotData, layout);