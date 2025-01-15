<script lang="ts">
	import "../app.css";
  
	let activeTab = "about"; // Default active tab
  </script>
  
  <div class="bg-grid-pattern min-h-screen flex flex-col items-center">
	<!-- Navigation Bar -->
	<nav class="flex space-x-4 p-4">
	  <a
		href="/"
		class="px-6 py-2 rounded-full shadow transition text-white"
		class:bg-blue-500="{activeTab === 'about'}"
		class:bg-blue-300="{activeTab !== 'about'}"
		on:click="{() => (activeTab = 'about')}"
	  >
		About
	  </a>
	  <a
		href="/meet-the-team"
		class="px-6 py-2 rounded-full shadow transition text-white"
		class:bg-blue-500="{activeTab === 'team'}"
		class:bg-blue-300="{activeTab !== 'team'}"
		on:click="{() => (activeTab = 'team')}"
	  >
		Meet the Team
	  </a>
	</nav>
  
	<main class="p-8 w-full max-w-[1024px]">
	  <slot />
	</main>
  </div>
  