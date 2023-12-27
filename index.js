window.addEventListener('scroll', () => {
  var y = window.scrollY
  var newy = y / 40;

  document.body.style.backgroundColor = "rgb(" + newy + "," + newy + "," + newy + ")";
})

var currentpos = 0;

setInterval(rotateprojects, 1)

function rotateprojects() {
  if (currentpos < -240) {
    currentpos = 0
  }
  currentpos = currentpos - 0.05;
  document.getElementById("coming-proj").style.left = currentpos + "vw";
}

var ran = false;
var num = 1;
var maxnum = 4;

var elements = document.getElementsByClassName("columns");
var titles = document.getElementsByClassName("display-font");

function one() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.flex = "80%";
  }
  maxnum = 1;
  setphotos();
  for (var j = 0; j < titles.length; j++) {
    titles[j].style.fontSize = "6vw";
  }
}

function two() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.flex = "40%";
  }
  maxnum = 2;
  setphotos();
  for (var j = 0; j < titles.length; j++) {
    titles[j].style.fontSize = "3vw";
  }
}

function four() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.flex = "20%";
  }
  maxnum = 4;
  setphotos();
}

function loadmore() {
  displaycount += 20;
  setphotos();
}

function loadmore2(){
  displaycount += 20;
  sethachi();
}

window.addEventListener('load', () => {
  sethachi();
})

window.addEventListener('load', () => {
  setphotos();
})

var displaycount = 30;
var photolength;

function setphotos() {
  if (photos.length < displaycount) {
    photolength = photos.length;
    document.getElementById("load-more").style.display = "none";
  }
  else {
    photolength = displaycount;
  }

  if (ran) {
    $(".columns").find(".removeable").remove();
  }

  for (var i = 0; i < photolength; i++) {
    var name = photos[i].name;
    var loc = photos[i].location;
    const div = document.createElement("div");
    div.id = "display-container";
    div.className = "removeable";
    const title = document.createElement("p");
    title.id = "display-title";
    title.className = "display-font";
    title.innerText = name + "\n" + loc;
    div.appendChild(title);
    document.getElementById("col" + num).appendChild(div);
    const image = document.createElement("img");
    image.id = "displayed";
    image.src = photos[i].url;
    div.appendChild(image);
    num += 1;
    ran = true;
    if (num > maxnum) {
      num = 1;
    }
  }
}

var ran2 = false;
var num2 = 1;
maxnum2 = 2;

function sethachi() {

  sortedtime = [0];
  sortedimg = [0];

  for (var k = 0; k < hachi.length; k++) {
    var month;
    var day;
    if(hachi[k].month < 10){
      month = "0" + hachi[k].month;
    }
    else{
      month = String(hachi[k].month);
    }

    if(hachi[k].date < 10){
      day = "0" + hachi[k].date;
    }
    else{
      day = String(hachi[k].date);
    }
    time = Number(String(hachi[k].year) + month + day);
    var num = hachi.length;

    for(i = 0; i < sortedtime.length; i++){
      if(time < sortedtime[i]){

      }
      else{
        if(i < num){
          num = i;
        }
      }
    }

    if (num < hachi.length) {
      sortedtime.splice(num, 0, time);
      sortedimg.splice(num, 0, hachi[k]);
    }
  }

  removeItemOnce(sortedimg, 0);
  removeItemOnce(sortedtime, 0);

  if (ran2) {
    $(".columns2").find(".removeable").remove();
  }

  for (var i = 0; i < sortedimg.length; i++) {
    var name = sortedimg[i].name;
    var year = sortedimg[i].year;
    var month = sortedimg[i].month;
    var date = sortedimg[i].date;
    const div = document.createElement("div");
    div.id = "display-container2";
    div.className = "removeable";
    const title = document.createElement("p");
    title.id = "display-title2";
    title.className = "display-font";
    title.innerText = name + "\n" + month + "-" + date + "-" + year;
    div.appendChild(title);
    document.getElementById("hachi-col" + num2).appendChild(div);
    const image = document.createElement("img");
    image.id = "displayed";
    image.src = sortedimg[i].url;
    div.appendChild(image);
    num2 += 1;
    ran2 = true;
    if (num2 > maxnum2) {
      num2 = 1;
    }
  }
}

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}