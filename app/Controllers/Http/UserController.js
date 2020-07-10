"use strict"

const User = use("App/Models/User")

class UserController {

  async index ({ request, response }) {
    try {
      const page = request.get().page || 1

      const users = await User.query().paginate(page)

      return users
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: 'There was a problem updating user, please try again later.'
      })
    }
  }

  async store({ request }) {
    const data = request.only([
      "ds_login",
      "ds_senha",
      "email",
      "tp_permissao",
      "status"
    ])

    const user = await User.create(data)

    return user
  }

  async show ({ params }) {
    const user = await User.findBy('co_seq_usuario', params.id)

    return user
  }

  async update ({ params, request, response }) {

    try {
      // find User
      const user = await User.findBy('co_seq_usuario', params.id)

      // hash and save new password
      // user.ds_senha = await Hash.make(request.input('newPassword'))
      // const senha = await Hash.make('02091993')
      // return senha




      // await user.save()

      return user

    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: 'There was a problem updating user, please try again later.'
      })
    }
  }

  async destroy ({ params, auth, response }) {
  }

}

module.exports = UserController
