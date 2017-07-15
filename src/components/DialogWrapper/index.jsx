import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import arrify from 'arrify';
// import theme from '../../../../theme';

type Props = {
  title: String,
  width: number,
  children: any,
}

export default class extends Component {
  props: Props

  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    const { children, title, width } = this.props;

    const [content] = arrify(children).filter(c => c.type.displayName === 'DialogContent');
    const [actions] = arrify(children).filter(c => c.type.displayName === 'DialogActions');

    const muiTheme = getMuiTheme(/*theme*/);

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Dialog
          open={this.state.open}
          actions={arrify(actions.props.children)}
          title={title}
          contentStyle={{ width }}
        >
          {React.cloneElement(content, { ref: 'content' })}
        </Dialog>
      </MuiThemeProvider>
    );
  }
}