import PrivateRoute from "../../utils/PrivateRoute"
export default function DashboardLayout({ children }) {
  return <PrivateRoute>{children}</PrivateRoute>
}
