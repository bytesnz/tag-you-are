import * as common from '../typings/common';

import { addTag, removeTag } from './lib/stringtags';
import { tags } from './lib/common';

export function StringTags(tags?: common.Tags) {
  if (tags) {
    this._tags = tags;
  } else {
    this._tags = <common.Tags>{};
  }
}

Object.assign(StringTags.prototype, {
  tags,
  add: addTag,
  remove: removeTag
});
