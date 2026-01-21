import React, { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from "lucide-react";

export default function RealEstateWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const projects = [
    {
      id: 1,
      name: "Luxury Apartments Downtown",
      location: "Downtown District",
      price: "$500K - $2.5M",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a9f4ef4e8?w=500&h=300&fit=crop",
      description: "Modern luxury apartments with premium finishes",
    },
    {
      id: 2,
      name: "Beachfront Villas",
      location: "Coastal Area",
      price: "$1.2M - $3.8M",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=300&fit=crop",
      description: "Exclusive beachfront properties with ocean views",
    },
    {
      id: 3,
      name: "Modern Family Homes",
      location: "Suburban Community",
      price: "$350K - $750K",
      image:
        "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=500&h=300&fit=crop",
      description: "Contemporary homes perfect for families",
    },
    {
      id: 4,
      name: "Commercial Office Space",
      location: "Business District",
      price: "$200K - $1.5M",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      description: "Premium office spaces with modern amenities",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">EstateHub</div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </a>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <a href="#home" className="block px-4 py-2 hover:bg-gray-100">
              Home
            </a>
            <a href="#about" className="block px-4 py-2 hover:bg-gray-100">
              About
            </a>
            <a href="#projects" className="block px-4 py-2 hover:bg-gray-100">
              Projects
            </a>
            <a href="#contact" className="block px-4 py-2 hover:bg-gray-100">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Your Dream Property Awaits
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Premium real estate solutions for every lifestyle
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Explore Properties
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">About Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="Owner"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Meet John Mitchell
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With over 15 years of experience in real estate development and
              sales, John Mitchell has established himself as a trusted name in
              the industry. His passion for connecting people with their perfect
              properties is unmatched.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              John specializes in luxury residential properties, commercial
              spaces, and investment opportunities across multiple regions. His
              client-first approach has earned him numerous awards and a loyal
              customer base.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong>Specialization:</strong> Luxury & Commercial Real Estate
              </p>
              <p className="text-gray-700">
                <strong>Experience:</strong> 15+ Years
              </p>
              <p className="text-gray-700">
                <strong>Properties Sold:</strong> 500+
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {project.location}
                  </p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">
                      {project.price}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center transition">
                      Learn More <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Phone
              </h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Email
              </h3>
              <p className="text-gray-600">john@estatehub.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Address
              </h3>
              <p className="text-gray-600">123 Main St, City, State 12345</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8 mt-12 max-w-2xl mx-auto">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              ></textarea>
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>
            &copy; 2024 EstateHub. All rights reserved. | Premium Real Estate
            Solutions
          </p>
        </div>
      </footer>
    </div>
  );
}
