import { Component, ElementRef, ViewChild } from '@angular/core';
import { Lynx } from 'lynx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: false,
})
export class AppComponent {
    @ViewChild('deviceIFrame', { static: true }) deviceIFrame: ElementRef;

    constructor() {
        this.viewScans();
    }

    public async viewScans() {
        await Lynx.setRfidMode();
        await Lynx.startRfidScan();

        await Lynx.setRFOutputPower({ power: 10 });
        console.log('Power: ', await Lynx.getRFOutputPower());

        Lynx.addListener('onInventoryTag', (event) => {
            console.log('onInventoryTag:', event);
            this.deviceIFrame.nativeElement.postMessage(event);
        });

        Lynx.addListener('onInventoryTagEnd', (event) => {
            console.log('onInventoryTagEnd:', event);
        });

        Lynx.addListener('onOperationTag', (event) => {
            console.log('onOperationTag:', event);
        });

        Lynx.addListener('onConnection', (event) => {
            console.log('onConnection:', event);
        });

        Lynx.addListener('onScanningStatus', (event) => {
            console.log('onScanningStatus:', event);
        });
    }
}
