function readMore(id) {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let el = document.getElementById(id);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      el.innerHTML = "Read more &rarr;";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      el.innerHTML = "Read less &rarr;";
      moreText.style.display = "inline";
    }
  }