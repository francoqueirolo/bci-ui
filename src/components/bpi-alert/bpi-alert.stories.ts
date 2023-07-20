export default {
  title: 'Components/BciAlert',
};

const Template = args => `<bpi-alert icon="${args.icon} message="${args.message} show="${args.show}"></bpi-alert>`;

export const Normal = Template.bind({});
Normal.args = {
  icon: 'warning',
  message: 'Alerta de advertencia',
  show: true,
};

export const Other = Template.bind({});
Normal.args = {
  icon: 'info',
  message: 'Alerta informativa',
  show: true,
};
