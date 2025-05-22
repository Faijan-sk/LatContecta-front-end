import plansReducer from './plans'

const rootReducer = {
  plans: plansReducer,
}

export { rootReducer }

export type RootState = {
  plans: ReturnType<typeof plansReducer>
}
