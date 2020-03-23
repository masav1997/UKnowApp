import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Logo from "../../components/Logo";
import ControlTab from "../../components/ControlTab";
import Agreement from "../../components/Agreement";

export default class SignUpEmail extends React.Component {
  state = {
    email: "",
    password: "",
    password1: ""
  };

  render() {
    return (
      <ScrollView>
        <Logo />
        <ControlTab selectedIndex={1} />
        <Title
          title="Регистрация"
          subtitle="Уже есть аккаунт?"
          linkTitle=" Авторизироваться."
        />
        <Input
          label="Эл.почта"
          value={this.state.email}
          onChangeText={(text) => this.setState({email: text})}
          keyboardType="email-address"
        />
        <View style={styles.delSpace}></View>
        <Input
          label="Пароль"
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}
          autoCompleteType="password"
          textContentType="password"
          secureTextEntry={true}
        />
        <View style={styles.delSpace}></View>
        <Input
          placeholder="Повторите пароль"
          value={this.state.password1}
          onChangeText={(text) => this.setState({password1: text})}
          autoCompleteType="password"
          textContentType="newPassword"
          secureTextEntry={true}
        />
        <Button buttonTitle="Зарегистрироваться" />
        <Agreement titleName="Зарегистрироваться" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  delSpace: {
    marginBottom: -10
  },
});
