import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import Button from "../../components/Button";
import Header from "../../components/Header";
import HeaderTitle from "../../components/HeaderTitle";
import Quit from "../../components/Quit";

const { height, width } = Dimensions.get("window");

export default class FinishCreate extends React.Component {
  render() {
    return (
      <View style={{ width: width - 30, textAlign: "center" }}>
        <Header
          left={<Quit />}
          center={<HeaderTitle title="Викторина создана" />}
        />
        <View style={{ marginBottom: height / 15 }}></View>
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
          Поздравляем!
        </Text>
        <Text
          style={{
            fontStyle: "normal",
            fontSize: 16,
            lineHeight: 20,
            fontWeight: "500",
            color: "#FFF",
            marginBottom: 40,
            textAlign: "center"
          }}
        >
          Вы успешно создали викторину
        </Text>
        <View
          style={{
            backgroundColor: "#09121C",
            height: "auto",
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
            marginLeft: 15,
            marginRight: 15,
            marginBottom: 15,
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 15
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, height: 28 }}>
              <Image
                source={require("../../assets/icons/price.png")}
                style={{ width: 20, height: 20, alignSelf: "center", top: 3 }}
              />
            </View>
            <View style={{ flex: 9, height: 28 }}>
              <Text
                style={{
                  fontStyle: "normal",
                  fontSize: 23,
                  lineHeight: 28,
                  fontWeight: "bold",
                  color: "#FF3358",
                  textAlign: "left"
                }}
              >
                250 руб.
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, height: "auto" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  textAlign: "left",
                  marginBottom: 10
                }}
              >
                Викторина на знание истории отечетсвенного автопрома
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, height: 28, marginBottom: 20 }}>
              <Text
                style={{
                  fontStyle: "normal",
                  fontSize: 13,
                  lineHeight: 16,
                  fontWeight: "500",
                  color: "#898F97",
                  textAlign: "left"
                }}
              >
                Призовой фонд:
              </Text>
              <Text
                style={{
                  fontStyle: "normal",
                  fontSize: 13,
                  lineHeight: 16,
                  fontWeight: "700",
                  color: "#FEAC5E",
                  textAlign: "left"
                }}
              >
                1 500 000 руб.
              </Text>
            </View>
            <View style={{ flex: 1, height: 28 }}>
              <Text
                style={{
                  fontStyle: "normal",
                  fontSize: 13,
                  lineHeight: 16,
                  fontWeight: "500",
                  color: "#898F97",
                  textAlign: "left"
                }}
              >
                Участников:
              </Text>
              <Text
                style={{
                  fontStyle: "normal",
                  fontSize: 13,
                  lineHeight: 16,
                  fontWeight: "700",
                  color: "#FFF",
                  textAlign: "left",
                }}
              >
                200 из 250
              </Text>
            </View>
          </View>
        </View>
        <View style={{ position: "absolute", marginTop: height - 79 }}>
          <Button buttonTitle="Продолжить" />
        </View>
      </View>
    );
  }
}