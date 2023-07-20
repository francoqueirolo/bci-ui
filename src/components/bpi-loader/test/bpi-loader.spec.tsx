import { newSpecPage } from '@stencil/core/testing';
import { BpiLoader } from '../bpi-loader';

describe('bpi-loader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BpiLoader],
      html: `<bpi-loader></bpi-loader>`,
    });
    expect(page.root).toEqualHtml(`
      <bpi-loader>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bpi-loader>
    `);
  });
});
