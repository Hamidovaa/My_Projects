var buttonProducts=document.querySelectorAll(".btn-primary");


buttonProducts.forEach(function(buttonProduct) {
    buttonProduct.addEventListener("click", function(){
        var productId = this.id.split("-")[1];
        fetch('https://fakestoreapi.com/products/${productId}')
        .then(response => response.json())
        .then(json => {
              var htmlProducts="";
              json.forEach(element => {  
                    htmlProducts+=
                    `<div class="col-md-3">
                    <div class="card mt-3 mb-3">
                    <img src="${element.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.description}</p>
                      <p class="card-text">${element.category}</p>
                      <p class="card-text">${element.price}</p>
                      <p class="card-text">${element.rating.rate}</p>
                    </div>
                     </div>
                    </div>`
            })
            document.getElementById("productDetail").innerHTML=htmlProducts;
        })
       
    })
});

