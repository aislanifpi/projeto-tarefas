const express = require('express');
const app = express();
app.use(express.json());

const Tarefas = require('./tarefas');
const tarefas = new Tarefas();

app.post('/tarefas', (req, res) => {
  const { descricao } = req.body;
  tarefas.adicionar(descricao);
  res.status(201).send('Tarefa adicionada com sucesso!');
});

app.delete('/tarefas/:indice', (req, res) => {
  const indice = parseInt(req.params.indice);
  tarefas.remover(indice);
  res.send('Tarefa removida com sucesso!');
});

app.get('/tarefas', (req, res) => {
  const todasTarefas = tarefas.todas();
  res.json(todasTarefas);
});

app.patch('/tarefas/:indice', (req, res) => {
  const indice = parseInt(req.params.indice);
  tarefas.marcarConcluida(indice);
  res.send('Tarefa marcada como concluída!');
});

module.exports = app;
