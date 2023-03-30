<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  export let data: { id: string; users: { name: string; settings: { approved: boolean } }[] };

  seo.set({
    title: 'Admin | Company',
    description: 'Admin Page for Company',
  });

  async function approve(name: string) {
    await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ name }),
    });
  }

  async function remove(name: string) {
    await fetch('/api/unregister', {
      method: 'POST',
      body: JSON.stringify({ name }),
    });
  }
</script>

<section class="admin">
  <h1>Hello from Admin page</h1>
  <div class="user-management">
    <h2>Registered Users</h2>
    <p>Approve for admin access?</p>
    <p>Careful not to lock yourself out by removing your own access!</p>
    <ul>
      {#each data.users as user}
        <li>
          <label for="name">Name:</label>
          <input type="text" name="name" value={user.name} />
          {#if !user.settings.approved}
            <button on:click={() => approve(user.name)}>Approve</button>
          {:else}
            <button on:click={() => remove(user.name)}>Remove Approval</button>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</section>

<style lang="scss">
  section {
    @include center;
    padding: 2em 0;

    h1 {
      @include h1-primary;
      color: $white;
    }

    h2 {
      color: $white;
    }

    p {
      color: $white;
    }

    ul {
      color: $white;
      padding: 0;

      li {
        display: flex;
        gap: 1em;
        justify-content: center;
        list-style-type: none;
        text-transform: capitalize;

        button {
          @include btnPrimary;
          height: 2em;
          margin: auto 0;
        }

        label {
          margin: auto 0;
          display: none;
        }

        input {
          background: none;
          color: $white;
          border: none;
          text-align: left;
          width: 8em;
          overflow-x: scroll;
        }
      }
    }
  }
</style>
