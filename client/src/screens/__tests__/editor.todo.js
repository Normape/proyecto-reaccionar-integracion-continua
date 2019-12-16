import React from 'react';
import { render } from 'react-dom';
import Editor from '../editor.todo';
import * as utilMock from '../../utils/api';
import Login from '../../components/login';

jest.mock('../../utils/api', () => {
  return {
    posts: {
      create: jest.fn(() => Promise.resolve()),
    },
  };
});

const flushPromises = () => {
  return new Promise(resolver => setTimeout(resolver, 0));
};

test('calls onSubmit with the username and password when submitted', async () => {
  const container = document.createElement('div');

  const fakeUser = { id: 'foobar' };
  const fakeHistory = {
    push: jest.fn(),
  };

  render(<Editor user={fakeUser} history={fakeHistory} />, container);

  const form = container.querySelector('form');
  const { title, content, tags } = form.elements;

  title.value = 'I like twix';
  content.value = 'Like a lot.. Sorta';
  tags.value = 'twix, my, likes';

  const submit = new window.Event('submit');
  form.dispatchEvent(submit);

  await flushPromises();

  expect(fakeHistory.push).toHaveBeenCalledTimes(1);
  expect(fakeHistory.push).toHaveBeenCalledWith('/');

  expect(utilMock.posts.create).toHaveBeenCalledTimes(1);
  expect(utilMock.posts.create).toHaveBeenCalledWith({
    authorId: fakeUser.id,
    title: title.value,
    content: content.value,
    tags: ['twix', 'my', 'likes'],
    date: expect.any(String),
  });
});

// TODO later...
test('snapshot', () => {});
