var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Leitura = require('../models').Leitura;

/* Recuperar as últimas N leituras */
router.get('/ultimas/:fkEquipamento', function(req, res, next) {
	
	// quantas são as últimas leituras que quer? 8 está bom?
	const limite_linhas = 6;

	var fkEquipamento = req.params.fkEquipamento;

	console.log(`Recuperando as ultimas ${limite_linhas} leituras`);
	
	const instrucaoSql = `select top ${limite_linhas} 
						consumoRam, 
					
						momento,
						FORMAT(momento,'HH:mm:ss') as momento_grafico
						from RecursoConsumo
						where fkEquipamento = ${fkEquipamento}
						order by id desc`;

	sequelize.query(instrucaoSql, {
		model: Leitura,
		mapToModel: true 
	  })
	  .then(resultado => {
			console.log(`Encontrados: ${resultado.length}`);
			res.json(resultado);
	  }).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
	  });
});


// tempo real (último valor de cada leitura)

router.get('/tempo-real', function (req, res, next) {
	
	console.log(`Recuperando a ultima leitura`);

	const instrucaoSql = `select top 6 consumoRam, consumoCpu, consumoDisco, FORMAT(momento,'HH:mm:ss') as momento_grafico, fkEquipamento from RecursoConsumo order by id desc`;

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});

router.get('/medias', function (req, res, next) {
	
	console.log(`Recuperando a ultima leitura`);

	const instrucaoSql = `select top 6 
	avg(consumoRam) as mediaRam,
	 avg(consumoCpu) as mediaCpu, 
	 avg(consumoDisco) as mediaDisco 
	 from RecursoConsumo 
	 WHERE id IN (SELECT top 6 id FROM RecursoConsumo ORDER BY id DESC);`;

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});



router.get('/tempo-real/:fkEquipamento', function(req, res, next) {
	console.log('Recuperando leituras de consumo');

	var fkEquipamento = req.body.fkEquipamento; // depois de .body, use o nome (name) do campo em seu formulário de login
	var fkEquipamento = req.params.fkEquipamento;

	let instrucaoSql = `select top 1 consumoRam, consumoCpu, consumoDisco, FORMAT(momento,'HH:mm:ss') as momento_grafico, fkEquipamento from RecursoConsumo where fkEquipamento = ${fkEquipamento} order by id desc`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
});


  
module.exports = router;
