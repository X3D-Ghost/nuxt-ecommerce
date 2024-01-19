export const computeDiscount = (newPrice: number, oldPrice: number): number =>
  100 - (newPrice * 100) / oldPrice;

export const computeDiscountWPercent = (
  newPrice: number,
  oldPrice: number
): string => `-${computeDiscount(newPrice, oldPrice)}%`;
