import Sidebar from '../../components/side-bar'
import Users from './users';
import NotFound from '../../components/page-not-found'
import { useState } from "react";
import CreateUser from './create-user';


const pages = [
    <Users />,
    <CreateUser />,
    <Users />,
    <NotFound />,
    <Users />,
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