import React from 'react';
import PropTypes from 'prop-types';

const LoginPage = ({
  onSubmit, username, password, onChange,
}) => (
  <form onSubmit={onSubmit}>
    <input onChange={e => onChange(e, 'username')} value={username} placeholder="username" />
    <input onChange={e => onChange(e, 'password')} value={password} placeholder="password" />
    <button type="submit">Login</button>
  </form>
);

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LoginPage;
