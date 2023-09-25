import { CustomerType, Voucher, handleDiscount } from "./handleDiscount";

const run = () => {
  const totalDiscount = handleDiscount(CustomerType.GOLD_CUSTOMER, 700, Voucher.OFF30);

  console.log(`Ban duoc giam gia ${totalDiscount}% tren tong gia tri don hang`);
};

run();
