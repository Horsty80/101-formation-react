import { Route, Routes } from "react-router-dom";
import Customers from "./screens/Customers";
import Dashboard from "./screens/Dashboard";
import Help from "./screens/Help";
import MainLayout from "./screens/MainLayout";
import Messages from "./screens/Messages";
import Password from "./screens/Password";
import Settings from "./screens/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="customers" element={<Customers />} />
        <Route path="help" element={<Help />} />
        <Route path="messages" element={<Messages />} />
        <Route path="settings" element={<Settings />} />
        <Route path="password" element={<Password />} />
      </Route>
    </Routes>
  );
}

export default App;
