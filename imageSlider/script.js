let images = document.getElementById('img');
let i=0; //current image
let j=4; //total image

function next()
{
    document.getElementById("img"+(i+1)).classList.remove("active");
    i= (j+i+1)%j;
    document.getElementById("img" + (i+1)).classList.add("active");
    
}
function prev()
{
    document.getElementById("img"+(i+1)).classList.remove("active");
    i= (j+i-1)%j;
    document.getElementById("img" + (i+1)).classList.add("active");
   
}


