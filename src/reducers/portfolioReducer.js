import {
  COINS_SAVED,
  ASSETS_CHANGED,
  ASSETS_SAVED,
  PORTFOLIO_FETCH
} from '../actions/types';

const INITIAL_STATE = {
  checked: ['ETH'],
  coins: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COINS_SAVED:
      return {
        ...state,
        coins: Object.assign(...state.checked.map(x => ({ [x]: 0 })))
      };
    case ASSETS_CHANGED:
      return {
        ...state,
        coins: { ...state.coins, [action.payload.coin]: action.payload.value }
      };
    case ASSETS_SAVED:
      return {
        ...state
      };
    case PORTFOLIO_FETCH:
      return {
        ...state,
        coins: action.payload
      };
    default:
      return state;
  }
}
