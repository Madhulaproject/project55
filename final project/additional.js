for (var i = 1; i < product.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
}

for (var i=1;i<flipkart.length;i++){
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${flipkart[i].title}</option>
    `;
}

function item1(a){
    var select1=document.getElementById("selct1").value
    document.getElementById("img1").src=product[i].image
    document.getElementById("desc1").innerHTML=product[i].description
    document.getElementById("brand1").innerHTML=product[i].brand
    document.getElementById("price1").innerHTML="INR"+product[i].price
}

function item2(a){
    var select2=document.getElementById("selct2").value
    document.getElementById("img2").src=flipkart[i].image1
    document.getElementById("desc2").innerHTML=flipkart[i].description1
    document.getElementById("brand2").innerHTML=flipkart[i].brand1
    document.getElementById("price2").innerHTML="INR"+flipkart[i].price1
}