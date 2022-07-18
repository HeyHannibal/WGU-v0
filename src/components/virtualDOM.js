import * as Mui from "@mui/material";
import React from "react";


const VirtualDom = {
    div: {
        h1:{
            textContent: 'Hello World'
        },
        p: {
            textContent: 'Are You Sure?'
        }
    },
    component: {
        obj: Mui.Button  
    }
}



// function toRender(tree) {

//     let results = [];
//     function goToBottom(obj) {
//       else {
//         let keys = Object.keys(obj); // keys of initial obj
//         if (keys.length > 1) {
//           keys.forEach((key) => goToBottom(obj[key])); // if the obj has >1 key/branch, call goToBottom on every individual branch
//           return;
//         }
//         let values = obj[keys]; /// value = Obj inner object
//         while (typeof values !== "string") {
//           keys = Object.keys(values); /// get the key of inner object
//           if (keys.length > 1) {
//             keys.forEach((key) => goToBottom(values[key])); // if more than one key/branch, call goToBo.. for every key
//             return;
//           }
//           values = values[keys]; /// values = inner object of values
//           // repeat until reach the bottom, a string
//         }
//         results.push(values);
//       }
//     }