import ProjectTable from "./projectTable";

export const projectsRoutes = {
    routes: [
      {
        path: "projects",
        children: [
          {
            path: "",
            element: <ProjectTable />,
            protected: true
          }
        ],
      },
    ],
  };