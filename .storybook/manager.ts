import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'Headway',
    colorPrimary: '#006AFF',
    brandImage:
      "https://makeheadway.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd82d4167-731e-4eeb-ac9d-5cbd10ae7fa9%2FGroup_275_(1).png?table=block&id=b509bb00-a991-4435-bde3-fc9da0fa83de&spaceId=e33f5907-218d-40df-b055-70850a3fb8c2&width=250&userId=&cache=v2'", // Update this path
  },
});
