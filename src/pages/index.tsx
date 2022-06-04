import type { NextPage } from 'next'
import Lista from '../ui/components/Lista/Lista'
import Titulo from '../ui/components/Titulo/Titulo';
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material';
import { useIndex } from '../data/hooks/pages/useindex';

const Home: NextPage = () => {
  const {
    listaPets,
    petSelecionado,
    setPetSelecionado,
    email,
    setEmail,
    valor,
    setValor
    
  } = useIndex();

  return (
    <div>
      <Titulo 
        titulo="" 
        subtitulo={
            <span>
              Com um pequeno valor mensal, você <br />
              pode <strong>adorar um pet virtualmente</strong>
            </span>
        } 
      />
      <Lista 
        pets={listaPets}
        onSelect={(pet) => setPetSelecionado(pet)}
      />

      <Dialog 
      open={petSelecionado !== null}
      fullWidth
      PaperProps={{ sx:{ padding: 5 }}}
      onClose={() => setPetSelecionado(null)}
      > 
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
            label={'E-mail'}
            type={'email'}
            fullWidth
           />
          </Grid>

          <Grid item xs={12}>
            <TextField
            label={'Quantia por mês'}
            type={'number'}
            fullWidth
            />
          </Grid>  
        </Grid>
          <DialogActions sx={{marginTop: 5}}>
            <Button 
            color={'secondary'}
            onClick={() => setPetSelecionado(null)}
            >
              Cancelar
            </Button>
            <Button
            variant={'contained'}>
              Confirmar adoção
            </Button>
          </DialogActions>
      </Dialog>

      <Snackbar 
        open={false}
        message={'lecolecoleco'}
      />
    </div>
  )
}

export default Home
