import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams() 
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)


    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast('You Have Applied successfully')
    }

    return (
        <div>
            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details Coming here</h2>
                    <h2>Job Details of:  {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side Things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary">Apply Now</button>
                </div>

            </div>
            <ToastContainer />

        </div>
    );
};

export default JobDetails;