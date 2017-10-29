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
        description: 'A Dominican man and his accordion',
        count: 0
    }, {
        name: 'new_bpf',
        description: 'after a couple years of harrassment, I finally got a picture with favorite band of mine',
        count: 0,
    }, {
        name: 'bender',
        description:'An old junkyard owner made this',
        count: 0,
    },{
        name: 'bcwb_opt',
        description:'I took this yesterday',
        count:0,
    }];
    gallery.addButton = function (photo) {
        console.log();
        
        photo.count += 1;
    };
    
});