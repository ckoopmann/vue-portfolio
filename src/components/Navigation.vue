<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">CK</a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul id="menu" class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li data-menuanchor="home" class="nav-item active">
            <a href="#home" class="nav-link">Home</a>
          </li>
          <li data-menuanchor="projects" class="nav-item"><a href="#projects" class="nav-link">Projects</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav {
  z-index: 50;
}
nav li:hover {
  cursor: pointer;
  font-weight: bold;
}
.active {
  text-decoration: underline;
}
</style>
