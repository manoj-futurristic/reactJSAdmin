import { getUsers } from "../../services/auth-services";
import { useState, useEffect } from "react";
import Loader from "../../components/loader";




const Users = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setLoading(true);
        getUsers().then(response => {
            setUsers(response.data);
            setTimeout(() => { setLoading(false); }, 500);
        });
    }, []);


    return (
        <>
            {
                loading ? (
                    <Loader />
                ) :
                    (
                        <div className="table-size">
                            <table class="table align-middle mb-0 bg-white ">
                                <thead class="bg-light">
                                    <tr>
                                        <th>User ({users.length})</th>
                                        <th>Title</th>
                                        <th>Status</th>
                                        <th>User Type</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) =>
                                        <tr>
                                            <td className="tr-css">
                                                <div class="d-flex align-items-center">
                                                    <img
                                                        src={`https://picsum.photos/250?image=${users.indexOf(user) + 50}`}
                                                        alt=""

                                                        class="rounded-circle avatar-size"
                                                    />
                                                    <div class="ms-3">
                                                        <p class="fw-bold mb-1">{user.email.split('@')[0]}</p>
                                                        <p class="text-muted mb-0">{user.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p class="fw-normal mb-1">Software engineer</p>
                                                <p class="text-muted mb-0">IT department</p>
                                            </td>
                                            <td>
                                                {user.active ? "Active" : "not-Active"}
                                            </td>
                                            <td>
                                                {user.isAdmin ? "Admin" : "User"}
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-primary btn-block">
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )
            }
        </>

    );
}



export default Users;