const div = document.getElementById("content");
const date = document.getElementById("date");
const shareBtn =  document.getElementById("shareBtn");
const live =  document.getElementById("live");
const onoffstatus =  document.getElementById("onoffstatus");
const index = 9;

window.addEventListener('online',()=>{
   onoffstatus.style.display = "none";
})

window.addEventListener('offline',()=>{
  onoffstatus.style.display = "block";
})


window.addEventListener("load",()=>{
    document.getElementById('logo').style.display = 'none';
})

let displaydate = new Date()
date.innerHTML = `${displaydate.getDate()}/${displaydate.getMonth()+1}/${displaydate.getFullYear()}`


// api = https://api.cricapi.com/v1/currentMatches?apikey=c042a1a7-0240-4058-8ebb-1f0f9d00e146&offset=0

fetch('https://api.cricapi.com/v1/currentMatches?apikey=c042a1a7-0240-4058-8ebb-1f0f9d00e146&offset=0')
.then(res => res.json())
.then(data => {
   console.log(data);
   live.innerHTML = `
   <div class="flex">
   <div class="team1">
       <div class="teamlogo"><img src="${data.data[index].teamInfo[0].img}" alt="">
       </div>

       <div class="name">${data.data[index].teamInfo[0].shortname}</div>
       <div class="score">${data.data[index].score[0].r}/${data.data[index].score[0].w}</div>
       <div class="overs">(${data.data[index].score[0].o})</div>
   </div>
   <div class="vs">VS</div>
   <div class="team2">
       <div class="teamlogo"><img src="${data.data[index].teamInfo[1].img}" alt="">
       </div>

       <div class="name">${data.data[index].teamInfo[1].shortname}</div>
       <div class="score">${data.data[index].score[1].r}/${data.data[index].score[1].w}</div>
       <div class="overs">(${data.data[index].score[1].o})</div>
   </div>
</div>
<div class="result">${data.data[index].status}</div>
   `
})





fetch("data.json")
.then(res => res.json())
.then(data =>{
    for(let i = 0; i<data.matches.length;i++){
        div.innerHTML += `
        <div class="center matchid">Match ${data.matches[i].match}</div>
        <div class="displayscore">
            <div>
                <div class="team1 center">${data.matches[i].team1}</div>
                <div class="team1score center">${data.matches[i].team1score}</div>
            </div>
            <div>
                <div class="team2 center">${data.matches[i].team2}</div>
                <div class="team2score center">${data.matches[i].team2score}</div>
            </div>
        </div>
        <div class="result center">${data.matches[i].result}</div>
        `;
    }
})


const shareData = {
    title: "Smart IT World",
    text: "see ipl matches score schedule & more..",
    url: "https://sahilzore-2003.github.io/ipl2023",
  };
  
 
  
  // Share must be triggered by "user activation"
  shareBtn.addEventListener("click", async () => {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log(err)
    }
  });
  