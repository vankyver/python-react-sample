import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';


const data = [
    ['Frozen yoghurt', 159, 6.0, 24, 4.0],
    ['Ice cream sandwich', 237, 9.0, 37, 4.3],
    ['Eclair', 262, 16.0, 24, 6.0],
    ['Cupcake', 305, 3.7, 67, 4.3],
    ['Gingerbread', 356, 16.0, 49, 3.9],
];

const BasicTable = (props) => {
    return <Paper>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell numeric>Calories</TableCell>
                    <TableCell numeric>Fat (g)</TableCell>
                    <TableCell numeric>Carbs (g)</TableCell>
                    <TableCell numeric>Protein (g)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((n, index) =>
                    <TableRow key={index}>
                        <TableCell>
                            {n[0]}
                        </TableCell>
                        <TableCell numeric>
                            {n[1]}
                        </TableCell>
                        <TableCell numeric>
                            {n[2]}
                        </TableCell>
                        <TableCell numeric>
                            {n[3]}
                        </TableCell>
                        <TableCell numeric>
                            {n[4]}
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </Paper>;
}

export default BasicTable;