import React, {PropTypes} from 'react';
import {AppCanvas, RaisedButton, Styles} from 'material-ui';
import ActionCreator from '../actions/ActionCreators';
import D3Chart from './D3Chart.jsx';

const ThemeManager = new Styles.ThemeManager();

export default React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: () => ({
    muiTheme: ThemeManager.getCurrentTheme()
  }),

  handleCreateChart: () => {
    ActionCreators.createChart();
  },

  render() {
    // let {} = this.props;
    return (
      <AppCanvas>
        <h1>Learning Flux/React/d3</h1>
        <D3Chart/>
        <RaisedButton label="Get started" primary={true} />
      </AppCanvas>
    );
  }

});
