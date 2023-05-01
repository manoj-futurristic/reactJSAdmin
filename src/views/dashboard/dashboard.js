import Sidebar from '../../components/side-bar'
import Users from './users';
import { useState } from "react";
import CreateUser from './create-user';
import Posts from './posts';
import CreatePost from './create-post';
import Chart from './chart';


const pages = [
    <Users />,
    <CreateUser />,
    <Posts />,
    <CreatePost />,
    <Chart />,
];

const Dashboard = () => {

    const [currentPage, setCurrentPage] = useState(0);

    const activeTab = (page) => {
        return (
            pages[page]
        );
    }

    return (
        <div className='row'>
            <Sidebar stateChanger={setCurrentPage} />
            <div>
                {activeTab(currentPage)}
            </div>
        </div>
    );
}

export default Dashboard;