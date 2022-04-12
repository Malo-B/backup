 
import {createContext,useEffect, useState} from "react";
import sendMail from "../fonctions/mail"

var mqtt=require('mqtt/dist/mqtt');
const connectUrl = 'mqtt://192.168.50.129:9001'
var client = mqtt.connect(connectUrl)

client.on("connect",function(){	
    console.log("connected");
    })
client.on('error', (error) => {
    console.log('Connection failed:', error)
})


export const TempContext= createContext()

export function TempContextProvider(props) {

    const [CurrentTemp1, setCurrentTemp1] = useState({});
    const [CurrentTemp2, setCurrentTemp2] = useState({});
    const [CurrentTemp3, setCurrentTemp3] = useState({});
    const [CurrentTemp4, setCurrentTemp4] = useState({});

    var msg_sensor_1={};
    //var msg_sensor_2={};
    //var msg_sensor_3={};

    var topic1 = "zigbee2mqtt/+";
    //var topic2 = "zigbee2mqtt/temp2";
    //var topic3 = "zigbee2mqtt/temp3";

    client.subscribe(topic1);
    //client.subscribe(topic2);
    //client.subscribe(topic3);

    var compteur=0;

    useEffect (() => {
        client.on('message',function(topic1, message1){
            msg_sensor_1=JSON.parse(message1)
            if(topic1=="zigbee2mqtt/temp1"){
                setCurrentTemp1(msg_sensor_1);


            }
            else if(topic1=="zigbee2mqtt/temp2"){

                setCurrentTemp2(msg_sensor_1);

            }
            else if(topic1=="zigbee2mqtt/temp3"){
                setCurrentTemp3(msg_sensor_1);

                
            }
            else if ( topic1=="zigbee2mqtt/water_sensor"){
                if(msg_sensor_1.water_leak==true){
                    msg_sensor_1.water_leak ="true"
                    compteur=compteur+1;
                    if (compteur==1){
                        console.log("test")
                        sendMail("Alerte ! Salle des serveurs, fuite d'eau detectée","M. Bizouarn","kenan.bizouarn@isen-ouest.yncrea.fr")
                        alert("Fuite d'eau détectée !")
                    }
                }
                else{
                    msg_sensor_1.water_leak="false"
                }
            }

                setCurrentTemp4(msg_sensor_1);

            }

        );
    })


    return (
        <TempContext.Provider value = {{CurrentTemp1, CurrentTemp2, CurrentTemp3, CurrentTemp4}}>
            {props.children}
        </TempContext.Provider>
    )
}