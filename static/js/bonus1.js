/* data route */
var url = "/chart";


function buildPlot() {
  d3.json(url).then((data) => {
    
    // console.log(data.Price);
    // console.log(data.Mileage);

    var chart = c3.generate({
      bindto: '#scatter',
        data: {
          x: "Mileage",
            columns: [
              data.Depreciation,
              data.Mileage,
            ],
            type: 'scatter',
            colors: {
              Mileage: '#363FBC'
            },
          },

        axis: {
            x: {
                label: 'Mileage',
                tick: {
                  fit: false
              }
                },
            y: {
              label: 'Depreciation'
            }
        },
    });


});

}

buildPlot();







