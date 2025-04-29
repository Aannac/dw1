const products = [
    { id: 1, name: "Ursinho Guilherme", price: 187.90, image: "./imagem/ursomarrom.jpeg"},
    { id: 2, name: "Sapo Ludovico", price: 89.99, image: "./imagem/sapo.jpeg"},
    { id: 3, name: "Hipo Wanderley", price: 79.99, image: "./imagem/hipo.jpeg"},
    { id: 4, name: "Ursa Marizza Perfumada", price: 129.90, image: "./imagem/Ursolimpo.jpeg"},
    { id: 5, name: "Anakin Banana", price: 49.99, image: "./imagem/banana.jpeg"},
    { id: 6, name: "Lucas 'dog' Gabriel ", price: 267.69, image: "./imagem/cachorro.jpeg"},
    { id: 7, name: "Cheddar Quente", price: 199.99, image: "./imagem/cachorroquente.jpeg" },
    { id: 8, name: "Coelha Lolla Palloza", price: 134.99, image: "./imagem/Coelho.jpeg"},
    { id: 9, name: "Bunny Cerejeira", price: 200.99, image: "./imagem/coelhoRF.jpeg"},
    { id: 10, name: "Cherry Coelha", price: 134.99, image: "./imagem/coelhoRosa.jpeg"},
    { id: 11, name: "Elefante Gustavo", price: 599.99, image: "./imagem/elefante.jpeg"},
    { id: 12, name: "Dragão Wally", price: 189.99, image: "./imagem/dragaoazul.jpeg"},
    { id: 13, name: "Tina Bolota", price: 150.80, image: "./imagem/esquilo.jpeg"},
    { id: 14, name: "Dragão Crispini", price: 189.99, image: "./imagem/dragaoverde.jpeg"},
    { id: 15, name: "Gatão", price: 129.90, image: "./imagem/gato.jpeg"},
    { id: 16, name: "Girafa Ubbie", price: 240.99, image: "./imagem/girafa.jpeg"},
    { id: 17, name: "Porquinho Youk", price: 178.80, image:"./imagem/porco.jpeg"},
    { id: 18, name: "Ratinha Isla", price: 76.70, image: "./imagem/ratinho.jpeg"},
    { id: 19, name: "João Salsichinha", price: 300.70, image: "./imagem/salsicha.jpeg"},
    { id: 20, name: "Fluffycórnio", price: 130.99, image: "./imagem/unicornio.jpeg"},
    { id: 21, name: "Zé Colmeia", price: 450.00, image: "./imagem/abelha.jpeg"},
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
