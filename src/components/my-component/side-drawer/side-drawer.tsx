import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: "my-side-drawer",
    styleUrl: "./side-drawer.css",
    shadow: true
})

export class SideDrawer {
    @Prop({ reflect: true }) title: string;
    @Prop({ reflect: true, mutable: true }) open: boolean = false;

    closeDrawer() {
        this.open = false;
    }

    changeTab(content) {
        console.log(content);
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
        let mainContent = <slot />;
        return (                
        <div>
            <header>
                <h1>{this.title}</h1>
                <button onClick={this.closeDrawer.bind(this)}>X</button>
            </header>

            <section id="tabs">
                <button class="active">navigation</button>
                <button>contact</button>
            </section>
            <main>
                {mainContent}
            </main>
        </div>
        );
    }
}