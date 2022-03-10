import "./assets/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoPage from './pages/todo';
import BandPage from "./pages/band";
import Navbar from "./components/Navbar/Navbar";
import TourPage from "./pages/tour";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/404";
import BandMemberPage from "./pages/band-member";
import ProductPage from "./pages/products";
import EmployeeDatabasePage from "./pages/employeeDatabase";
import LoginPage from "./pages/login";
import CounterPage from "./pages/counter";
// kalo mau run react app bersamaan itu pasti menggunakan beda port g bisa satu port karena satu port hanya untuk sat react app
// kalo mau copy cloning project orang bisa di hapus git nya di file explorer trs di git init lgi react appnya ttp ada
// kalo g sengaja atau sengaja otak atik file org yang kita clone itu git add . trs git stash baru fetch dan pull origin main
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/band" element={<BandPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/band-member/:bandMemberId" element={<BandMemberPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/employees" element={<EmployeeDatabasePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
