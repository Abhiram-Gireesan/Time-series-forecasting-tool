document.getElementById("help-forecast-button").addEventListener("click", function() {
    const dataInput = document.getElementById("help-data-input").value;
    const dataArray = dataInput.split(',').map(Number);

    // Simple moving average forecast (for demonstration purposes)
    const forecastedData = simpleMovingAverage(dataArray, 3); // Using a window of 3 for the moving average

    document.getElementById("help-forecast-output").innerHTML = forecastedData.join(', ');
});

function simpleMovingAverage(data, window) {
    let result = [];
    for (let i = 0; i <= data.length - window; i++) {
        const windowData = data.slice(i, i + window);
        const avg = windowData.reduce((acc, val) => acc + val, 0) / window;
        result.push(avg);
    }
    return result;
}
