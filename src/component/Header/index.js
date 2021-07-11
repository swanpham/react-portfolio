import Nav from '../Nav';

function Header({currentLink, allLink, setCurrentLink}) {
    return (
      <header>
        <span>Swan Pham</span>
        <Nav currentLink = {currentLink} allLink = {allLink} setCurrentLink = {setCurrentLink}/>
      </header>
    );
  }
  
  export default Header;