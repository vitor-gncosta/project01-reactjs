import { Post } from './components/Post';
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Vítor Guimarães"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nemo quos cupiditate voluptatum officiis veniam molestiae animi vel pariatur voluptas nostrum numquam dolores ex laboriosam quia quisquam, culpa nobis nulla. "
          />
          <Post
            author="Nicolau"
            content="Outro tipo de Post!!! "
          />
        </main>
      </div>
    </div>
  )
}


