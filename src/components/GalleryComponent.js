import React, { Component } from 'react'
import { GALLERY } from '../shared/GalleryItems';

export default class GalleryContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: GALLERY
        }
    }
    render() {

        return (
            <>
                <div className="row row-content py-3 w-100 content">
                    <h1 className="text-center mx-auto my-4 font-weight-bold w-100">Image Gallery</h1>

                    {this.state.images.map((img, i) => {
                        return (
                            <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4 gal-img">
                                <img className="w-100 br-25 gal-img" src={img.image} alt={img.alt} data-target="#galleryCarousel" data-slide-to={i - 1}></img>
                            </div>
                        );
                    })}



                </div>
            </>
        );
    }
}


