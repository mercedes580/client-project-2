import React, { useEffect, useState, useMemo } from 'react'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
import { ModuleRegistry } from '@ag-grid-community/core'
import { AgGridReact } from '@ag-grid-community/react'
import '@ag-grid-community/styles/ag-grid.css'
import '@ag-grid-community/styles/ag-theme-alpine.css'
import axios from 'axios'

ModuleRegistry.registerModules([ClientSideRowModelModule])

const ShopGrid = () => {

    const API_URL = import.meta.env.VITE_APP_API_URL

    const [rowData, setRowData] = useState([])

    const [loading, setLoading] = useState(true)

    const [columnDefs] = useState([
        // { field: 'id', headerName: 'ID Orden', filter: 'agTextColumnFilter' },
        { field: 'date', headerName: 'Fecha', filter: 'agDateColumnFilter', valueFormatter: ({ value }) => new Date(value).toLocaleString() },
        { field: 'total', headerName: 'Total ($)', filter: 'agNumberColumnFilter', valueFormatter: ({ value }) => `$${parseFloat(value).toFixed(2)}` },
        {
            field: 'status',
            headerName: 'Estado',
            valueFormatter: ({ value }) => (value === "1" ? 'Activo' : 'Inactivo'),
            filter: 'agTextColumnFilter'
        }
    ])

    const defaultColDef = useMemo(() => ({
        filter: true,
        floatingFilter: true,
        resizable: true,
    }), [])

    useEffect(() => {
        axios.get(`${API_URL}/shop/`)
            .then(response => {
                setRowData(response.data)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error)
                setLoading(false)
            })
    }, [])

    return (

        <div style={{ height: 350, width: '100%' }} className="ag-theme-alpine">

            {loading ? (

                <p>Cargando datos...</p>

            ) : (

                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs.map(col => ({ ...col, flex: 1 }))}
                    defaultColDef={{
                        ...defaultColDef,
                        resizable: true,
                    }}
                    pagination={true}
                    paginationPageSize={5}
                    domLayout="autoHeight"
                    className="w-100"
                />

            )}

        </div>
    )
}

export default ShopGrid