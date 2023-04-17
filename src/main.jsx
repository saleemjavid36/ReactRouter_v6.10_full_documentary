import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import ErrorPage from "./error-page";

import {
   action as destroyAction 
  } from "./routes/destroy";


import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";

import EditContact,{
  action as editAction
} from './routes/edit';

import Root,
{
      loader as rootLoader ,
      action as rootAction,
   } from "./routes/root";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Index from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,

    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action:editAction
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
       // errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


// Pathless routess


// createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     loader: rootLoader,
//     action: rootAction,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         errorElement: <ErrorPage />,
//         children: [
//           { index: true, element: <Index /> },
//           {
//             path: "contacts/:contactId",
//             element: <Contact />,
//             loader: contactLoader,
//             action: contactAction,
//           },
//           /* the rest of the routes */
//         ],
//       },
//     ],
//   },
// ]);


// JSX routes

// import {
//   createRoutesFromElements,
//   createBrowserRouter,
// } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route
//       path="/"
//       element={<Root />}
//       loader={rootLoader}
//       action={rootAction}
//       errorElement={<ErrorPage />}
//     >
//       <Route errorElement={<ErrorPage />}>
//         <Route index element={<Index />} />
//         <Route
//           path="contacts/:contactId"
//           element={<Contact />}
//           loader={contactLoader}
//           action={contactAction}
//         />
//         <Route
//           path="contacts/:contactId/edit"
//           element={<EditContact />}
//           loader={contactLoader}
//           action={editAction}
//         />
//         <Route
//           path="contacts/:contactId/destroy"
//           action={destroyAction}
//         />
//       </Route>
//     </Route>
//   )
// );

