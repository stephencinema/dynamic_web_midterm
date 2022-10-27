import React from "react";
import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import "./App.css";
import Songs from "./pages/SongListing";
import Artists from "./pages/ArtistListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Songs />
  },
  {
    path: "/artists",
    element: <Artists />
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
