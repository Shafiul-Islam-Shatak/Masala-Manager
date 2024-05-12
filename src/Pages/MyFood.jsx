import { useLoaderData } from "react-router-dom";
import MyFoodTableRow from "../Components/MyFoodTableRow";

const MyFood = () => {
    const myFoods = useLoaderData();
    console.log(myFoods);

    return (
        <div className="w-3/4 mx-auto">
            <div className="">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr >
                            <th>Image</th>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                        myFoods.map(myFood => <MyFoodTableRow
                        key={myFood._id}
                        myFood ={myFood}
                        ></MyFoodTableRow>)
                     }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFood;