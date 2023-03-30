// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

import type { Session } from '@auth/core/types';

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      session: Session;
    }

    // interface PageData {}
    // interface Platform {}
  }
}
