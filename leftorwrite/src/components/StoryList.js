import StoryItem from "./StoryItem";
import "./StoryList.css"

export default function StoryList (props) {
    let stories = [
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate",
            isPublic: true,
            isFinished: true,
            doneByDefault: false,
            chooseNotToWarn: false,
            violence: false,
            nsfw: false,
            nonConsent: false,
            characterDeath: false,
            profanity: false,
            createdAt: "2022-02-28 20:12:07",
            updatedAt: "2022-02-28 20:12:07",
            AuthorId: 3
        },
        {
            id: 3,
            title: "Jack and Jill",
            description: "Went up the hill... and then what?",
            isPublic: true,
            isFinished: true,
            doneByDefault: false,
            chooseNotToWarn: false,
            violence: false,
            nsfw: false,
            nonConsent: false,
            characterDeath: false,
            profanity: false,
            createdAt: "2022-02-28 20:12:07",
            updatedAt: "2022-03-28 20:12:07",
            AuthorId: 3
        },
        {
            id: 4,
            title: "Rapunzel",
            description: "Will you go up the tower?",
            isPublic: true,
            isFinished: true,
            doneByDefault: false,
            chooseNotToWarn: false,
            violence: false,
            nsfw: false,
            nonConsent: false,
            characterDeath: false,
            profanity: false,
            createdAt: "2022-02-28 20:12:07",
            updatedAt: "2022-03-21 20:12:07",
            AuthorId: 3
        }
    ]
    return <ul id="storylist">
        {stories.map( (story) => {
            return <StoryItem story={story}/>
        })}
    </ul>
}