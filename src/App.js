import Cats from "./Pages/Cats";
import Dogs from "./Pages/Dogs";
import Home from "./Pages/Home";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import ImagesCats from "./Pages/ImagesCats";
import ImagesDogs from "./Pages/ImagesDogs";
import SingleCat from "./Pages/SingleCat";
import SingleDog from "./Pages/SingleDog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path="cats" element={<Cats />} />
      <Route path="dogs" element={<Dogs />} />
      <Route path="images-cats" element={<ImagesCats />} />
      <Route path="images-dogs" element={<ImagesDogs />} />
      <Route path="cats/view-cat/:breed_id" element={<SingleCat />} />
      <Route path="dogs/view-dog/:breed_id" element={<SingleDog />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
