import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddService from './component/AddService';
import Home from './component/Home';
import Login from './component/Login';
import MyReviews from './component/MyReviews';
import Register from './component/Register';
import Service from './component/Service';
import Services from './component/Services';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/services-limit')
        },
        {
          path: '/services',
          element: <Services></Services>,
          loader: () => fetch('http://localhost:5000/services')
        },
        {
          path: '/services/:id',
          element: <Service></Service>,
          loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/addService',
          element: <AddService></AddService>
        },
        {
          path: '/myReviews',
          element: <MyReviews></MyReviews>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
