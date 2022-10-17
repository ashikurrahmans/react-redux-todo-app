import Filters from "./Components/Filters";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

function App() {
  return (
    <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Header />
      <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Filters />
        <hr class="mt-4" />
        <Tasks></Tasks>
        <hr class="mt-4" />
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
