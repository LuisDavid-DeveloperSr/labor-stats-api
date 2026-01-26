import { useState } from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import ResultCard from "../components/ResultCard";
import TimeSeriesChart from "../components/TimeSeriesChart";
import { getUnemployment, getTimeSeries } from "../services/api";

export default function Home() {
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (country, year) => {
    try {
      setError(null);
      setResult(null);
      setChartData([]);

      // 1️⃣ Dato puntual (año concreto)
      const unemployment = await getUnemployment(country, year);
      setResult(unemployment);

      // 2️⃣ Serie temporal completa
      const series = await getTimeSeries(country);

      const values = series.value;
      const timeIndex = series.dimension.time.category.index;

      // 🔑 CONVERSIÓN CORRECTA DE EUROSTAT → GRÁFICA
      const formattedData = Object.entries(timeIndex)
        .map(([periodo, index]) => ({
          periodo,
          tasa: values[index],
        }))
        .filter(item => item.tasa !== undefined);

      console.log("Datos para la gráfica:", formattedData);

      setChartData(formattedData);

    } catch (err) {
      console.error(err);
      setError("No se pudieron obtener los datos.");
    }
  };

  return (
    <div className="container">
      <Header />

      <SearchForm onSearch={handleSearch} />

      {error && <p className="error">{error}</p>}

      {result && <ResultCard data={result} />}

      {chartData.length > 0 && (
        <TimeSeriesChart data={chartData} />
      )}
    </div>
  );
}
