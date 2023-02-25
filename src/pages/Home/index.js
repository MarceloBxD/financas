import { StyleSheet, View, Text } from "react-native";
import Header from "../../components/Header/index.js";
import Balance from "../../components/Balance/index.js";

export default function Home() {
  list = [
    { id: 1, name: "Salário", value: 2000, type: "receita" },
    { id: 2, name: "Aluguel", value: 1000, type: "despesa" },
    { id: 3, name: "Supermercado", value: 500, type: "despesa" },
    { id: 4, name: "Salário", value: 2000, type: "receita" },
  ];

  return (
    <View style={styles.container}>
      <Header name="Sara Almeida" />
      <Balance saldo="2.275,90" gastos="437,20" />

      <Text style={styles.title}>Últimas Movimentações</Text>
      <View>
        {list.map((item) => {
          return (
            <View style={styles.item} key={item.id}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.value}>R$ {item.value}</Text>
            </View>
          );
        })}
      </View>
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
  },
  name: {
    color: "#fff",
    marginBottom: 8,
    fontSize: 16,
  },
  value: {
    color: "#fff",
  },
});
