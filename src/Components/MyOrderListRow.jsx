import PropTypes from 'prop-types';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyOrderListRow = ({myNewOrderList,setMyNewOrderList, myOrder}) => {
    const { food_photo, purchase_iteam, iteam_price, _id , purchase_date , owner_name } = myOrder;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/my-purchases/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            // console.log(myNewOrderList);
                            const remain = myNewOrderList.filter(art => art._id !== _id)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Craft has been deleted.",
                                icon: "success"
                            });
                            setMyNewOrderList(remain)

                        }
                    })
            }
        });

    }

    return (
        <tr>
        <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={food_photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </div>
        </td>
        <td>
            {purchase_iteam}
        </td>
        <td>{iteam_price}</td>
        <td>{purchase_date}</td>
        <td>{owner_name}</td>
        <td>
            <Link to={`/update/${_id}`}>
                <button >
                    <CiEdit className='h-6 w-6'></CiEdit>
                </button>
            </Link>
        </td>
        <td>
            <button onClick={() => handleDelete(_id)}>
                <MdDeleteForever className='h-6 w-6'></MdDeleteForever>
            </button>
        </td>

    </tr>
    );
};
MyOrderListRow.propTypes = {
    myOrder: PropTypes.object.isRequired,
    myNewOrderList: PropTypes.array.isRequired,
    setMyNewOrderList: PropTypes.func.isRequired
}
export default MyOrderListRow;