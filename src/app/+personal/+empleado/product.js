"use strict";
var Product = (function () {
    function Product(ProductID, ProductName, Discountinued, UnitsInStock) {
        this.ProductID = ProductID;
        this.ProductName = ProductName;
        this.Discountinued = Discountinued;
        this.UnitsInStock = UnitsInStock;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map