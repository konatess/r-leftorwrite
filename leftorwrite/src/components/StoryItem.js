import icons from '../constants/icons';
import strings from '../constants/strings';

export default function StoryItem (props) {
    let tags = ["happy", "sad", "angry", "really bad eggs"]
    let author = "Author Name";
    // let author = "";
    let startpageId = 5;
    let storyId = 13;
    return <li className='storyitem' itemID={'storyitem' + props.story.id}>
        <div className='storyleftcol'>
            <a className='storytitle' href={props.redirect.replace(":pageid", startpageId).replace(":storyid", storyId)}><strong>{props.story.title}</strong></a>
            {author && <span className='authorname'>{"by " + author}</span>}
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