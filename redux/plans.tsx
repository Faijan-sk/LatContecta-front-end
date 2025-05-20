import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlansState {
  plansDetails: Record<string, any>; // Adjust type as per your expected data structure
}

const initialDetails = (): Record<string, any> => {
  if (typeof window !== "undefined") {
    try {
      const items = window.sessionStorage.getItem("plansDetails");
      return items ? JSON.parse(items) : {};
    } catch (error) {
      console.error("Failed to load plansDetails from sessionStorage", error);
    }
  }
  return {};
};

const initialState: PlansState = {
  plansDetails: initialDetails(),
};

export const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    addPlans: (state, action: PayloadAction<Record<string, any>>) => {
      state.plansDetails = action.payload;
      window.sessionStorage.setItem(
        "plansDetails",
        JSON.stringify(action.payload)
      );
    },
  },
});

export const { addPlans } = plansSlice.actions;

export default plansSlice.reducer;
