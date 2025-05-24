
const items = [
  { name: "Biryani", image: "images/biryani.png" },
  { name: "Dosa", image: "images/dosa.jpg" },
  { name: "Ice Cream", image: "images/ice-cream.png" },
  { name: "Idli", image: "images/idli.jpg" },
  { name: "Pizza", image: "images/image1.jpg" },
  { name: "Burger", image: "images/background2.png" }
];

const menuContainer = document.getElementById("menu-items");
const cartContainer = document.getElementById("cart-items");
let cart = [];

items.forEach(item => {
  const div = document.createElement("div");
  div.className = "menu-item";
  div.innerHTML = `
    <img src="\${item.image}" alt="\${item.name}" />
    <h3>\${item.name}</h3>
    <button onclick='addToCart("\${item.name}")'>Add to Cart</button>
  `;
  menuContainer.appendChild(div);
});

function addToCart(itemName) {
  cart.push(itemName);
  renderCart();
}

function renderCart() {
  cartContainer.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartContainer.appendChild(li);
  });
}

function signup() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user && pass) {
    localStorage.setItem(user, pass);
    document.getElementById("auth-msg").innerText = "Signup successful! Please login.";
  } else {
    document.getElementById("auth-msg").innerText = "Please fill in both fields.";
  }
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const storedPass = localStorage.getItem(user);
  if (storedPass === pass) {
    document.getElementById("auth-msg").innerText = \`Welcome, \${user}!\`;
  } else {
    document.getElementById("auth-msg").innerText = "Invalid credentials.";
  }
}
