#  E-Commerce API App

REST API for managing an e-commerce system, designed to handle products, shopping cart, and basic online store operations.

---

## Link
https://ecomerceapi-app.netlify.app

##  Description

This project consists of an e-commerce API developed with JavaScript, focused on simulating the real workflow of an online store by consuming data from an external API.

It allows you to:

- Retrieve products  
- Filter and search products  
- Manage the shopping cart  
- Update the cart state in real time  

This project was developed as part of my training as a Front-End Developer, integrating API consumption, DOM manipulation, and business logic.

---

##  Project Objective

The main objective was to:

- Learn how to consume REST APIs  
- Handle dynamic data on the frontend  
- Implement shopping cart logic  
- Simulate a real e-commerce workflow  

---

##  Technologies Used

- JavaScript (Vanilla)  
- HTML5  
- CSS3  
- DummyJSON API (https://dummyjson.com/) 
- Fetch API  

---

##  Main Features

###  Products
- Dynamic product listing from API  
- DOM rendering  
- Display of product information (price, image, name)  

###  Search and Filters
- Filtering by name  
- Real-time search  

###  Shopping Cart
- Add products  
- Remove products  
- Automatic cart updates  
- Total price calculation  

###  Persistence (if implemented or planned)
- Cart storage using `localStorage`  

---

## 📂 Project Structure

```
## 📂 Project Structure

```bash
EcomerceAPI-APP/
│
├── index.html
├── main.js
├── index.css
├── README.md
│
├── Api/
│   └── api.js                # API requests (fetch, endpoints)
│
├── State/
│   └── store.js             # Global state management
│
├── Ui/
│   ├── cart.js              # Cart UI logic
│   ├── error.js             # Error handling UI
│   ├── filterName.js        # Filter by name
│   ├── filterProducts.js    # Product filtering logic
│   ├── loadMore.js          # Load more products
│   ├── loader.js            # Loading state UI
│   ├── renderCart.js        # Render cart
│   ├── renderCategorias.js  # Render categories
│   ├── renderDetailsProduct.js # Render product details
│   ├── renderLayout.js      # Main layout rendering
│   └── renderProducts.js    # Render product list
│
├── utils/
│   └── helpers.js           # Reusable helper functions

```
Installation and Usage
Clone the repository:
git clone https://github.com/CamiloGonzalezPineda/EcomerceAPI-APP.git
Open the project:
cd EcomerceAPI-APP
Run in the browser:
You can use Live Server or open the index.html file directly.

## API Consumption
This project uses HTTP requests with fetch to interact with external services.
REST APIs follow a client-server model, where the frontend requests data and the server responds with JSON-formatted information.

## Key Learnings
State management in frontend without frameworks
Separation of concerns (API / UI / logic)
Best practices for API consumption
Scalable code organization

