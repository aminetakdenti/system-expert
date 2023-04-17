import { Routes, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import Books from "./pages/Books";
import Suggest from "./pages/Suggest";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/books" element={<Books />} />
      <Route path="/suggestBook" element={<Suggest />} />
      <Route path="/suggestBook/:book" element={<BookDetails />} />
    </Routes>
  );
}

export default App;
