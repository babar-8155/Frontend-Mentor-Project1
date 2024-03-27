const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
function showParagraph(id) {
  if (id == "img1") {
    document.getElementById("p1").style.display = "block";
  } else if (id == "img2") {
    document.getElementById("p2").style.display = "block";
  } else if (id == "img3") {
    document.getElementById("p3").style.display = "block";
  } else {
    document.getElementById("p4").style.display = "block";
  }
}
function hideParagraph(id) {
  if (id == "img1") {
    document.getElementById("p1").style.display = "none";
  } else if (id == "img2") {
    document.getElementById("p2").style.display = "none";
  } else if (id == "img3") {
    document.getElementById("p3").style.display = "none";
  } else {
    document.getElementById("p4").style.display = "none";
  }
}

function onClick(event) {
  let imgId = event.target.id;
  let imgSrc = event.target.src;
  if (imgSrc.includes("icon-minus")) {
    event.target.src = "./assets/images/icon-plus.svg";
    hideParagraph(imgId);
  } else {
    event.target.src = "./assets/images/icon-minus.svg";
    showParagraph(imgId);
  }
}

img1.addEventListener("click", onClick);
img2.addEventListener("click", onClick);
img3.addEventListener("click", onClick);
img4.addEventListener("click", onClick);
