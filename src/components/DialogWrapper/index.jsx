import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import arrify from 'arrify';
import DialogActions from '../DialogActions';
import DialogContent from '../DialogContent';

type Props = {
  title: String,
  width: number,
  children: any,
  theme: ?Object,
  id: String,
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
    const { children, title, width, theme, id } = this.props;

    const [content] = arrify(children).filter(c => c.type === DialogContent);
    const [actions] = arrify(children).filter(c => c.type === DialogActions);

    const muiTheme = getMuiTheme(theme);

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Dialog
          id={id}
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
