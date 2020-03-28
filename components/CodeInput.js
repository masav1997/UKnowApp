import React from "react";
import { View, Text, TextInput } from "react-native";

export default class CodeInput extends React.Component {
  render() {
    const { label, keyboardType, placeholder } = this.props;
    const inputStyle = {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 25
    };
    const borderInputStyle = {
      width: 50,
      height: 50,
      backgroundColor: "#060A10",
      borderRadius: 15,
      borderColor: "#060A10",
      marginRight: 10
    };
    const textInputStyle = {
      height: 23,
      width: 10,
      fontSize: 16,
      fontWeight: "500",
      color: "#FFF",
      marginLeft: 19,
      marginTop: 14
    };
    return (
      <View style={inputStyle}>
        <View style={borderInputStyle}>
          <TextInput
            style={textInputStyle}
            autoCompleteType="cc-number"
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
        <View style={borderInputStyle}>
          <TextInput
            style={textInputStyle}
            autoCompleteType="cc-number"
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
        <View style={borderInputStyle}>
          <TextInput
            style={textInputStyle}
            autoCompleteType="cc-number"
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
        <View style={borderInputStyle}>
          <TextInput
            style={textInputStyle}
            autoCompleteType="cc-number"
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
      </View>
    );
  }
}
