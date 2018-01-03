(function(angular) {
    'use strict';    
angular.module('myApp', []).controller('MainCtrl', function MainCtrl() {
this.userKind = 'admin';
this.userPrivel = 1;
this.userId = 1;

    this.ebook = {
        id: "1",
        title: 'Spawnkl;kjkfldafklajd;dj',
        image: '123',
        price: 5,
        description: " \
         bla bla description bla bla description bla " + " \
          bla description bla bla description bla bla descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla \
        descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla description \
        bla description bla bla description bla bla descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla \
        descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla description "
    
      };

      this.ebook1 = {
        id: 56254,
        title: 'The flowers and gardens of Japan',
        author: 'Cane, Florence Du',
        category: 'text',
        imageUrl: 'gutenberg/56254.jpg',        
        datePublished: new Date(2017, 12,26),
        price: 1
        };

        this.ebook2 = {
            id: 56255,
            title: 'All But Lost Vol 2 of 3 A Novel',
            author: 'Henty, G. A. (George Alfred)',
            category: 'text',
            imageUrl: 'gutenberg/56255.jpg',
            datePublished: new Date(2017, 12,26),
            price: 1
            };

            this.ebook3 = {
                id: 56255,
                title: 'All But Lost Vol 2 of 3 A Novel',
                author: 'Henty, G. A. (George Alfred)',
                category: 'text',
                imageUrl: 'gutenberg/56256.jpg',                
                datePublished: new Date(2017, 12,26),
                price: 1
                };
});
})(window.angular);
