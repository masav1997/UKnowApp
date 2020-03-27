import React from "react";
import {
  View,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity
} from "react-native";
import Header from "../../components/Header";
import HeaderTitle from "../../components/HeaderTitle";
import HistoryBlock from "../../components/HistoryBlock";
import OperationsMinus from "../../components/OperationsMinus";
import BackButton from "../../components/BackButton";

const { width } = Dimensions.get("window");

export default class History extends React.Component {
  render() {
    return (
      <View style={{ width: width - 30, textAlign: "center" }}>
        <ScrollView>
          <Header
            left={<BackButton />}
            center={<HeaderTitle title="История игр" />}
          />
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                marginBottom:10
              }}
            >
              <Text
                style={{
                  fontStyle: "normal",
                  fontSize: 24,
                  lineHeight: 29,
                  fontWeight: "bold",
                  color: "#FFF",
                  textAlign: "center",
                  marginBottom: 5,
                  marginTop: 30
                }}
              >
                1 550
              </Text>
              <Text
                style={{
                  fontStyle: "normal",
                  fontSize: 16,
                  lineHeight: 20,
                  fontWeight: "500",
                  color: "#898F97",
                  textAlign: "center",
                  marginBottom: 30
                }}
              >
                всего игр
              </Text>
            </View>
            <View
              style={{
                flex: 1
              }}
            >
              <Text
                style={{
                  fontStyle: "normal",
                  fontSize: 24,
                  lineHeight: 29,
                  fontWeight: "bold",
                  color: "#FFF",
                  textAlign: "center",
                  marginBottom: 5,
                  marginTop: 30
                }}
              >
                34
              </Text>
              <Text
                style={{
                  fontStyle: "normal",
                  fontSize: 16,
                  lineHeight: 20,
                  fontWeight: "500",
                  color: "#898F97",
                  textAlign: "center",
                  marginBottom: 30
                }}
              >
                победы
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 16, color: "#898F97", marginBottom: 20 }}>
            История игр
          </Text>
          <HistoryBlock
            name="Викторина от популярного блогера "
            sum="5й из 250"
          />
          <HistoryBlock
            name="Викторина от популярного блогера "
            sum="1й из 250"
          />
          <HistoryBlock
            name="Викторина от популярного блогера "
            sum="5й из 250"
          />
          <HistoryBlock
            name="Викторина от популярного блогера "
            sum="1й из 250"
          />
          <HistoryBlock
            name="Викторина от популярного блогера "
            sum="5й из 250"
          />
          <HistoryBlock
            name="Викторина от популярного блогера "
            sum="1й из 250"
          />
          <HistoryBlock
            name="Викторина от популярного блогера "
            sum="5й из 250"
          />
          <HistoryBlock
            name="Викторина от популярного блогера "
            sum="1й из 250"
          />
          <HistoryBlock
            name="Викторина от популярного блогера "
            sum="5й из 250"
          />
          <HistoryBlock
            name="Викторина от популярного блогера "
            sum="1й из 250"
          />
          <HistoryBlock
            name="Викторина от популярного блогера "
            sum="5й из 250"
          />
          <HistoryBlock
            name="Викторина от популярного блогера "
            sum="1й из 250"
          />
          <HistoryBlock
            name="Викторина от популярного блогера "
            sum="5й из 250"
          />
          <HistoryBlock
            name="Викторина от популярного блогера "
            sum="1й из 250"
          />
        </ScrollView>
      </View>
    );
  }
}
