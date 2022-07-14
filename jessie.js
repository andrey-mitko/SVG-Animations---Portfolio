const headerTag = document.querySelector('header');
const blobGroups = document.querySelectorAll('g.blob');
const sectionTags = document.querySelectorAll('section');
const arrowTag = document.querySelector('.arrow');

const easing = (x) => {
    return x * x * x;
}

const fadeHeader = () => {
    const pixels = window.pageYOffset;
    headerTag.style.opacity = 1 - easing(pixels / 500);
}

const fadeArrow = () => {
    const pixels = window.pageYOffset;
    arrowTag.style.opacity = 1 - easing(pixels / 200);
}

const checkBlobs = () => {
    const pixels = window.pageYOffset;
    blobGroups.forEach((blob, index) => {

        const currentSection = sectionTags[index];

        if (pixels > currentSection.offsetTop - 300) {
            blob.classList.add('in-view');
        } else {
            blob.classList.remove('in-view');
        }
    });
}

window.addEventListener('scroll', () => {
    fadeArrow();
    fadeHeader();
    checkBlobs();
});