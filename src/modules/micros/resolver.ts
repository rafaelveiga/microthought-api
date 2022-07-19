import db from "src/firestore";

export const getAllMicros = async () => {
  const micros = await db.collection("micros").get();

  return micros.docs.map((doc) => doc.data());
};

export const getSingleMicro = async (microId: number) => {
  const micro = await db.collection("micros").doc(microId.toString()).get();

  return micro.data();
};
