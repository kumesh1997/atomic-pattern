import LoginForm from "./loginForm";

export const authRoutes = {
    routes: [
      {
        path: "auth",
        children: [
          {
            path: "sign-in",
            element: <LoginForm />,
            protected: false
          }
        ],
      },
    ],
  };