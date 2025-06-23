<template>
  <!-- Hero Section -->
  <section class="mx-auto max-w-6xl px-6 py-16">
    <div class="grid items-center gap-12 md:grid-cols-2">
      <div class="order-2 md:order-1">
        <div class="animate-hidden animate-scale-in delay-100">
          <img
            src="@/assets/images/IMG_2275.jpeg"
            alt="Nathaniel Tabanao"
            class="mx-auto w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </div>
      <div class="order-1 md:order-2">
        <h1
          class="animate-hidden animate-fade-in-right mb-6 text-5xl font-bold text-gray-900 delay-100"
        >
          I'm Nate
        </h1>
        <p class="animate-hidden animate-fade-in-right mb-8 text-xl text-gray-600 delay-200">
          I am a manager, developer and designer
        </p>

        <div class="prose prose-lg text-gray-700">
          <p class="animate-hidden animate-fade-in-up mb-6 delay-400">
            I'm a results-oriented IT leader who bridges the gap between technical innovation and
            business impact. Currently, I work as a Software Engineer at Skandinavisk Logistik A/S,
            where I design user-centered experiences and develop enterprise solutions that make
            complex logistics operations seamless.
          </p>

          <p class="animate-hidden animate-fade-in-up mb-6 delay-500">
            My journey into tech wasn't traditional—I started as an ESL teacher, which taught me how
            to break down complex concepts and communicate clearly. This background gives me a
            unique perspective on user experience and helps me create solutions that people actually
            want to use.
          </p>

          <p class="animate-hidden animate-fade-in-up delay-600">
            What drives me is the intersection of design thinking and technical problem-solving. I
            love taking messy, real-world business challenges and crafting elegant solutions that
            work beautifully for both users and systems.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Three Column Section -->
  <section class="bg-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid gap-12 md:grid-cols-3">
        <!-- Work History -->
        <div>
          <h2 class="mb-6 text-2xl font-bold text-gray-900">Work History</h2>
          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="font-semibold text-gray-900">Software Engineer</h3>
              <p class="text-sm text-blue-600">Skandinavisk Logistik A/S</p>
              <p class="text-sm text-gray-500">April 2021 - Present</p>
              <p class="mt-2 text-sm text-gray-600">
                Leading UX design and full-stack development for enterprise logistics solutions.
                Improved user satisfaction across 10+ projects and enhanced developer productivity
                by 15%.
              </p>
            </div>

            <div class="border-l-4 border-green-500 pl-4">
              <h3 class="font-semibold text-gray-900">Product Manager</h3>
              <p class="text-sm text-green-600">DNA Micro Software Inc.</p>
              <p class="text-sm text-gray-500">April 2019 - April 2021</p>
              <p class="mt-2 text-sm text-gray-600">
                Led planning and delivery of 4 major projects. Defined product vision, created user
                journey maps, and collaborated with development teams to ensure on-time delivery.
              </p>
            </div>

            <div class="border-l-4 border-purple-500 pl-4">
              <h3 class="font-semibold text-gray-900">ESL Teacher</h3>
              <p class="text-sm text-purple-600">Golden Great Peak English Inc.</p>
              <p class="text-sm text-gray-500">November 2016 - April 2018</p>
              <p class="mt-2 text-sm text-gray-600">
                Developed communication skills and learned to break down complex concepts for
                diverse learning styles—skills that directly translate to UX design.
              </p>
            </div>
          </div>
        </div>

        <!-- Skills & Technologies -->
        <div>
          <h2 class="mb-6 text-2xl font-bold text-gray-900">Skills & Technologies</h2>

          <div class="mb-6">
            <h3 class="mb-3 font-semibold text-gray-800">Frontend Development</h3>
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">Vue.js</span>
              <span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">React.js</span>
              <span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">HTML/CSS</span>
              <span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
                >JavaScript</span
              >
            </div>
          </div>

          <div class="mb-6">
            <h3 class="mb-3 font-semibold text-gray-800">Backend Development</h3>
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800"
                >C# .NET</span
              >
              <span class="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800"
                >Node.js</span
              >
              <span class="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800"
                >SQL Server</span
              >
              <span class="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800"
                >ASP.NET</span
              >
            </div>
          </div>

          <div class="mb-6">
            <h3 class="mb-3 font-semibold text-gray-800">Design & UX</h3>
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800"
                >Adobe XD</span
              >
              <span class="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800"
                >Figma</span
              >
              <span class="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800"
                >Wireframing</span
              >
              <span class="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800"
                >User Journey Mapping</span
              >
            </div>
          </div>

          <div class="mb-6">
            <h3 class="mb-3 font-semibold text-gray-800">Project Management</h3>
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-800"
                >Agile</span
              >
              <span class="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-800">JIRA</span>
              <span class="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-800"
                >Azure DevOps</span
              >
              <span class="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-800"
                >Product Strategy</span
              >
            </div>
          </div>
        </div>

        <!-- Background -->
        <div>
          <h2 class="mb-6 text-2xl font-bold text-gray-900">Background</h2>

          <div class="space-y-6">
            <div>
              <h3 class="mb-2 font-semibold text-gray-800">Education</h3>
              <p class="text-sm text-gray-600">
                <strong>Bachelor of Science in Information Technology</strong><br />
                Asian College of Technology - IEF (2019)
              </p>
            </div>

            <div>
              <h3 class="mb-2 font-semibold text-gray-800">What I Bring</h3>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-start">
                  <span class="mr-2 text-blue-500">•</span>
                  <span>Full-stack perspective with strong UX focus</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-blue-500">•</span>
                  <span>Product management experience with technical depth</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-blue-500">•</span>
                  <span>Cross-cultural communication skills</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-blue-500">•</span>
                  <span>Proven track record in international teams</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="mb-2 font-semibold text-gray-800">Beyond Work</h3>
              <p class="text-sm text-gray-600">
                When I'm not coding or designing, I enjoy exploring new technologies and
                methodologies that can improve both user experience and developer productivity. I'm
                particularly interested in how design systems can scale across large organizations.
              </p>
            </div>

            <div>
              <h3 class="mb-2 font-semibold text-gray-800">Let's Connect</h3>
              <p class="text-sm text-gray-600">
                I'm always interested in discussing challenging projects, UX innovation, or
                opportunities to create solutions that make a real impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <AppCallToAction />
</template>

<style scoped>
  /* Animation keyframes */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Animation classes */
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-fade-in-left {
    animation: fadeInLeft 0.8s ease-out forwards;
  }

  .animate-fade-in-right {
    animation: fadeInRight 0.8s ease-out forwards;
  }

  .animate-scale-in {
    animation: scaleIn 1s ease-out forwards;
  }

  .animate-slide-in-down {
    animation: slideInDown 0.6s ease-out forwards;
  }

  /* Initial hidden state */
  .animate-hidden {
    opacity: 0;
  }

  /* Staggered animation delays */
  .delay-100 {
    animation-delay: 0.1s;
  }
  .delay-200 {
    animation-delay: 0.2s;
  }
  .delay-300 {
    animation-delay: 0.3s;
  }
  .delay-400 {
    animation-delay: 0.4s;
  }
  .delay-500 {
    animation-delay: 0.5s;
  }
  .delay-600 {
    animation-delay: 0.6s;
  }
  .delay-700 {
    animation-delay: 0.7s;
  }

  /* Smooth transitions for hover effects */
  .transition-all {
    transition: all 0.3s ease;
  }

  .hover-lift:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  /* Subtle background animation */
  .bg-gradient-animated {
    background: linear-gradient(-45deg, #f8fafc, #f1f5f9, #e2e8f0, #f8fafc);
    background-size: 400% 400%;
    animation: gradientShift 10s ease infinite;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
