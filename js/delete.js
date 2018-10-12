'use strict';
// JavaScript for use with the index page.


function end(imageId) {


    console.log(imageId);

    fetch(buildUrl("/id/" + imageId), {
        headers: {
            'Authorization': 'Basic ' + btoa('moderator:moderator')
        },
        method: "DELETE",
    });

    ($("#wrapper" + imageId))[0].style = "display:none";

    return false;
}

