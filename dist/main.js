!function(r){var e={};function t(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return r[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var i in r)t.d(n,i,function(e){return r[e]}.bind(null,i));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="/dist",t(t.s=2)}([function(r,e,t){"use strict";r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var t=function(r,e){var t=r[1]||"",n=r[3];if(!n)return t;if(e&&"function"==typeof btoa){var i=(o=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),a=n.sources.map((function(r){return"/*# sourceURL=".concat(n.sourceRoot).concat(r," */")}));return[t].concat(a).concat([i]).join("\n")}var o,s,u;return[t].join("\n")}(e,r);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(r,t){"string"==typeof r&&(r=[[null,r,""]]);for(var n={},i=0;i<this.length;i++){var a=this[i][0];null!=a&&(n[a]=!0)}for(var o=0;o<r.length;o++){var s=r[o];null!=s[0]&&n[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),e.push(s))}},e}},function(r,e,t){"use strict";var n,i={},a=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},o=function(){var r={};return function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}r[e]=t}return r[e]}}();function s(r,e){for(var t=[],n={},i=0;i<r.length;i++){var a=r[i],o=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};n[o]?n[o].parts.push(s):t.push(n[o]={id:o,parts:[s]})}return t}function u(r,e){for(var t=0;t<r.length;t++){var n=r[t],a=i[n.id],o=0;if(a){for(a.refs++;o<a.parts.length;o++)a.parts[o](n.parts[o]);for(;o<n.parts.length;o++)a.parts.push(h(n.parts[o],e))}else{for(var s=[];o<n.parts.length;o++)s.push(h(n.parts[o],e));i[n.id]={id:n.id,refs:1,parts:s}}}}function c(r){var e=document.createElement("style");if(void 0===r.attributes.nonce){var n=t.nc;n&&(r.attributes.nonce=n)}if(Object.keys(r.attributes).forEach((function(t){e.setAttribute(t,r.attributes[t])})),"function"==typeof r.insert)r.insert(e);else{var i=o(r.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,d=(l=[],function(r,e){return l[r]=e,l.filter(Boolean).join("\n")});function f(r,e,t,n){var i=t?"":n.css;if(r.styleSheet)r.styleSheet.cssText=d(e,i);else{var a=document.createTextNode(i),o=r.childNodes;o[e]&&r.removeChild(o[e]),o.length?r.insertBefore(a,o[e]):r.appendChild(a)}}function p(r,e,t){var n=t.css,i=t.media,a=t.sourceMap;if(i&&r.setAttribute("media",i),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}var _=null,m=0;function h(r,e){var t,n,i;if(e.singleton){var a=m++;t=_||(_=c(e)),n=f.bind(null,t,a,!1),i=f.bind(null,t,a,!0)}else t=c(e),n=p.bind(null,t,e),i=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(t)};return n(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap)return;n(r=e)}else i()}}r.exports=function(r,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a());var t=s(r,e);return u(t,e),function(r){for(var n=[],a=0;a<t.length;a++){var o=t[a],c=i[o.id];c&&(c.refs--,n.push(c))}r&&u(s(r,e),e);for(var l=0;l<n.length;l++){var d=n[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete i[d.id]}}}}},function(r,e,t){r.exports=t(3)},function(r,e,t){"use strict";t.r(e);t(4),t(6),t(8);(()=>console.log(123))()},function(r,e,t){var n=t(5);"string"==typeof n&&(n=[[r.i,n,""]]);var i={insert:"head",singleton:!1};t(1)(n,i);n.locals&&(r.exports=n.locals)},function(r,e,t){(r.exports=t(0)(!1)).push([r.i,"body {\n    font-family: Helvetica, Arial, sans-serif;\n    text-align: center;\n}\n\nh1 {\n    font-size: 28px;\n    margin: 20px;\n}\n\np {\n    border: 1px solid black;\n    padding: 20px;\n    margin: 30px auto;\n    width: 50%;\n    font-size: 18px;\n}",""])},function(r,e,t){var n=t(7);"string"==typeof n&&(n=[[r.i,n,""]]);var i={insert:"head",singleton:!1};t(1)(n,i);n.locals&&(r.exports=n.locals)},function(r,e,t){(r.exports=t(0)(!1)).push([r.i,"button {\n    border: 1px solid black;\n    background-color: white;\n    padding: 8px;\n    font: inherit;\n    cursor: pointer;\n    outline: none;\n}\n\nbutton:hover {\n    background-color: #ccc;\n}",""])},function(r,e,t){r.exports=function(){"use strict";function r(r,e,t){var n=r.createShader(e);if(r.shaderSource(n,t),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw new Error(r.getShaderInfoLog(n));return n}function e(e,t,n){var i=e.createProgram(),a=r(e,e.VERTEX_SHADER,t),o=r(e,e.FRAGMENT_SHADER,n);if(e.attachShader(i,a),e.attachShader(i,o),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS))throw new Error(e.getProgramInfoLog(i));for(var s={program:i},u=e.getProgramParameter(i,e.ACTIVE_ATTRIBUTES),c=0;c<u;c++){var l=e.getActiveAttrib(i,c);s[l.name]=e.getAttribLocation(i,l.name)}for(var d=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),f=0;f<d;f++){var p=e.getActiveUniform(i,f);s[p.name]=e.getUniformLocation(i,p.name)}return s}function t(r,e,t,n,i){var a=r.createTexture();return r.bindTexture(r.TEXTURE_2D,a),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,e),t instanceof Uint8Array?r.texImage2D(r.TEXTURE_2D,0,r.RGBA,n,i,0,r.RGBA,r.UNSIGNED_BYTE,t):r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t),r.bindTexture(r.TEXTURE_2D,null),a}function n(r,e,t){r.activeTexture(r.TEXTURE0+t),r.bindTexture(r.TEXTURE_2D,e)}function i(r,e){var t=r.createBuffer();return r.bindBuffer(r.ARRAY_BUFFER,t),r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW),t}function a(r,e,t,n){r.bindBuffer(r.ARRAY_BUFFER,e),r.enableVertexAttribArray(t),r.vertexAttribPointer(t,n,r.FLOAT,!1,0,0)}function o(r,e,t){r.bindFramebuffer(r.FRAMEBUFFER,e),t&&r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,t,0)}var s="precision mediump float;\r\n\r\nattribute vec2 a_pos;\r\n\r\nvarying vec2 v_tex_pos;\r\n\r\nvoid main() {\r\n    v_tex_pos = a_pos;    \r\n    gl_Position = vec4(1.0 - 2.0 * a_pos, 0, 1);    \r\n}    \r\n",u=function(r,n){this.gl=r,this.fadeOpacity=.996,this.speedFactor=.25,this.dropRate=.003,this.dropRateBump=.01,this.drawProgram=e(r,"precision mediump float; \r\n\r\nattribute float a_index; \r\n\r\nuniform sampler2D u_particles; \r\nuniform float u_particles_res;\r\n\r\nvarying vec2 v_particle_pos;\r\n\r\nvoid main() {    \r\n    vec4 color = texture2D(u_particles, vec2(    \r\n        fract(a_index / u_particles_res),    \r\n        floor(a_index / u_particles_res) / u_particles_res));    \r\n\r\n    // decode current particle position from the pixel's RGBA value    \r\n    v_particle_pos = vec2(        \r\n        color.r / 255.0 + color.b,        \r\n        color.g / 255.0 + color.a);    \r\n\r\n    gl_PointSize = 1.0;    \r\n    gl_Position = vec4(2.0 * v_particle_pos.x - 1.0, 1.0 - 2.0 * v_particle_pos.y, 0, 1);    \r\n}    \r\n","precision mediump float;\r\n\r\nuniform sampler2D u_wind;\r\nuniform vec2 u_wind_min;\r\nuniform vec2 u_wind_max;\r\nuniform sampler2D u_color_ramp;\r\n\r\nvarying vec2 v_particle_pos;\r\n\r\nvoid main() {    \r\n    vec2 velocity = mix(u_wind_min, u_wind_max, texture2D(u_wind, v_particle_pos).rg);    \r\n    float speed_t = length(velocity) / length(u_wind_max);    \r\n\r\n    // color ramp is encoded in a 16x16 texture    \r\n    vec2 ramp_pos = vec2(        \r\n        fract(16.0 * speed_t),    \r\n        floor(16.0 * speed_t) / 16.0);    \r\n\r\n    gl_FragColor = texture2D(u_color_ramp, ramp_pos);    \r\n}    \r\n"),this.screenProgram=e(r,s,"precision mediump float;\r\n\r\nuniform sampler2D u_screen;\r\nuniform float u_opacity;\r\n\r\nvarying vec2 v_tex_pos;\r\n\r\nvoid main() {    \r\n    vec4 color = texture2D(u_screen, 1.0 - v_tex_pos);    \r\n    // a hack to guarantee opacity fade out even with a value close to 1.0    \r\n    gl_FragColor = vec4(floor(255.0 * color * u_opacity) / 255.0);    \r\n}    \r\n"),this.updateProgram=e(r,s,"precision highp float;\r\n\r\nuniform sampler2D u_particles;\r\nuniform sampler2D u_wind;\r\nuniform vec2 u_wind_res;\r\nuniform vec2 u_wind_min;\r\nuniform vec2 u_wind_max;\r\nuniform float u_rand_seed;\r\nuniform float u_speed_factor;\r\nuniform float u_drop_rate;\r\nuniform float u_drop_rate_bump;\r\n\r\nvarying vec2 v_tex_pos;\r\n\r\n// pseudo-random generator\r\nconst vec3 rand_constants = vec3(12.9898, 78.233, 4375.85453);\r\nfloat rand(const vec2 co) {    \r\n    float t = dot(rand_constants.xy, co);    \r\n    return fract(sin(t) * (rand_constants.z + t));    \r\n}\r\n\r\n// wind speed lookup; use manual bilinear filtering based on 4 adjacent pixels for smooth interpolation    \r\nvec2 lookup_wind(const vec2 uv) {        \r\n    // return texture2D(u_wind, uv).rg;// lower-res hardware filtering        \r\n    vec2 px = 1.0 / u_wind_res;     \r\n    vec2 vc = (floor(uv * u_wind_res)) * px;     \r\n    vec2 f = fract(uv * u_wind_res);     \r\n    vec2 tl = texture2D(u_wind, vc).rg;     \r\n    vec2 tr = texture2D(u_wind, vc + vec2(px.x, 0)).rg;     \r\n    vec2 bl = texture2D(u_wind, vc + vec2(0, px.y)).rg;     \r\n    vec2 br = texture2D(u_wind, vc + px).rg;     \r\n    return mix(mix(tl, tr, f.x), mix(bl, br, f.x), f.y);     \r\n}     \r\n     \r\nvoid main() {        \r\n    vec4 color = texture2D(u_particles, v_tex_pos);        \r\n    vec2 pos = vec2(            \r\n        color.r / 255.0 + color.b,            \r\n        color.g / 255.0 + color.a);// decode particle position from pixel RGBA            \r\n\r\n    vec2 velocity = mix(u_wind_min, u_wind_max, lookup_wind(pos));         \r\n    float speed_t = length(velocity) / length(u_wind_max);         \r\n\r\n    // take EPSG:4236 distortion into account for calculating where the particle moved         \r\n    float distortion = cos(radians(pos.y * 180.0 - 90.0));         \r\n    vec2 offset = vec2(velocity.x / distortion, -velocity.y) * 0.0001 * u_speed_factor;         \r\n\r\n    // update particle position, wrapping around the date line         \r\n    pos = pos + offset;         \r\n\r\n    // a random seed to use for the particle drop         \r\n    vec2 seed = (pos + v_tex_pos) * u_rand_seed;         \r\n\r\n    // drop rate is a chance a particle will restart at random position, to avoid degeneration         \r\n    float drop_rate = u_drop_rate + speed_t * u_drop_rate_bump;         \r\n    float drop = step(1.0 - drop_rate, rand(seed));         \r\n\r\n    vec2 random_pos = vec2(            \r\n        rand(seed + 1.3),         \r\n        rand(seed + 2.1));         \r\n    pos = mix(pos, random_pos, drop);         \r\n\r\n    // encode the new particle position back into RGBA         \r\n    gl_FragColor = vec4(            \r\n        fract(pos * 255.0),         \r\n        floor(pos * 255.0) / 255.0);         \r\n}         \r\n         "),this.quadBuffer=i(r,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1])),this.framebuffer=r.createFramebuffer(),this.colorRampTexture=t(this.gl,this.gl.LINEAR,function(r){var e=document.createElement("canvas"),t=e.getContext("2d");e.width=256,e.height=1;var n=t.createLinearGradient(0,0,256,0);for(var i in r)n.addColorStop(+i,r[i]);return t.fillStyle=n,t.fillRect(0,0,256,1),new Uint8Array(t.getImageData(0,0,256,1).data)}(n),16,16),this.resize()},c={numParticles:{}};return u.prototype.resize=function(){var r=this.gl,e=new Uint8Array(r.canvas.width*r.canvas.height*4);this.backgroundTexture=t(r,r.NEAREST,e,r.canvas.width,r.canvas.height),this.screenTexture=t(r,r.NEAREST,e,r.canvas.width,r.canvas.height)},c.numParticles.set=function(r){var e=this.gl,n=this.particleStateResolution=Math.ceil(Math.sqrt(r));this._numParticles=n*n;for(var a=new Uint8Array(4*this._numParticles),o=0;o<a.length;o++)a[o]=Math.floor(256*Math.random());this.particleStateTexture0=t(e,e.NEAREST,a,n,n),this.particleStateTexture1=t(e,e.NEAREST,a,n,n);for(var s=new Float32Array(this._numParticles),u=0;u<this._numParticles;u++)s[u]=u;this.particleIndexBuffer=i(e,s)},c.numParticles.get=function(){return this._numParticles},u.prototype.setWind=function(r){this.windData=r,this.windTexture=t(this.gl,this.gl.LINEAR,r.image)},u.prototype.draw=function(){var r=this.gl;r.disable(r.DEPTH_TEST),r.disable(r.STENCIL_TEST),n(r,this.windTexture,0),n(r,this.particleStateTexture0,1),this.drawScreen(),this.updateParticles()},u.prototype.drawScreen=function(){var r=this.gl;o(r,this.framebuffer,this.screenTexture),r.viewport(0,0,r.canvas.width,r.canvas.height),this.drawTexture(this.backgroundTexture,this.fadeOpacity),this.drawParticles(),o(r,null),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),this.drawTexture(this.screenTexture,1),r.disable(r.BLEND);var e=this.backgroundTexture;this.backgroundTexture=this.screenTexture,this.screenTexture=e},u.prototype.drawTexture=function(r,e){var t=this.gl,i=this.screenProgram;t.useProgram(i.program),a(t,this.quadBuffer,i.a_pos,2),n(t,r,2),t.uniform1i(i.u_screen,2),t.uniform1f(i.u_opacity,e),t.drawArrays(t.TRIANGLES,0,6)},u.prototype.drawParticles=function(){var r=this.gl,e=this.drawProgram;r.useProgram(e.program),a(r,this.particleIndexBuffer,e.a_index,1),n(r,this.colorRampTexture,2),r.uniform1i(e.u_wind,0),r.uniform1i(e.u_particles,1),r.uniform1i(e.u_color_ramp,2),r.uniform1f(e.u_particles_res,this.particleStateResolution),r.uniform2f(e.u_wind_min,this.windData.uMin,this.windData.vMin),r.uniform2f(e.u_wind_max,this.windData.uMax,this.windData.vMax),r.drawArrays(r.POINTS,0,this._numParticles)},u.prototype.updateParticles=function(){var r=this.gl;o(r,this.framebuffer,this.particleStateTexture1),r.viewport(0,0,this.particleStateResolution,this.particleStateResolution);var e=this.updateProgram;r.useProgram(e.program),a(r,this.quadBuffer,e.a_pos,2),r.uniform1i(e.u_wind,0),r.uniform1i(e.u_particles,1),r.uniform1f(e.u_rand_seed,Math.random()),r.uniform2f(e.u_wind_res,this.windData.width,this.windData.height),r.uniform2f(e.u_wind_min,this.windData.uMin,this.windData.vMin),r.uniform2f(e.u_wind_max,this.windData.uMax,this.windData.vMax),r.uniform1f(e.u_speed_factor,this.speedFactor),r.uniform1f(e.u_drop_rate,this.dropRate),r.uniform1f(e.u_drop_rate_bump,this.dropRateBump),r.drawArrays(r.TRIANGLES,0,6);var t=this.particleStateTexture0;this.particleStateTexture0=this.particleStateTexture1,this.particleStateTexture1=t},Object.defineProperties(u.prototype,c),u}()}]);