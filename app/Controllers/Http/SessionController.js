'use strict'

class SessionController {
  async create ({ request, response, auth }) {
    const { ds_login, ds_senha } = request.all()

    const token  = await auth.attempt(ds_login, ds_senha)

    return token
  }
}

module.exports = SessionController
