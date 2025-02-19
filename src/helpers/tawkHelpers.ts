export const toggleSupport = () => {
  try {
    // @ts-ignore
    Tawk_API?.toggle();
  } catch (err) {
    console.log("toggleSupport:error", err);
  }
};
