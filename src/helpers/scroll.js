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

addEventListener('scroll', (event) => {
  const padding = 30;
  var hight = window.pageYOffset;
  navChange(hight, padding);
  siteNavChangehight(hight);

});

function navChange(hight, padding){
  if (hight > padding) {
    document.getElementById("burger-bar-1").classList.add("burger-bar-scroll")
    document.getElementById("burger-bar-2").classList.add("burger-bar-scroll")
    document.getElementById("burger-bar-3").classList.add("burger-bar-scroll")
    
    document.getElementById("header").classList.add("header-scroll");
    document.getElementById("nav").classList.add("nav-links-scroll");
  } else {
    document.getElementById("header").classList.remove("header-scroll");
    document.getElementById("nav").classList.remove("nav-links-scroll");
    Array.from(document.querySelectorAll('.burger-bar-scroll')).forEach((el) => el.classList.remove('burger-bar-scroll'));
  }
}

function siteNavChangehight(hight){
  var padding = 64;
  var sections = ["home", "description", "about", "interested"];
  for (var i = 0; i < sections.length; i++){
    var cordinates = getSectionCordinates(document.getElementById(sections[i]));
    if (hight + (((screen.height - padding) / 2) - screen.height) < cordinates.top){
      var data = [];
      data["hight"] = hight,
      data["cordinates.top"] = cordinates.top,
      data["screen.height"] = screen.height,
      console.log(data)
      Array.from(document.querySelectorAll('.current-section')).forEach((el) => el.classList.remove('current-section'));
      document.getElementById("circle-" + sections[i]).classList.add("current-section");
      break;
    }
  }
}