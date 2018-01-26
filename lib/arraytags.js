"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Add an Array tag from the tags Object
 *
 * @this Tags object
 *
 * @param tag Tag to add
 *
 * @returns The new number of documents with the same tag
 */
function addArrayTag(tag) {
    const tagId = tag.join(this.separator);
    let tagCopy = tag.concat();
    while (tagCopy.length) {
        const subTag = tagCopy.join(this.separator);
        if (this._tags[subTag]) {
            this._tags[subTag]++;
        }
        else {
            this._tags[subTag] = 1;
        }
        tagCopy.pop();
    }
    return this._tags[tagId];
}
exports.addArrayTag = addArrayTag;
;
/**
 * Remove an Array tag from the tags Object
 *
 * @this Tags object
 *
 * @param tag Tag to remove
 *
 * @returns The number of documents with the same tag
 */
function removeArrayTag(tag) {
    const tagId = tag.join(this.separator);
    let haveChild = (Object.keys(this._tags).find((key) => key.indexOf(tagId + this.separator) === 0) && true) || false;
    let tagCopy = tag.concat();
    while (tagCopy.length) {
        const subTag = tagCopy.join(this.separator);
        if (this._tags[subTag]) {
            if (!--this._tags[subTag] && !haveChild) {
                delete this._tags[subTag];
            }
            else {
                haveChild = true;
            }
        }
        else {
            break;
        }
        tagCopy.pop();
    }
    return this._tags[tagId] || 0;
}
exports.removeArrayTag = removeArrayTag;
;
