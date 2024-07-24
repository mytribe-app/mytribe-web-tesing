import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));
const Chats = Loadable(lazy(() => import('../views/apps/chat/Chat')));
const Email = Loadable(lazy(() => import('../views/apps/email/Email')));
const Contacts = Loadable(lazy(() => import('../views/apps/contacts/Contacts')));
const Landingpage = Loadable(lazy(() => import('../views/pages/landingpage/Landingpage')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/landingpage" /> },
      { path: '/apps/chats', element: <Chats /> },
      { path: '/apps/email', element: <Email /> },
      { path: '/apps/contacts', element: <Contacts /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/landingpage', element: <Landingpage /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
