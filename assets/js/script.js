const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;


window.onload = function(){
    const controlRigth = document.querySelector(".arrow-right").click();
}

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    let isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    console.log(maxItems-1 + " :MAX")
    console.log(currentItem + " :CUR")


    if (currentItem >= maxItems-1) {
      currentItem = 1;
    }

    if (currentItem <= 0) {
      currentItem = maxItems - 2;
    }


    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block:"nearest"
    });

    items[currentItem].classList.add("current-item");
  });
});


