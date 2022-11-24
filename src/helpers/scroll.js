import svgUrl from '../../assets/logo/sc-logo_v6_small.svg'
import blueSvgUrl from '../../assets/logo/sc-logo_v6_small-darkblue.svg'

/**
 * @type int
 */
export const navPadding = 30

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
  var hight = window.scrollY;
  navChange(hight, navPadding);
  siteNavChangehight(hight);

});

export function navChange(hight, padding){
  var logo = document.getElementById("nav-logo")

  console.log("hight: " + hight)
  console.log("padding: " + padding)

  if (hight > padding) {
    console.log("in the screen")
    document.getElementById("nav-logo").src = blueSvgUrl;

    document.getElementById("header").classList.add("header-scroll");
    document.getElementById("nav").classList.add("nav-scroll");
    Array.from(document.querySelectorAll('.hamburger-row')).forEach((el) => el.classList.add('hamburger-row-scroll'));

  } else {
    console.log("at the top")
    document.getElementById("nav-logo").src = svgUrl
    document.getElementById("header").classList.remove("header-scroll");
    document.getElementById("nav").classList.remove("nav-scroll");
    Array.from(document.querySelectorAll('.hamburger-row-scroll')).forEach((el) => el.classList.remove('hamburger-row-scroll'));
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
      Array.from(document.querySelectorAll('.current-section')).forEach((el) => el.classList.remove('current-section'));
      document.getElementById("circle-" + sections[i]).classList.add("current-section");
      break;
    }
  }
}