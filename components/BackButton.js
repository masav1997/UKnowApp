import React from "react";
import { Image } from "react-native";

export default class BackButton extends React.Component {
  render() {
    const logoStyle = {
        top: 22,
        height: 15,
        width: 16,
    };
    return (
        <Image source={require("../assets/icons/back.png")} style={logoStyle} />
    );
  }
}