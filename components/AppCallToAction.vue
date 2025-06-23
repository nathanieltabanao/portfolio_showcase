<template>
  <section class="bg-gradient-to-br from-slate-900 to-slate-800 py-12">
    <div class="mx-auto max-w-4xl px-6 text-center">
      <h2 class="mb-4 text-3xl font-bold text-white">{{ title }}</h2>
      <p class="mb-8 text-slate-300">
        {{ description }}
      </p>
      <a
        :href="emailLink"
        class="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-slate-100 hover:shadow-lg active:scale-95"
      >
        {{ buttonText }}
      </a>
    </div>
  </section>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    title: {
      type: String,
      default: 'Ready to work together?',
    },
    description: {
      type: String,
      default:
        "Whether you need full-stack development, UX design, or product strategy, I'd love to help bring your ideas to life.",
    },
    buttonText: {
      type: String,
      default: 'Get In Touch',
    },
  })

  // Use a computed property to generate the mailto link dynamically
  const emailLink = computed(() => {
    return `mailto:nathanieltabanao@gmail.com?subject=Lets work something out!`
  })
</script>
