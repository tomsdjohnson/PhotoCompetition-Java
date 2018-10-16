'use strict';
// JavaScript for use with the index page.


function upload() {
    console.log("hello");

    var formData = new FormData();

    var fileField = document.querySelector("input[type='file']");


    console.log(fileField);

    var author = $('input#author').val();
    var name = $('input#name').val();
    var license = $('input#license').val();

    var metaData = {
        author: author,
        name: name,
        license: license
    };

    var stringData = JSON.stringify(metaData);
    var blob = new Blob([stringData], {type: "application/json"});

    formData.append("rawdata", fileField.files[0]);
    formData.append("metadata", blob);

    fetch(buildUrl(""), {
        method: "POST",
        body: formData
    });


    return false;
}

