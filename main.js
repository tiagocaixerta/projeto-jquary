

$(document).ready(function() {

    $('#task-form').submit(function(event) {
        event.preventDefault(); 

       
        var taskName = $('#task-input').val().trim();

        
        if (taskName !== '') {

            var taskItem = $('<li>').text(taskName);


            taskItem.click(function() {
                $(this).toggleClass('completed');
            });

            $('#task-list').append(taskItem);


            $('#task-input').val('');
        }
    });
});
