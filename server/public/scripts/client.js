console.log('js soruced');

var myApp = angular.module('myApp', []);

myApp.controller('GalleryController', function () {
    var gallery = this;
    gallery.pictures = [{name:'shower', description:'Se fue el agua' }, {name:'manuel'}, {name: 'new_bpg_opt'}];
    gallery.count = 0;
    gallery.addButton = function () {
        gallery.count += 1;
    };
    
});