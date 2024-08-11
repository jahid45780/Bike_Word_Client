import { HeroHighlightDemo } from "./Hero";


const About = () => {
    return (
        <div>

        {/* <img className=" w-full h-96" src="https://i.ibb.co/kJ4bZL1/Green-and-White-Nature-Thank-You-Facebook-cover.png" alt="" /> */}


       <HeroHighlightDemo/>


       <main className="container mx-auto px-4 py-16">
        <section className="bg-white p-8  rounded-lg shadow-2xl shadow-orange-500 hover:bg-orange-300 hover:border-2 border-orange-800 border-dashed ">
          <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
          <p className="mb-4">Welcome to Bike Word We are dedicated to providing the best services to our customers. Our team is passionate and experienced in what we do.</p>
          <p className="mb-4">Our mission is to deliver high-quality products that meet the needs and exceed the expectations of our clients. We believe in innovation, integrity, and customer satisfaction.</p>
          <p>Contact us to learn more about our services and how we can help you achieve your goals.</p>
        </section>

        <section className="mt-16">
          <h3 className=" font-bold text-center text-4xl mb-4">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-4 shadow-2xl shadow-orange-500  rounded-s-[120px]  hover:bg-orange-300 hover:border-2 border-orange-800 border-dashed ">
              <img  src="https://i.ibb.co/XCLZwF5/IMG-20240713-192618-removebg-preview.png" alt="Team Member 1" className="w-full h-72 rounded-full"/>
              <div className="p-4">

                <p className="text-gray-600 font-bold text-lg text-center"> Md Jahid </p>
                <p className="text-gray-600 font-bold text-lg text-center"> Bike Word  </p>
                <p className="text-gray-600 font-bold text-lg text-center"> Chief Executive Officer (CEO) </p>
              </div>
            </div>
            <div className="bg-white p-4 shadow-2xl shadow-orange-500  rounded-s-[120px]  hover:bg-orange-300 hover:border-2 border-orange-800 border-dashed ">
              <img  src="https://i.ibb.co/NrGZtkm/hardy.png" alt="Team Member 1" className="w-full h-72 rounded-full"/>
              <div className="p-4">

                <p className="text-gray-600 font-bold text-lg text-center"> Jonos David </p>
                <p className="text-gray-600 font-bold text-lg text-center"> Bike Word  </p>
                <p className="text-gray-600 font-bold text-lg text-center"> Chief Product Officer (CPO) </p>
              </div>
            </div>
         
            <div className="bg-white p-4 shadow-2xl shadow-orange-500  rounded-s-[120px]  hover:bg-orange-300 hover:border-2 border-orange-800 border-dashed ">
              <img  src="https://i.ibb.co/9V15dbv/side-view-woman-working-indoors.jpg" alt="Team Member 1" className="w-full h-72 rounded-full"/>
              <div className="p-4">

                <p className="text-gray-600 font-bold text-lg text-center"> Mariya Tomas </p>
                <p className="text-gray-600 font-bold text-lg text-center"> Bike Word  </p>
                <p className="text-gray-600 font-bold text-lg text-center"> Advisor </p>
              </div>
            </div>
          </div>
        </section>
      </main>
            
        </div>
    );
};

export default About;
