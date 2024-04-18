var selectBox=document.getElementById("category");
var id=document.getElementById("iddisplay");
fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(json => {

            json.forEach(element => {
                  var option=document.createElement("option");
                  option.innerHTML=element;
                  option.setAttribute("value",element);
                  selectBox.appendChild(option);
            });
      })


      function limitTotalText(title, description, maxLength) {
            const totalLength = title.length + description.length;
            if (totalLength <= maxLength) {
              return { title, description };
            } else if(title.length>=maxLength){
              return { title:title.substring(0, maxLength), description:description.substring(0,20)};
            }
            else{
                  const tLength = maxLength - title.length;
                  return { title, description:description.substring(0, tLength)};
            }
      }
          
          

fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json =>{
            var htmlElements="";
            json.forEach(element => {
                  const { title, description } = limitTotalText(element.title, element.description, 50);
                  htmlElements+=
                  `<div class="col-md-3">
                  <div class="card mt-3 mb-3 mod">
                  <img src="${element.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${description}</p>
                    <p class="card-text">${element.category}</p>
                    <p class="card-text">${element.price}</p>
                    <p class="card-text">${element.rating.rate}</p>
                    <a href="./goProduct/product.html" id="product-${element.id}" class="btn btn-primary" >Product</a>
                  </div>
                   </div>
                  </div>
                  `
            });
            document.getElementById("cardField").innerHTML=htmlElements;
            
      });

selectBox.addEventListener("change", function(){
      
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => {
            var htmlElements="";
            json.forEach(element => {
                  const { title, description } = limitTotalText(element.title, element.description, 50);
                  if(this.value === "" || element.category==this.value){
                        htmlElements+=
                        `<div class="col-md-3">
                        <div class="card mt-3 mb-3 mod">
                        <img src="${element.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${description}</p>
                          <p class="card-text">${element.category}</p>
                          <p class="card-text">${element.price}</p>
                          <p class="card-text">${element.rating.rate}</p>
                          <a href="./goProduct/product.html" id="product-${element.id}" class="btn btn-primary">Product</a>
                        </div>
                         </div>
                        </div>`
                  } 
            })
            document.getElementById("cardField").innerHTML=htmlElements;
      })
})


const modeButton = document.getElementById('modeButton');

    modeButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      var modes=document.querySelectorAll(".mod");
      modes.forEach(element => {
            element.classList.toggle('modee');
      });
});


//search 
let allProducts = [];

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(json => {
        allProducts = json;
        displayProducts(allProducts);
    });


function filterProducts(searchTerm) {
    const filteredProducts = allProducts.filter(product => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    displayProducts(filteredProducts);
}


function displayProducts(products) {
    var htmlElements = "";
    products.forEach(element => {
        const { title, description } = limitTotalText(element.title, element.description, 50);
        htmlElements +=
            `<div class="col-md-3">
              <div class="card mt-3 mb-3 mod">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${description}</p>
                  <p class="card-text">${element.category}</p>
                  <p class="card-text">${element.price}</p>
                  <p class="card-text">${element.rating.rate}</p>
                  <a href="./goProduct/product.html" id="product-${element.id}" class="btn btn-primary">Product</a>
                </div>
              </div>
            </div>`;
    });
    document.getElementById("cardField").innerHTML = htmlElements;
}


document.getElementById("searchInput").addEventListener("input", function () {
    filterProducts(this.value);
});


