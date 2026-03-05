import Navbar from "@/modules/Navbar/Navbar";
import Welcome from "@/modules/Welcome/Welcome";
import Dock from "@/modules/Dock/Dock";
import Home from "@/modules/Home/Home";

import {
  Terminal,
  Safari,
  Resume,
  Finder,
  Text,
  Image,
  Contact,
} from "@/windows";

function index() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />

      <Home />
    </main>
  );
}

export default index;
