import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Platform
} from "react-native";
import Filters from "./screens/Filters/Filters";

export default class App extends React.Component {
  state = {
    value: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView
          style={{
            width: width - 30,
            paddingTop: Platform.OS === "android" ? 25 : 0
          }}
        >
          <Filters />
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
