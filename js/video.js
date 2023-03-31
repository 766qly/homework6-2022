var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log("Autoplay is set to " + video.autoplay);
});


document.querySelector("#play").addEventListener("click", function(){
	console.log("Play Video");
	video = document.querySelector("#player1");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video = document.querySelector("#player1");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow Down Video");
	video = document.querySelector("#player1");
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed Up Video");
	video = document.querySelector("#player1");
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip Video");
	video = document.querySelector("#player1");
	console.log("Original location " + video.currentTime);
	video.currentTime += 10;
	if(video.currentTime >= video.duration){
		video.currentTime =0;
		console.log("Going back to beginning");
	}
	console.log("New location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(){
	video = document.querySelector("#player1");
	if (video.muted) {
		console.log("Umute Video");
	}else{
		console.log("Mute Video");
	}
	video.muted = !video.muted;
	mute = document.querySelector("#mute");
	if (video.muted) {
		mute.innerHTML = "Unmute";
	}else{
		mute.innerHTML = "Mute"
	}
});

document.querySelector("#slider").addEventListener("change", function(){
	console.log("Change Volume");
	console.log(this.value + "%");
    video = document.querySelector("#player1");
	document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = this.value / 100;
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Change to oldSchool");
    video = document.querySelector("#player1");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Change to original");
    video = document.querySelector("#player1");
	video.classList.remove("oldSchool")
});



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

