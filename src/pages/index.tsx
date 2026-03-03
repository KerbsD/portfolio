import Navbar from "@/modules/Navbar/Navbar";
// import Welcome from "@/modules/Welcome/Welcome";
import Dock from "@/modules/Dock/Dock";

import { Terminal, Safari, Resume } from "@/windows";

function index() {
  return (
    <main>
      <Navbar />
      {/* <Welcome /> */}
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
    </main>
  );
}

export default index;
