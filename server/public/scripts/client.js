console.log('js soruced');

var galleryApp = angular.module('galleryApp', []);

galleryApp.controller('GalleryController', function () {
    var gallery = this;
    gallery.pictures = [{name: 'weird-family-photographs-18'}, {name: 'DSCF0020'}];
    
});