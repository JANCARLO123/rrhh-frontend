"use strict";
var font_awesome_component_1 = require("./+font-awesome/font-awesome.component");
var glyphicons_component_1 = require("./+glyphicons/glyphicons.component");
var flags_component_1 = require("./+flags/flags.component");
var router_1 = require("@angular/router");
exports.iconsRoutes = [{
        path: 'font-awesome',
        component: font_awesome_component_1.FontAwesomeComponent
    },
    {
        path: 'glyphicons',
        component: glyphicons_component_1.GlyphiconsComponent
    },
    {
        path: 'flags',
        component: flags_component_1.FlagsComponent
    }
];
exports.iconsRouting = router_1.RouterModule.forChild(exports.iconsRoutes);
//# sourceMappingURL=icons.routing.js.map