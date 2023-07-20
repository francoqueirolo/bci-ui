import { Component, h } from '@stencil/core';

@Component({
  tag: 'bpi-loader',
  styleUrl: 'bpi-loader.scss',
  shadow: true,
})
export class BpiLoader {
  render() {
    return (
      <div class="loader-container">
        <div class="wrapper-container">
          <div class="custom-loader"></div>
        </div>
      </div>
    );
  }
}
