/**
 * Add an Array tag from the tags Object
 *
 * @this Tags object
 *
 * @param tag Tag to add
 *
 * @returns The new number of documents with the same tag
 */
export function addTag(tag: string): number {
  if (this._tags[tag]) {
    this._tags[tag]++;
  } else {
    this._tags[tag] = 1;
  }

  return this._tags[tag];
};

/**
 * Remove an Array tag from the tags Object
 *
 * @this Tags object
 *
 * @param tag Tag to remove
 *
 * @returns The number of documents with the same tag
 */
export function removeTag (tag: string): number {
  if (this._tags[tag]) {
    if (!--this._tags[tag]) {
      delete this._tags[tag];
    } else {
      return this._tags[tag];
    }
  }
  return 0;
};
