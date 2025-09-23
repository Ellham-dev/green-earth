const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const openIcon = document.getElementById("open-icon");
  const closeIcon = document.getElementById("close-icon");

  let isOpen = false; // track state

  menuBtn.addEventListener("click", () => {
    isOpen = !isOpen; // toggle state

    if (isOpen) {
      mobileMenu.classList.remove("hidden"); // show menu
      openIcon.classList.add("hidden");      // hide hamburger
      closeIcon.classList.remove("hidden");  // show close
    } else {
      mobileMenu.classList.add("hidden");    // hide menu
      openIcon.classList.remove("hidden");   // show hamburger
      closeIcon.classList.add("hidden");     // hide close
    }
  });