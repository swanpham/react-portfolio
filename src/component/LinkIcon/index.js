const LinkIcon = ( { children, url } ) => {
    return (
        <a href={ url } target="_blank" className='link-icon' rel="noreferrer" >
            { children }
        </a>
    )
}
export default LinkIcon