import React from "react";
import { View, TouchableOpacity } from "react-native";

export default class Header extends React.Component {
  render() {
    const { left, center, right } = this.props;
    const headerStyle = {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 40,
    };
    const leftStyle = {
      flex: 1
    };
    const centerStyle = {
      flex: 1,
      alignItems: "center",
    };
    const rightStyle = {
      flex: 1,
      alignItems: "flex-end"
    };
    return (
      <View style={headerStyle}>
        <View style={leftStyle}>
          <TouchableOpacity>{left}</TouchableOpacity>
        </View>
        <View style={centerStyle}>{center}</View>
        <View style={rightStyle}>{right}</View>
      </View>
    );
  }
}
