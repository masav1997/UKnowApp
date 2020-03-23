import React from "react";
import { View, Text } from "react-native";

export default class Title extends React.Component {
  render() {
    const { title, subtitle, linkTitle } = this.props;
    const textTitleStyle = {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 32,
      lineHeight: 39,
      color: "#FFFFFF",
      marginBottom: 0
    };
    const descriptionStyle = {
      marginRight: 15,
      marginBottom: 30
    };
    const descriptionTextStyle = {
      fontStyle: "normal",
      fontSize: 16,
      lineHeight: 20,
      marginTop: 5,
      fontWeight: '500',
      color: "#898F97"
    };
    const descriptionTextLinkStyle = {
      fontStyle: "normal",
      fontSize: 16,
      lineHeight: 20,
      textAlign: "center",
      fontWeight: '500',
      color: "#FF3358",
      marginTop: 5
    };
    return (
      <View>
        <Text style={textTitleStyle}>{title}</Text>
        <View style={descriptionStyle}>
          <Text style={descriptionTextStyle}>
            {subtitle}
            <Text style={descriptionTextLinkStyle}> {linkTitle}</Text>
          </Text>
        </View>
      </View>
    );
  }
}
