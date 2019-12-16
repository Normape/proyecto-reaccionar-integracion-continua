// Basic unit test
import React from 'react';
import { render } from 'react-dom';
import Login from '../login';

test('calls onSubmit with the username and password when submitted', () => {
  const container = document.createElement('div');
  const handleSubmit = jest.fn();
  render(<Login onSubmit={handleSubmit} />, container);

  const form = container.querySelector('form');
  const { username, password } = form.elements;
  username.value = 'oscles';
  password.value = '0203oscles';
  form.dispatchEvent(new window.Event('submit'));

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    username: username.value,
    password: password.value,
  });
});

test('I submitted my elaboration and feedback', () => {
  const submitted = false; // change this when you've submitted!
  expect(submitted).not.toBe(true);
});
////////////////////////////////
