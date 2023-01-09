const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    deleteImgs();
    const searchTerm = this.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    makeImages(res.data);
    this.elements.query.value = '';
})

imgsDiv = document.querySelector('#searchResults')
const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            img.alt = result.show.name;
            img.title = result.show.name;
            const atag = document.createElement('A');
            atag.href = result.show.url;
            atag.target = "_blank";
            atag.append(img);
            imgsDiv.append(atag);
        }
    }
}


const deleteImgs = () => {
    const allImgs = document.querySelectorAll('img')
    if (allImgs.length > 0) {
        for (let img of allImgs) {
            img.remove();
        }
    }
}