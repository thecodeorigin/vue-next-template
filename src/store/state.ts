// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const state = () => ({
  vueServerReady: false,
});

export type State = ReturnType<typeof state>;
