d3.csv('../../../Resources/Sector.csv').then(data=>{

    let sectors = [...new Set(data.map(obj=> obj.Sector))];
    let values = [];

    
    sectors.forEach(sec => {
        values.push(data.filter(obj=>obj.Sector == sec).length);
    });
    console.log(values);

    var data = [
        {
          x: sectors,
          y: values,
          type: 'bar'
        }
      ];

      var layout = {
        title: {
          text: 'Sector Vs Job Availability',
          font: {
          famity: 'Arial, Italic',
          size: 30,
          color: 'brown'
        },
        xaxis:{
          title: {
            text: 'Sectors',
            font: {
              size: 26,
              color: 'darkgreen',
            }

          },
          tickformate: {
          
          }
        },
        yaxis:{
          title: {
            text: 'Jobs',
            font: {
              size: 26,
              color: 'green',
            }

          },
        },

      
      }
    };
      Plotly.newPlot('jobsCount', data, layout);

});