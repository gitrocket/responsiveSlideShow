const mainImg = document.querySelector('.main-image');
const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach((thumb) => {
    thumb.addEventListener('click', (e) => {
            mainImg.src = e.target.src;
            mainImg.classList.add('fade-in');
            setTimeout(removeFadeIn, 100);
    })
})

function removeFadeIn() {
    mainImg.classList.remove('fade-in')
}