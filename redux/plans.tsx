import { Product } from '@/components/order/PlansCard'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PlansState {
  plansDetails: Record<string, any>
  selectedPlan: Product
}

const initialState: PlansState = {
  plansDetails: {},
  selectedPlan: {
    Skuid: '',
    pdn: '',
    vn: '',
    amt: 0,
    crn: '',
  },
}

export const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    addPlans: (state, action: PayloadAction<Record<string, any>>) => {
      state.plansDetails = action.payload
    },
    handleSelectPlan: (state, action: PayloadAction<Product>) => {
      state.selectedPlan = action.payload
    },
  },
})

export const { addPlans, handleSelectPlan } = plansSlice.actions

export default plansSlice.reducer
