async function loadImage() {
    // get url value from from field and token from dashboard. Construct URL 
   
     let formUrl = document.getElementById('url').value
     let token = "GA0KVYA-EQ94WNV-GKMC33C-3JZKQ3F"
     let url = `https://shot.screenshotapi.net/screenshot?token=${token}&url=${formUrl}`
     
    // Make a get request to screenshotnet API and get response object
     const response = await fetch(url)
     const object = await response.json()
   
   
     //create a new image element
     let newImg = document.createElement('img')
   
     // set class on that element
     newImg.className= 'screenshot'
   
    // set src property with the images' url from response object
     newImg.setAttribute('src', object.screenshot)
   
    // get the nodes where you want to insert the new image
     let container = document.querySelector('.image')
     let reference = document.querySelector('.reference')
   
   /* check if an image already exists. if so, simply replace that image. if not, then insert the new image before the reference element (<span>) */
     if (document.images.length >= 1 ) {
         let existingImg = document.querySelector('.screenshot')
         container.replaceChild(newImg, existingImg)
     } else {
         container.insertBefore(newImg, reference)
     }
   
   }
   // Get reference to button 
let button = document.getElementById('btn')

// add event listener, run an async function when button gets clicked

button.addEventListener("click", async (event) => {

    // prevent from submission
    event.preventDefault()

    try {
      loadImage()
    } catch(e) {
      console.log("Error!");
      console.log(e);
    }
})