import { VueEventHub } from "./index";

declare module "vue/types/vue" {
  interface Vue {
    $eventHub: VueEventHub;
  }

  interface VueConstructor {
    eventHub: VueEventHub;
  }
}
