const div = document.getElementById("content");
window.addEventListener("load",()=>{
     document.getElementById('logo').style.display = 'none';
})

fetch("data.json")
.then(res => res.json())
.then(data =>{
    console.log(data.matches.length)
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