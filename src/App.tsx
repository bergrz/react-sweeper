import { Header } from "./components/Header";
import { config } from "./config";

export default function App() {
  return <Header headerConfig={config.header} />;
}
