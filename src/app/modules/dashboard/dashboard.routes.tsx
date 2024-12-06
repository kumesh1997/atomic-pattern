import Overview from "./overview";

export const dashboardRoutes = {
  routes: [
    {
      path: "dashboard",
      children: [
        {
          path: "",
          element: <Overview />,
          protected: true,
        },
      ],
    },
  ],
};
