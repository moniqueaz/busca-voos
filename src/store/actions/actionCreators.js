export function mountToFlights(flight) {
  console.log('flight: ', flight);
  return {
    type: 'MOUNT_TO_FLIGHT',
    flight,
  };
}
