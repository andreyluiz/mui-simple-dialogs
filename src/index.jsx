import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import defer from 'es6-defer';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Actions, Content, Wrapper } from './components';

const cleanup = (element) => {
  ReactDOM.unmountComponentAtNode(element);
  document.body.removeChild(element);
};

/* eslint react/no-multi-comp: 0 */
const show = (dialog) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const dlg = ReactDOM.render(dialog, div); // eslint-disable-line react/no-render-return-value

  return dlg.promise.then((result) => {
    setTimeout(() => cleanup(div), 2000);
    return result;
  })
  .catch((e) => {
    setTimeout(() => cleanup(div), 2000);
    throw e;
  });
};

const infoOptions = {
  buttonLabel: 'OK',
  width: 500,
  theme: null,
  id: 'info-dialog'
};

export const showInfo = (title, body, options = {}) => {
  const dialogOptions = Object.assign({}, infoOptions, options);
  class DialogContainer extends Component {
    constructor() {
      super();
      this.deferred = defer();
      this.promise = this.deferred.promise;
    }
    render() {
      return (
        <Wrapper id={dialogOptions.id} title={title} width={dialogOptions.width} theme={options.theme} ref={(node) => { this.dlg = node; }}>
          <Content>{body}</Content>
          <Actions>
            <FlatButton
              id="ok-action"
              primary
              label={dialogOptions.buttonLabel}
              onClick={() => {
                this.deferred.resolve();
                this.dlg.close();
              }}
            />
          </Actions>
        </Wrapper>
      );
    }
  }
  return show(<DialogContainer />);
};

const confirmOptions = {
  cancelButtonLabel: 'Cancel',
  confirmButtonLabel: 'Confirm',
  confirmButtonRaised: false,
  confirmButtonColor: '#5D99CA',
  width: 500,
  theme: null,
  id: 'confirm-dialog',
};

export const showConfirm = (title, body, options = {}) => {
  const dialogOptions = Object.assign({}, confirmOptions, options);
  class DialogContainer extends React.Component {
    constructor() {
      super();
      this.deferred = defer();
      this.promise = this.deferred.promise;
    }
    render() {
      const PrimaryButton = dialogOptions.confirmButtonRaised ? RaisedButton : FlatButton;
      return (
        <Wrapper id={dialogOptions.id} title={title} width={dialogOptions.width} theme={options.theme} ref={(node) => { this.dlg = node; }}>
          <Content>
            <div>{body}</div>
          </Content>
          <Actions>
            <FlatButton
              id="cancel-action"
              primary
              label={dialogOptions.cancelButtonLabel}
              onClick={() => {
                this.deferred.resolve(false);
                this.dlg.close();
              }}
            />
            <PrimaryButton
              id="confirm-action"
              primary={dialogOptions.confirmButtonColor === '#5D99CA'}
              labelColor={dialogOptions.confirmButtonRaised ? '#FFFFFF' : null}
              style={{ marginLeft: 8 }}
              backgroundColor={dialogOptions.confirmButtonRaised ? dialogOptions.confirmButtonColor : null}
              label={dialogOptions.confirmButtonLabel}
              onClick={() => {
                this.deferred.resolve(true);
                this.dlg.close();
              }}
            />
          </Actions>
        </Wrapper>
      );
    }
  }
  return show(<DialogContainer />);
};
