import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

export default class Button extends React.Component {
  render() {
    const { width } = Dimensions.get("window");
    const { buttonTitle } = this.props;
    const buttonStyle = {
      backgroundColor: "#FF3358",
      borderRadius: 15,
      width: width - 30,
      height: 50,
      alignSelf: "center",
      marginBottom: 25,
    };
    const touchableStyle = {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
    const textStyle = {
      color: "#FFFFFF",
      lineHeight: 16,
      fontWeight: "bold"
    };
    return (
      <View style={buttonStyle}>
        <TouchableOpacity style={touchableStyle}>
          <Text style={textStyle}>{buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}