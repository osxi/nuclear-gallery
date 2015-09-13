import Gallery from './components/gallery';
import ImageStore from './models/image/store';
import React from 'react';
import actions from './actions';
import reactor from './reactor';

reactor.registerStores({
  images: ImageStore,
});

actions.fetchImages();

React.render(<Gallery />, document.body);
