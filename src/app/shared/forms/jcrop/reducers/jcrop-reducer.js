"use strict";
var clone = require('clone');
var redux_1 = require('redux');
var crop_reducer_1 = require('./crop-reducer');
var options_reducer_1 = require('./options-reducer');
exports.configJcropInitialState = function (storeId) {
    return {
        options: options_reducer_1.defaultOptionsState(storeId),
        crop: crop_reducer_1.defaultCropState(storeId)
    };
};
exports.jcropReducer = redux_1.combineReducers({
    crop: crop_reducer_1.cropReducer,
    options: options_reducer_1.optionsReducer
});
//# sourceMappingURL=jcrop-reducer.js.map