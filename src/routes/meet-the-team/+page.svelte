<script lang="ts">
  // Keep your existing logic here
</script>

<div class="flex flex-col items-center min-h-screen">
  <!-- Meet the Team Section -->
  <h1 class="text-2xl font-bold text-blue-800 mb-6">Meet the Team</h1>
  
  <!-- Grid Layout for Cards -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[40px] gap-y-[40px] justify-center px-4" style="max-width: 100%; margin: 0 auto;">
    <!-- Card 1 -->
    <div class="bg-blue-300 rounded-[20px] w-full max-w-[220px] h-auto flex flex-col items-center justify-center text-center shadow-lg p-4">
      <div class="bg-white w-[120px] h-[150px] rounded-[20px] shadow-md flex items-center justify-center">
        <img src="nathan.png" alt="Profile" class="w-full h-full object-cover rounded-[20px]" />
      </div>
      <p class="font-bold mt-2">Nathan Parkum</p>
      <p class="text-sm">President</p>
    </div>

    <!-- Card 2 -->
    <div class="bg-blue-300 rounded-[20px] w-full max-w-[220px] h-auto flex flex-col items-center justify-center text-center shadow-lg p-4">
      <div class="bg-white w-[120px] h-[150px] rounded-[20px] shadow-md flex items-center justify-center">
        <img src="brandon.png" alt="Profile" class="w-full h-full object-cover rounded-[20px]" />
      </div>
      <p class="font-bold mt-2">Brandon Muliadi</p>
      <p class="text-sm">Co-Vice President</p>
    </div>

    <!-- Card 3 -->
    <div class="bg-blue-300 rounded-[20px] w-full max-w-[220px] h-auto flex flex-col items-center justify-center text-center shadow-lg p-4">
      <div class="bg-white w-[120px] h-[150px] rounded-[20px] shadow-md flex items-center justify-center">
        <img src="dylan.png" alt="Profile" class="w-full h-full object-cover rounded-[20px]" />
      </div>
      <p class="font-bold mt-2">Dylan Frake</p>
      <p class="text-sm">Co-Vice President/<br>Treasurer
      </p>
    </div>

    <!-- Spacer to Center Bottom Row -->
    <div></div> <!-- Empty spacer -->

    <!-- Card 4 -->
    <div class="bg-blue-300 rounded-[20px] w-full max-w-[220px] h-auto flex flex-col items-center justify-center text-center shadow-lg p-4 transform translate-x-[-110px]">
      <div class="bg-white w-[120px] h-[150px] rounded-[20px] shadow-md flex items-center justify-center">
        <img src="amy.png" alt="Profile" class="w-full h-full object-cover rounded-[20px]" />
      </div>
      <p class="font-bold mt-2">Amy Zhang</p>
      <p class="text-sm">Secretary/Public Relations</p>
    </div>

    <!-- Card 5 -->
    <div class="bg-blue-300 rounded-[20px] w-full max-w-[220px] h-auto flex flex-col items-center justify-center text-center shadow-lg p-4 transform translate-x-[-80px]">
      <div class="bg-white w-[120px] h-[150px] rounded-[20px] shadow-md flex items-center justify-center">
        <img src="chintan.png" alt="Profile" class="w-full h-full object-cover rounded-[20px]" />
      </div>
      <p class="font-bold mt-2">Chintan Gharpure</p>
      <p class="text-sm">Competitions Officer</p>
    </div>

    <!-- Spacer to Center Bottom Row -->
    <div></div> <!-- Empty spacer -->
  </div>
</div>
