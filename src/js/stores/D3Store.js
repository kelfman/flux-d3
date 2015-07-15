import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import d3 from 'd3';

// data storage
let _data = [];

function _drawPoints(el, scales) {
  let g = d3
    .select(el)
    .selectAll('.d3-points');

  let point = g
    .selectAll('.d3-point')
    .data(_data, (d) => d.id);

  // ENTER
  point
    .enter()
    .append('circle')
    .attr('class', 'd3-point');

  // ENTER & UPDATE
  point
    .attr('cx', (d) => scales.x(d.x))
    .attr('cy', (d) => scales.y(d.y))
    .attr('r', (d) => scales.z(d.z));

  // EXIT
  point
    .exit()
    .remove();
}

function create(el, props, state) {
  let svg = d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', props.width)
      .attr('height', props.height);

  svg.append('g')
      .attr('class', 'd3-points');

  this.update(el, state);
}

function update(el, state) {
  // Re-compute the scales, and render the data points
  let scales = this._scales(el, state.domain);
  _drawPoints(el, scales, state.data);
}

function destroy(el) {

}

export default assign({}, BaseStore, {

  dispatcherIndex: Dispatcher.register((payload) => {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.CREATE_CHART:
        // call priv func to modifty data
        this.emitChange();
        break;
    }
  })

});
