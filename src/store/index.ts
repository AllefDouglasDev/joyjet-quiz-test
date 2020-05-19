import { createStore, Store, compose } from 'redux'

import { QuizState } from '../store/ducks/quiz/types'

import reducers from './ducks'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<ApplicationState> = createStore(
  reducers,
  composeEnhancers()
)

export interface ApplicationState {
  quiz: QuizState,
}

export default store
