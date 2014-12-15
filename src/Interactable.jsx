'use strict';

var interact = require('interact.js');

var _ = require('lodash');

interact.dynamicDrop(true);

var Interactable = {
  getInitialState() {
    return {
      interactState: { }
    };
  },

  componentDidMount() {
    this.interactable = interact(this.getDOMNode());
  },

  componentWillUnmount() {
    this.interactable.unset();
    this.interactable = null;
  },

  updateInteractable(options) {
    this.interactable.set(options);
  },

  setInteractState(state) {
    var interactState = this.state.interactState;

    this.setState({
      interactState: {
        data: _.merge({}, interactState.data, state.data),
        style: _.merge({}, interactState.style, state.style),
      }
    });
  },

  getInteractData() {
    return this.state.interactState.data;
  },

  getInteractStyle(style) {
    return _.merge({}, this.state.interactState.style, style);
  }
};

module.exports = Interactable;
