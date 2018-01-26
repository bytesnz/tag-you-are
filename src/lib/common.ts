/**
 * Return the tag counts currently stored
 *
 * @this Tags object
 *
 * @returns The tag counts
 */
export function tags() {
  return {
    ...this._tags
  };
}
