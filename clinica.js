const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main(){
await mongoose.connect('mongodb://localhost:27017/clinica');

const PacienteSchema = new mongoose.Schema({
nome: String,
telefone: String,
ano_nascimento: Number,
endereco: String
});
const Paciente = mongoose.model('paciente',
PacienteSchema);

const marta = new Paciente({
nome: 'Marta',
telefone: '7777-8888',
ano_nascimento: 2005,
endereco: 'Rua dos Sonhos'
});
console.log(marta.nome);

//Adicionando paciente
await marta.save();

//Excluindo paciente
//await marta.deleteOne({nome: 'maria'});

//Atualizando paciente
//await marta.updateOne({endereco: 'Rua Viação 7'});

//Listando paciente
const pacientes = await (mongoose.model('paciente',
PacienteSchema)).find();
console.log(pacientes);
}