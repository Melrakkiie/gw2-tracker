<template>
  <div>
    <b-sidebar
      id="sidebar-backdrop"
      title="GW2 Account Tracker"
      backdrop-variant="dark"
      backdrop
      shadow
    >
      <div class="links">
        <ul>
          <li>
            <nuxt-link to="/">
              <span class="bi bi-grid"></span>Summary</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/characters">
              <span class="bi bi-person-fill"></span>Personnages</nuxt-link
            >
          </li>
        </ul>
      </div>
      <template #footer>
        <div class="d-flex px-3 py-2">
          <p>
            Made with <span class="bi bi-heart-fill text-danger"></span> by
            Aurore Langelier
            <i
              ><b-link
                href="https://github.com/Melrakkiie"
                target="_blank"
                class="bi bi-github"
              ></b-link
            ></i>
            <i
              ><b-link
                href="https://www.linkedin.com/in/alangelier/"
                target="_blank"
                class="bi bi-linkedin"
              ></b-link
            ></i>
          </p>
        </div>
      </template>
    </b-sidebar>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style scoped>
.links {
  padding-top: 1em;
  display: flex;
  flex-direction: column;
}

.links ul {
  list-style-type: none;
  padding: 0;
}

.links ul li a {
  border-radius: 0.3rem;
  margin: 0.8em;
  display: block;
  padding: 10px 20px;
  border: 0;
  color: #444;
}

.links ul li a:hover,
.links ul li a:focus,
.links ul li.active > a:hover,
.links ul li.active > a:focus {
  text-decoration: none;
  outline: 0;
  color: #bd0f0f;
}

.links ul li a span {
  margin-right: 1em;
}
</style>
