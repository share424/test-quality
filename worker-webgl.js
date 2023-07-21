import * as Vision from './dist-webgl/main.mjs';

let qualityDetector;
const profiler = new Vision.Profiler();

async function loadPhoton() {
    const response  = await fetch('./dist/photon_rs_bg.wasm');
    const buffer = await response.arrayBuffer();
    const module = await WebAssembly.compile(buffer);
    const photon = await import('./dist/photon_rs_bg.js');
    const wasm = await WebAssembly.instantiate(module, {'./photon_rs_bg.js': photon});
    photon.__wbg_set_wasm(wasm.exports);
    (new Vision.QualityDetector()).init(photon).then((detector) => {
        qualityDetector = detector;
        self.postMessage({
            event: 'ready',
        });
    });
}

loadPhoton();

self.onmessage = function(e) {
    if (!qualityDetector) {
        self.postMessage({
            event: 'error',
            error: 'Quality detector not ready'
        });
    }

    if (!e.data) {
        self.postMessage({
            event: 'error',
            error: 'No data'
        });
    }
    
    qualityDetector.detectFromImageData(e.data.imageData, e.data.options)
        .then(([quality, time]) => {
            self.postMessage({
                event: 'result',
                quality,
                time
            });
        })
        .catch((error) => {
            self.postMessage({
                event: 'error',
                error: error.message,
            });
        });
}