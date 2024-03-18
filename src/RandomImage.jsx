import React from "react";
const imageStyle={
    width:'40%',
    height:'auto',

};
export default function RandomImage({src,alt}){
    return <img src={src} alt={alt} style={imageStyle}/>
}