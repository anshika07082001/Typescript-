import React from 'react'
import {prodData,customerData,settingsData} from '../type'

const UseCheck = (products:prodData[],customerData:customerData[],settings:settingsData|null) => {
    
    let x=products,v=customerData
        if(settings!==null){
            products.map((items)=>{
                if(items.price=='' || items.price=='0'){
                    items.price=settings.defPrice
                }
                if(items.stock==='' || items.stock==='0'){
                    items.stock=settings.defStock
                }
            })
            if(customerData.length>0){
                customerData.map((item)=>{
                    if(item.zip=='' || item.zip=='0'){
                        item.zip=settings.defZip
                    }
                })            
            }
            x=products
            v=customerData
        }
    return {x,v}
}

export default UseCheck