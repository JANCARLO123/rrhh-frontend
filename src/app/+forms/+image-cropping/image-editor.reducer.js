"use strict";
var redux_1 = require("redux");
var jcrop_reducer_1 = require("../../shared/forms/jcrop/reducers/jcrop-reducer");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    apiPanel: jcrop_reducer_1.jcropReducer,
    defaultPanel: jcrop_reducer_1.jcropReducer,
    showSelectionPanel: jcrop_reducer_1.jcropReducer,
    previewPanel: jcrop_reducer_1.jcropReducer,
    animationsPanel: jcrop_reducer_1.jcropReducer,
    stylingPanel: jcrop_reducer_1.jcropReducer,
});
//# sourceMappingURL=image-editor.reducer.js.map