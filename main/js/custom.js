//Ripple Effect 
function applyCursorRippleEffect(t) {
  const e = document.createElement("main");
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
  

  //Advices
  const adviceId = document.querySelector(".advice-tag");
  const adviceQuote = document.querySelector(".advice-quote");
  const btn = document.querySelector(".btn");
  
  function generateAdvice() {
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
      .then((response) => response.json())
      .then((response) => {
        let data = response.slip;
        let dataId = data.id;
        let dataAdvice = data.advice;
  
        adviceId.innerHTML = `advice # ${dataId}`;
        adviceQuote.innerHTML = dataAdvice;
      });
  }
  
  // When button is clicked, run the generateAdvice function
  btn.addEventListener("click", () => {
    generateAdvice();
  });
  