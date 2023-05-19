import { Link } from "react-router-dom"
import general from "../../utils/routes"

export default function ErrorPage({ error }) {
    return (
        <>
            <div className="gradient text-white min-h-screen flex items-center">
                <div className="container mx-auto p-4 flex flex-wrap items-center">
                    <div className="w-full  w-fit mx-auto flex flex-col items-center text-center md:text-left p-4">
                        {!error && (<div className="text-6xl font-medium">404</div>)}
                        <div className="text-xl md:text-3xl font-medium mb-4">
                            Oops. Something went Wrong.
                        </div>
                        <div className="text-lg mb-8">
                            {error && error?.message}
                        </div>
                        <Link to={general.index} className="border border-white rounded p-4 px-6">Go Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
