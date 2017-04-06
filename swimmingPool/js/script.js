      google.charts.load('current', {'packages':['timeline']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var container = document.getElementById('timeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Day' });
        dataTable.addColumn({ type: 'string', id: 'Training' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'пн','Аквааєробіка', new Date(0,0,0,8), new Date(0,0,0,10) ],
          [ 'пн','Дитячі групи',  new Date(0,0,0,14),  new Date(0,0,0,16) ],
          [ 'пн','Дорослі групи',  new Date(0,0,0,18),  new Date(0,0,0,20) ],
          [ 'вт','Дитячі групи',    new Date(0,0,0,9),  new Date(0,0,0,11) ],
          [ 'вт','Дитячі групи',    new Date(0,0,0,14),  new Date(0,0,0,16) ],
          [ 'вт','Аквааєробіка', new Date(0,0,0,17), new Date(0,0,0,19) ],
          [ 'вт','Дорослі групи',  new Date(0,0,0,18),  new Date(0,0,0,20) ],
          [ 'ср','Аквааєробіка',  new Date(0,0,0,8),  new Date(0,0,0,10) ],
          [ 'ср','Дитячі групи',  new Date(0,0,0,9),  new Date(0,0,0,11) ],
          [ 'ср','Дитячі групи',  new Date(0,0,0,14),  new Date(0,0,0,16) ],
          [ 'ср','Дорослі групи',  new Date(0,0,0,17),  new Date(0,0,0,20) ],
          [ 'чт','Дитячі групи',  new Date(0,0,0,9),  new Date(0,0,0,11) ],
          [ 'чт','Аквааєробіка',  new Date(0,0,0,17),  new Date(0,0,0,19) ],
          [ 'чт','Дорослі групи',  new Date(0,0,0,18),  new Date(0,0,0,20) ],
          [ 'пт','Дитячі групи',  new Date(0,0,0,13),  new Date(0,0,0,15) ],
          [ 'пт','Дорослі групи',  new Date(0,0,0,17),  new Date(0,0,0,19) ],
          [ 'сб','Аквааєробіка',  new Date(0,0,0,8),  new Date(0,0,0,10) ],
          [ 'сб','Дитячі групи',  new Date(0,0,0,10),  new Date(0,0,0,12) ],
          [ 'сб','Аквааєробіка',  new Date(0,0,0,12),  new Date(0,0,0,14) ],
          [ 'сб','Дитячі групи',  new Date(0,0,0,15),  new Date(0,0,0,17) ],
          [ 'сб','Дорослі групи',  new Date(0,0,0,17),  new Date(0,0,0,19) ]]);

        chart.draw(dataTable);
      }

      