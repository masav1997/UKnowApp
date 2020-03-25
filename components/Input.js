import React from "react";
import { View, Text, TextInput } from "react-native";

export default class Input extends React.Component {
  render() {
    const { label, keyboardType, placeholder, ...props } = this.props;
    const inputStyle = {
      paddingTop: 20,
      backgroundColor: "#060A10",
      borderRadius: 15,
      height: 50,
      marginBottom: 20
    };
    const textInputStyle = {
      height: 26,
      fontSize: 14,
      color: "#FFF",
      marginLeft: 15
    };
    const labelStyle = {
      position: "absolute",
      left: 0,
      top: 5,
      fontSize: 12,
      color: "#898F97",
      marginLeft: 15
    };
    return (
      <View style={inputStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          {...props}
          style={textInputStyle}
          keyboardType={keyboardType}
        />
      </View>
    );
  }
}
