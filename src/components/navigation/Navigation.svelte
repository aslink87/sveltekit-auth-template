<script>
  import { navLinks } from './links';
</script>

<nav data-testid="nav">
  <div class="img-container">
    <img loading="lazy" src="/images/logo.png" alt="Christian Neighbors logo" />
  </div>
  <div class="branding">
    <h1>Company</h1>
    <h1>Name</h1>
  </div>
  <ul>
    {#each navLinks as link}
      <button>
        <a href={link.path}>{link.name}</a>
      </button>
    {/each}
  </ul>
</nav>

<style lang="scss">
  nav {
    position: fixed;
    display: flex;
    overflow: hidden;
    width: 100%;
    justify-content: space-between;
    background-color: $white;
    color: $dark-blue;
    border-bottom: solid 2px $deep-blue;
    height: 4rem;
    z-index: 2;

    .img-container {
      max-width: 70px;
      padding-left: 3em;

      img {
        width: 100%;
      }
    }

    .branding {
      display: flex;
      gap: 0.5em;

      h1 {
        margin: auto 0;
        color: $deep-blue;
        @include h1-primary;
      }

      h1:last-of-type {
        color: $light-blue;
      }
    }

    ul {
      display: flex;
      margin: auto 0;
      padding-right: 3em;
      button {
        margin: auto 0;
        border: none;
        background: none;

        a {
          text-decoration: none;
          color: $deep-blue;
          margin: 0 0.3em 0 1em;
          font-size: 1.2rem;
          font-family: Inter-Regular;
          &:hover {
            color: $light-blue;
          }
          &:active {
            border-bottom: solid 2px $yellow;
          }
        }
      }
    }
  }
</style>
