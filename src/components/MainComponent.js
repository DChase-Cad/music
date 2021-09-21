import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HomeContent from './HomeContent';
import AboutContent from './AboutContent';
import { Switch, Route, Redirect } from 'react-router-dom';
import ClassResourcesContent from './ClassResoucesContent';
import GalleryContent from './GalleryComponent';

export default function MainComponent() {
    return (

        <div className="mx-auto">

            <Header />

            <div className="container home-width">
                <Switch>
                    <Route path='/home' component={HomeContent} />
                    <Route exact path='/aboutus' component={AboutContent} />
                    <Route exact path = '/classresources' component = {ClassResourcesContent} />
                    <Route exact path = '/gallery' component = {GalleryContent} />
                    <Redirect to='/home' />
                </Switch>
            </div>

            <Footer />

        </div>
    )

}
