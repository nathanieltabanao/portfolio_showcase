<template>
  <div>
    <!-- Hi, I'm Nate Section - Full Screen Hero -->
    <section class="relative flex min-h-screen flex-col justify-center">
      <div class="mx-auto flex max-w-4xl flex-grow flex-col justify-center px-6 text-center">
        <h1 class="animate-fade-in mb-8 text-6xl font-bold text-gray-900 lg:text-8xl">
          Hi, I'm Nate
        </h1>
        <div
          class="animate-fade-in-delay mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-gray-700 lg:text-xl"
        >
          <p>
            I'm a results-oriented IT leader with a proven track record in full-stack development,
            UX design, and product management. I specialize in bringing innovative ideas to life
            while ensuring solutions meet user needs and achieve business objectives.
          </p>
          <p>
            Currently working as a Full Stack Software Engineer , I've successfully designed
            user-centered experiences for over 10 projects, enhanced system quality, and improved
            developer productivity by 15% through strategic optimizations.
          </p>
        </div>
      </div>
    </section>

    <!-- Design & Development Section -->
    <section class="bg-black px-6 py-16">
      <div class="mx-auto max-w-7xl">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <!-- Left side - Content -->
          <div class="space-y-6">
            <h2 class="text-4xl leading-tight font-bold text-white lg:text-5xl">
              Design &<br />
              Development
            </h2>
            <p class="text-lg leading-relaxed text-gray-300">
              From wireframes to deployment, I craft end-to-end solutions using modern technologies
              like Vue.js, C# .NET, and Node.js. With expertise in Adobe XD and Figma, I ensure
              every interface is both beautiful and functional, turning complex requirements into
              intuitive user experiences.
            </p>
          </div>

          <!-- Right side - Laptop Image -->
          <div class="relative">
            <div class="rotate-1 transform rounded-lg bg-gray-800 p-4 shadow-2xl">
              <!-- Laptop mockup -->
              <div class="relative rounded-lg bg-gray-900 p-6">
                <!-- Screen -->
                <div class="relative aspect-video overflow-hidden rounded bg-gray-800">
                  <!-- Code editor simulation -->
                  <div class="absolute inset-0 p-4 font-mono text-xs">
                    <!-- VS Code-like interface -->
                    <div class="mb-3 flex items-center space-x-2 border-b border-gray-600 pb-2">
                      <div class="h-3 w-3 rounded-full bg-red-500"></div>
                      <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div class="h-3 w-3 rounded-full bg-green-500"></div>
                      <span class="ml-4 text-gray-400">main.js</span>
                    </div>

                    <!-- Code lines -->
                    <div class="space-y-1 text-gray-300">
                      <div class="flex">
                        <span class="w-6 text-gray-500">1</span>
                        <span class="text-purple-400">import</span>
                        <span class="ml-2 text-blue-400">{ createApp }</span>
                        <span class="ml-2 text-purple-400">from</span>
                        <span class="ml-2 text-green-400">'vue'</span>
                      </div>
                      <div class="flex">
                        <span class="w-6 text-gray-500">2</span>
                        <span class="text-purple-400">import</span>
                        <span class="ml-2 text-blue-400">App</span>
                        <span class="ml-2 text-purple-400">from</span>
                        <span class="ml-2 text-green-400">'./App.vue'</span>
                      </div>
                      <div class="flex">
                        <span class="w-6 text-gray-500">3</span>
                      </div>
                      <div class="flex">
                        <span class="w-6 text-gray-500">4</span>
                        <span class="text-blue-400">createApp</span>
                        <span class="text-white">(</span>
                        <span class="text-yellow-400">App</span>
                        <span class="text-white">)</span>
                      </div>
                      <div class="flex">
                        <span class="w-6 text-gray-500">5</span>
                        <span class="ml-4 text-white">.</span>
                        <span class="text-blue-400">mount</span>
                        <span class="text-white">(</span>
                        <span class="text-green-400">'#app'</span>
                        <span class="text-white">)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Keyboard -->
                <div class="relative mt-4 h-8 rounded-b-lg bg-gray-700">
                  <div class="absolute inset-x-0 top-1 mx-2 h-6 rounded bg-gray-600"></div>
                </div>
              </div>
            </div>

            <!-- Hand typing effect -->
            <div
              class="absolute -right-4 -bottom-4 h-16 w-20 rotate-12 transform rounded-full bg-gradient-to-br from-amber-100 to-amber-200 opacity-80"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product & Project Management Section -->
    <section class="px-6 py-16">
      <div class="mx-auto max-w-7xl">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <!-- Left side - Image -->
          <div class="relative">
            <div class="rotate-1 transform rounded-lg bg-white p-8 shadow-lg">
              <!-- Sketch mockup -->
              <div class="space-y-6">
                <!-- Header sketch -->
                <div class="rounded border-2 border-gray-300 p-3">
                  <div class="mb-2 text-xs text-gray-600">Hi-Fi Design</div>
                  <div class="mb-2 h-3 rounded bg-gray-200"></div>
                  <div class="h-3 w-3/4 rounded bg-gray-200"></div>
                </div>

                <!-- UI Day section -->
                <div class="rounded-lg border-2 border-purple-300 bg-purple-100 p-4">
                  <div class="mb-3 font-semibold text-green-600">UI</div>
                  <div class="text-sm text-green-600">Day</div>
                  <div class="mt-3 rounded border-2 border-purple-400 p-2">
                    <div
                      class="flex h-8 w-8 items-center justify-center rounded-full bg-purple-300"
                    >
                      <div class="h-4 w-4 rounded border-2 border-purple-600"></div>
                    </div>
                  </div>
                </div>

                <!-- Video Headline -->
                <div class="rounded border-2 border-gray-300 p-2">
                  <div class="text-xs text-gray-600">Video</div>
                  <div class="text-xs text-gray-600">Headline</div>
                </div>

                <!-- Description -->
                <div class="rounded border-2 border-gray-300 p-2">
                  <div class="text-xs text-gray-600">Description</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right side - Content -->
          <div class="space-y-6">
            <h2 class="text-4xl leading-tight font-bold text-gray-900 lg:text-5xl">
              Product &<br />
              Project<br />
              Management
            </h2>
            <p class="text-lg leading-relaxed text-gray-600">
              I excel at translating customer needs into actionable development plans and leading
              cross-functional teams to deliver successful outcomes. Having managed 4+ major
              projects from conception to completion, I bring strategic thinking and hands-on
              execution to every initiative.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Business IT Consultancy Section -->
    <section class="bg-black px-6 py-16">
      <div class="mx-auto max-w-7xl">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <!-- Left side - Content -->
          <div class="space-y-6">
            <h2 class="text-4xl leading-tight font-bold text-white lg:text-5xl">
              Business IT<br />
              Consultancy
            </h2>
            <p class="text-lg leading-relaxed text-gray-300">
              I help organizations bridge the gap between complex technical systems and real
              business outcomes. With 6+ years of experience in software engineering, product
              management, and UX design, I transform IT challenges into competitive advantages.
            </p>
            <p class="text-lg leading-relaxed text-gray-300">
              From strategic planning to full-stack development, I deliver end-to-end solutions that
              optimize business processes, integrate seamlessly with existing systems, and
              prioritize user experience. My proven track record includes 14+ successful projects
              with measurable results—like improving developer productivity by 15% and enhancing
              user satisfaction across enterprise solutions.
            </p>
          </div>

          <!-- Right side - Image -->
          <div class="relative">
            <div class="-rotate-1 transform rounded-lg bg-white p-6 shadow-2xl">
              <!-- Mobile app mockup -->
              <div class="space-y-4">
                <!-- App screens -->
                <div class="grid grid-cols-2 gap-3">
                  <!-- Screen 1 -->
                  <div class="h-32 rounded-lg border-2 border-blue-300 bg-blue-100 p-3">
                    <div class="space-y-2">
                      <div class="h-3 rounded bg-blue-300"></div>
                      <div class="h-2 w-3/4 rounded bg-blue-200"></div>
                      <div class="h-2 w-1/2 rounded bg-blue-200"></div>
                    </div>
                  </div>

                  <!-- Screen 2 - Purple -->
                  <div class="h-32 rounded-lg border-2 border-purple-400 bg-purple-200 p-3">
                    <div class="space-y-2">
                      <div class="mx-auto h-6 w-6 rounded-full bg-purple-400"></div>
                      <div class="h-2 rounded bg-purple-300"></div>
                      <div class="h-2 w-2/3 rounded bg-purple-300"></div>
                      <div class="mt-2 grid grid-cols-3 gap-1">
                        <div class="h-2 rounded bg-purple-400"></div>
                        <div class="h-2 rounded bg-purple-400"></div>
                        <div class="h-2 rounded bg-purple-400"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Additional screens row -->
                <div class="grid grid-cols-3 gap-2">
                  <div class="h-20 rounded border-2 border-green-300 bg-green-100 p-2">
                    <div class="mb-1 h-2 rounded bg-green-300"></div>
                    <div class="h-1 w-3/4 rounded bg-green-200"></div>
                  </div>
                  <div class="h-20 rounded border-2 border-yellow-300 bg-yellow-100 p-2">
                    <div class="mb-1 h-2 rounded bg-yellow-300"></div>
                    <div class="h-1 w-1/2 rounded bg-yellow-200"></div>
                  </div>
                  <div class="h-20 rounded border-2 border-red-300 bg-red-100 p-2">
                    <div class="mb-1 h-2 rounded bg-red-300"></div>
                    <div class="h-1 w-2/3 rounded bg-red-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  // Component logic can be added here if needed
</script>

<style scoped>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fadeIn 1s ease-out;
  }

  .animate-fade-in-delay {
    animation: fadeIn 1s ease-out 0.3s both;
  }
</style>
