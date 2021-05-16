import { clientApi } from '@/core/apis/client'

export const authService = {
  signin: (form) => clientApi.post('/auth/signin', form),
}
