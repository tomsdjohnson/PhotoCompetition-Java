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

    fetch(buildUrl(''))
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request to /top succeeded: ');
            console.log(json);

            json.sort(function (a, b) {return b.score - a.score})
            json.splice(0, 1);

            for (let imageIdx in json) {
                console.log(imageIdx);

                $('#the-rest').append('\n' +
                    '<div class="image-wrapper" id="wrapper' + json[imageIdx].id + '">\n' +
                    '    <div class="secondary-content">\n' +
                    '        <div class="heading">\n' +
                    '            <span class="title" style="display: inline-block;" id="image-name">'+ json[imageIdx].name + '</span>\n' +
                    '            <div class="info">\n' +
                    '                <button class="info"><img class="thumbs" style="display: inline-block;" src="menu_icon.png"></button>\n' +
                    '                <div class="dropdown-content">\n' +
                    '                    <b>Author: </b><p id="image-author">'+ json[imageIdx].author + '</p>\n' +
                    '                    <b>Licence: </b><p id="image-license">'+ json[imageIdx].license + '</p>\n' +
                    '                    <input type="submit" onclick="return end(' + json[imageIdx].id + ');" value="Delete">\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '\n' +
                    '        <div class="image-container">\n' +
                    '            <img id="main-image" src="'+ json[imageIdx].url + '">\n' +
                    '        </div>\n' +
                    '\n' +
                    '        <div class="rank">\n' +
                    '            <img class="top-up" id="up-vote" src="vote_up.png">\n' +
                    '            <span class="top-text" id="image-score">'+ json[imageIdx].score + '</span>\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '</div>\n')
            }

        })
        .catch(function (err) {
            console.error('Request to /random failed: ', err);
        });







}

$(function () {
    loadtopImage();
});
