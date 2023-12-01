import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";
import CreateProject from "./pages/CreateProject";
import EditProject from "./pages/EditProject";

// ✅  1. Create routes.js
// ✅  1a. In `routes.js` create an array for routes.

const routes = [
	// ✅  1b. Make a route for `<App />`
    // ✅  1c. For the `<App />` route create an array of children that represent all the pages (Home, About, Projects, etc.)
	{
		path: "/",
		element: <App />,
		children: [
			
			{ path: "/about", element: <About /> },
			{ path: "/new", element: <CreateProject /> },
			{ path: "/projects/:id/edit", element: <EditProject /> },
			{ path: "/projects/:projectId/:test", element: <ProjectDetails /> },
			{ path: "projects", element: <ProjectsPage /> },
            { path: "/", element: <Home /> }
		],
	},
	
];

export default routes
