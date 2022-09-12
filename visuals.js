const DUMMY_DATA = [
    { id: 'd1', value: 59.8, region: 'SA'},
    { id: 'd2', value: 33.4, region: 'Ghana'},
    { id: 'd3', value: 32.9, region: 'Mozambique'},
    { id: 'd4', value: 20, region: 'Zambia'},
    { id: 'd5', value: 16.3, region: 'Zimbabwe'},
    { id: 'd6', value: 5.5, region: 'CAR'},
    { id: 'd7', value: 2.6, region: 'Botswana'},
    { id: 'd8', value: 2.3, region: 'Lesotho'},
];

const MARGINS = {top: 10, bottom: 8};
const CHART_WIDTH = 700;
const CHART_HEIGHT = 600 - MARGINS.top - MARGINS.bottom;

const x = d3.scaleBand().rangeRound([0, CHART_WIDTH]).padding(0.2);
const y = d3.scaleLinear().range([CHART_HEIGHT, 0]);

const chartHolder = d3
  .select('#svg1')
  .attr('width', CHART_WIDTH)
  .attr('height', CHART_HEIGHT + MARGINS.top + MARGINS.bottom );

x.domain(DUMMY_DATA.map((d) => d.region));
y.domain([0, d3.max(DUMMY_DATA, d => d.value) + 4])

const chart1 = chartHolder.append('g');

chart1
  .append('g')
  .call(d3.axisBottom(x))
  .attr('transform', `translate(0, ${CHART_HEIGHT})`)
  .attr('color', '#FFFFFF')
  .attr('font-size', 12);

chart1
  .selectAll('.bar1')
  .data(DUMMY_DATA)
  .enter()
  .append('rect')
  .classed('bar1', true)
  .attr('width', x.bandwidth)
  .attr('height', data => CHART_HEIGHT - y(data.value))
  .attr('x', data => x(data.region))
  .attr('y', data => y(data.value));

chart1
  .selectAll('.label')
  .data(DUMMY_DATA)
  .enter()
  .append('text')
  .text((data) => data.value)
  .attr('x', data => x(data.region) + x.bandwidth() / 2)
  .attr('y', data => y(data.value)- 20)
  .attr('text-anchor', 'middle')
  .classed('label', true);


const MY_DATA = [
    { id: 'i1', percent: 63.9, age: '15-24'},
    { id: 'i2', percent: 42.1, age: '25-34'},
    { id: 'i3', percent: 29.4, age: '35-44'},
    { id: 'i4', percent: 21.8, age: '45-54'},
    { id: 'i5', percent: 12.2, age: '55-64'},
];

const margins = {top: 10, bottom: 8};
const chartWidth = 700;
const chartHeight = 500  - margins.top - margins.bottom;

const x_axis = d3.scaleBand().rangeRound([0, chartWidth]).padding(0.2);
const y_axis = d3.scaleLinear().range([chartHeight, 0]);

const chartContainer = d3
  .select('#svg2')
  .attr('width', chartWidth)
  .attr('height', chartHeight  + margins.top + margins.bottom);

x_axis.domain(MY_DATA.map((i) => i.age));
y_axis.domain([0, d3.max(MY_DATA, i => i.percent) + 4])

const chart2 = chartContainer.append('g');

chart2
  .append('g')
  .call(d3.axisBottom(x_axis))
  .attr('transform', `translate(0, ${chartHeight})`)
  .attr('color', '#FFFFFF')
  .attr('font-size', 12);

chart2
  .selectAll('.bar2')
  .data(MY_DATA)
  .enter()
  .append('rect')
  .classed('bar2', true)
  .attr('width', x_axis.bandwidth)
  .attr('height', data => chartHeight - y_axis(data.percent))
  .attr('x', data => x_axis(data.age))
  .attr('y', data => y_axis(data.percent));

chart2
  .selectAll('.label2')
  .data(MY_DATA)
  .enter()
  .append('text')
  .text((data) => data.percent)
  .attr('x', data => x_axis(data.age) + x_axis.bandwidth() / 2)
  .attr('y', data => y_axis(data.percent) - 10)
  .attr('text-anchor', 'middle')
  .classed('label2', true);


