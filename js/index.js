'use strict';
// JavaScript for use with the index page.

var storeId;

function loadRandomImage() {
    fetch(buildUrl('/random'))
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request to /random succeeded: ');
            console.log(json);

            var mainImage = $('#main-image');
            mainImage.attr('src', json.url);
            mainImage.attr('alt', 'Photo Competition image, ' + json.name);

            var imageName = $('#image-name');
            imageName.text(json.name);

            var imageLicense = $('#image-license');
            imageLicense.text(json.license);

            var imageAuthor = $('#image-author');
            imageAuthor.text(json.author);

            storeId = json.id;
            console.log(storeId);

        })
        .catch(function (err) {
            console.error('Request to /random failed: ', err);
        });
}

function voteUp() {
    $.post( buildUrl("/id/" + storeId + "/vote/up"), function( data ) {
        $( ".result" ).html( data );
    });
    loadRandomImage()
}

function voteDown() {
    $.post(buildUrl( "/id/" + storeId + "/vote/down"), function( data ) {
        $( ".result" ).html( data );
    });
    loadRandomImage()
}

$(function () {
    loadRandomImage();
});
