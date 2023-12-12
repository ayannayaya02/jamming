import React, {useState,useEffect} from "react";


let music = ['song','artist','album','id'];

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
    'song':'My Oh My',
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
    music
},[]
);
