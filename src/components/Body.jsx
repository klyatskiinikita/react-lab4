import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CategoryMenu from './CategoryMenu';
import ShoppingList from './ShoppingList';
import ProductPage from './ProductPage';

function Body({products, categories, handleCategoryChange, selectedCategory}) {
  return (
    <main>
<CategoryMenu
          categories={categories}
          onCategoryChange={handleCategoryChange}
        />
        <Routes>
          <Route exact path="/" element={<ShoppingList category={selectedCategory} products={products}  />}>
          </Route>
          <Route path="/product/:id" element={<ProductPage products={products} />}>
          </Route>
        </Routes>

    </main>
  );
}

export default Body;
