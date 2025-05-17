import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import ProductDetail from '../pages/ProductDetail/ProductDetail.jsx';
import ProductList from '../pages/ProductList/ProductList.jsx';
import Checkout from '../pages/Checkout/Checkout.jsx'
import Cart from '../pages/Cart/Cart.jsx';
import Login from '../pages/Auth/Login.jsx';


//404
const NotFound = () => (
  <div className="container mx-auto px-4 py-16 text-center text-black">
    <h1 className="text-3xl font-bold mb-4 text-black">404 - Página não encontrada</h1>
    <p className="mb-8">A página que você está procurando não existe ou foi movida.</p>
    <a href="/" className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700">
      Voltar para a página inicial
    </a>
  </div>
);

//Rotas
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<ProductList />} />
      <Route path="/produto/:id" element={<ProductDetail />} />
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/produto" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />
      {/* <Route path="/compra-realizada" element={< />} /> */}
      {/* <Route path="/cadastro-formulario" element={< />} /> */}
      {/* <Route path="/pedidos" element={< />} /> */}
      {/* <Route path="/perfil" element={< />} /> */}
      <Route path="/login" element={<Login />} />
      {/* <Route path="/cadastro" element={< />} /> */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;