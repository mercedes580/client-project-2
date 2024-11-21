import React, { useEffect, useState, useMemo } from 'react'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
import { ModuleRegistry } from '@ag-grid-community/core'
import { AgGridReact } from '@ag-grid-community/react'
import '@ag-grid-community/styles/ag-grid.css'
import '@ag-grid-community/styles/ag-theme-alpine.css'
import axios from 'axios'

ModuleRegistry.registerModules([ClientSideRowModelModule])

const ProductGrid = () => {

  const API_URL = "http://localhost:5005"

  const [rowData, setRowData] = useState([])

  const [loading, setLoading] = useState(true)

  const [columnDefs] = useState([
    { field: 'title', headerName: 'Título', filter: 'agTextColumnFilter', editable: true },
    // { field: 'description', headerkName: 'Descripción', filter: 'agTextColumnFilter', editable: true },
    { field: 'price', headerName: 'Precio', filter: 'agNumberColumnFilter', editable: true },
    { field: 'stock', headerName: 'Stock', filter: 'agNumberColumnFilter', editable: true },
    {
      field: 'gluten',
      headerName: '¿Contiene Gluten?',
      cellRenderer: ({ value }) => (value ? 'Sí' : 'No')
    }
  ])

  const defaultColDef = useMemo(() => {
    return {
      filter: true,
      floatingFilter: true,
      resizable: true
    }
  }, [])

  useEffect(() => {

    axios
      .get(`${API_URL}/products`)
      .then(response => {
        setRowData(response.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
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
            filter: true,
            floatingFilter: true,
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

export default ProductGrid