import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App';
// import HomePage from '../src/pages/Home';
// import BuyPage from '../src/pages/Buy';
// import RentPage from '../src/components/rent';
// import SellPage from '../src/pages/sell';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { path: '/', element: <HomePage /> },
//       { path: 'buy', element: <BuyPage /> },
//       { path: 'rent', element: <RentPage /> },
//       { path: 'sell', element: <SellPage /> }
//     ]
//   }
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router} />
// );
