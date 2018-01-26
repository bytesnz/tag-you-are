# tag-you-are

Simple helper library for dealing with document tags/categories

Simple tag objects for keeping count of how many documents you have with
certain tags on them. The tags can either be flat, hierarchical, or a mixture
of both.

There are three prototypes for creating the tag objects

```javascript
  // Import them all
  import {
    StringTags, // For flat string tags
    ArrayTags, // For hierarchical (Array of strings) tags
    Tags // For both flat and hierarchical tags
  } 'tag-you-are';

  // Or by themselves
  import StringTags from 'tag-you-are/StringTags';
  import ArrayTags from 'tag-you-are/ArrayTags';
  import Tags from 'tag-you-are/Tags';

  // Fresh tags
  const tags = StringTags();

  // Pre-loved (pre-loaded) tags
  const tags1 = StringTags({ test: 1, cool: 10, old: 1 });

  // Add documents to tag counts
  tags1.add('cool');
  tags1.add('great');

  // Remove documents to tag counts
  tags1.remove('old');

  // Get the tag counts
  tag.tags(); // { test: 1, cool: 11, great: 1 }

  // Array Tags require a separator, and are given as an array of strings
  const categories = ArrayTags('/', { cool: 1 });

  categories.add(['cool', 'one']);
  categories.add(['cool', 'two']);
  categories.add(['great']);

  categories.tags() // { cool: 2, one: 1, two: 1, great: 1 }

  // Tags needs a separator as well, but tags can be either strings or tags
  const superTags = Tags('.');

  superTags.add('cool');
  superTags.add(['cool', 'super']);
  superTags.remove('woot');
```
