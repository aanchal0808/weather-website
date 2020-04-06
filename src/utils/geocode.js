const request= require('request')


const geocode=(address ,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYWFuY2hhbDA4MDgiLCJhIjoiY2s4ZzQ0MmZ3MDd2bjNncGJseHVxaTUyMCJ9.uJCEFBCw0rYkj9ja_BsUHw&limit=1'
    request({url , json :true},(error, {body})=>{
       if(error){
          callback('unable to connect to srvice', undefined)
       }else if (body.features.length===0){
          callback('unable to find that location', undefined)
       }else{
          callback(undefined,{
              latitude:body.features[0].center[1],
              longitude:body.features[0].center[0],
              location:body.features[0].place_name
          })
       }
    })
    }
    module.exports=geocode