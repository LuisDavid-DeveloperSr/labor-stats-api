import {
  fetchUnemploymentData,
  fetchTimeSeriesData
} from "../services/labor.service.js";

// Desempleo puntual por país y año
export const getUnemployment = async (req, res) => {
  try {
    const { country, year } = req.query;

    if (!country || !year) {
      return res.status(400).json({
        error: "Parámetros 'country' y 'year' son obligatorios"
      });
    }

    const data = await fetchUnemploymentData({ country, year });
    res.json(data);

  } catch (error) {
    res.status(500).json({
      error: "Error obteniendo datos de desempleo"
    });
  }
};

// Serie temporal completa
export const getTimeSeries = async (req, res) => {
  try {
    const { country } = req.query;

    if (!country) {
      return res.status(400).json({
        error: "Parámetro 'country' es obligatorio"
      });
    }

    const data = await fetchTimeSeriesData({ country });
    res.json(data);

  } catch (error) {
    res.status(500).json({
      error: "Error obteniendo serie temporal"
    });
  }
};
