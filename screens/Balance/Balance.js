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
import OperationsPlus from "../../components/OperationsPlus";
import OperationsMinus from "../../components/OperationsMinus";
import BackButton from "../../components/BackButton";

const { width } = Dimensions.get("window");

export default class Balance extends React.Component {
  render() {
    return (
      <View style={{ width: width - 30, textAlign: "center" }}>
        <ScrollView>
          <Header
            left={<BackButton />}
            center={<HeaderTitle title="Баланс" />}
          />
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
            1 550 руб.
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
            ваш баланс
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                backgroundColor: "#FF3358",
                borderRadius: 15,
                width: width - 30,
                height: 50,
                alignSelf: "center",
                marginBottom: 25,
                shadowColor: "rgba(255, 51, 88, 0.6)",
                shadowOpacity: 0.8,
                shadowRadius: 15,
                shadowOffset: {
                  height: -1,
                  width: 0
                }
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    lineHeight: 16,
                    fontWeight: "bold"
                  }}
                >
                  Попоплить
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#000",
                borderRadius: 15,
                width: width - 30,
                height: 50,
                alignSelf: "center",
                marginBottom: 25,
                borderColor: "#FF3358",
                borderWidth: 5,
                marginLeft: 15,
                shadowColor: "rgba(255, 51, 88, 0.6)",
                shadowOpacity: 0.8,
                shadowRadius: 15,
                shadowOffset: {
                  height: -1,
                  width: 0
                }
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    color: "#FF3358",
                    lineHeight: 16,
                    fontWeight: "bold"
                  }}
                >
                  Вывести
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ fontSize: 16, color: "#898F97", marginBottom: 20 }}>
            История операция
          </Text>
          <OperationsPlus
            data="21.08.2020"
            name="Яндекс касса"
            sum="+ 1800 руб."
          />
          <OperationsMinus data="21.08.2020" name="BIP " sum="- 1800 руб." />
          <OperationsPlus data="21.08.2020" name="Победа" sum="+ 1800 руб." />
          <OperationsMinus data="21.08.2020" name="BIP " sum="- 1800 руб." />
          <OperationsPlus
            data="21.08.2020"
            name="Яндекс касса"
            sum="+ 1800 руб."
          />
          <OperationsMinus data="21.08.2020" name="BIP " sum="- 1800 руб." />
          <OperationsPlus data="21.08.2020" name="Победа" sum="+ 1800 руб." />
          <OperationsMinus data="21.08.2020" name="BIP " sum="- 1800 руб." />
          <OperationsPlus
            data="21.08.2020"
            name="Яндекс касса"
            sum="+ 1800 руб."
          />
          <OperationsMinus data="21.08.2020" name="BIP " sum="- 1800 руб." />
          <OperationsPlus data="21.08.2020" name="Победа" sum="+ 1800 руб." />
          <OperationsMinus data="21.08.2020" name="BIP " sum="- 1800 руб." />
          <OperationsPlus
            data="21.08.2020"
            name="Яндекс касса"
            sum="+ 1800 руб."
          />
          <OperationsMinus data="21.08.2020" name="BIP " sum="- 1800 руб." />
          <OperationsPlus data="21.08.2020" name="Победа" sum="+ 1800 руб." />
          <OperationsMinus data="21.08.2020" name="BIP " sum="- 1800 руб." />
        </ScrollView>
      </View>
    );
  }
}
