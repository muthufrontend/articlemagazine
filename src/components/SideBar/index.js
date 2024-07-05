import Mightalso from '../MightAlso';
import { Tab, Tabs } from 'react-bootstrap';
import Trenting from '../Trending';

const Sidebar = () => {
    return(
        <>
                    <Tabs
                        defaultActiveKey="like"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                    <Tab eventKey="like" title="YOU MIGHT LIKE">
                        <Mightalso/>
                    </Tab>
                    <Tab eventKey="trenting" title="TRENDING">
                       <Trenting/>
                    </Tab>
                    </Tabs>
        </>
    )
}

export default Sidebar;