"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var orders_component_1 = require('./orders/orders.component');
var products_view_component_1 = require('./products-view/products-view.component');
var product_details_component_1 = require('./product-details/product-details.component');
var layout_module_1 = require("../shared/layout/layout.module");
var smartadmin_widgets_module_1 = require("../shared/widgets/smartadmin-widgets.module");
var stats_module_1 = require("../shared/stats/stats.module");
var e_commerce_routing_1 = require("./e-commerce.routing");
var smartadmin_datatable_module_1 = require("../shared/ui/datatable/smartadmin-datatable.module");
var shopping_cart_component_1 = require("./shopping-cart/shopping-cart.component");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var ECommerceModule = (function () {
    function ECommerceModule() {
    }
    ECommerceModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                e_commerce_routing_1.routing,
                layout_module_1.SmartadminLayoutModule,
                smartadmin_widgets_module_1.SmartadminWidgetsModule,
                stats_module_1.StatsModule,
                smartadmin_datatable_module_1.SmartadminDatatableModule,
                ng2_bootstrap_1.CarouselModule,
            ],
            declarations: [
                shopping_cart_component_1.ShoppingCartComponent,
                orders_component_1.OrdersComponent,
                products_view_component_1.ProductsViewComponent, product_details_component_1.ProductDetailsComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ECommerceModule);
    return ECommerceModule;
}());
exports.ECommerceModule = ECommerceModule;
//# sourceMappingURL=e-commerce.module.js.map