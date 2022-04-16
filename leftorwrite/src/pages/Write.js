import { useState, useEffect } from 'react';
import icons from '../constants/icons';
import strings from '../constants/strings';
import TabBar from '../components/TabBar';
import PageIcon from '../components/PageIcon';

export default function Write (props) {
    const [activeTab, setActiveTab] = useState(strings.tabs.writeOne[0].id);
    const [filteredPages, setFilteredPages] = useState([]);

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

    let pages = [
        {
            id: 16,
            title: "First Start Page",
            content: "I am make many story. Thus it shall be.",
            isStart: true,
            isTBC: false,
            isEnding: false,
            isLinked: true,
            isOrphaned: false,
            contentFinished: false,
            createdAt: "2022-03-01 03:58:17",
            updatedAt: "2022-03-03 03:58:17",
            AuthorId: 3,
            StoryId: 1
        },
        {
            id: 18,
            title: "Page 2",
            content: "I am make many story. Thus it shall be.",
            isStart: false,
            isTBC: true,
            isEnding: false,
            isLinked: true,
            isOrphaned: false,
            contentFinished: true,
            createdAt: "2022-03-01 03:58:17",
            updatedAt: "2022-03-01 03:58:17",
            AuthorId: 3,
            StoryId: 1
        },
        {
            id: 19,
            title: "A page with a medium length title for visuals.",
            content: "I am make many story. Thus it shall be.",
            isStart: false,
            isTBC: false,
            isEnding: true,
            isLinked: true,
            isOrphaned: false,
            contentFinished: false,
            createdAt: "2022-03-01 03:58:17",
            updatedAt: "2022-03-21 03:58:17",
            AuthorId: 3,
            StoryId: 1
        },
        {
            id: 25,
            title: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musi",
            content: "I am make many story. Thus it shall be.",
            isStart: false,
            isTBC: false,
            isEnding: false,
            isLinked: false,
            isOrphaned: true,
            contentFinished: false,
            createdAt: "2022-03-01 03:58:17",
            updatedAt: "2022-03-05 03:58:17",
            AuthorId: 3,
            StoryId: 1
        }
    ];

    let recentpages = pages.slice();
    recentpages.sort(function(a, b){
        let dateA = new Date(a.updatedAt);
        let dateB = new Date(b.updatedAt);
        return dateB - dateA
    });

    return <div className='mainpage'>
        <TabBar tabs={strings.tabs.writeOne} onChange={setActiveTab} />
        <div className='innerpage'>
            <p>{activeTab}</p>
            { activeTab === "recentpages" && recentpages.map(page => {
                return <PageIcon page={page} />
            })}
            { (activeTab === "unfinished" || activeTab === "tbcs" || activeTab === "unlinked" || activeTab === "orphans") && filteredPages.map( page => {
                return <PageIcon page={page} />
            })}
        </div>
    </div>
}