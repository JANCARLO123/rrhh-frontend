"use strict";
var router_1 = require("@angular/router");
var orders_component_1 = require("./orders/orders.component");
var products_view_component_1 = require("./products-view/products-view.component");
var product_details_component_1 = require("./product-details/product-details.component");
exports.routes = [
    {
        path: 'orders',
        component: orders_component_1.OrdersComponent
    },
    {
        path: 'products-view',
        component: products_view_component_1.ProductsViewComponent
    },
    {
        path: 'product-details',
        component: product_details_component_1.ProductDetailsComponent
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=e-commerce.routing.js.map