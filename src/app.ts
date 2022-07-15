import db from "./firestore";

class App {
  public async start() {
    const data = await db.collection("micros").get();

    data.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  }
}

export default App;
