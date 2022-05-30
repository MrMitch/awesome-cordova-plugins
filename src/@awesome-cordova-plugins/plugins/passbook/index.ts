import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

export interface PassUrl {
  url: string;
  headers: object | null;
}

export interface PassUrlCollection {
  urls: string[];
  headers: object | null;
}

export interface Pass {
  passTypeIdentifier: string;
  serialNumber: string;
  passURL: string;

  open(): void;
}

export interface PassOperationResult {
  pass: Pass;
  added: boolean;
}

export interface PassOperationCollectionResult {
  passes: Pass[];
  added: boolean;
}

/**
 * @name Passbook
 * @description
 * This plugin does something
 * @usage
 * ```typescript
 * import { Passbook } from '@awesome-cordova-plugins/passbook/ngx';
 *
 *
 * constructor(private passbook: Passbook) { }
 *
 * ...
 *
 *
 * this.passbook.downloadPass('https://url-to-your-pass.pkpass')
 *   .then((pass: Pass) => console.log(pass))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Passbook',
  plugin: 'cordova-plugin-apple-wallet-passes',
  pluginRef: 'cordova.plugins.Passbook',
  repo: 'https://github.com/MrMitch/cordova-plugin-passbook-2',
  platforms: ['iOS'],
})
@Injectable()
export class Passbook extends AwesomeCordovaNativePlugin {
  @Cordova()
  available(callback: (available: boolean) => void) {
    return;
  }

  @Cordova()
  downloadPass(passData: string | PassUrl): Promise<PassOperationResult> {
    return;
  }

  @Cordova()
  downloadPasses(passData: string[] | PassUrlCollection): Promise<PassOperationCollectionResult> {
    return;
  }

  @Cordova()
  addPass(fileUrl: string): Promise<PassOperationResult> {
    return;
  }

  @Cordova()
  addPasses(fileUrls: string[]): Promise<PassOperationCollectionResult> {
    return;
  }

  @Cordova()
  openPass(passOrUrl: Pass | string): Promise<PassOperationResult> {
    return;
  }
}
