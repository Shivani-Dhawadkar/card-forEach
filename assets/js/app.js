//alert("hello");

let cl = console.log;

let imgContainer = document.getElementById('imgContainer');

var imgArray = [
   "https://source.unsplash.com/random/?city",
   "https://source.unsplash.com/random/?india",
   "https://source.unsplash.com/random/?fashion",
   "https://source.unsplash.com/random/?beauty",
   "https://source.unsplash.com/random/?color",
   "https://source.unsplash.com/random/?nature",
   "https://source.unsplash.com/random/?technology",
   "https://source.unsplash.com/random/?sport",
   "https://source.unsplash.com/random/?color",
   "https://source.unsplash.com/random/?bollywood",
   "https://source.unsplash.com/random/?indian army",
   "https://source.unsplash.com/random/?school",
   "https://source.unsplash.com/random/?play",
   "https://source.unsplash.com/random/?books",
   "https://source.unsplash.com/random/?theatre",
   "https://source.unsplash.com/random/?architecture",
   "https://source.unsplash.com/random/?nature",
   "https://source.unsplash.com/random/?sky",
   "https://source.unsplash.com/random/?sea",
   "https://source.unsplash.com/random/?beach",
   "https://source.unsplash.com/random/?makeup",
]

var result ='';
imgArray.forEach(img =>{
   result += `
            <div class="col-sm-4 mb-4">
               <div class="card">
                  <div class="card-header"> image </div>
                  <div class ="card-body" > 
                     <img src ="${img}" class ="img-fluid">
                  </div>
               </div>
            </div>    
   `
})

imgContainer.innerHTML = result;