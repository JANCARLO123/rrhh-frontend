"use strict";
var crop_actions_1 = require("../actions/crop.actions");
var clone = require('clone');
var checkBadStoreId = function (state, action) {
    return (state.storeId && !action.storeId) || (state.storeId && state.storeId != action.storeId);
};
exports.defaultCropState = function (storeId) {
    if (storeId === void 0) { storeId = null; }
    return {
        selection: {
            x: null,
            y: null,
            w: null,
            h: null,
            x1: null,
            x2: null
        },
        change: {
            x: null,
            y: null,
            w: null,
            h: null,
            x1: null,
            x2: null
        },
        storeId: storeId
    };
};
exports.cropReducer = function (state, action) {
    if (state === void 0) { state = exports.defaultCropState(); }
    if (checkBadStoreId(state, action)) {
        return state;
    }
    switch (action.type) {
        case crop_actions_1.CropActions.CROP_CHANGE:
            return Object.assign({}, state, {
                change: clone(action.crop)
            });
        case crop_actions_1.CropActions.CROP_SELECT:
        case crop_actions_1.CropActions.CROP_RANDOM_SELECTION:
            return Object.assign({}, state, {
                selection: clone(action.crop)
            });
        case crop_actions_1.CropActions.CROP_FIELD_CHANGE:
            var update = clone(state.selection);
            update[action.field] = action.value;
            return Object.assign({}, state, {
                selection: update
            });
        default:
            return state;
    }
};
//# sourceMappingURL=crop-reducer.js.map