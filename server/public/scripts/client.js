console.log('js soruced');

var myApp = angular.module('myApp', []);

myApp.controller('GalleryController', function () {
    var gallery = this;
    gallery.pictures = [{
        name: 'shower',
        description: 'Se fue el agua',
        count: 0
    }, {
        name: 'manuel',
        description: '',
        count: 0
    }, {
        name: 'new_bpf',
        count: 0
    }, {
        name: 'bender',
        count: 0,
    }];
    gallery.addButton = function (photo) {
        console.log();
        
        photo.count += 1;
    };
    
});