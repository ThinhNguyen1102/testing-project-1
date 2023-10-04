import { CustomerType, Voucher, handleDiscount } from "./handleDiscount";

describe("Dong dieu khien", () => {
  it("Do phu C1", () => {
    expect(handleDiscount(CustomerType.NEW_CUSTOMER, -1000)).toBe(-1);
    expect(handleDiscount(CustomerType.NEW_CUSTOMER, 800)).toBe(15);
    expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 2000, Voucher.OFF10)).toBe(40);
    expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 3500)).toBe(50);
  });
});

// describe("Dong dieu khien", () => {
//   it("Do phu C2", () => {
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, -1000)).toBe(-1);
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 800)).toBe(15);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 2000, Voucher.OFF10)).toBe(40);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 3500)).toBe(50);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 200)).toBe(20);
//   });
// });

// describe("Phan hoach tuong duong", () => {
//   it("should be return -1", () => {
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, -100)).toBe(-1);
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, -100, Voucher.OFF10)).toBe(-1);
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, -100, Voucher.OFF30)).toBe(-1);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, -100)).toBe(-1);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, -100, Voucher.OFF10)).toBe(-1);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, -100, Voucher.OFF30)).toBe(-1);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, -100)).toBe(-1);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, -100, Voucher.OFF10)).toBe(-1);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, -100, Voucher.OFF30)).toBe(-1);
//   });
//   it("should be return 5", () => {
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 200)).toBe(5);
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 200, Voucher.OFF10)).toBe(5);
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 200, Voucher.OFF30)).toBe(5);
//   });
//   it("should be return 10", () => {
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 200)).toBe(10);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 200, Voucher.OFF10)).toBe(10);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 200, Voucher.OFF30)).toBe(10);
//   });
//   it("should be return 15", () => {
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 700)).toBe(15);
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 700, Voucher.OFF10)).toBe(15);
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 700, Voucher.OFF30)).toBe(15);
//   });
//   it("should be return 20", () => {
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 700)).toBe(20);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 700, Voucher.OFF10)).toBe(20);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 700, Voucher.OFF30)).toBe(20);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 200)).toBe(20);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 200, Voucher.OFF10)).toBe(20);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 200, Voucher.OFF30)).toBe(20);
//   });
//   it("should be return 25", () => {
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 2200)).toBe(25);
//   });
//   it("should be return 30", () => {
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 2200)).toBe(30);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 700)).toBe(30);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 700, Voucher.OFF10)).toBe(30);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 700, Voucher.OFF30)).toBe(30);
//   });
//   it("should be return 35", () => {
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 2200, Voucher.OFF10)).toBe(35);
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 4000)).toBe(35);
//   });
//   it("should be return gt 35", () => {
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 2200, Voucher.OFF30)).toBe(55);
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 4000, Voucher.OFF10)).toBe(45);
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 4000, Voucher.OFF30)).toBe(65);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 2200, Voucher.OFF10)).toBe(40);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 2200, Voucher.OFF30)).toBe(60);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 4000)).toBe(40);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 4000, Voucher.OFF10)).toBe(50);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 4000, Voucher.OFF30)).toBe(70);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 2200)).toBe(40);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 2200, Voucher.OFF10)).toBe(50);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 2200, Voucher.OFF30)).toBe(70);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 4000)).toBe(50);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 4000, Voucher.OFF10)).toBe(60);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 4000, Voucher.OFF30)).toBe(80);
//   });
// });

// describe("Bang quyet dinh", () => {
//   it("should be return 5", () => {
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 499.9)).toBe(5);
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 499.9, Voucher.OFF10)).toBe(5);
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 499.9, Voucher.OFF30)).toBe(5);
//   });
//   it("should be return 10", () => {
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 499.9)).toBe(10);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 499.9, Voucher.OFF10)).toBe(10);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 499.9, Voucher.OFF30)).toBe(10);
//   });
//   it("should be return 15", () => {
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 500.5)).toBe(15);
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 500.5, Voucher.OFF10)).toBe(15);
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 500.5, Voucher.OFF30)).toBe(15);
//   });
//   it("should be return 20", () => {
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 500.5)).toBe(20);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 500.5, Voucher.OFF10)).toBe(20);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 500.5, Voucher.OFF30)).toBe(20);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 499.9)).toBe(20);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 499.9, Voucher.OFF10)).toBe(20);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 499.9, Voucher.OFF30)).toBe(20);
//   });
//   it("should be return 25", () => {
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 2999)).toBe(25);
//   });
//   it("should be return 30", () => {
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 2999)).toBe(30);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 700)).toBe(30);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 700, Voucher.OFF10)).toBe(30);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 700, Voucher.OFF30)).toBe(30);
//   });
//   it("should be return 35", () => {
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 2999, Voucher.OFF10)).toBe(35);
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 4000)).toBe(35);
//   });
//   it("should be return gt 35", () => {
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 2999, Voucher.OFF30)).toBe(55);
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 4000, Voucher.OFF10)).toBe(45);
//     expect(handleDiscount(CustomerType.NEW_CUSTOMER, 4000, Voucher.OFF30)).toBe(65);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 2999, Voucher.OFF10)).toBe(40);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 2999, Voucher.OFF30)).toBe(60);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 4000)).toBe(40);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 4000, Voucher.OFF10)).toBe(50);
//     expect(handleDiscount(CustomerType.SILVER_CUSTOMER, 4000, Voucher.OFF30)).toBe(70);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 2999)).toBe(40);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 2999, Voucher.OFF10)).toBe(50);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 2999, Voucher.OFF30)).toBe(70);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 4000)).toBe(50);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 4000, Voucher.OFF10)).toBe(60);
//     expect(handleDiscount(CustomerType.GOLD_CUSTOMER, 4000, Voucher.OFF30)).toBe(80);
//   });
// });
