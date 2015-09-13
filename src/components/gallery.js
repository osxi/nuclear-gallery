import Image from './image';
import React from 'react';
import getters from '../models/image/getters';
import reactor from '../reactor';

export default React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      images: getters.images
    }
  },

  render() {
    var imageNodes = this.state.images.toArray().map((image, i) => {
      return (<Image src={image.get('url')} key={i} />);
    });

    return (
      <div className="gallery">
        <h1>Gallery</h1>
        {imageNodes}
      </div>
    );
  }
});
