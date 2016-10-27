import {Component} from "@angular/core";

@Component({
    providers: [],
    styles: [],
    template: `
<div>
    <h4>(click) in the template cause a tick</h4>
    <accordion>        
        <item title="title 1">
            <template></template>
            desc 1
        </item>
        <item title="title 2">desc 2</item>
        <item title="title 3">desc 3</item>
    </accordion>
    <h4>No ticks (NgZone)</h4>
    <p>
        This demo shows how we can stop the tick that happens because a click event. 
        In this approach we can't register an event in the template because we need
        to use the NgZone class.
    </p> 
    <accordion>
        <item2 title="title 1">desc 1</item2>
        <item2 title="title 2">desc 2</item2>
        <item2 title="title 3">desc 3</item2>
    </accordion>
</div>
`})
export class AccordionDemoComponent {
}