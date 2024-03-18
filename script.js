// 1) Select by ID
// function check(){
//     box=document.getElementById("from").value;
//     document.getElementById("to").innerHTML=box;
// }
// 1) Ends here

// 2) DOM select by tag
//   function check(){
//     box=document.getElementsByTagName("input");
//     data=document.getElementsByTagName("p");

//     for (i=0; i<box.length; i++) {
//         data[i].innerHTML=box[i].value;
//     }
//   }
// 2) DOM select by tag

// 3} DOM Select from Tags
// function check(){
//         area=document.getElementById("mydiv");
//         box=area.getElementsByTagName("input");
//         data=document.getElementsByTagName("p");
    
//         for (i=0; i<box.length; i++) {
//             data[i].innerHTML=box[i].value;
//         }
//     }
// 3} DOM Select from Tags

// 4) Adding css to DOM
function check(){
            area=document.getElementById("mydiv");
            box=area.getElementsByTagName("input");
            data=document.getElementsByTagName("p");
        
            for (i=0; i<box.length; i++) {
                data[i].innerHTML=box[i].value;
                // data[i].style.color="red";
                // data[i],style.backgroundcolor="yellow";
                data[i].className="myclass1";
            }
        }
// 4) Adding css to DOM
