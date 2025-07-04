export default function Footer() {
  return (
    <footer className="mx-auto mt-10 w-4/5 py-6 text-[#5C5A5A]">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} FitnessPro. All rights reserved.
        </p>
        <div className="mt-4 flex gap-4 md:mt-0">
          <a href="#" className="transition duration-200 hover:text-white">
            Privacy
          </a>
          <a href="#" className="transition duration-200 hover:text-white">
            Terms
          </a>
          <a href="#" className="transition duration-200 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
