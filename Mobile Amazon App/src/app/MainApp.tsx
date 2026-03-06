import { useState } from "react";
import { PrototypeHub } from "./components/PrototypeHub";
import { ReengagementHome } from "./components/ReengagementHome";
import ProductPage from "./App";

type Screen = "hub" | "reorder" | "reengagement";

export default function MainApp() {
  const [screen, setScreen] = useState<Screen>("hub");

  if (screen === "reorder") return <ProductPage onBack={() => setScreen("hub")} />;
  if (screen === "reengagement") return <ReengagementHome onBack={() => setScreen("hub")} />;
  return <PrototypeHub onFlow={setScreen} />;
}
