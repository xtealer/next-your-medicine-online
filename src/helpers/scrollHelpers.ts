export const scrollToTop = (id: string) => {
  document.getElementById(id)?.scrollTo({ top: 0, behavior: "smooth" });
};
