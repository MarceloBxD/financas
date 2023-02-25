import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Header from "../../components/Header/index.js";
import Balance from "../../components/Balance/index.js";
import { TouchableOpacity } from "react-native";

export default function Home() {
  const [showValue, setShowValue] = useState(false);

  list = [
    {
      id: 1,
      name: "Salário",
      date: "15/01/2021",
      value: 2000,
      type: 0 /*despesa*/,
    },
    {
      id: 2,
      name: "Aluguel",
      date: "15/01/2020",
      value: 1000,
      type: 1 /*receita*/,
    },
    { id: 3, name: "Supermercado", date: "22/02/2022", value: 500, type: 0 },
    { id: 4, name: "Salário", date: "17/03/2021", value: 2000, type: 1 },
  ];

  return (
    <View style={styles.container}>
      <Header name="Cesar Augusto Bracet" />
      <Balance saldo="2.275,90" gastos="437,20" />

      <Text style={styles.title}>Últimas Movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setShowValue(!showValue)}
            style={[
              styles.item,
              item.type === 0
                ? { backgroundColor: "#e74c3c" }
                : { backgroundColor: "#2ecc71" },
            ]}
          >
            <Text style={styles.date}>{item.date}</Text>

            <Text style={styles.name}>{item.name}</Text>
            {showValue ? (
              <Text style={styles.value}>
                {item.type === 0 ? "- " : "+ "}
                R$ {item.value}
              </Text>
            ) : (
              <Text style={styles.skeleton}></Text>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#rgba(0, 0, 0, 0.05)",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 16,
    padding: 16,
  },
  item: {
    backgroundColor: "#7159c1",
    margin: 10,
    borderRadius: 8,
    padding: 19,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: "#fff",
    marginBottom: 8,
    fontWeight: "bold",
    fontSize: 16,
  },
  value: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
    fontSize: 15,
  },
  skeleton: {
    width: 80,
    height: 14,
    backgroundColor: "#ddd",
    borderRadius: 4,
  },
});
