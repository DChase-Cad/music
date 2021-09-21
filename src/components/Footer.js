import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <footer className="site-footer">
            <div className="container pt-4">
                <div className="row">
                    <div className="col-4 d-none d-sm-block col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/hom'>Home</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/classresources' >Class Resources</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-5 text-center">
                        <h5>Socials</h5>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon twitch" href="http://www.twitter.com"><svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" fill="currentColor" className="bi bi-twitch" viewBox="0 0 16 16">
                            <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z" />
                            <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z" />
                        </svg></a>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h5>Email us</h5>
                        <a role="button" className="email btn btn-link" href="mailto:"><i className="fa fa-envelope fa-3x"></i></a>
                    </div>
                </div>
            </div   >
        </footer>
    );

}

