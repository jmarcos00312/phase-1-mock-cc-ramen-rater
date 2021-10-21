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
const pageLoadDetails = document.getElementById("ramen-detail")
//url of the server
const url = "http://localhost:3000/ramens"

//fetching the json and storing it to ramenPics
        
    fetch(url)
        .then(response => response.json())
        .then(ramenDetails => ramenDetails.forEach(renderImg))
        .catch(err => console.log(err))


    const renderImg = (ramen) => {
        //displaying ramens image to the menu
        const newImg = document.createElement("img")
        newImg.src = ramen.image
        newImg.alt = ramen.name
        newImg.id = `Ramen-id ${ramen.id}`
        ramenMenu.append(newImg)
        pageLoadDetails.append()

    
        //whenever the user click the ramen picture the details will show
        newImg.addEventListener("click", () => {
            const details = document.querySelector("#ramen-detail")
            const detailsPic = document.querySelector(".detail-image");
            const name = document.querySelector(".name");
            const restaurant = document.querySelector(".restaurant");
            const rating = document.getElementById("rating-display")
            const comment = document.getElementById("comment-display")
    
            detailsPic.src = ramen.image
            name.textContent = ramen.name
            restaurant.textContent = ramen.restaurant
            rating.textContent = ramen.rating
            comment.textContent = ramen.comment
            console.log(newImg)
        })
            // window.addEventListener("DOMContentLoaded",()=> renderImg(ramen))
    }


const createNewRamen = (e) => {
    //preventing the page to refresh every time they create new ramen
    e.preventDeafult()

    //creating a new ramen and setting their values

    let newRamen = {}

  newRamen.name = e.name.value;
  newRamen.restaurant = e.restaurant.value;
  newRamen.image = e.image.value;
  newRamen.rating = e.rating.value;
  newRamen.comment = e["new-comment"].value;

}

    // window.addEventListener("DOMContentLoaded",()=> renderImg(ramen))