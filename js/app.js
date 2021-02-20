function toggle(){
    var header = document.getElementById("header");
    header.classList.toggle('active');
}


// function clicko(){
//     document.getElementById("mydropdown").classList
//     .toggle("show");
// }
// window.onclick = function(event){
//     if(!event.target.matches('.dropbtn')){
//         var dropdowns = document.getElementsByClassName
//         ("dropdown-content");
//         var i;
//         for(i=0;i<dropdowns.length;i++){
//             var opendropdown = dropdowns[i];
//             if(opendropdown.classList.contains('show')){
//                 // opendropdown.classList.remove('show');
//             }
//         }
//     }
// }

$(document).ready(function(){
 

    $('.project-popup').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
          },
    });


  });