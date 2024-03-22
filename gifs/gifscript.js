const $gifSpot=$('#gifSpot');
const $searchInfo=$('#search');

function addGif(res) {
    let numResult = res.data.length;
    if (numResult) {
      let randomIdx = Math.floor(Math.random() * numResult);
      let $newCol = $("<div>") 
      let $newGif = $("<img>", {
        src: res.data[randomIdx].images.original.url,
        });
      $newCol.append($newGif);
      $gifSpot.append($newCol);
    }
  }

  $("form").on("submit", async function(evt) {
    evt.preventDefault();
  
    let searchTerm = $searchInfo.val();
    $searchInfo.val("");
  
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
      }
    });
    addGif(response.data);
  });
  
  
  $("#remove").on("click", function() {
    $gifSpot.empty();
  });