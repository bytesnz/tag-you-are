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
function addTag(tag) {
    if (this._tags[tag]) {
        this._tags[tag]++;
    }
    else {
        this._tags[tag] = 1;
    }
    return this._tags[tag];
}
exports.addTag = addTag;
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
function removeTag(tag) {
    if (this._tags[tag]) {
        if (!--this._tags[tag]) {
            delete this._tags[tag];
        }
        else {
            return this._tags[tag];
        }
    }
    return 0;
}
exports.removeTag = removeTag;
;
