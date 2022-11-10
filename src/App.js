import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddService from './component/AddService';
import Blog from './component/Blog';
import ErrorPage from './component/ErrorPage';
import Home from './component/Home';
import Login from './component/Login';
import MyReviews from './component/MyReviews';
import Register from './component/Register';
import Service from './component/Service';
import Services from './component/Services';
import UpdateReviewForm from './component/UpdateReviewForm';
import Main from './Layout/Main';
import PrivateRoute from './Private/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://cloud-kitchen-server-six.vercel.app/services-limit')
        },
        {
          path: '/services',
          element: <Services></Services>
        },
        {
          path: '/services/:id',
          element: <Service></Service>,
          loader: ({ params }) => fetch(`https://cloud-kitchen-server-six.vercel.app/services/${params.id}`)
        },
        {
          path: '/update/:id',
          element: <UpdateReviewForm></UpdateReviewForm>,
          loader: ({ params }) => fetch(`https://cloud-kitchen-server-six.vercel.app/reviews/${params.id}`)
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
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/addService',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path: '/myReviews',
          element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
        },
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
