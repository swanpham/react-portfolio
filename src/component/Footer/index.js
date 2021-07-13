import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'
import LinkIcon from '../LinkIcon'

function Footer() {
  return (
    <footer>
      <div>
      <LinkIcon url="https://github.com/swanpham">
        <FaGithub/>
      </LinkIcon>
      <LinkIcon url="http://www.linkedin.com/*">
        <FaLinkedin/>
      </LinkIcon>
      <LinkIcon url="http://www.stackoverflow.com/*">
        <FaStackOverflow/>
      </LinkIcon>
      </div>
      <h2><span>&copy; Swan Pham</span></h2>
    </footer>
  );
}
export default Footer;