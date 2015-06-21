import React from 'react';
import ActionCreator from '../actions/ActionCreators';
import App from './App.jsx';

export default React.createClass({
  _onChange() {
    // this.setState(TodoStore.getAll());
  },

  getInitialState() {
    return null; // return TodoStore.getAll();
  },

  componentDidMount() {
    // TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    // TodoStore.removeChangeListener(this._onChange);
  },

  render() {
    // let {state} = this.state;
    return (
      <App />
    );
  }
});
