import { Layout } from "../components/layout/Layout";
import { ComponentsShowcase } from "../pages/ComponentsShowcase";

// import { Layout } from "../components/layout/Layout";
// import { checkRole } from "../helpers/get_user";
// import { Navigate } from "react-router-dom";

let routes = {};

// const ProtectedRoute = ({ children, roles }) => {
//   if (!checkRole(roles)) {
//     return <Navigate to="/login" replace />;
//   }
//   return <Layout> {children} </Layout>;
// };

const GuestRoutes = ({ children }) => {
  return <Layout> {children} </Layout>;
};

routes.public = [
  {
    path: "/",
    element: (
      <GuestRoutes/>
    ),
    children: [
      {
        index: true,
        element: (
          <ComponentsShowcase />
        )
      }
    ]
  },
];

// Routes.authGeneral = [
//   {
//     path: "/",
//     element: <ProtectedRoute roles={[      
//       "Administrador",
//     ]} />,
//     // errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <ComponentsShowcase />,
//       },
//     ]
//   },
// ];

// export default [].concat(Routes.public, Routes.authGeneral);
export {
  routes
};
