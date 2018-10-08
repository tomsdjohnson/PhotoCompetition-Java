'use strict';
// JavaScript containing shared constants, for use in all pages.

var backendIp = '18.202.128.247';
var token = 'd927ccc9-c9b3-4e0f-9dd6-dadfc2c7c3b6';

function buildUrl(path) {
    return 'http://' + backendIp + '/images' + path + '?token=' + token;
}
