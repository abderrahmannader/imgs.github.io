
var modelElement = document.querySelectorAll(".model-main")

var modelElementArray = Array.from(modelElement)




var indexNum = 0

for(var i = 0; i < modelElement.length; i++){

    modelElement[i].addEventListener('click', function(e){

        var imgsrc = e.target.getAttribute("src")

        document.querySelector(".model-img").src = imgsrc

       indexNum = modelElementArray.indexOf(e.target)

      document.querySelector(".model").style.display = "block"
        
    })
}


document.querySelector(".exit").addEventListener('click', function(){
    document.querySelector(".model").style.display = "none"
})

document.querySelector(".arrow2").addEventListener('click', function(){
    
    if(indexNum < modelElementArray.length -1 ){
        indexNum ++;

    imgsrc = modelElementArray[indexNum].getAttribute("src")


    document.querySelector(".model-img").src = imgsrc
    }else{
        indexNum = 0
    }


})

document.querySelector(".arrow").addEventListener('click', function(){
    
    if(indexNum > 0 ){
        indexNum --;

    imgsrc = modelElementArray[indexNum].getAttribute("src")


    document.querySelector(".model-img").src = imgsrc
    }else{
        indexNum = modelElementArray.length
    }


})



