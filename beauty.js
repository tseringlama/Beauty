function submitted() {
    sex();
    age();
    body_type();
    size();
    height();
    shops();
    item();
    body_part();
    f_outfit();
    m_outfit();
}
var male;
var female;
var age;
var body_type;
var size;
var height;
var budget;
var shops;
var item;
var body_part;
var f_outfit;
var m_outfit;

function sex() {
  var answer;
  if (document.getElementById("male").checked) {
    document.getElementById("result").innerHTML;
    male = true;
  }
  if (document.getElementById("female").checked) {
    document.getElementById("result").innerHTML;
    female = true;
  }
}
function body_type() {
   var answer;
   if (document.getElementById("s1").checked) {
     document.getElementById("result").innerHTML; //= "You're one sweet pear;)";
     pear shape = true;
}
   if (document.getElementById("s2").checked) {
     document.getElementById("result").innerHTML; //= "You're one attractice apple;)";
     apple = true;
}
   if (document.getElementById("s3").checked) {
     document.getElementById("result").innerHTML; //= "You're one hot triangle;)";
     triangle = true;
}
   if (document.getElementById("s4").checked) {
     document.getElementById("result").innerHTML; //= "You're one gorgeous inverted triangle;)";
     inverted triangle = true;
}
   if (document.getElementById("s5").checked) {
     document.getElementById("result").innerHTML; //= "You're one gorgeous hourglass;)";
     hourglass = true;
}
   if (document.getElementById("s6").checked) {
     document.getElementById("result").innerHTML; //= "You're one pretty straight shape;)";
     straight = true;
}

function age() {
    var answer;
    if (document.getElementById("a1").checked) {
      document.getElementById("result").innerHTML; //= "You are 10-14";
      age = "10 - 14";
    }
    if (document.getElementById("a2").checked) {
      document.getElementById("result").innerHTML; //= "You are 15-18";
      age = "15 - 18";
    }
    if (document.getElementById("a3").checked) {
      document.getElementById("result").innerHTML; //= "You are 19-21";
      age = "19 - 21";
    }
    if (document.getElementById("a4").checked) {
      document.getElementById("result").innerHTML; //= "You are 22-29";
      age = "22 - 29";
    }
    if (document.getElementById("a5").checked) {
      document.getElementById("result").innerHTML; //= "You are 30-39";
      age = "30 - 39";
    }
    if (document.getElementById("a6").checked) {
      document.getElementById("result").innerHTML; //= "You are 40-49";
      age = "40 - 49";
    }
    if (document.getElementById("a7").checked) {
      document.getElementById("result").innerHTML; //= "You are 50-59";
      age = "50 - 59";
    }
    if (document.getElementById("a8").checked) {
      document.getElementById("result").innerHTML; //= "You are 60-69";
      age = "60 - 69";
    }
    if (document.getElementById("a9").checked) {
      document.getElementById("result").innerHTML; //= "You are 70-79";
      age = "70 - 79";
    }
    if (document.getElementById("a10").checked) {
      document.getElementById("result").innerHTML; //= "You are 80-89";
      age = "80 - 89";
    }
}

function size() {
  var answer;
  if (document.getElementById("t1").checked) {
    document.getElementById("result").innerHTML;
    age = "0 - 8";
  }
  if (document.getElementById("t2").checked) {
    document.getElementById("result").innerHTML;
    age = "10 - 16";
  }
  if (document.getElementById("t3").checked) {
    document.getElementById("result").innerHTML;
    age = "18 - 22";
  }
  if (document.getElementById("t4").checked) {
    document.getElementById("result").innerHTML;
    age = "24 - 26";
  }
}
function height() {
  var answer;
  if (document.getElementById("h1").checked) {
    document.getElementById("result").innerHTML;
    height = "petite(under 5'3)";
  }
  if (document.getElementById("h2").checked) {
    document.getElementById("result").innerHTML;
    height = "regular(5'4-5'7)";
  }
  if (document.getElementById("h3").checked) {
    document.getElementById("result").innerHTML;
    height = "tall(5'8 up)";
  }
}
function shops() {
  var answer;
  if (document.getElementById("y1").checked) {
    document.getElementById("result").innerHTML;
    shops = "Zara";
  }
  if (document.getElementById("y2").checked) {
    document.getElementById("result").innerHTML;
    shops = "American Eagle";
  }
  if (document.getElementById("y3").checked) {
    document.getElementById("result").innerHTML;
    shops = "Forever 21";
  }
  if (document.getElementById("y4").checked) {
    document.getElementById("result").innerHTML;
    shops = "Nordstrom";
  }
  if (document.getElementById("y5").checked) {
    document.getElementById("result").innerHTML;
    shops = "Neiman Marcus";
  }
}
function item() {
  if (document.getElementById("j1").checked) {
    document.getElementById("result").innerHTML;
    item = "Pants";
  }
  if (document.getElementById("j2").checked) {
    document.getElementById("result").innerHTML;
    item = "Skirts";
  }
}
function body_part() {
  if (document.getElementById("a1").checked) {
    document.getElementById("result").innerHTML;
    body_part = "arms";
  }
  if (document.getElementById("a2").checked) {
    document.getElementById("result").innerHTML;
    body_part = "legs";
  }
  if (document.getElementById("a3").checked) {
    document.getElementById("result").innerHTML;
    body_part = "stomach";
  }
  if (document.getElementById("a4").checked) {
    document.getElementById("result").innerHTML;
    body_part = "shoulders";
  }
  if (document.getElementById("a5").checked) {
    document.getElementById("result").innerHTML;
    body_part = "chest";
  }
}
function f_outfit() {
  if (document.getElementById("f1").checked) {
    document.getElementById("result").innerHTML;
    f_outfit = "femaleOutfitOne.jpg";
  }
  if (document.getElementById("f2").checked) {
    document.getElementById("result").innerHTML;
    f_outfit = "FemaleOutfitTwo.jpg";
  }
  if (document.getElementById("f3").checked) {
    document.getElementById("result").innerHTML;
    f_outfit = "femaleOutfitThree.jpg";
  }
  if (document.getElementById("f4").checked) {
    document.getElementById("result").innerHTML;
    f_outfit = "femaleOutfitFour.jpg";
  }
  if (document.getElementById("f5").checked) {
    document.getElementById("result").innerHTML;
    f_outfit = "femaleOutfitFive.jpg";
  }
  if (document.getElementById("f6").checked) {
    document.getElementById("result").innerHTML;
    f_outfit = "femaleOutfitSix.jpg";
  }
}
function m_outfit() {
  if (document.getElementById("m1").checked) {
    document.getElementById("result").innerHTML;
    m_outfit = "maleOutfitOne.jpg";
  }
  if (document.getElementById("m2").checked) {
    document.getElementById("result").innerHTML;
    m_outfit = "maleOutfitTwo.jpg";
  }
  if (document.getElementById("m3").checked) {
    document.getElementById("result").innerHTML;
    m_outfit = "maleOutfitThree.jpg";
  }
  if (document.getElementById("m4").checked) {
    document.getElementById("result").innerHTML;
    m_outfit = "maleOutfitFour.jpg";
  }
  if (document.getElementById("m5").checked) {
    document.getElementById("result").innerHTML;
    m_outfit = "maleOutfitFive.jpg";
  }
  if (document.getElementById("m6").checked) {
    document.getElementById("result").innerHTML;
    m_outfit = "maleOutfitSix.jpg";
  }
}


// var b1 = Boolean(10-14);
// var b2 = Boolean(15-18);
// var b3 = Boolean(19-21);
// var b4 = Boolean(22-29);
// var b5 = Boolean(30-39);
// var b6 = Boolean(40-49);
// var b7 = Boolean(50-59);
// var b8 = Boolean(60-69);
// var b9 = Boolean(70-79);
// var b10 = Boolean(80-89);
// var b11 = Boolean(0-8);
// var b12 = Boolean(10-16);
// var b13 = Boolean(18-22);
// var b14 = Boolean(24-26);
// var b15 = Boolean("petite(under 5'3)");
// var b16 = Boolean("regular(5'4-5'7)");
// var b17 = Boolean("tall(5'8 up)");

function giveSurveyResults() {
  if (male == true) {
    // do something
    if (body_type == "pear shape") {

    }
    if (body_type == "apple shape") {

    }
    if (body_type == "triangle shape") {

    }
    if (body_type == "inverted triangle shape") {

    }
    if (body_type == "hourglass shape") {

    }
    if (body_type == "straight shape") {

    }
    if (size == "0 - 8") {

    }
    if (size == "10 - 16") {

    }
    if (size == "18 - 22") {

    }
    if (size == "24 - 26") {

    }
    if (height == "petite(under 5'3)") {

    }
    if (height == "regular(5'4-5'7)") {

    }
    if (height == "tall(5'8 up)") {

    }
    if (shops == "Zara") {

    }
    if (shops == "American Eagle") {

    }
    if (shops == "Forever 21") {

    }
    if (shops == "Nordstrom") {

    }
    if (shops == "Neiman Marcus") {

    }
    if (item == "Pants") {

    }
    if (item == "Skirts") {

    }
    if (body_part == "arms") {

    }
    if (body_part == "legs") {

    }
    if (body_part == "stomach") {

    }
    if (body_part == "shoulders") {

    }
    if (body_part == "chest") {

    }
    if (f_outfit == "femaleOutfitOne.jpg") {

    }
    if (f_outfit == "FemaleOutfitTwo.jpg") {

    }
    if (f_outfit == "femaleOutfitThree.jpg") {

    }
    if (f_outfit == "femaleOutfitFour.jpg") {

    }
    if (f_outfit == "femaleOutfitFive.jpg") {

    }
    if (f_outfit == "femaleOutfitSix.jpg") {

    }
    if (m_outfit == "maleOutfitOne.jpg") {

    }
    if (m_outfit == "maleOutfitTwo.jpg") {

    }
    if (m_outfit == "maleOutfitThree.jpg") {

    }
    if (m_outfit == "maleOutfitFour.jpg") {

    }
    if (m_outfit == "maleOutfitFive.jpg") {

    }
    if (m_outfit == "maleOutfitSix.jpg") {

    }


  }
  if (female == true) {
    // do something else
  }
  if (body_type == "pear shape") {

  }
  if (body_type == "apple shape") {

  }
  if (body_type == "triangle shape") {

  }
  if (body_type == "inverted triangle shape") {

  }
  if (body_type == "hourglass shape") {

  }
  if (body_type == "straight shape") {

  }
  if (size == "0 - 8") {

  }
  if (size == "10 - 16") {

  }
  if (size == "18 - 22") {

  }
  if (size == "24 - 26") {

  }
  if (height == "petite(under 5'3)") {

  }
  if (height == "regular(5'4-5'7)") {

  }
  if (height == "tall(5'8 up)") {

  }
  if (shops == "Zara") {

  }
  if (shops == "American Eagle") {

  }
  if (shops == "Forever 21") {

  }
  if (shops == "Nordstrom") {

  }
  if (shops == "Neiman Marcus") {

  }
  if (item == "Pants") {

  }
  if (item == "Skirts") {

  }
  if (body_part == "arms") {

  }
  if (body_part == "legs") {

  }
  if (body_part == "stomach") {

  }
  if (body_part == "shoulders") {

  }
  if (body_part == "chest") {

  }
  if (f_outfit == "femaleOutfitOne.jpg") {

  }
  if (f_outfit == "FemaleOutfitTwo.jpg") {

  }
  if (f_outfit == "femaleOutfitThree.jpg") {

  }
  if (f_outfit == "femaleOutfitFour.jpg") {

  }
  if (f_outfit == "femaleOutfitFive.jpg") {

  }
  if (f_outfit == "femaleOutfitSix.jpg") {

  }
  if (m_outfit == "maleOutfitOne.jpg") {

  }
  if (m_outfit == "maleOutfitTwo.jpg") {

  }
  if (m_outfit == "maleOutfitThree.jpg") {

  }
  if (m_outfit == "maleOutfitFour.jpg") {

  }
  if (m_outfit == "maleOutfitFive.jpg") {

  }
  if (m_outfit == "maleOutfitSix.jpg") {

  }

}
