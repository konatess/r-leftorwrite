import './PageIcon.css'
import strings from '../constants/strings';
import icons from '../constants/icons';

export default function PageIcon (props) {
    return <a className={ "pageIcon" + (props.page.contentFinished ? "" : " unfinPageIcon")} href={strings.fRoutes.writep.replace(":pageid", 6)}>
            <div className='parentStatus'>
                {props.page.isOrphaned && icons.parentlink({className: "pageStatus pLinkIcon", id: "parentlink" + props.page.id})}
                {props.page.isStart && icons.start({className: "pageStatus pStartIcon", id: "start" + props.page.id})}
            </div>
        <div className='childStatus'>
            {props.page.isTBC && icons.tbc({className: "pageStatus pTBCIcon", id: "tbc" + props.page.id})}
            {props.page.isEnding && icons.end({className: "pageStatus pEndIcon", id: "ending" + props.page.id})}
            {!props.page.isLinked && icons.childlink({className: "pageStatus pLinkIcon", id: "childlink" + props.page.id})}
        </div>
    </a>
}