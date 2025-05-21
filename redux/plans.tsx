import { Product } from '@/components/order/PlansCard'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PlansState {
  plansDetails: Record<string, any> // Adjust type as per your expected data structure
  selectedPlan: Product
}

const initialDetails = (): Record<string, any> => {
  if (typeof window !== 'undefined') {
    try {
      const items = window.sessionStorage.getItem('plansDetails')
      return items ? JSON.parse(items) : {}
    } catch (error) {
      console.error('Failed to load plansDetails from sessionStorage', error)
    }
  }
  return {}
}

const initialState: PlansState = {
  plansDetails: initialDetails(),
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
      window.sessionStorage.setItem(
        'plansDetails',
        JSON.stringify(action.payload)
      )
    },
    handleSelectPlan: (state, action: PayloadAction<Product>) => {
      debugger
      state.selectedPlan = action.payload
    },
  },
})

export const { addPlans, handleSelectPlan } = plansSlice.actions

export default plansSlice.reducer
