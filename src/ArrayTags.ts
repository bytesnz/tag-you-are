import * as common from '../typings/common';

import { addArrayTag, removeArrayTag } from './lib/arraytags';
import { tags } from './lib/common';

export function ArrayTags(separator: string, tags?: common.Tags) {
  this.separator = separator;
  if (tags) {
    this._tags = tags;
  } else {
    this._tags = <common.Tags>{};
  }
}

Object.assign(ArrayTags.prototype, {
  tags,
  add: addArrayTag,
  remove: removeArrayTag
});
