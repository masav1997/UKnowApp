import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

export default class RadioList extends React.Component {
  state = {
    value: null
  };
  render() {
    const { PROP, title } = this.props;
    const { value } = this.state;

    const container = {
      marginBottom: 24,
      alignItems: "center",
      flexDirection: "row"
    };

    const radioText = {
      fontSize: 16,
      color: "#FFF",
      fontWeight: "500",
      marginLeft: 10
    };

    const radioCircle = {
      height: 20,
      width: 20,
      borderRadius: 5,
      borderWidth: 3,
      borderColor: "#545964",
      alignItems: "center",
      justifyContent: "center"
    };

    const selectedRb = {
      width: 20,
      height: 20,
      borderRadius: 5,
      backgroundColor: "#FF3358"
    };

    const titleStyle = {
      fontSize: 16,
      color: "#898F97",
      marginBottom: 10
    };

    return (
      <View>
        <Text style={titleStyle}>{title}</Text>
        {PROP.map(res => {
          return (
            <View key={res.key} style={container}>
              <TouchableOpacity
                style={radioCircle}
                onPress={() => {
                  this.setState({
                    value: res.key
                  });
                }}
              >
                {value === res.key && (
                  <Image
                    source={require("../assets/icons/done.png")}
                    style={selectedRb}
                  />
                )}
              </TouchableOpacity>
              <Text style={radioText}>{res.text}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
