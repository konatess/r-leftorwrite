import { FaFeatherAlt, FaShare, FaCircle, FaBahai, FaLink, FaSquare, FaForward, FaClone, FaPlay } from "react-icons/fa";

export default {
    start: (props) => { return <FaCircle className={props.className} id={props.id}/> },
    tbc: (props) => { return <FaBahai className={props.className} id={props.id}/> },
    end: (props) => { return <FaSquare className={props.className} id={props.id}/> },
    link: (props) => { return <FaLink className={props.className} id={props.id}/> }, // FaAngleUp FaAngleDown FaCaretDown FaCaretUp FaChevronUp FaChevronDown FaExclamationCircle FaBolt FaLink
    continue: (props) => { return <FaPlay className={props.className} id={props.id}/> }, // FaPlay FaForward
    choice: (props) => { return <FaForward className={props.className} id={props.id}/> }, // FaProjectDiagram FaArrowsAlt FaArrowsAltH FaShapes FaShareAltSquare FaForward
    bookmark: 'FaBookmark',
    bookmarkline: 'FaRegBookmark',
    feather: (props) => { return <FaFeatherAlt className={props.className} id={props.id}/> },
    heart: 'FaHeart',
    heartline: 'FaRegHeart',
    close: 'FaTimes',
    question: 'FaQuestion',
    page: 'FaFile',
    pageline: 'FaRegFile',
    filter: 'FaFilter',
    curvedarrow: (props) => {return <FaShare className={props.className} id={props.id}/>}, // FaShareSquare
    ghost: 'FaGhost',
    cooperate: 'FaHandsHelping',
    alert: 'FaBell'
}

// FaStar