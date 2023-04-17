import categories from "../data/categories.json";
import Categorie from "../components/Categorie";
import Layout from "../components/Layout";
import { useContext } from "react";
import useCntxt from "../context/UseBooksContext";

function Categories() {
  const { state } = useContext(useCntxt);
  const active = state.categories.length >= 3 ? false : true;

  return (
    <Layout
      title="Select At Least Three"
      path="books"
      btnText="next"
      state={active}
    >
      {categories.map((cat, indx) => (
        <Categorie name={cat.categorie} key={indx} />
      ))}
    </Layout>
  );
}

export default Categories;
