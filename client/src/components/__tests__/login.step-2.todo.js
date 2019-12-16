// using helpful utilities
import React from 'react';
// you'll need these:
import { cleanup, renderIntoDocument, fireEvent } from 'react-testing-library';
// note that til-client-test-utils is found in `client/test/til-client-test-utils`
import Login from '../login';

afterEach(cleanup);

test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  // use generate.loginForm() here
  const fakeUser = { username: 'chucknorris', password: '(╯°□°）╯︵ ┻━┻' };
  const handleSubmit = jest.fn();

  const { getByLabelText, getByText } = renderIntoDocument(
    <Login onSubmit={handleSubmit} />,
  );

  const username = getByLabelText(/username/i);
  const password = getByLabelText(/password/i);

  fireEvent.change(username, { target: { value: fakeUser.username } });
  username.value = fakeUser.username;
  password.value = fakeUser.password;

  const submitButton = getByText(/submit/i);
  fireEvent.click(submitButton);

  // Assert
  // no change necessary here
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser);
  expect(submitButton.type).toBe('submit');
});

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-2%20(react-testing-library)&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = false; // change this when you've submitted!
  expect(submitted).not.toBe(true);
});
////////////////////////////////
