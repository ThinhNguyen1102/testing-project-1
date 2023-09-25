export enum Voucher {
  OFF10 = 10,
  OFF30 = 30,
}

export enum CustomerType {
  NEW_CUSTOMER,
  SILVER_CUSTOMER,
  GOLD_CUSTOMER,
}

export enum Discount {
  NEW_CUSTOMER_DISCOUNT = 5,
  SILVER_CUSTOMER_DISCOUNT = 10,
  GOLD_CUSTOMER_DISCOUNT = 20,
  TOTAL_GT_500 = 10,
  TOTAL_GT_1500 = 20,
  TOTAL_GT_3000 = 30,
}

export enum TotalPoint {
  TOTAL_OFF_10 = 500,
  TOTAL_USE_VOURCHER = 1000,
  TOTAL_OFF_20 = 1500,
  TOTAL_OFF_30 = 3000,
}

/**
 * @typeOfCustomer loai khach hang
 * @totalPrice tong gia tri don hang don vi 1000VND
 * @voucher ma giam gia co the co hoac khong
 *
 * @return tong phan tram giam gia, neu loi return -1
 */
export const handleDiscount = (typeOfCustomer: CustomerType, totalPrice: number, voucher?: Voucher): number => {
  let totalDiscount: number = 0;

  if (totalPrice < 0) return -1;

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
  } else if (totalPrice >= TotalPoint.TOTAL_OFF_10 && totalPrice < TotalPoint.TOTAL_OFF_20) {
    totalDiscount += Discount.TOTAL_GT_500;
  } else if (totalPrice >= TotalPoint.TOTAL_OFF_20 && totalPrice < TotalPoint.TOTAL_OFF_30) {
    totalDiscount += Discount.TOTAL_GT_1500;
  }

  // Giam gia dua tren voucher
  if (voucher && totalPrice >= TotalPoint.TOTAL_USE_VOURCHER) {
    totalDiscount += voucher;
  }

  return totalDiscount;
};
