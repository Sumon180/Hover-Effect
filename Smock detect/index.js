let heading = document.querySelector(".heading");
let subHeading = document.querySelector(".subHeading");
let text = document.querySelector(".text");

heading.innerHTML = heading.textContent.replace(/\S/g, "<span>$&</span>");
subHeading.innerHTML = subHeading.textContent.replace(/\S/g, "<span>$&</span>");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

let letterr = document.querySelectorAll("span");

for (let i = 0; i < letterr.length; i++) {
  letterr[i].addEventListener("mouseover", function () {
    letterr[i].classList.add("smoke");
  });
}
