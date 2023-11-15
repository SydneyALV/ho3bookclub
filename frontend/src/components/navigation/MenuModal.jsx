import { Link } from 'react-router-dom'

const MenuModal = ({ onClose }) => {

    return (
        <div
            className="fixed bg-black bg-opacity-60 top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center"
            onClick={onClose}
        >
            <div

                onClick={(event) => event.stopPropagation()}
                className="flex flex-col text-3xl p-10 space-y-10 bg-red-400 rounded-lg">
                <Link to="/users/profile">Profile</Link>
                <Link to="/">Dashboard</Link>
                <Link to="/lists">Book Lists</Link>
                <Link to="/discussions">Discussion Boards</Link>
                <Link to="/members">Members</Link>
            </div>
        </div>
    )
}

export default MenuModal