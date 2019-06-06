import React from 'react';
import PropTypes from 'prop-types';

const LoginPage = ({
  onSubmit, username, password, onChangeUsername, onChangePassword,
}) => (
  <form onSubmit={onSubmit}>
    <input onChange={onChangeUsername} value={username} placeholder="username" />
    <input onChange={onChangePassword} value={password} placeholder="password" />
    <button type="submit">Login</button>
  </form>
);

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
};

export default LoginPage;
