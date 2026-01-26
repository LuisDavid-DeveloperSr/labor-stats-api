export default {
  openapi: "3.0.0",
  info: {
    title: "Labor Stats API",
    version: "1.0.0",
    description: "API REST para consultar estadísticas laborales oficiales (Eurostat)"
  },
  servers: [
    {
      url: "http://localhost:5000"
    }
  ],
  paths: {
    "/api/labor/unemployment": {
      get: {
        summary: "Tasa de desempleo por país y periodo",
        parameters: [
          { name: "country", in: "query", required: true },
          { name: "year", in: "query", required: true }
        ],
        responses: {
          200: { description: "Datos obtenidos correctamente" }
        }
      }
    },
    "/api/labor/unemployment/series": {
      get: {
        summary: "Serie temporal completa de desempleo",
        parameters: [
          { name: "country", in: "query", required: true }
        ],
        responses: {
          200: { description: "Serie temporal" }
        }
      }
    }
  }
};
