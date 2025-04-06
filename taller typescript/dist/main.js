import { dataSeries } from './data.js';
const seriesTbody = document.getElementById("series");
const avgSeasons = document.getElementById("avgSeasons");
function showSeriesInTable(series) {
    series.forEach((s) => {
        const trElement = document.createElement("tr");
        trElement.innerHTML = `
        <td>${s.tupleNum}</td>
        <td>${s.name}</td>
        <td>${s.channel}</td>
        <td>${s.seasons}</td>
        `;
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    const total = series.reduce((acc, series) => acc + series.seasons, 0);
    return total / series.length;
}
showSeriesInTable(dataSeries);
const average = getAverageSeasons(dataSeries);
avgSeasons.innerText = average.toFixed(2);
