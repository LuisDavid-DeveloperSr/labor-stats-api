import axios from "axios";

// Desempleo para un año concreto
export async function fetchUnemploymentData({ country, year }) {
  const url =
    "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/LFSQ_URGAN";

  const params = {
    freq: "Q",
    unit: "PC",
    sex: "T",
    age: "Y20-64",
    citizen: "TOTAL",
    geo: country,
    time: `${year}-Q4`
  };

  const response = await axios.get(url, { params });

  const values = response.data.value;
  const lastValue = Object.values(values)[0];

  return {
    pais: country,
    año: year,
    tasa_paro: lastValue
  };
}

// Serie temporal completa
export async function fetchTimeSeriesData({ country }) {
  const url =
    "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/LFSQ_URGAN";

  const params = {
    freq: "Q",
    unit: "PC",
    sex: "T",
    age: "Y20-64",
    citizen: "TOTAL",
    geo: country
  };

  const response = await axios.get(url, { params });
  return response.data;
}
