import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function onTelegramAuth(user) {
  alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
}

function Login() {
  return (
    <div className="Login">
      <header className="App-header">
        <script async src="https://telegram.org/js/telegram-widget.js?19" data-telegram-login="wizomenbot" data-size="large" data-radius="20" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>
        <script type="text/javascript"></script>
      </header>
    </div>
  );
}

export default Login;
