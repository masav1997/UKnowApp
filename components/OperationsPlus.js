import React from "react";
import { View, Text, Image } from "react-native";

export default class OperationPlus extends React.Component {
  render() {
    const { data, name, sum } = this.props;
    const viewStyle = {
      flexDirection: "row",
      marginBottom: 20
    };
    const textDataStyle = {
      fontWeight: "700",
      fontSize: 13,
      lineHeight: 16,
      color: "#FFF",
      textAlign: "left"
    };
    const textNameStyle = {
      fontSize: 13,
      fontWeight: "600",
      lineHeight: 16,
      color: "#898F97",
      textAlign: "center"
    };
    const textSumStyle = {
      fontSize: 13,
      fontWeight: "700",
      lineHeight: 16,
      color: "#A1D3A2",
      textAlign: "right"
    };
    return (
      <View style={viewStyle}>
        <View style={{ flex: 1, height: "auto" }}>
          <Text style={textDataStyle}>{data}</Text>
        </View>
        <View style={{ flex: 1, height: "auto" }}>
          <Text style={textNameStyle}>{name}</Text>
        </View>
        <View style={{ flex: 1, height: "auto" }}>
          <Text style={textSumStyle}>{sum}</Text>
        </View>
      </View>
    );
  }
}
