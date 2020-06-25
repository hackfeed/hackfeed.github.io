const contactsBtns = document.querySelectorAll(".contacts img");

for (const btn of contactsBtns) {
  btn.addEventListener("mouseover", () => {
    btn.classList.add("img_hovered");
    btn.classList.remove("img_unhovered");
  });
  btn.addEventListener("mouseout", () => {
    btn.classList.add("img_unhovered");
    btn.classList.remove("img_hovered");
  });
}

const navLinks = document.querySelectorAll("a.link");

for (const link of navLinks) {
  link.addEventListener("mouseover", () => {
    link.classList.add("link_hovered");
    link.classList.remove("link_unhovered");
  });
  link.addEventListener("mouseout", () => {
    link.classList.add("link_unhovered");
    link.classList.remove("link_hovered");
  });
}
