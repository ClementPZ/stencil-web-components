import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: "my-side-drawer",
    styleUrl: "./side-drawer.css",
    shadow: true
})

export class SideDrawer {
    
    @Prop({ 
        reflect: true
    })
        title: string;

    render() {
        return (
            <div>
                <header>
                    <h1>{this.title}</h1>
                </header>
                <main>
                    <slot />
                </main>
            </div>
        );
    }
}