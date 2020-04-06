const request= require('request')


const forecast=(latitude, longitude  , callback)=>{
const url='https://api.darksky.net/forecast/094c7966ea6f4c1de807cd7647ad2a4f/'+latitude+','+longitude

request({url, json:true},(error,{body})=>{
    if(error){
        callback('unable to connect to service ', undefined)

    }
    else if(body.error){
        callback('unable to find location',undefined)

    }else{
        callback(undefined , body.daily.data[0].summary +' it is currently ' + body.currently.temperature + ' degrees out .There is '+  body.currently.precipProbability + ' chance of rain' )

    }

})

}

module.exports=forecast