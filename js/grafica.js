var datos = [1,2,3,4,5,6,7,89,9,64,4,66];

var x = d3.scale.linear()
          .domain([0,d3.max(datos)])
          .range([0,500])


function graficar() {
     d3.select("body")
          .selectAll(".barras")
          .data(datos)
          .enter().append('div')
          .style("width", function (d) {
             return x(d)  + "px"
          })    
          .text(function (d) {
               return d
          })
}
     