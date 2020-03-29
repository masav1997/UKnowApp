import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
const { width } = Dimensions.get("window");

export default class Multislider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [30, 70]
    };
  }
  multiSliderValuesChange = values => {
    this.setState({
      values
    });
  };
  render() {
    const { title } = this.props;

    const titleStyle = {
      flexDirection: "row",
      flex: 1
    };

    const titleTextStyle = {
      fontStyle: "normal",
      fontSize: 16,
      lineHeight: 20,
      top: 25,
      fontWeight: "500",
      color: "#898F97",
      width: "40%",
      height: 50
    };

    const price1Style = {
      fontStyle: "normal",
      fontSize: 16,
      lineHeight: 20,
      top: 25,
      fontWeight: "500",
      color: "#FFF",
      width: "40%",
      height: 50,
      textAlign: "right"
    };
    const price2Style = {
      fontStyle: "normal",
      fontSize: 16,
      lineHeight: 20,
      top: 25,
      fontWeight: "500",
      color: "#FFF",
      width: "26%",
      height: 50,
      textAlign: "left"
    };

    return (
      <View style={{marginBottom: 20}}>
        <View style={titleStyle}>
          <Text style={titleTextStyle}>{title}</Text>
          <Text style={price1Style}>₽{this.state.values[0]}тыс. - </Text>
          <Text style={price2Style}>₽{this.state.values[1]}тыс.</Text>
        </View>
        <MultiSlider
          values={[this.state.values[0], this.state.values[1]]}
          sliderLength={width - 30}
          onValuesChange={this.multiSliderValuesChange}
          min={0}
          max={100}
          step={1}
          selectedStyle={{
            backgroundColor: "#FF3358",
            height:4,
          }}
          unselectedStyle={{
            backgroundColor: "#9597A1",
            height:4,
            borderRadius: 6
          }}
          markerStyle={{
            backgroundColor: "#FFFFFF",
            width: 13,
            height: 13,
            top:1
          }}
        />
      </View>
    );
  }
}
