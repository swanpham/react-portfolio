import {Link} from 'react-router-dom';

function Nav({currentLink, allLink, setCurrentLink}) {
    return (
      <nav id="nav-hover">
        {allLink.map((page) => (
            <Link
            to = {`/${page}`}
            key = {page}
            onClick = {() => {
                setCurrentLink (page)
            }}
            className = {`nav-link ${currentLink === page? `nav-active`: ''}`}
            >{page}</Link>
        ))}
      </nav>
    );
  }
  
  export default Nav;