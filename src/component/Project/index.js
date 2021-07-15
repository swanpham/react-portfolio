import { FaGithub } from 'react-icons/fa'
import { BiLinkAlt } from 'react-icons/bi'
import LinkIcon from '../LinkIcon'
const Project = ( { title, description, url, image, github } ) => {
    return (
        <article className="work-container">
            <div className="project-content">
            <LinkIcon url={ github }>
                <FaGithub/>
            </LinkIcon>
            <LinkIcon url={ url }>
                <BiLinkAlt/>
            </LinkIcon>
                <span className="work-desc">{ description }</span>
            </div>
            <span className="work-title">{ title }</span>
            <img className="project-image" src={ require(`../../assets/cover/${ image }`).default } alt={`${title}`} />
        </article>
    )
}
export default Project