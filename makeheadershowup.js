$(function () {
    $(".load-html").each(function () {$(this).load(this.dataset.source)});
});

    window.onscroll = function() {
      shrinkLogo();
  };
  
  function shrinkLogo() {
      const logo = document.querySelector(".navbar-brand");
      const headerHeight = document.querySelector("footer").offsetHeight;
  
      if (window.scrollY > headerHeight) {
          logo.classList.add("shrink"); // Add the class to shrink the logo
      } else {
          logo.classList.remove("shrink"); // Remove the class when scrolled back
      }
  }

  (function(){
  
    var el = document.querySelectorAll(".wavey")[0];
    var oldText = el.innerText
    var newHtml = "";
    for (var i in el.innerText) { newHtml += ("<span style='animation-delay: " + i/10 + "s;'>" + oldText[i] + "</span>"); }
    el.innerHTML = newHtml;
    
  })();