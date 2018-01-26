"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arraytags_1 = require("./lib/arraytags");
const stringtags_1 = require("./lib/stringtags");
const common_1 = require("./lib/common");
function Tags(separator, tags) {
    this.separator = separator;
    if (tags) {
        this._tags = tags;
    }
    else {
        this._tags = {};
    }
}
exports.Tags = Tags;
Object.assign(Tags.prototype, {
    tags: common_1.tags,
    add: function add(tag) {
        if (typeof tag === 'string') {
            return stringtags_1.addTag.call(this, tag);
        }
        return arraytags_1.addArrayTag.call(this, tag);
    },
    remove: function remove(tag) {
        if (typeof tag === 'string') {
            return stringtags_1.removeTag.call(this, tag);
        }
        return arraytags_1.removeArrayTag.call(this, tag);
    },
});
