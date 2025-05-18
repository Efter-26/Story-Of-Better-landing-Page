"use client";
import Image from "next/image";
import Link from "next/link";

export default function VisitUs() {
  return (
    <section className="w-full py-12 bg-teal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">

        
        <div>
          <h2 className="text-4xl font-bold text-yellow-600 mb-6">Visit Our Website</h2>
          <Link href="https://betteremart.com/" target="_blank">
            <Image
              src="/images/better.png"
              alt="Visit Our Website"
              width={700}
              height={400}
              className="rounded-xl shadow-lg mx-auto cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
            />
          </Link>
        </div>

        
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-6 gap-x-20">

          
          <Link href="https://www.facebook.com/profile.php?id=61563618074835" target="_blank">
            <div className="bg-blue-100 hover:bg-blue-200 p-6 rounded-lg shadow-md w-72 text-center transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              <Image
                src="/images/icons/facebook-logo.png"
                alt="Facebook"
                width={40}
                height={40}
                className="mx-auto mb-2"
              />
              <p className="text-lg font-semibold text-gray-800">Follow us on Facebook</p>
            </div>
          </Link>

          
          <Link href="https://www.instagram.com/better_e_mart/?igsh=dGk0bXU2dzFwZ2Q3#" target="_blank">
            <div className="bg-pink-100 hover:bg-pink-200 p-6 rounded-lg shadow-md w-72 text-center transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              <Image
                src="/images/icons/instagram-logo.png"
                alt="Instagram"
                width={40}
                height={40}
                className="mx-auto mb-2"
              />
              <p className="text-lg font-semibold text-gray-800">Follow us on Instagram</p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
