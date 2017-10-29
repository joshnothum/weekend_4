console.log('js soruced');

var myApp = angular.module('myApp', []);

myApp.controller('GalleryController', function ($http) {
    var gallery = this;
    gallery.addButton = function (photo) {
        console.log();
        
        photo.count += 1;

    };

    gallery.refreshGallery = function () {

    $http.get('/pictures').then(function success(response) {
        console.log('get response:',response.data);
        // NOTE: Angular responses are put in a data object
        gallery.pictures = response.data;
    });
    };

    gallery.refreshGallery();
    
    gallery.flipCard = function (photo) {
        photo.flipped = !photo.flipped;
    };
});

/*     gallery.pictures = [{name: 'shower',description: 'Se fue el agua',count: 0}, {name: 'manuel',description: 'A Dominican man and his accordion',count: 0}, {name: 'new_bpf',
        description: 'after a couple years of harrassment, I finally got a picture with favorite band of mine',count: 0}, {name: 'bender',
        description:'An old junkyard owner made this',
        count: 0},{
        name: 'bcwb_opt',
        description:'I took this yesterday',
        count:0,
    },
    {
        name: 'jaxon_football',
        description:'my nephew taking backyard routes seriously',
        count: 0,
    }];*/