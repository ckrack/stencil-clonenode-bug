import { Component, h, Element } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  @Element() el: HTMLElement;

  componentDidLoad() {
    let component = this.el.querySelector("my-component");
    let cloned = component.cloneNode(true);
    this.el.append(cloned);
    component.message = 'Updated component';
    (cloned as HTMLMyComponentElement).message = 'Cloned component';
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <slot/>
        </main>
      </div>
    );
  }
}
