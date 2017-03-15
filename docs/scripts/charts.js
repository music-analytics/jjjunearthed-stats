$(document).ready(function() {
    google.charts.load('current', {packages:['geochart']});
    google.charts.setOnLoadCallback(drawCharts);

  function drawCharts() {
      $('.geoMap').each(function() {
          var dataUrl = $(this).attr('data-url');
          
          $.getJSON(dataUrl, function(json) {
            var data = google.visualization.arrayToDataTable(json);
            var options = {region: 'AU', displayMode: 'markers', colors:['green', 'blue']};
            var chart = new google.visualization.GeoChart($(this)[0]);

            chart.draw(data, options);
          });
      });
  }
});
