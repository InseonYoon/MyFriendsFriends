const imgUrl = 'https://placedog.net/1000/1000?r';
const gallery = document.getElementById('gallery');
const isClick = document.querySelector('.showmore');
let timer = 0;

isClick.addEventListener('click', () => {
    document.getElementById('galleryLoad').style.display='none';
    for(let i=0; i<6; i++) {
        fetchImage();
    }

    document.addEventListener('scroll', () => {
        if (!timer) {
            timer = setTimeout(function () {
                timer = null;
                if ((window.innerHeight + window.scrollY) >= gallery.offsetHeight) {
                    fetchImage();
                }
            }, 200);
        }
    });
});



function fetchImage() {

    fetch(imgUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response error');
            }
            return response.blob();
        })
        .then(blob => {
            const imgUrl = URL.createObjectURL(blob);
            const imgElement = document.createElement('img');
            imgElement.src = imgUrl;
            imgElement.alt = '남의 집 강쥐';
            gallery.appendChild(imgElement);
        })
        .catch(error => {
            console.error('Error fetching the image:', error);
        });

}