<main class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
    <section class="max-w-4xl w-full text-center">
      <div class="mb-12">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">John Doe</h1>
        <p class="text-lg md:text-xl font-light">Full Stack Developer | Open Source Contributor</p>
      </div>
      <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
        <a href="#about" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg transition">About Me</a>
        <a href="#projects" class="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-lg transition">Projects</a>
        <a href="#contact" class="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-lg transition">Contact</a>
      </div>
    </section>
  </main>
  
  <section id="about" class="bg-gray-800 py-12">
    <div class="max-w-4xl mx-auto p-6">
      <h2 class="text-3xl font-bold mb-4">About Me</h2>
      <p class="text-lg leading-relaxed">
        I am a passionate full stack developer with experience in building web applications using modern technologies.
        My expertise includes JavaScript, TypeScript, Svelte, and more. I enjoy contributing to open source projects and
        staying up-to-date with the latest industry trends.
      </p>
    </div>
  </section>
  
  <section id="projects" class="bg-gray-700 py-12">
    <div class="max-w-4xl mx-auto p-6">
      <h2 class="text-3xl font-bold mb-4">Projects</h2>
      <ul class="space-y-4">
        <li class="bg-gray-800 p-4 rounded-lg">
          <h3 class="text-xl font-semibold">Project One</h3>
          <p class="text-lg leading-relaxed">
            Description of the first project. Highlight the key features and technologies used.
          </p>
        </li>
        <li class="bg-gray-800 p-4 rounded-lg">
          <h3 class="text-xl font-semibold">Project Two</h3>
          <p class="text-lg leading-relaxed">
            Description of the second project. Highlight the key features and technologies used.
          </p>
        </li>
        <!-- Add more projects as needed -->
      </ul>
    </div>
  </section>
  
  <section id="contact" class="bg-gray-600 py-12">
    <div class="max-w-4xl mx-auto p-6">
      <h2 class="text-3xl font-bold mb-4">Contact</h2>
      <form class="space-y-4">
        <div>
          <label for="name" class="block text-lg font-medium">Name</label>
          <input type="text" id="name" class="w-full px-4 py-2 bg-gray-800 rounded-lg" />
        </div>
        <div>
          <label for="email" class="block text-lg font-medium">Email</label>
          <input type="email" id="email" class="w-full px-4 py-2 bg-gray-800 rounded-lg" />
        </div>
        <div>
          <label for="message" class="block text-lg font-medium">Message</label>
          <textarea id="message" class="w-full px-4 py-2 bg-gray-800 rounded-lg" rows="5"></textarea>
        </div>
        <button type="submit" class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg transition">Send</button>
      </form>
    </div>
  </section>