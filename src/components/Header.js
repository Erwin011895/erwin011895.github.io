// import './Header.css';

function Header(props) {
  return (
    <header>
      <h1 className="text-center">{props.name}</h1>
      <div className="sm-12 md-6 row flex-center">
        <img src="images/photo_erwin.jpg" alt={props.name} className="profile-image--circle"/>
      </div>
      <div className="sm-12 md-6 row flex-center">
        <a data-control-name="nav.homepage" href="https://www.linkedin.com/in/erwin011895/" className="ember-view" style={{backgroundImage: "none"}}>
          <svg aria-hidden="true" className="" xmlns="http://www.w3.org/2000/svg" width="34" height="34" data-supported-dps="34x34" focusable="false">
            <g transform="scale(.7083)" fill="none" fillRule="evenodd">
              <rect className="bug-text-color" fill="#FFF" x="1" y="1" width="46" height="46" rx="4"></rect>
              <path d="M0 4.01A4.01 4.01 0 014.01 0h39.98A4.01 4.01 0 0148 4.01v39.98A4.01 4.01 0 0143.99 48H4.01A4.01 4.01 0 010 43.99V4.01zM19 18.3h6.5v3.266C26.437 19.688 28.838 18 32.445 18 39.359 18 41 21.738 41 28.597V41.3h-7V30.159c0-3.906-.937-6.109-3.32-6.109-3.305 0-4.68 2.375-4.68 6.109V41.3h-7v-23zM7 41h7V18H7v23zm8-30.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" className="background" fill="#0077B5"></path>
            </g>
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
