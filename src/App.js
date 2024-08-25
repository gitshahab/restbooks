import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

export const App = () => {
  return (
    <div className="dark:bg-dark-bg">
        <Header />
        <AllRoutes />
        <Footer />
    </div>
  )
}
