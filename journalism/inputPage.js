let categories = ["Rent", "Safety", "Transportation", "Schools", "Population", "Diversity", "Food"];
let cats = [false, false, false, false, false, false, false];
let buttonsClicked = 0;

function changeImage1() {
    if (document.getElementById("imgChange1").src.endsWith("rent0.png"))
    {
      document.getElementById("imgChange1").src = "photo/rent1.png";
      cats[0] = true;
      ++buttonsClicked;
    }
    else
    {
      document.getElementById("imgChange1").src = "photo/rent0.png";
      cats[0] = false;
      --buttonsClicked;
    }
    showButton();
}

function changeImage2() {

    if (document.getElementById("imgChange2").src.endsWith("safety0.png"))
    {
      document.getElementById("imgChange2").src = "photo/safety1.png";
      cats[1] = true;
      ++buttonsClicked;
    }
    else
    {
      document.getElementById("imgChange2").src = "photo/safety0.png";
      cats[1] = false;
      --buttonsClicked;
    }
    showButton();
}

function changeImage3() {

    if (document.getElementById("imgChange3").src.endsWith("mbta0.png"))
    {
      document.getElementById("imgChange3").src = "photo/mbta1.png";
      cats[2] = true;
      ++buttonsClicked;
    }
    else
    {
      document.getElementById("imgChange3").src = "photo/mbta0.png";
      cats[2] = false;
      --buttonsClicked;
    }
    showButton();
}

function changeImage4() {

    if (document.getElementById("imgChange4").src.endsWith("young0.png"))
    {
      document.getElementById("imgChange4").src = "photo/young1.png";
      cats[3] = true;
      ++buttonsClicked;
    }
    else
    {
      document.getElementById("imgChange4").src = "photo/young0.png";
      cats[3] = false;
      --buttonsClicked;
    }
    showButton();
}

function changeImage5() {

    if (document.getElementById("imgChange5").src.endsWith("diversity0.png"))
    {
      document.getElementById("imgChange5").src = "photo/diversity1.png";
      cats[4] = true;
      ++buttonsClicked;
    }
    else
    {
      document.getElementById("imgChange5").src = "photo/diversity0.png";
      cats[4] = false;
      --buttonsClicked
    }
    showButton();
}

function changeImage6() {

    if (document.getElementById("imgChange6").src.endsWith("foreign0.png"))
    {
      document.getElementById("imgChange6").src = "photo/foreign1.png";
      cats[5] = true;
      ++buttonsClicked;
    }
    else
    {
      document.getElementById("imgChange6").src = "photo/foreign0.png";
      cats[5] = false;
      --buttonsClicked;
    }
    showButton();
}

function changeImage7() {

    if (document.getElementById("imgChange7").src.endsWith("grocery0.png"))
    {
      document.getElementById("imgChange7").src = "photo/grocery1.png";
      cats[6] = true;
      ++buttonsClicked;
    }
    else
    {
      document.getElementById("imgChange7").src = "photo/grocery0.png";
      cats[6] = false;
      --buttonsClicked;
    }
    showButton();
}

function showButton() {
  if (canShowButton()) {
  document.getElementById("button").style.display = "block";
  } else {
  document.getElementById("button").style.display = "none";
  }
}

function canShowButton() {
  return buttonsClicked === 3;
}

function calculateResult() {
  let category1 = "";
  let category2 = "";
  let category3 = "";

  for (let i = 0; i < cats.length; ++i) {
    if (cats[i]) {
      if (!category1) {
        category1 = categories[i];
      }
      else if (!category2) {
        category2 = categories[i];
      }
      else {
        category3 = categories[i];
        break;
      }
    }
  }

  return calcTopNeighborhood(category1, category2, category3);
}
