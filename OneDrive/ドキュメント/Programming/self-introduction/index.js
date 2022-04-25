const titles = document.getElementsByClassName('acd');
function accordion() {
    const acd = this.nextElementSibling;
    acd.classList.toggle('closed');
    acd.classList.toggle('is-open');
}

for (i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", accordion);
}