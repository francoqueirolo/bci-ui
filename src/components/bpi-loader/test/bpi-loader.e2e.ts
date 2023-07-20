import { newE2EPage } from '@stencil/core/testing';

describe('bpi-loader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bpi-loader></bpi-loader>');

    const element = await page.find('bpi-loader');
    expect(element).toHaveClass('hydrated');
  });
});
