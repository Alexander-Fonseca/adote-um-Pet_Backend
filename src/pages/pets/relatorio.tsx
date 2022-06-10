import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { NextPage } from "next";
import Titulo from "../../ui/components/Titulo/Titulo";

const Relatorio: NextPage = () => {
  return (
    <>
      <Titulo
        titulo={'Relatório de Adoção'}
        subtitulo={'Veja a lista de pets adotados'}
      />
      <TableContainer component={Paper}
      >
          <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Pet</TableCell>
                  <TableCell>E-mail</TableCell>
                  <TableCell align={'right'} >Valor Mensal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>gfgf</TableCell>
                  <TableCell>gfgf@fdfd.com</TableCell>
                  <TableCell align={'right'}>50</TableCell>
                </TableRow>
              </TableBody>
          </Table>
      </TableContainer>
    </>
  )
}

export default Relatorio;