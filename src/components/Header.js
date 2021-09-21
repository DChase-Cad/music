import React from 'react';
import TopNavbar from './TopNavbar';
import { Link } from 'react-router-dom';





export default function header(){
   
        return (
            <React.Fragment>
                <header className="jumbotron pt-4 rounded-0">
                    <div className="container container-fluid">
                        <div className="row justify-content-center">
                            <div className="col col-4 col-sm-3 col-md-2 align-self-center d-none d-sm-block">
                                <Link to="/home"><img src="assets/img/phoenix.png" alt="logo" className="img-fluid d-none d-md-block" /></Link>
                            </div>
                            <div className="mx-auto">
                                <Link to='/home' className="text-decoration-none"><h1 className="font-weight-bold text-center">From Ashes</h1>
                                    <h2>Kil'jaeden - Horde</h2></Link>
                            </div>
                            <div className="col-4 col-sm-3 col-md-2 align-self-center d-none d-sm-block">
                                <Link to="/home"><img src="assets/img/phoenix.png" alt="logo" className="img-fluid d-none d-md-block" /></Link>

                            </div>
                        </div>
                    </div>
                </header>
                <TopNavbar />

            </React.Fragment>
        );
    
}

