export default {
  title: 'Components/BciButton',
};

const Template = args => `<bpi-button icon="${args.icon} disabled="${args.disabled}">Normal</bpi-button>`;

export const Normal = Template.bind({});
Normal.args = {
  icon: 'add',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: 'add',
  disabled: true,
};
