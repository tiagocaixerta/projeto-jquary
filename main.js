

$(document).ready(function() {

    $('#task-form').submit(function(event) {
        event.preventDefault(); 

  
        var task = $('#task-input').val().trim();

   
        if (task) {
       
            $('#task-list').append('<li>' + task + '</li>');

     
            $('#task-input').val('');
        }
    });

    
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
