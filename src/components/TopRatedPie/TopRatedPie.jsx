import React, { useEffect, useState } from 'react'
import { ResponsivePie } from '@nivo/pie'
import axios from 'axios'

const TopRatedPie = () => {

    const API_URL = import.meta.env.VITE_APP_API_URL

    const [chartData, setChartData] = useState([])

    const [products, setProducts] = useState([])

    const [comments, setComments] = useState([])

    useEffect(() => {

        axios
            .get(`${API_URL}/products`)
            .then(response => {
                setProducts(response.data)
            })
            .catch(err => console.log(err))

        axios
            .get(`${API_URL}/comments`)
            .then(response => {
                setComments(response.data)
            })
            .catch(err => console.log(err))

    }, [])

    useEffect(() => {

        if (comments.length === 0 || products.length === 0) return

        const productRatings = {}

        comments.forEach((comment) => {
            const productId = comment.productId
            const rating = parseFloat(comment.rating)

            if (!productRatings[productId]) {
                productRatings[productId] = { totalRating: 0, count: 0 }
            }

            productRatings[productId].totalRating += rating
            productRatings[productId].count += 1
        })

        const avgRatings = Object.keys(productRatings).map((productId) => {
            const { totalRating, count } = productRatings[productId]
            const avgRating = totalRating / count

            return {
                productId,
                averageRating: avgRating,
                percentage: (avgRating / 10) * 100
            }

        })

        const topRatedProducts = avgRatings
            .sort((a, b) => b.averageRating - a.averageRating)
            .slice(0, 5)

        const chartFormattedData = topRatedProducts.map((product) => {
            const productInfo = products.find((prod) => prod.id === parseInt(product.productId))

            return {
                id: productInfo ? productInfo.id.toString() : 'Producto desconocido',
                label: productInfo ? productInfo.title : 'Producto desconocido',
                value: !isNaN(product.percentage) ? Math.round(product.percentage) : 0
            }
        })

        const totalValue = chartFormattedData.reduce((acc, item) => acc + item.value, 0)

        if (totalValue === 0) {
            setChartData([])
            return
        }

        const normalizedChartData = chartFormattedData.map(item => {
            const percentage = totalValue !== 0 ? (item.value / totalValue) * 100 : 0
            return {
                id: item.label,
                label: item.label,
                value: Math.round(percentage),
            }
        })


        setChartData(normalizedChartData)

    }, [comments, products])

    return (

        <div style={{ height: 350, width: '100%' }}>

            <ResponsivePie
                data={chartData}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ scheme: 'blues' }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                slicesLabelsSkipAngle={10}
                theme={{
                    labels: {
                        text: {
                            fontSize: 12,
                            fontWeight: 600,
                        },
                    },
                }}
            />

        </div>

    )

}

export default TopRatedPie