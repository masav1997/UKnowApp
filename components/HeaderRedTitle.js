import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default class HeaderRedTitle extends React.Component {
  render() {
    const { title } = this.props;
    const clearText = {
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 20,
        top: 25,
        fontWeight: "500",
        color: "#FF3358"
    };
    return (
      <TouchableOpacity>
        <Text style={clearText}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
