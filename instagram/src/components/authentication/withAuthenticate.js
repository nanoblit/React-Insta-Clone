import React from 'react';

const withAuthenticate = Login => Posts => class extends React.Component {
  componentDidMount() {
    localStorage.getItem('auth');
  }

    authed = () => localStorage.getItem('auth');

    render() {
      if (this.authed() !== undefined) {
        return <Login {...this.props} />;
      }
      return <Posts {...this.props} />;
    }
};

export default withAuthenticate;
