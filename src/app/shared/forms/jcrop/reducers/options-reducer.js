"use strict";
var clone = require('clone');
var options_actions_1 = require("../actions/options.actions");
exports.OPTIONS_DEFAULT_STATE = {
    storeId: null,
    thumbnailSize: 300,
    width: null,
    height: null,
    src: null,
    animateTo: true,
    // Basic Settings
    allowSelect: true,
    allowMove: true,
    allowResize: true,
    trackDocument: true,
    // Styling Options
    baseClass: 'jcrop',
    addClass: null,
    bgColor: 'black',
    bgOpacity: 0.6,
    bgFade: false,
    borderOpacity: 0.4,
    handleOpacity: 0.5,
    handleSize: null,
    aspectRatio: 0,
    keySupport: true,
    createHandles: ['n', 's', 'e', 'w', 'nw', 'ne', 'se', 'sw'],
    createDragbars: ['n', 's', 'e', 'w'],
    createBorders: ['n', 's', 'e', 'w'],
    drawBorders: true,
    dragEdges: true,
    fixedSupport: true,
    touchSupport: null,
    shade: null,
    boxWidth: 0,
    boxHeight: 0,
    boundary: 2,
    fadeTime: 400,
    animationDelay: 20,
    swingSpeed: 3,
    minSelect: [0, 0],
    maxSize: [0, 0],
    minSize: [0, 0],
};
exports.defaultOptionsState = function (storeId) {
    if (storeId === void 0) { storeId = null; }
    return Object.assign({}, clone(exports.OPTIONS_DEFAULT_STATE), { storeId: storeId });
};
var checkBadStoreId = function (state, action) {
    return (state.storeId && !action.storeId) || (state.storeId && state.storeId != action.storeId);
};
exports.optionsReducer = function (state, action) {
    if (state === void 0) { state = exports.defaultOptionsState(); }
    if (checkBadStoreId(state, action)) {
        return state;
    }
    switch (action.type) {
        case (options_actions_1.OptionsActions.TOGGLE_OPTION):
            var update = {};
            update[action.option] = !state[action.option];
            return Object.assign({}, state, update);
        case (options_actions_1.OptionsActions.SET_OPTIONS):
            return Object.assign({}, state, action.options);
        default:
            return state;
    }
};
//# sourceMappingURL=options-reducer.js.map