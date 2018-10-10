'use strict';
// JavaScript for use with the index page.

function loadtopImage() {
    fetch(buildUrl('/top'))
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request to /top succeeded: ');
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

            var imageScore = $('#image-score');
            imageScore.text(json.score);

        })
        .catch(function (err) {
            console.error('Request to /random failed: ', err);
        });
}

$(function () {
    loadtopImage();
});
