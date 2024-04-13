import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from "./components/ErrorPage";
import Products from "./components/ProductList/ProductsListWrapper";
import Categories from "./components/Categories";
import ProductDetails from "./components/PDP/ProductDetails";
import Home from "./components/Home";
import { useState } from "react";



function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState);
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />,
      errorElement: <ErrorPage />
    },
    {
      path: '/products',
      element: <Products toggleDarkMode={toggleDarkMode}/>
    },
    {
      path: '/category',
      element: <Categories toggleDarkMode={toggleDarkMode}/>
    },
    {
      path: '/products/:pid',
      element: <ProductDetails toggleDarkMode={toggleDarkMode}/>
    }
  ]);

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;