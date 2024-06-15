// Items

const  renderProducts = () => {
  const productDiv = document.querySelector('#products');
  productDiv.innerHTML = '';

  products.forEach((item, index) => {
    productDiv.innerHTML += 
    `
    <div id="item" class="col-sm-6 col-md-4 col-lg-3">
            <div class="imgs">
              <img class="img-responsive" src="./images/${item.cover}" alt="Responsive image">
              <div class="extra">
                <span class="glyphicon glyphicon-info-sign" data-toggle="modal" data-target="#myModal${item.no}" title="Extra Information"></span>
                <span class="glyphicon glyphicon-heart-empty" title="Add to your favorite list" onclick="addToFavList(${index})"></span>
              </div>
            </div>
            <span class="titles">${item.title}</span>
            <div class="price">
              <span class="glyphicon glyphicon-usd"></span>
              <span class="prices">${item.price}</span>
            </div>
            <div class="atcbtn">
              <button class="btn btn-primary btn-sm" title="Add to your cart" onclick="addToCart(${index})">Add to Cart</button>
            </div>
          </div>
    `
  })
}

const renderProductsModal = () => {
  const productModal = document.querySelector('#productsinfo');
  productModal.innerHTML = '';

  products.forEach((item, index) => {
    productModal.innerHTML +=
    `
    <div class="modal fade" id="myModal${item.no}" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">About this item</h4>
        </div>
        <div class="modal-body">
          <div class="exinfo">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
          </div>
          <img src="./images/${item.cover}" alt="responsive image">
        </div>
      </div>
    </div>
  </div>
    `
  })
}

renderProducts();
renderProductsModal();

// Filters

function showAllProductsByConsole(csl){
  const productDiv = document.querySelector('#products');
  productDiv.innerHTML = '';
  products.forEach((item, index) => {
    if(item.id == csl){
    productDiv.innerHTML += 
    `
    <div id="item" class="col-sm-6 col-md-4 col-lg-3">
            <div class="imgs">
              <img class="img-responsive" src="./images/${item.cover}" alt="Responsive image">
              <div class="extra">
                <span class="glyphicon glyphicon-info-sign" data-toggle="modal" data-target="#myModal${item.no}" title="Extra Information"></span>
                <span class="glyphicon glyphicon-heart-empty" title="Add to your favorite list" onclick="addToFavList(${index})"></span>
              </div>
            </div>
            <span class="titles">${item.title}</span>
            <div class="price">
              <span class="glyphicon glyphicon-usd"></span>
              <span class="prices">${item.price}</span>
            </div>
            <div class="atcbtn">
              <button class="btn btn-primary btn-sm" title="Add to your cart" onclick="addToCart(${index})">Add to Cart</button>
            </div>
          </div>
    `}
  })
}
document.querySelector("#console").addEventListener('change',function(){
  let csl = this.options[this.selectedIndex].innerText;
  showAllProductsByConsole(csl);
  if(csl == 'All'){
    renderProducts();
  }
})

function showAllProductsByGenre(gnr){
  const productDiv = document.querySelector('#products');
  productDiv.innerHTML = '';
  products.forEach((item, index) => {
    if(item.genre == gnr){
    productDiv.innerHTML += 
    `
    <div id="item" class="col-sm-6 col-md-4 col-lg-3">
            <div class="imgs">
              <img class="img-responsive" src="./images/${item.cover}" alt="Responsive image">
              <div class="extra">
                <span class="glyphicon glyphicon-info-sign" data-toggle="modal" data-target="#myModal${item.no}" title="Extra Information"></span>
                <span class="glyphicon glyphicon-heart-empty" title="Add to your favorite list" onclick="addToFavList(${index})"></span>
              </div>
            </div>
            <span class="titles">${item.title}</span>
            <div class="price">
              <span class="glyphicon glyphicon-usd"></span>
              <span class="prices">${item.price}</span>
            </div>
            <div class="atcbtn">
              <button class="btn btn-primary btn-sm" title="Add to your cart" onclick="addToCart(${index})">Add to Cart</button>
            </div>
          </div>
    `}
  })  
}
document.querySelector("#genre").addEventListener('change',function(){
  let gnr = this.options[this.selectedIndex].innerText;
  showAllProductsByGenre(gnr);
  if(gnr == 'All'){
    renderProducts();
  }
})

// Sorts

document.querySelector("#lowToHigh").addEventListener('click',function(){
  products.sort(function(a,b){return a.price - b.price});
  renderProducts();
})
document.querySelector("#highToLow").addEventListener('click',function(){
  products.sort(function(a,b){return b.price - a.price});
  renderProducts();
})
document.querySelector("#startToEnd").addEventListener('click',function(){
  products.sort(function(a,b){
    let x = a.title.toLowerCase();
    let y = b.title.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  renderProducts();
})
document.querySelector("#endToStart").addEventListener('click',function(){
  products.sort(function(a,b){
    let x = b.title.toLowerCase();
    let y = a.title.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  renderProducts();
})

// Shopping Cart

  // title

  const months = ['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  function showDateAndTime(){
  let dt = new Date();
  let op = '';
  op += days[dt.getDay()];
  op += ' ';
  op += dt.getDate();
  op += ' ';
  op += months[dt.getMonth()];
  op += ' ';
  op += dt.getFullYear();
  op += ' - '
  op += dt.toLocaleTimeString();
  document.querySelector('#dateAndTime').innerHTML = op;
  }
  setInterval(showDateAndTime,1000);

  // Username Title

document.querySelector('#logForm').addEventListener('submit',function(e){
  e.preventDefault();
  let uName = document.querySelector('#un').value;
  document.querySelector('#user').innerHTML = 'Hi, ' + uName;
})

  // cart
let cart = {
  items: [],
  total: 0,
}

const renderCartItems = () => {
  const cartDiv = document.querySelector('#cart-items');
  cartDiv.innerHTML = '';

  const totalPriceEl = document.querySelector('#total-price');

  let totalPrice = 0;
  let finalPrice = 0;

  if(cart.items.length === 0) {
    cartDiv.innerHTML = '&nbsp;&nbsp;<span class="glyphicon glyphicon-alert"></span>&nbsp;Your cart is empty'
  }

  cart.items.forEach((item) => {
    totalPrice += item.total;

    cartDiv.innerHTML +=
    `
    <li class="cart-item">
      <span class="item-title">${item.title}</span>
      <span class="item-price"><span class="glyphicon glyphicon-usd"></span>${item.price}</span>
      <span class="glyphicon glyphicon-plus-sign" onclick="addToCartByPlus('${item.title}')"></span>
      <span class="qty">${item.qty}</span>
      <span class="glyphicon glyphicon-minus-sign" onclick="removeFromCartByMinus('${item.title}')"></span>
      <span class="glyphicon glyphicon-trash" onclick="removeFromCartByMinus('${item.title}')"></span>
    </li>
    `
  })

  totalPriceEl.innerHTML = `${totalPrice.toFixed(2)}`;

  let tp = parseFloat(document.querySelector('#total-price').innerHTML);
  if (tp !== 0.00){
  document.querySelector('#payment').style.display = 'block';
  document.querySelector('#redcircle').style.display = 'block';
  }else {
    document.querySelector('#payment').style.display = 'none';
    document.querySelector('#redcircle').style.display = 'none';
  }

  document.querySelector('#cashbtn').addEventListener('click',function(){
    document.querySelector('#cpay').style.display = 'block';
  })

  document.querySelector('#instalmentbtn').addEventListener('click',function(){
    document.querySelector('#ipay').style.display = 'block';
  })


  document.querySelector('#choutbtn').addEventListener('click',function(){
    document.querySelector('#final-price').style.display = 'block';
    document.querySelector('#finalbtns').style.display = 'block';
    document.querySelector('#showtable').style.display = 'block';

    let mNo = Number(document.querySelector('#monthNo').value);
    let monthProfit = totalPrice * 1.5 / 100 ;
    let monthPrice = totalPrice / mNo ;

    finalPrice = totalPrice + (mNo * monthProfit);
    document.querySelector('#final-price').innerHTML = `<b>Final Price</b> : <span class="glyphicon glyphicon-usd"></span> ${finalPrice.toFixed(2)}`;
  })


  
  document.querySelector('#showtable').addEventListener('click',function(){
    const orderDate = new Date();
    let oDay = orderDate.getDate();
    let oMonth = orderDate.getMonth();
    let oYear = orderDate.getFullYear();
    let mNo = Number(document.querySelector('#monthNo').value);
    let monthProfit = totalPrice * 1.5 / 100 ;
    let monthPrice = totalPrice / mNo ;
    let monthPay = monthPrice + monthProfit;
    let itop = '';
    itop += '<tr><th>No.</th><th>Date</th><th>Payment</th><th>Remain</th></tr>';
    
    function dateUpdate(){
      if(oMonth > 11){
        oMonth = 1;
        oYear++;
      }else{
        oMonth += 1;
      }
      return oMonth;
    };

    for(let i = 0 ; i < mNo ; i++){
      itop += 
      `
      <tr>
        <td>${i + 1}</td>
        <td>${oDay} / ${dateUpdate()} / ${oYear}</td>
        <td><span class="glyphicon glyphicon-usd"></span> ${monthPay.toFixed(2)}</td>
        <td><span class="glyphicon glyphicon-usd"></span> ${(finalPrice - ((i + 1) * monthPay)).toFixed(2)}</td>
      </tr>
      `;
    }
    document.querySelector('#instalment-table').innerHTML = itop;
  })

}

const addToCart = (productIndex) => {
  const product = products[productIndex];

  let existingProduct = false;

  let newCartItems = cart.items.reduce((state, item) => {
    if (item.title === product.title){
      existingProduct = true;

      const newItem = {
        ...item,
        qty: item.qty + 1,
        total: (item.qty + 1) * item.price,
      }

      return [...state, newItem]
    }

    return [...state, item]
  }, [])

  if (!existingProduct) {
    newCartItems.push({
      ...product,
      qty: 1,
      total: product.price
    })
  }

  cart = {
    ...cart,
    items: newCartItems,
  }

  renderCartItems();
  alert("Successfully added to your cart :)");
}


const removeFromCartByMinus = (productTitle) => {
  let newCartItems = cart.items.reduce((state, item) => {
    if (item.title === productTitle) {
      const newItem = {
        ...item,
        qty: item.qty - 1,
        total: (item.qty - 1) * item.price
      }

      if (newItem.qty > 0) {
        return [...state, newItem]
      } else {
        return state
      }
    }

    return [...state, item]
  }, [])

  cart = {
    ...cart,
    items: newCartItems
  }

  renderCartItems();
}

const addToCartByPlus = (productTitle) => {
  let newCartItems = cart.items.reduce((state, item) => {
    if (item.title === productTitle) {
      const newItem = {
        ...item,
        qty: item.qty + 1,
        total: (item.qty + 1) * item.price
      }

      if (newItem.qty > 0) {
        return [...state, newItem]
      } else {
        return state
      }
    }

    return [...state, item]
  }, [])

  cart = {
    ...cart,
    items: newCartItems
  }

  renderCartItems();
}

renderCartItems();

// Favorite

let fav = {
  items: []
}

const renderFavItems = () => {
  const favDiv = document.querySelector('#favlist');
  favDiv.innerHTML = '';

  if(fav.items.length === 0) {
    favDiv.innerHTML = '<div>Your favorite list is empty</div>'
  }

  fav.items.forEach((item) => {
    favDiv.innerHTML += 
    `
    <li class="fav-items">
      <img src="./images/${item.cover}"></span>
      <span>${item.title}</span>
      <span><span class="glyphicon glyphicon-usd"></span>${item.price}</span>
      <span class="glyphicon glyphicon-trash" onclick="removeFromFavList('${item.title}')"></span>
    </li>
    `
  })
}

const addToFavList = (productIndex) => {
  const product = products[productIndex];

  let existingProduct = false;

  let newFavItems = fav.items.reduce((state, item) => {
    if (item.title === product.title){
      existingProduct = true;

      const newItem = {
        ...item,
      }

      return [...state, newItem]
    }

    return [...state, item]
  }, [])

  if (!existingProduct) {
    newFavItems.push({
      ...product,
    })
  }

  fav = {
    ...fav,
    items: newFavItems,
  }

  renderFavItems();
  alert("Added to your favorite list :)");
}

const removeFromFavList = (productTitle) => {
  let newFavItems = fav.items.reduce((state, item) => {
    if (item.title === productTitle) {
      const newItem = {
        ...item,
      }

      if (newItem.qty > 0) {
        return [...state, newItem]
      } else {
        return state
      }
    }

    return [...state, item]
  }, [])

  fav = {
    ...fav,
    items: newFavItems
  }

  renderFavItems();
  alert("Removed from your favorite list");
}

document.querySelector('#printbtn').addEventListener('click',function(){
  window.print();
})
