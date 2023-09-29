 
//Ronit Dhillon
//W0828771
// WEB303 Assignment 2
$(document).ready(function () {  
    $("#prospect").click(function (event) {   
        event.preventDefault();
        loadContent("prospect.html"); 
    });

    //for the click event Convert link
    $("#convert").click(function (event) {     
        event.preventDefault();
        loadContent("convert.html"); 
    });

    //for the click event Retain link
    $("#retain").click(function (event) { 
        event.preventDefault(); 
        loadContent("retain.html"); 
    });

    function loadContent(page) {     
        
$("#content").slideUp(400, function () { 
$.ajax({
url: page,
type: "GET",
dataType: "html",   
success: function (data) {    
$("#content").html(data);
  $("#content").slideDown(400);  
},
error: function () {    
console.error("Could not fetch as error while loading");
},
});
});
}
});  
