export const upperCase = (str: string) => str.toUpperCase();

export const kebabCase = (str: string) =>
  str.toLowerCase().split(" ").join("-");
