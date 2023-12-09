//Schema
const schema = document.querySelectorAll(".third-block-scheme-block-less");

schema.forEach(schema => {
    schema.addEventListener("click", function(){
        schema.classList.toggle("open");
    });
});

//checkbox

const checkbox = document.querySelectorAll(".checkbox");
const agreement = document.querySelectorAll(".new-checkbox");

checkbox.forEach(checkbox => {
    checkbox.addEventListener("click", function(){
        checkbox.classList.toggle("click");
    });
});

//Instance wb-color-img

const img = document.querySelectorAll(".block-instance-card");

img.forEach(color => {
    color.addEventListener("click", function(){
        color.classList.toggle("color-img");
    });
});

// img.forEach(color => {
//     color.addEventListener("mouseover", function(){
//         color.classList.toggle("color-img");
//     });
// });

// img.forEach(color => {
//     color.addEventListener("mouseout", function(){
//         color.classList.toggle("wb-img");
//     });
// });

//Question

const question = document.querySelectorAll(".block-question-block-question");

question.forEach(answer => {
    answer.addEventListener("click", function(){
        answer.classList.toggle("answer");
    });
});

//company wb-color-img

const company_img = document.querySelectorAll(".block-slider-company--slider-img");

company_img.forEach(color => {
    color.addEventListener("click", function(){
        color.classList.toggle("color-img");
    });
});


//slider company

const nextArrow = document.querySelector(".block-slider-company--arrow-next");
let activeImg = document.querySelectorAll(".block-slider-company--slider-img");
var mass = [document.querySelector('.block-slider-company--slider-track').getElementsByClassName('block-slider-company--slider-img')];
var left = 0;
var count = document.querySelector('.block-slider-company--slider-track').children.length;

nextArrow.addEventListener("click", function(){
    let track = document.querySelector(".block-slider-company--slider-track");
    var len = count * 262;
    len-=1310;
    left-=262;
    if(left<-len){
        left = 0;
    }
    track.style.left = left+"px";
    for(i=0; i<count; i++){


        activeImg.forEach(active => {
            active.addEventListener("click", function(){
                active.classList.toggle("active");
            });
        });
        console.log(mass);
    }
});


const prevArrow = document.querySelector(".block-slider-company--arrow-prev");

var len = count * 262;

prevArrow.addEventListener("click", function(){
    let track = document.querySelector(".block-slider-company--slider-track");
    left +=262;
    if(left > 0){
        left = -len + 1310;
    }
    track.style.left = left+"px";
    
});


// const nextArrow = document.querySelector(".block-slider-company--arrow-next");
// var left = 0;
// var count = document.querySelector('.block-slider-company--slider-track').children.length;

// nextArrow.addEventListener("click", function(){
//     let track = document.querySelector(".block-slider-company--slider-track");
//     var len = count * 262;
//     len-=1310;
//     left-=766;  //left-=262;
//     if(left<-len){
//         left = 0;
//     }
//     track.style.left = left+"px";
// });

// const prevArrow = document.querySelector(".block-slider-company--arrow-prev");

// var len = count * 262;
// left = -len; 

// prevArrow.addEventListener("click", function(){
//     let track = document.querySelector(".block-slider-company--slider-track");
//     left +=786; //left +=262;
//     if(left > 0){
//         left = -len + 1310;
//     }
//     track.style.left = left+"px";
// });


//color home

// const color_home = document.querySelectorAll(".case-block-little-img");

// function changeImage(src)
// {
//     color_home = document.getElementById('case-block-little-img-wb').src = src;
// };

// color_home.forEach(color => {
//     color.addEventListener("mouseover", function(){
//         color.classList.toggle("color-home");
//     });
// });
// color_home.forEach(color => {
//     color.addEventListener("mouseout", function(){
//         color.classList.toggle("wb-home");
//     });
// });

// let colorHome = document.querySelectorAll(".case-block-little-img");

// colorHome.forEach( 

function changeImage1(src){
    color_home = document.querySelector(".case-block-little-img-wb1").src = src;
};
function changeImage2(src){
    color_home = document.querySelector(".case-block-little-img-wb2").src = src;
};
function changeImage3(src){
    color_home = document.querySelector(".case-block-little-img-wb3").src = src;
};
function changeImage4(src){
    color_home = document.querySelector(".case-block-little-img-wb4").src = src;
};
function changeImage5(src){
    color_home = document.querySelector(".case-block-little-img-wb5").src = src;
};
function changeImage6(src){
    color_home = document.querySelector(".case-block-little-img-wb6").src = src;
};

// src.forEach(changeImage);

// function changeImage(src){
//     colorHome.forEach(color => {
//         color.getElementById('case-block-little-img-wb').src = src;
//     });
    
// };

// getAttribute('src')


//Checkbox

const checked = document.querySelectorAll(".block-ring-label");


checked.forEach(checked => {
    checked.addEventListener("click", function(){
        checked.classList.toggle("checked");
    });
});


//mask phone

// document.addEventListener("DOMContentLoaded", function(){


//     let phoneInputs = document.querySelectorAll('input[data-tel-input]');

//     let getInputNumbersValue = function(input){

//     };

//     let onPhoneInput = function(e){
//         let input = e.target,
//             inputValue = input.value;
//         console.log('inputValue', inputValue);
//     };

//     for(i=0; i<phoneInputs.length; i++){
//         let input = phoneInputs[i];
//         input.addEventListener("input", onPhoneInput);
//     }
// });

// let elements = document.getElementsByClassName('phone-mask');
       
//     for (let i = 0; i < elements.length; i++) {
//       new IMask(elements[i], {
//         mask: '+{7}(000)000-00-00',
//       });
//     }

//dropdown menu

