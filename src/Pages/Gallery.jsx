
const Gallery = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151431678.jpg?t=st=1715510852~exp=1715514452~hmac=43587f936343406381eac567bf4e46602240dc08774108600d4b7d07237a79a7&w=900)' }}>
            <div className="hero-overlay bg-opacity-60" > </div>
            <div className="w-3/4">
                {/* card */}
                <div className="relative group flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-md group-hover:opacity-90">
                        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Nike Revolt" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white font-semibold">Nike Revolt</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Gallery;