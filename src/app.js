"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handleDiscount_1 = require("./handleDiscount");
var run = function () {
    var totalDiscount = (0, handleDiscount_1.handleDiscount)(null, 700, handleDiscount_1.Voucher.OFF30);
    console.log("Ban duoc giam gia ".concat(totalDiscount, "% tren tong gia tri don hang"));
};
run();
