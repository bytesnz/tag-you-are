"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Return the tag counts currently stored
 *
 * @this Tags object
 *
 * @returns The tag counts
 */
function tags() {
    return Object.assign({}, this._tags);
}
exports.tags = tags;
