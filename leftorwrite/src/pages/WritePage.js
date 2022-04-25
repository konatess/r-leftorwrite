import strings from "../constants/strings"
import dummyData from "../constants/dummyData"
import WritePBtns from "../components/WritePBtns"
import WriteForm from "../components/WriteForm"

export default function WritePage (props) {
    return <div className="mainpage col">
        <div className="innerpage col">
            <div className="row row-right">
                <span className="story-btn" >{strings.pageButtons.saveReturn}</span>
                <span className="story-btn" >{strings.pageButtons.delete}</span>
            </div>
            <WriteForm />
            <WritePBtns />
        </div>
    </div>
}