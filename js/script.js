function readMore(id,dotID,moreID) {
    console.log(id,dotID,moreID);
    let dots = document.getElementById(dotID);
    let moreText = document.getElementById(moreID);
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