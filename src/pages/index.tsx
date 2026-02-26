import Navbar from "@/modules/Navbar/Navbar";
// import Welcome from "@/modules/Welcome/Welcome";
import Dock from "@/modules/Dock/Dock";

function index() {
  return (
    <main>
      <Navbar />
      {/* <Welcome /> */}
      <Dock />
    </main>
  );
}

export default index;
