import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from '../Slice/slice';
import { RootState } from '../Store/store';
import { Button, TextField, Typography, Grid, Paper } from '@mui/material';
import { Transaction } from '../Slice/types'; 

const Main = () => {
  const dispatch = useDispatch();
  const { transactions, balance } = useSelector((state: RootState) => state.transactions);

  const [type, setType] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [amount, setAmount] = React.useState<string>('');

  const handleAddTransaction = () => {
    dispatch(addTransaction({ type, description, amount: parseFloat(amount) }));
    setType('');
    setDescription('');
    setAmount('');
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={10} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography variant="h5" gutterBottom align={'center'}>
            Controle Financeiro
          </Typography>
          <TextField
            label="Tipo"
            variant="outlined"
            fullWidth
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{ marginBottom: 10 }}
          />
          <TextField
            label="Descrição"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ marginBottom: 10 }}
          />
          <TextField
            label="Valor"
            variant="outlined"
            fullWidth
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ marginBottom: 10 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddTransaction}
            disabled={!type || !description || !amount}
            fullWidth
            style={{ marginBottom: 10 }}
          >
            Adicionar Transação
          </Button>
          <Typography variant="h6" gutterBottom>
            Transações
          </Typography>
          {transactions.map((transaction: Transaction, index: number) => (
            <div key={index}>
              <Typography>
                {transaction.type}: {transaction.description}  
                {transaction.type === 'saída' ? '-' : ''} R$ {transaction.amount}
              </Typography>
            </div>
          ))}
          <Typography variant="h6" gutterBottom>
            Saldo: R$ {balance}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Main;
