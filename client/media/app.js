const main = document.querySelector("main");
const lightBox = document.createElement("div");
lightBox.id = "lightBox";
main.append(lightBox);

const images = document.querySelectorAll("img");
images.forEach((image) => {
  image.addEventListener("click", () => {
    document.body.childNodes[6].style.display = "none";
    document.body.childNodes[28].style.display = "none";
    lightBox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    img.classList.add("lightBoxImg");
    // Prevent multiple images
    lightBox.firstChild && lightBox.removeChild(lightBox.firstChild);
    lightBox.append(img);
  });
});

lightBox.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    lightBox.classList.remove("active");
    document.body.childNodes[6].style.display = "block";
    document.body.childNodes[28].style.display = "block";
  }
});
