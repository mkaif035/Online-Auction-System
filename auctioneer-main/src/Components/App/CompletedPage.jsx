import TopBar from "./TopBar";
import ItemCard from "./ItemCard";
import { useContext } from "react";
import { FirebaseContext } from "../Firebase";

const CompletedPage = () => {
  const { items } = useContext(FirebaseContext);

  return (
    <div className="content">
      <TopBar />
      <div className="grid gap-4 p-10 main-grid">
        {items &&
          items.map((item, i) =>
            !item.active ? <ItemCard key={i} item={item} /> : null
          )}
      </div>
    </div>
  );
};

export default CompletedPage;
