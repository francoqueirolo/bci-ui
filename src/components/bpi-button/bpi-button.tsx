import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'bpi-button',
  styleUrl: './bpi-button.scss',
  shadow: false, // Habilita el uso de sombras para encapsular los estilos del componente
})
export class BpiButton {
  @Prop() icon: string = 'add';
  @Prop() disabled: boolean = false;
  @Event() eeHandler: EventEmitter<string>;

  private get classBase(): string {
    return this.disabled ? 'btn disabled' : 'btn';
  }

  private onHandler() {
    if (!this.disabled) {
      this.eeHandler.emit('click');
    }
  }

  render() {
    return (
      <button class={this.classBase} onClick={() => this.onHandler()}>
        <i class="material-icons">{this.icon}</i>
        <slot></slot>
      </button>
    );
  }
}
