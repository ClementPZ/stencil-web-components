import { Component, h, Prop, State } from "@stencil/core";

@Component({
    tag: "my-tooltip",
    styleUrl: "./my-tooltip.css",
    shadow: true
})
export class MyToolip {
    @Prop() tooltiptext: string ;
    // @Prop( { reflect: true } ) visible = false;
    @Prop( { reflect: true }) visible = false;
    
    toggleTooltip() {
        this.visible = !this.visible;
    }
    render() {
        return [
            <div id="tooltip-icon" onClick={this.toggleTooltip.bind(this)}>?</div>,
            <div id="tooltip"><slot /></div>
        ]
    }
}