import { useEffect, useState } from "react";

const OurChefs = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        [
            fetch('/public/chef.json')
                .then(res => res.json())
                .then(data => setChefs(data))
        ]
    }, [])

    return (
        <div>
            <div data-aos="fade-up">
                <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl  text-center mb-5 lg:mb-10 mt-5 lg:mt-10 w-3/4 mx-auto">Our Best Chefs</h2>
                <p className="text-lg px-3 md:w-3/4 mx-auto text-center mb-10 md:mt-10   mt-3">Remember The Test</p>
            </div>
            {/* card 1 */}
            <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    chefs.map(chef =>
                        <div key={chef.id}>

                            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                                <img src={chef.chef_image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-semibold tracking-wide">{chef.chef_name}</h2>
                                        <p className="dark:text-gray-800">Designation : {chef.designation}</p>
                                        <p className="dark:text-gray-800">Experience : {chef.experience}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )
                }
            </div>



        </div>
    );
};

export default OurChefs;