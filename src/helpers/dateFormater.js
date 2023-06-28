import moment from "moment/moment";

const dateFormater = (dateString, format = "DD MM YYYY") => {
  return moment(dateString).format(format);
};

export default dateFormater;
