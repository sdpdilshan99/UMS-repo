import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Typography } from '@mui/material';

const Userstable = ({rows, selectedUser, deleteUser}) => {
    
    return(
        <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', borderRadius: 2, boxShadow: 4, overflow: 'hidden' }}>
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableCell sx={{ fontWeight: '600', color: '#333', padding: '12px 16px', borderBottom: '2px solid #ddd' }}>ID</TableCell>
                        <TableCell sx={{ fontWeight: '600', color: '#333', padding: '12px 16px', borderBottom: '2px solid #ddd' }}>Name</TableCell>
                        <TableCell sx={{ fontWeight: '600', color: '#333', padding: '12px 16px', borderBottom: '2px solid #ddd' }}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.length > 0 ? (
                        rows.map(row => (
                            <TableRow key={row.id} sx={{ '&:nth-of-type(even)': { backgroundColor: '#fafafa' }, '&:hover': { backgroundColor: '#f0f0f0' } }}>
                                <TableCell component="th" scope="row" sx={{ padding: '12px 16px' }}>{row.id}</TableCell>
                                <TableCell sx={{ padding: '12px 16px' }}>{row.name}</TableCell>
                                <TableCell sx={{ padding: '12px 16px' }}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        sx={{
                                            margin: '0 5px',
                                            borderRadius: 1,
                                            '&:hover': {
                                                borderColor: '#1976d2',
                                                backgroundColor: '#e3f2fd',
                                            },
                                        }}
                                        onClick={() => selectedUser({ id: row.id, name: row.name })}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        sx={{
                                            margin: '0 5px',
                                            borderRadius: 1,
                                            '&:hover': {
                                                backgroundColor: '#d32f2f',
                                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                                            },
                                        }}
                                        onClick={() => deleteUser({ id: row.id })}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={3} sx={{ textAlign: 'center', padding: '16px', color: '#888' }}>
                                <Typography variant="body2">No Data Available</Typography>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Userstable;