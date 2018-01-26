import test from 'ava';

import * as Tags from './index';

test('StringTags starts from no tags', (t) => {
  const tags = new Tags.StringTags();

  t.deepEqual({}, tags.tags());
});

test('StringTags can start from a given tag', (t) => {
  const tags = new Tags.StringTags({test: 2});

  t.deepEqual({test: 2}, tags.tags());
});

test('StringTags counts up tags properly', (t) => {
  const tags = new Tags.StringTags();

  tags.add('test');
  tags.add('test');

  t.deepEqual({test: 2}, tags.tags());
});

test('StringTags removes tags properly', (t) => {
  const tags = new Tags.StringTags({test: 2});

  tags.remove('test');

  t.deepEqual({test: 1}, tags.tags());

  tags.remove('test');

  t.deepEqual({}, tags.tags());

  tags.remove('test');

  t.deepEqual({}, tags.tags());
});

test('StringTags.add() returns the new count for that tag', (t) => {
  const tags = new Tags.StringTags({test: 2});

  t.is(3, tags.add('test'));
});

test('StringTags.add() returns the new count for that tag', (t) => {
  const tags = new Tags.StringTags({test: 2});

  t.is(1, tags.remove('test'));
});



test('ArrayTags starts from no tags', (t) => {
  const tags = new Tags.ArrayTags('/');

  t.deepEqual({}, tags.tags());
});

test('ArrayTags can start from a given tag', (t) => {
  const tags = new Tags.ArrayTags('/', {test: 2, 'test/ok': 1});

  t.deepEqual({test: 2, 'test/ok': 1}, tags.tags());
});

test('ArrayTags counts up tags properly', (t) => {
  const tags = new Tags.ArrayTags('/');

  tags.add(['test']);

  t.deepEqual({test: 1}, tags.tags());

  tags.add(['test', 'ok']);

  t.deepEqual({test: 2, 'test/ok': 1}, tags.tags());
});

test('ArrayTags removes tags properly', (t) => {
  const tags = new Tags.ArrayTags('/', {test: 3, 'test/ok': 2});

  tags.remove(['test', 'ok']);

  t.deepEqual({test: 2, 'test/ok': 1}, tags.tags());

  tags.remove(['test', 'ok']);

  t.deepEqual({test: 1}, tags.tags());

  tags.remove(['test', 'ok']);

  t.deepEqual({test: 1}, tags.tags());

  tags.remove(['test']);

  t.deepEqual({}, tags.tags());

  tags.remove(['test']);

  t.deepEqual({}, tags.tags());
});

test('ArrayTags.add() returns the new count for that tag', (t) => {
  const tags = new Tags.ArrayTags('/', {test: 2});

  t.is(1, tags.add(['test', 'ok']));
  t.is(4, tags.add(['test']));
});

test('ArrayTags.add() returns the new count for that tag', (t) => {
  const tags = new Tags.ArrayTags('/', {test: 2, 'test/ok': 2});

  t.is(1, tags.remove(['test', 'ok']));
});

test('Tags can be strings', (t) => {
  const tags = new Tags.Tags('/');

  tags.add('test');
  tags.add('test');
  tags.add('another');
  tags.add('another');
  tags.remove('another');

  t.deepEqual({test: 2, another: 1}, tags.tags());
});

test('Tags can be Arrays', (t) => {
  const tags = new Tags.Tags('/');

  tags.add(['test']);
  tags.add(['test']);
  tags.add(['test','another']);
  tags.add(['another']);
  tags.remove(['test']);

  t.deepEqual({test: 2, another: 1, 'test/another': 1}, tags.tags());
});

test('Tags can be both strings Arrays', (t) => {
  const tags = new Tags.Tags('/');

  tags.add('test');
  tags.add(['test']);
  tags.add(['test','another']);
  tags.add('another');
  tags.remove(['test']);

  t.deepEqual({test: 2, another: 1, 'test/another': 1}, tags.tags());
});

test('Tags can be preloaded', (t) => {
  const tags = new Tags.Tags('/', {test: 2, another: 1, 'test/another': 1});

  tags.remove('test');

  t.deepEqual({test: 1, another: 1, 'test/another': 1}, tags.tags());
});
