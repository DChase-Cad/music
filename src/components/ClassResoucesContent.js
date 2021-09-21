import React, { Component } from 'react'
import { Card } from 'reactstrap';
import { CLASSES } from '../shared/ClassCards';

export default class ClassResourcesContent extends Component {
    constructor(props) {
        super(props)
        this.state={
        classes:CLASSES}
    }
    render() {
 
        return (
            <>
                <div className="row row-content py-3 w-100 content">
                    <h1 className="text-center mx-auto my-4 font-weight-bold w-100">Class Resources <small> - Wowhead Guides</small></h1>
                    
                        {/* mapping cards from input on ClassCards.js */}
                        {CLASSES.map((index,i) => {
                            return (
                                <div key={index.class} className='col-12 col-sm-6 col-lg-4 col-xl-3 text-center'>
                                    <Card className="my-2 class-card">
                                        <h3 className={`${index.abbrv} class-card-header font-weight-bold spec-titles `}>{index.class.toUpperCase()}</h3>
                                        <ul className="mt-4 justify-content-center mx-auto">
                                            {index.specs.map((s,idx)=>{
                                                return(<li key={idx} className="font-weight-bold specs class-ul my-1  p-0"><a target="_blank" rel="noopener noreferrer" className="guide-link" href={index.link[idx]}>{s}</a></li>)})}
                                        </ul>
                                    </Card>
                                </div>
                            )
                        })}

                </div>
            </>
        );
    }
}


