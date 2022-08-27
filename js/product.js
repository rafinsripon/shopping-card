
const productArry = [];
//display function all product get the loop
function display(cartProduct){
    let totalPrice = 0;
    // validation
    // if(cartProduct.length >= 3){
    //     alert('this no');
    //     return;
    // }
    const tBody = document.getElementById('cart_products');
    tBody.innerHTML= '';
    for(let i = 0; i<cartProduct.length; i++){
        const productName = productArry[i].productName;
        const productPrice = productArry[i].productPrice;
        totalPrice = totalPrice + productPrice;
        const tr = document.createElement('tr');
        tr.style.fontSize = '30px';
        tr.innerHTML = `
            <th>${i + 1}</th>
            <td>${productName}</td>
            <td>${productPrice}</td>
        `
        tBody.appendChild(tr);
        
    }
    
    const tr = document.createElement('tr');
    tr.style.fontSize = '30px';
    tr.style.fontWeight = 'bold';
    tr.innerHTML = `
        <th></th>
        <td>Total</td>
        <td>${totalPrice}</td>
    `
    tBody.appendChild(tr);

}

// product Button
function productBtn(element){
    //validations
    
    // element.disabled = true;
    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;
    //all Product between the object
    const productObj= {
        productName: productName,
        productPrice: parseFloat(productPrice)
    }
    productArry.push(productObj);
    document.getElementById('product_Count').innerText = productArry.length;

    display(productArry);
}


