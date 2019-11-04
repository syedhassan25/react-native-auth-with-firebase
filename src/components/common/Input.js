import React from 'react';
import {View, Text,TextInput} from 'react-native';

const Input = ({ placeholder, label, onChangeText, value, secureTextEntry }) =>{

    const  {inputStyle, labelStyles, containerStyle} = Styles;

    return(
        <View style={containerStyle}>
        <Text style={labelStyles}>{ label }</Text>
        <TextInput 
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        onChangeText={onChangeText}
        value={value}
        style={inputStyle}
        />
        </View>
    );
};

const Styles  = {
    inputStyle: {
        width: 200,
        height: 44,
        paddingLeft: 5,
        paddingRight:5,
        borderColor: 'black',
        marginBottom: 10,
        flex: 2,
        fontSize: 23
    },
    labelStyles: {
        fontSize:18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        align: 'center'

    }
}

export { Input };