import React, { useEffect, useState } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import axios from 'axios'

const ChartsAdmin = () => {

  const API_URL = import.meta.env.VITE_APP_API_URL

  const [data, setData] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    axios
      .get(`${API_URL}/shop`)
      .then((response) => {
        const rawData = response.data

        if (!rawData) {
          setError('No se encontraron datos.')
          setLoading(false)
          return
        }

        const aggregatedData = {}

        rawData.forEach((shop) => {
          shop.details.forEach((detail) => {
            const productId = detail.productId.toString()
            const quantity = parseInt(detail.quantity, 10)

            if (!aggregatedData[productId]) {
              aggregatedData[productId] = quantity
            } else {
              aggregatedData[productId] += quantity
            }
          })
        })

        const formattedData = Object.keys(aggregatedData).map((key) => ({
          product: `Product ${key}`,
          quantity: aggregatedData[key]
        }))

        setData(formattedData)
        setLoading(false)
      })
      .catch(err => console.log(err))

  }, [])

  if (loading) {
    return <p>Cargando datos...</p>
  }

  return (

    <div style={{ height: 350 }}>

      {data.length > 0 ? (

        <ResponsiveBar
          data={data}
          keys={['quantity']}
          indexBy="product"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={['#BFDAEE']}
          borderColor={{ from: '#FFCC00', modifiers: [['darker', 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Producto',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Cantidad vendida',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role="application"
          ariaLabel="Bar chart of most sold products"
          barAriaLabel={(e) => `${e.id}: ${e.formattedValue} en ${e.indexValue}`}
        />

      ) : (

        <p>No hay datos para mostrar.</p>

      )}

    </div>

  )

}

export default ChartsAdmin
