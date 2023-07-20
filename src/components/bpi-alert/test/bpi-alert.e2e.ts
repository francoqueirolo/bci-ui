import { newE2EPage } from '@stencil/core/testing';

describe('bpi-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bpi-alert></bpi-alert>');

    const element = await page.find('bpi-alert');
    expect(element).toHaveClass('hydrated');
  });
});
