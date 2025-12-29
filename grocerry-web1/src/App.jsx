import Home from './Compnents/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Fruits from './Compnents/Fruits/Fruits'
import Dairy from './Compnents/Dairy/Dairy'
import Seafood from './Compnents/Seafood'
import AllProducts from './Compnents/All Product/AllProducts'
import Layout from './Compnents/Layout/Layout'
import { Cart } from './Compnents/Cart/Cart'
import CartProvider from './Compnents/Cartcontext/Cartcontext'
import About from './Compnents/About Us/About'
import { Contect } from './Compnents/Contect/Contect'
import { Provider } from 'react-redux'
import GroceryStore from './Store'
import { Hartcard } from './Compnents/Heart/Hartcard'
import { Heart } from './Compnents/Heart/Heart'

function App() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/Fruits',
          element: <Fruits />,
        },
        {
          path: '/Dairy',
          element: <Dairy />,
        },
        {
          path: '/Seafood',
          element: <Seafood />,
        },
        {
          path: '/AllProducts',
          element: <AllProducts />,
        },
        {
          path: '/Cart',
          element: <Cart />,
        },
        {
          path: '/About Us',
          element: <About />,
        },
        {
          path: '/Contect Us',
          element: <Contect />,
        },
        {
          path: '/Favourite',
          element: <Heart/>,
        },
      ]
    },
  ])
  return (
    <CartProvider>
      <Provider store={GroceryStore}>
        <RouterProvider router={router} />
      </Provider>
    </CartProvider>
  )
}

export default App
