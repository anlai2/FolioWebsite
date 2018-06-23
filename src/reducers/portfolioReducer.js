import {
  COINS_SAVED,
  ASSETS_CHANGED,
  ASSETS_SAVED,
  PORTFOLIO_FETCH
} from '../actions/types';

const INITIAL_STATE = {
  coins: {},
  checked: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COINS_SAVED:
      return {
        ...state,
        checked: action.payload
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
