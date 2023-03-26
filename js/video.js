var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});


document.querySelector("#play").addEventListener("click", function(){
	console.log("Play Video");
	video = document.querySelector("video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video = document.querySelector("video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow Down Video");
	video = document.querySelector("video");
	video.playbackRate *= 0.95;
	console.log("Current Speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Slow Down Video");
	video = document.querySelector("video");
	video.playbackRate /= 0.95;
	console.log("Current Speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip Video");
	video = document.querySelector("video");
	video.currentTime += 15;
	if(video.currentTime >= video.duration){
		video.currentTime =0;
	}
	console.log("Current location: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(){
	video = document.querySelector("video");
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
	console.log(this.value)
    video = document.querySelector("video");
	video.volume = this.value / 100;
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Change to oldSchool");
    video = document.querySelector("video");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Change to original");
    video = document.querySelector("video");
	video.classList.remove("oldSchool")
});



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

