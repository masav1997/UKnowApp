import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import Button from "../../components/Button";
import Header from "../../components/Header";
import HeaderTitle from "../../components/HeaderTitle";
import Quit from "../../components/Quit";
import ProgressCircle from "react-native-progress-circle";

const { height, width } = Dimensions.get("window");

export default class Achive extends React.Component {
  render() {
    return (
      <View style={{ width: width - 30, textAlign: "center" }}>
        <Header
          left={<Quit />}
          center={<HeaderTitle title="Викторина закончена" />}
        />
        <View
          style={{ marginTop: "15%", alignSelf: "center", marginBottom: 31 }}
        >
          <ProgressCircle
            percent={30}
            radius={80}
            borderWidth={9}
            color="#FF3358"
            shadowColor="#060A10"
            bgColor="#19232F"
          >
            <Image
              source={require("../../assets/icons/leader.png")}
              style={{ width: 110, height: 110 }}
            />
          </ProgressCircle>
        </View>
        <Text
          style={{
            fontStyle: "normal",
            fontSize: 20,
            fontWeight: "bold",
            color: "#FFF",
            marginBottom: 10,
            textAlign: "center"
          }}
        >
          Лидер
        </Text>
        <Text
          style={{
            fontStyle: "normal",
            fontSize: 16,
            lineHeight: 20,
            fontWeight: "500",
            color: "#FFF",
            textAlign: "center"
          }}
        >
          Пригласите друзей. 
        </Text>
        <Text
          style={{
            fontStyle: "normal",
            fontSize: 16,
            lineHeight: 20,
            fontWeight: "700",
            color: "#FEAC5E",
            textAlign: "center"
          }}
        >
          10 из 15 
        </Text>
      </View>
    );
  }
}