import { Component, h } from '@stencil/core';

@Component({
    tag: "my-side-drawer",
    styleUrl: "./side-drawer.css",
    shadow: true
})

export class SideDrawer {
    render() {
        return (
            <div>
                <h1>MY SIDE DRAWER</h1>
            </div>
        );
    }
}