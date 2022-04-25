import { useState } from 'react';
import icons from '../constants/icons';
import strings from '../constants/strings';
import TabBar from '../components/TabBar';
import StoryList from '../components/StoryList';

export default function Dashboard (props) {
    const [activeTab, setActiveTab] = useState(strings.tabs.writeAll[0].id);

    let stories = [
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m",
            description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel t",
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

    return <div className='mainpage col'>
        <TabBar tabs={strings.tabs.writeAll} onChange={setActiveTab} />
        <div className='innerpage col'>
            {/* <p>{activeTab}</p> */}
            <StoryList stories={stories} redirect={props.redirect} />
        </div>
    </div>
}