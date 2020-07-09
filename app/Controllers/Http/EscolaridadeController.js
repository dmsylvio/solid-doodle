'use strict'

const Escolaridade = use("App/Models/Escolaridade")

/**
 * Resourceful controller for interacting with escolaridades
 */
class EscolaridadeController {
   /**
   * Show a list of all escolaridades.
   * GET escolaridades
   */
  async index () {
    const escolaridade = await Escolaridade.all();

    return escolaridade;
  }

  /**
   * Create/save a new escolaridade.
   * POST escolaridades
   */
  async store ({ request, response }) {

    const data = request.only(['escolaridade'])

    const escolaridade = await Escolaridade.create(data);

    return escolaridade;
  }

  /**
   * Display a single escolaridade.
   * GET escolaridades/:id
   */
  async show ({ params }) {
    const escolaridade = await Escolaridade.findOrFail(params.id)

    return escolaridade
  }

  /**
   * Update escolaridade details.
   * PUT or PATCH escolaridades/:id
   */
  async update ({ params, request, response }) {
    const escolaridade = await Escolaridade.findOrFail(params.id)

    const data = request.only(['escolaridade'])

    escolaridade.merge(data)

    await escolaridade.save()

    return escolaridade
  }

   /**
   * Delete a escolaridade with id.
   * DELETE escolaridades/:id
   */
  async destroy ({ params, auth, response }) {
  }

}

module.exports = EscolaridadeController
