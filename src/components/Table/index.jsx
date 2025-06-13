import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

// const rows = [
//     { id: 1, tipo: 'Vulnerabilidade', nomeRegistro: 'DoS', cvssECwss: '9.0', sistema: 'google.com', descricao: 'Denial of Service attack' },
//     { id: 2, tipo: 'Fraqueza', nomeRegistro: 'Weak Password', cvssECwss: '5.0', sistema: 'example.com', descricao: 'Weak password policy' }
// ];

const columns = [
    { field: 'tipo', headerName: 'Vulnerabilidade / Fraqueza', width: 200 },
    { field: 'nomeRegistro', headerName: 'Nome', width: 200 },
    { field: 'cvssECwss', headerName: 'CVSS/ CWSS', width: 300 },
    { field: 'sistema', headerName: 'Sistema / App', width: 300 },
    { field: 'descricao', headerName: 'Descrição', width: 200 },
    { field: 'createdAt', headerName: 'Criado em', width: 200 }
];

export default function RenderComponent() {
    const [rows, setRows] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/registro')
                const data = await res.json()
                // Adiciona o campo id se não vier com ele
                const rowsWithId = data.map((item, index) => ({
                    id: item.id || index + 1,
                    ...item
                }))
                setRows(rowsWithId)
            } catch (err) {
                console.error('Erro ao buscar registros:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                loading={loading}
                pageSize={5}
                rowsPerPageOptions={[5, 10]}
                localeText={{
                    toolbarQuickFilterPlaceholder: 'Search commodities',
                }}
                showToolbar
            />
        </div>
    )
}