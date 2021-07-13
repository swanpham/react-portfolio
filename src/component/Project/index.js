const Project = ( { title, description, url, image, github } ) => {
    return (
        <article className="work-container">
            <a href={ url } className="work-image-link">
                <span className="work-title">{ title }</span>
                <img className="project-image" src={ require(`../../assets/cover/${ image }`).default } alt={`${title}`} />
            </a>
            <span className="work-desc">{ description }</span>
            <a href={ github } className="work-github">GitHub Link</a>
        </article>
    )
}
export default Project