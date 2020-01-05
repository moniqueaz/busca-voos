export default function flights(
  state = {
    flights: {
      flag: 'outbound',
      order: 'price',
      outbound: [],
      inbound: [],
    },
  },
  action
) {
  switch (action.type) {
    case 'MOUNT_TO_FLIGHTS':
      return {
        ...state,
        flights: action.flight,
      };
    default:
      return state;
  }
}
