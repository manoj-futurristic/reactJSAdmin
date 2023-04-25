import { useState } from 'react';
import { addUser } from '../../services/auth-services';
import authImg  from '../../assets/images/auth.gif'




const CreateUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState();

    const addUserSubmit = (e) => {
        e.preventDefault();
        addUser(email, password).then(response => {
            setMessage(response['message']);
            if (response['status'] === 200) {
                window.location.reload(true);
            } else {

            }
        })
            .catch(err => {
                setMessage("Something went wrong")
            });
    }


    return (
        <div style={{ margin: '8rem' }}>
            {message &&
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {message}
                </div>}
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">

                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form
                            onSubmit={addUserSubmit}
                        >
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Add User</p>
                            </div>

                            <div className="divider d-flex align-items-center my-4">
                            </div>

                            <div className="form-outline mb-4">
                                <input type="email" id="email" required className="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                    onChange={(v) => setEmail(v.target.value)}
                                />
                                <label className="form-label mt-2" for="email">Email address</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" id="password" required className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    onChange={(v) => setPassword(v.target.value)}
                                />
                                <label className="form-label mt-2" for="password">Password</label>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
                            </div>

                        </form>
                    </div>
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={authImg}
                            className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CreateUser;