<!-- Copyright (c) 2022 Shafil Alam -->

<script>
  import "../app.css";
</script>

<svelte:head>
  <title>Avian Asset Explorer</title>
</svelte:head>

<div class="drawer">
  <input id="drawer-main" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="drawer-main" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            /></svg
          >
        </label>
      </div>
      <div class="flex-1 px-2 mx-2">
        <div class="w-10">
          <img src="/img/avian.png" alt="Logo" />
        </div>
        <a href="/" class="btn btn-ghost normal-case text-xl">Avian Asset Explorer</a>
      </div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content -->
          <li><a href="/">Home</a></li>
          <li><a href="/search">Search</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content -->
    <slot />
  </div>
  <div class="drawer-side">
    <label for="drawer-main" class="drawer-overlay" />
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      <!-- Sidebar content -->
      <li><a href="/">Home</a></li>
      <li><a href="/search">Search</a></li>
    </ul>
  </div>
</div>
