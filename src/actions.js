import reactor from './reactor';
import { RECEIVE_IMAGES } from './action-types';

export default {
  fetchImages() {
    return reactor.dispatch(RECEIVE_IMAGES, [
      {
        id: 1,
        title: 'dog',
        url: 'http://placehold.it/200x200'
      },
      {
        id: 2,
        title: 'cat',
        url: 'http://placehold.it/200x200'
      },
      {
        id: 3,
        title: 't-rex',
        url: 'http://placehold.it/200x200'
      }
    ]);
  }
};
