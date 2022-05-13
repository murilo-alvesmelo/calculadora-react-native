import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

export default props => {
    return (
        <View style={style.Display}>
            <Text style={style.DisplayValue} numberOfLines={1}>
                {props.value}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display:{
        flex: 1,
        padding: 20, 
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    DisplayValue:{
        fontSize: 60,
    }
})