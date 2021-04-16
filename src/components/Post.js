import Content from './Content.js';
import './Post.css';

function passText(text) {
  return {__html: text};
}

function Post(props) {
  const post = props.post;
  const contents = post.contents;

  return (
    <div className="border border-3 margin-small padding-small Post-bg">
      <article className="article">
        <h2 className="article-title text-center" dangerouslySetInnerHTML={passText(post.title)} />
        <p className="text-lead text-center" dangerouslySetInnerHTML={passText(post.subtitle)} />

        {contents.map((content, i) =>
          <Content key={i} content={content} />
        )}
        
      </article>
    </div>
  );
}

export default Post;
