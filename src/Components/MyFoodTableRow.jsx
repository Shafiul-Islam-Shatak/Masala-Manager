import PropTypes from 'prop-types';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";


const MyFoodTableRow = ({ myFood }) => {
    const { image, food_name, price } = myFood
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
                <button>
                <MdDeleteForever  className='h-6 w-6'></MdDeleteForever>
                </button>
            </td>
        </tr>
    );
};
MyFoodTableRow.propTypes = {
    myFood: PropTypes.object.isRequired
}

export default MyFoodTableRow;