// write your code here
/*
      {
        "id": 3,
        "name": "Nirvana Shiromaru",
        "restaurant": "Ippudo",
        "image": "./assets/ramen/nirvana.jpg",
        "rating": "7",
        "comment": "Do buy the hype."
    },
    Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.

  */

 //getting the ramen menu div
const ramenMenu = document.getElementById("ramen-menu")
// getting the ramen menu form
const ramenForm = document.getElementById("new-ramen")
//url of the server
const url = "http://localhost:3000/ramens"

//fetching the json and storing it to ramenPics
fetch(url)
    .then(response => response.json())
    .then(ramenDetails => ramenDetails.forEach(renderImg))
    .catch(err => console.log(err))




const renderImg = (pic) => {
    //displaying ramens image to the menu
    const newImg = document.createElement("img")
    newImg.src = pic.image
    newImg.alt = pic.name
    newImg.id = `Ramen-id ${pic.id}`
    ramenMenu.appendChild(newImg)

    //whenever the user click the ramen picture the details will show

    newImg.addEventListener("click", event => {
        const detailsPic = document.querySelector(".detail-image");
        const name = document.querySelector(".name");
        const restaurant = document.querySelector(".restaurant");
        const rating = document.getElementById("rating-display")
        const comment = document.getElementById("comment-display")

        detailsPic.src = pic.image
        name.textContent = pic.name
        restaurant.textContent = pic.restaurant
        rating.textContent = pic.rating
        comment.textContent = pic.comment
    })

}

// document.addEventListener("DOMContentLoaded", renderImg)