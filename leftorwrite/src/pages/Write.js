import { useState, useEffect } from 'react';
import icons from '../constants/icons';
import strings from '../constants/strings';
import dummyData from '../constants/dummyData';
import TabBar from '../components/TabBar';
import PageIcon from '../components/PageIcon';
import WriteForm from '../components/WriteForm';
import StoryBtns from "../components/StoryBtns";

export default function Write (props) {
    const [activeTab, setActiveTab] = useState(strings.tabs.writeOne[0].id);
    const [filteredPages, setFilteredPages] = useState([]);
    const [activeWarns, setActiveWarns] = useState({});
    // const [story, setStory] = useState(dummyData.stories[0]);
    const [pages, setPages] = useState(dummyData.pages);

    useEffect( () => {
        let filtered = [];
        if (activeTab === "unfinished") {
            filtered = pages.filter( page => { return !page.contentFinished})
        }
        else if (activeTab === "tbcs") {
            filtered = pages.filter( page => { return page.isTBC})
        }
        else if (activeTab === "unlinked") {
            filtered = pages.filter( page => { return !page.isLinked})
        }
        else if (activeTab === "orphans") {
            filtered = pages.filter( page => { return page.isOrphaned})
        }
        setFilteredPages(filtered);
    })

    let recentpages = pages.slice();
    recentpages.sort(function(a, b){
        let dateA = new Date(a.updatedAt);
        let dateB = new Date(b.updatedAt);
        return dateB - dateA
    });

    let published = false;

    return <div className='mainpage col'>
        <TabBar tabs={strings.tabs.writeOne} onChange={setActiveTab} />
        <div className='innerpage col'>
            <div className='row row-right'>
                <span className='story-btn'>{strings.storyButtons.createNewPage}</span>
                <span className='story-btn'>{strings.storyButtons.viewStory}</span>
                <span className='story-btn'>{published ? strings.storyButtons.unpublish : strings.storyButtons.publish}</span>
                <span className='story-btn'>{strings.storyButtons.deleteStory}</span>
            </div>
            { activeTab === "storysettings" && <div className='row' id='storysettings'> 
                <div className='col' id='story-btns-col'>
                    <StoryBtns warns={activeWarns} onChange={setActiveWarns} />
                </div>
                <div className='col' id='story-inputs-col'>
                    <WriteForm story={true} />
                </div>
            </div>}
            { activeTab === "recentpages" && recentpages.map(page => {
                return <PageIcon page={page} />
            })}
            { (activeTab === "unfinished" || activeTab === "tbcs" || activeTab === "unlinked" || activeTab === "orphans") && filteredPages.map( page => {
                return <PageIcon page={page} />
            })}
        </div>
    </div>
}