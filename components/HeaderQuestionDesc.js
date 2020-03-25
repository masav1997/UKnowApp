import React from "react";
import { Text, View } from "react-native";

export default class HeaderQuestionDesc extends React.Component {
  render() {
    const { question } = this.props;
    const titleText = {
      fontStyle: "normal",
      fontSize: 13,
      lineHeight: 16,
      top: 22,
      fontWeight: "500",
      color: "#898F97",
      textAlign: "center"
    };
    const descText = {
      fontStyle: "normal",
      fontSize: 12,
      top: 22,
      fontWeight: "700",
      color: "#FFF",
      textAlign: "right"
    };
    return (
      <View>
        <Text style={titleText}>Вопрос</Text>
        <Text style={descText}>{question}</Text>
      </View>
    );
  }
}
