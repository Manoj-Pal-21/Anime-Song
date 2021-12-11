var noOfDrumButton = document.querySelectorAll(".drum").length;
let soundObj = {
    DemonSlayer: "sounds/Demonslayer.mp3",
    Naruto: "sounds/Naruto.mp3",
    AttackonTitan: "sounds/Attackontitan.mp3",
    DeathNote: "sounds/Deathnote.mp3",
    DragonBall: "sounds/Dragonballz.mp3",
    Haikyu: "sounds/Haikyu.mp3",
    Asilentvoice: "sounds/Asilentvoice.mp3",
};
let audio = "";

for (var i = 0; i < noOfDrumButton; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
    function handleClick() {
        // this.style.backgroundColor = "grey";

        // if(this.classList.contains("w")){
        //     audio = new Audio("sounds/tom-1.mp3")
        //     audio.play();
        // }
        // else if(this.classList.contains("a")){
        //     audio = new Audio("sounds/tom-2.mp3")
        //     audio.play();
        // }

        // audio = new Audio(soundObj[this.innerHTML[0]]);
        // audio.play();
        if(audio) {
            audio.pause();
        };
        var buttonClick = this.innerHTML;
        playSound(buttonClick);
        buttonAnimation(buttonClick);
    }
}

document.addEventListener("keypress", function (event) {
    if(audio) {
        audio.pause();
    };
    playSound(event.key);
    // console.log(event);
    // alert("key pressed...");
});

function playSound(key) {
    audio = new Audio(soundObj[key]);
    audio.play();
}

// function buttonAnimation(currentkey) {
//     activeButton = document.querySelector("." + currentkey);
//     activeButton.classList.add("pressed");
//     activeButton.classList.remove("pressed");
// }

// setTimeout(function(){
//     activeButton.classList.remove("pressed");
// }, 1000);