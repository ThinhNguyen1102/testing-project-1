"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDiscount = exports.TotalPoint = exports.Discount = exports.CustomerType = exports.Voucher = void 0;
var Voucher;
(function (Voucher) {
    Voucher[Voucher["OFF10"] = 10] = "OFF10";
    Voucher[Voucher["OFF30"] = 30] = "OFF30";
})(Voucher || (exports.Voucher = Voucher = {}));
var CustomerType;
(function (CustomerType) {
    CustomerType[CustomerType["NEW_CUSTOMER"] = 0] = "NEW_CUSTOMER";
    CustomerType[CustomerType["SILVER_CUSTOMER"] = 1] = "SILVER_CUSTOMER";
    CustomerType[CustomerType["GOLD_CUSTOMER"] = 2] = "GOLD_CUSTOMER";
})(CustomerType || (exports.CustomerType = CustomerType = {}));
var Discount;
(function (Discount) {
    Discount[Discount["NEW_CUSTOMER_DISCOUNT"] = 5] = "NEW_CUSTOMER_DISCOUNT";
    Discount[Discount["SILVER_CUSTOMER_DISCOUNT"] = 10] = "SILVER_CUSTOMER_DISCOUNT";
    Discount[Discount["GOLD_CUSTOMER_DISCOUNT"] = 20] = "GOLD_CUSTOMER_DISCOUNT";
    Discount[Discount["TOTAL_GT_500"] = 10] = "TOTAL_GT_500";
    Discount[Discount["TOTAL_GT_1500"] = 20] = "TOTAL_GT_1500";
    Discount[Discount["TOTAL_GT_3000"] = 30] = "TOTAL_GT_3000";
})(Discount || (exports.Discount = Discount = {}));
var TotalPoint;
(function (TotalPoint) {
    TotalPoint[TotalPoint["TOTAL_OFF_10"] = 500] = "TOTAL_OFF_10";
    TotalPoint[TotalPoint["TOTAL_USE_VOURCHER"] = 1000] = "TOTAL_USE_VOURCHER";
    TotalPoint[TotalPoint["TOTAL_OFF_20"] = 1500] = "TOTAL_OFF_20";
    TotalPoint[TotalPoint["TOTAL_OFF_30"] = 3000] = "TOTAL_OFF_30";
})(TotalPoint || (exports.TotalPoint = TotalPoint = {}));
/**
 * @typeOfCustomer loai khach hang
 * @totalPrice tong gia tri don hang don vi 1000VND
 * @voucher ma giam gia co the co hoac khong
 *
 * @return tong phan tram giam gia, neu loi return -1
 */
var handleDiscount = function (typeOfCustomer, totalPrice, voucher) {
    var totalDiscount = 0;
    if (totalPrice < 0)
        return -1;
    //Giam gia dua tren loai khach hang
    switch (typeOfCustomer) {
        case CustomerType.NEW_CUSTOMER:
            totalDiscount += Discount.NEW_CUSTOMER_DISCOUNT;
            break;
        case CustomerType.SILVER_CUSTOMER:
            totalDiscount += Discount.SILVER_CUSTOMER_DISCOUNT;
            break;
        case CustomerType.GOLD_CUSTOMER:
            totalDiscount += Discount.GOLD_CUSTOMER_DISCOUNT;
            break;
    }
    // Giam gia dua tren gia tri don hang
    if (totalPrice >= TotalPoint.TOTAL_OFF_30) {
        totalDiscount += Discount.TOTAL_GT_3000;
    }
    else if (totalPrice >= TotalPoint.TOTAL_OFF_10 && totalPrice < TotalPoint.TOTAL_OFF_20) {
        totalDiscount += Discount.TOTAL_GT_500;
    }
    else if (totalPrice >= TotalPoint.TOTAL_OFF_20 && totalPrice < TotalPoint.TOTAL_OFF_30) {
        totalDiscount += Discount.TOTAL_GT_1500;
    }
    // Giam gia dua tren voucher
    if (voucher && totalPrice >= TotalPoint.TOTAL_USE_VOURCHER) {
        totalDiscount += voucher;
    }
    return totalDiscount;
};
exports.handleDiscount = handleDiscount;
