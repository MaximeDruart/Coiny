import React, { useContext, useEffect } from 'react';
import './Category.scss'
import Storefiltercontainer from "./CategoryComp/Storefiltercontainer"
import { UIDataContext } from "../contexts/UIDataContext"
import { render } from 'node-sass';



const Category=(props)=>{
const typeOfBusiness=props.location.state.type 
    const { getBusinessData, businessQueryResults } = useContext(UIDataContext)

    useEffect(() => {
       getBusinessData(null)
      }, [])




const renderDivFilter = ()=>{
    return(
    businessQueryResults.map((business,i)=>{
       if( business.type == typeOfBusiness)  {
         <Storefiltercontainer key={i} business={business}></Storefiltercontainer>}
    }))
}

    return(
<div className='containCategory'>{businessQueryResults ? renderDivFilter() : ""}</div>
    )
}



export default Category









