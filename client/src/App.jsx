import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Log from "./components/Log";
import PrivateRoute from "./components/PrivateRoute";
import OnlysellarPrivateRoute from "./components/OnlysellarPrivateRoute";
import CreatePost from "./pages/CreatePost";
import Updateshop from "./pages/updateSope";
import Bea from "./pages/Beanty";
import Cloth from "./pages/Clothing";
import Elect from "./pages/Electical";
import Frunit from "./pages/Frniture";
import Book from "./pages/Book";




export default function App() {
  return (
    <BrowserRouter>
       <Log/>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/beauty" element={<Bea />} />

        <Route element={<PrivateRoute />}>
          <Route path="/cloth" element={<Cloth />} />
          <Route path="/elect" element={<Elect />} />
          <Route path="/frunit" element={<Frunit />} />
          <Route path="/book" element={<Book />} />
        </Route>

        <Route element={<OnlysellarPrivateRoute />}>
          <Route path="/create-shope" element={<CreatePost />} />
          <Route path="/update-shope/:updateId" element={<Updateshop />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
