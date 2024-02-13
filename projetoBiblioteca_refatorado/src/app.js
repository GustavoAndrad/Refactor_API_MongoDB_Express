import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middleware/manipuladorDeErros.js";
import manipulador404 from "./middleware/manipulador404.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

//rotas são vereficads sequencialemnte
//só chega aqui se não correponder com neuma rota dos roteadores
app.use(manipulador404);

// eslint-disable-next-line no-unused-vars
app.use(manipuladorDeErros);

export default app;