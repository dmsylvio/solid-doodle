'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegiaoSchema extends Schema {
  up () {
    this.create('regiaos', (table) => {
      table.increments()
      table.string('regiao').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('regiaos')
  }
}

module.exports = RegiaoSchema
