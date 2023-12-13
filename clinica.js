const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
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
        telefone: '7443-8678',
        ano_nascimento: 2005,
        endereco: 'Rua dos Sonhos'
    });
    console.log(marta.nome);

    const bela = new Paciente({
        nome: 'Bela',
        telefone: '5555-8798',
        ano_nascimento: 1995,
        endereco: 'Rua Meia Noite'
    });
    console.log(bela.nome);

    const antonio = new Paciente({
        nome: 'Antonio',
        telefone: '7777-8888',
        ano_nascimento: 2001,
        endereco: 'Avenida Rui Belafar'
    });
    console.log(antonio.nome);

    const vitoria = new Paciente({
        nome: 'Vitória',
        telefone: '1457-8666',
        ano_nascimento: 2003,
        endereco: 'Avenida Petrônio Portella'
    });
    console.log(vitoria.nome);

    const antony = new Paciente({
        nome: 'Antony',
        telefone: '7577-8889',
        ano_nascimento: 2002,
        endereco: 'Rua Das Torres'
    });
    console.log(antony.nome);





    //Adicionando paciente
    await marta.save();
    await bela.save();
    await antonio.save();
    await vitoria.save();
    await antony.save();
    //Excluindo paciente
    //await Paciente.deleteOne({nome: 'bela'});

    //Atualizando paciente
    //await Paciente.updateOne({endereco: 'Rua Das Torres'});

    //Listando paciente
    const pacientes = await (mongoose.model('paciente',
        PacienteSchema)).find();
    console.log(pacientes);
}