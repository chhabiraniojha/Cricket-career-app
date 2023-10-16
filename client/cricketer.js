

const carrerDetails=document.getElementById("carrer_details");
const carrer_details=Array.from(carrerDetails.children);
const player_image=document.getElementById("player_image");
const editPlayer=document.getElementById("editPlayer");
const searchAddon=document.getElementById("search-addon");






window.addEventListener("DOMContentLoaded",onReload);
editPlayer.addEventListener("click",editCricketer);
searchAddon.addEventListener("submit",onSubmitSearch);

function onSubmitSearch(e){
    const searchAddonInput=document.getElementById("search-addon-input").value;
    localStorage.setItem("searchedCricketerName",searchAddonInput)
}


async function onReload(e){
     const name=localStorage.getItem("searchedCricketerName");
     const cricketer= await axios.get(`http://localhost:3000/carrer/get-cricketer/${name}`);
     showCricketerOnTheScreen(cricketer.data[0]);
}

async function editCricketer(e){
    localStorage.setItem("editPlayer","true")
}





function showCricketerOnTheScreen(obj){
    const playerName=document.getElementById("playerName");
    const playerDob=document.getElementById("playerDob");
    const profile=document.getElementById("profile");
    playerName.innerText=obj.name;
    playerDob.innerText=obj.dob;
    profile.innerText=obj.carrer;
    player_image.src=obj.photo;
    carrer_details.forEach((details)=>{
        if(details.firstChild.textContent=="Name:"){
           details.appendChild(document.createTextNode(obj.name))
        }else if(details.firstChild.textContent=="Date Of Birth:"){
            details.appendChild(document.createTextNode(obj.dob))
        }else if(details.firstChild.textContent=="Birth Place:"){
            details.appendChild(document.createTextNode(obj.place))
        }else if(details.firstChild.textContent=="Score:"){
            details.appendChild(document.createTextNode(obj.score))
        }else if(details.firstChild.textContent=="Fifties:"){
            details.appendChild(document.createTextNode(obj.fifties))
        }else if(details.firstChild.textContent=="Centuries:"){
            details.appendChild(document.createTextNode(obj.centuries))
        }else if(details.firstChild.textContent=="Wickets:"){
            details.appendChild(document.createTextNode(obj.wickets))
        }else if(details.firstChild.textContent=="No of Matches:"){
            details.appendChild(document.createTextNode(obj.matches))
        }else if(details.firstChild.textContent=="Average:"){
            details.appendChild(document.createTextNode(obj.average))
        }
    });
}
