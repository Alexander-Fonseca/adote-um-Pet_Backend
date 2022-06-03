import { Button } from '@mui/material'
import {

  ListaStyled,
  Itemlista,
  Foto,
  Informacoes,
  Nome,
  Descricao
} from './Lista.style'
import { Pet } from '../../../data/@types/Pet'

interface ListaProps{
  pets: Pet[];
}

export default function Lista(props: ListaProps){
  return (
    <ListaStyled>
      {props.pets.map(pet =>(
        <Itemlista>
        <Foto src={pet.foto} alt={pet.nome}/>
          <Informacoes>
            <Nome>{pet.nome}</Nome>
            <Descricao>
              {pet.historia}
            </Descricao>
              <Button variant={'contained'}fullWidth>
                Adotar{pet.nome}
              </Button>
          </Informacoes>
      </Itemlista>
      ))}
    </ListaStyled>
  )
}