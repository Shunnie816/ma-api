'use strict'


// Hobbies 画像切り替え
const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function (item, index) {
    item.onclick = function () {
        document.getElementById('bigimg').src = this.dataset.image;
    }
});


// home-wrapper slide-show
const images = [
    'https://github.com/Shunnie816/Shunnies-room/blob/master/tree_road.jpg?raw=true',
    'https://github.com/Shunnie816/Shunnies-room/blob/master/beach1.JPG?raw=true',
    'https://github.com/Shunnie816/Shunnies-room/blob/master/sealion.JPG?raw=true',
    'https://github.com/Shunnie816/Shunnies-room/blob/master/leefsea.jpg?raw=true',
    'https://github.com/Shunnie816/Shunnies-room/blob/master/sunset.jpg?raw=true'
];

const extraImages = [
    'https://github.com/Shunnie816/Shunnies-room/blob/master/my_photo.jpg?raw=true',
    'https://github.com/Shunnie816/Shunnies-room/blob/master/piano.jpg?raw=true',
    'https://github.com/Shunnie816/Shunnies-room/blob/master/guitar.jpg?raw=true',
    'https://github.com/Shunnie816/Shunnies-room/blob/master/bike.jpg?raw=true',
    'https://github.com/Shunnie816/Shunnies-room/blob/master/game.jpg?raw=true'
];

images.forEach(function (item, index) {
    preloadImage(item);
});

extraImages.forEach(function (item, index) {
    preloadImage(item);
}); 

let current = 0;
const mainImage = document.getElementById('main-image');

function changeImage(num) {
    if (current + num >= 0 && current + num < images.length) {
        current += num;
        mainImage.style.backgroundImage = `url(${images[current]})`;
        pageNum();
    }
};

function pageNum() {
    document.getElementById('page').textContent = `${current + 1} / ${images.length}`;
}

pageNum();

document.getElementById('prev').onclick = function () {
    changeImage(-1);
    console.log("左がクリックされました");
};

document.getElementById('next').onclick = function () {
    changeImage(1);
    console.log("右がクリックされました");
};

// 画像をあらかじめ読み込む
function preloadImage(path) {
    let imgTag = document.createElement('img');
    imgTag.src = path;
}