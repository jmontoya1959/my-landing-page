// pages/index.tsx
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jacob Montoya | Front-End Developer</title>
        <meta name="description" content="Portfolio and Resume of Jacob Montoya" />
      </Head>
      
      <main className= "min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-6 py-12 ">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">👋 Hi, I&apos;m Jacob Montoya</h1>
          <p className="text-xl">Front-End Developer | JavaScript, React, Tailwind CSS</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🧰 Skills & Tools</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>HTML, CSS, JavaScript, React, Next.js</li>
            <li>Tailwind CSS, Sass, Axios</li>
            <li>Git & GitHub, Supabase, Chart.js</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">💼 Projects</h2>
          <ul className="space-y-4">
            <li>
              <strong>Analytics Dashboard</strong> – Interactive charts using Chart.js & Recharts with dark mode toggle.
            </li>
            <li>
              <strong>Recipe Finder</strong> – Recipe search app using Spoonacular API with favorites stored in localStorage and optimized images with Next.js.
            </li>
            <li>
              <strong>Board Game Collection App</strong> – A CRUD app using Next.js and Tailwind that lets users manage a personal game library.
            </li>
            <li>
              <strong>Ecommerce page</strong> – Product detail page with shopping cart and payment flow built with Next.js and Tailwind CSS. Focused on responsive design, usability, and performance optimization.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">📄 Resume</h2>
          <a href="/Resume.docx" className="text-blue-500 underline" download>
            Download PDF
          </a>
        </section>
       
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">📬 Contact Me</h2>
             <form className="space-y-4 max-w-md" action="https://formspree.io/f/xeogbvrj" method="POST">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border rounded bg-gray-800 text-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border rounded bg-gray-800 text-white"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border rounded bg-gray-800 text-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                >
                 Send Message
                </button>
              </form>
          </section>
      </main>

      <footer className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Jacob Montoya. Built with Next.js & Tailwind CSS.</p>
        <div className="mt-2 space-x-4">
          <a
            href="https://github.com/jmontoya1959"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="/resume.docx"
            className="hover:text-white"
          >
            Resume
          </a>
        </div>
      </footer>
    </>
  )
}
