export const fixNumberAfterDecimalPoint = (number, decimalLength) => {
  return parseFloat(number.toFixed(decimalLength));
};