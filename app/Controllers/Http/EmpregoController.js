'use strict'

const Profissao = use('App/Models/Profissao');

/**
 * Resourceful controller for interacting with profissaos
 */
class ProfissaoController {
  /**
   * Show a list of all profissaos.
   * GET profissaos
   */
  async index () {
    const profissao = await Profissao.all();

    return profissao;
  }

  /**
   * Create/save a new profissao.
   * POST profissaos
   */
  async store ({ auth, request, response }) {
    const { id } = auth.user
    const data = request.only([
      'profissao'
    ]);

    const profissao = await Profissao.create({ ...data, user_id: id });

    return profissao;
  }

  /**
   * Display a single profissao.
   * GET profissaos/:id
   */
  async show ({ params }) {
    const profissao = await Profissao.findOrFail(params.id)

    return profissao
  }

  /**
   * Update profissao details.
   * PUT or PATCH profissaos/:id
   */
  async update ({ params, request, response }) {
    const profissao = await Profissao.findOrFail(params.id)

    const data = request.only([
      'profissao'
    ])

    profissao.merge(data)

    await profissao.save()

    return profissao
  }

  /**
   * Delete a profissao with id.
   * DELETE profissaos/:id
   */
  async destroy ({ params, auth, response }) {
  }
}

module.exports = ProfissaoController
