import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Platform
} from "react-native";
import SignUpPhone from "./screens/SignUpPhone/SignUpPhone";

export default class App extends React.Component {
  state = {
    value: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView
          style={{
            paddingTop: Platform.OS === "android" ? 25 : 0
          }}
        >
          <SignUpPhone />
        </SafeAreaView>
      </View>
    );
  }
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19232F",
    alignItems: "center"
  }
});
