import React from "react";
import HomeItems from "../components/HomeItems";
import "../index.css";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);
  // console.log("Got items", items);

  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItems key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
