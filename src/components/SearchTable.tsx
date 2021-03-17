import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  withStyles, Theme, createStyles, makeStyles,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ColorButton from './ColorButton';
import { InfoRequestContext } from '../providers/infoRequest';

const StyledTableCell = withStyles((theme: Theme) => createStyles({
  head: {
    backgroundColor: '#692172',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme: Theme) => createStyles({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme: Theme) => createStyles({
  purple: {

  },
  table: {
    minWidth: 700,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function SearchTable(
  props: { headers: Array<string>, values: any },
):JSX.Element {
  const classes = useStyles();

  const { headers, values } = props;

  const history = useHistory();

  const { setInfoRequest }:any = React.useContext(InfoRequestContext);

  return (
    <TableContainer component={Paper} key="2">
      <Table className={classes.table} aria-label="customized table" key="2">
        <TableHead>
          <TableRow>
            {headers.map((header: string) => (
              <StyledTableCell align="center">{header}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map((row:any) => {
            const dataWithoutTime = row.dtNasc.split('T');
            const dataSplitedByYearMonthDay = dataWithoutTime[0].split('-');
            const dataConventionalFormat = `${dataSplitedByYearMonthDay[2]}/${dataSplitedByYearMonthDay[1]}/${dataSplitedByYearMonthDay[0]}`;

            return (
              <StyledTableRow>
                <StyledTableCell align="center">{row.ciCidadao}</StyledTableCell>
                <StyledTableCell align="center">{row.nmCidadao}</StyledTableCell>
                <StyledTableCell align="center">{row.nmMae}</StyledTableCell>
                <StyledTableCell align="center">{dataConventionalFormat}</StyledTableCell>
                <StyledTableCell align="center">{row.nrCpf}</StyledTableCell>
                <StyledTableCell align="center">{row.cdNis}</StyledTableCell>
                <StyledTableCell align="center">
                  <ColorButton
                    key={row.codigoCidadao + 2}
                    variant="contained"
                    color="primary"
                    className={classes.margin}
                    onClick={() => {
                      setInfoRequest({
                        ciCidadao: row.ciCidadao,
                        nmCidadao: row.nmCidadao,
                        nmMae: row.nmMae,
                        dtNasc: row.dtNasc,
                        cdNis: row.cdNis,
                        nrCpf: row.nrCpf,
                        ciTipoSexo: row.ciTipoSexo,
                        ciRacaObservada: row.ciRacaObservada,
                        ciPaisOrigem: row.ciPaisOrigem,
                        ciSitCidadao: row.ciSitCidadao,
                      });

                      history.push('/details');
                    }}
                  >
                    DETALHAR

                  </ColorButton>
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
