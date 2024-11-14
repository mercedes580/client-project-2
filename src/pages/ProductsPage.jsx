import { Link } from "react-router-dom"
import BakeryList from "../components/BakeryList/BakeryList"

const ProductsPage = () => {

    return (
        <div className="Products">

            <BakeryList />

            <div className="PosCreateButton">
                <Link to={"/productos/añadir"}><button className="CreateButton">
                    <i className="fas fa-plus icon-margin"></i>&nbsp;
                    Crear nuevo producto</button></Link>
            </div>

        </div>

    )
}

export default ProductsPage