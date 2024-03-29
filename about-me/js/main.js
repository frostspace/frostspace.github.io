/*Ripple effect */
function applyCursorRippleEffect(t) {
  const e = document.createElement("div");
  e.className = "ripple", document.body.appendChild(e), e.style.left = t.clientX + "px", e.style.top = t.clientY + "px", e.style.animation = "ripple-effect .4s  linear", e.onanimationend = () => {
    document.body.removeChild(e)
  }
}

document.onclick = () => applyCursorRippleEffect(event);
try {
  const c = document.body.getElementsByTagName("*");
  for (let t of c) t.onclick = t => t.stopPropagationw()
} catch (t) {
  console.log(t)
}
