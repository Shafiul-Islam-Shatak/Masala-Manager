import { useLoaderData } from "react-router-dom";
import MyFoodTableRow from "../Components/MyFoodTableRow";
import { useState } from "react";

const MyFood = () => {
    const myFoods = useLoaderData();
    const [myNewfoods , setMyNewFoods] = useState(myFoods)

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
                        myNewfoods.map(myFood => <MyFoodTableRow
                        key={myFood._id}
                        myFood ={myFood}
                        myNewfoods = {myNewfoods}
                        setMyNewFoods = {setMyNewFoods}
                        ></MyFoodTableRow>)
                     }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFood;