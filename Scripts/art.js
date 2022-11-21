/***Exam Data Art ***/

let movieDataLink = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json';

let movieData;

let canvas = d3.select('#myCanvas');
let tooltip = d3.select('#tooltip');

let drawTreeMap = () => {

  let hierarchy = d3.hierarchy(movieData, (node) => {
      return node['children'];
  })
  .sum((node) => {
      return node['value'];
  })
  .sort((node1, node2) => {
      return node2['value'] - node1['value']
  });

  let createTreeMap = d3.treemap()
                        .size([1000, 900]);

  createTreeMap(hierarchy);

  let movieSlates = hierarchy.leaves();
  console.log(movieSlates);

  let block = canvas
          .selectAll('g')
          .data(movieSlates)
          .enter()
          .append('g')
          .attr('transform', (movie) => {
            return 'translate(' + movie['x0'] + ', ' + movie['y0'] + ')'
          });

  block
    .append('rect')
    .attr('class', 'tile')
    .attr('fill', (movie) => {
      let category = movie['data']['category']
      if (category === 'Action') {
        return 'lightblue';
      }else if (category === 'Drama') {
        return 'brown';
      }else if (category === 'Adventure') {
        return 'orange';
      }else if (category === 'Family') {
        return 'khaki';
      }else if (category === 'Comedy') {
        return 'tan';
      }else if (category === 'Animation') {
        return 'pink';
      }else if (category === 'Biography') {
        return 'green';
      }
    }).attr('data-name', (movie) => {
       return movie['data']['name']
    }).attr('data-category', (movie) => {
       return movie['data']['category']
    })
    .attr('data-value', (movie) => {
        return movie['data']['value']
    })
    .attr('width', (movie) => {
       return movie['x1'] - movie['x0']
    })
    .attr('height', (movie) => {
       return movie['y1'] - movie['y0'] 
    })
    .on('mouseover', (movie) => {
      tooltip.transition()
             .style('visibility', 'visible')

      let value = movie['data']

      tooltip.html (
        '$ ' + value + '-'
      )

      tooltip.attr('data-value', movie['data'])
   
    })
    .on('mouseout', (movie) => {
      tooltip.transition()
              .style('visibility', 'hidden')
    });
    

  block
    .append('text')
    .text((movie) => {
       return movie['data']['name']
    })
    .attr('x', 5)
    .attr('y', 20);
}

d3.json(movieDataLink).then(
  (data, error) => {
    if(error) {
      console.log(error)
    } else {
      movieData = data
      console.log(movieData)
      drawTreeMap()
    }
  }
)



  
  
  
  
  
  
