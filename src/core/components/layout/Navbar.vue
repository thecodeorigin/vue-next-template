<template>
  <nav class="relative flex justify-between items-center h-16 bg-primary px-8">
    <div>
      <span
        class=" text-white font-bold"
        v-clip.pointer="'Click to copy inner text'"
      >
        {{ $t('home.title') }}
      </span>
    </div>
    <div>
      <button
        class="py-2 px-4 bg-success-500 hover:bg-success-600 active:bg-success-700 text-white font-semibold rounded-lg shadow-md outline-none focus:outline-none duration-300"
      >
        Some button
      </button>
    </div>
  </nav>
</template>
