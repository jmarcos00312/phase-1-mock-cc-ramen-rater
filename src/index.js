const BASE_UEL = "http://localhost:3000/ramens"

/* 
- See all ramen images in the `div` with the id of `ramen-menu`. When the page
  loads, request the data from the server to get all the ramen objects. Then,
  display the image for each of the ramen using an `img` tag inside the
  `#ramen-menu` div.
  */

//   show all the images inside  a div ID of ramen-menu
const divRamenMenu = document.getElementById("ramen-menu")
//WHEN THE PAGE LOAD fetch the images from the SERVER=(BASE_URL)
//then display the image inside the div that has an ID of ramen-menu

//after the DOM loaded we will fetch
document.addEventListener("DOMContentLoaded", () => {
    fetch(BASE_UEL)
        .then(resp => resp.json())
        .then(RamenFromServer => RamenFromServer.forEach(ramen => {
            showRamen(ramen)
        }))
})

const showRamen = (ramen) => {
    const createImg = document.createElement("img")
    createImg.src = ramen.image
    divRamenMenu.appendChild(createImg)
    /*
    - Click on an image from the `#ramen-menu` div and see all the info about that
      ramen displayed inside the `#ramen-detail` div and where it says
      `insert comment here` and `insert rating here`.
      */
        //when a image of the ramen is clicked 
        //user should see all info about the ramen inside the div id(ramen - detail)
    createImg.addEventListener("click", () => {
        // we are doing this because we want to put the name/restaurant/images/rating 
        // and comment inside the dive that has a id of ramen - detail
        const detailsPic = document.querySelector(".detail-image");
        const name = document.querySelector(".name");
        const restaurant = document.querySelector(".restaurant");
        const rating = document.getElementById("rating-display")
        const comment = document.getElementById("comment-display")

        detailsPic.src = ramen.image
        restaurant.textContent = ramen.restaurant
        name.textContent = ramen.name
        rating.textContent = ramen.rating
        comment.textContent = ramen.comment
    })
}

const formInput = document.getElementById("new-ramen")
//adding new ramen from the form
const addRamen = (event) => {
    event.preventDefault()

    const userInput = {}
     userInput.name = document.querySelector('#new-name').value;
     userInput.restaurant = document.querySelector('#new-restaurant').value;
     userInput.image = document.querySelector('#new-image').value;
     userInput.rating = document.querySelector('#new-rating').value;
    userInput.comment = document.querySelector('#new-comment').value;
    showRamen(userInput)
    formInput.reset()
}

formInput.addEventListener("submit", addRamen)