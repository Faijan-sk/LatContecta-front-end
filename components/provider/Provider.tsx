'use client'

import { ReactNode } from 'react'
import { store, persistor } from '@/redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
