import { newE2EPage } from '@stencil/core/testing';

describe('bpi-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bpi-button></bpi-button>');

    const element = await page.find('bpi-button');
    expect(element).toHaveClass('hydrated');
  });
});
