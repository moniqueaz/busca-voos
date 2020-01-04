export default function flights(state = {}, action) {
  switch (action.type) {
    case 'MOUNT_TO_FLIGHTS':
      return action.flights;
    default:
      return state;
  }
}
