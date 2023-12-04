function Footer() {
    return (
        <footer className=" w-full bg-gray-800 text-white py-4">
            <div className="max-w-7xl mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Your Website. All Rights Reserved.</p>
                <div className="mt-2">
                <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
                <span className="text-gray-400 mx-2">|</span>
                <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;