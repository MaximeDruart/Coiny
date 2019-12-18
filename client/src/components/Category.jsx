import React from 'react';
import './Category.scss'
import { UIDataContext } from "../contexts/UIDataContext"



const Category=(props)=>{

    const { getBusinessData, businessQueryResults } = useContext(UIDataContext)


    useEffect(() => {
      donney = getBusinessData(null)
        console.log(businessQueryResults)
      }, [])
    




    return(
 <div className="storeCategoryContainer">
     <div className="categoryTop"></div>
     <div className="storeListContainer">
         <div className="storeList">



         </div>
     </div>
 </div>
    )
}



export default Category









