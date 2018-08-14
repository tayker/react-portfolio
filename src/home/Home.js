import React from 'react';
import './Home.css';
import img from '../assets/images/spacetraveller.png';
import ufoImg from '../assets/images/ufo.png';
import {Carousel} from 'react-responsive-carousel';

export default class Home extends React.Component {
    render() {
        return (
            <main className='section section--main'>
                <div className="container">
                    <Carousel className="interactive"
                              showArrows={true}
                              showIndicators={false}>
                        <div className="interactive__item">
                            <h2>
                                Your next interactive experience
                            </h2>
                            <img className='img' src={img} alt=""/>
                            <button className="button button--follow">
                                Action
                            </button>
                        </div>
                        <div className="interactive__item">
                            <h2>
                                Your next interactive experience
                            </h2>
                            <img className='img' src={ufoImg} alt=""/>
                            <button className="button button--follow">
                                Action
                            </button>
                        </div>
                        <div className="interactive__item">
                            <h2>
                                Your next interactive experience
                            </h2>
                            <img className='img' src={img} alt=""/>
                            <button className="button button--follow">
                                Action
                            </button>
                        </div>
                    </Carousel>
                </div>
            </main>
        )
    }
}