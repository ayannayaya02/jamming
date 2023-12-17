import React, {useState,useEffect} from "react";
import api from "./api/api.js";

function search (){
const [results,setNewResults]=useState();
return api.get("https://shazam.p.rapidapi.com/shazam-events/list"),{
    params:{
    query:song}
};
};

//^^^You were able to operate "cd" then "cd jamming" then "npm run start"  or "npm run build" in terminal 
///Which file controls the way the page looks where it doesn't say "Edit"
//after u run "build" and open project in browser ...keep following instructions!n

searchResults = ()=>{
   //Array for Search Results
   //update responses according to user inputs

   let search=[];
   console.log(search);
};

let music = [];

 music = () =>

    { 

'song'= 'Happier Than Ever',
'artist'='Billie Ellish',
'album'='Happier Than Ever',
'id'=''

},

{
    'song':'All In',
    'artist':'Lil Babby',
    'album':'My Turn (Delux)',
    'id':''
},

{
    'song':'Tummy Hurts',
    'artist':'Renee Rap',
    'album':'Snow Angel',
    'id':''
},
{
    'song': 'My Oh My',
    'artist':'Camilia Cebello ft. Dababy',
    'album':'Romance',
    'id':''
},
{
    'song':'The Sweet Escape',
    'artist':'Gwen Stefani ft. Akon',
    'album':'The Sweet Escape',
    'id':''

},
{
    'song':'Demente',
    'artist':'CHUNG HA ft. Guaynaa',
    'album':'Querencia',
    'id':''

}

console.log(music.map());
console.log(music.filter());

useEffect(()=>{
    return this.music.map();
},[]
);

