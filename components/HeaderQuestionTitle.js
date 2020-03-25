import React from "react";
import { Text } from "react-native";

export default class HeaderQuestionTitle extends React.Component {
  render() {
    const { title } = this.props;
    const titleText = {
      fontStyle: "normal",
      fontSize: 23,
      top: 22,
      fontWeight: "500",
      color: "#FEAC5E",
      textAlign: "center"
    };
    return <Text style={titleText}>{title}</Text>;
  }
}
