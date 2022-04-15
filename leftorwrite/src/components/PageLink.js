import "./PageLink.css"

export default function StoryItem (props) {
    return <div className="linksrow">
        {props.links.map( link => {
            return <a className="pagelink" href={link.ToPageId}>{link.linkname}</a>
        })}
    </div>
}