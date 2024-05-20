var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




const optionMenus = document.querySelectorAll(".select-menu");

optionMenus.forEach((optionMenu) => {
  const selectBtn = optionMenu.querySelector(".select-btn");
  const sBtn_text = selectBtn.querySelector(".sBtn-text");
  const options = optionMenu.querySelectorAll(".options .option");

  selectBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevents the click event from bubbling up
    optionMenu.classList.toggle("active");
    console.log("Button clicked");
  });

  options.forEach((option) => {
    option.addEventListener("click", (event) => {
      event.preventDefault(); // Prevents the default action of the anchor tag
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;
      console.log(selectedOption);
      optionMenu.classList.remove("active");
      console.log("Option clicked");
    });
  });

  // Add event listener to the document body
  document.body.addEventListener("click", (event) => {
    // Check if the clicked element is not part of the select menu
    if (
      !optionMenu.contains(event.target) &&
      !selectBtn.contains(event.target)
    ) {
      optionMenu.classList.remove("active"); // Hide the select menu
    }
  });
});
