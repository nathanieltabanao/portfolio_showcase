<template>
  <div class="flex min-h-screen flex-col bg-gray-50">
    <!-- Navigation -->
    <AppHeader />
    <!-- Main Content -->
    <div class="flex flex-1 items-center justify-center px-8">
      <div class="mx-auto max-w-3xl text-center">
        <!-- 404 Number -->
        <div class="mb-8">
          <h1 class="mb-4 text-8xl font-bold text-gray-900 md:text-9xl">404</h1>
          <div class="mx-auto mb-8 h-1 w-24 bg-gray-300"></div>
        </div>

        <!-- Main Message -->
        <h2 class="mb-8 text-4xl leading-tight font-bold text-gray-900 md:text-5xl">
          Oops, Page Not Found
        </h2>

        <!-- Description -->
        <p class="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
          The page you're looking for seems to have wandered off into the digital void. As a
          full-stack developer, I can confirm this wasn't part of the intended user experience.
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <NuxtLink
            to="/"
            class="group inline-flex items-center rounded-lg bg-gray-900 px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800"
          >
            <svg
              class="mr-2 h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Back to Home
          </NuxtLink>

          <button
            @click="goBack"
            class="rounded-lg border border-gray-300 px-8 py-3 font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50"
          >
            Go Back
          </button>
        </div>

        <!-- Additional Help -->
        <div class="mt-16 border-t border-gray-200 pt-8">
          <p class="mb-4 text-gray-500">Looking for something specific?</p>
          <div class="flex flex-wrap justify-center gap-4 text-sm">
            <NuxtLink
              to="/"
              class="text-gray-600 transition-colors duration-200 hover:text-gray-900"
            >
              Home
            </NuxtLink>
            <span class="text-gray-300">•</span>
            <NuxtLink
              to="/about"
              class="text-gray-600 transition-colors duration-200 hover:text-gray-900"
            >
              About
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
  // Set the page title and meta
  useHead({
    title: '404 - Page Not Found',
    meta: [
      {
        name: 'description',
        content: 'Page not found - The page you are looking for does not exist.',
      },
    ],
  })

  // Go back function
  const goBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back()
    } else {
      // Fallback to home if no history
      navigateTo('/')
    }
  }
</script>

<style scoped>
  /* Custom animations */
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

  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out;
  }

  /* Smooth entrance animation */
  div {
    animation: fadeInUp 0.8s ease-out;
  }

  /* Stagger animations for child elements */
  h1 {
    animation: fadeInUp 0.6s ease-out 0.1s both;
  }

  h2 {
    animation: fadeInUp 0.6s ease-out 0.2s both;
  }

  p {
    animation: fadeInUp 0.6s ease-out 0.3s both;
  }

  .flex.flex-col.sm\:flex-row {
    animation: fadeInUp 0.6s ease-out 0.4s both;
  }
</style>
