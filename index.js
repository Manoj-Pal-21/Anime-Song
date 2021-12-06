var noOfDrumButton = document.querySelectorAll(".drum").length;
let soundObj = {
    w: "sounds/tom-1.mp3",
    a: "sounds/tom-2.mp3",
    s: "sounds/tom-3.mp3",
    d: "sounds/tom-4.mp3",
    j: "sounds/crash.mp3",
    k: "sounds/kick-bass.mp3",
    l: "sounds/snare.mp3",
};

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

        audio = new Audio(soundObj[this.classList[0]]);
        audio.play();

    }
}

