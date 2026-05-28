import styles from "./App.module.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className={styles.appContainer}>
      <Sidebar />
      <div className={styles.content}>
        <Header />

        <main className={styles.main}>
          <section className={styles.panel}>
            <CreatePost />
          </section>
          <section className={styles.panel}>
            <PostList />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
