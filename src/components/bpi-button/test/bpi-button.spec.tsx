import { newSpecPage } from '@stencil/core/testing';
import { BpiButton } from '../bpi-button';

describe('bpi-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BpiButton],
      html: `<bpi-button></bpi-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bpi-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bpi-button>
    `);
  });
});
