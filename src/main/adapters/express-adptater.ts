/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Controller } from '@/presenters/api/protocols/controller'

import { Request, Response } from 'express'

export const routerAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      body: req.body,
      params: req.params
    }
    const httpResponse = await controller.handle(request)
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      return res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      return res.status(httpResponse.statusCode).json({
        error: httpResponse.body
      })
    }
  }
}
