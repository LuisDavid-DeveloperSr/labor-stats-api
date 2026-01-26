export function parseEurostatTimeSeries(response) {
  const values = response.data.value;
  const timeIndex = response.data.dimension.time.category.index;

  const result = [];

  for (const [periodo, index] of Object.entries(timeIndex)) {
    if (values[index] !== undefined) {
      result.push({
        periodo,
        tasa_paro: values[index],
      });
    }
  }

  return result;
}
