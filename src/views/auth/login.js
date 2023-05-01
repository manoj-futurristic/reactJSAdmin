import '../../assets/css/custom.css';
import '../../assets/css/login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {adminLogin}  from '../../services/auth-services';


const Login = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState();

    const loginSubmit =  (e) => {
        e.preventDefault();
        console.log(email, password);
         adminLogin(email,password).then(response => {
            if(response['status'] === 200){
                setMessage(response['message']);
                localStorage.setItem('isLogin', true);
                localStorage.setItem('id', response.data._id);

                setTimeout(()=>{navigate('dashboard');},500)
            }else{
                setMessage(response['message']);
            }
          })
          .catch(err => {
            setMessage("Something went wrong")
          });
    }

    return (
        <section className="vh-100">
            {message &&
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {message}
                </div>}
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={`https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp`}
                            className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={loginSubmit}>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">LOGIN</p>
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
                                <button type="submit"  className="btn btn-primary btn-lg btn-block">Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;