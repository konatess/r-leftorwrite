import StoryItem from "./StoryItem";
import "./StoryList.css"

export default function StoryList (props) {
    
    return <ul id="storylist">
        {props.stories.map( (story) => {
            return <StoryItem story={story} redirect={props.redirect} />
        })}
    </ul>
}