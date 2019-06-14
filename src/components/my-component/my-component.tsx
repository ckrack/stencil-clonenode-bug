import {Component, h, JSX, Prop} from '@stencil/core';

@Component({
    tag: 'my-component',
    shadow: false,
    styles: 'display: block',
})
export class MyComponent {
  @Prop() message: string = 'Hello';
  render(): JSX.Element {
      return <div>
            <p>{this.message}</p>
            <img src="https://via.placeholder.com/400x225"></img>
        </div>;
  }
}
