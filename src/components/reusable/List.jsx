import PropTypes from "prop-types";

export const List = ({label}) => {
  return <li className=" font-medium text-md hover:underline cursor-pointer hover:font-bold  ">{label}</li>;
};

List.propTypes = {
  label: PropTypes.string.isRequired,
};
