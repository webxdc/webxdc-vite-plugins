import { buildXDC } from 'build_xdc';
import { eruda } from 'eruda';
import { injectScript } from 'inject_script';
import { injectWebxdc } from 'inject_webxdc';
import { legacy } from 'legacy';
import { webxdcScores } from 'webxdc_scores';

export {
    buildXDC,
    eruda,
    injectScript,
    injectWebxdc,
    legacy,
    webxdcScores,
};


/**
 * Returns the recommended Vite config for a Webxdc app.
 *
 * @returns The recommended Vite config for a Webxdc app.
 */
export function webxdcViteConfig(options = {}) {
    options = Object.assign({plugins: [buildXDC(), eruda(), legacy(), injectWebxdc()]}, options);
    return options;
}
