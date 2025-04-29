const products = [
    { id: 1, name: "Ursinho Guilherme", price: 59.99, image: "banana.jpeg"},
    { id: 2, name: "Sapo Ludovico", price: 39.99, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Hipo Wanderley", price: 79.99, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Ursa Marizza Perfumada", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Anakin Banana", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Lucas 'dog' Gabriel ", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 7, name: "Cheddar Quente", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Coelha Lolla Palloza", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 9, name: "Bunny Cerejeira", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 10, name: "Cherry Coelha", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 11, name: "Elefante Gustavo", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 12, name: "Dragão Wally", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 13, name: "Tina Bolota", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 14, name: "Dragão Crispini", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 15, name: "Gatão", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 16, name: "Girafa Ubbie", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 17, name: "Porquinho Youk", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 18, name: "Ratinha Isla", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 19, name: "João Salsichinha", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 20, name: "Fluffycórnio", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 21, name: "Zé Colmeia", price: 49.99, image: "https://via.placeholder.com/150" },
  ];
  
  const cart = [];
  
 // Renderiza os produtos na tela (agora aceita uma lista de produtos)
function renderProducts(productsList) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    productsList.forEach(p => {
      productList.innerHTML += `
        <div class="product">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>R$ ${p.price.toFixed(2)}</p>
          <button onclick="addToCart(${p.id})">Adicionar ao Carrinho</button>
        </div>
      `;
    });
  }
  
  // Função para pesquisar produtos
  function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    renderProducts(filteredProducts);
  }
  
  
  // Adiciona produto ao carrinho
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    document.getElementById('cart-count').innerText = cart.length;
    updateCart();
  }
    // Atualiza o conteúdo do carrinho
  function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
      cartItems.innerHTML += `
        <div class="cart-item">
          <p>${item.name} - R$ ${item.price.toFixed(2)}</p>
          <button onclick="removeFromCart(${index})">Remover</button>
        </div>
      `;
      total += item.price;
    });
  
    document.getElementById('cart-total').innerText = total.toFixed(2);
  }
  
  // Remove produto do carrinho
  function removeFromCart(index) {
    cart.splice(index, 1);
    document.getElementById('cart-count').innerText = cart.length;
    updateCart();
  }
  
  // Abre o carrinho
  function openCart() {
    document.getElementById('cartModal').style.display = 'flex';
    updateCart();
  }
  
  // Fecha o carrinho
  function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
  }
  
  // Abre o checkout
  function openCheckout() {
    document.getElementById('checkoutModal').style.display = 'flex';
    document.getElementById('cartModal').style.display = 'none';
  }
  
  function finalizePurchase() {
    const name = document.getElementById("Nome").value.trim();
    const city = document.getElementById("Cidade").value.trim();
    const street = document.getElementById("Rua").value.trim();
    const number = document.getElementById("Numero").value.trim();
    const cep = document.getElementById("CEP").value.trim();
    const complement = document.getElementById("Complemento")?.value.trim() || "";
  
    if (!name || !city || !street || !number || !cep) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
  
    alert(`Compra realizada por ${name}!`);
    window.location.href = 'pagamento.html';
  }
  
  

  document.querySelector('.cart').addEventListener('click', openCart);
  
  renderProducts(products);
