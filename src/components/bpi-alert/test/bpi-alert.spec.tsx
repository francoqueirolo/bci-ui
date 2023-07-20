import { newSpecPage } from '@stencil/core/testing';
import { BpiAlert } from '../bpi-alert';

describe('bpi-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BpiAlert],
      html: `<bpi-alert></bpi-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <bpi-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bpi-alert>
    `);
  });
});
