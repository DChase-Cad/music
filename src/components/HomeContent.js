import React from 'react'
import HomeCarousel from './HomeCarousel'

export default function Home(){
        return (
                <div className="row row-content justify-content-center align-items-center py-3 w-100  content ">
                <HomeCarousel />
                    <h2 className="text-center mb-4 mt-5 ptb font-weight-bold">Welcome to From Ashes Horde Guild on Kil'jaeden Server</h2>
                    <div className="col col-lg-6">
                        <p className="text-light para">We are a raiding focused guild with determined members who enjoy pushing themselves to conquer the most challenging content in the game.</p>
                        <p className="text-light para">We pride ourselves on being able to strike a balance between having a semi-casual atmosphere, while achieving end game success. We understand that life always comes before the game, but when it’s time to work we do expect raiders to come prepared and ready to perform.</p>
                        <p className="text-light para">Our membership has grown steadily over the past few years which has formed strong bonds of friendship and loyalty within our guild. We love getting to know new members, and our officers are always willing to help no matter your skill or experience level. We do have a vast and vocal roster with many colorful personalities, so be prepared for a fun and exciting time with From Ashes.
                  <br /><br />(Rated M for mature)</p>
                    </div>
                    <div className="col col-sm-4 d-none d-lg-block justify-content-center align-self-center">
                        <div className="media">
                            <img className=" mr-3 img-fluid" src="assets/img/horde_logo.jpg" alt="Breadcrumb Trail" />

                        </div>
                    </div>
                </div>
       
        )
   }
