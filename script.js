const div = document.getElementById("content");
const date = document.getElementById("date");
const shareBtn =  document.getElementById("shareBtn");

window.addEventListener("load",()=>{
    document.getElementById('logo').style.display = 'none';
})

let displaydate = new Date()
date.innerHTML = `${displaydate.getDate()}/${displaydate.getMonth()+1}/${displaydate.getFullYear()}`






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
  