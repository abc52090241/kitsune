import AAQDispatcher from '../dispatchers/AAQDispatcher.es6.js';
import {actionTypes} from '../constants/AAQConstants.es6.js';

export function setProduct(product) {
  AAQDispatcher.dispatch({
    type: actionTypes.SET_PRODUCT,
    product,
  });
}

export function setTopic(topic) {
  AAQDispatcher.dispatch({
    type: actionTypes.SET_TOPIC,
    topic,
  });
}

export default {setProduct, setTopic};
