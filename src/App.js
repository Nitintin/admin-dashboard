import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from "./components/ErrorPage";
import Products from "./components/ProductList/ProductsListWrapper";
import Categories from "./components/Categories";
import ProductDetails from "./components/PDP/ProductDetails";
import Home from "./components/Home";
import { useEffect, useState, createContext } from "react";

export const ThemeContext = createContext();

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);
  

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState);
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
      errorElement: <ErrorPage />
    },
    {
      path: '/products',
      element: <Products/>
    },
    {
      path: '/category',
      element: <Categories/>
    },
    {
      path: '/products/:pid',
      element: <ProductDetails/>
    }
  ]);

  return (
    <div className={`App`}>
      <ThemeContext.Provider value={{
        isDarkMode: isDarkMode,
        toggleDarkMode: toggleDarkMode
      }}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;