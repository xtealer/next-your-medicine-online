export const msDelay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
