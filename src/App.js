// import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import Posts from './data/posts.js';

function App(props) {
  return (
    <div className="margin paper App">
      <header>
        <h1 className="text-center">{props.config.name}</h1>
      </header>

      {Posts.map((post, i) => 
        <Post key={i} post={post}/>
      )}
    </div>
  );
}

export default App;
