import { FaCircle, FaBahai, FaSquare, FaLink, FaPlay, FaForward, FaBookmark,  
    FaRegBookmark, FaFeatherAlt, FaHeart, FaRegHeart, FaTimes, FaQuestion, FaFile,
    FaRegFile, FaFilter, FaShare, FaGhost, FaHandsHelping, FaBell, FaUnlink,
    FaAngleUp, FaAngleDown, FaExclamationCircle, FaBolt,
    // FaClone, FaShareAltSquare, FaProjectDiagram, FaShapes, FaArrowsAlt, FaArrowsAltH 
} from "react-icons/fa";

export default {
    start: (props) => { return <FaCircle className={props.className} id={props.id}/> },
    tbc: (props) => { return <FaBahai className={props.className} id={props.id}/> },
    end: (props) => { return <FaSquare className={props.className} id={props.id}/> },
    link: (props) => { return <FaLink className={props.className} id={props.id}/> }, // FaAngleUp FaAngleDown FaCaretDown FaCaretUp FaChevronUp FaChevronDown FaExclamationCircle FaBolt FaLink FaUnlink
    parentlink: (props) => { return <FaBolt className={props.className} id={props.id}/> },
    childlink: (props) => { return <FaBolt className={props.className} id={props.id}/> },
    continue: (props) => { return <FaPlay className={props.className} id={props.id}/> }, // FaPlay FaForward
    choice: (props) => { return <FaForward className={props.className} id={props.id}/> }, // FaProjectDiagram FaArrowsAlt FaArrowsAltH FaShapes FaShareAltSquare FaForward
    bookmark: (props) => { return <FaBookmark className={props.className} id={props.id}/> },
    bookmarkline: (props) => { return <FaRegBookmark className={props.className} id={props.id}/> },
    feather: (props) => { return <FaFeatherAlt className={props.className} id={props.id}/> },
    heart: (props) => { return <FaHeart className={props.className} id={props.id}/> },
    heartline: (props) => { return <FaRegHeart className={props.className} id={props.id}/> },
    close: (props) => { return <FaTimes className={props.className} id={props.id}/> },
    question: (props) => { return <FaQuestion className={props.className} id={props.id}/> },
    page: (props) => { return <FaFile className={props.className} id={props.id}/> },
    pageline: (props) => { return <FaRegFile className={props.className} id={props.id}/> },
    filter: (props) => { return <FaFilter className={props.className} id={props.id}/> },
    curvedarrow: (props) => {return <FaShare className={props.className} id={props.id}/>}, // FaShareSquare
    ghost: (props) => { return <FaGhost className={props.className} id={props.id}/> },
    cooperate: (props) => { return <FaHandsHelping className={props.className} id={props.id}/> },
    alert: (props) => { return <FaBell className={props.className} id={props.id}/> }
}

// FaStar