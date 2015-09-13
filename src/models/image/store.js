import { Store, toImmutable } from 'nuclear-js';
import { RECEIVE_IMAGES } from '../../action-types';

export default Store({
  getInitialState() {
    return toImmutable({});
  },

  initialize() {
    this.on(RECEIVE_IMAGES, receiveImages);
  }
});

function receiveImages(state, images) {
  let newImages = toImmutable(images)
      .toMap()
      .mapKeys((k, v) => v.get('id'));

  return state.merge(newImages);
}
