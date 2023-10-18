  const wrapper = document.getElementById("navWrapper");

  function scroll() {
    let calc = window.scrollY;
    if (calc > 0) {
      wrapper.classList.replace("navWrapper", "navWrapper-scroll");
    } else if (calc <= 0) {
      wrapper.classList.replace("navWrapper-scroll", "navWrapper");
    }
  }

  //panggil saat init
  scroll();
  window.onscroll = () => {
    scroll();
  };
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", function () {
    wrapper.classList.replace("navWrapper", "navWrapper-scroll");
  });