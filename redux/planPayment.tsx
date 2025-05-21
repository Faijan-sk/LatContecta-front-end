import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SelectedPlanState {
  plan: any | null // You can replace `any` with a proper type
}

const initialState: SelectedPlanState = {
  plan: null,
}

const selectedPlanSlice = createSlice({
  name: 'selectedPlan',
  initialState,
  reducers: {
    setSelectedPlan: (state, action: PayloadAction<any>) => {
      state.plan = action.payload
    },

    clearSelectedPlan: (state) => {
      state.plan = null
    },
  },
})

export const { setSelectedPlan, clearSelectedPlan } = selectedPlanSlice.actions
export default selectedPlanSlice.reducer
