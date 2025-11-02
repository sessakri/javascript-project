function upDate(previewPic) {
    console.log("upDate called");
    console.log("Image source:", previewPic.src);
    console.log("Image alt:", previewPic.alt);

    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.style.color = '#fff';
}


function unDo() {
    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = "Hover over an image below to display here";
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.style.color = '#fff';
}


const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(img => {
    img.addEventListener('mouseover', () => upDate(img));
    img.addEventListener('mouseout', () => unDo());
});
