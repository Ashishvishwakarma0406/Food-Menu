# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Here's a short and clean `README.md` content tailored for your React component:

---

# 🍽️ Menu Component

This is a responsive and reusable **Menu Card Component** built using **React** and **Tailwind CSS**. It displays a food item with its image, name, rating, description, price, and action buttons (Bookmark and Share). It also includes a dynamic star rating renderer and a customizable button.

## ✨ Features

- Dynamic star rating with half-star support
- Responsive layout with hover effects
- Lucide icons for Bookmark and Share actions
- Customizable food item details
- Tailwind CSS for fast and consistent styling

## 📦 Tech Stack

- React
- Tailwind CSS
- Lucide React Icons

## 🧱 Props

`item` (object) – expects the following structure:
```js
{
  name: string,
  rating: number,
  reviews: number,
  price: string,
  description: string,
  image: string
}
```