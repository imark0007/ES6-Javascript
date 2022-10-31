import {countryList} from "./countries.js";

countryList.map((item,i)=>{
    let Details=`My country name is ${item.name}`
    console.log(Details)
})