import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyOrderListRow from "../Components/MyOrderListRow";
import { Helmet } from "react-helmet-async";

const MyOrderList = () => {
    const myOrder = useLoaderData()
    const [myNewOrderList, setMyNewOrderList] = useState(myOrder)
    return (
        <div className="w-3/4 mx-auto">
             <Helmet>
                <title>
                    Masala Manager | Orders
                </title>
            </Helmet>
            <div className="">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr >
                            <th>Image</th>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th>Order Date</th>
                            <th>Owner Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myNewOrderList.map(myOrder => <MyOrderListRow
                                key={myOrder._id}
                                myOrder={myOrder}
                                myNewOrderList={myNewOrderList}
                                setMyNewOrderList={setMyNewOrderList}
                            ></MyOrderListRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrderList;