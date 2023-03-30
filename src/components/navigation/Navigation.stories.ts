import Navigation from './Navigation.svelte';

export default {
  title: 'Components/NavBar',
  component: Navigation,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => ({});

export const NavStory = Template.bind({});
