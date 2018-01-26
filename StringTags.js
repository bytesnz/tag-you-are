"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringtags_1 = require("./lib/stringtags");
const common_1 = require("./lib/common");
function StringTags(tags) {
    if (tags) {
        this._tags = tags;
    }
    else {
        this._tags = {};
    }
}
exports.StringTags = StringTags;
Object.assign(StringTags.prototype, {
    tags: common_1.tags,
    add: stringtags_1.addTag,
    remove: stringtags_1.removeTag
});
