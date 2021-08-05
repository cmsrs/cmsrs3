var LOAD_NUM = 18;
//var LOAD_NUM = 9;
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var currentImgId = '';
var images = [];


function showPartImages(imgs)
{
        for (const objImage of imgs) {
                var img = document.createElement('img'); 
                img.id = "img-"+objImage.id;
                img.src =  objImage.medium; 
                img.alt =  objImage.altlang; 
                img.className = "m-3 myImgs";
                img.addEventListener("click", showModal, false);
                document.getElementById('gallery').appendChild(img); 
        }
}

function showModal()
{
        const imgId = this.id.replace("img-", "");
        for (const objImage of imagesGlobal) {
                if( objImage.id === parseInt(imgId)){
                        modal.style.display = "block";
                        modalImg.src = objImage.org;
                        currentImgId = objImage.id;
                        captionText.innerHTML = objImage.altlang;
                }
        }        
}

function scrollImg() {

        //let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        let  bottomOfWindow =  ((window.innerHeight + window.scrollY) >= document.body.offsetHeight);

        if (bottomOfWindow) {

                if(images.length < imagesGlobal.length) {
                        var toAppend = imagesGlobal.slice(
                                images.length,
                                LOAD_NUM + images.length
                        );
                        showPartImages(toAppend);
                        images = images.concat(toAppend);                        
                } 
        }
}

//document.getElementById(document.body).on('touchmove', scrollImg); // for mobile
//$(window).on('scroll', scrollImg); 

window.onscroll = scrollImg; 
//document.body.addEventListener('touchmove', scrollImg, false);
window.addEventListener('touchmove', scrollImg, false);

document.addEventListener('DOMContentLoaded', (event) => {        
        images = imagesGlobal.slice(0, LOAD_NUM);
        showPartImages(images);
});


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
        modal.style.display = "none";
        modalImg.src = '';
        captionText.innerHTML = '';
}

document.addEventListener('keydown', (event) => {        
        if (event.key === 'Escape') {
                //if esc key was not pressed in combination with ctrl or alt or shift
                const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey);
                if (isNotCombinedKey) {
                        modal.style.display = "none";
                        modalImg.src = '';
                        captionText.innerHTML = '';                
                }
        }
});

function plusSlides(direct){
        for (var i = 0; i < imagesGlobal.length; i++) {
                if( imagesGlobal[i].id === currentImgId ){
                        var index = i + direct;
                        if(index < 0){
                                index = imagesGlobal.length -1;
                        }
                        if(index > imagesGlobal.length - 1){
                                index = 0;
                        }
                        if(imagesGlobal[index]){
                                modalImg.src = imagesGlobal[index].org;
                                currentImgId = imagesGlobal[index].id;
                                captionText.innerHTML = imagesGlobal[index].altlang;   
                                break;        
                        }                
                }
        }
}
