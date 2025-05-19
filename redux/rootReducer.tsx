// ** Reducer Import
import plansReducer from './plans'

const rootReducer = {
  plans: plansReducer,
}

export { rootReducer }

// Define RootState based on the reducer structure
export type RootState = {
  plans: ReturnType<typeof plansReducer>
}
