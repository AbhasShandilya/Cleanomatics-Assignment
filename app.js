document.getElementById("calculateBtn").addEventListener("click", function () {
  const distance = parseFloat(document.getElementById("distance").value);
  const vehicle = document.getElementById("vehicle").value;

  const vehicles = {
    "Maruti Suzuki Alto": { speed: 140, efficiency: 22.05, maxRange: 771.75 },
    "Hyundai i20": { speed: 180, efficiency: 20.35, maxRange: 753.05 },
    "Maruti Suzuki Swift": { speed: 160, efficiency: 21.21, maxRange: 764.49 },
    "Maruti Suzuki Dzire": { speed: 170, efficiency: 24.12, maxRange: 796.2 },
    "Hyundai Creta": { speed: 190, efficiency: 17.1, maxRange: 800.0 },
    "Toyota Fortuner": { speed: 180, efficiency: 12.5, maxRange: 700.0 },
    // Add the rest of the vehicles here if there are more
  };

  const selectedVehicle = vehicles[vehicle];
  const time = distance / selectedVehicle.speed;
  const fuelConsumption = distance / selectedVehicle.efficiency;
  const outOfRange = distance > selectedVehicle.maxRange;

  document.getElementById("time").innerText = `Time: ${time.toFixed(2)} hours`;
  document.getElementById(
    "fuel"
  ).innerText = `Fuel Consumption: ${fuelConsumption.toFixed(2)} liters`;
  if (outOfRange) {
    document.getElementById("fuel").innerText += " (Out of range)";
  }

  const comparisonBody = document.querySelector("#comparison tbody");
  comparisonBody.innerHTML = "";
  Object.keys(vehicles).forEach((vehicle) => {
    const vehicleData = vehicles[vehicle];
    const time = distance / vehicleData.speed;
    const fuel = distance / vehicleData.efficiency;
    const rangeStatus =
      distance > vehicleData.maxRange ? "Out of range" : "Within range";

    const row = `<tr>
            <td>${vehicle}</td>
            <td>${time.toFixed(2)} hours</td>
            <td>${fuel.toFixed(2)} liters</td>
            <td>${rangeStatus}</td>
        </tr>`;
    comparisonBody.insertAdjacentHTML("beforeend", row);
  });
});
