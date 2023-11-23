let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressbar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Amhi veer", filePath:"songs/1.mp3", coverPath:"covers/1.png"},
    {songName:"Heeriye", filePath:"songs/2.mp3", coverPath:"covers/1.png"},
    {songName:"Kya Loge Tum", filePath:"songs/3.mp3", coverPath:"covers/1.png"},
    {songName:"Main Hoon Saath Tere", filePath:"songs/4.mp3", coverPath:"covers/1.png"},
    {songName:"Sun le Zara", filePath:"songs/5.mp3", coverPath:"covers/1.png"},
    {songName:"Swag se karenge swagat", filePath:"songs/6.mp3", coverPath:"covers/1.png"},
    {songName:"Tera Noor", filePath:"songs/7.mp3", coverPath:"covers/1.png"},
    
    
]
songItems.forEach((element,i)=>{
   element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//audioElement.play();

//handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value=progress;

})

myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressbar.value * audioElement.duration)/100 ;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songsItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        //audioElement.currentTime=myProgressbar.value * audioElement.duration/100 ;
    })
}
Array.from(document.getElementsByClassName('songsItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e);
        makeAllPlays();
        
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        //audioElement.src='songs/3.mp3';
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songName;
         audioElement.currentTime=0;
         audioElement.play();
         gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>6){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})