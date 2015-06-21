import React, {PropTypes} from 'react';
import {AppCanvas, RaisedButton, Styles} from 'material-ui';

const ThemeManager = new Styles.ThemeManager();

export default React.createClass({
  propTypes: {

  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getDefaultProps() {
    return {

    };
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    // let {} = this.props;
    return (
      <AppCanvas>
        <div className="page">
          <h1>Learning Flux/React/d3</h1>
          <p>
            This is just some app
          </p>
          <RaisedButton label="Get started" primary={true} />
        </div>
      </AppCanvas>
    );
  }
});
