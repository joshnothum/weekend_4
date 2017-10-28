console.log('js soruced');

var myApp = angular.module('myApp', []);

myApp.controller('GalleryController', function () {
    var gallery = this;
    gallery.pictures = [{name:'shower'}, {name:'weird-family-photographs-18'}];
    
    
});