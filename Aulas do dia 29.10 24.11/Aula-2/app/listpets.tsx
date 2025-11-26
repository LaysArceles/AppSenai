 
import { getAuth } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { db } from "../firebaseConfig";

export default function petsList() {

  const [pets, setpets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchpets() {
    try {
      
      const q = query(
        collection(db, "pets"),
      );

      const snapshot = await getDocs(q);

      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

console.log(list)
      setpets(list);

    } catch (err) {
      console.log("Erro ao buscar pet:", err);
    } finally {
      setLoading(false);
    }
  }
    async function updatepets(id: string, data: any) {
    try {
      const ref = doc(db, "pets", id);
      await updateDoc(ref, data);

      alert("Pet atualizado!");
      fetchpets();

    } catch (err) {
      console.log("Erro ao atualizar:", err);
    }
  }

  async function deletepets(id: string) {
    try {
      const ref = doc(db, "pets", id);
      await deleteDoc(ref);

      alert("Pet deletado!");
      fetchpets();

    } catch (err) {
      console.log("Erro ao deletar:", err);
    }
  }

  useEffect(() => {
    fetchpets();
  }, []);

  if (loading) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (pets.length === 0) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Nenhum Pet encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
        Meus Pets
      </Text>

        <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#fff",
              padding: 16,
              borderRadius: 12,
              marginBottom: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}> {item.NamePet}</Text>
            <Text style={{ opacity: 0.7 }}>year: {item.year}</Text>
            <Text style={{ opacity: 0.7 }}>Weight: {item.Weight}</Text>
            <Text style={{ opacity: 0.7 }}>PetBreed: {item.PetBreed}</Text>

            <View style={{ flexDirection: "row", marginTop: 12, gap: 12 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#3498db",
                  paddingVertical: 8,
                  paddingHorizontal: 14,
                  borderRadius: 8,
                }}
                onPress={() =>
                  updatepets(item.id, { brand: "Atualizado" })
                }
              >
                <Text style={{ color: "#fff", fontWeight: "600" }}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "#e74c3c",
                  paddingVertical: 8,
                  paddingHorizontal: 14,
                  borderRadius: 8,
                }}
                onPress={() => deletepets(item.id)}
              >
                <Text style={{ color: "#fff", fontWeight: "600" }}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}