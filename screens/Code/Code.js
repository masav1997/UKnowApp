import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import BackButton from "../../components/BackButton";
import CodeInput from "../../components/CodeInput";
import Title from "../../components/Title";

export default class Code extends React.Component {
  render() {
    return (
      <View style={{ textAlign: "center" }}>
        <Header left={<BackButton />} center={<Logo />} />
        <View style={styles.space}></View>
        <Title title="Код из смс"/>
        <View style={styles.delSpace1}></View>
        <Text style={styles.descriptionText}>
          Введите код, который был выслан на указанный номер{" "}
          <Text style={styles.boldText}>+7 (890) 541-74-50.</Text> Введите его
          чтобы продолжить.
        </Text>
        <CodeInput />
        <Button buttonTitle="Продолжить" />
        <View style={styles.delSpace}></View>
        <TouchableOpacity style={{ marginLeft: 19, textAlign: "center", alignSelf: 'center' }}>
          <Title linkTitle="Выслать код повторно" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  descriptionText: {
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "500",
    color: "#898F97",
    marginRight: 15,
    marginBottom: 30
  },
  boldText: {
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    fontWeight: "600",
    color: "#FFF",
    marginTop: 5
  },
  delSpace1: {
    marginBottom: -45
  },
  delSpace: {
    marginBottom: -15
  },
  space: {
    marginBottom: 10
  }
});
