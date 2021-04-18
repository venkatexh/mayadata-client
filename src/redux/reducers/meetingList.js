export const meetingList = (list = [], action) => {
  switch (action.type) {
    case "ALL_MEETINGS":
      return action.payload;
    default:
      return list;
  }
};
