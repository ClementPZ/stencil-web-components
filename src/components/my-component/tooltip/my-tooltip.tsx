import { Component, h, Prop, State } from "@stencil/core";

@Component({
    tag: "my-tooltip",
    styleUrl: "./my-tooltip.css",
    shadow: true
})
export class MyToolip {
    @Prop({ reflect: true }) opened = false;
    toggleTooltip() {
        console.log("toggling tooltip...");
        console.log(this.opened);
        this.opened = !this.opened;
        console.log(this.opened);
    }
    render() {
        return [
            <div id="tooltip-icon" onClick={this.toggleTooltip.bind(this)}>?</div>,
            <div id="tooltip"><slot /></div>,
            <div id="backdrop"></div>
        ]
    }
}