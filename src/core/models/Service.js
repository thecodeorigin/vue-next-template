/* eslint-disable no-unused-vars */
import qs from 'qs'
import { authApi } from '@/core/apis/auth'
import { clientApi } from '@/core/apis/client'
import { store } from '@/store/index'
/* eslint-enable no-unused-vars */

export class Service {
  constructor(path) {
    this.path = path
  }

  /**
   * Create multiple records
   *
   * @param {*} form
   * @returns
   */
  createMany = (form) => authApi.post(`${this.path}`, { data: form })

  /**
   * Create single record
   *
   * @param {*} form
   * @returns
   */
  createOne = (form) => authApi.post(`${this.path}`, form)

  /**
   * Get multiple records
   *
   * @param {*} query
   * @returns
   */
  getMany = (query) =>
    clientApi.get(
      `${this.path}?` + qs.stringify(query, { arrayFormat: 'repeat' })
    )

  /**
   * Get single record
   * @param {*} id
   * @returns
   */
  getOne = (id) => clientApi.get(`${this.path}/${id}`)

  /**
   * Update multiple records
   * @param {*} form
   * @returns
   */
  updateMany = (form) => authApi.put(`${this.path}`, { data: form })

  /**
   * Update single record
   * @param {*} id
   * @param {*} form
   * @returns
   */
  updateOne = (id, form) => authApi.put(`${this.path}/${id}`, form)

  /**
   * Delete multiple records
   * @param {*} ids
   * @returns
   */
  deleteMany = (ids) =>
    authApi.request({
      url: `${this.path}`,
      method: 'delete',
      headers: {
        Authorization: 'Bearer ' + store.getters['auth/accessToken'],
      },
      data: ids,
    })

  /**
   * Delete single record
   * @param {*} id
   * @returns
   */
  deleteOne = (id) => authApi.delete(`${this.path}/${id}`)
}
