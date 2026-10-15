# Paradise Nursery — Houseplant Shopping Application

Paradise Nursery is a responsive React shopping application for browsing houseplants and managing a shopping cart. The landing page introduces the shop, the plant catalogue groups products into categories, and the cart supports quantity changes and item removal.

## Features

- Landing page with the Paradise Nursery name, background image, and **Get Started** button.
- About Us page with company information.
- Three categories with six unique plants in each category (18 plants total).
- Plant cards show an image, name, price, care/light information, and Add to Cart button.
- Add-to-Cart buttons become disabled after adding a plant.
- Shared navigation on the Plants and Cart pages, with a dynamic cart item count.
- Redux Toolkit cart state with `addItem`, `removeItem`, and `updateQuantity` reducers.
- Cart displays unit price, quantity, line total, and overall total.
- Quantity controls, remove-item action, Continue Shopping links, and a Checkout “Coming Soon” message.
- Responsive styling for desktop and mobile.

## Tech stack

- React
- Vite
- React Router
- Redux Toolkit
- React Redux
- CSS

## Run locally

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

To create a production build:

```bash
npm run build
```

## Project structure

```text
src/
  AboutUs.jsx
  App.css
  App.jsx
  CartItem.jsx
  CartSlice.jsx
  ProductList.jsx
  main.jsx
  store.js
index.html
package.json
README.md
```

## Notes

Plant photos are loaded from Unsplash and therefore require an internet connection. Prices are demonstration prices in USD; checkout is a UI placeholder and does not process payments.
