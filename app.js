const navbtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

navbtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

const scrolllinks = document.querySelectorAll(".scroll-link");
scrolllinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
   const element = document.getElementById(id);
   
    let position = element.offsetTop;
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});
