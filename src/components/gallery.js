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
    var imageNodes = this.state.images.map(image => {
      return (<img className="image" src={image.get('url')} />);
    });

    return (
      <div className="gallery">
        <h1>Gallery</h1>
        {imageNodes}
      </div>
    );
  }
});
