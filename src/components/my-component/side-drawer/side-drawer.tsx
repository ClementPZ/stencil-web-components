import { Component, h, Prop, State } from '@stencil/core';

@Component({
    tag: "my-side-drawer",
    styleUrl: "./side-drawer.css",
    shadow: true
})

export class SideDrawer {
    
    @State() showContactInfo: boolean = false;
    
    @Prop({ reflect: true }) title: string;
    @Prop({ reflect: true, mutable: true }) open: boolean = false;
    
    closeDrawer() {
        this.open = false;
    }
    changeTab(content: string) {
        this.showContactInfo = (content === "contact");
    }
    render() {
        let mainContent = <slot />;
        if (this.showContactInfo) {
            mainContent = (
                <div id="contact-informations">
                    <h2>Our contacts</h2>
                    <h3>You can reach us here:</h3>
                    <ul>
                        <li>our phone  5538292828</li>
                        <li>our email: <a href="mailto:cleent@gen.com">mailto:cleent@gen.com</a></li>
                    </ul>
                </div>
            );
        }
        return [
            <div id="backdrop" onClick={this.closeDrawer.bind(this)}/>,               
            <aside>
                <header>
                    <h1>{this.title}</h1>
                    <button onClick={this.closeDrawer.bind(this)}>X</button>
                </header>
                <section id="tabs">
                    <button class={!this.showContactInfo ? "active" : ""} onClick={this.changeTab.bind(this, "nav")}>navigation</button>
                    <button class={this.showContactInfo ? "active" : ""} onClick={this.changeTab.bind(this, "contact")}>contact</button>
                </section>
                <main>
                    {mainContent}
                </main>
            </aside>
        ];
    }
}