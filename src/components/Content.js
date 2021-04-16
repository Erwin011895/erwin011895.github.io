// import './Post.css';

function passText(text) {
  return {__html: text};
}

function Content(props) {
  const content = props.content;

  return (
    <div className="sm-12 md-12 text-center">
      <p dangerouslySetInnerHTML={passText(content.text)} />
      <img src={content.image} alt={content.imageAlt} className="row flex-center article-image--half-size no-border" />
    </div>
  );
}

export default Content;
