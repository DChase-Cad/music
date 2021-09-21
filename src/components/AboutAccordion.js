import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Collapse, CardImg } from 'reactstrap';
import { CARDS } from '../shared/AccordionCards';

export default class AboutAccordion extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: 1, cards: CARDS
    }
  }


  toggle(e) {
    let event = e.target.dataset.event;
    this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
  }



  render() {
    const { cards, collapse } = this.state;
    return (
      <div className="container w-100">
        <h1 className="text-center mx-auto my-4 font-weight-bold">Guild Information</h1>

        {/* mapping the cards with identical makeups from object in AccordionCards.js */}
        {cards.map(index => {
          return (


            <Card key={index.index} className="w-100 mx-auto">
              <CardHeader className="card-header align-items-center ac-link font-weight-bold" onClick={this.toggle} data-event={index.index}>{index.title} <small onClick={this.toggle} data-event={index.index} className="d-none d-sm-inline no-shadow font-weight-bold"> - {index.subtitle}</small></CardHeader>
              <Collapse isOpen={collapse === index.index}>
                <div className="row align-items-center">
                  <CardBody className="card-body col-sm-6 col-lg-5 align-self-center ">{index.description}</CardBody>
                  <CardImg className="img-fluid col-sm-6 col-lg-7 d-none d-sm-block " src={index.image} />
                </div>
              </Collapse>
            </Card>
          )
        })}

       {/* manually input card last card with ul and list */}
        <Card key={4} className="w-100 mx-auto">
          <CardHeader className="card-header align-items-center ac-link font-weight-bold" onClick={this.toggle} data-event={4}>Officers <small onClick={this.toggle} data-event={4} className="d-none d-sm-inline no-shadow font-weight-bold"> - Contact one of our officers in game with any questions.</small></CardHeader>
          <Collapse isOpen={collapse === 4}>
            <div className="row align-items-center">
              <CardBody className="card-body col-sm-12 col-lg-5 align-self-center text-center text-lg-left">
                <ul className="ml-0 ml-sm-4">
                  <li className="font-weight-bold">GM: <span className="officer font-weight-bold">Star</span> [Bnet#]</li>
                  <li className="font-weight-bold">Officer: <span id="rip" className="officer font-weight-bold" data-toggle="modal" data-target="#galleryModal">Ebon</span> [Bnet#]</li>
                  <li className="font-weight-bold">Officer: <span className="officer font-weight-bold">Asuka</span> [Bnet#]</li>
                  <li className="font-weight-bold">Officer: <span className="officer font-weight-bold">Bav</span> [Bnet#]</li>
                </ul>
              </CardBody>
              <CardImg className="d-none d-sm-block img-fluid col-sm-8 col-lg-7 mx-auto" src="assets/img/wrathion_dance.jpg" />
            </div>
          </Collapse>
        </Card>
      </div>
    );
  }
}



