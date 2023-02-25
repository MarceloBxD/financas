import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Balance({ saldo, gastos }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <Text style={styles.value}>R$ {saldo}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <Text style={styles.expenses}>R$ {gastos}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: -32,
  },
  item: {
    borderRadius: 8,
    backgroundColor: "#fff",
    padding: 16,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
  },
  itemTitle: {
    color: "#999",
    fontWeight: "bold",
    fontSize: 15,
  },
  value: {
    color: "#2ecc71",
    fontSize: 20,
    fontWeight: "bold",
  },
  expenses: {
    color: "#e74c3c",
    fontSize: 20,
    fontWeight: "bold",
  },
});
