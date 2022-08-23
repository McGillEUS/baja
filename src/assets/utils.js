// Get the x or y coord for the cursor / touch in window (x is default)
export function getCoord(e, x = true) {
  if (e.type == "touchstart" || e.type == "touchmove") {
    let eTouch = typeof e.originalEvent === "undefined" ? e : e.originalEvent;
    let touch = eTouch.touches[0] || eTouch.changedTouches[0];
    return x ? touch.clientX : touch.clientY;
  } else return x ? e.clientX : e.clientY;
}

// Scroll to anchor on same page
export function anchorLink(anchor) {
  document.getElementById(anchor).scrollIntoView();
}
