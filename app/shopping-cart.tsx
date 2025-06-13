import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function ShoppingCartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.item}></View>
        <View style={styles.item}>
          <Text style={{ color: "gray", fontSize: 16 }}>余额：</Text>
          <Text style={styles.itemText}>999999</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 100,
    // backgroundColor: 'green',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    // backgroundColor: 'darkblue',
    width: Dimensions.get("window").width / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
  },
});
