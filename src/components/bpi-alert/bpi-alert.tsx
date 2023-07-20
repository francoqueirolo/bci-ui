import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'bpi-alert',
  styleUrl: 'bpi-alert.scss',
  shadow: false,
})
export class BpiAlert {
  @Prop() icon: string = 'warning';
  @Prop() message: string = '';
  @Prop() show: boolean = false;

  private onCloseAlert(): void {
    this.show = false;
  }

  render() {
    return this.show ? (
      <div class="alert-container">
        <div class="alert-content">
          <i class="material-icons icon">{this.icon}</i>
          <span class="message">{this.message}</span>
        </div>
        <button class="close-button" onClick={() => this.onCloseAlert()}>
          <i class="material-icons">close</i>
        </button>
      </div>
    ) : null;
  }
}
