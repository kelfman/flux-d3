import React, {PropTypes} from 'react';
import d3 from 'd3';

export default React.createClass({

  propTypes: {
    data: PropTypes.array,
    domain: PropTypes.object
  },

  componentDidMount: () => {
    let el = this.getDOMNode();
    D3Store.create(el, {
      width: '100%',
      height: '300px'
    }, this.getChartState());
  },

  componentDidUpdate: () => {
    let el = this.getDOMNode();
    D3Store.update(el, this.getChartState());
  },

  getChartState: () => ({
    data: this.props.data,
    domain: this.props.domain
  }),

  componentWillUnmount() {
    let el = this.getDOMNode();
    D3Store.destroy(el);
  },

  render() {
    return (
      <div>
    );
  }
});
