<script>
  import { signIn, signOut } from '@auth/sveltekit/client';
  import { page } from '$app/stores';
</script>

<div data-testid="footer-wrapper">
  {#if $page.data.session?.user}
    <p>Thanks for logging in {$page.data.session.user.name}</p>
    <button on:click={() => signOut()} class="cursor-pointer btn variant-filled-primary">
      <p>Logout</p>
    </button>
  {:else}
    <button on:click={() => signIn('google')} class="cursor-pointer btn variant-filled-primary">
      <p>Login</p>
    </button>
  {/if}
</div>

<style lang="scss">
  div {
    display: flex;
    overflow: hidden;
    width: 100%;
    justify-content: right;
    gap: 2rem;
    background-color: $white;
    color: $dark-blue;
    border-bottom: solid 2px $deep-blue;
    height: 4rem;
    z-index: 2;

    p {
      margin: auto 0;
    }

    button {
      @include btnPrimary;
      height: 1.5rem;
      margin: auto 1em auto 0;
    }
  }
</style>
