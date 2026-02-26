import Navbar from "@/modules/Navbar/Navbar";
// import Welcome from "@/modules/Welcome/Welcome";
import Dock from "@/modules/Dock/Dock";

import { Terminal } from "@/windows";

function index() {
  return (
    <main>
      <Navbar />
      {/* <Welcome /> */}
      <Dock />

      <Terminal />
    </main>
  );
}

export default index;
