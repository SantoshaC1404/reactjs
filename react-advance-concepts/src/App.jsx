import { useState } from "react";
import styles from "./App.module.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className={styles.appContainer}>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className={styles.content}>
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}

          {/* <main className={styles.main}>
          <section className={styles.panel}>
            <CreatePost />
          </section>
          <section className={styles.panel}>
            <PostList />
          </section>
        </main> */}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
