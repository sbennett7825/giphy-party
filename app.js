const form = document.querySelector("form");
const giphyList = document.getElementById("giphy-list");
const removeButton = document.getElementById("remove-button");

//Collecting search input from form on submit and passing to getGiphy function
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchInput = document.getElementById("search-input").value;
    getGiphy(searchInput)}
    );

//Inputting search input into giphy API, getting results, and passing results to renderGiphy function
async function getGiphy(searchInput){
    const results = await axios.get('http://api.giphy.com/v1/gifs/search', {params:{q: searchInput, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
    renderGiphy(results);
};

//Creating new li with id "giphy" (for future deletion), creating new image with giphy results from API, appending image to li, appending li to unordered list
function renderGiphy(results){
    const min = 0;
    const max = 49;
    let randomIndex = Math.floor(Math.random() * (max-min) + min);
    let pickedGiphy = results.data.data[randomIndex].images.original.url;
    const newGiphy = document.createElement('li')
    newGiphy.setAttribute('id', 'giphy');
    const newImg = document.createElement('img')
    newImg.setAttribute('src', pickedGiphy);
    giphyList.appendChild(newGiphy)
    newGiphy.appendChild(newImg);
}

//Removing all rendered images
removeButton.addEventListener('click', function(event){
    event.preventDefault();
    while(giphyList.firstChild){
        giphyList.removeChild(giphyList.firstChild)}});