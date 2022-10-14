/**
 * get the cordinates of a html section
 * @param {HTMLElement} element
 * @returns {{left: number, top: number} | null}
 */
export function getSectionCordinates(element) {
  if (!element) {
    return null;
  }

  const rect = element.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

/**
 * scroll to
 * @param {ScrollToOptions} scrollOptions
 */
export function scrollTo(scrollOptions) {
  window.scrollTo({ ...scrollOptions, behavior: "smooth" });
}
