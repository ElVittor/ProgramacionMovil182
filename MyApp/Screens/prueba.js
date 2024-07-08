import {Entypo, FontAwesome5} from "@expo/vector-icons"
import React, { useState } from 'react';
import {view, Text} from 'react-native';

const {width,height} = dimensions.get("wundow");

export default function Prueba()
{
const[modal,setModal] = useState(false);
    return (
        <view style={{
            flex: 1,
            justifyContent:"center",
            alignItems:"center",
        }}>
            {/* Estructura básica del modal */}
            <modal visible={modal} animationType="slide" >
                <view> style={{
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:"rgba(0,0,0,0.3)",
                }}

                <TouchableOpacity
                onPress={() => setModal(true)}
                style={{
                    width: width*0.8,
                    height: height*0.8,
                    backgroundColor:"#0088f0",
                    borderRadius: width * 0.1,
                    justifyContent: "center",
                    alignItems:"center",

                }}
                >
                    <FontAwesome5
                    name="bacon"
                    size={width*0.1}
                    color="#fff"
                    />

                <Text
                style={{
                    fontSize:width*0.8,
                    fontWeight:"700",
                    color:"#fff",
                }}
                >Abrir Modal</Text>

                </TouchableOpacity>
                </view>
            </modal>
            <Text>Prueba</Text>
        </view>
    )
}