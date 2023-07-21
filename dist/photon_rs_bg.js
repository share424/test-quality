let wasm;export function __wbg_set_wasm(t){wasm=t}const heap=new Array(128).fill(void 0);function getObject(t){return heap[t]}heap.push(void 0,null,!0,!1);let heap_next=heap.length;function dropObject(t){t<132||(heap[t]=heap_next,heap_next=t)}function takeObject(t){const e=getObject(t);return dropObject(t),e}function addHeapObject(t){heap_next===heap.length&&heap.push(heap.length+1);const e=heap_next;return heap_next=heap[e],heap[e]=t,e}function debugString(t){const e=typeof t;if("number"==e||"boolean"==e||null==t)return`${t}`;if("string"==e)return`"${t}"`;if("symbol"==e){const e=t.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=t.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(t)){const e=t.length;let _="[";e>0&&(_+=debugString(t[0]));for(let a=1;a<e;a++)_+=", "+debugString(t[a]);return _+="]",_}const _=/\[object ([^\]]+)\]/.exec(toString.call(t));let a;if(!(_.length>1))return toString.call(t);if(a=_[1],"Object"==a)try{return"Object("+JSON.stringify(t)+")"}catch(t){return"Object"}return t instanceof Error?`${t.name}: ${t.message}\n${t.stack}`:a}let WASM_VECTOR_LEN=0,cachedUint8Memory0=null;function getUint8Memory0(){return null!==cachedUint8Memory0&&0!==cachedUint8Memory0.byteLength||(cachedUint8Memory0=new Uint8Array(wasm.memory.buffer)),cachedUint8Memory0}const lTextEncoder="undefined"==typeof TextEncoder?(0,module.require)("util").TextEncoder:TextEncoder;let cachedTextEncoder=new lTextEncoder("utf-8");const encodeString="function"==typeof cachedTextEncoder.encodeInto?function(t,e){return cachedTextEncoder.encodeInto(t,e)}:function(t,e){const _=cachedTextEncoder.encode(t);return e.set(_),{read:t.length,written:_.length}};function passStringToWasm0(t,e,_){if(void 0===_){const _=cachedTextEncoder.encode(t),a=e(_.length)>>>0;return getUint8Memory0().subarray(a,a+_.length).set(_),WASM_VECTOR_LEN=_.length,a}let a=t.length,r=e(a)>>>0;const n=getUint8Memory0();let s=0;for(;s<a;s++){const e=t.charCodeAt(s);if(e>127)break;n[r+s]=e}if(s!==a){0!==s&&(t=t.slice(s)),r=_(r,a,a=s+3*t.length)>>>0;const e=getUint8Memory0().subarray(r+s,r+a);s+=encodeString(t,e).written}return WASM_VECTOR_LEN=s,r}let cachedInt32Memory0=null;function getInt32Memory0(){return null!==cachedInt32Memory0&&0!==cachedInt32Memory0.byteLength||(cachedInt32Memory0=new Int32Array(wasm.memory.buffer)),cachedInt32Memory0}const lTextDecoder="undefined"==typeof TextDecoder?(0,module.require)("util").TextDecoder:TextDecoder;let cachedTextDecoder=new lTextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});function getStringFromWasm0(t,e){return t>>>=0,cachedTextDecoder.decode(getUint8Memory0().subarray(t,t+e))}function _assertClass(t,e){if(!(t instanceof e))throw new Error(`expected instance of ${e.name}`);return t.ptr}cachedTextDecoder.decode();export function crop(t,e,_,a,r){_assertClass(t,PhotonImage);const n=wasm.crop(t.__wbg_ptr,e,_,a,r);return PhotonImage.__wrap(n)}export function crop_img_browser(t,e,_,a,r){return takeObject(wasm.crop_img_browser(addHeapObject(t),e,_,a,r))}export function fliph(t){_assertClass(t,PhotonImage),wasm.fliph(t.__wbg_ptr)}export function flipv(t){_assertClass(t,PhotonImage),wasm.flipv(t.__wbg_ptr)}export function resize_img_browser(t,e,_,a){_assertClass(t,PhotonImage);return takeObject(wasm.resize_img_browser(t.__wbg_ptr,e,_,a))}export function resize(t,e,_,a){_assertClass(t,PhotonImage);const r=wasm.resize(t.__wbg_ptr,e,_,a);return PhotonImage.__wrap(r)}export function seam_carve(t,e,_){_assertClass(t,PhotonImage);const a=wasm.seam_carve(t.__wbg_ptr,e,_);return PhotonImage.__wrap(a)}export function padding_uniform(t,e,_){_assertClass(t,PhotonImage),_assertClass(_,Rgba);var a=_.__destroy_into_raw();const r=wasm.padding_uniform(t.__wbg_ptr,e,a);return PhotonImage.__wrap(r)}export function padding_left(t,e,_){_assertClass(t,PhotonImage),_assertClass(_,Rgba);var a=_.__destroy_into_raw();const r=wasm.padding_left(t.__wbg_ptr,e,a);return PhotonImage.__wrap(r)}export function padding_right(t,e,_){_assertClass(t,PhotonImage),_assertClass(_,Rgba);var a=_.__destroy_into_raw();const r=wasm.padding_right(t.__wbg_ptr,e,a);return PhotonImage.__wrap(r)}export function padding_top(t,e,_){_assertClass(t,PhotonImage),_assertClass(_,Rgba);var a=_.__destroy_into_raw();const r=wasm.padding_top(t.__wbg_ptr,e,a);return PhotonImage.__wrap(r)}export function padding_bottom(t,e,_){_assertClass(t,PhotonImage),_assertClass(_,Rgba);var a=_.__destroy_into_raw();const r=wasm.padding_bottom(t.__wbg_ptr,e,a);return PhotonImage.__wrap(r)}export function rotate(t,e){_assertClass(t,PhotonImage);const _=wasm.rotate(t.__wbg_ptr,e);return PhotonImage.__wrap(_)}export function resample(t,e,_){_assertClass(t,PhotonImage);const a=wasm.resample(t.__wbg_ptr,e,_);return PhotonImage.__wrap(a)}export function monochrome(t,e,_,a){_assertClass(t,PhotonImage),wasm.monochrome(t.__wbg_ptr,e,_,a)}export function sepia(t){_assertClass(t,PhotonImage),wasm.sepia(t.__wbg_ptr)}export function grayscale(t){_assertClass(t,PhotonImage),wasm.grayscale(t.__wbg_ptr)}export function grayscale_human_corrected(t){_assertClass(t,PhotonImage),wasm.grayscale_human_corrected(t.__wbg_ptr)}export function grayscale_human_corrected_1channel(t){_assertClass(t,PhotonImage);var e=t.__destroy_into_raw();const _=wasm.grayscale_human_corrected_1channel(e);return PhotonImage.__wrap(_)}export function desaturate(t){_assertClass(t,PhotonImage),wasm.desaturate(t.__wbg_ptr)}export function decompose_min(t){_assertClass(t,PhotonImage),wasm.decompose_min(t.__wbg_ptr)}export function decompose_max(t){_assertClass(t,PhotonImage),wasm.decompose_max(t.__wbg_ptr)}export function grayscale_shades(t,e){_assertClass(t,PhotonImage),wasm.grayscale_shades(t.__wbg_ptr,e)}export function r_grayscale(t){_assertClass(t,PhotonImage),wasm.r_grayscale(t.__wbg_ptr)}export function g_grayscale(t){_assertClass(t,PhotonImage),wasm.g_grayscale(t.__wbg_ptr)}export function b_grayscale(t){_assertClass(t,PhotonImage),wasm.b_grayscale(t.__wbg_ptr)}export function single_channel_grayscale(t,e){_assertClass(t,PhotonImage),wasm.single_channel_grayscale(t.__wbg_ptr,e)}export function threshold(t,e){_assertClass(t,PhotonImage),wasm.threshold(t.__wbg_ptr,e)}function passArray8ToWasm0(t,e){const _=e(1*t.length)>>>0;return getUint8Memory0().set(t,_/1),WASM_VECTOR_LEN=t.length,_}function getArrayU8FromWasm0(t,e){return t>>>=0,getUint8Memory0().subarray(t/1,t/1+e)}export function run(){try{const e=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.run(e);var t=getInt32Memory0()[e/4+0];if(getInt32Memory0()[e/4+1])throw takeObject(t)}finally{wasm.__wbindgen_add_to_stack_pointer(16)}}let stack_pointer=128;function addBorrowedObject(t){if(1==stack_pointer)throw new Error("out of js stack");return heap[--stack_pointer]=t,stack_pointer}export function get_image_data(t,e){try{return takeObject(wasm.get_image_data(addBorrowedObject(t),addBorrowedObject(e)))}finally{heap[stack_pointer++]=void 0,heap[stack_pointer++]=void 0}}export function putImageData(t,e,_){_assertClass(_,PhotonImage);var a=_.__destroy_into_raw();wasm.putImageData(addHeapObject(t),addHeapObject(e),a)}export function open_image(t,e){const _=wasm.open_image(addHeapObject(t),addHeapObject(e));return PhotonImage.__wrap(_)}export function open_from_image_data(t,e,_){const a=wasm.open_from_image_data(addHeapObject(t),e,_);return PhotonImage.__wrap(a)}export function to_raw_pixels(t){try{const r=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.to_raw_pixels(r,addHeapObject(t));var e=getInt32Memory0()[r/4+0],_=getInt32Memory0()[r/4+1],a=getArrayU8FromWasm0(e,_).slice();return wasm.__wbindgen_free(e,1*_),a}finally{wasm.__wbindgen_add_to_stack_pointer(16)}}export function base64_to_image(t){const e=passStringToWasm0(t,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),_=WASM_VECTOR_LEN,a=wasm.base64_to_image(e,_);return PhotonImage.__wrap(a)}export function base64_to_vec(t){try{const r=wasm.__wbindgen_add_to_stack_pointer(-16),n=passStringToWasm0(t,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),s=WASM_VECTOR_LEN;wasm.base64_to_vec(r,n,s);var e=getInt32Memory0()[r/4+0],_=getInt32Memory0()[r/4+1],a=getArrayU8FromWasm0(e,_).slice();return wasm.__wbindgen_free(e,1*_),a}finally{wasm.__wbindgen_add_to_stack_pointer(16)}}export function to_image_data(t){_assertClass(t,PhotonImage);var e=t.__destroy_into_raw();return takeObject(wasm.to_image_data(e))}export function neue(t){_assertClass(t,PhotonImage),wasm.neue(t.__wbg_ptr)}export function lix(t){_assertClass(t,PhotonImage),wasm.lix(t.__wbg_ptr)}export function ryo(t){_assertClass(t,PhotonImage),wasm.ryo(t.__wbg_ptr)}export function filter(t,e){_assertClass(t,PhotonImage);const _=passStringToWasm0(e,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),a=WASM_VECTOR_LEN;wasm.filter(t.__wbg_ptr,_,a)}export function lofi(t){_assertClass(t,PhotonImage),wasm.lofi(t.__wbg_ptr)}export function pastel_pink(t){_assertClass(t,PhotonImage),wasm.pastel_pink(t.__wbg_ptr)}export function golden(t){_assertClass(t,PhotonImage),wasm.golden(t.__wbg_ptr)}export function cali(t){_assertClass(t,PhotonImage),wasm.cali(t.__wbg_ptr)}export function dramatic(t){_assertClass(t,PhotonImage),wasm.dramatic(t.__wbg_ptr)}export function monochrome_tint(t,e){_assertClass(t,PhotonImage),_assertClass(e,Rgb);var _=e.__destroy_into_raw();wasm.monochrome_tint(t.__wbg_ptr,_)}export function duotone_violette(t){_assertClass(t,PhotonImage),wasm.duotone_violette(t.__wbg_ptr)}export function duotone_horizon(t){_assertClass(t,PhotonImage),wasm.duotone_horizon(t.__wbg_ptr)}export function duotone_tint(t,e){_assertClass(t,PhotonImage),_assertClass(e,Rgb);var _=e.__destroy_into_raw();wasm.duotone_tint(t.__wbg_ptr,_)}export function duotone_lilac(t){_assertClass(t,PhotonImage),wasm.duotone_lilac(t.__wbg_ptr)}export function duotone_ochre(t){_assertClass(t,PhotonImage),wasm.duotone_ochre(t.__wbg_ptr)}export function firenze(t){_assertClass(t,PhotonImage),wasm.firenze(t.__wbg_ptr)}export function obsidian(t){_assertClass(t,PhotonImage),wasm.obsidian(t.__wbg_ptr)}export function draw_text_with_border(t,e,_,a){_assertClass(t,PhotonImage);const r=passStringToWasm0(e,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),n=WASM_VECTOR_LEN;wasm.draw_text_with_border(t.__wbg_ptr,r,n,_,a)}export function draw_text(t,e,_,a){_assertClass(t,PhotonImage);const r=passStringToWasm0(e,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),n=WASM_VECTOR_LEN;wasm.draw_text(t.__wbg_ptr,r,n,_,a)}export function offset(t,e,_){_assertClass(t,PhotonImage),wasm.offset(t.__wbg_ptr,e,_)}export function offset_red(t,e){_assertClass(t,PhotonImage),wasm.offset_red(t.__wbg_ptr,e)}export function offset_green(t,e){_assertClass(t,PhotonImage),wasm.offset_green(t.__wbg_ptr,e)}export function offset_blue(t,e){_assertClass(t,PhotonImage),wasm.offset_blue(t.__wbg_ptr,e)}export function multiple_offsets(t,e,_,a){_assertClass(t,PhotonImage),wasm.multiple_offsets(t.__wbg_ptr,e,_,a)}export function primary(t){_assertClass(t,PhotonImage),wasm.primary(t.__wbg_ptr)}export function colorize(t){_assertClass(t,PhotonImage),wasm.colorize(t.__wbg_ptr)}export function solarize(t){_assertClass(t,PhotonImage),wasm.solarize(t.__wbg_ptr)}export function solarize_retimg(t){_assertClass(t,PhotonImage);const e=wasm.solarize_retimg(t.__wbg_ptr);return PhotonImage.__wrap(e)}export function inc_brightness(t,e){_assertClass(t,PhotonImage),wasm.inc_brightness(t.__wbg_ptr,e)}export function adjust_contrast(t,e){_assertClass(t,PhotonImage),wasm.adjust_contrast(t.__wbg_ptr,e)}export function tint(t,e,_,a){_assertClass(t,PhotonImage),wasm.tint(t.__wbg_ptr,e,_,a)}export function horizontal_strips(t,e){_assertClass(t,PhotonImage),wasm.horizontal_strips(t.__wbg_ptr,e)}export function color_horizontal_strips(t,e,_){_assertClass(t,PhotonImage),_assertClass(_,Rgb);var a=_.__destroy_into_raw();wasm.color_horizontal_strips(t.__wbg_ptr,e,a)}export function vertical_strips(t,e){_assertClass(t,PhotonImage),wasm.vertical_strips(t.__wbg_ptr,e)}export function color_vertical_strips(t,e,_){_assertClass(t,PhotonImage),_assertClass(_,Rgb);var a=_.__destroy_into_raw();wasm.color_vertical_strips(t.__wbg_ptr,e,a)}export function oil(t,e,_){_assertClass(t,PhotonImage),wasm.oil(t.__wbg_ptr,e,_)}export function frosted_glass(t){_assertClass(t,PhotonImage),wasm.frosted_glass(t.__wbg_ptr)}export function pixelize(t,e){_assertClass(t,PhotonImage),wasm.pixelize(t.__wbg_ptr,e)}export function normalize(t){_assertClass(t,PhotonImage),wasm.normalize(t.__wbg_ptr)}export function dither(t,e){_assertClass(t,PhotonImage),wasm.dither(t.__wbg_ptr,e)}export function duotone(t,e,_){_assertClass(t,PhotonImage),_assertClass(e,Rgb);var a=e.__destroy_into_raw();_assertClass(_,Rgb);var r=_.__destroy_into_raw();wasm.duotone(t.__wbg_ptr,a,r)}export function alter_channel(t,e,_){_assertClass(t,PhotonImage),wasm.alter_channel(t.__wbg_ptr,e,_)}export function alter_red_channel(t,e){_assertClass(t,PhotonImage),wasm.alter_red_channel(t.__wbg_ptr,e)}export function alter_green_channel(t,e){_assertClass(t,PhotonImage),wasm.alter_green_channel(t.__wbg_ptr,e)}export function alter_blue_channel(t,e){_assertClass(t,PhotonImage),wasm.alter_blue_channel(t.__wbg_ptr,e)}export function alter_two_channels(t,e,_,a,r){_assertClass(t,PhotonImage),wasm.alter_two_channels(t.__wbg_ptr,e,_,a,r)}export function alter_channels(t,e,_,a){_assertClass(t,PhotonImage),wasm.alter_channels(t.__wbg_ptr,e,_,a)}export function remove_channel(t,e,_){_assertClass(t,PhotonImage),wasm.remove_channel(t.__wbg_ptr,e,_)}export function remove_red_channel(t,e){_assertClass(t,PhotonImage),wasm.remove_red_channel(t.__wbg_ptr,e)}export function remove_green_channel(t,e){_assertClass(t,PhotonImage),wasm.remove_green_channel(t.__wbg_ptr,e)}export function remove_blue_channel(t,e){_assertClass(t,PhotonImage),wasm.remove_blue_channel(t.__wbg_ptr,e)}export function swap_channels(t,e,_){_assertClass(t,PhotonImage),wasm.swap_channels(t.__wbg_ptr,e,_)}export function invert(t){_assertClass(t,PhotonImage),wasm.invert(t.__wbg_ptr)}export function selective_hue_rotate(t,e,_){_assertClass(t,PhotonImage),_assertClass(e,Rgb);var a=e.__destroy_into_raw();wasm.selective_hue_rotate(t.__wbg_ptr,a,_)}export function selective_color_convert(t,e,_,a){_assertClass(t,PhotonImage),_assertClass(e,Rgb);var r=e.__destroy_into_raw();_assertClass(_,Rgb);var n=_.__destroy_into_raw();wasm.selective_color_convert(t.__wbg_ptr,r,n,a)}export function selective_lighten(t,e,_){_assertClass(t,PhotonImage),_assertClass(e,Rgb);var a=e.__destroy_into_raw();wasm.selective_lighten(t.__wbg_ptr,a,_)}export function selective_desaturate(t,e,_){_assertClass(t,PhotonImage),_assertClass(e,Rgb);var a=e.__destroy_into_raw();wasm.selective_desaturate(t.__wbg_ptr,a,_)}export function selective_saturate(t,e,_){_assertClass(t,PhotonImage),_assertClass(e,Rgb);var a=e.__destroy_into_raw();wasm.selective_saturate(t.__wbg_ptr,a,_)}export function selective_greyscale(t,e){_assertClass(t,PhotonImage);var _=t.__destroy_into_raw();_assertClass(e,Rgb);var a=e.__destroy_into_raw();wasm.selective_greyscale(_,a)}export function blur_score(t){_assertClass(t,PhotonImage);var e=t.__destroy_into_raw();return wasm.blur_score(e)}export function light_score(t){_assertClass(t,PhotonImage);var e=t.__destroy_into_raw();return wasm.light_score(e)}export function gamma_correction(t,e,_,a){_assertClass(t,PhotonImage),wasm.gamma_correction(t.__wbg_ptr,e,_,a)}export function hsluv(t,e,_){_assertClass(t,PhotonImage);const a=passStringToWasm0(e,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),r=WASM_VECTOR_LEN;wasm.hsluv(t.__wbg_ptr,a,r,_)}export function lch(t,e,_){_assertClass(t,PhotonImage);const a=passStringToWasm0(e,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),r=WASM_VECTOR_LEN;wasm.lch(t.__wbg_ptr,a,r,_)}export function hsl(t,e,_){_assertClass(t,PhotonImage);const a=passStringToWasm0(e,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),r=WASM_VECTOR_LEN;wasm.hsl(t.__wbg_ptr,a,r,_)}export function hsv(t,e,_){_assertClass(t,PhotonImage);const a=passStringToWasm0(e,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),r=WASM_VECTOR_LEN;wasm.hsv(t.__wbg_ptr,a,r,_)}export function hue_rotate_hsl(t,e){_assertClass(t,PhotonImage),wasm.hue_rotate_hsl(t.__wbg_ptr,e)}export function hue_rotate_hsv(t,e){_assertClass(t,PhotonImage),wasm.hue_rotate_hsv(t.__wbg_ptr,e)}export function hue_rotate_lch(t,e){_assertClass(t,PhotonImage),wasm.hue_rotate_lch(t.__wbg_ptr,e)}export function hue_rotate_hsluv(t,e){_assertClass(t,PhotonImage),wasm.hue_rotate_hsluv(t.__wbg_ptr,e)}export function saturate_hsl(t,e){_assertClass(t,PhotonImage),wasm.saturate_hsl(t.__wbg_ptr,e)}export function saturate_lch(t,e){_assertClass(t,PhotonImage),wasm.saturate_lch(t.__wbg_ptr,e)}export function saturate_hsluv(t,e){_assertClass(t,PhotonImage),wasm.saturate_hsluv(t.__wbg_ptr,e)}export function saturate_hsv(t,e){_assertClass(t,PhotonImage),wasm.saturate_hsv(t.__wbg_ptr,e)}export function lighten_lch(t,e){_assertClass(t,PhotonImage),wasm.lighten_lch(t.__wbg_ptr,e)}export function lighten_hsluv(t,e){_assertClass(t,PhotonImage),wasm.lighten_hsluv(t.__wbg_ptr,e)}export function lighten_hsl(t,e){_assertClass(t,PhotonImage),wasm.lighten_hsl(t.__wbg_ptr,e)}export function lighten_hsv(t,e){_assertClass(t,PhotonImage),wasm.lighten_hsv(t.__wbg_ptr,e)}export function darken_lch(t,e){_assertClass(t,PhotonImage),wasm.darken_lch(t.__wbg_ptr,e)}export function darken_hsluv(t,e){_assertClass(t,PhotonImage),wasm.darken_hsluv(t.__wbg_ptr,e)}export function darken_hsl(t,e){_assertClass(t,PhotonImage),wasm.darken_hsl(t.__wbg_ptr,e)}export function darken_hsv(t,e){_assertClass(t,PhotonImage),wasm.darken_hsv(t.__wbg_ptr,e)}export function desaturate_hsv(t,e){_assertClass(t,PhotonImage),wasm.desaturate_hsv(t.__wbg_ptr,e)}export function desaturate_hsl(t,e){_assertClass(t,PhotonImage),wasm.desaturate_hsl(t.__wbg_ptr,e)}export function desaturate_lch(t,e){_assertClass(t,PhotonImage),wasm.desaturate_lch(t.__wbg_ptr,e)}export function desaturate_hsluv(t,e){_assertClass(t,PhotonImage),wasm.desaturate_hsluv(t.__wbg_ptr,e)}export function mix_with_colour(t,e,_){_assertClass(t,PhotonImage),_assertClass(e,Rgb);var a=e.__destroy_into_raw();wasm.mix_with_colour(t.__wbg_ptr,a,_)}export function watermark(t,e,_,a){_assertClass(t,PhotonImage),_assertClass(e,PhotonImage),wasm.watermark(t.__wbg_ptr,e.__wbg_ptr,_,a)}export function blend(t,e,_){_assertClass(t,PhotonImage),_assertClass(e,PhotonImage);const a=passStringToWasm0(_,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),r=WASM_VECTOR_LEN;wasm.blend(t.__wbg_ptr,e.__wbg_ptr,a,r)}export function create_gradient(t,e){const _=wasm.create_gradient(t,e);return PhotonImage.__wrap(_)}export function apply_gradient(t){_assertClass(t,PhotonImage),wasm.apply_gradient(t.__wbg_ptr)}export function noise_reduction(t){_assertClass(t,PhotonImage),wasm.noise_reduction(t.__wbg_ptr)}export function sharpen(t){_assertClass(t,PhotonImage),wasm.sharpen(t.__wbg_ptr)}export function edge_detection(t){_assertClass(t,PhotonImage),wasm.edge_detection(t.__wbg_ptr)}export function identity(t){_assertClass(t,PhotonImage),wasm.identity(t.__wbg_ptr)}export function box_blur(t){_assertClass(t,PhotonImage),wasm.box_blur(t.__wbg_ptr)}export function gaussian_blur(t,e){_assertClass(t,PhotonImage),wasm.gaussian_blur(t.__wbg_ptr,e)}export function detect_horizontal_lines(t){_assertClass(t,PhotonImage),wasm.detect_horizontal_lines(t.__wbg_ptr)}export function detect_vertical_lines(t){_assertClass(t,PhotonImage),wasm.detect_vertical_lines(t.__wbg_ptr)}export function detect_45_deg_lines(t){_assertClass(t,PhotonImage),wasm.detect_45_deg_lines(t.__wbg_ptr)}export function detect_135_deg_lines(t){_assertClass(t,PhotonImage),wasm.detect_135_deg_lines(t.__wbg_ptr)}export function laplace(t){_assertClass(t,PhotonImage),wasm.laplace(t.__wbg_ptr)}export function laplace_1channel(t){_assertClass(t,PhotonImage),wasm.laplace_1channel(t.__wbg_ptr)}export function edge_one(t){_assertClass(t,PhotonImage),wasm.edge_one(t.__wbg_ptr)}export function emboss(t){_assertClass(t,PhotonImage),wasm.emboss(t.__wbg_ptr)}export function sobel_horizontal(t){_assertClass(t,PhotonImage),wasm.sobel_horizontal(t.__wbg_ptr)}export function prewitt_horizontal(t){_assertClass(t,PhotonImage),wasm.prewitt_horizontal(t.__wbg_ptr)}export function sobel_vertical(t){_assertClass(t,PhotonImage),wasm.sobel_vertical(t.__wbg_ptr)}let cachedFloat32Memory0=null;function getFloat32Memory0(){return null!==cachedFloat32Memory0&&0!==cachedFloat32Memory0.byteLength||(cachedFloat32Memory0=new Float32Array(wasm.memory.buffer)),cachedFloat32Memory0}function getArrayF32FromWasm0(t,e){return t>>>=0,getFloat32Memory0().subarray(t/4,t/4+e)}export function preprocess_detector(t,e){_assertClass(t,PhotonImage);var _=t.__destroy_into_raw();const a=wasm.preprocess_detector(_,e);return PreprocessedImage.__wrap(a)}function passArrayF32ToWasm0(t,e){const _=e(4*t.length)>>>0;return getFloat32Memory0().set(t,_/4),WASM_VECTOR_LEN=t.length,_}export function postprocess_detector(t,e,_,a,r,n,s,o,g,c,i){const m=passArrayF32ToWasm0(t,wasm.__wbindgen_malloc),w=WASM_VECTOR_LEN;return 0!==wasm.postprocess_detector(m,w,e,_,a,r,n,s,o,g,c,i)}function isLikeNone(t){return null==t}function handleError(t,e){try{return t.apply(this,e)}catch(t){wasm.__wbindgen_exn_store(addHeapObject(t))}}let cachedUint8ClampedMemory0=null;function getUint8ClampedMemory0(){return null!==cachedUint8ClampedMemory0&&0!==cachedUint8ClampedMemory0.byteLength||(cachedUint8ClampedMemory0=new Uint8ClampedArray(wasm.memory.buffer)),cachedUint8ClampedMemory0}function getClampedArrayU8FromWasm0(t,e){return t>>>=0,getUint8ClampedMemory0().subarray(t/1,t/1+e)}export const SamplingFilter=Object.freeze({Nearest:1,1:"Nearest",Triangle:2,2:"Triangle",CatmullRom:3,3:"CatmullRom",Gaussian:4,4:"Gaussian",Lanczos3:5,5:"Lanczos3"});export class PhotonImage{static __wrap(t){t>>>=0;const e=Object.create(PhotonImage.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();wasm.__wbg_photonimage_free(t)}constructor(t,e,_){const a=passArray8ToWasm0(t,wasm.__wbindgen_malloc),r=WASM_VECTOR_LEN,n=wasm.photonimage_new(a,r,e,_);return PhotonImage.__wrap(n)}static new_from_base64(t){const e=passStringToWasm0(t,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),_=WASM_VECTOR_LEN,a=wasm.base64_to_image(e,_);return PhotonImage.__wrap(a)}static new_from_byteslice(t){const e=passArray8ToWasm0(t,wasm.__wbindgen_malloc),_=WASM_VECTOR_LEN,a=wasm.photonimage_new_from_byteslice(e,_);return PhotonImage.__wrap(a)}static new_from_blob(t){const e=wasm.photonimage_new_from_blob(addHeapObject(t));return PhotonImage.__wrap(e)}static new_from_image(t){const e=wasm.photonimage_new_from_image(addHeapObject(t));return PhotonImage.__wrap(e)}get_width(){return wasm.photonimage_get_width(this.__wbg_ptr)>>>0}get_raw_pixels(){try{const a=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.photonimage_get_raw_pixels(a,this.__wbg_ptr);var t=getInt32Memory0()[a/4+0],e=getInt32Memory0()[a/4+1],_=getArrayU8FromWasm0(t,e).slice();return wasm.__wbindgen_free(t,1*e),_}finally{wasm.__wbindgen_add_to_stack_pointer(16)}}get_height(){return wasm.photonimage_get_height(this.__wbg_ptr)>>>0}get_base64(){let t,e;try{const r=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.photonimage_get_base64(r,this.__wbg_ptr);var _=getInt32Memory0()[r/4+0],a=getInt32Memory0()[r/4+1];return t=_,e=a,getStringFromWasm0(_,a)}finally{wasm.__wbindgen_add_to_stack_pointer(16),wasm.__wbindgen_free(t,e)}}get_bytes(){try{const a=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.photonimage_get_bytes(a,this.__wbg_ptr);var t=getInt32Memory0()[a/4+0],e=getInt32Memory0()[a/4+1],_=getArrayU8FromWasm0(t,e).slice();return wasm.__wbindgen_free(t,1*e),_}finally{wasm.__wbindgen_add_to_stack_pointer(16)}}get_bytes_jpeg(t){try{const r=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.photonimage_get_bytes_jpeg(r,this.__wbg_ptr,t);var e=getInt32Memory0()[r/4+0],_=getInt32Memory0()[r/4+1],a=getArrayU8FromWasm0(e,_).slice();return wasm.__wbindgen_free(e,1*_),a}finally{wasm.__wbindgen_add_to_stack_pointer(16)}}get_image_data(){return takeObject(wasm.photonimage_get_image_data(this.__wbg_ptr))}set_imgdata(t){wasm.photonimage_set_imgdata(this.__wbg_ptr,addHeapObject(t))}}export class PreprocessedImage{static __wrap(t){t>>>=0;const e=Object.create(PreprocessedImage.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();wasm.__wbg_preprocessedimage_free(t)}get_data(){try{const a=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.preprocessedimage_get_data(a,this.__wbg_ptr);var t=getInt32Memory0()[a/4+0],e=getInt32Memory0()[a/4+1],_=getArrayF32FromWasm0(t,e).slice();return wasm.__wbindgen_free(t,4*e),_}finally{wasm.__wbindgen_add_to_stack_pointer(16)}}get_width(){return wasm.preprocessedimage_get_width(this.__wbg_ptr)>>>0}get_height(){return wasm.preprocessedimage_get_height(this.__wbg_ptr)>>>0}}export class Rgb{static __wrap(t){t>>>=0;const e=Object.create(Rgb.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();wasm.__wbg_rgb_free(t)}constructor(t,e,_){const a=wasm.rgb_new(t,e,_);return Rgb.__wrap(a)}set_red(t){wasm.rgb_set_red(this.__wbg_ptr,t)}set_green(t){wasm.rgb_set_green(this.__wbg_ptr,t)}set_blue(t){wasm.rgb_set_blue(this.__wbg_ptr,t)}get_red(){return wasm.rgb_get_red(this.__wbg_ptr)}get_green(){return wasm.rgb_get_green(this.__wbg_ptr)}get_blue(){return wasm.rgb_get_blue(this.__wbg_ptr)}}export class Rgba{static __wrap(t){t>>>=0;const e=Object.create(Rgba.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();wasm.__wbg_rgba_free(t)}constructor(t,e,_,a){const r=wasm.rgba_new(t,e,_,a);return Rgba.__wrap(r)}set_red(t){wasm.rgb_set_red(this.__wbg_ptr,t)}set_green(t){wasm.rgb_set_green(this.__wbg_ptr,t)}set_blue(t){wasm.rgb_set_blue(this.__wbg_ptr,t)}set_alpha(t){wasm.rgba_set_alpha(this.__wbg_ptr,t)}get_red(){return wasm.rgb_get_red(this.__wbg_ptr)}get_green(){return wasm.rgb_get_green(this.__wbg_ptr)}get_blue(){return wasm.rgb_get_blue(this.__wbg_ptr)}get_alpha(){return wasm.rgba_get_alpha(this.__wbg_ptr)}}export function __wbindgen_object_drop_ref(t){takeObject(t)}export function __wbg_new_abda76e883ba8a5f(){return addHeapObject(new Error)}export function __wbg_stack_658279fe44541cf6(t,e){const _=passStringToWasm0(getObject(e).stack,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),a=WASM_VECTOR_LEN;getInt32Memory0()[t/4+1]=a,getInt32Memory0()[t/4+0]=_}export function __wbg_error_f851667af71bcfc6(t,e){let _,a;try{_=t,a=e,console.error(getStringFromWasm0(t,e))}finally{wasm.__wbindgen_free(_,a)}}export function __wbg_instanceof_Window_f2bf9e8e91f1be0d(t){let e;try{e=getObject(t)instanceof Window}catch{e=!1}return e}export function __wbg_document_a11e2f345af07033(t){const e=getObject(t).document;return isLikeNone(e)?0:addHeapObject(e)}export function __wbg_body_483afe07b0958d3b(t){const e=getObject(t).body;return isLikeNone(e)?0:addHeapObject(e)}export function __wbg_createElement_5281e2aae74efc9d(){return handleError((function(t,e,_){return addHeapObject(getObject(t).createElement(getStringFromWasm0(e,_)))}),arguments)}export function __wbg_width_020d7bde350571e9(t){return getObject(t).width}export function __wbg_height_d65d28af1b6f26d3(t){return getObject(t).height}export function __wbg_data_f319d3380b214a26(t,e){const _=passArray8ToWasm0(getObject(e).data,wasm.__wbindgen_malloc),a=WASM_VECTOR_LEN;getInt32Memory0()[t/4+1]=a,getInt32Memory0()[t/4+0]=_}export function __wbg_newwithu8clampedarrayandsh_c90e0c3609c4ecc2(){return handleError((function(t,e,_,a){return addHeapObject(new ImageData(getClampedArrayU8FromWasm0(t,e),_>>>0,a>>>0))}),arguments)}export function __wbg_instanceof_CanvasRenderingContext2d_b4050f3a451ac712(t){let e;try{e=getObject(t)instanceof CanvasRenderingContext2D}catch{e=!1}return e}export function __wbg_drawImage_fa7fd856fb164132(){return handleError((function(t,e,_,a){getObject(t).drawImage(getObject(e),_,a)}),arguments)}export function __wbg_drawImage_41f8e8a7fc2b0de3(){return handleError((function(t,e,_,a,r,n,s,o,g,c){getObject(t).drawImage(getObject(e),_,a,r,n,s,o,g,c)}),arguments)}export function __wbg_getImageData_956c421f9b7cdfe7(){return handleError((function(t,e,_,a,r){return addHeapObject(getObject(t).getImageData(e,_,a,r))}),arguments)}export function __wbg_putImageData_0009acf77045dec6(){return handleError((function(t,e,_,a){getObject(t).putImageData(getObject(e),_,a)}),arguments)}export function __wbg_width_250e8da00ab1c884(t){return getObject(t).width}export function __wbg_height_e41b71b2f3141e8e(t){return getObject(t).height}export function __wbg_settextContent_ea2ce5e8fc889af7(t,e,_){getObject(t).textContent=0===e?void 0:getStringFromWasm0(e,_)}export function __wbg_appendChild_173b88a25c048f2b(){return handleError((function(t,e){return addHeapObject(getObject(t).appendChild(getObject(e)))}),arguments)}export function __wbg_instanceof_HtmlCanvasElement_6e58598b4e8b1586(t){let e;try{e=getObject(t)instanceof HTMLCanvasElement}catch{e=!1}return e}export function __wbg_width_3a395887a577233b(t){return getObject(t).width}export function __wbg_setwidth_885d5dd3c7f48f41(t,e){getObject(t).width=e>>>0}export function __wbg_height_b7046017c4148386(t){return getObject(t).height}export function __wbg_setheight_0d2b445bb6a5a3f2(t,e){getObject(t).height=e>>>0}export function __wbg_getContext_62ccb1aa0e6c8b86(){return handleError((function(t,e,_){const a=getObject(t).getContext(getStringFromWasm0(e,_));return isLikeNone(a)?0:addHeapObject(a)}),arguments)}export function __wbg_newnoargs_e643855c6572a4a8(t,e){return addHeapObject(new Function(getStringFromWasm0(t,e)))}export function __wbg_call_f96b398515635514(){return handleError((function(t,e){return addHeapObject(getObject(t).call(getObject(e)))}),arguments)}export function __wbindgen_object_clone_ref(t){return addHeapObject(getObject(t))}export function __wbg_self_b9aad7f1c618bfaf(){return handleError((function(){return addHeapObject(self.self)}),arguments)}export function __wbg_window_55e469842c98b086(){return handleError((function(){return addHeapObject(window.window)}),arguments)}export function __wbg_globalThis_d0957e302752547e(){return handleError((function(){return addHeapObject(globalThis.globalThis)}),arguments)}export function __wbg_global_ae2f87312b8987fb(){return handleError((function(){return addHeapObject(global.global)}),arguments)}export function __wbindgen_is_undefined(t){return void 0===getObject(t)}export function __wbg_buffer_fcbfb6d88b2732e9(t){return addHeapObject(getObject(t).buffer)}export function __wbg_new_bc5d9aad3f9ac80e(t){return addHeapObject(new Uint8Array(getObject(t)))}export function __wbg_set_4b3aa8445ac1e91c(t,e,_){getObject(t).set(getObject(e),_>>>0)}export function __wbg_length_d9c4ded7e708c6a1(t){return getObject(t).length}export function __wbindgen_debug_string(t,e){const _=passStringToWasm0(debugString(getObject(e)),wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),a=WASM_VECTOR_LEN;getInt32Memory0()[t/4+1]=a,getInt32Memory0()[t/4+0]=_}export function __wbindgen_throw(t,e){throw new Error(getStringFromWasm0(t,e))}export function __wbindgen_memory(){return addHeapObject(wasm.memory)}