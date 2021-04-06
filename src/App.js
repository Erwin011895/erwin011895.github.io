// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Posts from './data/posts.js';

function App(props) {
  return (
    <div className="margin paper">
      <Header name={props.config.name} />

      {Posts.map((post, i) => 
        <Post key={i} post={post}/>
      )}
    </div>
  );
}

export default App;
