import '../assets/css/sidebar.css'
import { useState } from "react";



function Sidebar({ stateChanger }) {
    const [dateTime, setDateTime] = useState(new Date().toLocaleString());
    setInterval(function () {
        setDateTime(new Date().toLocaleString());
    }, 1000);

    return (
        <div>
            <body>
                <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <div class="container-fluid">
                        <h5>CG-Admin</h5>
                        {/* <button
                            class="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#sidebarMenu"
                            aria-controls="sidebarMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i class="fas fa-bars"></i>
                        </button> */}
                        <h5 >{dateTime}</h5>

                    </div>
                </nav>

                <nav id='sidebarMenu'>
                    <div class="w3-sidebar w3-bar-block w3-black w3-xxlarge sized" >
                        <div class="w3-bar-item w3-button" onClick={() => { stateChanger(0) }}><i class="fa fa-home fa-beat"></i></div>
                        <div class="w3-bar-item w3-button" onClick={() => { stateChanger(1) }}><i class="fa fa-user-plus"></i></div>
                        <div class="w3-bar-item w3-button" onClick={() => { stateChanger(2) }}><i class="fa fa-list"></i></div>
                        <div class="w3-bar-item w3-button" onClick={() => { stateChanger(3) }}><i class="fa fa-plus"></i></div>
                        <div class="w3-bar-item w3-button" onClick={() => { stateChanger(4) }} ><i class="fa fa-trash"></i></div>
                    </div>
                </nav>
            </body>
        </div>
    );
}


export default Sidebar;