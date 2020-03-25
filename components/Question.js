import React from "react";
import { View, Text } from "react-native";

export default class QuestionBlock extends React.Component {
  render() {
    const { question } = this.props;
    const textStyle = {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "#FFF",
      marginBottom: 60,
      marginLeft: 15,
      marginRight: 15,
      marginTop: "10%"
    };
    return (
      <View>
        <Text style={textStyle}>{question}</Text>
      </View>
    );
  }
}
