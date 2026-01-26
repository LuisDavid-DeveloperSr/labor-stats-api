const BASE_URL = "http://localhost:5000/api";

export async function getUnemployment(country, year) {
  const res = await fetch(
    `${BASE_URL}/unemployment?country=${country}&year=${year}`
  );

  if (!res.ok) {
    throw new Error("Error obteniendo desempleo");
  }

  return res.json();
}

export async function getTimeSeries(country) {
  const res = await fetch(
    `${BASE_URL}/timeseries?country=${country}`
  );

  if (!res.ok) {
    throw new Error("Error obteniendo serie temporal");
  }

  return res.json();
}
