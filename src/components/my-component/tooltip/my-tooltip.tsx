import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: "my-tooltip",
    styleUrl: "./my-tooltip.css",
    shadow: true
})

export class MyToolip {
    @Prop( { reflect: true } ) tooltiptext: string = "should add a tooltipText attribute to custom element my-tooltip";
    @Prop( { reflect: true } ) open = false;
    toggleTooltip() {
        if (!this.open) {
            console.log("opening tooltip...");
            this.open = true;
        } else {
            console.log("closing tooltip...");
            this.open = false;
        }
    }
    render() {
        return (
        <div id="container">
            <main>
                <slot name="main-text" />
                <div id="tooltip-icon" onClick={this.toggleTooltip.bind(this)}>
                    <div id="tooltip">
                        {this.tooltiptext}
                    </div>
                    ?
                </div>
            </main>
        </div> 
        )
    }
}