import { clientApi } from '@/core/apis/client'

export class AuthService {
  signin = (form) => clientApi.post('/auth/signin', form)
  signup = (form) => clientApi.post('/auth/signup', form)
}
