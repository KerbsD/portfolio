import Navbar from "@/modules/Navbar/Navbar";
import Welcome from "@/modules/Welcome/Welcome";
import Dock from "@/modules/Dock/Dock";
import Home from "@/modules/Home/Home";
import LoadingScreen from "@/components/loading/LoadingScreen";

import {
  Terminal,
  Safari,
  Resume,
  Finder,
  Text,
  ImageViewer,
  Contact,
} from "@/windows";

function index() {
  return (
    <main>
      <LoadingScreen />
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <ImageViewer />
      <Contact />
      <Text />
      <Home />
    </main>
  );
}

export default index;
