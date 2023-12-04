import Navbar from "./Navbar";
import Footer from "./Footer"
function About() {
    return (
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar></Navbar>
        <main className="flex-grow w-[600px] max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-8">About Us</h2>
          <p className="text-lg mb-4">
            Welcome to Our Website! We are a team of passionate individuals dedicated to providing a platform for social interaction and collaboration. Our mission is to create a space where people can connect, hangout, attend meetups, chat, and create groups based on shared interests.
          </p>
          <p className="text-lg mb-4">
            Whether you are looking to make new friends, find like-minded individuals, or simply explore new opportunities, Our Website is the place for you. Join us on this exciting journey as we build a community that values connection and shared experiences.
          </p>
          <p className="text-lg">
            Thank you for being a part of our community!
          </p>
        </main>
        <Footer></Footer>
      </div>
    );
  }

export default About;