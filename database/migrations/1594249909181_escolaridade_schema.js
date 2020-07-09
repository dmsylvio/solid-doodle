'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EscolaridadeSchema extends Schema {
  up () {
    this.create('escolaridades', (table) => {
      table.increments()
      table.string('escolaridade').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('escolaridades')
  }
}

module.exports = EscolaridadeSchema
