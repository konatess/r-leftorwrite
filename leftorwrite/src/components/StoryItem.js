import icons from '../constants/icons';

export default function StoryItem (props) {
    let tags = ["happy", "sad", "angry", "really bad eggs"]
    return <li className='storyitem' itemID={'storyitem' + props.story.id}>
        <div className='storyleftcol'>
            <span className='storytitle'><strong>{props.story.title}</strong></span>
            <span className='authorname'>by Author Name</span>
            <span className='datetime'>{"Updated at: " + props.story.updatedAt}</span>
            <div className='tagsrow'>
                <span className='label'>Tags:</span>
                {tags.map( (tag) => {
                    return <span className='tags' itemID={tag}>{tag}</span>
                })}
            </div>
        </div>
        <p className='storydesc'>{props.story.description}</p>
    </li>
}