import React, { Component } from 'react';
import Slide from './Slide';

class Carousel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      slides: [
        {
          src: 'url',
          title: 'title',
          descr: 'descr'
        },
        {
          src: 'url',
          title: 'title',
          descr: 'descr'
        },
        {
          src: 'url',
          title: 'title',
          descr: 'descr'
        }
      ],
      currentIndex: 0
    };
  }

  get nextIndex () {
    const { currentIndex, slides } = this.state;
    return (currentIndex + 1) % slides.length;
  }

  get prevIndex () {
    const { currentIndex, slides } = this.state;
    return (currentIndex - 1 + slides.length) % slides.length;
  }

  render () {
    const { slides, currentIndex } = this.state;
    return (
      <div>
        <Slide slide={slides[currentIndex]} isCurrent={currentIndex === 0} />
        <Slide
          slide={slides[currentIndex + 1]}
          isCurrent={currentIndex + 1 === 0}
        />
        <Slide
          slide={slides[currentIndex + 2]}
          isCurrent={currentIndex + 2 === 0}
        />
      </div>
    );
  }
}

export default Carousel;
