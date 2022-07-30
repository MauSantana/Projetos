'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
	let Leitura = sequelize.define('Leitura', {
		id: {
			field: 'id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		fkEquipamento: {
			field: 'fkEquipamento',
			type: DataTypes.INTEGER,
			autoIncrement: false
		},
		consumoRam: {
			field: 'consumoRam',
			type: DataTypes.FLOAT,
			allowNull: false
		},
		consumoCpu: {
			field: 'consumoCpu',
			type: DataTypes.FLOAT,
			allowNull: false
		},
		consumoDisco: {
			field: 'consumoDisco',
			type: DataTypes.FLOAT,
			allowNull: false
		},
		momento: {
			field: 'momento',
			type: DataTypes.DATE, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		momento_grafico: {
			type: DataTypes.VIRTUAL, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		},
		mediaRam: {
			type: DataTypes.VIRTUAL,
			allowNull: true
		},
		mediaDisco: {
			type: DataTypes.VIRTUAL,
			allowNull: true
		},
		mediaDisco: {
			type: DataTypes.VIRTUAL,
			allowNull: true
		}
	},
		{
			tableName: 'RecursoConsumo',
			freezeTableName: true,
			underscored: true,
			timestamps: false,
		});

	return Leitura;
};
