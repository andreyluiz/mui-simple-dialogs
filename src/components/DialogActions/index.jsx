import React, { Component } from 'react';

type Props = {
  children: any,
};

export default class DialogActions extends Component {
  props: Props

  getActions() {
    return this.props.children;
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
