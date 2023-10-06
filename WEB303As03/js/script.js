function loadDataWithAjax() {
    // Sending an AJAX request
    $.ajax({
        url: 'team.json',  // Request URL
        type: 'GET',  // HTTP method
        dataType: 'json',  // Expected data type
        beforeSend: function() {
            // Setting 'Loading...' message before sending the request
            $('#team').html('Loading...');
        },
        error: function() {
            // Setting error message on request failure
            $('#team').html('The content could not be retrieved.');
        },
        success: function(data) {
            var teamHtml = ''; 
            $.each(data, function(index, member) {
                teamHtml += '<h2>' + member.name + '</h2>';
                teamHtml += '<h5>' + member.position + '</h5>';
                teamHtml += '<p>' + member.bio + '</p>';
            });
        }
    });
}

function loadDataWithGetJSON() {
   
    $.getJSON('team.json', function(data) {
        var teamHtml = '';  
        $.each(data, function (index, member) {
          
            teamHtml += '<h2>' + member.name + '</h2>';
            teamHtml += '<h5>' + member.position + '</h5>';
            teamHtml += '<p>' + member.bio + '</p>';
        });
        $('#team').html(teamHtml);
    });
}


$(document).ready(function() {
  
    loadDataWithGetJSON();
    
});
