export const computeDiscount = (newPrice: number, oldPrice: number): number =>
  100 - Math.round((newPrice * 100) / oldPrice);

export const computeDiscountWPercent = (
  newPrice: number,
  oldPrice: number
): string => `-${computeDiscount(newPrice, oldPrice)}%`;

export const formatPrice = (price: string): string =>
  price.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
