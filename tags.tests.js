"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const Tags = require("./index");
ava_1.default('StringTags starts from no tags', (t) => {
    const tags = new Tags.StringTags();
    t.deepEqual({}, tags.tags());
});
ava_1.default('StringTags can start from a given tag', (t) => {
    const tags = new Tags.StringTags({ test: 2 });
    t.deepEqual({ test: 2 }, tags.tags());
});
ava_1.default('StringTags counts up tags properly', (t) => {
    const tags = new Tags.StringTags();
    tags.add('test');
    tags.add('test');
    t.deepEqual({ test: 2 }, tags.tags());
});
ava_1.default('StringTags removes tags properly', (t) => {
    const tags = new Tags.StringTags({ test: 2 });
    tags.remove('test');
    t.deepEqual({ test: 1 }, tags.tags());
    tags.remove('test');
    t.deepEqual({}, tags.tags());
    tags.remove('test');
    t.deepEqual({}, tags.tags());
});
ava_1.default('StringTags.add() returns the new count for that tag', (t) => {
    const tags = new Tags.StringTags({ test: 2 });
    t.is(3, tags.add('test'));
});
ava_1.default('StringTags.add() returns the new count for that tag', (t) => {
    const tags = new Tags.StringTags({ test: 2 });
    t.is(1, tags.remove('test'));
});
ava_1.default('ArrayTags starts from no tags', (t) => {
    const tags = new Tags.ArrayTags('/');
    t.deepEqual({}, tags.tags());
});
ava_1.default('ArrayTags can start from a given tag', (t) => {
    const tags = new Tags.ArrayTags('/', { test: 2, 'test/ok': 1 });
    t.deepEqual({ test: 2, 'test/ok': 1 }, tags.tags());
});
ava_1.default('ArrayTags counts up tags properly', (t) => {
    const tags = new Tags.ArrayTags('/');
    tags.add(['test']);
    t.deepEqual({ test: 1 }, tags.tags());
    tags.add(['test', 'ok']);
    t.deepEqual({ test: 2, 'test/ok': 1 }, tags.tags());
});
ava_1.default('ArrayTags removes tags properly', (t) => {
    const tags = new Tags.ArrayTags('/', { test: 3, 'test/ok': 2 });
    tags.remove(['test', 'ok']);
    t.deepEqual({ test: 2, 'test/ok': 1 }, tags.tags());
    tags.remove(['test', 'ok']);
    t.deepEqual({ test: 1 }, tags.tags());
    tags.remove(['test', 'ok']);
    t.deepEqual({ test: 1 }, tags.tags());
    tags.remove(['test']);
    t.deepEqual({}, tags.tags());
    tags.remove(['test']);
    t.deepEqual({}, tags.tags());
});
ava_1.default('ArrayTags.add() returns the new count for that tag', (t) => {
    const tags = new Tags.ArrayTags('/', { test: 2 });
    t.is(1, tags.add(['test', 'ok']));
    t.is(4, tags.add(['test']));
});
ava_1.default('ArrayTags.add() returns the new count for that tag', (t) => {
    const tags = new Tags.ArrayTags('/', { test: 2, 'test/ok': 2 });
    t.is(1, tags.remove(['test', 'ok']));
});
ava_1.default('Tags can be strings', (t) => {
    const tags = new Tags.Tags('/');
    tags.add('test');
    tags.add('test');
    tags.add('another');
    tags.add('another');
    tags.remove('another');
    t.deepEqual({ test: 2, another: 1 }, tags.tags());
});
ava_1.default('Tags can be Arrays', (t) => {
    const tags = new Tags.Tags('/');
    tags.add(['test']);
    tags.add(['test']);
    tags.add(['test', 'another']);
    tags.add(['another']);
    tags.remove(['test']);
    t.deepEqual({ test: 2, another: 1, 'test/another': 1 }, tags.tags());
});
ava_1.default('Tags can be both strings Arrays', (t) => {
    const tags = new Tags.Tags('/');
    tags.add('test');
    tags.add(['test']);
    tags.add(['test', 'another']);
    tags.add('another');
    tags.remove(['test']);
    t.deepEqual({ test: 2, another: 1, 'test/another': 1 }, tags.tags());
});
ava_1.default('Tags can be preloaded', (t) => {
    const tags = new Tags.Tags('/', { test: 2, another: 1, 'test/another': 1 });
    tags.remove('test');
    t.deepEqual({ test: 1, another: 1, 'test/another': 1 }, tags.tags());
});
