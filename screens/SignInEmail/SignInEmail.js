import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Logo from "../../components/Logo";
import ControlTab from "../../components/ControlTab";
import Agreement from "../../components/Agreement";

export default class SignInEmail extends React.Component {
  state = {
    email: "",
    number: ""
  };

  render() {
    return (
      <View>
        <Logo />
        <ControlTab selectedIndex={1} />
        <Title
          title="Авторизация"
          subtitle="Ещё нет аккаунта?"
          linkTitle="Регистрация."
        />
        <Input
          label="Эл.почта"
          value={this.state.email}
          onChangeText={(text) => this.setState({email: text})}
        />
        <View style={styles.delSpace}></View>
        <Input
          label="Номер телефона"
          value={this.state.number}
          onChangeText={(text) => this.setState({number: text})}
          keyboardType="phone-pad"
        />
        <Text style={styles.textStyle}>Забыли пароль?</Text>
        <Button buttonTitle="Авторизоваться" />
        <Agreement titleName="Авторизоваться" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  delSpace: {
    marginBottom: -10
  },
  textStyle: {
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 20,
    textAlign: "right",
    fontWeight: '500',
    color: "#FF3358",
    marginBottom:20
  }
});
