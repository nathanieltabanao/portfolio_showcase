<template>
  <header class="px-6 py-6">
    <!-- <nav class="container mx-auto flex justify-center">
      <ul class="flex space-x-12 lg:space-x-16">
        <li>
          <NuxtLink
            to="/"
            class="rounded-md px-3 py-2 text-lg font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-gray-900"
          >
            Home
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to="/about"
            class="rounded-md px-3 py-2 text-lg font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-gray-900"
          >
            About Me
          </NuxtLink>
        </li>
      </ul>
    </nav> -->

    <nav class="w-full px-8 py-6">
      <div class="mx-auto flex max-w-6xl justify-center space-x-12">
        <NuxtLink
          to="/"
          class="font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
        >
          About Me
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
