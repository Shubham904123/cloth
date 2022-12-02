import { createStore } from 'redux'
import reducer from './Reducers/index'

export default function configureStore(initialState) {
   const store = createStore(reducer, initialState)
   return store
}

// const persistConfig = {
//    key:'primary',
//    storage: AsyncStorage,
//    whitelist: [
//       'userReducer'
//    ],
// }
// const persistedReducer = persistReducer(persistConfig, reducer)
// const store = legacy_createStore(persistedReducer, {}, applyMiddleware(ReduxThunk))
// const persistor =  persistStore(store)

// export{persistor}
// export default store