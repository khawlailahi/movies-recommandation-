const recommand = [
    { title: "Encanto", img :"./assets/encanto.jpg", type:"Movies", Genre:["Animation","Comedy"], trailer:"https://www.youtube.com/watch?v=CaimKeDcudo", link:"https://www.cima-club.cc:2096/watch/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-encanto-2021-%D9%85%D8%AA%D8%B1%D8%AC%D9%85"},
    { title: "Luca", img :"./assets/luca.jpg", type:"Movies", Genre:["Animation","Comedy"], trailer:"https://www.youtube.com/watch?v=0hgHY9k-44U", link:"https://www.cima-club.cc:2096/watch/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D9%87-%D9%81%D9%8A%D9%84%D9%85-luca-2021-%D9%85%D8%AA%D8%B1%D8%AC%D9%85"},
    { title: "Horrible Bosses", img :"./assets/horrible1.jpg", type:"Movies", Genre:["Action","Comedy"], trailer:"https://www.youtube.com/watch?v=VpUeQV8sdOc", link:"https://www.cima-club.cc:2096/watch/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-horrible-bosses-2011-%D9%85%D8%AA%D8%B1%D8%AC%D9%85"},
    { title: "Horrible Bosses 2", img :"./assets/horrible2.jpg", type:"Movies", Genre:["Action","Comedy"], trailer:"https://www.youtube.com/watch?v=utriEZFno0E", link:"https://www.cima-club.cc:2096/watch/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-horrible-bosses-2-2014-%D9%85%D8%AA%D8%B1%D8%AC%D9%85"},
    { title: "Red Notice", img :"./assets/red-notice.jpg", type:"Movies", Genre:["Action","Comedy"], trailer:"https://www.youtube.com/watch?v=Pj0wz7zu3Ms", link:"https://www.cima-club.cc:2096/watch/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-red-notice-2021-%D9%83%D8%A7%D9%85%D9%84-%D9%85%D8%AA%D8%B1%D8%AC%D9%85"},
    { title: "Army Of Thieves", img :"./assets/army-of-thieves.jpg", type:"Movies", Genre:["Action","Adventure"], trailer:"https://www.youtube.com/watch?v=Ith2WetKXlg", link:"https://www.cima-club.cc:2096/watch/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-army-of-thieves-2021-%D9%85%D8%AA%D8%B1%D8%AC%D9%85"},
    { title: "Jumanji", img :"./assets/jumanji.jpg", type:"Movies", Genre:["Action","Comedy", "Adventure"], trailer:"https://www.youtube.com/watch?v=2QKg5SZ_35I", link:"https://www.cima-club.cc:2096/watch/%D9%81%D9%8A%D9%84%D9%85-jumanji-welcome-to-the-jungle-2017-hd-%D8%A7%D9%88%D9%86%D9%84%D8%A7%D9%8A%D9%86"},
    { title: "Disney's Cruella", img :"./assets/cruella.jpg", type:"Movies", Genre:["Action","Adventure", "Drama"], trailer:"https://www.youtube.com/watch?v=gmRKv7n2If8", link:"https://www.cima-club.cc:2096/watch/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-cruella-2021-%D9%85%D8%AA%D8%B1%D8%AC%D9%85"},
    { title: "Anne", img :"./assets/anne.jpeg", type:"Series", Genre:["Drama","Adventure"], trailer:"https://www.youtube.com/watch?v=S5qJXYNNINo", link:"https://www.cima-club.cc:2096/season/%D9%85%D8%B3%D9%84%D8%B3%D9%84-anne-%D9%85%D9%88%D8%B3%D9%85-1/episodes"},
    { title: "The Witcher", img :"./assets/witcher.jpg", type:"Series", Genre:["Action","Adventure","Drama"], trailer:"https://www.youtube.com/watch?v=ndl1W4ltcmg", link:"https://www.cima-club.cc:2096/season/%D9%85%D8%B3%D9%84%D8%B3%D9%84-the-witcher-%D9%85%D9%88%D8%B3%D9%85-1/episodes"},
    { title: "brooklyn 99", img :"./assets/brooklyn.jpg", type:"Series", Genre:["Action","Comedy"], trailer:"https://www.youtube.com/watch?v=sEOuJ4z5aTc", link:"https://www.cima-club.cc:2096/season/%D9%85%D8%B3%D9%84%D8%B3%D9%84-brooklyn-nine-nine-%D9%85%D9%88%D8%B3%D9%85-1/episodes"},

];
const filters = ["Animation", "Action", "Adventure", "Drama" ,"Comedy", "All"];
filters.forEach(filter => {
    const element = document.createElement("button");
    element.appendChild(document.createTextNode(filter));
    element.classList.add("btn");
    element.classList.add("btn-light");
    element.addEventListener("click",(event)=>applyFilter(event,filter) );
    let copy = element.cloneNode();
    copy.appendChild(document.createTextNode(filter));
    document.querySelector('.filters-2').appendChild(element);
    document.querySelector('.filters').appendChild(copy);
});


recommand.forEach(element => {
    const card = `<div class="card" style="width: 18rem;">
    <img src=${element.img} class="card-img-top" alt=${element.title}>
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div class="action-btns">
        <a href=${element.trailer} target="_blank" rel="nofollow" class="btn btn-primary">Trailer</a>
        <a href=${element.link} target="_blank" rel="nofollow" class="btn btn-dark">Watch</a>
      </div>
    </div>
  </div>`;
  if(element.type === 'Movies') {
    document.querySelector('.movies-wrapper').insertAdjacentHTML('beforeend', card);
  }else{
    document.querySelector('.series-wrapper').insertAdjacentHTML('beforeend', card);
  }
    
});

function applyFilter(event,filter) {
    var type = "Movies";
    var toFilter = document.querySelector('.movies-wrapper').children;
    if(event.target.parentElement.classList[0] === "filters-2") {
        type = "Series";
        toFilter = document.querySelector('.series-wrapper').children;
    } 
    toFilter.forEach((el)=>{
        
    })
}