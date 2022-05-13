import React from 'react'
import {Text, StyleSheet, Dimensions, TouchableHighlight} from 'react-native'

export default props => {
    const styleButton = [style.Button]
    if(props.double) styleButton.push(style.ButtonDoube)
    if(props.triple) styleButton.push(style.ButtonTriple)
    if(props.operation) styleButton.push(style.OperationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    Button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,  
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888' 
    },
    OperationButton:{
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    ButtonDoube:{
        width: (Dimensions.get('window').width / 4) * 2,
    },
    ButtonTriple:{
        width: (Dimensions.get('window').width / 4) * 3,
    }
})