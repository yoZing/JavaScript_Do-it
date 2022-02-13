const pics = document.getElementsByClassName('pic');
const lightboxImage = document.getElementById('lightboxImage');
const lightbox = document.getElementById('lightbox');

for (let i = 0; i < pics.length; i++) {
  pics[i].addEventListener('click', showLightbox);
}

lightbox.addEventListener('click', function () {
  lightbox.style.display = 'none';
});

function showLightbox() {
  let imageSrc = this.getAttribute('data-src');
  
  lightboxImage.setAttribute('src', imageSrc);

  lightbox.style.display = 'block';
  
}
