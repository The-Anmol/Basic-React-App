import { Suspense,lazy } from "react"
import { Routes, Route } from "react-router-dom"
import Loader from "./Components/UI/Loader"; 
import general from "./utils/routes";
import ErrorPage from "./Components/Error/ErrorPage";

const Home = lazy(() => import("./Screens/Home/Home")); 

export default function Router() {
  return (
    <Suspense fallback={<Loader fullscreen={true} />} >
      <Routes>
        <Route path={general.index} element={<Home/>} />
        <Route path={general.notFound} element={<ErrorPage />} />
      </Routes>
    </Suspense>
  )
}