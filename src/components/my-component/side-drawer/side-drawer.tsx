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
        let mainContent = <slot />;
        mainContent = (
            <div>
                <h2>Our contacts</h2>
                <ul>
                    <li>our phone  5538292828</li>
                    <li>our email: <a href="mailto:cleent@gen.com">mailto:cleent@gen.com</a></li>
                </ul>
            </div>
        )
        return (                
        <div>
            <header>
                <h1>{this.title}</h1>
                <button onClick={this.closeDrawer.bind(this)}>X</button>
            </header>
            <section id="tabs">
                <button class="active" onClick={this.changeTab.bind(this, "nav")}>navigation</button>
                <button onClick={this.changeTab.bind(this, "contacts")}>contact</button>
            </section>
            <main>
                {mainContent}
            </main>
        </div>
        );
    }
}