import React from "react";
import { View, Text, Image } from "react-native";

export default class ResultsBlock extends React.Component {
  render() {
    const { id, name, points, time } = this.props;
    const viewStyle = {
      flexDirection: "row"
    };
    const textNumberStyle = {
      fontWeight: "bold",
      fontSize: 20,
      color: "#898F97",
      textAlign: "left",
      top: 12
    };
    const textPointsStyle = {
      fontSize: 13,
      fontWeight: "bold",
      lineHeight: 16,
      color: "#FEAC5E",
      textAlign: "right",
      top: 8,
      marginBottom: 10
    };
    const textTimeStyle = {
      fontWeight: "500",
      lineHeight: 13,
      fontSize: 11,
      color: "#FEAC5E",
      textAlign: "right"
    };
    const imageStyle = {
      width: 30,
      height: 30,
      alignSelf: "flex-start",
      top: 10
    };
    const textNameStyle = {
      fontWeight: "600",
      fontSize: 13,
      color: "#FFF",
      textAlign: "left",
      top: 16,
    };
    return (
      <View style={viewStyle}>
        <View style={{ flex: 0.8, height: 50 }}>
          <Text style={textNumberStyle}>{id}</Text>
        </View>
        <View style={{ flex: 1, height: 50 }}>
          <Image
            source={require("../assets/icons/avatar.png")}
            style={imageStyle}
          />
        </View>
        <View style={{ flex: 3, height: 50 }}>
          <Text style={textNameStyle}>{name}</Text>
        </View>
        <View style={{ flex: 2, height: 50 }}>
          <Text style={textPointsStyle}>{points}</Text>
          <Text style={textTimeStyle}>{time}</Text>
        </View>
      </View>
    );
  }
}
