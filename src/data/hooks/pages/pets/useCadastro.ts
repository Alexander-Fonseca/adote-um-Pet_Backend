import { useState } from 'react';

export function useCadastro(){
    const [nome, setNome] = useState(''),
        [historia, setHistoria] = useState(''),
        [foto, setFoto] = useState(''),
        [mensagem, setMensagem] = useState('');

    function cadastrar(){

    }
    
    function validarFormulario(){}


    function limpar(){}

    return {
        nome,
        historia,
        foto,
        setNome,
        setHistoria,
        setFoto,
        cadastrar,
        mensagem,
        setMensagem
    }
}