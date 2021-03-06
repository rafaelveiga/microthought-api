import db from "src/firestore";

export const getAllMicros = async () => {
  const micros = await db.collection("micros").get();

  const data = micros.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};

export const getSingleMicro = async (microId: string) => {
  const micro = await db.collection("micros").doc(microId.toString()).get();

  return micro.data();
};

export const addMicro = async (_, data) => {
  const newMicro = await db.collection("micros").add(data);

  const microData = await getSingleMicro(newMicro.id);
  return microData;
};
