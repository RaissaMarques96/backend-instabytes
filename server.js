import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Dados dos posts (exemplo, em um cenário real, seriam obtidos do banco)
const posts = [
  { id: 1, descricao: "Uma foto de um gatinho", imagem: "https://placecats.com/cute/200/200" },
  { id: 2, descricao: "Paisagem marinha", imagem: "https://picsum.photos/seed/picsum/200/300" },
  // ... outros posts
];

const app = express ();
app.use(express.static("uploads"))
routes(app)

app.listen(3000, () => {
    console.log("Servidor escutando...");
});










