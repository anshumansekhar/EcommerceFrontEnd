import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../actions";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import Card from "../../../components/UI/Card";
import {generatePublicUrl} from "../../../urlConfig";


/**
* @author
* @function ALLProducts
**/

const ALLProducts = (props) => {
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);
    return (
        <div style={{ padding: "10px" }}>
      <Card
        style={{
          boxSizing: "border-box",
          padding: "10px",
          display: "flex",
          flexWrap:"wrap"
        }}
      >
        {product.products.map((product) => (

          <div className="caContainer">
            <Link
              className="caImgContainer"
              to={`/${product.slug}/${product._id}/p`} >
              <img src={generatePublicUrl(product.productPictures[0].img)} style={{minHeight: "300px"}} alt="product"/>
            </Link>
            <div>
              <div className="caProductName">{product.name}</div>
              <div className="caProductPrice">
                <BiRupee />
                {product.price}
              </div>
            </div>
          </div>
        
      ))}
      </Card>

    </div>
    )

}

export default ALLProducts