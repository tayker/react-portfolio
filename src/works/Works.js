import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import work1 from '../assets/images/work1.jpg';
import work2 from '../assets/images/work2.jpg';
import work3 from '../assets/images/work3.jpg';
import './Works.css';

export default class Works extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};
        this.updateWindowDimensions = () => {
            this.setState({ width: window.innerWidth, height: window.innerHeight });
        }
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    render() {
        return (
            <section className='section section--works'>
                <div className="container">
                    <h2>
                        Selected work
                    </h2>
                    <Carousel className='works'
                              showThumbs={false}
                              showStatus={false}
                              showIndicators={false}
                              infiniteLoop={true}
                              axis={this.state.width < 800 ? 'vertical' : 'horizontal'}>
                        <div className="works__item">
                            <img src={work1} alt=""/>
                            <div className="title">
                                Lorem ipsum.
                            </div>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque?
                            </p>
                        </div>
                        <div className="works__item">
                            <img src={work2} alt=""/>
                            <div className="title">
                                Lorem ipsum dolor.
                            </div>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus delectus dolores tempora.
                            </p>
                        </div>
                        <div className="works__item">
                            <img src={work3} alt=""/>
                            <div className="title">
                                Lorem ipsum dolor sit.
                            </div>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, qui.
                            </p>
                        </div>
                    </Carousel>
                </div>
            </section>
        )
    }
}