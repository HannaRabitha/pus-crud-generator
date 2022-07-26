"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluralize = exports.getId = exports.getFilterFields = exports.filterField = void 0;
const exception_1 = require("@angular-devkit/schematics/src/exception/exception");
const strings_1 = require("@angular-devkit/core/src/utils/strings");
function filterField(field) {
    let show;
    if (!field)
        return false;
    if (!field.show)
        return true;
    if (typeof field.show === 'string') {
        show = field.show.split(' ');
    }
    else {
        show = field.show;
    }
    const filter = 'filter';
    return show.indexOf(filter) > -1;
}
exports.filterField = filterField;
function getFilterFields(model) {
    if (!model.filter)
        return model.fields;
    return model.fields.filter(field => model.filter.indexOf(field.name) > -1);
}
exports.getFilterFields = getFilterFields;
function getId(model) {
    let id = model.fields.find(f => f.isId);
    if (!id)
        throw new exception_1.SchematicsException('No id found');
    return id;
}
exports.getId = getId;
/**
 Returns the plural form of a string
 ```javascript
 'innerHTML'.pluralize()         // 'InnerHTMLs'
 'action_name'.pluralize()       // 'actionNames'
 'css-class-name'.pluralize()    // 'cssClassNames'
 'regex'.pluralize()            // 'regexes'
 'user'.pluralize()             // 'users'
 ```
 */
function pluralize(str) {
    return (0, strings_1.camelize)([/([^aeiou])y$/, /()fe?$/, /([^aeiou]o|[sxz]|[cs]h)$/].map((c, i) => (str = str.replace(c, `$1${'iv'[i] || ''}e`))) && str + 's');
}
exports.pluralize = pluralize;
//# sourceMappingURL=crud-model-utils.js.map