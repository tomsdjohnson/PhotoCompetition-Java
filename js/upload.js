'use strict';
// JavaScript for use with the index page.


$(function() {
    $('#upload-form')
        .submit(function(event) {
            console.log("hello");

            var formData = new FormData();
            


            $.post( buildUrl(""), data, function() {
                console.log("uploaded");
            });

            event.preventDefault();
        });

});


