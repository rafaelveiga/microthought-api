import db from "src/firestore";

export const getAllMicros = async () => {
  const micros = await db.collection("micros").get();

  return micros.docs.map((doc) => doc.data());
};
