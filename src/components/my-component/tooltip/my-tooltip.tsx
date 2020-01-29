import { Component, h, Prop, State } from "@stencil/core";

@Component({
    tag: "my-tooltip",
    styleUrl: "./my-tooltip.css",
    shadow: true
})
export class MyToolip {
    @Prop() tooltiptext = "should add a tooltipText attribute to custom element my-tooltip";
    // @Prop( { reflect: true } ) visible = false;
    @Prop( { reflect: true }) visible = false;
    
    toggleTooltip() {
        this.visible = !this.visible;
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