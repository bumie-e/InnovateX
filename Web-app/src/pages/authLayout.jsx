import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";

function AuthLayout({ children }) {
  const user = useSelector((state) => state.user);
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
}
AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthLayout;
