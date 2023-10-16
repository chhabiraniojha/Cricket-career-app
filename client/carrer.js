const entryForm=document.getElementById("form");
const searchForm=document.getElementById("search");


entryForm.addEventListener("submit",onSubmitCricketerEntry);
searchForm.addEventListener("submit",onSubmitSearch);
window.addEventListener("DOMContentLoaded",onReload);


function onSubmitCricketerEntry(e){

   
    const name=document.getElementById("name").value;
    const dob=document.getElementById("dob").value;
    const photo=document.getElementById("photo").value;
    const place=document.getElementById("place").value;
    const carrer=document.getElementById("carrer").value;
    const score=document.getElementById("score").value;
    const fifties=document.getElementById("fifties").value;
    const centuries=document.getElementById("centuries").value;
    const wickets=document.getElementById("wickets").value;
    const matches=document.getElementById("matches").value;
    const average=document.getElementById("average").value;
    
    const newPlayer={
        name:name,
        dob:dob,
        photo:photo,
        place:place,
        carrer:carrer,
        score:score,
        fifties:fifties,
        centuries:centuries,
        wickets:wickets,
        matches:matches,
        average:average
    }
   
    const editPlayer=localStorage.getItem("editPlayer");
    const toBeEdit=localStorage.getItem("searchedCricketerName");

    if(editPlayer=="true"){
        localStorage.setItem("editPlayer","false");
        axios.put(`http://localhost:3000/carrer/edit-cricketer/${toBeEdit}`,newPlayer);
        
    }else{
        axios.post("http://localhost:3000/carrer/post-cricketer",newPlayer);
    }
    

}

function onSubmitSearch(e){
    // e.preventDefault();
     const name=document.getElementById("searchName").value;
     localStorage.setItem("searchedCricketerName",name);
}

async function onReload(e){
    const editPlayer=localStorage.getItem("editPlayer");
    if(editPlayer=="true"){
        const name=localStorage.getItem("searchedCricketerName");
        const cricketer= await axios.get(`http://localhost:3000/carrer/get-cricketer/${name}`);
        const obj=cricketer.data[0];
     document.getElementById("name").value=obj.name;
     document.getElementById("dob").value=obj.dob;
     document.getElementById("photo").value=obj.photo;
     document.getElementById("place").value=obj.place;
     document.getElementById("carrer").value=obj.carrer;
     document.getElementById("score").value=obj.score;
     document.getElementById("fifties").value=obj.fifties;
     document.getElementById("centuries").value=obj.centuries;
     document.getElementById("wickets").value=obj.wickets;
     document.getElementById("matches").value=obj.matches;
     document.getElementById("average").value=obj.average;
    }
    
   
}

