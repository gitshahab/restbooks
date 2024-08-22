import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

export const App = () => {
  return (
    <div>
        <Header />
        <AllRoutes />
        <Footer />
    </div>
  )
}
