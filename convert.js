const postmanToOpenApi = require('postman-to-openapi');
const path = require('path');

const postmanCollection = path.join(__dirname, 'collection.json'); // Caminho para o arquivo Postman Collection
const outputFile = path.join(__dirname, 'openapi.yaml'); // Caminho para o arquivo OpenAPI de saída

postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
  .then(result => {
    console.log(`Arquivo OpenAPI gerado com sucesso: ${outputFile}`);
  })
  .catch(err => {
    console.error(err);
  });
