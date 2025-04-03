import Link from "next/link"
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-navy-950 border-t border-gray-200 dark:border-navy-800 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-navy-900 dark:text-white">
              CIKAFU
            </Link>
            <p className="mt-4 text-navy-800 dark:text-navy-300">
              A modern and responsive blogging website template with a clean design and user-friendly interface.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-navy-900 dark:text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/development"
                  className="text-navy-800 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white transition-colors"
                >
                  Development
                </Link>
              </li>
              <li>
                <Link
                  href="/category/design"
                  className="text-navy-800 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white transition-colors"
                >
                  Design
                </Link>
              </li>
              <li>
                <Link
                  href="/category/technology"
                  className="text-navy-800 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/category/accessibility"
                  className="text-navy-800 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white transition-colors"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-navy-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-navy-600 hover:text-navy-800 dark:text-navy-300 dark:hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-navy-600 hover:text-navy-800 dark:text-navy-300 dark:hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-navy-600 hover:text-navy-800 dark:text-navy-300 dark:hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-navy-600 hover:text-navy-800 dark:text-navy-300 dark:hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-navy-800 dark:text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-navy-600 dark:text-navy-300">
                <Mail className="h-4 w-4 mr-2" />
                contact@CIKAFU.com
              </li>
              <li className="flex items-center text-navy-600 dark:text-navy-300">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-navy-600 dark:text-navy-300">
                <MapPin className="h-4 w-4 mr-2" />
                123 Blog Street, Content City
              </li>
            </ul>

            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-navy-600 hover:text-navy-800 dark:text-navy-300 dark:hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="#"
                className="text-navy-600 hover:text-navy-800 dark:text-navy-300 dark:hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-navy-600 hover:text-navy-800 dark:text-navy-300 dark:hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-navy-600 hover:text-navy-800 dark:text-navy-300 dark:hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-navy-800 mt-8 pt-8 text-center text-navy-600 dark:text-navy-300">
          <p>&copy; {currentYear} CIKAFU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

