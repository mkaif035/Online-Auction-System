import TopBar from "./TopBar";
import ItemCard from "./ItemCard";
import { useContext } from "react";
import { FirebaseContext } from "../Firebase";

const OngoingPage = () => {
  const { items } = useContext(FirebaseContext);

  return (
    <div className="content">
      <TopBar />
      <div className="grid gap-4 p-10 main-grid">
        {items && items.map((item, i) => <ItemCard key={i} item={item} />)}
      </div>
    </div>
  );
};

export default OngoingPage;
