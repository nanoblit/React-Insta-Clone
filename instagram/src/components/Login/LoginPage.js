import React from 'react';
import PropTypes from 'prop-types';
import { LoginForm, LoginInput } from '../../styles/LoginPage';
import { Button } from '../../styles/default';

const LoginPage = ({
  onSubmit, username, password, onChangeUsername, onChangePassword,
}) => (
  <LoginForm onSubmit={onSubmit}>
    <LoginInput onChange={onChangeUsername} value={username} placeholder="username" required />
    <LoginInput onChange={onChangePassword} value={password} placeholder="password" required />
    <Button type="submit">Login</Button>
  </LoginForm>
);

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
};

export default LoginPage;
