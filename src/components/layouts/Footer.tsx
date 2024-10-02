import { Facebook, Twitter, Instagram, Github } from "lucide-react"
const Footer = () => {
  return (
    <footer className="bg-background border-t text-[#1D3557]">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <a href="/" className="flex items-center">
              <span className="sr-only">Your Company</span>
              <svg
                className="h-8 w-auto"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
              <span className="ml-2 text-xl font-bold">Logo</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
            Where football history meets modern fashion..
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4">
            <div>
              <h3 className="font-semibold">Product</h3>
              <nav className="mt-4">
                <ul className="space-y-2">
                  {["Features", "Integrations", "Pricing", "FAQ"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold">Company</h3>
              <nav className="mt-4">
                <ul className="space-y-2">
                  {["About", "Blog", "Jobs", "Press"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold">Legal</h3>
              <nav className="mt-4">
                <ul className="space-y-2">
                  {["Privacy", "Terms", "Cookie Policy"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold">Connect</h3>
              <nav className="mt-4">
                <ul className="space-y-2">
                  {["Twitter", "Facebook", "Instagram", "GitHub"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col-reverse sm:flex-row justify-between items-center">
          <p className="mt-4 sm:mt-0 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} lrhali.dev All rights reserved.
          </p>
          <div className="flex space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer