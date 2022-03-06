const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.background');

let load = 0;
let int = setInterval(blurring,30); //call blurring after every 30milli seconds

//function to make image from blur to clear and loading text from clear to blur as image loads
function blurring(){
    load++;
    if(load>99){
        clearInterval(int);//once load value becomes 100 remove interval to prevent calling this function again
    }
    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = scale(load,0,100,1,0); //once the image is loaded then the text should disappear(opacity:0)
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`; //the image is blur is changed from 30px to 0px
}

//function to map the load values to a different range of values
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}