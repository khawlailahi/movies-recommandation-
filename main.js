const recommand = [
    { id: "card_0", title: "Encanto", img :"./assets/encanto.jpg", type:"Movies", genre:["Animation","Comedy"], trailer:"https://www.youtube.com/watch?v=CaimKeDcudo", link:"https://www.cima-club.cc:2096/watch/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-encanto-2021-%D9%85%D8%AA%D8%B1%D8%AC%D9%85"},
    { id: "card_1" ,title: "Luca", img :"./assets/luca.jpg", type:"Movies", genre:["Animation","Comedy"], trailer:"https://www.youtube.com/watch?v=0hgHY9k-44U", link:"https://www.cima-club.cc:2096/watch/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D9%87-%D9%81%D9%8A%D9%84%D9%85-luca-2021-%D9%85%D8%AA%D8%B1%D8%AC%D9%85"},
    { id: "card_2" ,title: "Horrible Bosses", img :"./assets/horrible1.jpg", type:"Movies", genre:["Action","Comedy"], trailer:"https://www.youtube.com/watch?v=VpUeQV8sdOc", link:"https://www.cima-club.cc:2096/watch/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-horrible-bosses-2011-%D9%85%D8%AA%D8%B1%D8%AC%D9%85"},
    { id: "card_3" ,title: "Horrible Bosses 2", img :"./assets/horrible2.jpg", type:"Movies", genre:["Action","Comedy"], trailer:"https://www.youtube.com/watch?v=utriEZFno0E", link:"https://www.cima-club.cc:2096/watch/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-horrible-bosses-2-2014-%D9%85%D8%AA%D8%B1%D8%AC%D9%85"},
    { id: "card_4" ,title: "Red Notice", img :"./assets/red-notice.jpg", type:"Movies", genre:["Action","Comedy"], trailer:"https://www.youtube.com/watch?v=Pj0wz7zu3Ms", link:"https://www.cima-club.cc:2096/watch/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-red-notice-2021-%D9%83%D8%A7%D9%85%D9%84-%D9%85%D8%AA%D8%B1%D8%AC%D9%85"},
    { id: "card_5" ,title: "Army Of Thieves", img :"./assets/army-of-thieves.jpg", type:"Movies", genre:["Action","Adventure"], trailer:"https://www.youtube.com/watch?v=Ith2WetKXlg", link:"https://www.cima-club.cc:2096/watch/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-army-of-thieves-2021-%D9%85%D8%AA%D8%B1%D8%AC%D9%85"},
    { id: "card_6" ,title: "Jumanji", img :"./assets/jumanji.jpg", type:"Movies", genre:["Action","Comedy", "Adventure"], trailer:"https://www.youtube.com/watch?v=2QKg5SZ_35I", link:"https://www.cima-club.cc:2096/watch/%D9%81%D9%8A%D9%84%D9%85-jumanji-welcome-to-the-jungle-2017-hd-%D8%A7%D9%88%D9%86%D9%84%D8%A7%D9%8A%D9%86"},
    { id: "card_7" ,title: "Disney's Cruella", img :"./assets/cruella.jpg", type:"Movies", genre:["Action","Adventure", "Drama"], trailer:"https://www.youtube.com/watch?v=gmRKv7n2If8", link:"https://www.cima-club.cc:2096/watch/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-cruella-2021-%D9%85%D8%AA%D8%B1%D8%AC%D9%85"},
    { id: "card_8" ,title: "Anne", img :"./assets/anne.jpeg", type:"Series", genre:["Drama","Adventure"], trailer:"https://www.youtube.com/watch?v=S5qJXYNNINo", link:"https://www.cima-club.cc:2096/season/%D9%85%D8%B3%D9%84%D8%B3%D9%84-anne-%D9%85%D9%88%D8%B3%D9%85-1/episodes"},
    { id: "card_9" ,title: "The Witcher", img :"./assets/witcher.jpg", type:"Series", genre:["Action","Adventure","Drama"], trailer:"https://www.youtube.com/watch?v=ndl1W4ltcmg", link:"https://www.cima-club.cc:2096/season/%D9%85%D8%B3%D9%84%D8%B3%D9%84-the-witcher-%D9%85%D9%88%D8%B3%D9%85-1/episodes"},
    { id: "card_10" ,title: "brooklyn 99", img :"./assets/brooklyn.jpg", type:"Series", genre:["Action","Comedy"], trailer:"https://www.youtube.com/watch?v=sEOuJ4z5aTc", link:"https://www.cima-club.cc:2096/season/%D9%85%D8%B3%D9%84%D8%B3%D9%84-brooklyn-nine-nine-%D9%85%D9%88%D8%B3%D9%85-1/episodes"},

];
const filters = [ "All" , "Comedy", "Action", "Adventure", "Drama" ,"Animation"];
filters.forEach(filter => {
    const element = document.createElement("button");
    element.appendChild(document.createTextNode(filter));
    element.classList.add("btn");
    element.classList.add("btn-light");
    element.addEventListener("click",(event)=>applyFilter(event,filter) );
    let copy = element.cloneNode();
    copy.addEventListener("click",(event)=>applyFilter(event,filter) );   
    copy.appendChild(document.createTextNode(filter));
    document.querySelector('.filters-2').appendChild(element);
    document.querySelector('.filters').appendChild(copy);
});

function addCards (filter, type){
  console.log(filter, type);
  recommand.forEach(element => {
    console.log(element.genre, );
    if (type === element.type &&  (filter === 'All' || element.genre.indexOf(filter) !== -1)) {
      console.log('in');
        let card = `<div class="card" style="width: 18rem;">
        <img src=${element.img} class="card-img-top" alt=${element.title}>
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text ${element.id}"></p>
          <div class="action-btns">
            <a href=${element.trailer} target="_blank" rel="nofollow" class="btn btn-trailer">Trailer</a>
            <a href=${element.link} target="_blank" rel="nofollow" class="btn btn-watch">Watch</a>
          </div>
        </div>
      </div>`;

      if(element.type === 'Movies') {
        document.querySelector('.movies-wrapper').insertAdjacentHTML('beforeend', card);
      }else{
        document.querySelector('.series-wrapper').insertAdjacentHTML('beforeend', card);
      }
      element.genre.forEach(gen => {
        const span =`<span class="btn btn-light genre">${gen}</span>`
        document.querySelector('.card-text.' + element.id).insertAdjacentHTML('beforeend', span);
      });  
    }    
  });


}
addCards ("All", "Movies");
addCards ("All", "Series");
function applyFilter(event,filter) {
    var type = "Movies";
    var toFilter = document.querySelector('.movies-wrapper');
    if(event.target.parentElement.classList[0] === "filters-2") {
        type = "Series";
        toFilter = document.querySelector('.series-wrapper');
    } 
    while (toFilter.firstChild) {
      toFilter.removeChild(toFilter.firstChild);
    }
    console.log(filter);
    addCards (filter, type);
}



/*****************************
*JavaScript Love Heart Cursor*
*****************************/
var colours=new Array('#f00', '#f06', '#f0f', '#f6f', '#f39', '#f9c'); // colours of the hearts
var minisize=10; // smallest size of hearts in pixels
var maxisize=20; // biggest size of hearts in pixels
var hearts=100; // maximum number of hearts on screen
var over_or_under="over"; // set to "over" for hearts to always be on top, or "under" to allow them to float behind other objects



var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var herz=new Array();
var herzx=new Array();
var herzy=new Array();
var herzs=new Array();
var kiss=false;

if (typeof('addRVLoadEvent')!='function') function addRVLoadEvent(funky) {
  var oldonload=window.onload;
  if (typeof(oldonload)!='function') window.onload=funky;
  else window.onload=function() {
    if (oldonload) oldonload();
    funky();
  }
}

addRVLoadEvent(mwah);

function mwah() { if (document.getElementById) {
  var i, heart;
  for (i=0; i<hearts; i++) {
    heart=createDiv("auto", "auto");
    heart.style.visibility="hidden";
	heart.style.zIndex=(over_or_under=="over")?"1001":"0";
    heart.style.color=colours[i%colours.length];
	heart.style.pointerEvents="none";
    if (navigator.appName=="Microsoft Internet Explorer") heart.style.filter="alpha(opacity=75)";
    else heart.style.opacity=0.45;
    heart.appendChild(document.createTextNode(String.fromCharCode(9829)));
    document.querySelector(".body-wrapper").appendChild(heart);
    herz[i]=heart;
	herzy[i]=false;
  }
  set_scroll();
  set_width();
  herzle();
}}

function herzle() {
  var c;
  if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
    ox=x;
    oy=y;
    for (c=0; c<hearts; c++) if (herzy[c]===false) {
	  herz[c].firstChild.nodeValue=String.fromCharCode(9829);
      herz[c].style.left=(herzx[c]=x-minisize/2)+"px";
      herz[c].style.top=(herzy[c]=y-minisize)+"px";
      herz[c].style.fontSize=minisize+"px";
	  herz[c].style.fontWeight='normal';
      herz[c].style.visibility='visible';
      herzs[c]=minisize;
      break;
    }
  }
  for (c=0; c<hearts; c++) if (herzy[c]!==false) blow_me_a_kiss(c);
  setTimeout("herzle()", 30);
}

document.onmousedown=pucker;
document.onmouseup=function(){clearTimeout(kiss);};

function pucker() {
  ox=-1;
  oy=-1;
  kiss=setTimeout('pucker()', 100);
}

function blow_me_a_kiss(i) {
  herzy[i]-=herzs[i]/minisize+i%2;
  herzx[i]+=(i%5-2)/5;
  if (herzy[i]<sdown-herzs[i] || herzx[i]<sleft-herzs[i] || herzx[i]>sleft+swide-herzs[i]) {
    herz[i].style.visibility="hidden";
    herzy[i]=false;
  }
  else if (herzs[i]>minisize+1 && Math.random()<2.5/hearts) break_my_heart(i);
  else {
    if (Math.random()<maxisize/herzy[i] && herzs[i]<maxisize) herz[i].style.fontSize=(++herzs[i])+"px";
    herz[i].style.top=herzy[i]+"px";
    herz[i].style.left=herzx[i]+"px";
  }
}

function break_my_heart(i) {
  var t;
  herz[i].firstChild.nodeValue=String.fromCharCode(9676);
  herz[i].style.fontWeight='bold';
    herzy[i]=false;
  for (t=herzs[i]; t<=maxisize; t++) setTimeout('herz['+i+'].style.fontSize="'+t+'px"', 60*(t-herzs[i]));
  setTimeout('herz['+i+'].style.visibility="hidden";', 60*(t-herzs[i]));
}

document.onmousemove=mouse;
function mouse(e) {
  if (e) {
    y=e.pageY;
    x=e.pageX;
  }
  else {
    set_scroll();
    y=e.y+sdown;
    x=e.x+sleft;
  }
}

window.onresize=set_width;
function set_width() {
  var sw_min=999999;
  var sh_min=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)=='number' && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
  }
  if (sw_min==999999 || sh_min==999999) {
    sw_min=800;
    sh_min=600;
  }
  swide=sw_min;
  shigh=sh_min;
}

window.onscroll=set_scroll;
function set_scroll() {
  if (typeof(self.pageYOffset)=='number') {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
    sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height;
  div.style.width=width;
  div.style.overflow="hidden";
  div.style.backgroundColor="transparent";
  return (div);
}

window.addEventListener('load', function () {
  document.querySelector(".loader-wrapper").style.opacity = "0";
  document.querySelector(".loader-wrapper").style.display = "none";
  document.querySelector(".body-wrapper").style.display = "block";
})