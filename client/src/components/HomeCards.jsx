import Card from "./Card"
import { NavLink } from "react-router-dom"

const HomeCards = () => {
  return (
    <>
    <section className="py-4">
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                <Card bg_color='bg-gray-1 00'>
                    <h2 className="text-2xl font-bold">For Developers</h2>
                    <p className="mt-2 mb-4">
                        Browse our React jobs and start your career today
                    </p>
                    <NavLink
                        to="/jobs"
                        className="inline-block bg-[#fe2712] text-white rounded-lg px-4 py-2 hover:bg-[#f08080]"
                    >
                        Browse Jobs
                    </NavLink>
                </Card>
                <Card bg_color="bg-indigo-100">
                    <h2 className="text-2xl font-bold">For Employers</h2>
                    <p className="mt-2 mb-4">
                        List your job to find the perfect developer for the role
                    </p>
                    <NavLink
                        to="/add-job"
                        className="inline-block bg-[#fe2712] text-white rounded-lg px-4 py-2 hover:bg-[#f08080]"
                    >
                        Add Job
                    </NavLink>
                </Card>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeCards