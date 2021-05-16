/* eslint-disable no-unused-vars */
import qs from 'qs'
import { authApi } from '@/core/apis/auth'
import { clientApi } from '@/core/apis/client'
import { store } from '@/store/index'
/* eslint-enable no-unused-vars */

export const blogService = {
  /**
   * Create multiple records
   */
  createMany: (form) => clientApi.post('blogs', { data: form }),
  /**
   * Create single record
   */
  createOne: (form) => clientApi.post('blogs', form),
  /**
   * Get multiple records
   */
  getMany: (query) =>
    clientApi.get('blogs?' + qs.stringify(query, { arrayFormat: 'repeat' })),
  /**
   * Get single record
   */
  getOne: (id) => clientApi.get(`blogs/${id}`),
  /**
   * Update multiple records
   */
  updateMany: (form) => clientApi.put(`blogs`, { data: form }),
  /**
   * Update single record
   */
  updateOne: (id, form) => clientApi.put(`blogs/${id}`, form),
  /**
   * Delete multiple records
   */
  deleteMany: (ids) =>
    clientApi.request({
      url: '/blogs',
      method: 'delete',
      headers: {
        Authorization: 'Bearer ' + store.state.auth?.data?.token,
      },
      data: ids,
    }),
  /**
   * Delete single record
   */
  deleteOne: (id) => clientApi.delete(`blogs/${id}`),
}
