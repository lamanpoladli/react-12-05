import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {routes} from './routes/routes'
import './App.css';

const router = createBrowserRouter(routes);


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;