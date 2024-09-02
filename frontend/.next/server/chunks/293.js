"use strict";exports.id=293,exports.ids=[293],exports.modules={40580:(t,e,i)=>{i.d(e,{SIWEController:()=>is,getDidAddress:()=>e3,getDidChainId:()=>e2});var r,o,a,n,s,l,c=i(69462),u=i(3345);i(31276),i(74219),i(6878),i(1919),i(15293),i(72397),i(49710),i(37753),i(37997),i(36289),i(95237);var d=Object.defineProperty;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var h="u">typeof globalThis?globalThis:"u">typeof window?window:"u">typeof global?global:"u">typeof self?self:{},f={exports:{}};!function(t){!function(){var e="input is invalid type",i="object"==typeof window,r=i?window:{};r.JS_SHA3_NO_WINDOW&&(i=!1);var o=!i&&"object"==typeof self;!r.JS_SHA3_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node?r=h:o&&(r=self);var a=!r.JS_SHA3_NO_COMMON_JS&&t.exports,n=!r.JS_SHA3_NO_ARRAY_BUFFER&&"u">typeof ArrayBuffer,s="0123456789abcdef".split(""),l=[4,1024,262144,67108864],c=[0,8,16,24],u=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],d=[224,256,384,512],f=[128,256],p=["hex","buffer","arrayBuffer","array","digest"],g={128:168,256:136};(r.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),n&&(r.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});for(var v=function(t,e,i){return function(r){return new I(t,e,t).update(r)[i]()}},w=function(t,e,i){return function(r,o){return new I(t,e,o).update(r)[i]()}},m=function(t,e,i){return function(e,r,o,a){return A["cshake"+t].update(e,r,o,a)[i]()}},b=function(t,e,i){return function(e,r,o,a){return A["kmac"+t].update(e,r,o,a)[i]()}},y=function(t,e,i,r){for(var o=0;o<p.length;++o){var a=p[o];t[a]=e(i,r,a)}return t},x=function(t,e){var i=v(t,e,"hex");return i.create=function(){return new I(t,e,t)},i.update=function(t){return i.create().update(t)},y(i,v,t,e)},C=[{name:"keccak",padding:[1,256,65536,16777216],bits:d,createMethod:x},{name:"sha3",padding:[6,1536,393216,100663296],bits:d,createMethod:x},{name:"shake",padding:[31,7936,2031616,520093696],bits:f,createMethod:function(t,e){var i=w(t,e,"hex");return i.create=function(i){return new I(t,e,i)},i.update=function(t,e){return i.create(e).update(t)},y(i,w,t,e)}},{name:"cshake",padding:l,bits:f,createMethod:function(t,e){var i=g[t],r=m(t,e,"hex");return r.create=function(r,o,a){return o||a?new I(t,e,r).bytepad([o,a],i):A["shake"+t].create(r)},r.update=function(t,e,i,o){return r.create(e,i,o).update(t)},y(r,m,t,e)}},{name:"kmac",padding:l,bits:f,createMethod:function(t,e){var i=g[t],r=b(t,e,"hex");return r.create=function(r,o,a){return new O(t,e,o).bytepad(["KMAC",a],i).bytepad([r],i)},r.update=function(t,e,i,o){return r.create(t,i,o).update(e)},y(r,b,t,e)}}],A={},M=[],k=0;k<C.length;++k)for(var S=C[k],E=S.bits,P=0;P<E.length;++P){var B=S.name+"_"+E[P];if(M.push(B),A[B]=S.createMethod(E[P],S.padding),"sha3"!==S.name){var R=S.name+E[P];M.push(R),A[R]=A[B]}}function I(t,e,i){this.blocks=[],this.s=[],this.padding=e,this.outputBits=i,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(t<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=i>>5,this.extraBytes=(31&i)>>3;for(var r=0;r<50;++r)this.s[r]=0}function O(t,e,i){I.call(this,t,e,i)}I.prototype.update=function(t){if(this.finalized)throw Error("finalize already called");var i,r=typeof t;if("string"!==r){if("object"===r){if(null===t)throw Error(e);if(n&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!n||!ArrayBuffer.isView(t)))throw Error(e)}else throw Error(e);i=!0}for(var o,a,s=this.blocks,l=this.byteCount,u=t.length,d=this.blockCount,h=0,f=this.s;h<u;){if(this.reset)for(this.reset=!1,s[0]=this.block,o=1;o<d+1;++o)s[o]=0;if(i)for(o=this.start;h<u&&o<l;++h)s[o>>2]|=t[h]<<c[3&o++];else for(o=this.start;h<u&&o<l;++h)(a=t.charCodeAt(h))<128?s[o>>2]|=a<<c[3&o++]:(a<2048?s[o>>2]|=(192|a>>6)<<c[3&o++]:(a<55296||a>=57344?s[o>>2]|=(224|a>>12)<<c[3&o++]:(a=65536+((1023&a)<<10|1023&t.charCodeAt(++h)),s[o>>2]|=(240|a>>18)<<c[3&o++],s[o>>2]|=(128|a>>12&63)<<c[3&o++]),s[o>>2]|=(128|a>>6&63)<<c[3&o++]),s[o>>2]|=(128|63&a)<<c[3&o++]);if(this.lastByteIndex=o,o>=l){for(this.start=o-l,this.block=s[d],o=0;o<d;++o)f[o]^=s[o];z(f),this.reset=!0}else this.start=o}return this},I.prototype.encode=function(t,e){var i=255&t,r=1,o=[i];for(t>>=8,i=255&t;i>0;)o.unshift(i),t>>=8,i=255&t,++r;return e?o.push(r):o.unshift(r),this.update(o),o.length},I.prototype.encodeString=function(t){var i,r=typeof t;if("string"!==r){if("object"===r){if(null===t)throw Error(e);if(n&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!n||!ArrayBuffer.isView(t)))throw Error(e)}else throw Error(e);i=!0}var o=0,a=t.length;if(i)o=a;else for(var s=0;s<t.length;++s){var l=t.charCodeAt(s);l<128?o+=1:l<2048?o+=2:l<55296||l>=57344?o+=3:(l=65536+((1023&l)<<10|1023&t.charCodeAt(++s)),o+=4)}return o+=this.encode(8*o),this.update(t),o},I.prototype.bytepad=function(t,e){for(var i=this.encode(e),r=0;r<t.length;++r)i+=this.encodeString(t[r]);var o=e-i%e,a=[];return a.length=o,this.update(a),this},I.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex,i=this.blockCount,r=this.s;if(t[e>>2]|=this.padding[3&e],this.lastByteIndex===this.byteCount)for(t[0]=t[i],e=1;e<i+1;++e)t[e]=0;for(t[i-1]|=2147483648,e=0;e<i;++e)r[e]^=t[e];z(r)}},I.prototype.toString=I.prototype.hex=function(){this.finalize();for(var t,e=this.blockCount,i=this.s,r=this.outputBlocks,o=this.extraBytes,a=0,n=0,l="";n<r;){for(a=0;a<e&&n<r;++a,++n)l+=s[(t=i[a])>>4&15]+s[15&t]+s[t>>12&15]+s[t>>8&15]+s[t>>20&15]+s[t>>16&15]+s[t>>28&15]+s[t>>24&15];n%e==0&&(z(i),a=0)}return o&&(l+=s[(t=i[a])>>4&15]+s[15&t],o>1&&(l+=s[t>>12&15]+s[t>>8&15]),o>2&&(l+=s[t>>20&15]+s[t>>16&15])),l},I.prototype.arrayBuffer=function(){this.finalize();var t,e=this.blockCount,i=this.s,r=this.outputBlocks,o=this.extraBytes,a=0,n=0,s=this.outputBits>>3;t=new ArrayBuffer(o?r+1<<2:s);for(var l=new Uint32Array(t);n<r;){for(a=0;a<e&&n<r;++a,++n)l[n]=i[a];n%e==0&&z(i)}return o&&(l[a]=i[a],t=t.slice(0,s)),t},I.prototype.buffer=I.prototype.arrayBuffer,I.prototype.digest=I.prototype.array=function(){this.finalize();for(var t,e,i=this.blockCount,r=this.s,o=this.outputBlocks,a=this.extraBytes,n=0,s=0,l=[];s<o;){for(n=0;n<i&&s<o;++n,++s)t=s<<2,e=r[n],l[t]=255&e,l[t+1]=e>>8&255,l[t+2]=e>>16&255,l[t+3]=e>>24&255;s%i==0&&z(r)}return a&&(t=s<<2,e=r[n],l[t]=255&e,a>1&&(l[t+1]=e>>8&255),a>2&&(l[t+2]=e>>16&255)),l},O.prototype=new I,O.prototype.finalize=function(){return this.encode(this.outputBits,!0),I.prototype.finalize.call(this)};var z=function(t){var e,i,r,o,a,n,s,l,c,d,h,f,p,g,v,w,m,b,y,x,C,A,M,k,S,E,P,B,R,I,O,z,_,L,N,T,$,D,Z,j,H,U,F,V,Y,q,Q,G,K,J,W,X,tt,te,ti,tr,to,ta,tn,ts,tl,tc,tu;for(r=0;r<48;r+=2)o=t[0]^t[10]^t[20]^t[30]^t[40],a=t[1]^t[11]^t[21]^t[31]^t[41],n=t[2]^t[12]^t[22]^t[32]^t[42],s=t[3]^t[13]^t[23]^t[33]^t[43],l=t[4]^t[14]^t[24]^t[34]^t[44],c=t[5]^t[15]^t[25]^t[35]^t[45],d=t[6]^t[16]^t[26]^t[36]^t[46],h=t[7]^t[17]^t[27]^t[37]^t[47],f=t[8]^t[18]^t[28]^t[38]^t[48],p=t[9]^t[19]^t[29]^t[39]^t[49],e=f^(n<<1|s>>>31),i=p^(s<<1|n>>>31),t[0]^=e,t[1]^=i,t[10]^=e,t[11]^=i,t[20]^=e,t[21]^=i,t[30]^=e,t[31]^=i,t[40]^=e,t[41]^=i,e=o^(l<<1|c>>>31),i=a^(c<<1|l>>>31),t[2]^=e,t[3]^=i,t[12]^=e,t[13]^=i,t[22]^=e,t[23]^=i,t[32]^=e,t[33]^=i,t[42]^=e,t[43]^=i,e=n^(d<<1|h>>>31),i=s^(h<<1|d>>>31),t[4]^=e,t[5]^=i,t[14]^=e,t[15]^=i,t[24]^=e,t[25]^=i,t[34]^=e,t[35]^=i,t[44]^=e,t[45]^=i,e=l^(f<<1|p>>>31),i=c^(p<<1|f>>>31),t[6]^=e,t[7]^=i,t[16]^=e,t[17]^=i,t[26]^=e,t[27]^=i,t[36]^=e,t[37]^=i,t[46]^=e,t[47]^=i,e=d^(o<<1|a>>>31),i=h^(a<<1|o>>>31),t[8]^=e,t[9]^=i,t[18]^=e,t[19]^=i,t[28]^=e,t[29]^=i,t[38]^=e,t[39]^=i,t[48]^=e,t[49]^=i,g=t[0],v=t[1],q=t[11]<<4|t[10]>>>28,Q=t[10]<<4|t[11]>>>28,B=t[20]<<3|t[21]>>>29,R=t[21]<<3|t[20]>>>29,ts=t[31]<<9|t[30]>>>23,tl=t[30]<<9|t[31]>>>23,U=t[40]<<18|t[41]>>>14,F=t[41]<<18|t[40]>>>14,L=t[2]<<1|t[3]>>>31,N=t[3]<<1|t[2]>>>31,w=t[13]<<12|t[12]>>>20,m=t[12]<<12|t[13]>>>20,G=t[22]<<10|t[23]>>>22,K=t[23]<<10|t[22]>>>22,I=t[33]<<13|t[32]>>>19,O=t[32]<<13|t[33]>>>19,tc=t[42]<<2|t[43]>>>30,tu=t[43]<<2|t[42]>>>30,te=t[5]<<30|t[4]>>>2,ti=t[4]<<30|t[5]>>>2,T=t[14]<<6|t[15]>>>26,$=t[15]<<6|t[14]>>>26,b=t[25]<<11|t[24]>>>21,y=t[24]<<11|t[25]>>>21,J=t[34]<<15|t[35]>>>17,W=t[35]<<15|t[34]>>>17,z=t[45]<<29|t[44]>>>3,_=t[44]<<29|t[45]>>>3,k=t[6]<<28|t[7]>>>4,S=t[7]<<28|t[6]>>>4,tr=t[17]<<23|t[16]>>>9,to=t[16]<<23|t[17]>>>9,D=t[26]<<25|t[27]>>>7,Z=t[27]<<25|t[26]>>>7,x=t[36]<<21|t[37]>>>11,C=t[37]<<21|t[36]>>>11,X=t[47]<<24|t[46]>>>8,tt=t[46]<<24|t[47]>>>8,V=t[8]<<27|t[9]>>>5,Y=t[9]<<27|t[8]>>>5,E=t[18]<<20|t[19]>>>12,P=t[19]<<20|t[18]>>>12,ta=t[29]<<7|t[28]>>>25,tn=t[28]<<7|t[29]>>>25,j=t[38]<<8|t[39]>>>24,H=t[39]<<8|t[38]>>>24,A=t[48]<<14|t[49]>>>18,M=t[49]<<14|t[48]>>>18,t[0]=g^~w&b,t[1]=v^~m&y,t[10]=k^~E&B,t[11]=S^~P&R,t[20]=L^~T&D,t[21]=N^~$&Z,t[30]=V^~q&G,t[31]=Y^~Q&K,t[40]=te^~tr&ta,t[41]=ti^~to&tn,t[2]=w^~b&x,t[3]=m^~y&C,t[12]=E^~B&I,t[13]=P^~R&O,t[22]=T^~D&j,t[23]=$^~Z&H,t[32]=q^~G&J,t[33]=Q^~K&W,t[42]=tr^~ta&ts,t[43]=to^~tn&tl,t[4]=b^~x&A,t[5]=y^~C&M,t[14]=B^~I&z,t[15]=R^~O&_,t[24]=D^~j&U,t[25]=Z^~H&F,t[34]=G^~J&X,t[35]=K^~W&tt,t[44]=ta^~ts&tc,t[45]=tn^~tl&tu,t[6]=x^~A&g,t[7]=C^~M&v,t[16]=I^~z&k,t[17]=O^~_&S,t[26]=j^~U&L,t[27]=H^~F&N,t[36]=J^~X&V,t[37]=W^~tt&Y,t[46]=ts^~tc&te,t[47]=tl^~tu&ti,t[8]=A^~g&w,t[9]=M^~v&m,t[18]=z^~k&E,t[19]=_^~S&P,t[28]=U^~L&T,t[29]=F^~N&$,t[38]=X^~V&q,t[39]=tt^~Y&Q,t[48]=tc^~te&tr,t[49]=tu^~ti&to,t[0]^=u[r],t[1]^=u[r+1]};if(a)t.exports=A;else for(k=0;k<M.length;++k)r[M[k]]=A[M[k]]}()}(f);var p=f.exports;let g=!1,v=!1,w={debug:1,default:2,info:2,warning:3,error:4,off:5},m=w.default,b=null,y=function(){try{let t=[];if(["NFD","NFC","NFKD","NFKC"].forEach(e=>{try{if("test"!=="test".normalize(e))throw Error("bad normalize")}catch{t.push(e)}}),t.length)throw Error("missing "+t.join(", "));if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw Error("broken implementation")}catch(t){return t.message}return null}();(function(t){t.DEBUG="DEBUG",t.INFO="INFO",t.WARNING="WARNING",t.ERROR="ERROR",t.OFF="OFF"})(r||(r={})),function(t){t.UNKNOWN_ERROR="UNKNOWN_ERROR",t.NOT_IMPLEMENTED="NOT_IMPLEMENTED",t.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",t.NETWORK_ERROR="NETWORK_ERROR",t.SERVER_ERROR="SERVER_ERROR",t.TIMEOUT="TIMEOUT",t.BUFFER_OVERRUN="BUFFER_OVERRUN",t.NUMERIC_FAULT="NUMERIC_FAULT",t.MISSING_NEW="MISSING_NEW",t.INVALID_ARGUMENT="INVALID_ARGUMENT",t.MISSING_ARGUMENT="MISSING_ARGUMENT",t.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",t.CALL_EXCEPTION="CALL_EXCEPTION",t.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",t.NONCE_EXPIRED="NONCE_EXPIRED",t.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",t.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",t.TRANSACTION_REPLACED="TRANSACTION_REPLACED",t.ACTION_REJECTED="ACTION_REJECTED"}(o||(o={}));let x="0123456789abcdef";class C{constructor(t){Object.defineProperty(this,"version",{enumerable:!0,value:t,writable:!1})}_log(t,e){let i=t.toLowerCase();null==w[i]&&this.throwArgumentError("invalid log level name","logLevel",t),m>w[i]||console.log.apply(console,e)}debug(...t){this._log(C.levels.DEBUG,t)}info(...t){this._log(C.levels.INFO,t)}warn(...t){this._log(C.levels.WARNING,t)}makeError(t,e,i){if(v)return this.makeError("censored error",e,{});e||(e=C.errors.UNKNOWN_ERROR),i||(i={});let r=[];Object.keys(i).forEach(t=>{let e=i[t];try{if(e instanceof Uint8Array){let i="";for(let t=0;t<e.length;t++)i+=x[e[t]>>4]+x[15&e[t]];r.push(t+"=Uint8Array(0x"+i+")")}else r.push(t+"="+JSON.stringify(e))}catch{r.push(t+"="+JSON.stringify(i[t].toString()))}}),r.push(`code=${e}`),r.push(`version=${this.version}`);let a=t,n="";switch(e){case o.NUMERIC_FAULT:{n="NUMERIC_FAULT";let e=t;switch(e){case"overflow":case"underflow":case"division-by-zero":n+="-"+e;break;case"negative-power":case"negative-width":n+="-unsupported";break;case"unbound-bitwise-result":n+="-unbound-result"}break}case o.CALL_EXCEPTION:case o.INSUFFICIENT_FUNDS:case o.MISSING_NEW:case o.NONCE_EXPIRED:case o.REPLACEMENT_UNDERPRICED:case o.TRANSACTION_REPLACED:case o.UNPREDICTABLE_GAS_LIMIT:n=e}n&&(t+=" [ See: https://links.ethers.org/v5-errors-"+n+" ]"),r.length&&(t+=" ("+r.join(", ")+")");let s=Error(t);return s.reason=a,s.code=e,Object.keys(i).forEach(function(t){s[t]=i[t]}),s}throwError(t,e,i){throw this.makeError(t,e,i)}throwArgumentError(t,e,i){return this.throwError(t,C.errors.INVALID_ARGUMENT,{argument:e,value:i})}assert(t,e,i,r){t||this.throwError(e,i,r)}assertArgument(t,e,i,r){t||this.throwArgumentError(e,i,r)}checkNormalize(t){y&&this.throwError("platform missing String.prototype.normalize",C.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:y})}checkSafeUint53(t,e){"number"==typeof t&&(null==e&&(e="value not safe"),(t<0||t>=9007199254740991)&&this.throwError(e,C.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:t}),t%1&&this.throwError(e,C.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:t}))}checkArgumentCount(t,e,i){i=i?": "+i:"",t<e&&this.throwError("missing argument"+i,C.errors.MISSING_ARGUMENT,{count:t,expectedCount:e}),t>e&&this.throwError("too many arguments"+i,C.errors.UNEXPECTED_ARGUMENT,{count:t,expectedCount:e})}checkNew(t,e){(t===Object||null==t)&&this.throwError("missing new",C.errors.MISSING_NEW,{name:e.name})}checkAbstract(t,e){t===e?this.throwError("cannot instantiate abstract class "+JSON.stringify(e.name)+" directly; use a sub-class",C.errors.UNSUPPORTED_OPERATION,{name:t.name,operation:"new"}):(t===Object||null==t)&&this.throwError("missing new",C.errors.MISSING_NEW,{name:e.name})}static globalLogger(){return b||(b=new C("logger/5.7.0")),b}static setCensorship(t,e){if(!t&&e&&this.globalLogger().throwError("cannot permanently disable censorship",C.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),g){if(!t)return;this.globalLogger().throwError("error censorship permanent",C.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}v=!!t,g=!!e}static setLogLevel(t){let e=w[t.toLowerCase()];if(null==e){C.globalLogger().warn("invalid log level - "+t);return}m=e}static from(t){return new C(t)}}C.errors=o,C.levels=r;let A=new C("bytes/5.7.0");function M(t){return!!t.toHexString}function k(t){return t.slice||(t.slice=function(){let e=Array.prototype.slice.call(arguments);return k(new Uint8Array(Array.prototype.slice.apply(t,e)))}),t}function S(t){return"number"==typeof t&&t==t&&t%1==0}function E(t){if(null==t)return!1;if(t.constructor===Uint8Array)return!0;if("string"==typeof t||!S(t.length)||t.length<0)return!1;for(let e=0;e<t.length;e++){let i=t[e];if(!S(i)||i<0||i>=256)return!1}return!0}function P(t,e){if(e||(e={}),"number"==typeof t){A.checkSafeUint53(t,"invalid arrayify value");let e=[];for(;t;)e.unshift(255&t),t=parseInt(String(t/256));return 0===e.length&&e.push(0),k(new Uint8Array(e))}if(e.allowMissingPrefix&&"string"==typeof t&&"0x"!==t.substring(0,2)&&(t="0x"+t),M(t)&&(t=t.toHexString()),B(t)){let i=t.substring(2);i.length%2&&("left"===e.hexPad?i="0"+i:"right"===e.hexPad?i+="0":A.throwArgumentError("hex data is odd-length","value",t));let r=[];for(let t=0;t<i.length;t+=2)r.push(parseInt(i.substring(t,t+2),16));return k(new Uint8Array(r))}return E(t)?k(new Uint8Array(t)):A.throwArgumentError("invalid arrayify value","value",t)}function B(t,e){return!("string"!=typeof t||!t.match(/^0x[0-9A-Fa-f]*$/)||e&&t.length!==2+2*e)}let R="0123456789abcdef";function I(t,e){if(e||(e={}),"number"==typeof t){A.checkSafeUint53(t,"invalid hexlify value");let e="";for(;t;)e=R[15&t]+e,t=Math.floor(t/16);return e.length?(e.length%2&&(e="0"+e),"0x"+e):"0x00"}if("bigint"==typeof t)return(t=t.toString(16)).length%2?"0x0"+t:"0x"+t;if(e.allowMissingPrefix&&"string"==typeof t&&"0x"!==t.substring(0,2)&&(t="0x"+t),M(t))return t.toHexString();if(B(t))return t.length%2&&("left"===e.hexPad?t="0x0"+t.substring(2):"right"===e.hexPad?t+="0":A.throwArgumentError("hex data is odd-length","value",t)),t.toLowerCase();if(E(t)){let e="0x";for(let i=0;i<t.length;i++){let r=t[i];e+=R[(240&r)>>4]+R[15&r]}return e}return A.throwArgumentError("invalid hexlify value","value",t)}function O(t,e){for("string"!=typeof t?t=I(t):B(t)||A.throwArgumentError("invalid hex string","value",t),t.length>2*e+2&&A.throwArgumentError("value out of range","value",arguments[1]);t.length<2*e+2;)t="0x0"+t.substring(2);return t}function z(t){return"0x"+p.keccak_256(P(t))}var _={exports:{}},L=function(t){var e=t.default;if("function"==typeof e){var i=function(){return e.apply(this,arguments)};i.prototype=e.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(t).forEach(function(e){var r=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(i,e,r.get?r:{enumerable:!0,get:function(){return t[e]}})}),i}(Object.freeze({__proto__:null,default:{}}));!function(t,e){function i(t,e){if(!t)throw Error(e||"Assertion failed")}function r(t,e){t.super_=e;var i=function(){};i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t}function o(t,e,i){if(o.isBN(t))return t;this.negative=0,this.words=null,this.length=0,this.red=null,null!==t&&(("le"===e||"be"===e)&&(i=e,e=10),this._init(t||0,e||10,i||"be"))}"object"==typeof t?t.exports=o:e.BN=o,o.BN=o,o.wordSize=26;try{u="u">typeof window&&"u">typeof window.Buffer?window.Buffer:L.Buffer}catch{}function a(t,e){var r=t.charCodeAt(e);return r>=48&&r<=57?r-48:r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:void i(!1,"Invalid character in "+t)}function n(t,e,i){var r=a(t,i);return i-1>=e&&(r|=a(t,i-1)<<4),r}function s(t,e,r,o){for(var a=0,n=0,s=Math.min(t.length,r),l=e;l<s;l++){var c=t.charCodeAt(l)-48;a*=o,n=c>=49?c-49+10:c>=17?c-17+10:c,i(c>=0&&n<o,"Invalid character"),a+=n}return a}function l(t,e){t.words=e.words,t.length=e.length,t.negative=e.negative,t.red=e.red}if(o.isBN=function(t){return t instanceof o||null!==t&&"object"==typeof t&&t.constructor.wordSize===o.wordSize&&Array.isArray(t.words)},o.max=function(t,e){return t.cmp(e)>0?t:e},o.min=function(t,e){return 0>t.cmp(e)?t:e},o.prototype._init=function(t,e,r){if("number"==typeof t)return this._initNumber(t,e,r);if("object"==typeof t)return this._initArray(t,e,r);"hex"===e&&(e=16),i(e===(0|e)&&e>=2&&e<=36);var o=0;"-"===(t=t.toString().replace(/\s+/g,""))[0]&&(o++,this.negative=1),o<t.length&&(16===e?this._parseHex(t,o,r):(this._parseBase(t,e,o),"le"===r&&this._initArray(this.toArray(),e,r)))},o.prototype._initNumber=function(t,e,r){t<0&&(this.negative=1,t=-t),t<67108864?(this.words=[67108863&t],this.length=1):t<4503599627370496?(this.words=[67108863&t,t/67108864&67108863],this.length=2):(i(t<9007199254740992),this.words=[67108863&t,t/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),e,r)},o.prototype._initArray=function(t,e,r){if(i("number"==typeof t.length),t.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(t.length/3),this.words=Array(this.length);for(var o=0;o<this.length;o++)this.words[o]=0;var a,n,s=0;if("be"===r)for(o=t.length-1,a=0;o>=0;o-=3)n=t[o]|t[o-1]<<8|t[o-2]<<16,this.words[a]|=n<<s&67108863,this.words[a+1]=n>>>26-s&67108863,(s+=24)>=26&&(s-=26,a++);else if("le"===r)for(o=0,a=0;o<t.length;o+=3)n=t[o]|t[o+1]<<8|t[o+2]<<16,this.words[a]|=n<<s&67108863,this.words[a+1]=n>>>26-s&67108863,(s+=24)>=26&&(s-=26,a++);return this._strip()},o.prototype._parseHex=function(t,e,i){this.length=Math.ceil((t.length-e)/6),this.words=Array(this.length);for(var r=0;r<this.length;r++)this.words[r]=0;var o,a=0,s=0;if("be"===i)for(r=t.length-1;r>=e;r-=2)o=n(t,e,r)<<a,this.words[s]|=67108863&o,a>=18?(a-=18,s+=1,this.words[s]|=o>>>26):a+=8;else for(r=(t.length-e)%2==0?e+1:e;r<t.length;r+=2)o=n(t,e,r)<<a,this.words[s]|=67108863&o,a>=18?(a-=18,s+=1,this.words[s]|=o>>>26):a+=8;this._strip()},o.prototype._parseBase=function(t,e,i){this.words=[0],this.length=1;for(var r=0,o=1;o<=67108863;o*=e)r++;r--,o=o/e|0;for(var a=t.length-i,n=a%r,l=Math.min(a,a-n)+i,c=0,u=i;u<l;u+=r)c=s(t,u,u+r,e),this.imuln(o),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c);if(0!==n){var d=1;for(c=s(t,u,t.length,e),u=0;u<n;u++)d*=e;this.imuln(d),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c)}this._strip()},o.prototype.copy=function(t){t.words=Array(this.length);for(var e=0;e<this.length;e++)t.words[e]=this.words[e];t.length=this.length,t.negative=this.negative,t.red=this.red},o.prototype._move=function(t){l(t,this)},o.prototype.clone=function(){var t=new o(null);return this.copy(t),t},o.prototype._expand=function(t){for(;this.length<t;)this.words[this.length++]=0;return this},o.prototype._strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},o.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},"u">typeof Symbol&&"function"==typeof Symbol.for)try{o.prototype[Symbol.for("nodejs.util.inspect.custom")]=c}catch{o.prototype.inspect=c}else o.prototype.inspect=c;function c(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}var u,d=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],h=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],f=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];function p(t,e,i){i.negative=e.negative^t.negative;var r=t.length+e.length|0;i.length=r,r=r-1|0;var o=0|t.words[0],a=0|e.words[0],n=o*a,s=67108863&n,l=n/67108864|0;i.words[0]=s;for(var c=1;c<r;c++){for(var u=l>>>26,d=67108863&l,h=Math.min(c,e.length-1),f=Math.max(0,c-t.length+1);f<=h;f++){var p=c-f|0;u+=(n=(o=0|t.words[p])*(a=0|e.words[f])+d)/67108864|0,d=67108863&n}i.words[c]=0|d,l=0|u}return 0!==l?i.words[c]=0|l:i.length--,i._strip()}o.prototype.toString=function(t,e){if(e=0|e||1,16===(t=t||10)||"hex"===t){r="";for(var r,o=0,a=0,n=0;n<this.length;n++){var s=this.words[n],l=((s<<o|a)&16777215).toString(16);a=s>>>24-o&16777215,(o+=2)>=26&&(o-=26,n--),r=0!==a||n!==this.length-1?d[6-l.length]+l+r:l+r}for(0!==a&&(r=a.toString(16)+r);r.length%e!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}if(t===(0|t)&&t>=2&&t<=36){var c=h[t],u=f[t];r="";var p=this.clone();for(p.negative=0;!p.isZero();){var g=p.modrn(u).toString(t);r=(p=p.idivn(u)).isZero()?g+r:d[c-g.length]+g+r}for(this.isZero()&&(r="0"+r);r.length%e!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}i(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var t=this.words[0];return 2===this.length?t+=67108864*this.words[1]:3===this.length&&1===this.words[2]?t+=4503599627370496+67108864*this.words[1]:this.length>2&&i(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-t:t},o.prototype.toJSON=function(){return this.toString(16,2)},u&&(o.prototype.toBuffer=function(t,e){return this.toArrayLike(u,t,e)}),o.prototype.toArray=function(t,e){return this.toArrayLike(Array,t,e)},o.prototype.toArrayLike=function(t,e,r){this._strip();var o=this.byteLength(),a=r||Math.max(1,o);i(o<=a,"byte array longer than desired length"),i(a>0,"Requested array length <= 0");var n=t.allocUnsafe?t.allocUnsafe(a):new t(a);return this["_toArrayLike"+("le"===e?"LE":"BE")](n,o),n},o.prototype._toArrayLikeLE=function(t,e){for(var i=0,r=0,o=0,a=0;o<this.length;o++){var n=this.words[o]<<a|r;t[i++]=255&n,i<t.length&&(t[i++]=n>>8&255),i<t.length&&(t[i++]=n>>16&255),6===a?(i<t.length&&(t[i++]=n>>24&255),r=0,a=0):(r=n>>>24,a+=2)}if(i<t.length)for(t[i++]=r;i<t.length;)t[i++]=0},o.prototype._toArrayLikeBE=function(t,e){for(var i=t.length-1,r=0,o=0,a=0;o<this.length;o++){var n=this.words[o]<<a|r;t[i--]=255&n,i>=0&&(t[i--]=n>>8&255),i>=0&&(t[i--]=n>>16&255),6===a?(i>=0&&(t[i--]=n>>24&255),r=0,a=0):(r=n>>>24,a+=2)}if(i>=0)for(t[i--]=r;i>=0;)t[i--]=0},Math.clz32?o.prototype._countBits=function(t){return 32-Math.clz32(t)}:o.prototype._countBits=function(t){var e=t,i=0;return e>=4096&&(i+=13,e>>>=13),e>=64&&(i+=7,e>>>=7),e>=8&&(i+=4,e>>>=4),e>=2&&(i+=2,e>>>=2),i+e},o.prototype._zeroBits=function(t){if(0===t)return 26;var e=t,i=0;return 8191&e||(i+=13,e>>>=13),127&e||(i+=7,e>>>=7),15&e||(i+=4,e>>>=4),3&e||(i+=2,e>>>=2),1&e||i++,i},o.prototype.bitLength=function(){var t=this.words[this.length-1],e=this._countBits(t);return(this.length-1)*26+e},o.prototype.zeroBits=function(){if(this.isZero())return 0;for(var t=0,e=0;e<this.length;e++){var i=this._zeroBits(this.words[e]);if(t+=i,26!==i)break}return t},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(t){return 0!==this.negative?this.abs().inotn(t).iaddn(1):this.clone()},o.prototype.fromTwos=function(t){return this.testn(t-1)?this.notn(t).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return 0!==this.negative},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(t){for(;this.length<t.length;)this.words[this.length++]=0;for(var e=0;e<t.length;e++)this.words[e]=this.words[e]|t.words[e];return this._strip()},o.prototype.ior=function(t){return i((this.negative|t.negative)==0),this.iuor(t)},o.prototype.or=function(t){return this.length>t.length?this.clone().ior(t):t.clone().ior(this)},o.prototype.uor=function(t){return this.length>t.length?this.clone().iuor(t):t.clone().iuor(this)},o.prototype.iuand=function(t){var e;e=this.length>t.length?t:this;for(var i=0;i<e.length;i++)this.words[i]=this.words[i]&t.words[i];return this.length=e.length,this._strip()},o.prototype.iand=function(t){return i((this.negative|t.negative)==0),this.iuand(t)},o.prototype.and=function(t){return this.length>t.length?this.clone().iand(t):t.clone().iand(this)},o.prototype.uand=function(t){return this.length>t.length?this.clone().iuand(t):t.clone().iuand(this)},o.prototype.iuxor=function(t){var e,i;this.length>t.length?(e=this,i=t):(e=t,i=this);for(var r=0;r<i.length;r++)this.words[r]=e.words[r]^i.words[r];if(this!==e)for(;r<e.length;r++)this.words[r]=e.words[r];return this.length=e.length,this._strip()},o.prototype.ixor=function(t){return i((this.negative|t.negative)==0),this.iuxor(t)},o.prototype.xor=function(t){return this.length>t.length?this.clone().ixor(t):t.clone().ixor(this)},o.prototype.uxor=function(t){return this.length>t.length?this.clone().iuxor(t):t.clone().iuxor(this)},o.prototype.inotn=function(t){i("number"==typeof t&&t>=0);var e=0|Math.ceil(t/26),r=t%26;this._expand(e),r>0&&e--;for(var o=0;o<e;o++)this.words[o]=67108863&~this.words[o];return r>0&&(this.words[o]=~this.words[o]&67108863>>26-r),this._strip()},o.prototype.notn=function(t){return this.clone().inotn(t)},o.prototype.setn=function(t,e){i("number"==typeof t&&t>=0);var r=t/26|0,o=t%26;return this._expand(r+1),e?this.words[r]=this.words[r]|1<<o:this.words[r]=this.words[r]&~(1<<o),this._strip()},o.prototype.iadd=function(t){if(0!==this.negative&&0===t.negative)return this.negative=0,e=this.isub(t),this.negative^=1,this._normSign();if(0===this.negative&&0!==t.negative)return t.negative=0,e=this.isub(t),t.negative=1,e._normSign();this.length>t.length?(i=this,r=t):(i=t,r=this);for(var e,i,r,o=0,a=0;a<r.length;a++)e=(0|i.words[a])+(0|r.words[a])+o,this.words[a]=67108863&e,o=e>>>26;for(;0!==o&&a<i.length;a++)e=(0|i.words[a])+o,this.words[a]=67108863&e,o=e>>>26;if(this.length=i.length,0!==o)this.words[this.length]=o,this.length++;else if(i!==this)for(;a<i.length;a++)this.words[a]=i.words[a];return this},o.prototype.add=function(t){var e;return 0!==t.negative&&0===this.negative?(t.negative=0,e=this.sub(t),t.negative^=1,e):0===t.negative&&0!==this.negative?(this.negative=0,e=t.sub(this),this.negative=1,e):this.length>t.length?this.clone().iadd(t):t.clone().iadd(this)},o.prototype.isub=function(t){if(0!==t.negative){t.negative=0;var e,i,r=this.iadd(t);return t.negative=1,r._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(t),this.negative=1,this._normSign();var o=this.cmp(t);if(0===o)return this.negative=0,this.length=1,this.words[0]=0,this;o>0?(e=this,i=t):(e=t,i=this);for(var a=0,n=0;n<i.length;n++)a=(r=(0|e.words[n])-(0|i.words[n])+a)>>26,this.words[n]=67108863&r;for(;0!==a&&n<e.length;n++)a=(r=(0|e.words[n])+a)>>26,this.words[n]=67108863&r;if(0===a&&n<e.length&&e!==this)for(;n<e.length;n++)this.words[n]=e.words[n];return this.length=Math.max(this.length,n),e!==this&&(this.negative=1),this._strip()},o.prototype.sub=function(t){return this.clone().isub(t)};var g=function(t,e,i){var r,o,a,n=t.words,s=e.words,l=i.words,c=0,u=0|n[0],d=8191&u,h=u>>>13,f=0|n[1],p=8191&f,g=f>>>13,v=0|n[2],w=8191&v,m=v>>>13,b=0|n[3],y=8191&b,x=b>>>13,C=0|n[4],A=8191&C,M=C>>>13,k=0|n[5],S=8191&k,E=k>>>13,P=0|n[6],B=8191&P,R=P>>>13,I=0|n[7],O=8191&I,z=I>>>13,_=0|n[8],L=8191&_,N=_>>>13,T=0|n[9],$=8191&T,D=T>>>13,Z=0|s[0],j=8191&Z,H=Z>>>13,U=0|s[1],F=8191&U,V=U>>>13,Y=0|s[2],q=8191&Y,Q=Y>>>13,G=0|s[3],K=8191&G,J=G>>>13,W=0|s[4],X=8191&W,tt=W>>>13,te=0|s[5],ti=8191&te,tr=te>>>13,to=0|s[6],ta=8191&to,tn=to>>>13,ts=0|s[7],tl=8191&ts,tc=ts>>>13,tu=0|s[8],td=8191&tu,th=tu>>>13,tf=0|s[9],tp=8191&tf,tg=tf>>>13;i.negative=t.negative^e.negative,i.length=19,r=Math.imul(d,j),o=(o=Math.imul(d,H))+Math.imul(h,j)|0,a=Math.imul(h,H);var tv=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(tv>>>26)|0,tv&=67108863,r=Math.imul(p,j),o=(o=Math.imul(p,H))+Math.imul(g,j)|0,a=Math.imul(g,H),r=r+Math.imul(d,F)|0,o=(o=o+Math.imul(d,V)|0)+Math.imul(h,F)|0,a=a+Math.imul(h,V)|0;var tw=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(tw>>>26)|0,tw&=67108863,r=Math.imul(w,j),o=(o=Math.imul(w,H))+Math.imul(m,j)|0,a=Math.imul(m,H),r=r+Math.imul(p,F)|0,o=(o=o+Math.imul(p,V)|0)+Math.imul(g,F)|0,a=a+Math.imul(g,V)|0,r=r+Math.imul(d,q)|0,o=(o=o+Math.imul(d,Q)|0)+Math.imul(h,q)|0,a=a+Math.imul(h,Q)|0;var tm=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(tm>>>26)|0,tm&=67108863,r=Math.imul(y,j),o=(o=Math.imul(y,H))+Math.imul(x,j)|0,a=Math.imul(x,H),r=r+Math.imul(w,F)|0,o=(o=o+Math.imul(w,V)|0)+Math.imul(m,F)|0,a=a+Math.imul(m,V)|0,r=r+Math.imul(p,q)|0,o=(o=o+Math.imul(p,Q)|0)+Math.imul(g,q)|0,a=a+Math.imul(g,Q)|0,r=r+Math.imul(d,K)|0,o=(o=o+Math.imul(d,J)|0)+Math.imul(h,K)|0,a=a+Math.imul(h,J)|0;var tb=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(tb>>>26)|0,tb&=67108863,r=Math.imul(A,j),o=(o=Math.imul(A,H))+Math.imul(M,j)|0,a=Math.imul(M,H),r=r+Math.imul(y,F)|0,o=(o=o+Math.imul(y,V)|0)+Math.imul(x,F)|0,a=a+Math.imul(x,V)|0,r=r+Math.imul(w,q)|0,o=(o=o+Math.imul(w,Q)|0)+Math.imul(m,q)|0,a=a+Math.imul(m,Q)|0,r=r+Math.imul(p,K)|0,o=(o=o+Math.imul(p,J)|0)+Math.imul(g,K)|0,a=a+Math.imul(g,J)|0,r=r+Math.imul(d,X)|0,o=(o=o+Math.imul(d,tt)|0)+Math.imul(h,X)|0,a=a+Math.imul(h,tt)|0;var ty=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(ty>>>26)|0,ty&=67108863,r=Math.imul(S,j),o=(o=Math.imul(S,H))+Math.imul(E,j)|0,a=Math.imul(E,H),r=r+Math.imul(A,F)|0,o=(o=o+Math.imul(A,V)|0)+Math.imul(M,F)|0,a=a+Math.imul(M,V)|0,r=r+Math.imul(y,q)|0,o=(o=o+Math.imul(y,Q)|0)+Math.imul(x,q)|0,a=a+Math.imul(x,Q)|0,r=r+Math.imul(w,K)|0,o=(o=o+Math.imul(w,J)|0)+Math.imul(m,K)|0,a=a+Math.imul(m,J)|0,r=r+Math.imul(p,X)|0,o=(o=o+Math.imul(p,tt)|0)+Math.imul(g,X)|0,a=a+Math.imul(g,tt)|0,r=r+Math.imul(d,ti)|0,o=(o=o+Math.imul(d,tr)|0)+Math.imul(h,ti)|0,a=a+Math.imul(h,tr)|0;var tx=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(tx>>>26)|0,tx&=67108863,r=Math.imul(B,j),o=(o=Math.imul(B,H))+Math.imul(R,j)|0,a=Math.imul(R,H),r=r+Math.imul(S,F)|0,o=(o=o+Math.imul(S,V)|0)+Math.imul(E,F)|0,a=a+Math.imul(E,V)|0,r=r+Math.imul(A,q)|0,o=(o=o+Math.imul(A,Q)|0)+Math.imul(M,q)|0,a=a+Math.imul(M,Q)|0,r=r+Math.imul(y,K)|0,o=(o=o+Math.imul(y,J)|0)+Math.imul(x,K)|0,a=a+Math.imul(x,J)|0,r=r+Math.imul(w,X)|0,o=(o=o+Math.imul(w,tt)|0)+Math.imul(m,X)|0,a=a+Math.imul(m,tt)|0,r=r+Math.imul(p,ti)|0,o=(o=o+Math.imul(p,tr)|0)+Math.imul(g,ti)|0,a=a+Math.imul(g,tr)|0,r=r+Math.imul(d,ta)|0,o=(o=o+Math.imul(d,tn)|0)+Math.imul(h,ta)|0,a=a+Math.imul(h,tn)|0;var tC=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(tC>>>26)|0,tC&=67108863,r=Math.imul(O,j),o=(o=Math.imul(O,H))+Math.imul(z,j)|0,a=Math.imul(z,H),r=r+Math.imul(B,F)|0,o=(o=o+Math.imul(B,V)|0)+Math.imul(R,F)|0,a=a+Math.imul(R,V)|0,r=r+Math.imul(S,q)|0,o=(o=o+Math.imul(S,Q)|0)+Math.imul(E,q)|0,a=a+Math.imul(E,Q)|0,r=r+Math.imul(A,K)|0,o=(o=o+Math.imul(A,J)|0)+Math.imul(M,K)|0,a=a+Math.imul(M,J)|0,r=r+Math.imul(y,X)|0,o=(o=o+Math.imul(y,tt)|0)+Math.imul(x,X)|0,a=a+Math.imul(x,tt)|0,r=r+Math.imul(w,ti)|0,o=(o=o+Math.imul(w,tr)|0)+Math.imul(m,ti)|0,a=a+Math.imul(m,tr)|0,r=r+Math.imul(p,ta)|0,o=(o=o+Math.imul(p,tn)|0)+Math.imul(g,ta)|0,a=a+Math.imul(g,tn)|0,r=r+Math.imul(d,tl)|0,o=(o=o+Math.imul(d,tc)|0)+Math.imul(h,tl)|0,a=a+Math.imul(h,tc)|0;var tA=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(tA>>>26)|0,tA&=67108863,r=Math.imul(L,j),o=(o=Math.imul(L,H))+Math.imul(N,j)|0,a=Math.imul(N,H),r=r+Math.imul(O,F)|0,o=(o=o+Math.imul(O,V)|0)+Math.imul(z,F)|0,a=a+Math.imul(z,V)|0,r=r+Math.imul(B,q)|0,o=(o=o+Math.imul(B,Q)|0)+Math.imul(R,q)|0,a=a+Math.imul(R,Q)|0,r=r+Math.imul(S,K)|0,o=(o=o+Math.imul(S,J)|0)+Math.imul(E,K)|0,a=a+Math.imul(E,J)|0,r=r+Math.imul(A,X)|0,o=(o=o+Math.imul(A,tt)|0)+Math.imul(M,X)|0,a=a+Math.imul(M,tt)|0,r=r+Math.imul(y,ti)|0,o=(o=o+Math.imul(y,tr)|0)+Math.imul(x,ti)|0,a=a+Math.imul(x,tr)|0,r=r+Math.imul(w,ta)|0,o=(o=o+Math.imul(w,tn)|0)+Math.imul(m,ta)|0,a=a+Math.imul(m,tn)|0,r=r+Math.imul(p,tl)|0,o=(o=o+Math.imul(p,tc)|0)+Math.imul(g,tl)|0,a=a+Math.imul(g,tc)|0,r=r+Math.imul(d,td)|0,o=(o=o+Math.imul(d,th)|0)+Math.imul(h,td)|0,a=a+Math.imul(h,th)|0;var tM=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(tM>>>26)|0,tM&=67108863,r=Math.imul($,j),o=(o=Math.imul($,H))+Math.imul(D,j)|0,a=Math.imul(D,H),r=r+Math.imul(L,F)|0,o=(o=o+Math.imul(L,V)|0)+Math.imul(N,F)|0,a=a+Math.imul(N,V)|0,r=r+Math.imul(O,q)|0,o=(o=o+Math.imul(O,Q)|0)+Math.imul(z,q)|0,a=a+Math.imul(z,Q)|0,r=r+Math.imul(B,K)|0,o=(o=o+Math.imul(B,J)|0)+Math.imul(R,K)|0,a=a+Math.imul(R,J)|0,r=r+Math.imul(S,X)|0,o=(o=o+Math.imul(S,tt)|0)+Math.imul(E,X)|0,a=a+Math.imul(E,tt)|0,r=r+Math.imul(A,ti)|0,o=(o=o+Math.imul(A,tr)|0)+Math.imul(M,ti)|0,a=a+Math.imul(M,tr)|0,r=r+Math.imul(y,ta)|0,o=(o=o+Math.imul(y,tn)|0)+Math.imul(x,ta)|0,a=a+Math.imul(x,tn)|0,r=r+Math.imul(w,tl)|0,o=(o=o+Math.imul(w,tc)|0)+Math.imul(m,tl)|0,a=a+Math.imul(m,tc)|0,r=r+Math.imul(p,td)|0,o=(o=o+Math.imul(p,th)|0)+Math.imul(g,td)|0,a=a+Math.imul(g,th)|0,r=r+Math.imul(d,tp)|0,o=(o=o+Math.imul(d,tg)|0)+Math.imul(h,tp)|0,a=a+Math.imul(h,tg)|0;var tk=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(tk>>>26)|0,tk&=67108863,r=Math.imul($,F),o=(o=Math.imul($,V))+Math.imul(D,F)|0,a=Math.imul(D,V),r=r+Math.imul(L,q)|0,o=(o=o+Math.imul(L,Q)|0)+Math.imul(N,q)|0,a=a+Math.imul(N,Q)|0,r=r+Math.imul(O,K)|0,o=(o=o+Math.imul(O,J)|0)+Math.imul(z,K)|0,a=a+Math.imul(z,J)|0,r=r+Math.imul(B,X)|0,o=(o=o+Math.imul(B,tt)|0)+Math.imul(R,X)|0,a=a+Math.imul(R,tt)|0,r=r+Math.imul(S,ti)|0,o=(o=o+Math.imul(S,tr)|0)+Math.imul(E,ti)|0,a=a+Math.imul(E,tr)|0,r=r+Math.imul(A,ta)|0,o=(o=o+Math.imul(A,tn)|0)+Math.imul(M,ta)|0,a=a+Math.imul(M,tn)|0,r=r+Math.imul(y,tl)|0,o=(o=o+Math.imul(y,tc)|0)+Math.imul(x,tl)|0,a=a+Math.imul(x,tc)|0,r=r+Math.imul(w,td)|0,o=(o=o+Math.imul(w,th)|0)+Math.imul(m,td)|0,a=a+Math.imul(m,th)|0,r=r+Math.imul(p,tp)|0,o=(o=o+Math.imul(p,tg)|0)+Math.imul(g,tp)|0,a=a+Math.imul(g,tg)|0;var tS=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(tS>>>26)|0,tS&=67108863,r=Math.imul($,q),o=(o=Math.imul($,Q))+Math.imul(D,q)|0,a=Math.imul(D,Q),r=r+Math.imul(L,K)|0,o=(o=o+Math.imul(L,J)|0)+Math.imul(N,K)|0,a=a+Math.imul(N,J)|0,r=r+Math.imul(O,X)|0,o=(o=o+Math.imul(O,tt)|0)+Math.imul(z,X)|0,a=a+Math.imul(z,tt)|0,r=r+Math.imul(B,ti)|0,o=(o=o+Math.imul(B,tr)|0)+Math.imul(R,ti)|0,a=a+Math.imul(R,tr)|0,r=r+Math.imul(S,ta)|0,o=(o=o+Math.imul(S,tn)|0)+Math.imul(E,ta)|0,a=a+Math.imul(E,tn)|0,r=r+Math.imul(A,tl)|0,o=(o=o+Math.imul(A,tc)|0)+Math.imul(M,tl)|0,a=a+Math.imul(M,tc)|0,r=r+Math.imul(y,td)|0,o=(o=o+Math.imul(y,th)|0)+Math.imul(x,td)|0,a=a+Math.imul(x,th)|0,r=r+Math.imul(w,tp)|0,o=(o=o+Math.imul(w,tg)|0)+Math.imul(m,tp)|0,a=a+Math.imul(m,tg)|0;var tE=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(tE>>>26)|0,tE&=67108863,r=Math.imul($,K),o=(o=Math.imul($,J))+Math.imul(D,K)|0,a=Math.imul(D,J),r=r+Math.imul(L,X)|0,o=(o=o+Math.imul(L,tt)|0)+Math.imul(N,X)|0,a=a+Math.imul(N,tt)|0,r=r+Math.imul(O,ti)|0,o=(o=o+Math.imul(O,tr)|0)+Math.imul(z,ti)|0,a=a+Math.imul(z,tr)|0,r=r+Math.imul(B,ta)|0,o=(o=o+Math.imul(B,tn)|0)+Math.imul(R,ta)|0,a=a+Math.imul(R,tn)|0,r=r+Math.imul(S,tl)|0,o=(o=o+Math.imul(S,tc)|0)+Math.imul(E,tl)|0,a=a+Math.imul(E,tc)|0,r=r+Math.imul(A,td)|0,o=(o=o+Math.imul(A,th)|0)+Math.imul(M,td)|0,a=a+Math.imul(M,th)|0,r=r+Math.imul(y,tp)|0,o=(o=o+Math.imul(y,tg)|0)+Math.imul(x,tp)|0,a=a+Math.imul(x,tg)|0;var tP=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(tP>>>26)|0,tP&=67108863,r=Math.imul($,X),o=(o=Math.imul($,tt))+Math.imul(D,X)|0,a=Math.imul(D,tt),r=r+Math.imul(L,ti)|0,o=(o=o+Math.imul(L,tr)|0)+Math.imul(N,ti)|0,a=a+Math.imul(N,tr)|0,r=r+Math.imul(O,ta)|0,o=(o=o+Math.imul(O,tn)|0)+Math.imul(z,ta)|0,a=a+Math.imul(z,tn)|0,r=r+Math.imul(B,tl)|0,o=(o=o+Math.imul(B,tc)|0)+Math.imul(R,tl)|0,a=a+Math.imul(R,tc)|0,r=r+Math.imul(S,td)|0,o=(o=o+Math.imul(S,th)|0)+Math.imul(E,td)|0,a=a+Math.imul(E,th)|0,r=r+Math.imul(A,tp)|0,o=(o=o+Math.imul(A,tg)|0)+Math.imul(M,tp)|0,a=a+Math.imul(M,tg)|0;var tB=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(tB>>>26)|0,tB&=67108863,r=Math.imul($,ti),o=(o=Math.imul($,tr))+Math.imul(D,ti)|0,a=Math.imul(D,tr),r=r+Math.imul(L,ta)|0,o=(o=o+Math.imul(L,tn)|0)+Math.imul(N,ta)|0,a=a+Math.imul(N,tn)|0,r=r+Math.imul(O,tl)|0,o=(o=o+Math.imul(O,tc)|0)+Math.imul(z,tl)|0,a=a+Math.imul(z,tc)|0,r=r+Math.imul(B,td)|0,o=(o=o+Math.imul(B,th)|0)+Math.imul(R,td)|0,a=a+Math.imul(R,th)|0,r=r+Math.imul(S,tp)|0,o=(o=o+Math.imul(S,tg)|0)+Math.imul(E,tp)|0,a=a+Math.imul(E,tg)|0;var tR=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(tR>>>26)|0,tR&=67108863,r=Math.imul($,ta),o=(o=Math.imul($,tn))+Math.imul(D,ta)|0,a=Math.imul(D,tn),r=r+Math.imul(L,tl)|0,o=(o=o+Math.imul(L,tc)|0)+Math.imul(N,tl)|0,a=a+Math.imul(N,tc)|0,r=r+Math.imul(O,td)|0,o=(o=o+Math.imul(O,th)|0)+Math.imul(z,td)|0,a=a+Math.imul(z,th)|0,r=r+Math.imul(B,tp)|0,o=(o=o+Math.imul(B,tg)|0)+Math.imul(R,tp)|0,a=a+Math.imul(R,tg)|0;var tI=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(tI>>>26)|0,tI&=67108863,r=Math.imul($,tl),o=(o=Math.imul($,tc))+Math.imul(D,tl)|0,a=Math.imul(D,tc),r=r+Math.imul(L,td)|0,o=(o=o+Math.imul(L,th)|0)+Math.imul(N,td)|0,a=a+Math.imul(N,th)|0,r=r+Math.imul(O,tp)|0,o=(o=o+Math.imul(O,tg)|0)+Math.imul(z,tp)|0,a=a+Math.imul(z,tg)|0;var tO=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(tO>>>26)|0,tO&=67108863,r=Math.imul($,td),o=(o=Math.imul($,th))+Math.imul(D,td)|0,a=Math.imul(D,th),r=r+Math.imul(L,tp)|0,o=(o=o+Math.imul(L,tg)|0)+Math.imul(N,tp)|0,a=a+Math.imul(N,tg)|0;var tz=(c+r|0)+((8191&o)<<13)|0;c=(a+(o>>>13)|0)+(tz>>>26)|0,tz&=67108863,r=Math.imul($,tp),o=(o=Math.imul($,tg))+Math.imul(D,tp)|0,a=Math.imul(D,tg);var t_=(c+r|0)+((8191&o)<<13)|0;return c=(a+(o>>>13)|0)+(t_>>>26)|0,t_&=67108863,l[0]=tv,l[1]=tw,l[2]=tm,l[3]=tb,l[4]=ty,l[5]=tx,l[6]=tC,l[7]=tA,l[8]=tM,l[9]=tk,l[10]=tS,l[11]=tE,l[12]=tP,l[13]=tB,l[14]=tR,l[15]=tI,l[16]=tO,l[17]=tz,l[18]=t_,0!==c&&(l[19]=c,i.length++),i};function v(t,e,i){i.negative=e.negative^t.negative,i.length=t.length+e.length;for(var r=0,o=0,a=0;a<i.length-1;a++){var n=o;o=0;for(var s=67108863&r,l=Math.min(a,e.length-1),c=Math.max(0,a-t.length+1);c<=l;c++){var u=a-c,d=(0|t.words[u])*(0|e.words[c]),h=67108863&d;n=n+(d/67108864|0)|0,s=67108863&(h=h+s|0),o+=(n=n+(h>>>26)|0)>>>26,n&=67108863}i.words[a]=s,r=n,n=o}return 0!==r?i.words[a]=r:i.length--,i._strip()}Math.imul||(g=p),o.prototype.mulTo=function(t,e){var i,r=this.length+t.length;return 10===this.length&&10===t.length?g(this,t,e):r<63?p(this,t,e):v(this,t,e)},o.prototype.mul=function(t){var e=new o(null);return e.words=Array(this.length+t.length),this.mulTo(t,e)},o.prototype.mulf=function(t){var e=new o(null);return e.words=Array(this.length+t.length),v(this,t,e)},o.prototype.imul=function(t){return this.clone().mulTo(t,this)},o.prototype.imuln=function(t){var e=t<0;e&&(t=-t),i("number"==typeof t),i(t<67108864);for(var r=0,o=0;o<this.length;o++){var a=(0|this.words[o])*t,n=(67108863&a)+(67108863&r);r>>=26,r+=(a/67108864|0)+(n>>>26),this.words[o]=67108863&n}return 0!==r&&(this.words[o]=r,this.length++),e?this.ineg():this},o.prototype.muln=function(t){return this.clone().imuln(t)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(t){var e=function(t){for(var e=Array(t.bitLength()),i=0;i<e.length;i++){var r=i/26|0,o=i%26;e[i]=t.words[r]>>>o&1}return e}(t);if(0===e.length)return new o(1);for(var i=this,r=0;r<e.length&&0===e[r];r++,i=i.sqr());if(++r<e.length)for(var a=i.sqr();r<e.length;r++,a=a.sqr())0!==e[r]&&(i=i.mul(a));return i},o.prototype.iushln=function(t){i("number"==typeof t&&t>=0);var e,r=t%26,o=(t-r)/26,a=67108863>>>26-r<<26-r;if(0!==r){var n=0;for(e=0;e<this.length;e++){var s=this.words[e]&a,l=(0|this.words[e])-s<<r;this.words[e]=l|n,n=s>>>26-r}n&&(this.words[e]=n,this.length++)}if(0!==o){for(e=this.length-1;e>=0;e--)this.words[e+o]=this.words[e];for(e=0;e<o;e++)this.words[e]=0;this.length+=o}return this._strip()},o.prototype.ishln=function(t){return i(0===this.negative),this.iushln(t)},o.prototype.iushrn=function(t,e,r){i("number"==typeof t&&t>=0),o=e?(e-e%26)/26:0;var o,a=t%26,n=Math.min((t-a)/26,this.length),s=67108863^67108863>>>a<<a;if(o-=n,o=Math.max(0,o),r){for(var l=0;l<n;l++)r.words[l]=this.words[l];r.length=n}if(0!==n){if(this.length>n)for(this.length-=n,l=0;l<this.length;l++)this.words[l]=this.words[l+n];else this.words[0]=0,this.length=1}var c=0;for(l=this.length-1;l>=0&&(0!==c||l>=o);l--){var u=0|this.words[l];this.words[l]=c<<26-a|u>>>a,c=u&s}return r&&0!==c&&(r.words[r.length++]=c),0===this.length&&(this.words[0]=0,this.length=1),this._strip()},o.prototype.ishrn=function(t,e,r){return i(0===this.negative),this.iushrn(t,e,r)},o.prototype.shln=function(t){return this.clone().ishln(t)},o.prototype.ushln=function(t){return this.clone().iushln(t)},o.prototype.shrn=function(t){return this.clone().ishrn(t)},o.prototype.ushrn=function(t){return this.clone().iushrn(t)},o.prototype.testn=function(t){i("number"==typeof t&&t>=0);var e=t%26,r=(t-e)/26;return!(this.length<=r)&&!!(this.words[r]&1<<e)},o.prototype.imaskn=function(t){i("number"==typeof t&&t>=0);var e=t%26,r=(t-e)/26;return(i(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)?this:(0!==e&&r++,this.length=Math.min(r,this.length),0!==e&&(this.words[this.length-1]&=67108863^67108863>>>e<<e),this._strip())},o.prototype.maskn=function(t){return this.clone().imaskn(t)},o.prototype.iaddn=function(t){return i("number"==typeof t),i(t<67108864),t<0?this.isubn(-t):0!==this.negative?(1===this.length&&(0|this.words[0])<=t?(this.words[0]=t-(0|this.words[0]),this.negative=0):(this.negative=0,this.isubn(t),this.negative=1),this):this._iaddn(t)},o.prototype._iaddn=function(t){this.words[0]+=t;for(var e=0;e<this.length&&this.words[e]>=67108864;e++)this.words[e]-=67108864,e===this.length-1?this.words[e+1]=1:this.words[e+1]++;return this.length=Math.max(this.length,e+1),this},o.prototype.isubn=function(t){if(i("number"==typeof t),i(t<67108864),t<0)return this.iaddn(-t);if(0!==this.negative)return this.negative=0,this.iaddn(t),this.negative=1,this;if(this.words[0]-=t,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var e=0;e<this.length&&this.words[e]<0;e++)this.words[e]+=67108864,this.words[e+1]-=1;return this._strip()},o.prototype.addn=function(t){return this.clone().iaddn(t)},o.prototype.subn=function(t){return this.clone().isubn(t)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(t,e,r){var o,a=t.length+r;this._expand(a);var n,s=0;for(o=0;o<t.length;o++){n=(0|this.words[o+r])+s;var l=(0|t.words[o])*e;n-=67108863&l,s=(n>>26)-(l/67108864|0),this.words[o+r]=67108863&n}for(;o<this.length-r;o++)s=(n=(0|this.words[o+r])+s)>>26,this.words[o+r]=67108863&n;if(0===s)return this._strip();for(i(-1===s),s=0,o=0;o<this.length;o++)s=(n=-(0|this.words[o])+s)>>26,this.words[o]=67108863&n;return this.negative=1,this._strip()},o.prototype._wordDiv=function(t,e){var i=this.length-t.length,r=this.clone(),a=t,n=0|a.words[a.length-1];0!=(i=26-this._countBits(n))&&(a=a.ushln(i),r.iushln(i),n=0|a.words[a.length-1]);var s,l=r.length-a.length;if("mod"!==e){(s=new o(null)).length=l+1,s.words=Array(s.length);for(var c=0;c<s.length;c++)s.words[c]=0}var u=r.clone()._ishlnsubmul(a,1,l);0===u.negative&&(r=u,s&&(s.words[l]=1));for(var d=l-1;d>=0;d--){var h=(0|r.words[a.length+d])*67108864+(0|r.words[a.length+d-1]);for(h=Math.min(h/n|0,67108863),r._ishlnsubmul(a,h,d);0!==r.negative;)h--,r.negative=0,r._ishlnsubmul(a,1,d),r.isZero()||(r.negative^=1);s&&(s.words[d]=h)}return s&&s._strip(),r._strip(),"div"!==e&&0!==i&&r.iushrn(i),{div:s||null,mod:r}},o.prototype.divmod=function(t,e,r){var a,n,s;return(i(!t.isZero()),this.isZero())?{div:new o(0),mod:new o(0)}:0!==this.negative&&0===t.negative?(s=this.neg().divmod(t,e),"mod"!==e&&(a=s.div.neg()),"div"!==e&&(n=s.mod.neg(),r&&0!==n.negative&&n.iadd(t)),{div:a,mod:n}):0===this.negative&&0!==t.negative?(s=this.divmod(t.neg(),e),"mod"!==e&&(a=s.div.neg()),{div:a,mod:s.mod}):this.negative&t.negative?(s=this.neg().divmod(t.neg(),e),"div"!==e&&(n=s.mod.neg(),r&&0!==n.negative&&n.isub(t)),{div:s.div,mod:n}):t.length>this.length||0>this.cmp(t)?{div:new o(0),mod:this}:1===t.length?"div"===e?{div:this.divn(t.words[0]),mod:null}:"mod"===e?{div:null,mod:new o(this.modrn(t.words[0]))}:{div:this.divn(t.words[0]),mod:new o(this.modrn(t.words[0]))}:this._wordDiv(t,e)},o.prototype.div=function(t){return this.divmod(t,"div",!1).div},o.prototype.mod=function(t){return this.divmod(t,"mod",!1).mod},o.prototype.umod=function(t){return this.divmod(t,"mod",!0).mod},o.prototype.divRound=function(t){var e=this.divmod(t);if(e.mod.isZero())return e.div;var i=0!==e.div.negative?e.mod.isub(t):e.mod,r=t.ushrn(1),o=t.andln(1),a=i.cmp(r);return a<0||1===o&&0===a?e.div:0!==e.div.negative?e.div.isubn(1):e.div.iaddn(1)},o.prototype.modrn=function(t){var e=t<0;e&&(t=-t),i(t<=67108863);for(var r=67108864%t,o=0,a=this.length-1;a>=0;a--)o=(r*o+(0|this.words[a]))%t;return e?-o:o},o.prototype.modn=function(t){return this.modrn(t)},o.prototype.idivn=function(t){var e=t<0;e&&(t=-t),i(t<=67108863);for(var r=0,o=this.length-1;o>=0;o--){var a=(0|this.words[o])+67108864*r;this.words[o]=a/t|0,r=a%t}return this._strip(),e?this.ineg():this},o.prototype.divn=function(t){return this.clone().idivn(t)},o.prototype.egcd=function(t){i(0===t.negative),i(!t.isZero());var e=this,r=t.clone();e=0!==e.negative?e.umod(t):e.clone();for(var a=new o(1),n=new o(0),s=new o(0),l=new o(1),c=0;e.isEven()&&r.isEven();)e.iushrn(1),r.iushrn(1),++c;for(var u=r.clone(),d=e.clone();!e.isZero();){for(var h=0,f=1;!(e.words[0]&f)&&h<26;++h,f<<=1);if(h>0)for(e.iushrn(h);h-- >0;)(a.isOdd()||n.isOdd())&&(a.iadd(u),n.isub(d)),a.iushrn(1),n.iushrn(1);for(var p=0,g=1;!(r.words[0]&g)&&p<26;++p,g<<=1);if(p>0)for(r.iushrn(p);p-- >0;)(s.isOdd()||l.isOdd())&&(s.iadd(u),l.isub(d)),s.iushrn(1),l.iushrn(1);e.cmp(r)>=0?(e.isub(r),a.isub(s),n.isub(l)):(r.isub(e),s.isub(a),l.isub(n))}return{a:s,b:l,gcd:r.iushln(c)}},o.prototype._invmp=function(t){i(0===t.negative),i(!t.isZero());var e,r=this,a=t.clone();r=0!==r.negative?r.umod(t):r.clone();for(var n=new o(1),s=new o(0),l=a.clone();r.cmpn(1)>0&&a.cmpn(1)>0;){for(var c=0,u=1;!(r.words[0]&u)&&c<26;++c,u<<=1);if(c>0)for(r.iushrn(c);c-- >0;)n.isOdd()&&n.iadd(l),n.iushrn(1);for(var d=0,h=1;!(a.words[0]&h)&&d<26;++d,h<<=1);if(d>0)for(a.iushrn(d);d-- >0;)s.isOdd()&&s.iadd(l),s.iushrn(1);r.cmp(a)>=0?(r.isub(a),n.isub(s)):(a.isub(r),s.isub(n))}return 0>(e=0===r.cmpn(1)?n:s).cmpn(0)&&e.iadd(t),e},o.prototype.gcd=function(t){if(this.isZero())return t.abs();if(t.isZero())return this.abs();var e=this.clone(),i=t.clone();e.negative=0,i.negative=0;for(var r=0;e.isEven()&&i.isEven();r++)e.iushrn(1),i.iushrn(1);for(;;){for(;e.isEven();)e.iushrn(1);for(;i.isEven();)i.iushrn(1);var o=e.cmp(i);if(o<0){var a=e;e=i,i=a}else if(0===o||0===i.cmpn(1))break;e.isub(i)}return i.iushln(r)},o.prototype.invm=function(t){return this.egcd(t).a.umod(t)},o.prototype.isEven=function(){return(1&this.words[0])==0},o.prototype.isOdd=function(){return(1&this.words[0])==1},o.prototype.andln=function(t){return this.words[0]&t},o.prototype.bincn=function(t){i("number"==typeof t);var e=t%26,r=(t-e)/26,o=1<<e;if(this.length<=r)return this._expand(r+1),this.words[r]|=o,this;for(var a=o,n=r;0!==a&&n<this.length;n++){var s=0|this.words[n];s+=a,a=s>>>26,s&=67108863,this.words[n]=s}return 0!==a&&(this.words[n]=a,this.length++),this},o.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},o.prototype.cmpn=function(t){var e,r=t<0;if(0!==this.negative&&!r)return -1;if(0===this.negative&&r)return 1;if(this._strip(),this.length>1)e=1;else{r&&(t=-t),i(t<=67108863,"Number is too big");var o=0|this.words[0];e=o===t?0:o<t?-1:1}return 0!==this.negative?0|-e:e},o.prototype.cmp=function(t){if(0!==this.negative&&0===t.negative)return -1;if(0===this.negative&&0!==t.negative)return 1;var e=this.ucmp(t);return 0!==this.negative?0|-e:e},o.prototype.ucmp=function(t){if(this.length>t.length)return 1;if(this.length<t.length)return -1;for(var e=0,i=this.length-1;i>=0;i--){var r=0|this.words[i],o=0|t.words[i];if(r!==o){r<o?e=-1:r>o&&(e=1);break}}return e},o.prototype.gtn=function(t){return 1===this.cmpn(t)},o.prototype.gt=function(t){return 1===this.cmp(t)},o.prototype.gten=function(t){return this.cmpn(t)>=0},o.prototype.gte=function(t){return this.cmp(t)>=0},o.prototype.ltn=function(t){return -1===this.cmpn(t)},o.prototype.lt=function(t){return -1===this.cmp(t)},o.prototype.lten=function(t){return 0>=this.cmpn(t)},o.prototype.lte=function(t){return 0>=this.cmp(t)},o.prototype.eqn=function(t){return 0===this.cmpn(t)},o.prototype.eq=function(t){return 0===this.cmp(t)},o.red=function(t){return new A(t)},o.prototype.toRed=function(t){return i(!this.red,"Already a number in reduction context"),i(0===this.negative,"red works only with positives"),t.convertTo(this)._forceRed(t)},o.prototype.fromRed=function(){return i(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(t){return this.red=t,this},o.prototype.forceRed=function(t){return i(!this.red,"Already a number in reduction context"),this._forceRed(t)},o.prototype.redAdd=function(t){return i(this.red,"redAdd works only with red numbers"),this.red.add(this,t)},o.prototype.redIAdd=function(t){return i(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,t)},o.prototype.redSub=function(t){return i(this.red,"redSub works only with red numbers"),this.red.sub(this,t)},o.prototype.redISub=function(t){return i(this.red,"redISub works only with red numbers"),this.red.isub(this,t)},o.prototype.redShl=function(t){return i(this.red,"redShl works only with red numbers"),this.red.shl(this,t)},o.prototype.redMul=function(t){return i(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.mul(this,t)},o.prototype.redIMul=function(t){return i(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.imul(this,t)},o.prototype.redSqr=function(){return i(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return i(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return i(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return i(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return i(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(t){return i(this.red&&!t.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,t)};var w={k256:null,p224:null,p192:null,p25519:null};function m(t,e){this.name=t,this.p=new o(e,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function b(){m.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function y(){m.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function x(){m.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function C(){m.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function A(t){if("string"==typeof t){var e=o._prime(t);this.m=e.p,this.prime=e}else i(t.gtn(1),"modulus must be greater than 1"),this.m=t,this.prime=null}function M(t){A.call(this,t),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}m.prototype._tmp=function(){var t=new o(null);return t.words=Array(Math.ceil(this.n/13)),t},m.prototype.ireduce=function(t){var e,i=t;do this.split(i,this.tmp),e=(i=(i=this.imulK(i)).iadd(this.tmp)).bitLength();while(e>this.n);var r=e<this.n?-1:i.ucmp(this.p);return 0===r?(i.words[0]=0,i.length=1):r>0?i.isub(this.p):void 0!==i.strip?i.strip():i._strip(),i},m.prototype.split=function(t,e){t.iushrn(this.n,0,e)},m.prototype.imulK=function(t){return t.imul(this.k)},r(b,m),b.prototype.split=function(t,e){for(var i=Math.min(t.length,9),r=0;r<i;r++)e.words[r]=t.words[r];if(e.length=i,t.length<=9){t.words[0]=0,t.length=1;return}var o=t.words[9];for(e.words[e.length++]=4194303&o,r=10;r<t.length;r++){var a=0|t.words[r];t.words[r-10]=(4194303&a)<<4|o>>>22,o=a}o>>>=22,t.words[r-10]=o,0===o&&t.length>10?t.length-=10:t.length-=9},b.prototype.imulK=function(t){t.words[t.length]=0,t.words[t.length+1]=0,t.length+=2;for(var e=0,i=0;i<t.length;i++){var r=0|t.words[i];e+=977*r,t.words[i]=67108863&e,e=64*r+(e/67108864|0)}return 0===t.words[t.length-1]&&(t.length--,0===t.words[t.length-1]&&t.length--),t},r(y,m),r(x,m),r(C,m),C.prototype.imulK=function(t){for(var e=0,i=0;i<t.length;i++){var r=(0|t.words[i])*19+e,o=67108863&r;r>>>=26,t.words[i]=o,e=r}return 0!==e&&(t.words[t.length++]=e),t},o._prime=function(t){var e;if(w[t])return w[t];if("k256"===t)e=new b;else if("p224"===t)e=new y;else if("p192"===t)e=new x;else if("p25519"===t)e=new C;else throw Error("Unknown prime "+t);return w[t]=e,e},A.prototype._verify1=function(t){i(0===t.negative,"red works only with positives"),i(t.red,"red works only with red numbers")},A.prototype._verify2=function(t,e){i((t.negative|e.negative)==0,"red works only with positives"),i(t.red&&t.red===e.red,"red works only with red numbers")},A.prototype.imod=function(t){return this.prime?this.prime.ireduce(t)._forceRed(this):(l(t,t.umod(this.m)._forceRed(this)),t)},A.prototype.neg=function(t){return t.isZero()?t.clone():this.m.sub(t)._forceRed(this)},A.prototype.add=function(t,e){this._verify2(t,e);var i=t.add(e);return i.cmp(this.m)>=0&&i.isub(this.m),i._forceRed(this)},A.prototype.iadd=function(t,e){this._verify2(t,e);var i=t.iadd(e);return i.cmp(this.m)>=0&&i.isub(this.m),i},A.prototype.sub=function(t,e){this._verify2(t,e);var i=t.sub(e);return 0>i.cmpn(0)&&i.iadd(this.m),i._forceRed(this)},A.prototype.isub=function(t,e){this._verify2(t,e);var i=t.isub(e);return 0>i.cmpn(0)&&i.iadd(this.m),i},A.prototype.shl=function(t,e){return this._verify1(t),this.imod(t.ushln(e))},A.prototype.imul=function(t,e){return this._verify2(t,e),this.imod(t.imul(e))},A.prototype.mul=function(t,e){return this._verify2(t,e),this.imod(t.mul(e))},A.prototype.isqr=function(t){return this.imul(t,t.clone())},A.prototype.sqr=function(t){return this.mul(t,t)},A.prototype.sqrt=function(t){if(t.isZero())return t.clone();var e=this.m.andln(3);if(i(e%2==1),3===e){var r=this.m.add(new o(1)).iushrn(2);return this.pow(t,r)}for(var a=this.m.subn(1),n=0;!a.isZero()&&0===a.andln(1);)n++,a.iushrn(1);i(!a.isZero());var s=new o(1).toRed(this),l=s.redNeg(),c=this.m.subn(1).iushrn(1),u=this.m.bitLength();for(u=new o(2*u*u).toRed(this);0!==this.pow(u,c).cmp(l);)u.redIAdd(l);for(var d=this.pow(u,a),h=this.pow(t,a.addn(1).iushrn(1)),f=this.pow(t,a),p=n;0!==f.cmp(s);){for(var g=f,v=0;0!==g.cmp(s);v++)g=g.redSqr();i(v<p);var w=this.pow(d,new o(1).iushln(p-v-1));h=h.redMul(w),d=w.redSqr(),f=f.redMul(d),p=v}return h},A.prototype.invm=function(t){var e=t._invmp(this.m);return 0!==e.negative?(e.negative=0,this.imod(e).redNeg()):this.imod(e)},A.prototype.pow=function(t,e){if(e.isZero())return new o(1).toRed(this);if(0===e.cmpn(1))return t.clone();var i=Array(16);i[0]=new o(1).toRed(this),i[1]=t;for(var r=2;r<i.length;r++)i[r]=this.mul(i[r-1],t);var a=i[0],n=0,s=0,l=e.bitLength()%26;for(0===l&&(l=26),r=e.length-1;r>=0;r--){for(var c=e.words[r],u=l-1;u>=0;u--){var d=c>>u&1;if(a!==i[0]&&(a=this.sqr(a)),0===d&&0===n){s=0;continue}n<<=1,n|=d,4!=++s&&(0!==r||0!==u)||(a=this.mul(a,i[n]),s=0,n=0)}l=26}return a},A.prototype.convertTo=function(t){var e=t.umod(this.m);return e===t?e.clone():e},A.prototype.convertFrom=function(t){var e=t.clone();return e.red=null,e},o.mont=function(t){return new M(t)},r(M,A),M.prototype.convertTo=function(t){return this.imod(t.ushln(this.shift))},M.prototype.convertFrom=function(t){var e=this.imod(t.mul(this.rinv));return e.red=null,e},M.prototype.imul=function(t,e){if(t.isZero()||e.isZero())return t.words[0]=0,t.length=1,t;var i=t.imul(e),r=i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),o=i.isub(r).iushrn(this.shift),a=o;return o.cmp(this.m)>=0?a=o.isub(this.m):0>o.cmpn(0)&&(a=o.iadd(this.m)),a._forceRed(this)},M.prototype.mul=function(t,e){if(t.isZero()||e.isZero())return new o(0)._forceRed(this);var i=t.mul(e),r=i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),a=i.isub(r).iushrn(this.shift),n=a;return a.cmp(this.m)>=0?n=a.isub(this.m):0>a.cmpn(0)&&(n=a.iadd(this.m)),n._forceRed(this)},M.prototype.invm=function(t){return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)}}(_,h);var N=_.exports;let T="bignumber/5.7.0";var $=N.BN;let D=new C(T),Z={},j=!1;class H{constructor(t,e){t!==Z&&D.throwError("cannot call constructor directly; use BigNumber.from",C.errors.UNSUPPORTED_OPERATION,{operation:"new (BigNumber)"}),this._hex=e,this._isBigNumber=!0,Object.freeze(this)}fromTwos(t){return F(V(this).fromTwos(t))}toTwos(t){return F(V(this).toTwos(t))}abs(){return"-"===this._hex[0]?H.from(this._hex.substring(1)):this}add(t){return F(V(this).add(V(t)))}sub(t){return F(V(this).sub(V(t)))}div(t){return H.from(t).isZero()&&Y("division-by-zero","div"),F(V(this).div(V(t)))}mul(t){return F(V(this).mul(V(t)))}mod(t){let e=V(t);return e.isNeg()&&Y("division-by-zero","mod"),F(V(this).umod(e))}pow(t){let e=V(t);return e.isNeg()&&Y("negative-power","pow"),F(V(this).pow(e))}and(t){let e=V(t);return(this.isNegative()||e.isNeg())&&Y("unbound-bitwise-result","and"),F(V(this).and(e))}or(t){let e=V(t);return(this.isNegative()||e.isNeg())&&Y("unbound-bitwise-result","or"),F(V(this).or(e))}xor(t){let e=V(t);return(this.isNegative()||e.isNeg())&&Y("unbound-bitwise-result","xor"),F(V(this).xor(e))}mask(t){return(this.isNegative()||t<0)&&Y("negative-width","mask"),F(V(this).maskn(t))}shl(t){return(this.isNegative()||t<0)&&Y("negative-width","shl"),F(V(this).shln(t))}shr(t){return(this.isNegative()||t<0)&&Y("negative-width","shr"),F(V(this).shrn(t))}eq(t){return V(this).eq(V(t))}lt(t){return V(this).lt(V(t))}lte(t){return V(this).lte(V(t))}gt(t){return V(this).gt(V(t))}gte(t){return V(this).gte(V(t))}isNegative(){return"-"===this._hex[0]}isZero(){return V(this).isZero()}toNumber(){try{return V(this).toNumber()}catch{Y("overflow","toNumber",this.toString())}return null}toBigInt(){try{return BigInt(this.toString())}catch{}return D.throwError("this platform does not support BigInt",C.errors.UNSUPPORTED_OPERATION,{value:this.toString()})}toString(){return arguments.length>0&&(10===arguments[0]?j||(j=!0,D.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")):16===arguments[0]?D.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",C.errors.UNEXPECTED_ARGUMENT,{}):D.throwError("BigNumber.toString does not accept parameters",C.errors.UNEXPECTED_ARGUMENT,{})),V(this).toString(10)}toHexString(){return this._hex}toJSON(t){return{type:"BigNumber",hex:this.toHexString()}}static from(t){if(t instanceof H)return t;if("string"==typeof t)return t.match(/^-?0x[0-9a-f]+$/i)?new H(Z,U(t)):t.match(/^-?[0-9]+$/)?new H(Z,U(new $(t))):D.throwArgumentError("invalid BigNumber string","value",t);if("number"==typeof t)return t%1&&Y("underflow","BigNumber.from",t),(t>=9007199254740991||t<=-9007199254740991)&&Y("overflow","BigNumber.from",t),H.from(String(t));if("bigint"==typeof t)return H.from(t.toString());if(E(t))return H.from(I(t));if(t){if(t.toHexString){let e=t.toHexString();if("string"==typeof e)return H.from(e)}else{let e=t._hex;if(null==e&&"BigNumber"===t.type&&(e=t.hex),"string"==typeof e&&(B(e)||"-"===e[0]&&B(e.substring(1))))return H.from(e)}}return D.throwArgumentError("invalid BigNumber value","value",t)}static isBigNumber(t){return!!(t&&t._isBigNumber)}}function U(t){if("string"!=typeof t)return U(t.toString(16));if("-"===t[0])return"-"===(t=t.substring(1))[0]&&D.throwArgumentError("invalid hex","value",t),"0x00"===(t=U(t))?t:"-"+t;if("0x"!==t.substring(0,2)&&(t="0x"+t),"0x"===t)return"0x00";for(t.length%2&&(t="0x0"+t.substring(2));t.length>4&&"0x00"===t.substring(0,4);)t="0x"+t.substring(4);return t}function F(t){return H.from(U(t))}function V(t){let e=H.from(t).toHexString();return"-"===e[0]?new $("-"+e.substring(3),16):new $(e.substring(2),16)}function Y(t,e,i){let r={fault:t,operation:e};return null!=i&&(r.value=i),D.throwError(t,C.errors.NUMERIC_FAULT,r)}let q=new C(T),Q={},G=H.from(0),K=H.from(-1);function J(t,e,i,r){let o={fault:e,operation:i};return void 0!==r&&(o.value=r),q.throwError(t,C.errors.NUMERIC_FAULT,o)}let W="0";for(;W.length<256;)W+=W;function X(t){if("number"!=typeof t)try{t=H.from(t).toNumber()}catch{}return"number"==typeof t&&t>=0&&t<=256&&!(t%1)?"1"+W.substring(0,t):q.throwArgumentError("invalid decimal size","decimals",t)}function tt(t,e){null==e&&(e=0);let i=X(e),r=(t=H.from(t)).lt(G);r&&(t=t.mul(K));let o=t.mod(i).toString();for(;o.length<i.length-1;)o="0"+o;o=o.match(/^([0-9]*[1-9]|0)(0*)/)[1];let a=t.div(i).toString();return t=1===i.length?a:a+"."+o,r&&(t="-"+t),t}function te(t,e){null==e&&(e=0);let i=X(e);"string"==typeof t&&t.match(/^-?[0-9.]+$/)||q.throwArgumentError("invalid decimal value","value",t);let r="-"===t.substring(0,1);r&&(t=t.substring(1)),"."===t&&q.throwArgumentError("missing value","value",t);let o=t.split(".");o.length>2&&q.throwArgumentError("too many decimal points","value",t);let a=o[0],n=o[1];for(a||(a="0"),n||(n="0");"0"===n[n.length-1];)n=n.substring(0,n.length-1);for(n.length>i.length-1&&J("fractional component exceeds decimals","underflow","parseFixed"),""===n&&(n="0");n.length<i.length-1;)n+="0";let s=H.from(a),l=H.from(n),c=s.mul(i).add(l);return r&&(c=c.mul(K)),c}class ti{constructor(t,e,i,r){t!==Q&&q.throwError("cannot use FixedFormat constructor; use FixedFormat.from",C.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=e,this.width=i,this.decimals=r,this.name=(e?"":"u")+"fixed"+String(i)+"x"+String(r),this._multiplier=X(r),Object.freeze(this)}static from(t){if(t instanceof ti)return t;"number"==typeof t&&(t=`fixed128x${t}`);let e=!0,i=128,r=18;if("string"==typeof t){if("fixed"!==t){if("ufixed"===t)e=!1;else{let o=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);o||q.throwArgumentError("invalid fixed format","format",t),e="u"!==o[1],i=parseInt(o[2]),r=parseInt(o[3])}}}else if(t){let o=(e,i,r)=>null==t[e]?r:(typeof t[e]!==i&&q.throwArgumentError("invalid fixed format ("+e+" not "+i+")","format."+e,t[e]),t[e]);e=o("signed","boolean",e),i=o("width","number",i),r=o("decimals","number",r)}return i%8&&q.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",i),r>80&&q.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",r),new ti(Q,e,i,r)}}class tr{constructor(t,e,i,r){t!==Q&&q.throwError("cannot use FixedNumber constructor; use FixedNumber.from",C.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=r,this._hex=e,this._value=i,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(t){this.format.name!==t.format.name&&q.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t)}addUnsafe(t){this._checkFormat(t);let e=te(this._value,this.format.decimals),i=te(t._value,t.format.decimals);return tr.fromValue(e.add(i),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);let e=te(this._value,this.format.decimals),i=te(t._value,t.format.decimals);return tr.fromValue(e.sub(i),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);let e=te(this._value,this.format.decimals),i=te(t._value,t.format.decimals);return tr.fromValue(e.mul(i).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);let e=te(this._value,this.format.decimals),i=te(t._value,t.format.decimals);return tr.fromValue(e.mul(this.format._multiplier).div(i),this.format.decimals,this.format)}floor(){let t=this.toString().split(".");1===t.length&&t.push("0");let e=tr.from(t[0],this.format),i=!t[1].match(/^(0*)$/);return this.isNegative()&&i&&(e=e.subUnsafe(to.toFormat(e.format))),e}ceiling(){let t=this.toString().split(".");1===t.length&&t.push("0");let e=tr.from(t[0],this.format),i=!t[1].match(/^(0*)$/);return!this.isNegative()&&i&&(e=e.addUnsafe(to.toFormat(e.format))),e}round(t){null==t&&(t=0);let e=this.toString().split(".");if(1===e.length&&e.push("0"),(t<0||t>80||t%1)&&q.throwArgumentError("invalid decimal count","decimals",t),e[1].length<=t)return this;let i=tr.from("1"+W.substring(0,t),this.format),r=ta.toFormat(this.format);return this.mulUnsafe(i).addUnsafe(r).floor().divUnsafe(i)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(t){return null==t?this._hex:(t%8&&q.throwArgumentError("invalid byte width","width",t),O(H.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString(),t/8))}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return tr.fromString(this._value,t)}static fromValue(t,e,i){var r;return null!=i||null==e||null!=(r=e)&&(H.isBigNumber(r)||"number"==typeof r&&r%1==0||"string"==typeof r&&r.match(/^-?[0-9]+$/)||B(r)||"bigint"==typeof r||E(r))||(i=e,e=null),null==e&&(e=0),null==i&&(i="fixed"),tr.fromString(tt(t,e),ti.from(i))}static fromString(t,e){null==e&&(e="fixed");let i=ti.from(e),r=te(t,i.decimals);!i.signed&&r.lt(G)&&J("unsigned value cannot be negative","overflow","value",t);let o=null;return new tr(Q,i.signed?r.toTwos(i.width).toHexString():O(r.toHexString(),i.width/8),tt(r,i.decimals),i)}static fromBytes(t,e){null==e&&(e="fixed");let i=ti.from(e);if(P(t).length>i.width/8)throw Error("overflow");let r=H.from(t);return i.signed&&(r=r.fromTwos(i.width)),new tr(Q,r.toTwos((i.signed?0:1)+i.width).toHexString(),tt(r,i.decimals),i)}static from(t,e){if("string"==typeof t)return tr.fromString(t,e);if(E(t))return tr.fromBytes(t,e);try{return tr.fromValue(t,0,e)}catch(t){if(t.code!==C.errors.INVALID_ARGUMENT)throw t}return q.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return!!(t&&t._isFixedNumber)}}let to=tr.from(1),ta=tr.from("0.5"),tn=new C("strings/5.7.0");function ts(t,e,i,r,o){if(t===n.BAD_PREFIX||t===n.UNEXPECTED_CONTINUE){let t=0;for(let r=e+1;r<i.length&&i[r]>>6==2;r++)t++;return t}return t===n.OVERRUN?i.length-e-1:0}function tl(t,e=a.current){e!=a.current&&(tn.checkNormalize(),t=t.normalize(e));let i=[];for(let e=0;e<t.length;e++){let r=t.charCodeAt(e);if(r<128)i.push(r);else if(r<2048)i.push(r>>6|192),i.push(63&r|128);else if((64512&r)==55296){e++;let o=t.charCodeAt(e);if(e>=t.length||(64512&o)!=56320)throw Error("invalid utf-8 string");let a=65536+((1023&r)<<10)+(1023&o);i.push(a>>18|240),i.push(a>>12&63|128),i.push(a>>6&63|128),i.push(63&a|128)}else i.push(r>>12|224),i.push(r>>6&63|128),i.push(63&r|128)}return P(i)}function tc(t,e){e||(e=function(t){return[parseInt(t,16)]});let i=0,r={};return t.split(",").forEach(t=>{let o=t.split(":");r[i+=parseInt(o[0],16)]=e(o[1])}),r}function tu(t){let e=0;return t.split(",").map(t=>{let i=t.split("-");return 1===i.length?i[1]="0":""===i[1]&&(i[1]="1"),{l:e+parseInt(i[0],16),h:e=parseInt(i[1],16)}})}(function(t){t.current="",t.NFC="NFC",t.NFD="NFD",t.NFKC="NFKC",t.NFKD="NFKD"})(a||(a={})),function(t){t.UNEXPECTED_CONTINUE="unexpected continuation byte",t.BAD_PREFIX="bad codepoint prefix",t.OVERRUN="string overrun",t.MISSING_CONTINUE="missing continuation byte",t.OUT_OF_RANGE="out of UTF-8 range",t.UTF16_SURROGATE="UTF-16 surrogate",t.OVERLONG="overlong representation"}(n||(n={})),Object.freeze({error:function(t,e,i,r,o){return tn.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`,"bytes",i)},ignore:ts,replace:function(t,e,i,r,o){return t===n.OVERLONG?(r.push(o),0):(r.push(65533),ts(t,e,i))}}),tu("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"),"ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map(t=>parseInt(t,16)),tc("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"),tc("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"),tc("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",function(t){if(t.length%4!=0)throw Error("bad data");let e=[];for(let i=0;i<t.length;i+=4)e.push(parseInt(t.substring(i,i+4),16));return e}),tu("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");let td="hash/5.7.0";function th(t,e){null==e&&(e=1);let i=[],r=i.forEach,o=function(t,e){r.call(t,function(t){e>0&&Array.isArray(t)?o(t,e-1):i.push(t)})};return o(t,e),i}function tf(t,e){let i=Array(t);for(let r=0,o=-1;r<t;r++)i[r]=o+=1+e();return i}function tp(t,e){let i=tf(t(),t),r=t(),o=tf(r,t),a=function(t,e){let i=Array(t);for(let r=0;r<t;r++)i[r]=1+e();return i}(r,t);for(let t=0;t<r;t++)for(let e=0;e<a[t];e++)i.push(o[t]+e);return e?i.map(t=>e[t]):i}function tg(t,e,i){let r=Array(t).fill(void 0).map(()=>[]);for(let o=0;o<e;o++)(function(t,e){let i=Array(t);for(let o=0,a=0;o<t;o++){var r;i[o]=a+=1&(r=e())?~r>>1:r>>1}return i})(t,i).forEach((t,e)=>r[e].push(t));return r}let tv=function(){var t;let e;return t=function(t){let e=0;function i(){return t[e++]<<8|t[e++]}let r=i(),o=1,a=[0,1];for(let t=1;t<r;t++)a.push(o+=i());let n=i(),s=e;e+=n;let l=0,c=0;function u(){return 0==l&&(c=c<<8|t[e++],l=8),c>>--l&1}let d=0;for(let t=0;t<31;t++)d=d<<1|u();let h=[],f=0,p=2147483648;for(;;){let t=Math.floor(((d-f+1)*o-1)/p),e=0,i=r;for(;i-e>1;){let r=e+i>>>1;t<a[r]?i=r:e=r}if(0==e)break;h.push(e);let n=f+Math.floor(p*a[e]/o),s=f+Math.floor(p*a[e+1]/o)-1;for(;!((n^s)&1073741824);)d=d<<1&2147483647|u(),n=n<<1&2147483647,s=s<<1&2147483647|1;for(;n&~s&536870912;)d=1073741824&d|d<<1&1073741823|u(),n=n<<1^1073741824,s=(1073741824^s)<<1|1073741824|1;f=n,p=1+s-n}let g=r-4;return h.map(e=>{switch(e-g){case 3:return g+65792+(t[s++]<<16|t[s++]<<8|t[s++]);case 2:return g+256+(t[s++]<<8|t[s++]);case 1:return g+t[s++];default:return e-1}})}(function(t){t=atob(t);let e=[];for(let i=0;i<t.length;i++)e.push(t.charCodeAt(i));return P(e)}("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA==")),e=0,()=>t[e++]}();tp(tv),tp(tv),function(t){let e=[];for(;;){let i=t();if(0==i)break;e.push(function(t,e){let i=1+e(),r=e(),o=function(t){let e=[];for(;;){let i=t();if(0==i)break;e.push(i)}return e}(e);return th(tg(o.length,1+t,e).map((t,e)=>{let a=t[0],n=t.slice(1);return Array(o[e]).fill(void 0).map((t,e)=>{let o=e*r;return[a+e*i,n.map(t=>t+o)]})}))}(i,t))}for(;;){let i=t()-1;if(i<0)break;e.push(tg(1+t(),1+i,t).map(t=>[t[0],t.slice(1)]))}(function(t){let e={};for(let i=0;i<t.length;i++){let r=t[i];e[r[0]]=r[1]}})(th(e))}(tv),function(t){let e=tp(t).sort((t,e)=>t-e);(function i(){let r=[];for(;;){let o=tp(t,e);if(0==o.length)break;r.push({set:new Set(o),node:i()})}r.sort((t,e)=>e.set.size-t.set.size);let o=t();return{branches:r,valid:o%3,fe0f:!!(1&(o=o/3|0)),save:1==(o>>=1),check:2==o}})()}(tv),new C(td),new Uint8Array(32).fill(0),new C("rlp/5.7.0");let tw=new C("address/5.7.0"),tm={};for(let t=0;t<10;t++)tm[String(t)]=String(t);for(let t=0;t<26;t++)tm[String.fromCharCode(65+t)]=String(10+t);function tb(t,e,i){Object.defineProperty(t,e,{enumerable:!0,value:i,writable:!1})}new C("properties/5.7.0"),new C(td),new Uint8Array(32).fill(0),H.from(-1);let ty=H.from(0),tx=H.from(1);H.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),O(tx.toHexString(),32),O(ty.toHexString(),32);var tC={},tA={};function tM(t,e){if(!t)throw Error(e||"Assertion failed")}tM.equal=function(t,e,i){if(t!=e)throw Error(i||"Assertion failed: "+t+" != "+e)};var tk={exports:{}};"function"==typeof Object.create?tk.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:tk.exports=function(t,e){if(e){t.super_=e;var i=function(){};i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t}};var tS=tk.exports;function tE(t){return(t>>>24|t>>>8&65280|t<<8&16711680|(255&t)<<24)>>>0}function tP(t){return 1===t.length?"0"+t:t}function tB(t){return 7===t.length?"0"+t:6===t.length?"00"+t:5===t.length?"000"+t:4===t.length?"0000"+t:3===t.length?"00000"+t:2===t.length?"000000"+t:1===t.length?"0000000"+t:t}tA.inherits=tS,tA.toArray=function(t,e){if(Array.isArray(t))return t.slice();if(!t)return[];var i=[];if("string"==typeof t){if(e){if("hex"===e)for((t=t.replace(/[^a-z0-9]+/ig,"")).length%2!=0&&(t="0"+t),o=0;o<t.length;o+=2)i.push(parseInt(t[o]+t[o+1],16))}else for(var r=0,o=0;o<t.length;o++){var a,n,s=t.charCodeAt(o);s<128?i[r++]=s:(s<2048?i[r++]=s>>6|192:((a=t,n=o,(64512&a.charCodeAt(n))!=55296||n<0||n+1>=a.length||(64512&a.charCodeAt(n+1))!=56320)?i[r++]=s>>12|224:(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++o)),i[r++]=s>>18|240,i[r++]=s>>12&63|128),i[r++]=s>>6&63|128),i[r++]=63&s|128)}}else for(o=0;o<t.length;o++)i[o]=0|t[o];return i},tA.toHex=function(t){for(var e="",i=0;i<t.length;i++)e+=tP(t[i].toString(16));return e},tA.htonl=tE,tA.toHex32=function(t,e){for(var i="",r=0;r<t.length;r++){var o=t[r];"little"===e&&(o=tE(o)),i+=tB(o.toString(16))}return i},tA.zero2=tP,tA.zero8=tB,tA.join32=function(t,e,i,r){var o,a=i-e;tM(a%4==0);for(var n=Array(a/4),s=0,l=e;s<n.length;s++,l+=4)o="big"===r?t[l]<<24|t[l+1]<<16|t[l+2]<<8|t[l+3]:t[l+3]<<24|t[l+2]<<16|t[l+1]<<8|t[l],n[s]=o>>>0;return n},tA.split32=function(t,e){for(var i=Array(4*t.length),r=0,o=0;r<t.length;r++,o+=4){var a=t[r];"big"===e?(i[o]=a>>>24,i[o+1]=a>>>16&255,i[o+2]=a>>>8&255,i[o+3]=255&a):(i[o+3]=a>>>24,i[o+2]=a>>>16&255,i[o+1]=a>>>8&255,i[o]=255&a)}return i},tA.rotr32=function(t,e){return t>>>e|t<<32-e},tA.rotl32=function(t,e){return t<<e|t>>>32-e},tA.sum32=function(t,e){return t+e>>>0},tA.sum32_3=function(t,e,i){return t+e+i>>>0},tA.sum32_4=function(t,e,i,r){return t+e+i+r>>>0},tA.sum32_5=function(t,e,i,r,o){return t+e+i+r+o>>>0},tA.sum64=function(t,e,i,r){var o=t[e],a=r+t[e+1]>>>0;t[e]=(a<r?1:0)+i+o>>>0,t[e+1]=a},tA.sum64_hi=function(t,e,i,r){return(e+r>>>0<e?1:0)+t+i>>>0},tA.sum64_lo=function(t,e,i,r){return e+r>>>0},tA.sum64_4_hi=function(t,e,i,r,o,a,n,s){var l,c=e;return t+i+o+n+(0+((c=c+r>>>0)<e?1:0)+((c=c+a>>>0)<a?1:0)+((c=c+s>>>0)<s?1:0))>>>0},tA.sum64_4_lo=function(t,e,i,r,o,a,n,s){return e+r+a+s>>>0},tA.sum64_5_hi=function(t,e,i,r,o,a,n,s,l,c){var u,d=e;return t+i+o+n+l+(0+((d=d+r>>>0)<e?1:0)+((d=d+a>>>0)<a?1:0)+((d=d+s>>>0)<s?1:0)+((d=d+c>>>0)<c?1:0))>>>0},tA.sum64_5_lo=function(t,e,i,r,o,a,n,s,l,c){return e+r+a+s+c>>>0},tA.rotr64_hi=function(t,e,i){return(e<<32-i|t>>>i)>>>0},tA.rotr64_lo=function(t,e,i){return(t<<32-i|e>>>i)>>>0},tA.shr64_hi=function(t,e,i){return t>>>i},tA.shr64_lo=function(t,e,i){return(t<<32-i|e>>>i)>>>0};var tR={};function tI(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}tR.BlockHash=tI,tI.prototype.update=function(t,e){if(t=tA.toArray(t,e),this.pending?this.pending=this.pending.concat(t):this.pending=t,this.pendingTotal+=t.length,this.pending.length>=this._delta8){var i=(t=this.pending).length%this._delta8;this.pending=t.slice(t.length-i,t.length),0===this.pending.length&&(this.pending=null),t=tA.join32(t,0,t.length-i,this.endian);for(var r=0;r<t.length;r+=this._delta32)this._update(t,r,r+this._delta32)}return this},tI.prototype.digest=function(t){return this.update(this._pad()),tM(null===this.pending),this._digest(t)},tI.prototype._pad=function(){var t=this.pendingTotal,e=this._delta8,i=e-(t+this.padLength)%e,r=Array(i+this.padLength);r[0]=128;for(var o=1;o<i;o++)r[o]=0;if(t<<=3,"big"===this.endian){for(var a=8;a<this.padLength;a++)r[o++]=0;r[o++]=0,r[o++]=0,r[o++]=0,r[o++]=0,r[o++]=t>>>24&255,r[o++]=t>>>16&255,r[o++]=t>>>8&255,r[o++]=255&t}else for(r[o++]=255&t,r[o++]=t>>>8&255,r[o++]=t>>>16&255,r[o++]=t>>>24&255,r[o++]=0,r[o++]=0,r[o++]=0,r[o++]=0,a=8;a<this.padLength;a++)r[o++]=0;return r};var tO={},tz={},t_=tA.rotr32;function tL(t,e,i){return t&e^t&i^e&i}tz.ft_1=function(t,e,i,r){return 0===t?e&i^~e&r:1===t||3===t?e^i^r:2===t?tL(e,i,r):void 0},tz.ch32=function(t,e,i){return t&e^~t&i},tz.maj32=tL,tz.p32=function(t,e,i){return t^e^i},tz.s0_256=function(t){return t_(t,2)^t_(t,13)^t_(t,22)},tz.s1_256=function(t){return t_(t,6)^t_(t,11)^t_(t,25)},tz.g0_256=function(t){return t_(t,7)^t_(t,18)^t>>>3},tz.g1_256=function(t){return t_(t,17)^t_(t,19)^t>>>10};var tN=tA.rotl32,tT=tA.sum32,t$=tA.sum32_5,tD=tz.ft_1,tZ=tR.BlockHash,tj=[1518500249,1859775393,2400959708,3395469782];function tH(){if(!(this instanceof tH))return new tH;tZ.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=Array(80)}tA.inherits(tH,tZ),tH.blockSize=512,tH.outSize=160,tH.hmacStrength=80,tH.padLength=64,tH.prototype._update=function(t,e){for(var i=this.W,r=0;r<16;r++)i[r]=t[e+r];for(;r<i.length;r++)i[r]=tN(i[r-3]^i[r-8]^i[r-14]^i[r-16],1);var o=this.h[0],a=this.h[1],n=this.h[2],s=this.h[3],l=this.h[4];for(r=0;r<i.length;r++){var c=~~(r/20),u=t$(tN(o,5),tD(c,a,n,s),l,i[r],tj[c]);l=s,s=n,n=tN(a,30),a=o,o=u}this.h[0]=tT(this.h[0],o),this.h[1]=tT(this.h[1],a),this.h[2]=tT(this.h[2],n),this.h[3]=tT(this.h[3],s),this.h[4]=tT(this.h[4],l)},tH.prototype._digest=function(t){return"hex"===t?tA.toHex32(this.h,"big"):tA.split32(this.h,"big")};var tU=tA.sum32,tF=tA.sum32_4,tV=tA.sum32_5,tY=tz.ch32,tq=tz.maj32,tQ=tz.s0_256,tG=tz.s1_256,tK=tz.g0_256,tJ=tz.g1_256,tW=tR.BlockHash,tX=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function t0(){if(!(this instanceof t0))return new t0;tW.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=tX,this.W=Array(64)}function t1(){if(!(this instanceof t1))return new t1;t0.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}tA.inherits(t0,tW),t0.blockSize=512,t0.outSize=256,t0.hmacStrength=192,t0.padLength=64,t0.prototype._update=function(t,e){for(var i=this.W,r=0;r<16;r++)i[r]=t[e+r];for(;r<i.length;r++)i[r]=tF(tJ(i[r-2]),i[r-7],tK(i[r-15]),i[r-16]);var o=this.h[0],a=this.h[1],n=this.h[2],s=this.h[3],l=this.h[4],c=this.h[5],u=this.h[6],d=this.h[7];for(tM(this.k.length===i.length),r=0;r<i.length;r++){var h=tV(d,tG(l),tY(l,c,u),this.k[r],i[r]),f=tU(tQ(o),tq(o,a,n));d=u,u=c,c=l,l=tU(s,h),s=n,n=a,a=o,o=tU(h,f)}this.h[0]=tU(this.h[0],o),this.h[1]=tU(this.h[1],a),this.h[2]=tU(this.h[2],n),this.h[3]=tU(this.h[3],s),this.h[4]=tU(this.h[4],l),this.h[5]=tU(this.h[5],c),this.h[6]=tU(this.h[6],u),this.h[7]=tU(this.h[7],d)},t0.prototype._digest=function(t){return"hex"===t?tA.toHex32(this.h,"big"):tA.split32(this.h,"big")},tA.inherits(t1,t0),t1.blockSize=512,t1.outSize=224,t1.hmacStrength=192,t1.padLength=64,t1.prototype._digest=function(t){return"hex"===t?tA.toHex32(this.h.slice(0,7),"big"):tA.split32(this.h.slice(0,7),"big")};var t2=tA.rotr64_hi,t3=tA.rotr64_lo,t5=tA.shr64_hi,t4=tA.shr64_lo,t6=tA.sum64,t8=tA.sum64_hi,t9=tA.sum64_lo,t7=tA.sum64_4_hi,et=tA.sum64_4_lo,ee=tA.sum64_5_hi,ei=tA.sum64_5_lo,er=tR.BlockHash,eo=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function ea(){if(!(this instanceof ea))return new ea;er.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=eo,this.W=Array(160)}function en(){if(!(this instanceof en))return new en;ea.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}tA.inherits(ea,er),ea.blockSize=1024,ea.outSize=512,ea.hmacStrength=192,ea.padLength=128,ea.prototype._prepareBlock=function(t,e){for(var i=this.W,r=0;r<32;r++)i[r]=t[e+r];for(;r<i.length;r+=2){var o=function(t,e){var i=t2(t,e,19)^t2(e,t,29)^t5(t,e,6);return i<0&&(i+=4294967296),i}(i[r-4],i[r-3]),a=function(t,e){var i=t3(t,e,19)^t3(e,t,29)^t4(t,e,6);return i<0&&(i+=4294967296),i}(i[r-4],i[r-3]),n=i[r-14],s=i[r-13],l=function(t,e){var i=t2(t,e,1)^t2(t,e,8)^t5(t,e,7);return i<0&&(i+=4294967296),i}(i[r-30],i[r-29]),c=function(t,e){var i=t3(t,e,1)^t3(t,e,8)^t4(t,e,7);return i<0&&(i+=4294967296),i}(i[r-30],i[r-29]),u=i[r-32],d=i[r-31];i[r]=t7(o,a,n,s,l,c,u,d),i[r+1]=et(o,a,n,s,l,c,u,d)}},ea.prototype._update=function(t,e){this._prepareBlock(t,e);var i=this.W,r=this.h[0],o=this.h[1],a=this.h[2],n=this.h[3],s=this.h[4],l=this.h[5],c=this.h[6],u=this.h[7],d=this.h[8],h=this.h[9],f=this.h[10],p=this.h[11],g=this.h[12],v=this.h[13],w=this.h[14],m=this.h[15];tM(this.k.length===i.length);for(var b=0;b<i.length;b+=2){var y=w,x=m,C=function(t,e){var i=t2(t,e,14)^t2(t,e,18)^t2(e,t,9);return i<0&&(i+=4294967296),i}(d,h),A=function(t,e){var i=t3(t,e,14)^t3(t,e,18)^t3(e,t,9);return i<0&&(i+=4294967296),i}(d,h),M=function(t,e,i,r,o){var a=t&i^~t&o;return a<0&&(a+=4294967296),a}(d,0,f,0,g),k=function(t,e,i,r,o,a){var n=e&r^~e&a;return n<0&&(n+=4294967296),n}(0,h,0,p,0,v),S=this.k[b],E=this.k[b+1],P=i[b],B=i[b+1],R=ee(y,x,C,A,M,k,S,E,P,B),I=ei(y,x,C,A,M,k,S,E,P,B);y=function(t,e){var i=t2(t,e,28)^t2(e,t,2)^t2(e,t,7);return i<0&&(i+=4294967296),i}(r,o);var O=t8(y,x=function(t,e){var i=t3(t,e,28)^t3(e,t,2)^t3(e,t,7);return i<0&&(i+=4294967296),i}(r,o),C=function(t,e,i,r,o){var a=t&i^t&o^i&o;return a<0&&(a+=4294967296),a}(r,0,a,0,s),A=function(t,e,i,r,o,a){var n=e&r^e&a^r&a;return n<0&&(n+=4294967296),n}(0,o,0,n,0,l)),z=t9(y,x,C,A);w=g,m=v,g=f,v=p,f=d,p=h,d=t8(c,u,R,I),h=t9(u,u,R,I),c=s,u=l,s=a,l=n,a=r,n=o,r=t8(R,I,O,z),o=t9(R,I,O,z)}t6(this.h,0,r,o),t6(this.h,2,a,n),t6(this.h,4,s,l),t6(this.h,6,c,u),t6(this.h,8,d,h),t6(this.h,10,f,p),t6(this.h,12,g,v),t6(this.h,14,w,m)},ea.prototype._digest=function(t){return"hex"===t?tA.toHex32(this.h,"big"):tA.split32(this.h,"big")},tA.inherits(en,ea),en.blockSize=1024,en.outSize=384,en.hmacStrength=192,en.padLength=128,en.prototype._digest=function(t){return"hex"===t?tA.toHex32(this.h.slice(0,12),"big"):tA.split32(this.h.slice(0,12),"big")},tO.sha1=tH,tO.sha224=t1,tO.sha256=t0,tO.sha384=en,tO.sha512=ea;var es={},el=tA.rotl32,ec=tA.sum32,eu=tA.sum32_3,ed=tA.sum32_4,eh=tR.BlockHash;function ef(){if(!(this instanceof ef))return new ef;eh.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}function ep(t,e,i,r){return t<=15?e^i^r:t<=31?e&i|~e&r:t<=47?(e|~i)^r:t<=63?e&r|i&~r:e^(i|~r)}tA.inherits(ef,eh),es.ripemd160=ef,ef.blockSize=512,ef.outSize=160,ef.hmacStrength=192,ef.padLength=64,ef.prototype._update=function(t,e){for(var i=this.h[0],r=this.h[1],o=this.h[2],a=this.h[3],n=this.h[4],s=i,l=r,c=o,u=a,d=n,h=0;h<80;h++){var f,p,g=ec(el(ed(i,ep(h,r,o,a),t[eg[h]+e],(f=h)<=15?0:f<=31?1518500249:f<=47?1859775393:f<=63?2400959708:2840853838),ew[h]),n);i=n,n=a,a=el(o,10),o=r,r=g,g=ec(el(ed(s,ep(79-h,l,c,u),t[ev[h]+e],(p=h)<=15?1352829926:p<=31?1548603684:p<=47?1836072691:p<=63?2053994217:0),em[h]),d),s=d,d=u,u=el(c,10),c=l,l=g}g=eu(this.h[1],o,u),this.h[1]=eu(this.h[2],a,d),this.h[2]=eu(this.h[3],n,s),this.h[3]=eu(this.h[4],i,l),this.h[4]=eu(this.h[0],r,c),this.h[0]=g},ef.prototype._digest=function(t){return"hex"===t?tA.toHex32(this.h,"little"):tA.split32(this.h,"little")};var eg=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],ev=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],ew=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],em=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11];function eb(t,e,i){if(!(this instanceof eb))return new eb(t,e,i);this.Hash=t,this.blockSize=t.blockSize/8,this.outSize=t.outSize/8,this.inner=null,this.outer=null,this._init(tA.toArray(e,i))}function ey(t,e,i){return t(i={path:e,exports:{},require:function(t,e){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(t,e??i.path)}},i.exports),i.exports}eb.prototype._init=function(t){t.length>this.blockSize&&(t=new this.Hash().update(t).digest()),tM(t.length<=this.blockSize);for(var e=t.length;e<this.blockSize;e++)t.push(0);for(e=0;e<t.length;e++)t[e]^=54;for(this.inner=new this.Hash().update(t),e=0;e<t.length;e++)t[e]^=106;this.outer=new this.Hash().update(t)},eb.prototype.update=function(t,e){return this.inner.update(t,e),this},eb.prototype.digest=function(t){return this.outer.update(this.inner.digest()),this.outer.digest(t)},function(t){t.utils=tA,t.common=tR,t.sha=tO,t.ripemd=es,t.hmac=eb,t.sha1=t.sha.sha1,t.sha256=t.sha.sha256,t.sha224=t.sha.sha224,t.sha384=t.sha.sha384,t.sha512=t.sha.sha512,t.ripemd160=t.ripemd.ripemd160}(tC);var ex=eC;function eC(t,e){if(!t)throw Error(e||"Assertion failed")}eC.equal=function(t,e,i){if(t!=e)throw Error(i||"Assertion failed: "+t+" != "+e)};var eA=ey(function(t,e){function i(t){return 1===t.length?"0"+t:t}function r(t){for(var e="",r=0;r<t.length;r++)e+=i(t[r].toString(16));return e}e.toArray=function(t,e){if(Array.isArray(t))return t.slice();if(!t)return[];var i=[];if("string"!=typeof t){for(var r=0;r<t.length;r++)i[r]=0|t[r];return i}if("hex"===e){(t=t.replace(/[^a-z0-9]+/ig,"")).length%2!=0&&(t="0"+t);for(var r=0;r<t.length;r+=2)i.push(parseInt(t[r]+t[r+1],16))}else for(var r=0;r<t.length;r++){var o=t.charCodeAt(r),a=o>>8,n=255&o;a?i.push(a,n):i.push(n)}return i},e.zero2=i,e.toHex=r,e.encode=function(t,e){return"hex"===e?r(t):t}}),eM=ey(function(t,e){e.assert=ex,e.toArray=eA.toArray,e.zero2=eA.zero2,e.toHex=eA.toHex,e.encode=eA.encode,e.getNAF=function(t,e,i){var r=Array(Math.max(t.bitLength(),i)+1);r.fill(0);for(var o=1<<e+1,a=t.clone(),n=0;n<r.length;n++){var s,l=a.andln(o-1);a.isOdd()?(s=l>(o>>1)-1?(o>>1)-l:l,a.isubn(s)):s=0,r[n]=s,a.iushrn(1)}return r},e.getJSF=function(t,e){var i=[[],[]];t=t.clone(),e=e.clone();for(var r,o=0,a=0;t.cmpn(-o)>0||e.cmpn(-a)>0;){var n,s,l=t.andln(3)+o&3,c=e.andln(3)+a&3;3===l&&(l=-1),3===c&&(c=-1),n=1&l?(3==(r=t.andln(7)+o&7)||5===r)&&2===c?-l:l:0,i[0].push(n),s=1&c?(3==(r=e.andln(7)+a&7)||5===r)&&2===l?-c:c:0,i[1].push(s),2*o===n+1&&(o=1-o),2*a===s+1&&(a=1-a),t.iushrn(1),e.iushrn(1)}return i},e.cachedProperty=function(t,e,i){var r="_"+e;t.prototype[e]=function(){return void 0!==this[r]?this[r]:this[r]=i.call(this)}},e.parseBytes=function(t){return"string"==typeof t?e.toArray(t,"hex"):t},e.intFromLE=function(t){return new N(t,"hex","le")}}),ek=eM.getNAF,eS=eM.getJSF,eE=eM.assert;function eP(t,e){this.type=t,this.p=new N(e.p,16),this.red=e.prime?N.red(e.prime):N.mont(this.p),this.zero=new N(0).toRed(this.red),this.one=new N(1).toRed(this.red),this.two=new N(2).toRed(this.red),this.n=e.n&&new N(e.n,16),this.g=e.g&&this.pointFromJSON(e.g,e.gRed),this._wnafT1=[,,,,],this._wnafT2=[,,,,],this._wnafT3=[,,,,],this._wnafT4=[,,,,],this._bitLength=this.n?this.n.bitLength():0;var i=this.n&&this.p.div(this.n);!i||i.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}function eB(t,e){this.curve=t,this.type=e,this.precomputed=null}eP.prototype.point=function(){throw Error("Not implemented")},eP.prototype.validate=function(){throw Error("Not implemented")},eP.prototype._fixedNafMul=function(t,e){eE(t.precomputed);var i=t._getDoubles(),r=ek(e,1,this._bitLength),o=(1<<i.step+1)-(i.step%2==0?2:1);o/=3;var a,n,s=[];for(a=0;a<r.length;a+=i.step){n=0;for(var l=a+i.step-1;l>=a;l--)n=(n<<1)+r[l];s.push(n)}for(var c=this.jpoint(null,null,null),u=this.jpoint(null,null,null),d=o;d>0;d--){for(a=0;a<s.length;a++)(n=s[a])===d?u=u.mixedAdd(i.points[a]):n===-d&&(u=u.mixedAdd(i.points[a].neg()));c=c.add(u)}return c.toP()},eP.prototype._wnafMul=function(t,e){var i=4,r=t._getNAFPoints(i);i=r.wnd;for(var o=r.points,a=ek(e,i,this._bitLength),n=this.jpoint(null,null,null),s=a.length-1;s>=0;s--){for(var l=0;s>=0&&0===a[s];s--)l++;if(s>=0&&l++,n=n.dblp(l),s<0)break;var c=a[s];eE(0!==c),n="affine"===t.type?c>0?n.mixedAdd(o[c-1>>1]):n.mixedAdd(o[-c-1>>1].neg()):c>0?n.add(o[c-1>>1]):n.add(o[-c-1>>1].neg())}return"affine"===t.type?n.toP():n},eP.prototype._wnafMulAdd=function(t,e,i,r,o){var a,n,s,l=this._wnafT1,c=this._wnafT2,u=this._wnafT3,d=0;for(a=0;a<r;a++){var h=(s=e[a])._getNAFPoints(t);l[a]=h.wnd,c[a]=h.points}for(a=r-1;a>=1;a-=2){var f=a-1,p=a;if(1!==l[f]||1!==l[p]){u[f]=ek(i[f],l[f],this._bitLength),u[p]=ek(i[p],l[p],this._bitLength),d=Math.max(u[f].length,d),d=Math.max(u[p].length,d);continue}var g=[e[f],null,null,e[p]];0===e[f].y.cmp(e[p].y)?(g[1]=e[f].add(e[p]),g[2]=e[f].toJ().mixedAdd(e[p].neg())):0===e[f].y.cmp(e[p].y.redNeg())?(g[1]=e[f].toJ().mixedAdd(e[p]),g[2]=e[f].add(e[p].neg())):(g[1]=e[f].toJ().mixedAdd(e[p]),g[2]=e[f].toJ().mixedAdd(e[p].neg()));var v=[-3,-1,-5,-7,0,7,5,1,3],w=eS(i[f],i[p]);for(d=Math.max(w[0].length,d),u[f]=Array(d),u[p]=Array(d),n=0;n<d;n++){var m=0|w[0][n],b=0|w[1][n];u[f][n]=v[(m+1)*3+(b+1)],u[p][n]=0,c[f]=g}}var y=this.jpoint(null,null,null),x=this._wnafT4;for(a=d;a>=0;a--){for(var C=0;a>=0;){var A=!0;for(n=0;n<r;n++)x[n]=0|u[n][a],0!==x[n]&&(A=!1);if(!A)break;C++,a--}if(a>=0&&C++,y=y.dblp(C),a<0)break;for(n=0;n<r;n++){var M=x[n];0!==M&&(M>0?s=c[n][M-1>>1]:M<0&&(s=c[n][-M-1>>1].neg()),y="affine"===s.type?y.mixedAdd(s):y.add(s))}}for(a=0;a<r;a++)c[a]=null;return o?y:y.toP()},eP.BasePoint=eB,eB.prototype.eq=function(){throw Error("Not implemented")},eB.prototype.validate=function(){return this.curve.validate(this)},eP.prototype.decodePoint=function(t,e){t=eM.toArray(t,e);var i=this.p.byteLength();if((4===t[0]||6===t[0]||7===t[0])&&t.length-1==2*i)return 6===t[0]?eE(t[t.length-1]%2==0):7===t[0]&&eE(t[t.length-1]%2==1),this.point(t.slice(1,1+i),t.slice(1+i,1+2*i));if((2===t[0]||3===t[0])&&t.length-1===i)return this.pointFromX(t.slice(1,1+i),3===t[0]);throw Error("Unknown point format")},eB.prototype.encodeCompressed=function(t){return this.encode(t,!0)},eB.prototype._encode=function(t){var e=this.curve.p.byteLength(),i=this.getX().toArray("be",e);return t?[this.getY().isEven()?2:3].concat(i):[4].concat(i,this.getY().toArray("be",e))},eB.prototype.encode=function(t,e){return eM.encode(this._encode(e),t)},eB.prototype.precompute=function(t){if(this.precomputed)return this;var e={doubles:null,naf:null,beta:null};return e.naf=this._getNAFPoints(8),e.doubles=this._getDoubles(4,t),e.beta=this._getBeta(),this.precomputed=e,this},eB.prototype._hasDoubles=function(t){if(!this.precomputed)return!1;var e=this.precomputed.doubles;return!!e&&e.points.length>=Math.ceil((t.bitLength()+1)/e.step)},eB.prototype._getDoubles=function(t,e){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var i=[this],r=this,o=0;o<e;o+=t){for(var a=0;a<t;a++)r=r.dbl();i.push(r)}return{step:t,points:i}},eB.prototype._getNAFPoints=function(t){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var e=[this],i=(1<<t)-1,r=1===i?null:this.dbl(),o=1;o<i;o++)e[o]=e[o-1].add(r);return{wnd:t,points:e}},eB.prototype._getBeta=function(){return null},eB.prototype.dblp=function(t){for(var e=this,i=0;i<t;i++)e=e.dbl();return e};var eR=ey(function(t){"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var i=function(){};i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t}}}),eI=eM.assert;function eO(t){eP.call(this,"short",t),this.a=new N(t.a,16).toRed(this.red),this.b=new N(t.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(t),this._endoWnafT1=[,,,,],this._endoWnafT2=[,,,,]}function ez(t,e,i,r){eP.BasePoint.call(this,t,"affine"),null===e&&null===i?(this.x=null,this.y=null,this.inf=!0):(this.x=new N(e,16),this.y=new N(i,16),r&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function e_(t,e,i,r){eP.BasePoint.call(this,t,"jacobian"),null===e&&null===i&&null===r?(this.x=this.curve.one,this.y=this.curve.one,this.z=new N(0)):(this.x=new N(e,16),this.y=new N(i,16),this.z=new N(r,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}eR(eO,eP),eO.prototype._getEndomorphism=function(t){if(!(!this.zeroA||!this.g||!this.n||1!==this.p.modn(3))){if(t.beta)e=new N(t.beta,16).toRed(this.red);else{var e,i,r,o=this._getEndoRoots(this.p);e=(e=0>o[0].cmp(o[1])?o[0]:o[1]).toRed(this.red)}if(t.lambda)i=new N(t.lambda,16);else{var a=this._getEndoRoots(this.n);0===this.g.mul(a[0]).x.cmp(this.g.x.redMul(e))?i=a[0]:(i=a[1],eI(0===this.g.mul(i).x.cmp(this.g.x.redMul(e))))}return r=t.basis?t.basis.map(function(t){return{a:new N(t.a,16),b:new N(t.b,16)}}):this._getEndoBasis(i),{beta:e,lambda:i,basis:r}}},eO.prototype._getEndoRoots=function(t){var e=t===this.p?this.red:N.mont(t),i=new N(2).toRed(e).redInvm(),r=i.redNeg(),o=new N(3).toRed(e).redNeg().redSqrt().redMul(i);return[r.redAdd(o).fromRed(),r.redSub(o).fromRed()]},eO.prototype._getEndoBasis=function(t){for(var e,i,r,o,a,n,s,l,c,u=this.n.ushrn(Math.floor(this.n.bitLength()/2)),d=t,h=this.n.clone(),f=new N(1),p=new N(0),g=new N(0),v=new N(1),w=0;0!==d.cmpn(0);){var m=h.div(d);l=h.sub(m.mul(d)),c=g.sub(m.mul(f));var b=v.sub(m.mul(p));if(!r&&0>l.cmp(u))e=s.neg(),i=f,r=l.neg(),o=c;else if(r&&2==++w)break;s=l,h=d,d=l,g=f,f=c,v=p,p=b}a=l.neg(),n=c;var y=r.sqr().add(o.sqr());return a.sqr().add(n.sqr()).cmp(y)>=0&&(a=e,n=i),r.negative&&(r=r.neg(),o=o.neg()),a.negative&&(a=a.neg(),n=n.neg()),[{a:r,b:o},{a:a,b:n}]},eO.prototype._endoSplit=function(t){var e=this.endo.basis,i=e[0],r=e[1],o=r.b.mul(t).divRound(this.n),a=i.b.neg().mul(t).divRound(this.n),n=o.mul(i.a),s=a.mul(r.a),l=o.mul(i.b),c=a.mul(r.b);return{k1:t.sub(n).sub(s),k2:l.add(c).neg()}},eO.prototype.pointFromX=function(t,e){(t=new N(t,16)).red||(t=t.toRed(this.red));var i=t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),r=i.redSqrt();if(0!==r.redSqr().redSub(i).cmp(this.zero))throw Error("invalid point");var o=r.fromRed().isOdd();return(e&&!o||!e&&o)&&(r=r.redNeg()),this.point(t,r)},eO.prototype.validate=function(t){if(t.inf)return!0;var e=t.x,i=t.y,r=this.a.redMul(e),o=e.redSqr().redMul(e).redIAdd(r).redIAdd(this.b);return 0===i.redSqr().redISub(o).cmpn(0)},eO.prototype._endoWnafMulAdd=function(t,e,i){for(var r=this._endoWnafT1,o=this._endoWnafT2,a=0;a<t.length;a++){var n=this._endoSplit(e[a]),s=t[a],l=s._getBeta();n.k1.negative&&(n.k1.ineg(),s=s.neg(!0)),n.k2.negative&&(n.k2.ineg(),l=l.neg(!0)),r[2*a]=s,r[2*a+1]=l,o[2*a]=n.k1,o[2*a+1]=n.k2}for(var c=this._wnafMulAdd(1,r,o,2*a,i),u=0;u<2*a;u++)r[u]=null,o[u]=null;return c},eR(ez,eP.BasePoint),eO.prototype.point=function(t,e,i){return new ez(this,t,e,i)},eO.prototype.pointFromJSON=function(t,e){return ez.fromJSON(this,t,e)},ez.prototype._getBeta=function(){if(this.curve.endo){var t=this.precomputed;if(t&&t.beta)return t.beta;var e=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(t){var i=this.curve,r=function(t){return i.point(t.x.redMul(i.endo.beta),t.y)};t.beta=e,e.precomputed={beta:null,naf:t.naf&&{wnd:t.naf.wnd,points:t.naf.points.map(r)},doubles:t.doubles&&{step:t.doubles.step,points:t.doubles.points.map(r)}}}return e}},ez.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},ez.fromJSON=function(t,e,i){"string"==typeof e&&(e=JSON.parse(e));var r=t.point(e[0],e[1],i);if(!e[2])return r;function o(e){return t.point(e[0],e[1],i)}var a=e[2];return r.precomputed={beta:null,doubles:a.doubles&&{step:a.doubles.step,points:[r].concat(a.doubles.points.map(o))},naf:a.naf&&{wnd:a.naf.wnd,points:[r].concat(a.naf.points.map(o))}},r},ez.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},ez.prototype.isInfinity=function(){return this.inf},ez.prototype.add=function(t){if(this.inf)return t;if(t.inf)return this;if(this.eq(t))return this.dbl();if(this.neg().eq(t)||0===this.x.cmp(t.x))return this.curve.point(null,null);var e=this.y.redSub(t.y);0!==e.cmpn(0)&&(e=e.redMul(this.x.redSub(t.x).redInvm()));var i=e.redSqr().redISub(this.x).redISub(t.x),r=e.redMul(this.x.redSub(i)).redISub(this.y);return this.curve.point(i,r)},ez.prototype.dbl=function(){if(this.inf)return this;var t=this.y.redAdd(this.y);if(0===t.cmpn(0))return this.curve.point(null,null);var e=this.curve.a,i=this.x.redSqr(),r=t.redInvm(),o=i.redAdd(i).redIAdd(i).redIAdd(e).redMul(r),a=o.redSqr().redISub(this.x.redAdd(this.x)),n=o.redMul(this.x.redSub(a)).redISub(this.y);return this.curve.point(a,n)},ez.prototype.getX=function(){return this.x.fromRed()},ez.prototype.getY=function(){return this.y.fromRed()},ez.prototype.mul=function(t){return t=new N(t,16),this.isInfinity()?this:this._hasDoubles(t)?this.curve._fixedNafMul(this,t):this.curve.endo?this.curve._endoWnafMulAdd([this],[t]):this.curve._wnafMul(this,t)},ez.prototype.mulAdd=function(t,e,i){var r=[this,e],o=[t,i];return this.curve.endo?this.curve._endoWnafMulAdd(r,o):this.curve._wnafMulAdd(1,r,o,2)},ez.prototype.jmulAdd=function(t,e,i){var r=[this,e],o=[t,i];return this.curve.endo?this.curve._endoWnafMulAdd(r,o,!0):this.curve._wnafMulAdd(1,r,o,2,!0)},ez.prototype.eq=function(t){return this===t||this.inf===t.inf&&(this.inf||0===this.x.cmp(t.x)&&0===this.y.cmp(t.y))},ez.prototype.neg=function(t){if(this.inf)return this;var e=this.curve.point(this.x,this.y.redNeg());if(t&&this.precomputed){var i=this.precomputed,r=function(t){return t.neg()};e.precomputed={naf:i.naf&&{wnd:i.naf.wnd,points:i.naf.points.map(r)},doubles:i.doubles&&{step:i.doubles.step,points:i.doubles.points.map(r)}}}return e},ez.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},eR(e_,eP.BasePoint),eO.prototype.jpoint=function(t,e,i){return new e_(this,t,e,i)},e_.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var t=this.z.redInvm(),e=t.redSqr(),i=this.x.redMul(e),r=this.y.redMul(e).redMul(t);return this.curve.point(i,r)},e_.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},e_.prototype.add=function(t){if(this.isInfinity())return t;if(t.isInfinity())return this;var e=t.z.redSqr(),i=this.z.redSqr(),r=this.x.redMul(e),o=t.x.redMul(i),a=this.y.redMul(e.redMul(t.z)),n=t.y.redMul(i.redMul(this.z)),s=r.redSub(o),l=a.redSub(n);if(0===s.cmpn(0))return 0!==l.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var c=s.redSqr(),u=c.redMul(s),d=r.redMul(c),h=l.redSqr().redIAdd(u).redISub(d).redISub(d),f=l.redMul(d.redISub(h)).redISub(a.redMul(u)),p=this.z.redMul(t.z).redMul(s);return this.curve.jpoint(h,f,p)},e_.prototype.mixedAdd=function(t){if(this.isInfinity())return t.toJ();if(t.isInfinity())return this;var e=this.z.redSqr(),i=this.x,r=t.x.redMul(e),o=this.y,a=t.y.redMul(e).redMul(this.z),n=i.redSub(r),s=o.redSub(a);if(0===n.cmpn(0))return 0!==s.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var l=n.redSqr(),c=l.redMul(n),u=i.redMul(l),d=s.redSqr().redIAdd(c).redISub(u).redISub(u),h=s.redMul(u.redISub(d)).redISub(o.redMul(c)),f=this.z.redMul(n);return this.curve.jpoint(d,h,f)},e_.prototype.dblp=function(t){if(0===t||this.isInfinity())return this;if(!t)return this.dbl();if(this.curve.zeroA||this.curve.threeA){var e,i=this;for(e=0;e<t;e++)i=i.dbl();return i}var r=this.curve.a,o=this.curve.tinv,a=this.x,n=this.y,s=this.z,l=s.redSqr().redSqr(),c=n.redAdd(n);for(e=0;e<t;e++){var u=a.redSqr(),d=c.redSqr(),h=d.redSqr(),f=u.redAdd(u).redIAdd(u).redIAdd(r.redMul(l)),p=a.redMul(d),g=f.redSqr().redISub(p.redAdd(p)),v=p.redISub(g),w=f.redMul(v);w=w.redIAdd(w).redISub(h);var m=c.redMul(s);e+1<t&&(l=l.redMul(h)),a=g,s=m,c=w}return this.curve.jpoint(a,c.redMul(o),s)},e_.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},e_.prototype._zeroDbl=function(){var t,e,i;if(this.zOne){var r=this.x.redSqr(),o=this.y.redSqr(),a=o.redSqr(),n=this.x.redAdd(o).redSqr().redISub(r).redISub(a);n=n.redIAdd(n);var s=r.redAdd(r).redIAdd(r),l=s.redSqr().redISub(n).redISub(n),c=a.redIAdd(a);c=(c=c.redIAdd(c)).redIAdd(c),t=l,e=s.redMul(n.redISub(l)).redISub(c),i=this.y.redAdd(this.y)}else{var u=this.x.redSqr(),d=this.y.redSqr(),h=d.redSqr(),f=this.x.redAdd(d).redSqr().redISub(u).redISub(h);f=f.redIAdd(f);var p=u.redAdd(u).redIAdd(u),g=p.redSqr(),v=h.redIAdd(h);v=(v=v.redIAdd(v)).redIAdd(v),t=g.redISub(f).redISub(f),e=p.redMul(f.redISub(t)).redISub(v),i=(i=this.y.redMul(this.z)).redIAdd(i)}return this.curve.jpoint(t,e,i)},e_.prototype._threeDbl=function(){var t,e,i;if(this.zOne){var r=this.x.redSqr(),o=this.y.redSqr(),a=o.redSqr(),n=this.x.redAdd(o).redSqr().redISub(r).redISub(a);n=n.redIAdd(n);var s=r.redAdd(r).redIAdd(r).redIAdd(this.curve.a),l=s.redSqr().redISub(n).redISub(n);t=l;var c=a.redIAdd(a);c=(c=c.redIAdd(c)).redIAdd(c),e=s.redMul(n.redISub(l)).redISub(c),i=this.y.redAdd(this.y)}else{var u=this.z.redSqr(),d=this.y.redSqr(),h=this.x.redMul(d),f=this.x.redSub(u).redMul(this.x.redAdd(u));f=f.redAdd(f).redIAdd(f);var p=h.redIAdd(h),g=(p=p.redIAdd(p)).redAdd(p);t=f.redSqr().redISub(g),i=this.y.redAdd(this.z).redSqr().redISub(d).redISub(u);var v=d.redSqr();v=(v=(v=v.redIAdd(v)).redIAdd(v)).redIAdd(v),e=f.redMul(p.redISub(t)).redISub(v)}return this.curve.jpoint(t,e,i)},e_.prototype._dbl=function(){var t=this.curve.a,e=this.x,i=this.y,r=this.z,o=r.redSqr().redSqr(),a=e.redSqr(),n=i.redSqr(),s=a.redAdd(a).redIAdd(a).redIAdd(t.redMul(o)),l=e.redAdd(e),c=(l=l.redIAdd(l)).redMul(n),u=s.redSqr().redISub(c.redAdd(c)),d=c.redISub(u),h=n.redSqr();h=(h=(h=h.redIAdd(h)).redIAdd(h)).redIAdd(h);var f=s.redMul(d).redISub(h),p=i.redAdd(i).redMul(r);return this.curve.jpoint(u,f,p)},e_.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var t=this.x.redSqr(),e=this.y.redSqr(),i=this.z.redSqr(),r=e.redSqr(),o=t.redAdd(t).redIAdd(t),a=o.redSqr(),n=this.x.redAdd(e).redSqr().redISub(t).redISub(r),s=(n=(n=(n=n.redIAdd(n)).redAdd(n).redIAdd(n)).redISub(a)).redSqr(),l=r.redIAdd(r);l=(l=(l=l.redIAdd(l)).redIAdd(l)).redIAdd(l);var c=o.redIAdd(n).redSqr().redISub(a).redISub(s).redISub(l),u=e.redMul(c);u=(u=u.redIAdd(u)).redIAdd(u);var d=this.x.redMul(s).redISub(u);d=(d=d.redIAdd(d)).redIAdd(d);var h=this.y.redMul(c.redMul(l.redISub(c)).redISub(n.redMul(s)));h=(h=(h=h.redIAdd(h)).redIAdd(h)).redIAdd(h);var f=this.z.redAdd(n).redSqr().redISub(i).redISub(s);return this.curve.jpoint(d,h,f)},e_.prototype.mul=function(t,e){return t=new N(t,e),this.curve._wnafMul(this,t)},e_.prototype.eq=function(t){if("affine"===t.type)return this.eq(t.toJ());if(this===t)return!0;var e=this.z.redSqr(),i=t.z.redSqr();if(0!==this.x.redMul(i).redISub(t.x.redMul(e)).cmpn(0))return!1;var r=e.redMul(this.z),o=i.redMul(t.z);return 0===this.y.redMul(o).redISub(t.y.redMul(r)).cmpn(0)},e_.prototype.eqXToP=function(t){var e=this.z.redSqr(),i=t.toRed(this.curve.red).redMul(e);if(0===this.x.cmp(i))return!0;for(var r=t.clone(),o=this.curve.redN.redMul(e);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1;if(i.redIAdd(o),0===this.x.cmp(i))return!0}},e_.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},e_.prototype.isInfinity=function(){return 0===this.z.cmpn(0)};var eL=ey(function(t,e){e.base=eP,e.short=eO,e.mont=null,e.edwards=null}),eN=ey(function(t,e){var i,r=eM.assert;function o(t){"short"===t.type?this.curve=new eL.short(t):"edwards"===t.type?this.curve=new eL.edwards(t):this.curve=new eL.mont(t),this.g=this.curve.g,this.n=this.curve.n,this.hash=t.hash,r(this.g.validate(),"Invalid curve"),r(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function a(t,i){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){var r=new o(i);return Object.defineProperty(e,t,{configurable:!0,enumerable:!0,value:r}),r}})}e.PresetCurve=o,a("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:tC.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),a("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:tC.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),a("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:tC.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),a("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:tC.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),a("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:tC.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),a("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:tC.sha256,gRed:!1,g:["9"]}),a("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:tC.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});try{i=null.crash()}catch{i=void 0}a("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:tC.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",i]})});function eT(t){if(!(this instanceof eT))return new eT(t);this.hash=t.hash,this.predResist=!!t.predResist,this.outLen=this.hash.outSize,this.minEntropy=t.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var e=eA.toArray(t.entropy,t.entropyEnc||"hex"),i=eA.toArray(t.nonce,t.nonceEnc||"hex"),r=eA.toArray(t.pers,t.persEnc||"hex");ex(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(e,i,r)}eT.prototype._init=function(t,e,i){var r=t.concat(e).concat(i);this.K=Array(this.outLen/8),this.V=Array(this.outLen/8);for(var o=0;o<this.V.length;o++)this.K[o]=0,this.V[o]=1;this._update(r),this._reseed=1,this.reseedInterval=281474976710656},eT.prototype._hmac=function(){return new tC.hmac(this.hash,this.K)},eT.prototype._update=function(t){var e=this._hmac().update(this.V).update([0]);t&&(e=e.update(t)),this.K=e.digest(),this.V=this._hmac().update(this.V).digest(),t&&(this.K=this._hmac().update(this.V).update([1]).update(t).digest(),this.V=this._hmac().update(this.V).digest())},eT.prototype.reseed=function(t,e,i,r){"string"!=typeof e&&(r=i,i=e,e=null),t=eA.toArray(t,e),i=eA.toArray(i,r),ex(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(t.concat(i||[])),this._reseed=1},eT.prototype.generate=function(t,e,i,r){if(this._reseed>this.reseedInterval)throw Error("Reseed is required");"string"!=typeof e&&(r=i,i=e,e=null),i&&(i=eA.toArray(i,r||"hex"),this._update(i));for(var o=[];o.length<t;)this.V=this._hmac().update(this.V).digest(),o=o.concat(this.V);var a=o.slice(0,t);return this._update(i),this._reseed++,eA.encode(a,e)};var e$=eM.assert;function eD(t,e){this.ec=t,this.priv=null,this.pub=null,e.priv&&this._importPrivate(e.priv,e.privEnc),e.pub&&this._importPublic(e.pub,e.pubEnc)}eD.fromPublic=function(t,e,i){return e instanceof eD?e:new eD(t,{pub:e,pubEnc:i})},eD.fromPrivate=function(t,e,i){return e instanceof eD?e:new eD(t,{priv:e,privEnc:i})},eD.prototype.validate=function(){var t=this.getPublic();return t.isInfinity()?{result:!1,reason:"Invalid public key"}:t.validate()?t.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},eD.prototype.getPublic=function(t,e){return"string"==typeof t&&(e=t,t=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),e?this.pub.encode(e,t):this.pub},eD.prototype.getPrivate=function(t){return"hex"===t?this.priv.toString(16,2):this.priv},eD.prototype._importPrivate=function(t,e){this.priv=new N(t,e||16),this.priv=this.priv.umod(this.ec.curve.n)},eD.prototype._importPublic=function(t,e){if(t.x||t.y){"mont"===this.ec.curve.type?e$(t.x,"Need x coordinate"):("short"===this.ec.curve.type||"edwards"===this.ec.curve.type)&&e$(t.x&&t.y,"Need both x and y coordinate"),this.pub=this.ec.curve.point(t.x,t.y);return}this.pub=this.ec.curve.decodePoint(t,e)},eD.prototype.derive=function(t){return t.validate()||e$(t.validate(),"public point not validated"),t.mul(this.priv).getX()},eD.prototype.sign=function(t,e,i){return this.ec.sign(t,this,e,i)},eD.prototype.verify=function(t,e){return this.ec.verify(t,e,this)},eD.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"};var eZ=eM.assert;function ej(t,e){if(t instanceof ej)return t;this._importDER(t,e)||(eZ(t.r&&t.s,"Signature without r or s"),this.r=new N(t.r,16),this.s=new N(t.s,16),void 0===t.recoveryParam?this.recoveryParam=null:this.recoveryParam=t.recoveryParam)}function eH(){this.place=0}function eU(t,e){var i=t[e.place++];if(!(128&i))return i;var r=15&i;if(0===r||r>4)return!1;for(var o=0,a=0,n=e.place;a<r;a++,n++)o<<=8,o|=t[n],o>>>=0;return!(o<=127)&&(e.place=n,o)}function eF(t){for(var e=0,i=t.length-1;!t[e]&&!(128&t[e+1])&&e<i;)e++;return 0===e?t:t.slice(e)}function eV(t,e){if(e<128){t.push(e);return}var i=1+(Math.log(e)/Math.LN2>>>3);for(t.push(128|i);--i;)t.push(e>>>(i<<3)&255);t.push(e)}ej.prototype._importDER=function(t,e){t=eM.toArray(t,e);var i=new eH;if(48!==t[i.place++])return!1;var r=eU(t,i);if(!1===r||r+i.place!==t.length||2!==t[i.place++])return!1;var o=eU(t,i);if(!1===o)return!1;var a=t.slice(i.place,o+i.place);if(i.place+=o,2!==t[i.place++])return!1;var n=eU(t,i);if(!1===n||t.length!==n+i.place)return!1;var s=t.slice(i.place,n+i.place);if(0===a[0]){if(!(128&a[1]))return!1;a=a.slice(1)}if(0===s[0]){if(!(128&s[1]))return!1;s=s.slice(1)}return this.r=new N(a),this.s=new N(s),this.recoveryParam=null,!0},ej.prototype.toDER=function(t){var e=this.r.toArray(),i=this.s.toArray();for(128&e[0]&&(e=[0].concat(e)),128&i[0]&&(i=[0].concat(i)),e=eF(e),i=eF(i);!i[0]&&!(128&i[1]);)i=i.slice(1);var r=[2];eV(r,e.length),(r=r.concat(e)).push(2),eV(r,i.length);var o=r.concat(i),a=[48];return eV(a,o.length),a=a.concat(o),eM.encode(a,t)};var eY=function(){throw Error("unsupported")},eq=eM.assert;function eQ(t){if(!(this instanceof eQ))return new eQ(t);"string"==typeof t&&(eq(Object.prototype.hasOwnProperty.call(eN,t),"Unknown curve "+t),t=eN[t]),t instanceof eN.PresetCurve&&(t={curve:t}),this.curve=t.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=t.curve.g,this.g.precompute(t.curve.n.bitLength()+1),this.hash=t.hash||t.curve.hash}eQ.prototype.keyPair=function(t){return new eD(this,t)},eQ.prototype.keyFromPrivate=function(t,e){return eD.fromPrivate(this,t,e)},eQ.prototype.keyFromPublic=function(t,e){return eD.fromPublic(this,t,e)},eQ.prototype.genKeyPair=function(t){t||(t={});for(var e=new eT({hash:this.hash,pers:t.pers,persEnc:t.persEnc||"utf8",entropy:t.entropy||eY(this.hash.hmacStrength),entropyEnc:t.entropy&&t.entropyEnc||"utf8",nonce:this.n.toArray()}),i=this.n.byteLength(),r=this.n.sub(new N(2));;){var o=new N(e.generate(i));if(!(o.cmp(r)>0))return o.iaddn(1),this.keyFromPrivate(o)}},eQ.prototype._truncateToN=function(t,e){var i=8*t.byteLength()-this.n.bitLength();return i>0&&(t=t.ushrn(i)),!e&&t.cmp(this.n)>=0?t.sub(this.n):t},eQ.prototype.sign=function(t,e,i,r){"object"==typeof i&&(r=i,i=null),r||(r={}),e=this.keyFromPrivate(e,i),t=this._truncateToN(new N(t,16));for(var o=this.n.byteLength(),a=e.getPrivate().toArray("be",o),n=t.toArray("be",o),s=new eT({hash:this.hash,entropy:a,nonce:n,pers:r.pers,persEnc:r.persEnc||"utf8"}),l=this.n.sub(new N(1)),c=0;;c++){var u=r.k?r.k(c):new N(s.generate(this.n.byteLength()));if(!(0>=(u=this._truncateToN(u,!0)).cmpn(1)||u.cmp(l)>=0)){var d=this.g.mul(u);if(!d.isInfinity()){var h=d.getX(),f=h.umod(this.n);if(0!==f.cmpn(0)){var p=u.invm(this.n).mul(f.mul(e.getPrivate()).iadd(t));if(0!==(p=p.umod(this.n)).cmpn(0)){var g=(d.getY().isOdd()?1:0)|(0!==h.cmp(f)?2:0);return r.canonical&&p.cmp(this.nh)>0&&(p=this.n.sub(p),g^=1),new ej({r:f,s:p,recoveryParam:g})}}}}}},eQ.prototype.verify=function(t,e,i,r){t=this._truncateToN(new N(t,16)),i=this.keyFromPublic(i,r);var o=(e=new ej(e,"hex")).r,a=e.s;if(0>o.cmpn(1)||o.cmp(this.n)>=0||0>a.cmpn(1)||a.cmp(this.n)>=0)return!1;var n,s=a.invm(this.n),l=s.mul(t).umod(this.n),c=s.mul(o).umod(this.n);return this.curve._maxwellTrick?!(n=this.g.jmulAdd(l,i.getPublic(),c)).isInfinity()&&n.eqXToP(o):!(n=this.g.mulAdd(l,i.getPublic(),c)).isInfinity()&&0===n.getX().umod(this.n).cmp(o)},eQ.prototype.recoverPubKey=function(t,e,i,r){eq((3&i)===i,"The recovery param is more than two bits"),e=new ej(e,r);var o=this.n,a=new N(t),n=e.r,s=e.s,l=1&i,c=i>>1;if(n.cmp(this.curve.p.umod(this.curve.n))>=0&&c)throw Error("Unable to find sencond key candinate");n=c?this.curve.pointFromX(n.add(this.curve.n),l):this.curve.pointFromX(n,l);var u=e.r.invm(o),d=o.sub(a).mul(u).umod(o),h=s.mul(u).umod(o);return this.g.mulAdd(d,n,h)},eQ.prototype.getKeyRecoveryParam=function(t,e,i,r){if(null!==(e=new ej(e,r)).recoveryParam)return e.recoveryParam;for(var o,a=0;a<4;a++){try{o=this.recoverPubKey(t,e,a)}catch{continue}if(o.eq(i))return a}throw Error("Unable to find valid recovery factor")};var eG=ey(function(t,e){e.version="6.5.4",e.utils=eM,e.rand=function(){throw Error("unsupported")},e.curve=eL,e.curves=eN,e.ec=eQ,e.eddsa=null}).ec;let eK=new C("signing-key/5.7.0"),eJ=null;function eW(){return eJ||(eJ=new eG("secp256k1")),eJ}class eX{constructor(t){tb(this,"curve","secp256k1"),tb(this,"privateKey",I(t)),32!==function(t){if("string"!=typeof t)t=I(t);else if(!B(t)||t.length%2)return null;return(t.length-2)/2}(this.privateKey)&&eK.throwArgumentError("invalid private key","privateKey","[[ REDACTED ]]");let e=eW().keyFromPrivate(P(this.privateKey));tb(this,"publicKey","0x"+e.getPublic(!1,"hex")),tb(this,"compressedPublicKey","0x"+e.getPublic(!0,"hex")),tb(this,"_isSigningKey",!0)}_addPoint(t){let e=eW().keyFromPublic(P(this.publicKey)),i=eW().keyFromPublic(P(t));return"0x"+e.pub.add(i.pub).encodeCompressed("hex")}signDigest(t){let e=eW().keyFromPrivate(P(this.privateKey)),i=P(t);32!==i.length&&eK.throwArgumentError("bad digest length","digest",t);let r=e.sign(i,{canonical:!0});return function(t){let e={r:"0x",s:"0x",_vs:"0x",recoveryParam:0,v:0,yParityAndS:"0x",compact:"0x"};if(B(t)&&!(t.length%2)||E(t)){let i=P(t);64===i.length?(e.v=27+(i[32]>>7),i[32]&=127,e.r=I(i.slice(0,32)),e.s=I(i.slice(32,64))):65===i.length?(e.r=I(i.slice(0,32)),e.s=I(i.slice(32,64)),e.v=i[64]):A.throwArgumentError("invalid signature string","signature",t),e.v<27&&(0===e.v||1===e.v?e.v+=27:A.throwArgumentError("signature invalid v byte","signature",t)),e.recoveryParam=1-e.v%2,e.recoveryParam&&(i[32]|=128),e._vs=I(i.slice(32,64))}else{if(e.r=t.r,e.s=t.s,e.v=t.v,e.recoveryParam=t.recoveryParam,e._vs=t._vs,null!=e._vs){let i=function(t,e){(t=P(t)).length>e&&A.throwArgumentError("value out of range","value",arguments[0]);let i=new Uint8Array(e);return i.set(t,e-t.length),k(i)}(P(e._vs),32);e._vs=I(i);let r=i[0]>=128?1:0;null==e.recoveryParam?e.recoveryParam=r:e.recoveryParam!==r&&A.throwArgumentError("signature recoveryParam mismatch _vs","signature",t),i[0]&=127;let o=I(i);null==e.s?e.s=o:e.s!==o&&A.throwArgumentError("signature v mismatch _vs","signature",t)}if(null==e.recoveryParam)null==e.v?A.throwArgumentError("signature missing v and recoveryParam","signature",t):0===e.v||1===e.v?e.recoveryParam=e.v:e.recoveryParam=1-e.v%2;else if(null==e.v)e.v=27+e.recoveryParam;else{let i=0===e.v||1===e.v?e.v:1-e.v%2;e.recoveryParam!==i&&A.throwArgumentError("signature recoveryParam mismatch v","signature",t)}null!=e.r&&B(e.r)?e.r=O(e.r,32):A.throwArgumentError("signature missing or invalid r","signature",t),null!=e.s&&B(e.s)?e.s=O(e.s,32):A.throwArgumentError("signature missing or invalid s","signature",t);let i=P(e.s);i[0]>=128&&A.throwArgumentError("signature s out of range","signature",t),e.recoveryParam&&(i[0]|=128);let r=I(i);e._vs&&(B(e._vs)||A.throwArgumentError("signature invalid _vs","signature",t),e._vs=O(e._vs,32)),null==e._vs?e._vs=r:e._vs!==r&&A.throwArgumentError("signature _vs mismatch v and s","signature",t)}return e.yParityAndS=e._vs,e.compact=e.r+e.yParityAndS.substring(2),e}({recoveryParam:r.recoveryParam,r:O("0x"+r.r.toString(16),32),s:O("0x"+r.s.toString(16),32)})}computeSharedSecret(t){let e=eW().keyFromPrivate(P(this.privateKey)),i=eW().keyFromPublic(P(function(t,e){let i=P(t);if(32===i.length){let t=new eX(i);return e?"0x"+eW().keyFromPrivate(i).getPublic(!0,"hex"):t.publicKey}return 33===i.length?e?I(i):"0x"+eW().keyFromPublic(i).getPublic(!1,"hex"):65===i.length?e?"0x"+eW().keyFromPublic(i).getPublic(!0,"hex"):I(i):eK.throwArgumentError("invalid public or private key","key","[REDACTED]")}(t)));return O("0x"+e.derive(i.getPublic()).toString(16),32)}static isSigningKey(t){return!!(t&&t._isSigningKey)}}new C("transactions/5.7.0"),function(t){t[t.legacy=0]="legacy",t[t.eip2930=1]="eip2930",t[t.eip1559=2]="eip1559"}(s||(s={}));var e0=Object.defineProperty;Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;let e1=t=>t?.split(":"),e2=t=>{let e=t&&e1(t);if(e)return t.includes("did:pkh:")?e[3]:e[1]},e3=t=>{let e=t&&e1(t);if(e)return e.pop()};var e5=Object.defineProperty,e4=(Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable,Object.defineProperty),e6=Object.defineProperties,e8=Object.getOwnPropertyDescriptors,e9=Object.getOwnPropertySymbols,e7=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable,ie=(t,e,i)=>e in t?e4(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;let ii={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}};var ir=i(94160),io=i(8615);let ia=(0,io.sj)({status:"uninitialized"}),is={state:ia,subscribeKey:(t,e)=>(0,ir.VW)(ia,t,e),subscribe:t=>(0,io.Ld)(ia,()=>t(ia)),_getClient(){if(!ia._client)throw Error("SIWEController client not set");return ia._client},async getNonce(t){let e=this._getClient(),i=await e.getNonce(t);return this.setNonce(i),i},async getSession(){try{let t=this._getClient(),e=await t.getSession();return e&&(this.setSession(e),this.setStatus("success")),e}catch{return}},createMessage(t){let e=this._getClient().createMessage(t);return this.setMessage(e),e},async verifyMessage(t){let e=this._getClient();return await e.verifyMessage(t)},async signIn(){let t=this._getClient();return await t.signIn()},async signOut(){let t=this._getClient();await t.signOut(),this.setStatus("ready"),this.setSession(void 0),t.onSignOut?.()},onSignIn(t){let e=this._getClient();e.onSignIn?.(t)},onSignOut(){let t=this._getClient();t.onSignOut?.()},setSIWEClient(t){ia._client=(0,io.iH)(t),ia.status="ready",c.hD.setIsSiweEnabled(t.options.enabled)},setNonce(t){ia.nonce=t},setStatus(t){ia.status=t},setMessage(t){ia.message=t},setSession(t){ia.session=t,ia.status=t?"success":"ready"}};var il=i(34652);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ic=globalThis,iu=ic.ShadowRoot&&(void 0===ic.ShadyCSS||ic.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,id=Symbol(),ih=new WeakMap;class ip{constructor(t,e,i){if(this._$cssResult$=!0,i!==id)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(iu&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=ih.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ih.set(e,t))}return t}toString(){return this.cssText}}let ig=t=>new ip("string"==typeof t?t:t+"",void 0,id),iv=(t,...e)=>new ip(1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]),t,id),iw=(t,e)=>{if(iu)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let i of e){let e=document.createElement("style"),r=ic.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}},im=iu||void 0===ic.CSSStyleSheet?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return ig(e)})(t):t,{is:ib,defineProperty:iy,getOwnPropertyDescriptor:ix,getOwnPropertyNames:iC,getOwnPropertySymbols:iA,getPrototypeOf:iM}=Object,ik=globalThis;ik.customElements??=il.iN;let iS=ik.trustedTypes,iE=iS?iS.emptyScript:"",iP=ik.reactiveElementPolyfillSupport,iB=(t,e)=>t,iR={toAttribute(t,e){switch(e){case Boolean:t=t?iE:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},iI=(t,e)=>!ib(t,e),iO={attribute:!0,type:String,converter:iR,reflect:!1,hasChanged:iI};Symbol.metadata??=Symbol("metadata"),ik.litPropertyMetadata??=new WeakMap;class iz extends(globalThis.HTMLElement??il.mv){static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=iO){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&iy(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){let{get:r,set:o}=ix(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){let a=r?.call(this);o.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??iO}static _$Ei(){if(this.hasOwnProperty(iB("elementProperties")))return;let t=iM(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(iB("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(iB("properties"))){let t=this.properties;for(let e of[...iC(t),...iA(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(im(i));else void 0!==t&&e.push(im(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return iw(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){let i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){let o=(void 0!==i.converter?.toAttribute?i.converter:iR).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){let i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){let t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:iR;this._$Em=r,this[r]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(!((i??=this.constructor.getPropertyOptions(t)).hasChanged??iI)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(t){}firstUpdated(t){}}iz.elementStyles=[],iz.shadowRootOptions={mode:"open"},iz[iB("elementProperties")]=new Map,iz[iB("finalized")]=new Map,iP?.({ReactiveElement:iz}),(ik.reactiveElementVersions??=[]).push("2.0.4");var i_=i(53561);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class iL extends iz{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=(0,i_.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return i_.Jb}}iL._$litElement$=!0,iL.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:iL});let iN=globalThis.litElementPolyfillSupport;iN?.({LitElement:iL}),(globalThis.litElementVersions??=[]).push("4.1.0"),(0,i_.YP)`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`,(0,i_.YP)`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`;let iT=iv`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,i$=iv`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,iD=iv`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function iZ(t){return function(e){return"function"==typeof e?(customElements.get(t)||customElements.define(t,e),e):function(t,e){let{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){customElements.get(t)||customElements.define(t,e)}}}(t,e)}}let ij=iv`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`,iH=class extends iL{render(){return(0,i_.dy)`<slot></slot>`}};iH.styles=[iT,ij],iH=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([iZ("wui-card")],iH);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let iU={attribute:!0,type:String,converter:iR,reflect:!1,hasChanged:iI},iF=(t=iU,e,i)=>{let{kind:r,metadata:o}=i,a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(i.name,t),"accessor"===r){let{name:r}=i;return{set(i){let o=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,o,t)},init(e){return void 0!==e&&this.P(r,void 0,t),e}}}if("setter"===r){let{name:r}=i;return function(i){let o=this[r];e.call(this,i),this.requestUpdate(r,o,t)}}throw Error("Unsupported decorator location: "+r)};function iV(t){return(e,i)=>"object"==typeof i?iF(t,e,i):((t,e,i)=>{let r=e.hasOwnProperty(i);return e.constructor.createProperty(i,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function iY(t){return iV({...t,state:!0,attribute:!1})}let iq=iv`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,iQ=(0,i_.YP)`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`,iG=(0,i_.YP)`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,iK=(0,i_.YP)`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,iJ=(0,i_.YP)`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,iW=(0,i_.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,iX=(0,i_.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,i0=(0,i_.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,i1=(0,i_.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,i2=(0,i_.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,i3=(0,i_.YP)`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,i5=(0,i_.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,i4=(0,i_.YP)`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,i6=(0,i_.YP)`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`,i8=(0,i_.YP)`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="#26D962"/>
</svg>
`,i9=(0,i_.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,i7=(0,i_.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,rt=(0,i_.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,re=(0,i_.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ri=(0,i_.YP)`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,rr=(0,i_.YP)`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`,ro=(0,i_.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,ra=(0,i_.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,rn=(0,i_.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,rs=(0,i_.YP)`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,rl=(0,i_.YP)` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,rc=(0,i_.YP)`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,ru=(0,i_.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,rd=(0,i_.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,rh=(0,i_.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,rf=(0,i_.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,rp=(0,i_.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,rg=(0,i_.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,rv=(0,i_.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,rw=(0,i_.YP)`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,rm=(0,i_.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,rb=(0,i_.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ry=(0,i_.YP)`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,rx=(0,i_.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,rC=(0,i_.YP)`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`,rA=(0,i_.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,rM=(0,i_.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,rk=(0,i_.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,rS=(0,i_.YP)`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`,rE=(0,i_.YP)`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,rP=(0,i_.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,rB=(0,i_.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,rR=(0,i_.YP)` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,rI=(0,i_.YP)`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,rO=(0,i_.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,rz=(0,i_.YP)`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,r_=(0,i_.YP)`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,rL=(0,i_.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,rN=(0,i_.YP)`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,rT=(0,i_.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,r$=(0,i_.YP)`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,rD=(0,i_.YP)`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,rZ=(0,i_.YP)`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,rj=(0,i_.YP)`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,rH=(0,i_.YP)`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,rU=(0,i_.YP)`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`,rF=(0,i_.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,rV=(0,i_.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,rY=(0,i_.YP)`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,rq=(0,i_.YP)`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,rQ=(0,i_.YP)`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,rG=(0,i_.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,rK=(0,i_.YP)`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,rJ=(0,i_.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,rW=(0,i_.YP)`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`,rX=(0,i_.YP)`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`,r0=(0,i_.YP)`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;var r1=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let r2={add:iQ,allWallets:iG,arrowBottomCircle:iK,appStore:iJ,apple:iW,arrowBottom:iX,arrowLeft:i0,arrowRight:i1,arrowTop:i2,bank:i3,browser:i5,card:i4,checkmark:i8,checkmarkBold:i6,chevronBottom:i9,chevronLeft:i7,chevronRight:rt,chevronTop:re,chromeStore:ri,clock:rr,close:ro,compass:rn,coinPlaceholder:ra,copy:rs,cursor:rl,cursorTransparent:rc,desktop:ru,disconnect:rd,discord:rh,etherscan:rf,extension:rp,externalLink:rg,facebook:rv,farcaster:rw,filters:rm,github:rb,google:ry,helpCircle:rx,image:rC,id:rX,infoCircle:rA,lightbulb:rW,mail:rM,mobile:rk,more:rS,networkPlaceholder:rE,nftPlaceholder:rP,off:rB,playStore:rR,plus:rI,qrCode:rO,recycleHorizontal:rz,refresh:r_,search:rL,send:rN,swapHorizontal:rT,swapHorizontalMedium:rD,swapHorizontalBold:r$,swapHorizontalRoundedBold:rZ,swapVertical:rj,telegram:rH,threeDots:rU,twitch:rF,twitter:r0,twitterIcon:rV,verify:rY,verifyFilled:rq,wallet:rG,walletConnect:rK,walletPlaceholder:rQ,warningCircle:rJ,x:r0},r3=class extends iL{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,(0,i_.dy)`${r2[this.name]}`}};r3.styles=[iT,iD,iq],r1([iV()],r3.prototype,"size",void 0),r1([iV()],r3.prototype,"name",void 0),r1([iV()],r3.prototype,"color",void 0),r3=r1([iZ("wui-icon")],r3);let r5=iv`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var r4=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let r6=class extends iL{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,(0,i_.dy)`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};r6.styles=[iT,iD,r5],r4([iV()],r6.prototype,"src",void 0),r4([iV()],r6.prototype,"alt",void 0),r4([iV()],r6.prototype,"size",void 0),r6=r4([iZ("wui-image")],r6);let r8=iv`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,r9=class extends iL{render(){return(0,i_.dy)`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};r9.styles=[iT,r8],r9=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([iZ("wui-loading-hexagon")],r9);let r7=iv`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var ot=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let oe=class extends iL{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${"inherit"===this.color?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,(0,i_.dy)`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};oe.styles=[iT,r7],ot([iV()],oe.prototype,"color",void 0),ot([iV()],oe.prototype,"size",void 0),oe=ot([iZ("wui-loading-spinner")],oe);let oi=iv`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var or=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let oo=class extends iL{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let t=this.radius>50?50:this.radius,e=36-t;return(0,i_.dy)`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${116+e} ${245+e}"
          stroke-dashoffset=${360+1.75*e}
        />
      </svg>
    `}};oo.styles=[iT,oi],or([iV({type:Number})],oo.prototype,"radius",void 0),oo=or([iZ("wui-loading-thumbnail")],oo);let oa=iv`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var on=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let os=class extends iL{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,(0,i_.dy)`<slot></slot>`}};os.styles=[oa],on([iV()],os.prototype,"width",void 0),on([iV()],os.prototype,"height",void 0),on([iV()],os.prototype,"borderRadius",void 0),on([iV()],os.prototype,"variant",void 0),os=on([iZ("wui-shimmer")],os);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ol={ATTRIBUTE:1,CHILD:2},oc=t=>(...e)=>({_$litDirective$:t,values:e});class ou{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this.t=t,this._$AM=e,this.i=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let od=oc(class extends ou{constructor(t){if(super(t),t.type!==ol.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let i=t.element.classList;for(let t of this.st)t in e||(i.remove(t),this.st.delete(t));for(let t in e){let r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return i_.Jb}}),oh=iv`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var of=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let op=class extends iL{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){let t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,(0,i_.dy)`<slot class=${od(t)}></slot>`}};op.styles=[iT,oh],of([iV()],op.prototype,"variant",void 0),of([iV()],op.prototype,"color",void 0),of([iV()],op.prototype,"align",void 0),of([iV()],op.prototype,"lineClamp",void 0),op=of([iZ("wui-text")],op);let og=(0,i_.YP)`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,ov=(0,i_.YP)`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,ow=(0,i_.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,om=(0,i_.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,ob=(0,i_.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,oy=(0,i_.YP)`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,ox=(0,i_.YP)`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,oC=(0,i_.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,oA=(0,i_.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,oM=(0,i_.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,ok=(0,i_.YP)`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,oS=(0,i_.YP)`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,oE=(0,i_.YP)`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,oP=(0,i_.YP)`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,oB=(0,i_.YP)`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,oR=(0,i_.YP)`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,oI=(0,i_.YP)`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,oO=(0,i_.YP)`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,oz=(0,i_.YP)`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,o_=(0,i_.YP)`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,oL=(0,i_.YP)`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,oN=iv`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var oT=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let o$={browser:og,dao:ov,defi:ow,defiAlt:om,eth:ob,layers:oy,lock:ox,login:oC,network:oA,nft:oM,noun:ok,profile:oS,system:oE,coinbase:oP,onrampCard:oO,moonpay:oB,stripe:oR,paypal:oI,google:oz,pencil:o_,lightbulb:oL},oD=class extends iL{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,(0,i_.dy)`${o$[this.name]}`}};oD.styles=[iT,oN],oT([iV()],oD.prototype,"name",void 0),oT([iV()],oD.prototype,"size",void 0),oD=oT([iZ("wui-visual")],oD);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let oZ=t=>t??i_.Ld,oj={getSpacingStyles:(t,e)=>Array.isArray(t)?t[e]?`var(--wui-spacing-${t[e]})`:void 0:"string"==typeof t?`var(--wui-spacing-${t})`:void 0,getFormattedDate:t=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t),getHostName(t){try{return new URL(t).hostname}catch(t){return""}},getTruncateString:({string:t,charsStart:e,charsEnd:i,truncate:r})=>t.length<=e+i?t:"end"===r?`${t.substring(0,e)}...`:"start"===r?`...${t.substring(t.length-i)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(i))}`,generateAvatarColors(t){let e=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),i=this.hexToRgb(e),r=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),o=100-3*Number(r?.replace("px","")),a=`${o}% ${o}% at 65% 40%`,n=[];for(let t=0;t<5;t+=1){let e=this.tintColor(i,.15*t);n.push(`rgb(${e[0]}, ${e[1]}, ${e[2]})`)}return`
    --local-color-1: ${n[0]};
    --local-color-2: ${n[1]};
    --local-color-3: ${n[2]};
    --local-color-4: ${n[3]};
    --local-color-5: ${n[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(t){let e=parseInt(t,16);return[e>>16&255,e>>8&255,255&e]},tintColor(t,e){let[i,r,o]=t;return[Math.round(i+(255-i)*e),Math.round(r+(255-r)*e),Math.round(o+(255-o)*e)]},isNumber:t=>/^[0-9]+$/u.test(t),getColorTheme:t=>t||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark"),splitBalance(t){let e=t.split(".");return 2===e.length?[e[0],e[1]]:["0","00"]},roundNumber:(t,e,i)=>t.toString().length>=e?Number(t).toFixed(i):t,formatNumberToLocalString:(t,e=2)=>void 0===t?"0.00":"number"==typeof t?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})},oH=iv`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var oU=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let oF=class extends iL{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&oj.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&oj.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&oj.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&oj.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&oj.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&oj.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&oj.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&oj.getSpacingStyles(this.margin,3)};
    `,(0,i_.dy)`<slot></slot>`}};oF.styles=[iT,oH],oU([iV()],oF.prototype,"flexDirection",void 0),oU([iV()],oF.prototype,"flexWrap",void 0),oU([iV()],oF.prototype,"flexBasis",void 0),oU([iV()],oF.prototype,"flexGrow",void 0),oU([iV()],oF.prototype,"flexShrink",void 0),oU([iV()],oF.prototype,"alignItems",void 0),oU([iV()],oF.prototype,"justifyContent",void 0),oU([iV()],oF.prototype,"columnGap",void 0),oU([iV()],oF.prototype,"rowGap",void 0),oU([iV()],oF.prototype,"gap",void 0),oU([iV()],oF.prototype,"padding",void 0),oU([iV()],oF.prototype,"margin",void 0),oF=oU([iZ("wui-flex")],oF);let oV=iv`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var oY=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let oq=class extends iL{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `,(0,i_.dy)`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",(0,i_.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let t=oj.generateAvatarColors(this.address);return this.style.cssText+=`
 ${t}`,null}return this.dataset.variant="default",null}};oq.styles=[iT,oV],oY([iV()],oq.prototype,"imageSrc",void 0),oY([iV()],oq.prototype,"alt",void 0),oY([iV()],oq.prototype,"address",void 0),oY([iV()],oq.prototype,"size",void 0),oq=oY([iZ("wui-avatar")],oq);let oQ=iv`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var oG=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let oK=class extends iL{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let t=this.iconSize||this.size,e="lg"===this.size,i="xl"===this.size,r="gray"===this.background,o="opaque"===this.background,a="accent-100"===this.backgroundColor&&o||"success-100"===this.backgroundColor&&o||"error-100"===this.backgroundColor&&o||"inverse-100"===this.backgroundColor&&o,n=`var(--wui-color-${this.backgroundColor})`;return a?n=`var(--wui-icon-box-bg-${this.backgroundColor})`:r&&(n=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${n};
       --local-bg-mix: ${a||r?"100%":e?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${e?"xxs":i?"s":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,(0,i_.dy)` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};oK.styles=[iT,i$,oQ],oG([iV()],oK.prototype,"size",void 0),oG([iV()],oK.prototype,"backgroundColor",void 0),oG([iV()],oK.prototype,"iconColor",void 0),oG([iV()],oK.prototype,"iconSize",void 0),oG([iV()],oK.prototype,"background",void 0),oG([iV({type:Boolean})],oK.prototype,"border",void 0),oG([iV()],oK.prototype,"borderColor",void 0),oG([iV()],oK.prototype,"icon",void 0),oK=oG([iZ("wui-icon-box")],oK);let oJ=iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var oW=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let oX=class extends iL{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return(0,i_.dy)`
      <button
        ?disabled=${this.disabled}
        class=${oZ(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?oj.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return(0,i_.dy)` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){let t=this.networkSrc?(0,i_.dy)`<wui-image src=${this.networkSrc}></wui-image>`:(0,i_.dy)`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return(0,i_.dy)`
        ${t}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};oX.styles=[iT,i$,oJ],oW([iV()],oX.prototype,"networkSrc",void 0),oW([iV()],oX.prototype,"avatarSrc",void 0),oW([iV()],oX.prototype,"balance",void 0),oW([iV({type:Boolean})],oX.prototype,"isUnsupportedChain",void 0),oW([iV({type:Boolean})],oX.prototype,"disabled",void 0),oW([iV()],oX.prototype,"address",void 0),oW([iV()],oX.prototype,"profileName",void 0),oW([iV()],oX.prototype,"charsStart",void 0),oW([iV()],oX.prototype,"charsEnd",void 0),oX=oW([iZ("wui-account-button")],oX);let o0=iv`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var o1=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let o2=class extends iL{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return t="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),(0,i_.dy)`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?(0,i_.dy)`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?(0,i_.dy)`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:(0,i_.dy)`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};o2.styles=[iT,o0],o1([iV()],o2.prototype,"size",void 0),o1([iV()],o2.prototype,"name",void 0),o1([iV()],o2.prototype,"imageSrc",void 0),o1([iV()],o2.prototype,"walletIcon",void 0),o1([iV({type:Boolean})],o2.prototype,"installed",void 0),o1([iV()],o2.prototype,"badgeSize",void 0),o2=o1([iZ("wui-wallet-image")],o2);let o3=iv`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var o5=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let o4=class extends iL{constructor(){super(...arguments),this.walletImages=[]}render(){let t=this.walletImages.length<4;return(0,i_.dy)`${this.walletImages.slice(0,4).map(({src:t,walletName:e})=>(0,i_.dy)`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${oZ(e)}
            ></wui-wallet-image>
          `)}
      ${t?[...Array(4-this.walletImages.length)].map(()=>(0,i_.dy)` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};o4.styles=[iT,o3],o5([iV({type:Array})],o4.prototype,"walletImages",void 0),o4=o5([iZ("wui-all-wallets-image")],o4);let o6=iv`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var o8=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let o9={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},o7={lg:"paragraph-600",md:"small-600"},at={lg:"md",md:"md"},ae=class extends iL{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;let t=this.textVariant??o7[this.size];return(0,i_.dy)`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){let t=at[this.size],e=this.disabled?o9.disabled:o9[this.variant];return(0,i_.dy)`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return(0,i_.dy)``}};ae.styles=[iT,i$,o6],o8([iV()],ae.prototype,"size",void 0),o8([iV({type:Boolean})],ae.prototype,"disabled",void 0),o8([iV({type:Boolean})],ae.prototype,"fullWidth",void 0),o8([iV({type:Boolean})],ae.prototype,"loading",void 0),o8([iV()],ae.prototype,"variant",void 0),o8([iV({type:Boolean})],ae.prototype,"hasIconLeft",void 0),o8([iV({type:Boolean})],ae.prototype,"hasIconRight",void 0),o8([iV()],ae.prototype,"borderRadius",void 0),o8([iV()],ae.prototype,"textVariant",void 0),ae=o8([iZ("wui-button")],ae);let ai=(0,i_.YP)`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,ar=iv`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }
`;var ao=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let aa=class extends iL{constructor(){super(...arguments),this.type="wallet"}render(){return(0,i_.dy)`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?(0,i_.dy)` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${ai}`:(0,i_.dy)`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};aa.styles=[iT,i$,ar],ao([iV()],aa.prototype,"type",void 0),aa=ao([iZ("wui-card-select-loader")],aa);let an=(0,i_.YP)`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,as=(0,i_.YP)`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,al=iv`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var ac=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let au=class extends iL{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:an,md:ai,lg:as},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--wui-spacing-3xl);
      --local-height: var(--wui-spacing-3xl);
      --local-icon-size: var(--wui-spacing-l);
    `):this.style.cssText=`

      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,(0,i_.dy)`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?(0,i_.dy)`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:(0,i_.dy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};au.styles=[iT,al],ac([iV()],au.prototype,"size",void 0),ac([iV()],au.prototype,"name",void 0),ac([iV({type:Object})],au.prototype,"networkImagesBySize",void 0),ac([iV()],au.prototype,"imageSrc",void 0),ac([iV({type:Boolean})],au.prototype,"selected",void 0),ac([iV({type:Boolean})],au.prototype,"round",void 0),au=ac([iZ("wui-network-image")],au);let ad=iv`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`;var ah=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let af=class extends iL{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return(0,i_.dy)`
      <button data-selected=${oZ(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?(0,i_.dy)`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${oZ(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:(0,i_.dy)`
      <wui-wallet-image
        size="md"
        imageSrc=${oZ(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};af.styles=[iT,i$,ad],ah([iV()],af.prototype,"name",void 0),ah([iV()],af.prototype,"type",void 0),ah([iV()],af.prototype,"imageSrc",void 0),ah([iV({type:Boolean})],af.prototype,"disabled",void 0),ah([iV({type:Boolean})],af.prototype,"selected",void 0),ah([iV({type:Boolean})],af.prototype,"installed",void 0),af=ah([iZ("wui-card-select")],af);let ap=iv`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`;var ag=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let av=class extends iL{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){let t="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant;return(0,i_.dy)`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t?"small-600":"paragraph-600"} color="inherit">
          ${this.title?this.title:oj.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?(0,i_.dy)`<wui-image src=${this.imageSrc}></wui-image>`:null}};av.styles=[iT,i$,ap],ag([iV()],av.prototype,"variant",void 0),ag([iV()],av.prototype,"imageSrc",void 0),ag([iV({type:Boolean})],av.prototype,"disabled",void 0),ag([iV()],av.prototype,"icon",void 0),ag([iV()],av.prototype,"href",void 0),ag([iV()],av.prototype,"text",void 0),av=ag([iZ("wui-chip")],av);let aw=iv`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var am=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ab=class extends iL{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let t="md"===this.size?"paragraph-600":"small-600";return(0,i_.dy)`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${t} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?(0,i_.dy)`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};ab.styles=[iT,i$,aw],am([iV()],ab.prototype,"size",void 0),am([iV({type:Boolean})],ab.prototype,"loading",void 0),ab=am([iZ("wui-connect-button")],ab);let ay=iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var ax=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let aC=class extends iL{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return(0,i_.dy)`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};aC.styles=[iT,i$,ay],ax([iV({type:Boolean})],aC.prototype,"disabled",void 0),ax([iV()],aC.prototype,"label",void 0),ax([iV()],aC.prototype,"buttonLabel",void 0),aC=ax([iZ("wui-cta-button")],aC);let aA=iv`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`,aM=class extends iL{render(){return(0,i_.dy)`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};aM.styles=[iT,i$,aA],aM=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([iZ("wui-details-group")],aM);let ak=iv`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`;var aS=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let aE=class extends iL{constructor(){super(...arguments),this.name=""}render(){return(0,i_.dy)`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};aE.styles=[iT,i$,ak],aS([iV()],aE.prototype,"name",void 0),aE=aS([iZ("wui-details-group-item")],aE);let aP=iv`
  :host {
    z-index: calc(var(--w3m-z-index) + 1);
    width: 200px;
    padding: var(--wui-spacing-3xs);
    align-items: center;
    display: inherit;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-fg-base-125);
    /* Dark/Elevation/L */
    box-shadow:
      0px 8px 22px -6px rgba(0, 0, 0, 0.12),
      0px 14px 64px -4px rgba(0, 0, 0, 0.12);
  }
`;var aB=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let aR=class extends iL{constructor(){super(...arguments),this.actions=[],this.isOpen=!1}render(){return this.isOpen?(0,i_.dy)`
      <wui-flex flexDirection="column" gap="4xs">
        ${this.actions.map(t=>(0,i_.dy)`
            <wui-list-item
              icon=${t.icon}
              iconSize="sm"
              variant="icon"
              @click=${t.onClick}
            >
              <wui-text variant="small-400" color="fg-100">${t.label}</wui-text>
            </wui-list-item>
          `)}
      </wui-flex>
    `:null}};aR.styles=[iT,i$,aP],aB([iV({type:Array})],aR.prototype,"actions",void 0),aB([iV({type:Boolean})],aR.prototype,"isOpen",void 0),aR=aB([iZ("wui-dropdown-menu")],aR);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{I:aI}=i_._$LH,aO=t=>void 0===t.strings,az=(t,e)=>{let i=t._$AN;if(void 0===i)return!1;for(let t of i)t._$AO?.(e,!1),az(t,e);return!0},a_=t=>{let e,i;do{if(void 0===(e=t._$AM))break;(i=e._$AN).delete(t),t=e}while(0===i?.size)},aL=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),a$(e)}};function aN(t){void 0!==this._$AN?(a_(this),this._$AM=t,aL(this)):this._$AM=t}function aT(t,e=!1,i=0){let r=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size){if(e){if(Array.isArray(r))for(let t=i;t<r.length;t++)az(r[t],!1),a_(r[t]);else null!=r&&(az(r,!1),a_(r))}else az(this,t)}}let a$=t=>{t.type==ol.CHILD&&(t._$AP??=aT,t._$AQ??=aN)};class aD extends ou{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),aL(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(az(this,t),a_(this))}setValue(t){if(aO(this.t))this.t._$AI(t,this);else{let e=[...this.t._$AH];e[this.i]=t,this.t._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let aZ=()=>new aj;class aj{}let aH=new WeakMap,aU=oc(class extends aD{render(t){return i_.Ld}update(t,[e]){let i=e!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),i_.Ld}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){let e=this.ht??globalThis,i=aH.get(e);void 0===i&&(i=new WeakMap,aH.set(e,i)),void 0!==i.get(this.Y)&&this.Y.call(this.ht,void 0),i.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?aH.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),aF=iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var aV=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let aY=class extends iL{constructor(){super(...arguments),this.inputElementRef=aZ(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){let t=`wui-padding-right-${this.inputRightPadding}`,e={[`wui-size-${this.size}`]:!0,[t]:!!this.inputRightPadding};return(0,i_.dy)`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${aU(this.inputElementRef)}
        class=${od(e)}
        type=${this.type}
        enterkeyhint=${oZ(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?(0,i_.dy)`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};aY.styles=[iT,i$,aF],aV([iV()],aY.prototype,"size",void 0),aV([iV()],aY.prototype,"icon",void 0),aV([iV({type:Boolean})],aY.prototype,"disabled",void 0),aV([iV()],aY.prototype,"placeholder",void 0),aV([iV()],aY.prototype,"type",void 0),aV([iV()],aY.prototype,"keyHint",void 0),aV([iV()],aY.prototype,"value",void 0),aV([iV()],aY.prototype,"inputRightPadding",void 0),aY=aV([iZ("wui-input-text")],aY);let aq=iv`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var aQ=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let aG=class extends iL{constructor(){super(...arguments),this.disabled=!1}render(){return(0,i_.dy)`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?(0,i_.dy)`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};aG.styles=[iT,aq],aQ([iV()],aG.prototype,"errorMessage",void 0),aQ([iV({type:Boolean})],aG.prototype,"disabled",void 0),aQ([iV()],aG.prototype,"value",void 0),aG=aQ([iZ("wui-email-input")],aG);let aK=iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var aJ=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let aW=class extends iL{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return(0,i_.dy)`
      <wui-input-text
        value=${oZ(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return(0,i_.dy)`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${u.bq.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?(0,i_.dy)`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?(0,i_.dy)`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};aW.styles=[iT,aK],aJ([iV()],aW.prototype,"errorMessage",void 0),aJ([iV({type:Boolean})],aW.prototype,"disabled",void 0),aJ([iV()],aW.prototype,"value",void 0),aJ([iV({type:Boolean})],aW.prototype,"loading",void 0),aW=aJ([iZ("wui-ens-input")],aW);let aX=iv`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var a0=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let a1=class extends iL{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){let t="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",e="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${t});
    --local-padding: var(${e});
`,(0,i_.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};a1.styles=[iT,i$,iD,aX],a0([iV()],a1.prototype,"size",void 0),a0([iV({type:Boolean})],a1.prototype,"disabled",void 0),a0([iV()],a1.prototype,"icon",void 0),a0([iV()],a1.prototype,"iconColor",void 0),a1=a0([iZ("wui-icon-link")],a1);let a2=iv`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var a3=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let a5=class extends iL{constructor(){super(...arguments),this.icon="copy"}render(){return(0,i_.dy)`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};a5.styles=[iT,i$,a2],a3([iV()],a5.prototype,"icon",void 0),a5=a3([iZ("wui-input-element")],a5);let a4=iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var a6=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let a8=class extends iL{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return(0,i_.dy)`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};a8.styles=[iT,i$,a4],a6([iV({type:Boolean})],a8.prototype,"disabled",void 0),a6([iV({type:String})],a8.prototype,"value",void 0),a8=a6([iZ("wui-input-numeric")],a8);let a9=iv`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var a7=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let nt=class extends iL{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return(0,i_.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};nt.styles=[iT,i$,a9],a7([iV({type:Boolean})],nt.prototype,"disabled",void 0),a7([iV()],nt.prototype,"color",void 0),nt=a7([iZ("wui-link")],nt);let ne=iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var ni=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let nr=class extends iL{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return(0,i_.dy)`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${oZ(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return(0,i_.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return(0,i_.dy)`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e="square-blue"===this.iconVariant?"mdl":"md",i=this.iconSize?this.iconSize:e;return(0,i_.dy)`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${i}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?(0,i_.dy)`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:(0,i_.dy)``}chevronTemplate(){return this.chevron?(0,i_.dy)`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};nr.styles=[iT,i$,ne],ni([iV()],nr.prototype,"icon",void 0),ni([iV()],nr.prototype,"iconSize",void 0),ni([iV()],nr.prototype,"variant",void 0),ni([iV()],nr.prototype,"iconVariant",void 0),ni([iV({type:Boolean})],nr.prototype,"disabled",void 0),ni([iV()],nr.prototype,"imageSrc",void 0),ni([iV()],nr.prototype,"alt",void 0),ni([iV({type:Boolean})],nr.prototype,"chevron",void 0),ni([iV({type:Boolean})],nr.prototype,"loading",void 0),nr=ni([iZ("wui-list-item")],nr),function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"}(l||(l={}));let no=iv`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var na=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let nn=class extends iL{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[t,e]=this.images,i=t?.type==="NFT",r=e?.url?"NFT"===e.type:i;return this.style.cssText=`
    --local-left-border-radius: ${i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    --local-right-border-radius: ${r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    `,(0,i_.dy)`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[t,e]=this.images,i=t?.type;return 2===this.images.length&&(t?.url||e?.url)?(0,i_.dy)`<div class="swap-images-container">
        ${t?.url?(0,i_.dy)`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${e?.url?(0,i_.dy)`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t?.url?(0,i_.dy)`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:"NFT"===i?(0,i_.dy)`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:(0,i_.dy)`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t,e="accent-100";return(t=this.getIcon(),this.status&&(e=this.getStatusColor()),t)?(0,i_.dy)`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};nn.styles=[no],na([iV()],nn.prototype,"type",void 0),na([iV()],nn.prototype,"status",void 0),na([iV()],nn.prototype,"direction",void 0),na([iV({type:Boolean})],nn.prototype,"onlyDirectionIcon",void 0),na([iV({type:Array})],nn.prototype,"images",void 0),na([iV({type:Object})],nn.prototype,"secondImage",void 0),nn=na([iZ("wui-transaction-visual")],nn);let ns=iv`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var nl=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let nc=class extends iL{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return(0,i_.dy)`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${oZ(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${oZ(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${l[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let t=this.descriptions?.[0];return t?(0,i_.dy)`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){let t=this.descriptions?.[1];return t?(0,i_.dy)`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};nc.styles=[iT,ns],nl([iV()],nc.prototype,"type",void 0),nl([iV({type:Array})],nc.prototype,"descriptions",void 0),nl([iV()],nc.prototype,"date",void 0),nl([iV({type:Boolean})],nc.prototype,"onlyDirectionIcon",void 0),nl([iV()],nc.prototype,"status",void 0),nl([iV()],nc.prototype,"direction",void 0),nl([iV({type:Array})],nc.prototype,"images",void 0),nl([iV({type:Array})],nc.prototype,"price",void 0),nl([iV({type:Array})],nc.prototype,"amount",void 0),nl([iV({type:Array})],nc.prototype,"symbol",void 0),nc=nl([iZ("wui-transaction-list-item")],nc);let nu=iv`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,nd=class extends iL{render(){return(0,i_.dy)`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};nd.styles=[iT,nu],nd=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([iZ("wui-transaction-list-item-loader")],nd);let nh=iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var nf=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let np=class extends iL{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let t="md"===this.size?"mini-700":"micro-700";return(0,i_.dy)`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};np.styles=[iT,nh],nf([iV()],np.prototype,"variant",void 0),nf([iV()],np.prototype,"size",void 0),np=nf([iZ("wui-tag")],np);let ng=iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var nv=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let nw=class extends iL{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return(0,i_.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?(0,i_.dy)` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?(0,i_.dy)` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?(0,i_.dy)`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:(0,i_.dy)`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?(0,i_.dy)`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?(0,i_.dy)`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};nw.styles=[iT,i$,ng],nv([iV({type:Array})],nw.prototype,"walletImages",void 0),nv([iV()],nw.prototype,"imageSrc",void 0),nv([iV()],nw.prototype,"name",void 0),nv([iV()],nw.prototype,"tagLabel",void 0),nv([iV()],nw.prototype,"tagVariant",void 0),nv([iV()],nw.prototype,"icon",void 0),nv([iV()],nw.prototype,"walletIcon",void 0),nv([iV({type:Boolean})],nw.prototype,"installed",void 0),nv([iV({type:Boolean})],nw.prototype,"disabled",void 0),nv([iV({type:Boolean})],nw.prototype,"showAllWallets",void 0),nw=nv([iZ("wui-list-wallet")],nw);let nm=iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var nb=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ny=class extends iL{constructor(){super(...arguments),this.logo="google"}render(){return(0,i_.dy)`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};ny.styles=[iT,nm],nb([iV()],ny.prototype,"logo",void 0),ny=nb([iZ("wui-logo")],ny);let nx=iv`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var nC=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let nA=class extends iL{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return(0,i_.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};nA.styles=[iT,i$,nx],nC([iV()],nA.prototype,"logo",void 0),nC([iV({type:Boolean})],nA.prototype,"disabled",void 0),nA=nC([iZ("wui-logo-select")],nA);let nM=iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var nk=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let nS=class extends iL{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return(0,i_.dy)`
      <button data-testid="w3m-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?(0,i_.dy)`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?(0,i_.dy)`<wui-image src=${this.imageSrc}></wui-image>`:(0,i_.dy)`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};nS.styles=[iT,i$,nM],nk([iV()],nS.prototype,"imageSrc",void 0),nk([iV({type:Boolean})],nS.prototype,"isUnsupportedChain",void 0),nk([iV({type:Boolean})],nS.prototype,"disabled",void 0),nS=nk([iZ("wui-network-button")],nS);let nE=iv`
  :host {
    position: relative;
    display: block;
  }
`;var nP=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let nB=class extends iL{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=t=>this.values.slice(0,t).every(t=>""!==t),this.handleKeyDown=(t,e)=>{let i=t.target,r=this.getInputElement(i);if(!r)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(t.key)&&t.preventDefault();let o=r.selectionStart;switch(t.key){case"ArrowLeft":o&&r.setSelectionRange(o+1,o+1),this.focusInputField("prev",e);break;case"ArrowRight":case"Shift":this.focusInputField("next",e);break;case"Delete":case"Backspace":""===r.value?this.focusInputField("prev",e):this.updateInput(r,e,"")}},this.focusInputField=(t,e)=>{if("next"===t){let t=e+1;if(!this.shouldInputBeEnabled(t))return;let i=this.numerics[t<this.length?t:e],r=i?this.getInputElement(i):void 0;r&&(r.disabled=!1,r.focus())}if("prev"===t){let t=e-1,i=this.numerics[t>-1?t:e],r=i?this.getInputElement(i):void 0;r&&r.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let t=this.shadowRoot?.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t)),this.numerics[0]?.focus()}render(){return(0,i_.dy)`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((t,e)=>(0,i_.dy)`
            <wui-input-numeric
              @input=${t=>this.handleInput(t,e)}
              @click=${t=>this.selectInput(t)}
              @keydown=${t=>this.handleKeyDown(t,e)}
              .disabled=${!this.shouldInputBeEnabled(e)}
              .value=${this.values[e]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(t,e,i){let r=this.numerics[e],o=t||(r?this.getInputElement(r):void 0);o&&(o.value=i,this.values=this.values.map((t,r)=>r===e?i:t))}selectInput(t){let e=t.target;if(e){let t=this.getInputElement(e);t?.select()}}handleInput(t,e){let i=t.target,r=this.getInputElement(i);if(r){let i=r.value;"insertFromPaste"===t.inputType?this.handlePaste(r,i,e):oj.isNumber(i)&&t.data?(this.updateInput(r,e,t.data),this.focusInputField("next",e)):this.updateInput(r,e,"")}this.dispatchInputChangeEvent()}handlePaste(t,e,i){let r=e[0];if(r&&oj.isNumber(r)){this.updateInput(t,i,r);let o=e.substring(1);if(i+1<this.length&&o.length){let t=this.numerics[i+1],e=t?this.getInputElement(t):void 0;e&&this.handlePaste(e,o,i+1)}else this.focusInputField("next",i)}else this.updateInput(t,i,"")}getInputElement(t){return t.shadowRoot?.querySelector("input")?t.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let t=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:t,bubbles:!0,composed:!0}))}};nB.styles=[iT,nE],nP([iV({type:Number})],nB.prototype,"length",void 0),nP([iV({type:String})],nB.prototype,"otp",void 0),nP([iY()],nB.prototype,"values",void 0),nB=nP([iZ("wui-otp")],nB);var nR=i(60742);function nI(t,e,i){return t!==e&&(t-e<0?e-t:t-e)<=i+.1}let nO={generate(t,e,i){let r="#141414",o=[],a=function(t,e){let i=Array.prototype.slice.call(nR.create(t,{errorCorrectionLevel:"Q"}).modules.data,0),r=Math.sqrt(i.length);return i.reduce((t,e,i)=>(i%r==0?t.push([e]):t[t.length-1].push(e))&&t,[])}(t,0),n=e/a.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach(({x:t,y:e})=>{let i=(a.length-7)*n*t,l=(a.length-7)*n*e;for(let t=0;t<s.length;t+=1){let e=n*(7-2*t);o.push((0,i_.YP)`
            <rect
              fill=${2===t?r:"transparent"}
              width=${0===t?e-5:e}
              rx= ${0===t?(e-5)*.45:.45*e}
              ry= ${0===t?(e-5)*.45:.45*e}
              stroke=${r}
              stroke-width=${0===t?5:0}
              height=${0===t?e-5:e}
              x= ${0===t?l+n*t+2.5:l+n*t}
              y= ${0===t?i+n*t+2.5:i+n*t}
            />
          `)}});let l=Math.floor((i+25)/n),c=a.length/2-l/2,u=a.length/2+l/2-1,d=[];a.forEach((t,e)=>{t.forEach((t,i)=>{!a[e][i]||e<7&&i<7||e>a.length-8&&i<7||e<7&&i>a.length-8||e>c&&e<u&&i>c&&i<u||d.push([e*n+n/2,i*n+n/2])})});let h={};return d.forEach(([t,e])=>{h[t]?h[t]?.push(e):h[t]=[e]}),Object.entries(h).map(([t,e])=>{let i=e.filter(t=>e.every(e=>!nI(t,e,n)));return[Number(t),i]}).forEach(([t,e])=>{e.forEach(e=>{o.push((0,i_.YP)`<circle cx=${t} cy=${e} fill=${r} r=${n/2.5} />`)})}),Object.entries(h).filter(([t,e])=>e.length>1).map(([t,e])=>{let i=e.filter(t=>e.some(e=>nI(t,e,n)));return[Number(t),i]}).map(([t,e])=>{e.sort((t,e)=>t<e?-1:1);let i=[];for(let t of e){let e=i.find(e=>e.some(e=>nI(t,e,n)));e?e.push(t):i.push([t])}return[t,i.map(t=>[t[0],t[t.length-1]])]}).forEach(([t,e])=>{e.forEach(([e,i])=>{o.push((0,i_.YP)`
              <line
                x1=${t}
                x2=${t}
                y1=${e}
                y2=${i}
                stroke=${r}
                stroke-width=${n/1.25}
                stroke-linecap="round"
              />
            `)})}),o}},nz=iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var n_=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let nL=class extends iL{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,(0,i_.dy)`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let t="light"===this.theme?this.size:this.size-32;return(0,i_.YP)`
      <svg height=${t} width=${t}>
        ${nO.generate(this.uri,t,this.arenaClear?0:t/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?(0,i_.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?(0,i_.dy)`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:(0,i_.dy)`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};nL.styles=[iT,nz],n_([iV()],nL.prototype,"uri",void 0),n_([iV({type:Number})],nL.prototype,"size",void 0),n_([iV()],nL.prototype,"theme",void 0),n_([iV()],nL.prototype,"imageSrc",void 0),n_([iV()],nL.prototype,"alt",void 0),n_([iV({type:Boolean})],nL.prototype,"arenaClear",void 0),n_([iV({type:Boolean})],nL.prototype,"farcaster",void 0),nL=n_([iZ("wui-qr-code")],nL);let nN=iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,nT=class extends iL{constructor(){super(...arguments),this.inputComponentRef=aZ()}render(){return(0,i_.dy)`
      <wui-input-text
        ${aU(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let t=this.inputComponentRef.value,e=t?.inputElementRef.value;e&&(e.value="",e.focus(),e.dispatchEvent(new Event("input")))}};nT.styles=[iT,nN],nT=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([iZ("wui-search-bar")],nT);let n$=iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var nD=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let nZ=class extends iL{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1}render(){return(0,i_.dy)`
      ${this.loading?(0,i_.dy)`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:(0,i_.dy)`<wui-icon-box
            size="sm"
            iconSize="xs"
            iconColor=${this.iconColor}
            backgroundColor=${this.backgroundColor}
            icon=${this.icon}
            background="opaque"
          ></wui-icon-box>`}
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};nZ.styles=[iT,n$],nD([iV()],nZ.prototype,"backgroundColor",void 0),nD([iV()],nZ.prototype,"iconColor",void 0),nD([iV()],nZ.prototype,"icon",void 0),nD([iV()],nZ.prototype,"message",void 0),nD([iV()],nZ.prototype,"loading",void 0),nZ=nD([iZ("wui-snackbar")],nZ);let nj=iv`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var nH=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let nU=class extends iL{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,e)=>{let i=e===this.activeTab;return(0,i_.dy)`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(e)}
          data-active=${i}
          data-testid="tab-${t.label?.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(t){return t.icon?(0,i_.dy)`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,e){let i=this.buttons[this.activeTab],r=this.buttons[t],o=i?.querySelector("wui-text"),a=r?.querySelector("wui-text"),n=r?.getBoundingClientRect(),s=a?.getBoundingClientRect();i&&o&&!e&&t!==this.activeTab&&(o.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),r&&n&&s&&a&&(t!==this.activeTab||e)&&(this.localTabWidth=`${Math.round(n.width+s.width)+6}px`,r.animate([{width:`${n.width+s.width}px`}],{duration:e?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:e?0:125,delay:e?0:200,fill:"forwards",easing:"ease"}))}};nU.styles=[iT,i$,nj],nH([iV({type:Array})],nU.prototype,"tabs",void 0),nH([iV()],nU.prototype,"onTabChange",void 0),nH([iV({type:Array})],nU.prototype,"buttons",void 0),nH([iV({type:Boolean})],nU.prototype,"disabled",void 0),nH([iV()],nU.prototype,"localTabWidth",void 0),nH([iY()],nU.prototype,"activeTab",void 0),nH([iY()],nU.prototype,"isDense",void 0),nU=nH([iZ("wui-tabs")],nU);let nF=iv`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var nV=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let nY=class extends iL{constructor(){super(...arguments),this.text=""}render(){return(0,i_.dy)`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?(0,i_.dy)`<wui-image src=${this.imageSrc}></wui-image>`:(0,i_.dy)`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};nY.styles=[iT,i$,nF],nV([iV()],nY.prototype,"imageSrc",void 0),nV([iV()],nY.prototype,"text",void 0),nY=nV([iZ("wui-token-button")],nY);let nq=iv`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var nQ=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let nG=class extends iL{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,(0,i_.dy)`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};nG.styles=[iT,i$,nq],nQ([iV()],nG.prototype,"placement",void 0),nQ([iV()],nG.prototype,"variant",void 0),nQ([iV()],nG.prototype,"message",void 0),nG=nQ([iZ("wui-tooltip")],nG);let nK=iv`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var nJ=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let nW=class extends iL{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){if(!this.visible)return null;let t=this.amount&&this.price?u.C6.multiply(this.price,this.amount)?.toFixed(3):null;return(0,i_.dy)`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${t?(0,i_.dy)`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${oj.formatNumberToLocalString(t,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?(0,i_.dy)`<wui-text variant="small-400" color="fg-200">
                  ${oj.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?(0,i_.dy)`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?(0,i_.dy)`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};nW.styles=[iT,i$,nK],nJ([iV()],nW.prototype,"imageSrc",void 0),nJ([iV()],nW.prototype,"name",void 0),nJ([iV()],nW.prototype,"symbol",void 0),nJ([iV()],nW.prototype,"price",void 0),nJ([iV()],nW.prototype,"amount",void 0),nJ([iY()],nW.prototype,"visible",void 0),nJ([iY()],nW.prototype,"imageError",void 0),nW=nJ([iZ("wui-token-list-item")],nW);let nX=iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var n0=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let n1=class extends iL{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,(0,i_.dy)`${this.templateVisual()}`}templateVisual(){return this.imageSrc?(0,i_.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:(0,i_.dy)`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};n1.styles=[iT,nX],n0([iV()],n1.prototype,"imageSrc",void 0),n0([iV()],n1.prototype,"alt",void 0),n0([iV({type:Boolean})],n1.prototype,"borderRadiusFull",void 0),n1=n0([iZ("wui-visual-thumbnail")],n1);let n2=iv`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var n3=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let n5=class extends iL{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return(0,i_.dy)`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};n5.styles=[iT,i$,n2],n3([iV()],n5.prototype,"label",void 0),n3([iV()],n5.prototype,"description",void 0),n3([iV()],n5.prototype,"icon",void 0),n5=n3([iZ("wui-notice-card")],n5);let n4=iv`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-150), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var n6=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let n8=class extends iL{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(t){super.updated(t),(t.has("textTitle")||t.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{let t=this.shadowRoot?.querySelector(".heightContent"),e=this.shadowRoot?.querySelector(".textContent");if(t&&e){this.scrollElement=t;let i=e?.scrollHeight;i&&i>100&&(this.enableAccordion=!0,this.scrollHeightElement=i,this.requestUpdate())}})}render(){return(0,i_.dy)`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||!!this.toggled}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){let t=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),t&&t.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?(0,i_.dy)` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};n8.styles=[iT,i$,n4],n6([iV()],n8.prototype,"textTitle",void 0),n6([iV()],n8.prototype,"overflowedContent",void 0),n8=n6([iZ("wui-list-accordion")],n8);let n9=iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var n7=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let st=class extends iL{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return(0,i_.dy)`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?(0,i_.dy)`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?(0,i_.dy)` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:(0,i_.dy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};st.styles=[iT,i$,n9],n7([iV()],st.prototype,"imageSrc",void 0),n7([iV()],st.prototype,"textTitle",void 0),n7([iV()],st.prototype,"textValue",void 0),st=n7([iZ("wui-list-content")],st);let se=iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var si=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let sr=class extends iL{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return(0,i_.dy)`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?(0,i_.dy)`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?(0,i_.dy)`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:(0,i_.dy)`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};sr.styles=[iT,i$,se],si([iV()],sr.prototype,"imageSrc",void 0),si([iV()],sr.prototype,"name",void 0),si([iV({type:Boolean})],sr.prototype,"disabled",void 0),si([iV({type:Boolean})],sr.prototype,"selected",void 0),si([iV({type:Boolean})],sr.prototype,"transparent",void 0),sr=si([iZ("wui-list-network")],sr);let so=iv`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var sa=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let sn=class extends iL{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return(0,i_.dy)`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?(0,i_.dy)`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:(0,i_.dy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};sn.styles=[iT,i$,so],sa([iV()],sn.prototype,"amount",void 0),sa([iV()],sn.prototype,"networkCurreny",void 0),sa([iV()],sn.prototype,"networkImageUrl",void 0),sa([iV()],sn.prototype,"receiverAddress",void 0),sa([iV()],sn.prototype,"addressExplorerUrl",void 0),sn=sa([iZ("wui-list-wallet-transaction")],sn);let ss=iv`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-060);
    }
  }
`;var sl=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let sc=class extends iL{constructor(){super(...arguments),this.text=""}render(){return(0,i_.dy)`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};sc.styles=[iT,i$,ss],sl([iV()],sc.prototype,"text",void 0),sc=sl([iZ("wui-promo")],sc);let su=iv`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var sd=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let sh=class extends iL{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return(0,i_.dy)`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};sh.styles=[iT,su],sd([iV()],sh.prototype,"dollars",void 0),sd([iV()],sh.prototype,"pennies",void 0),sh=sd([iZ("wui-balance")],sh);let sf=iv`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var sp=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let sg=class extends iL{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return(0,i_.dy)`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${oj.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?(0,i_.dy)`<wui-image src=${this.networkSrc}></wui-image>`:(0,i_.dy)`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};sg.styles=[iT,i$,sf],sp([iV()],sg.prototype,"networkSrc",void 0),sp([iV()],sg.prototype,"avatarSrc",void 0),sp([iV()],sg.prototype,"profileName",void 0),sp([iV()],sg.prototype,"address",void 0),sp([iV()],sg.prototype,"icon",void 0),sg=sp([iZ("wui-profile-button")],sg);let sv=iv`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var sw=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let sm=class extends iL{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail",this.connectedConnector=c.MO.getConnectedConnector(),this.shouldShowIcon="AUTH"===this.connectedConnector}render(){return(0,i_.dy)`<button ontouchstart data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.shouldShowIcon?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${oj.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(t){if(t.target instanceof HTMLElement&&"copy-address"===t.target.id){this.onCopyClick?.(t);return}this.onProfileClick?.(t)}getIconTemplate(t){return(0,i_.dy)`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${t||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};sm.styles=[iT,i$,sv],sw([iV()],sm.prototype,"avatarSrc",void 0),sw([iV()],sm.prototype,"profileName",void 0),sw([iV()],sm.prototype,"address",void 0),sw([iV()],sm.prototype,"icon",void 0),sw([iV()],sm.prototype,"onProfileClick",void 0),sw([iV()],sm.prototype,"onCopyClick",void 0),sm=sw([iZ("wui-profile-button-v2")],sm);let sb=iv`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var sy=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let sx=class extends iL{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){let t="sm"===this.size?"small-600":"paragraph-600";return(0,i_.dy)`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?(0,i_.dy)`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};sx.styles=[iT,i$,sb],sy([iV()],sx.prototype,"variant",void 0),sy([iV()],sx.prototype,"imageSrc",void 0),sy([iV({type:Boolean})],sx.prototype,"disabled",void 0),sy([iV()],sx.prototype,"icon",void 0),sy([iV()],sx.prototype,"size",void 0),sy([iV()],sx.prototype,"text",void 0),sx=sy([iZ("wui-chip-button")],sx);let sC=iv`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var sA=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let sM=class extends iL{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return(0,i_.dy)`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){let t=this.networkImages.slice(0,5);return(0,i_.dy)` <wui-flex class="networks">
      ${t?.map(t=>i_.dy` <wui-flex class="network-icon"> <wui-image src=${t}></wui-image> </wui-flex>`)}
    </wui-flex>`}};sM.styles=[iT,i$,sC],sA([iV({type:Array})],sM.prototype,"networkImages",void 0),sA([iV()],sM.prototype,"text",void 0),sM=sA([iZ("wui-compatible-network")],sM);let sk=iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var sS=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let sE=class extends iL{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return(0,i_.dy)`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};sE.styles=[iT,i$,sk],sS([iV()],sE.prototype,"icon",void 0),sS([iV()],sE.prototype,"text",void 0),sE=sS([iZ("wui-banner")],sE);let sP=iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var sB=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let sR=class extends iL{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return(0,i_.dy)`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};sR.styles=[iT,i$,sP],sB([iV()],sR.prototype,"imageSrc",void 0),sB([iV()],sR.prototype,"text",void 0),sB([iV()],sR.prototype,"size",void 0),sR=sB([iZ("wui-banner-img")],sR);let sI=iv`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var sO=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let sz=class extends iL{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return(0,i_.dy)`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${oj.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?(0,i_.dy)`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:(0,i_.dy)`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};sz.styles=[iT,i$,sI],sO([iV()],sz.prototype,"tokenName",void 0),sO([iV()],sz.prototype,"tokenImageUrl",void 0),sO([iV({type:Number})],sz.prototype,"tokenValue",void 0),sO([iV()],sz.prototype,"tokenAmount",void 0),sO([iV()],sz.prototype,"tokenCurrency",void 0),sO([iV({type:Boolean})],sz.prototype,"clickable",void 0),sz=sO([iZ("wui-list-token")],sz);let s_=iv`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var sL=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let sN=class extends iL{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return(0,i_.dy)`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?(0,i_.dy)` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:(0,i_.dy)`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};sN.styles=[iT,i$,s_],sL([iV()],sN.prototype,"icon",void 0),sL([iV()],sN.prototype,"text",void 0),sL([iV()],sN.prototype,"description",void 0),sL([iV()],sN.prototype,"tag",void 0),sL([iV()],sN.prototype,"iconBackgroundColor",void 0),sL([iV()],sN.prototype,"iconColor",void 0),sL([iV({type:Boolean})],sN.prototype,"disabled",void 0),sN=sL([iZ("wui-list-description")],sN);let sT=iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`,s$=/[.*+?^${}()|[\]\\]/gu,sD=/[0-9,.]/u;var sZ=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let sj=class extends iL{constructor(){super(...arguments),this.inputElementRef=aZ(),this.disabled=!1,this.value="",this.placeholder="0"}render(){return this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),(0,i_.dy)`<input
      ${aU(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(t){let e=t.data;if(e&&this.inputElementRef?.value){if(","===e){let t=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=t,this.value=`${this.value}${t}`}else sD.test(e)||(this.inputElementRef.value.value=this.value.replace(RegExp(e.replace(s$,"\\$&"),"gu"),""))}this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};sj.styles=[iT,i$,sT],sZ([iV({type:Boolean})],sj.prototype,"disabled",void 0),sZ([iV({type:String})],sj.prototype,"value",void 0),sZ([iV({type:String})],sj.prototype,"placeholder",void 0),sj=sZ([iZ("wui-input-amount")],sj);let sH=iv`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`;var sU=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let sF=class extends iL{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return(0,i_.dy)`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?(0,i_.dy)`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?(0,i_.dy)`<wui-image src=${this.imageSrc}></wui-image>`:(0,i_.dy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};sF.styles=[iT,i$,sH],sU([iV()],sF.prototype,"text",void 0),sU([iV()],sF.prototype,"address",void 0),sU([iV()],sF.prototype,"imageSrc",void 0),sU([iV({type:Boolean})],sF.prototype,"isAddress",void 0),sF=sU([iZ("wui-preview-item")],sF);let sV=iv`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var sY=i(88285),sq=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let sQ=class extends iL{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.connectedConnector=c.MO.getConnectedConnector(),this.labels=c.Ni.state.addressLabels,this.caipNetwork=c.fB.state.caipNetwork,this.socialProvider=c.MO.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){super.connectedCallback(),c.Lr.getBalance(this.accountAddress,this.caipNetwork?.id).then(t=>{let e=this.balance;t.balances.length>0&&(e=t.balances.reduce((t,e)=>t+(e?.value||0),0)),this.balance=e,this.fetchingBalance=!1,this.requestUpdate()})}render(){let t=this.getLabel();return this.shouldShowIcon="AUTH"===this.connectedConnector,(0,i_.dy)`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?(0,i_.dy)`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===sY.y_.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:(0,i_.dy)`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${oj.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${t}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${this.fetchingBalance?(0,i_.dy)`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:(0,i_.dy)` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
          <slot name="action"></slot>
        </wui-flex>
      </wui-flex>
    `}getLabel(){let t=this.labels?.get(this.accountAddress);return t||"AUTH"!==this.connectedConnector?(t||"INJECTED"!==this.connectedConnector)&&"ANNOUNCED"!==this.connectedConnector?t||(t="EOA"):t="Injected Account":t=`${"eoa"===this.accountType?this.socialProvider??"Email":"Smart"} Account`,t}};sQ.styles=[iT,i$,sV],sq([iV()],sQ.prototype,"accountAddress",void 0),sq([iV()],sQ.prototype,"accountType",void 0),sq([iV({type:Boolean})],sQ.prototype,"selected",void 0),sq([iV({type:Function})],sQ.prototype,"onSelect",void 0),sQ=sq([iZ("wui-list-account")],sQ);let sG=iv`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var sK=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let sJ=class extends iL{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return(0,i_.dy)`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};sJ.styles=[iT,i$,sG],sK([iV()],sJ.prototype,"text",void 0),sK([iV()],sJ.prototype,"icon",void 0),sJ=sK([iZ("wui-icon-button")],sJ);let sW=iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var sX=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let s0=class extends iL{constructor(){super(...arguments),this.text="",this.disabled=!1}render(){return(0,i_.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};s0.styles=[iT,i$,sW],sX([iV()],s0.prototype,"text",void 0),sX([iV({type:Boolean})],s0.prototype,"disabled",void 0),s0=sX([iZ("wui-list-button")],s0);let s1=iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var s2=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let s3=class extends iL{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return(0,i_.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return"center"===this.align?(0,i_.dy)` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};s3.styles=[iT,i$,s1],s2([iV()],s3.prototype,"logo",void 0),s2([iV()],s3.prototype,"name",void 0),s2([iV()],s3.prototype,"align",void 0),s2([iV({type:Boolean})],s3.prototype,"disabled",void 0),s3=s2([iZ("wui-list-social")],s3);let s5=iv`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var s4=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let s6=class extends iL{constructor(){super(...arguments),this.imageSrc=""}render(){return(0,i_.dy)`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?(0,i_.dy)`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:(0,i_.dy)`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};s6.styles=[iT,i$,iD,s5],s4([iV()],s6.prototype,"imageSrc",void 0),s6=s4([iZ("wui-select")],s6);let s8=iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var s9=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let s7=class extends iL{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&oj.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&oj.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&oj.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&oj.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&oj.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&oj.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&oj.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&oj.getSpacingStyles(this.margin,3)};
    `,(0,i_.dy)`<slot></slot>`}};s7.styles=[iT,s8],s9([iV()],s7.prototype,"gridTemplateRows",void 0),s9([iV()],s7.prototype,"gridTemplateColumns",void 0),s9([iV()],s7.prototype,"justifyItems",void 0),s9([iV()],s7.prototype,"alignItems",void 0),s9([iV()],s7.prototype,"justifyContent",void 0),s9([iV()],s7.prototype,"alignContent",void 0),s9([iV()],s7.prototype,"columnGap",void 0),s9([iV()],s7.prototype,"rowGap",void 0),s9([iV()],s7.prototype,"gap",void 0),s9([iV()],s7.prototype,"padding",void 0),s9([iV()],s7.prototype,"margin",void 0),s7=s9([iZ("wui-grid")],s7);let lt=iv`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var le=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let li=class extends iL{constructor(){super(...arguments),this.text=""}render(){return(0,i_.dy)`${this.template()}`}template(){return this.text?(0,i_.dy)`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};li.styles=[iT,lt],le([iV()],li.prototype,"text",void 0),li=le([iZ("wui-separator")],li);let lr=iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`,lo=class extends iL{constructor(){super(...arguments),this.dappImageUrl=c.hD.state.metadata?.icons,this.walletImageUrl=c.Ni.state.connectedWalletInfo?.icon}firstUpdated(){let t=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");t?.[0]&&this.createAnimation(t[0],"translate(18px)"),t?.[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){return(0,i_.dy)`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,e){t.animate([{transform:"translateX(0px)"},{transform:e}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};lo.styles=lr,lo=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([iZ("w3m-connecting-siwe")],lo);var la=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ln=class extends iL{constructor(){super(...arguments),this.dappName=c.hD.state.metadata?.name,this.isSigning=!1,this.isCancelling=!1}render(){return this.onRender(),(0,i_.dy)`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onRender(){is.state.session&&c.IN.close()}async onSign(){this.isSigning=!0,c.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:c.fB.state.caipNetwork?.id||"",isSmartAccount:c.Ni.state.preferredAccountType===sY.y_.ACCOUNT_TYPES.SMART_ACCOUNT}});try{is.setStatus("loading");let t=await is.signIn();return is.setStatus("success"),c.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:c.fB.state.caipNetwork?.id||"",isSmartAccount:c.Ni.state.preferredAccountType===sY.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),t}catch(e){let t=c.Ni.state.preferredAccountType===sY.y_.ACCOUNT_TYPES.SMART_ACCOUNT;return t?c.KC.showError("This application might not support Smart Accounts"):c.KC.showError("Signature declined"),is.setStatus("error"),c.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:c.fB.state.caipNetwork?.id||"",isSmartAccount:t}})}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,c.Ni.state.isConnected?(await c.lZ.disconnect(),c.IN.close()):c.Pc.push("Connect"),this.isCancelling=!1,c.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:c.fB.state.caipNetwork?.id||"",isSmartAccount:c.Ni.state.preferredAccountType===sY.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}};la([iY()],ln.prototype,"isSigning",void 0),la([iY()],ln.prototype,"isCancelling",void 0),ln=la([iZ("w3m-connecting-siwe-view")],ln)}};