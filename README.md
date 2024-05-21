# Own Your PC Today!

This project is a simple React application for an online PC store where users can browse products and add them to a cart. The application includes features such as viewing products, adding products to a cart, limiting the cart to 4 items, and selecting one random product from the cart. The following sections describe the project structure, installation steps, and usage instructions.

Note: This is my one of the most recent project. Due to some problems, i was unable to push this project on the git. Afterall, i have done all the functionality of this project and PUSHED to GIT.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [App](#app)
  - [Shop](#shop)
  - [Product](#product)
  - [Cart](#cart)
  - [Sidebar](#sidebar)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

```
src/
│
├── App.css
├── App.js
│
├── Components/
│   ├── Shop/
│   │   └── Shop.js
│   ├── Product/
│   │   └── Product.js
│   ├── Cart/
│   │   └── Cart.js
│   └── Sidebar/
│       └── Sidebar.js
│
└── public/
    └── cartIcon.png
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/own-your-pc.git
   cd own-your-pc
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Usage

### Viewing Products

- Products are loaded from a `products.json` file located in the `public` directory.
- The `Shop` component fetches and displays these products.

### Adding Products to Cart

- Users can add products to the cart by clicking the "Add To Cart" button on a product.
- A maximum of 4 products can be added to the cart. If a user tries to add more, an alert will notify them that they can't select more than 4 items.

### Cart Functionality

- The cart is displayed using a sidebar which can be opened by clicking the cart icon.
- Users can choose a random product from the cart or clear the cart to start over.

## Contributing

Contributions are welcome! Please create a pull request or open an issue to discuss what you would like to change.

## License

You can use this project by giving me a follow on my github to show your love for my work. Thank You!!!
