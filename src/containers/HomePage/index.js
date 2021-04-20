import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader'
import ClothingAndAccessories from '../ProductListPage/ClothingAndAccessories'
import ALLProducts from '../ProductListPage/ProductsHome'

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  return(
    <Layout>
      <ALLProducts/>
    </Layout>
   )

 }

export default HomePage