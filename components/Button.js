import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

export default class Button extends React.Component {
  render() {
    const { width } = Dimensions.get("window");
    const { buttonTitle, onPress } = this.props;
    const buttonStyle = {
      backgroundColor: "#FF3358",
      borderRadius: 15,
      marginLeft: 15, marginRight:15,
      width: '100%', 
      height: 50,
      alignSelf: "center",
      marginBottom: 25,
      shadowColor: "rgba(255, 51, 88, 0.6)",
      shadowOpacity: 0.8,
      shadowRadius: 15,
      shadowOffset: {
        height: -1,
        width: 0
      }
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
        <TouchableOpacity style={touchableStyle} onPress={onPress}>
          <Text style={textStyle}>{buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
