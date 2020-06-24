/**
 * Dropdown menu
 */
document.addEventListener("DOMContentLoaded", function () {
  const menus = document.querySelectorAll(".navbar-burger")
  const dropdowns = document.querySelectorAll(".navbar-menu")

  if (menus.length && dropdowns.length) {
    for (let i = 0; i < menus.length; i++) {
      menus[i].addEventListener("click", function () {
        for (let j = 0; j < dropdowns.length; j++) {
          dropdowns[j].classList.toggle("hidden")
        }
      })
    }
  }
})
