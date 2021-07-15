import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'
import LinkIcon from '../LinkIcon'

function Footer() {
  return (
    <footer>
      <div>
      <LinkIcon url="https://github.com/swanpham">
        <FaGithub/>
      </LinkIcon>
      <LinkIcon url="https://www.linkedin.com/in/swan-pham-9428aa206/">
        <FaLinkedin/>
      </LinkIcon>
      <LinkIcon url="https://stackexchange.com/users/20722994/swan-pham">
        <FaStackOverflow/>
      </LinkIcon>
      </div>
      <h2><span>&copy; Swan Pham</span></h2>
    </footer>
  );
}
export default Footer;