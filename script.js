

// "use strict";
// let suman= document.getElementById("suman");
// console.log(suman.innerHTML)//get data inside div of id =suman in console

// let suman= document.getElementById("suman");
// const data=suman.innerHTML;
// for(let i=0; i<data.length; i++){
//     document.write([data[i]])
// }


"use strict";
// // DOM(Document object manipulation)

// const suman=document.getElementById("suman")

// suman.innerHTML="suman worked in 10 countries"//it will change the content of id=suman

//catch by tags

// const tags=document.getElementsByTagName("p");
// //adding both para and putting in div add2para
// const suman=document.getElementById("suman");

// suman.innerHTML=tags//[object HTMLCollection]
// //catch all the paragraph and concatenate insise a DIV elemnet
// suman.innerHTML=tags[0].innerHTML+tags[1].innerHTML

//catch images
//change the image using dom manipulation to virat

// let image=document.getElementById("image");
// image.src="virat.jpg"
// image.innerHTML="India is great"//this will not be displayed because it is image

//DOM with html forms

// function suman(){
//     const form_data=document.forms["user_form"]["first_name"].value
//     alert(form_data)
// }

// now adding form_data to id=display

// function suman(){
//     const form_data=document.forms["user_form"]["first_name"].value
//     document.getElementById("display").innerHTML=form_data
// }

//Create HTML element using DOM 

// const suman=document.createElement("p");
// const data=document.createTextNode("this is suman paragrapgh");

// const final=document.getElementById("suman");
// suman.appendChild(data);
// final.appendChild(suman);

//create a div element and add css to it

//DIV 1
const alpha=document.createElement("div");
alpha.id="Ayush"
alpha.innerHTML="this DIV is dynamically generated by Ayush Tiwari"
document.body.appendChild(alpha);//stick the alpha div to the body

//DIV 2
 const beta=document.createElement("div");
 beta.id="kohli"
 beta.className="common"
 //add inline css using javascript
 beta.style.textTransform="uppercase"
 beta.innerHTML="this is a beta div"
 document.body.appendChild(beta)

//to add image dynamically

//  const alpha=document.createElement("img");
// alpha.id="Ayush"
// alpha.src="virat.jpg"
// document.body.appendChild(alpha);

//Delete or remove a HTML element using DOM manipulation 

document.getElementById('btn1').addEventListener("click",function(){
    document.getElementById("Ayush").remove()//remove that html element whose id is Ayush
})