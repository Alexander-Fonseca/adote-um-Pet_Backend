import { useState } from 'react';

export function useCadastro(){
    const [nome, setNome] = useState(''),
        [historia, setHistoria] = useState(''),
        [foto, setFoto] = useState(''),
        [mensagem, setMensagem] = useState('');

    function cadastrar(){

    }
    
    function validarFormulario(){
        return nome.length > 2 && historia.length > 20 && foto.length > 5;
    }


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