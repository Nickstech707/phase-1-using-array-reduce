// Code your solution here
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Calculates the total number of batteries using the reduce method
const totalBatteries = batteryBatches.reduce(function(total, batches) {
    // Adds the current batch count to the total
    return batches + total;
  });

