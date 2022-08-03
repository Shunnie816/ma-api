// アコーディオンメニュー 
const titles = document.getElementsByClassName('acd');
function accordion() {
    const acd = this.nextElementSibling;
    acd.classList.toggle('closed');
    acd.classList.toggle('is-open');
}

for (i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", accordion);
}

// モーダルウィンドウ
const messageBtn = document.getElementById('btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

messageBtn.addEventListener("click", modalOpen);
function modalOpen() {
    modal.style.display = 'block';
};

closeBtn.addEventListener("click", modalClose);
function modalClose() {
    modal.style.display = 'none';
};

addEventListener('click', outsideClose);
function outsideClose(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    };
};

// Swiper.jsのサンプルコード
const swiper = new Swiper(".swiper-container", {
    // ドットインジケーターの表示
    pagination: {
        el: ".swiper-pagination",
    },
    // 前後スライドボタンを表示
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true, // ループの有効化
});