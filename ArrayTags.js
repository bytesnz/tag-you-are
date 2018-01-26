"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arraytags_1 = require("./lib/arraytags");
const common_1 = require("./lib/common");
function ArrayTags(separator, tags) {
    this.separator = separator;
    if (tags) {
        this._tags = tags;
    }
    else {
        this._tags = {};
    }
}
exports.ArrayTags = ArrayTags;
Object.assign(ArrayTags.prototype, {
    tags: common_1.tags,
    add: arraytags_1.addArrayTag,
    remove: arraytags_1.removeArrayTag
});
