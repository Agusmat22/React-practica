

import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './auth/context/authProvider'

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter /> {/*ROUTES*/}
    </AuthProvider>
  )
}
