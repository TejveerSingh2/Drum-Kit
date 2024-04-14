for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // var text=document.querySelectorAll(".drum")[i].innerHTML
        var sound=this.innerHTML;
        makesound(sound);  
        buttonanimation(sound);
    });
}

document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonanimation(event.key);
});

function makesound(key){
    switch (key) {
        case "w":
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();    
        break;
        case "a":
            var audio=new Audio("./sounds/tom-2.mp3");
            audio.play();   
        break;
        case "s":
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play(); 
        break;
        case "d":
            var audio=new Audio("./sounds/tom-4.mp3");
            audio.play();    
        break;   
        case "j":
            var audio=new Audio("./sounds/snare.mp3");
            audio.play();    
        break; 
        case "k":
            var audio=new Audio("./sounds/crash.mp3");
            audio.play();
        break;
        case "l":
            var audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();    
        break;      
        default:
            console.log(); 
            break;
    }
}

function buttonanimation(currentkey){
    document.querySelector("."+currentkey).classList.add("pressed");
    
    setTimeout(function(){
        document.querySelector("."+currentkey).classList.remove("pressed");
}, 1);
}

// function handleClick(){
//     alert("I got clicked");
// }
// var audio=new Audio("./sounds/tom-1.mp3");
// audio.play();