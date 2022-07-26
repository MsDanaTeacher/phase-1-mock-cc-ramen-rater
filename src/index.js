document.addEventListener('DOMContentLoaded', () => {
getRamen()
addNewRamen()
renderRamen()

})

const getRamen = () => {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(ramens => {
        ramens.forEach(ramen => {
            renderRamen(ramen)
        })
    })
}

const renderRamen = (ramen) => {
    //get the div
    const ramenDiv = document.querySelector('#ramen-menu')
    
    //create img
    const ramenImage = document.createElement('img')
    ramenImage.src = ramen.image

    //append img to div
    ramenDiv.appendChild(ramenImage)

    // Click on an image from the #ramen-menu div and see all the info about that ramen 
// displayed inside the #ramen-detail div and where it says insert comment here and 
// insert rating here.
    //1. get the ramenImage variable
    //2. addEventListener of click to ramenImage
    ramenImage.addEventListener('click', (e) => {
        //once (e) happens, you want the ramenImage key information to display in ramen-detail div like so:
        e.preventDefault()
        const attachImage = document.querySelector('.detail-image')
        attachImage.src = ramen.image
        //ramen.name is the source text content for h2
        const ramenName = document.querySelector('h2')
        ramenName.textContent = ramen.name
        //ramen.restaurant is the source text content for h3
        const ramenRestaurant = document.querySelector('.restaurant')
        ramenRestaurant.textContent = ramen.restaurant
        //ramen.rating is the source for textContent of '#rating-display'
        const ramenRating = document.querySelector('#rating-display')
        ramenRating.textContent = ramen.rating
        //ramen.comment is the text content for '#comment-display'
        const ramenComment = document.querySelector('#comment-display')
        ramenComment.textContent = ramen.comment

    })
}


// //Create a new ramen after submitting the new-ramen form. The new ramen 
// should be added to the#ramen-menu div. The new ramen does not need to persist; 
// in other words, if you refresh the page, it's okay that the new ramen is no longer 
// on the page.

const addNewRamen = () => {
    const ramenForm = document.querySelector('#new-ramen')
    ramenForm.addEventListener('submit', (e) => {
        e.preventDefault()
    //when you click, new ramen added to ramen-menu div
    const newRamenImage = e.target.image.value

    const newRamenObj = {
        image: newRamenImage
    }

    renderRamen(newRamenObj)
    ramenForm.reset()
    })
}