import useAuth from "../../../hooks/useAuth";

const DeshboardHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <div>
                <img className="w-52 h-52" src={user?.photoURL} alt="" />
            </div>
        </div>
    );
};

export default DeshboardHome;