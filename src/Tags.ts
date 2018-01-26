import * as common from '../typings/common';

import { addArrayTag, removeArrayTag } from './lib/arraytags';
import { addTag, removeTag } from './lib/stringtags';
import { tags } from './lib/common';

export function Tags(separator: string, tags?: common.Tags) {
  this.separator = separator;
  if (tags) {
    this._tags = tags;
  } else {
    this._tags = <common.Tags>{};
  }
}

Object.assign(Tags.prototype, {
  tags,
  add: function add(tag: string | Array<string>) {
    if (typeof tag === 'string') {
      return addTag.call(this, tag);
    }

    return addArrayTag.call(this, tag);
  },
  remove: function remove(tag: string | Array<string>) {
    if (typeof tag === 'string') {
      return removeTag.call(this, tag);
    }

    return removeArrayTag.call(this, tag);
  },
});
