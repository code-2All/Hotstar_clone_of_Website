let movies = [
    {
        name: "Raya",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nesciunt blanditiis eos qui ab possimus assumenda numquam laborum,voluptas veritatis hic adipisci ullam incidunt quidem voluptate reprehenderit nemo dolorum",

        image: ""

    },
    {
        name: "Dark Phoenix",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nesciunt blanditiis eos qui ab possimus assumenda numquam laborum,voluptas veritatis hic adipisci ullam incidunt quidem voluptate reprehenderit nemo dolorum",

        image: "images/slider 2.PNG"

    },
    {
        name: "Faclon-and Winter-soldier",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nesciunt blanditiis eos qui ab possimus assumenda numquam laborum,voluptas veritatis hic adipisci ullam incidunt quidem voluptate reprehenderit nemo dolorum",

        image: "images/slider 3.PNG"

    },
  {
        name: "SpiderMan coming Home",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nesciunt blanditiis eos qui ab possimus assumenda numquam laborum,voluptas veritatis hic adipisci ullam incidunt quidem voluptate reprehenderit nemo dolorum",

        image: "images/slider 4.PNG"

    },  
    {
        name: "The lion King",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nesciunt blanditiis eos qui ab possimus assumenda numquam laborum,voluptas veritatis hic adipisci ullam incidunt quidem voluptate reprehenderit nemo dolorum",

        image: "images/slider 5.PNG"

    },
   

];

const caraousel = document.querySelector('.caraousel'); //qs used to html to js
let sliders = []; //create empty  arra

let slideIndex = 0;  //by default 0  //track the current slide

const createSlide = () => {
    if(slideIndex >= movies.length) {
      slideIndex=0;
    }

    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');


    //attaching all elemets 

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    caraousel.appendChild(slide);

    //setting up images

    imgElement.src=movies[slideIndex].name; /*image*/
    slideIndex++;

    //setting
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);


    // CSS FORMULA TO APPLY NEXT SLIDE
    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% -${  //calc is css formula
            30 * (sliders.length - 2)
            }px)`;
    }
}
let i;
for (i = 0; i < 3; i++) {
    createSlide();
}
setInterval(() => {
    createSlide();
}, 3000);

//add video crds

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener("mouseover" , () => {
        let video = item.children[i];
        video.play();
    });
    item.addEventListener("mouseleave", () => {
        let video = item.children[i];
        video.pause();
    });
});



let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})

