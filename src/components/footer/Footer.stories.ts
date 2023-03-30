import Footer from './Footer.svelte';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
    layout: 'fullscreen',
  },
};

// TODO: implement $app/stores with storybook

const Template = () => ({});

export const FooterStory = Template.bind({});
