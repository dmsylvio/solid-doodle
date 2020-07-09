'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpregoSchema extends Schema {
  up () {
    this.create('empregos', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .unique()
        .references('co_seq_usuario')
        .inTable('tb_usuario')
      table.string('nomeCompleto').notNullable()
      table.datetime('dataNascimento')
      table
        .integer('sexo_id')
        .unsigned()
        .references('id')
        .inTable('sexos')
      table
        .integer('estadoCivil_id')
        .unsigned()
        .references('id')
        .inTable('estado_civils')
      table.string('cpf').unique()
      table.boolean('carteiraMotorista').defaultTo(false)
      table.enum('categoriaMotorista', ['nenhuma', 'A', 'B', 'C', 'D', 'E']).defaultTo('nenhuma')
      table.string('possuiDeficiencia')
      table.string('qualDeficiencia')
      table.string('cep').notNullable()
      table.string('endereco').notNullable()
      table
        .integer('estado_id')
        .unsigned()
        .references('id')
        .inTable('estados')
      table.string('cidade').notNullable()
      table.string('telefone').notNullable()
      table.string('celular').notNullable()
      table
        .integer('escolaridade_id')
        .unsigned()
        .references('id')
        .inTable('escolaridades')
      table
        .integer('profissao_id')
        .unsigned()
        .references('id')
        .inTable('profissaos')
      table.string('pretensaoSalarial')
      table
        .integer('regiao_id')
        .unsigned()
        .references('id')
        .inTable('regiaos')
      table.string('outrasInformacoes')
      table.timestamps()
    })
  }

  down () {
    this.drop('empregos')
  }
}

module.exports = EmpregoSchema
