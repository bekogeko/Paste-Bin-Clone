import '../pages/index'
import React from 'react'
import next from 'next'
import Image from 'next/image'

function Truncate(parag){
    if(parag.length >= 20){
        var truncated = parag.substring(0,20);
        return truncated + "..."
    }
    else{
        return parag;
    }
}

function RecentBin({ recentBinProf, binDesc}){
    return(
     <div className="flex p-2 bg-gray-900 mt-0.5">
        <Image className="rounded-full" src= {require('/public/profilePic.png')} alt="avatar" width="48" height="48"/>
         <div className="text-white ml-2" style={{fontFamily:'Consolas'}}>
            <h2>{recentBinProf}</h2>
            <a href='#' title={binDesc} className="text-gray-600 hover:underline">{Truncate(binDesc)}</a>
         </div>
     </div>   
    )
}


export default RecentBin;