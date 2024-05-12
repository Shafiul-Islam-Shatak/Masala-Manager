import PropTypes from 'prop-types';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';


const MyFoodTableRow = ({ myFood ,myNewfoods , setMyNewFoods }) => {
    const { image, food_name, price, _id } = myFood;

    const handleDelete = (_id) => {
        console.log(_id);
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
                fetch(`${import.meta.env.VITE_API_URL}/my-foods/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            console.log(myNewfoods);
                            const remain = myNewfoods.filter(art => art._id !== _id)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Craft has been deleted.",
                                icon: "success"
                            });
                            setMyNewFoods(remain)

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
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {food_name}
            </td>
            <td>{price}</td>
            <td>
                <button>
                    <CiEdit className='h-6 w-6'></CiEdit>
                </button>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)}>
                    <MdDeleteForever className='h-6 w-6'></MdDeleteForever>
                </button>
            </td>
        </tr>
    );
};
MyFoodTableRow.propTypes = {
    myFood: PropTypes.object.isRequired,
    myNewfoods :PropTypes.array.isRequired,
    setMyNewFoods :PropTypes.array.isRequired
}

export default MyFoodTableRow;