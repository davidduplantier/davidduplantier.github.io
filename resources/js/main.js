function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; ++i) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

links = document.getElementsByTagName("a")

for (let i = 0; i < links.length; ++i) {
  currColor = links[i].style.color;
  links[i].addEventListener("mouseenter", function(event) {
    event.target.style.color = getRandomColor();
  });
  links[i].addEventListener("mouseleave", function(event) {
    event.target.style.color = currColor;
  });
}
