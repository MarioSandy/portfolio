const Navbar = () => {
    return (
        <div className="flex px-10 py-8">
            <p className="text-white text-2xl mr-auto">M</p>
            <div className="flex gap-5">
                <p className="text-white text-lg">Home</p>
                <p className="text-white text-lg">Projects</p>
                <p className="text-white text-lg">Profile</p>
                <p className="text-white text-lg">Contact</p>
            </div>
        </div>
    )
}

export default Navbar;