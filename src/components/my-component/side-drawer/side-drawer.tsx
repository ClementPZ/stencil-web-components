import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: "my-side-drawer",
    styleUrl: "./side-drawer.css",
    shadow: true
})

export class SideDrawer {
    @Prop({ reflect: true }) title: string;
    @Prop({ reflect: true }) open: boolean = false;

    closeDrawer() {
        this.open = false;
    }

    render() {
        // let content = null;
        // if (this.open) {
        //     content = (
        //         <div>
        //         <header>
        //             <h1>{this.title}</h1>
        //         </header>
        //         <main>
        //             <slot />
        //         </main>
        //     </div>
        //     )
        // }
        return (                
        <div>
            <header>
                <h1>{this.title}</h1>
                <button onClick={this.closeDrawer.bind(this)}>X</button>
            </header>
            <main>
                <slot />
            </main>
        </div>
        );
    }
}