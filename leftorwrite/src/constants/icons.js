import { FaFeatherAlt, FaShare } from "react-icons/fa";

export default {
    start: 'FaCircle',
    tbc: 'FaBahai',
    end: 'FaSquare',
    link: 'FaLink', // FaAngleUp FaAngleDown FaCaretDown FaCaretUp FaChevronUp FaChevronDown FaExclamationCircle FaBolt
    continue: 'FaForward', // FaPlay
    choice: 'FaClone', // FaProjectDiagram FaArrowsAlt FaArrowsAltH FaShapes FaShareAltSquare
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