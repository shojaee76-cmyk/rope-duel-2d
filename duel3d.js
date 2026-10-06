var Xc=0,ul=1,qc=2;var cr=1,Yc=2,fs=3,fi=0,Ie=1,cn=2,Fn=0,pi=1,On=2,dl=3,fl=4,Zc=5;var Ii=100,Jc=101,$c=102,Kc=103,Qc=104,jc=200,th=201,eh=202,nh=203,pl=204,ml=205,ih=206,sh=207,rh=208,ah=209,oh=210,lh=211,ch=212,hh=213,uh=214,Qr=0,jr=1,ta=2,ts=3,ea=4,na=5,ia=6,sa=7,Aa=0,dh=1,fh=2,yn=0,gl=1,_l=2,xl=3,hr=4,vl=5,yl=6,Ml=7;var Sl=300,mi=301,Li=302,Ra=303,Ca=304,ur=306,ra=1e3,An=1001,aa=1002,Fe=1003,ph=1004;var dr=1005;var Be=1006,Pa=1007;var gi=1008;var Qe=1009,bl=1010,El=1011,ps=1012,Ia=1013,Mn=1014,hn=1015,Sn=1016,La=1017,Da=1018,ms=1020,Tl=35902,wl=35899,Al=1021,Rl=1022,un=1023,Rn=1026,_i=1027,Na=1028,Ua=1029,xi=1030,Fa=1031;var Oa=1033,fr=33776,pr=33777,mr=33778,gr=33779,Ba=35840,za=35841,ka=35842,Va=35843,Ha=36196,Ga=37492,Wa=37496,Xa=37488,qa=37489,_r=37490,Ya=37491,Za=37808,Ja=37809,$a=37810,Ka=37811,Qa=37812,ja=37813,to=37814,eo=37815,no=37816,io=37817,so=37818,ro=37819,ao=37820,oo=37821,lo=36492,co=36494,ho=36495,uo=36283,fo=36284,xr=36285,po=36286;var Vs=2300,oa=2301,$r=2302,nl=2303,il=2400,sl=2401,rl=2402;var mh=3200;var vr=0,gh=1,Zn="",Pe="srgb",Hs="srgb-linear",Gs="linear",ee="srgb";var Kr=7680;var _h=519,xh=512,vh=513,yh=514,mo=515,Mh=516,Sh=517,go=518,bh=519,Eh=35044;var Cl="300 es",vn=2e3,es=2001;function Yu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Zu(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Th(){let n=Ws("canvas");return n.style.display="block",n}var vc={},ns=null;function Pl(...n){let t="THREE."+n.shift();ns?ns("log",t,...n):console.log(t,...n)}function wh(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pt(...n){n=wh(n);let t="THREE."+n.shift();if(ns)ns("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Lt(...n){n=wh(n);let t="THREE."+n.shift();if(ns)ns("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ai(...n){let t=n.join(" ");t in vc||(vc[t]=!0,Pt(...n))}function Ah(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Rh={[Qr]:jr,[ta]:ia,[ea]:sa,[ts]:na,[jr]:Qr,[ia]:ta,[sa]:ea,[na]:ts},Cn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yc=1234567,zs=Math.PI/180,is=180/Math.PI;function gs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function Zt(n,t,e){return Math.max(t,Math.min(e,n))}function Il(n,t){return(n%t+t)%t}function Ju(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function $u(n,t,e){return n!==t?(e-n)/(t-n):0}function ks(n,t,e){return(1-e)*n+e*t}function Ku(n,t,e,i){return ks(n,t,1-Math.exp(-e*i))}function Qu(n,t=1){return t-Math.abs(Il(n,t*2)-t)}function ju(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function td(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ed(n,t){return n+Math.floor(Math.random()*(t-n+1))}function nd(n,t){return n+Math.random()*(t-n)}function id(n){return n*(.5-Math.random())}function sd(n){n!==void 0&&(yc=n);let t=yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rd(n){return n*zs}function ad(n){return n*is}function od(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function ld(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function cd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hd(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+i)/2),d=a((t+i)/2),f=r((t-i)/2),u=a((t-i)/2),p=r((i-t)/2),x=a((i-t)/2);switch(s){case"XYX":n.set(o*d,l*f,l*u,o*h);break;case"YZY":n.set(l*u,o*d,l*f,o*h);break;case"ZXZ":n.set(l*f,l*u,o*d,o*h);break;case"XZX":n.set(o*d,l*x,l*p,o*h);break;case"YXY":n.set(l*p,o*d,l*x,o*h);break;case"ZYZ":n.set(l*x,l*p,o*d,o*h);break;default:Pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var _o={DEG2RAD:zs,RAD2DEG:is,generateUUID:gs,clamp:Zt,euclideanModulo:Il,mapLinear:Ju,inverseLerp:$u,lerp:ks,damp:Ku,pingpong:Qu,smoothstep:ju,smootherstep:td,randInt:ed,randFloat:nd,randFloatSpread:id,seededRandom:sd,degToRad:rd,radToDeg:ad,isPowerOfTwo:od,ceilPowerOfTwo:ld,floorPowerOfTwo:cd,setQuaternionFromProperEuler:hd,normalize:qe,denormalize:Qi},qt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],h=i[s+1],d=i[s+2],f=i[s+3],u=r[a+0],p=r[a+1],x=r[a+2],E=r[a+3];if(f!==E||l!==u||h!==p||d!==x){let m=l*u+h*p+d*x+f*E;m<0&&(u=-u,p=-p,x=-x,E=-E,m=-m);let c=1-o;if(m<.9995){let v=Math.acos(m),w=Math.sin(v);c=Math.sin(c*v)/w,o=Math.sin(o*v)/w,l=l*c+u*o,h=h*c+p*o,d=d*c+x*o,f=f*c+E*o}else{l=l*c+u*o,h=h*c+p*o,d=d*c+x*o,f=f*c+E*o;let v=1/Math.sqrt(l*l+h*h+d*d+f*f);l*=v,h*=v,d*=v,f*=v}}t[e]=l,t[e+1]=h,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],h=i[s+2],d=i[s+3],f=r[a],u=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+d*f+l*p-h*u,t[e+1]=l*x+d*u+h*f-o*p,t[e+2]=h*x+d*p+o*u-l*f,t[e+3]=d*x-o*f-l*u-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(i/2),d=o(s/2),f=o(r/2),u=l(i/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*d*f+h*p*x,this._y=h*p*f-u*d*x,this._z=h*d*x+u*p*f,this._w=h*d*f-u*p*x;break;case"YXZ":this._x=u*d*f+h*p*x,this._y=h*p*f-u*d*x,this._z=h*d*x-u*p*f,this._w=h*d*f+u*p*x;break;case"ZXY":this._x=u*d*f-h*p*x,this._y=h*p*f+u*d*x,this._z=h*d*x+u*p*f,this._w=h*d*f-u*p*x;break;case"ZYX":this._x=u*d*f-h*p*x,this._y=h*p*f+u*d*x,this._z=h*d*x-u*p*f,this._w=h*d*f+u*p*x;break;case"YZX":this._x=u*d*f+h*p*x,this._y=h*p*f+u*d*x,this._z=h*d*x-u*p*f,this._w=h*d*f-u*p*x;break;case"XZY":this._x=u*d*f-h*p*x,this._y=h*p*f-u*d*x,this._z=h*d*x+u*p*f,this._w=h*d*f+u*p*x;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],d=e[6],f=e[10],u=i+o+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-h)*p,this._z=(a-s)*p}else if(i>o&&i>f){let p=2*Math.sqrt(1+i-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+h)/p}else if(o>f){let p=2*Math.sqrt(1+o-i-f);this._w=(r-h)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{let p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+h)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,d=e._w;return this._x=i*d+a*o+s*h-r*l,this._y=s*d+a*l+r*o-i*h,this._z=r*d+a*h+i*l-s*o,this._w=a*d-i*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let h=Math.acos(o),d=Math.sin(h);l=Math.sin(l*h)/d,e=Math.sin(e*h)/d,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*i),d=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*h+a*f-o*d,this.y=i+l*d+o*h-r*f,this.z=s+l*f+r*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Uo.copy(this).projectOnVector(t),this.sub(Uo)}reflect(t){return this.sub(Uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uo=new k,Mc=new Pn,Nt=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,h)}set(t,e,i,s,r,a,o,l,h){let d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],d=i[4],f=i[7],u=i[2],p=i[5],x=i[8],E=s[0],m=s[3],c=s[6],v=s[1],w=s[4],y=s[7],S=s[2],b=s[5],P=s[8];return r[0]=a*E+o*v+l*S,r[3]=a*m+o*w+l*b,r[6]=a*c+o*y+l*P,r[1]=h*E+d*v+f*S,r[4]=h*m+d*w+f*b,r[7]=h*c+d*y+f*P,r[2]=u*E+p*v+x*S,r[5]=u*m+p*w+x*b,r[8]=u*c+p*y+x*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8];return e*a*d-e*o*h-i*r*d+i*o*l+s*r*h-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8],f=d*a-o*h,u=o*l-d*r,p=h*r-a*l,x=e*f+i*u+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/x;return t[0]=f*E,t[1]=(s*h-d*i)*E,t[2]=(o*i-s*a)*E,t[3]=u*E,t[4]=(d*e-s*l)*E,t[5]=(s*r-o*e)*E,t[6]=p*E,t[7]=(i*l-h*e)*E,t[8]=(a*e-i*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fo.makeScale(t,e)),this}rotate(t){return Ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fo.makeRotation(-t)),this}translate(t,e){return Ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fo=new Nt,Sc=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ud(){let n={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ee&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ee&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?Gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Hs]:{primaries:t,whitePoint:i,transfer:Gs,toXYZ:Sc,fromXYZ:bc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:i,transfer:ee,toXYZ:Sc,fromXYZ:bc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),n}var Yt=ud();function qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Bi,la=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Bi===void 0&&(Bi=Ws("canvas")),Bi.width=t.width,Bi.height=t.height;let s=Bi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Bi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ws("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(qn(e[i]/255)*255):e[i]=qn(e[i]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dd=0,ss=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=gs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Oo(s[a].image)):r.push(Oo(s[a]))}else r=Oo(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Oo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?la.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}var fd=0,Bo=new k,Ye=class n extends Cn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=An,s=An,r=Be,a=gi,o=un,l=Qe,h=n.DEFAULT_ANISOTROPY,d=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=gs(),this.name="",this.source=new ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bo).x}get height(){return this.source.getSize(Bo).y}get depth(){return this.source.getSize(Bo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ra:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ra:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Sl;Ye.DEFAULT_ANISOTROPY=1;var pe=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],d=l[4],f=l[8],u=l[1],p=l[5],x=l[9],E=l[2],m=l[6],c=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-E)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+E)<.1&&Math.abs(x+m)<.1&&Math.abs(h+p+c-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(h+1)/2,y=(p+1)/2,S=(c+1)/2,b=(d+u)/4,P=(f+E)/4,_=(x+m)/4;return w>y&&w>S?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=b/i,r=P/i):y>S?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=_/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=P/r,s=_/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-x)*(m-x)+(f-E)*(f-E)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(f-E)/v,this.z=(u-d)/v,this.w=Math.acos((h+p+c-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ca=class extends Cn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Ye(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ss(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$e=class extends ca{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Xs=class extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ha=class extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ae=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,l,h,d,f,u,p,x,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,h,d,f,u,p,x,E,m)}set(t,e,i,s,r,a,o,l,h,d,f,u,p,x,E,m){let c=this.elements;return c[0]=t,c[4]=e,c[8]=i,c[12]=s,c[1]=r,c[5]=a,c[9]=o,c[13]=l,c[2]=h,c[6]=d,c[10]=f,c[14]=u,c[3]=p,c[7]=x,c[11]=E,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),h=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*d,p=a*f,x=o*d,E=o*f;e[0]=l*d,e[4]=-l*f,e[8]=h,e[1]=p+x*h,e[5]=u-E*h,e[9]=-o*l,e[2]=E-u*h,e[6]=x+p*h,e[10]=a*l}else if(t.order==="YXZ"){let u=l*d,p=l*f,x=h*d,E=h*f;e[0]=u+E*o,e[4]=x*o-p,e[8]=a*h,e[1]=a*f,e[5]=a*d,e[9]=-o,e[2]=p*o-x,e[6]=E+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*d,p=l*f,x=h*d,E=h*f;e[0]=u-E*o,e[4]=-a*f,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*d,e[9]=E-u*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*d,p=a*f,x=o*d,E=o*f;e[0]=l*d,e[4]=x*h-p,e[8]=u*h+E,e[1]=l*f,e[5]=E*h+u,e[9]=p*h-x,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*h,x=o*l,E=o*h;e[0]=l*d,e[4]=E-u*f,e[8]=x*f+p,e[1]=f,e[5]=a*d,e[9]=-o*d,e[2]=-h*d,e[6]=p*f+x,e[10]=u-E*f}else if(t.order==="XZY"){let u=a*l,p=a*h,x=o*l,E=o*h;e[0]=l*d,e[4]=-f,e[8]=h*d,e[1]=u*f+E,e[5]=a*d,e[9]=p*f-x,e[2]=x*f-p,e[6]=o*d,e[10]=E*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pd,t,md)}lookAt(t,e,i){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),ei.crossVectors(i,en),ei.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ei.crossVectors(i,en)),ei.normalize(),Rr.crossVectors(en,ei),s[0]=ei.x,s[4]=Rr.x,s[8]=en.x,s[1]=ei.y,s[5]=Rr.y,s[9]=en.y,s[2]=ei.z,s[6]=Rr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],d=i[1],f=i[5],u=i[9],p=i[13],x=i[2],E=i[6],m=i[10],c=i[14],v=i[3],w=i[7],y=i[11],S=i[15],b=s[0],P=s[4],_=s[8],T=s[12],I=s[1],R=s[5],N=s[9],z=s[13],L=s[2],V=s[6],$=s[10],K=s[14],st=s[3],Z=s[7],et=s[11],nt=s[15];return r[0]=a*b+o*I+l*L+h*st,r[4]=a*P+o*R+l*V+h*Z,r[8]=a*_+o*N+l*$+h*et,r[12]=a*T+o*z+l*K+h*nt,r[1]=d*b+f*I+u*L+p*st,r[5]=d*P+f*R+u*V+p*Z,r[9]=d*_+f*N+u*$+p*et,r[13]=d*T+f*z+u*K+p*nt,r[2]=x*b+E*I+m*L+c*st,r[6]=x*P+E*R+m*V+c*Z,r[10]=x*_+E*N+m*$+c*et,r[14]=x*T+E*z+m*K+c*nt,r[3]=v*b+w*I+y*L+S*st,r[7]=v*P+w*R+y*V+S*Z,r[11]=v*_+w*N+y*$+S*et,r[15]=v*T+w*z+y*K+S*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],d=t[2],f=t[6],u=t[10],p=t[14],x=t[3],E=t[7],m=t[11],c=t[15],v=l*p-h*u,w=o*p-h*f,y=o*u-l*f,S=a*p-h*d,b=a*u-l*d,P=a*f-o*d;return e*(E*v-m*w+c*y)-i*(x*v-m*S+c*b)+s*(x*w-E*S+c*P)-r*(x*y-E*b+m*P)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],h=t[6],d=t[10];return e*(a*d-o*h)-i*(r*d-o*l)+s*(r*h-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8],f=t[9],u=t[10],p=t[11],x=t[12],E=t[13],m=t[14],c=t[15],v=e*o-i*a,w=e*l-s*a,y=e*h-r*a,S=i*l-s*o,b=i*h-r*o,P=s*h-r*l,_=d*E-f*x,T=d*m-u*x,I=d*c-p*x,R=f*m-u*E,N=f*c-p*E,z=u*c-p*m,L=v*z-w*N+y*R+S*I-b*T+P*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/L;return t[0]=(o*z-l*N+h*R)*V,t[1]=(s*N-i*z-r*R)*V,t[2]=(E*P-m*b+c*S)*V,t[3]=(u*b-f*P-p*S)*V,t[4]=(l*I-a*z-h*T)*V,t[5]=(e*z-s*I+r*T)*V,t[6]=(m*y-x*P-c*w)*V,t[7]=(d*P-u*y+p*w)*V,t[8]=(a*N-o*I+h*_)*V,t[9]=(i*I-e*N-r*_)*V,t[10]=(x*b-E*y+c*v)*V,t[11]=(f*y-d*b-p*v)*V,t[12]=(o*T-a*R-l*_)*V,t[13]=(e*R-i*T+s*_)*V,t[14]=(E*w-x*S-m*v)*V,t[15]=(d*S-f*w+u*v)*V,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,h=r*a,d=r*o;return this.set(h*a+i,h*o-s*l,h*l+s*o,0,h*o+s*l,d*o+i,d*l-s*a,0,h*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,d=a+a,f=o+o,u=r*h,p=r*d,x=r*f,E=a*d,m=a*f,c=o*f,v=l*h,w=l*d,y=l*f,S=i.x,b=i.y,P=i.z;return s[0]=(1-(E+c))*S,s[1]=(p+y)*S,s[2]=(x-w)*S,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(u+c))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(x+w)*P,s[9]=(m-v)*P,s[10]=(1-(u+E))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=zi.set(s[0],s[1],s[2]).length(),o=zi.set(s[4],s[5],s[6]).length(),l=zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),mn.copy(this);let h=1/a,d=1/o,f=1/l;return mn.elements[0]*=h,mn.elements[1]*=h,mn.elements[2]*=h,mn.elements[4]*=d,mn.elements[5]*=d,mn.elements[6]*=d,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,e.setFromRotationMatrix(mn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=vn,l=!1){let h=this.elements,d=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),p=(i+s)/(i-s),x,E;if(l)x=r/(a-r),E=a*r/(a-r);else if(o===vn)x=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===es)x=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=d,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=f,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=vn,l=!1){let h=this.elements,d=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),p=-(i+s)/(i-s),x,E;if(l)x=1/(a-r),E=a/(a-r);else if(o===vn)x=-2/(a-r),E=-(a+r)/(a-r);else if(o===es)x=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=d,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=f,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=x,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},zi=new k,mn=new ae,pd=new k(0,0,0),md=new k(1,1,1),ei=new k,Rr=new k,en=new k,Ec=new ae,Tc=new Pn,In=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],d=s[9],f=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ec,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var qs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gd=0,wc=new k,ki=new Pn,Vn=new ae,Cr=new k,Ds=new k,_d=new k,xd=new Pn,Ac=new k(1,0,0),Rc=new k(0,1,0),Cc=new k(0,0,1),Pc={type:"added"},vd={type:"removed"},Vi={type:"childadded",child:null},zo={type:"childremoved",child:null},me=class n extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new k,e=new In,i=new Pn,s=new k(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Nt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Ac,t)}rotateY(t){return this.rotateOnAxis(Rc,t)}rotateZ(t){return this.rotateOnAxis(Cc,t)}translateOnAxis(t,e){return wc.copy(t).applyQuaternion(this.quaternion),this.position.add(wc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ac,t)}translateY(t){return this.translateOnAxis(Rc,t)}translateZ(t){return this.translateOnAxis(Cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Cr.copy(t):Cr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ds,Cr,this.up):Vn.lookAt(Cr,Ds,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Vn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vd),zo.child=t,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,_d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){let f=l[h];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),h=a(t.textures),d=a(t.images),f=a(t.shapes),u=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let l=[];for(let h in o){let d=o[h];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};me.DEFAULT_UP=new k(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var re=class extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}},yd={type:"move"},rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let E of t.hand.values()){let m=e.getJointPose(E,i),c=this._getHandJoint(h,E);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}let d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,x=.005;h.inputState.pinching&&u>p+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=p-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new re;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function ko(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ct=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Yt.workingColorSpace){if(t=Il(t,1),e=Zt(e,0,1),i=Zt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ko(a,r,t+1/3),this.g=ko(a,r,t),this.b=ko(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function i(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let i=Ch[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Yt.workingToColorSpace(He.copy(this),t),Math.round(Zt(He.r*255,0,255))*65536+Math.round(Zt(He.g*255,0,255))*256+Math.round(Zt(He.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(He.copy(this),e);let i=He.r,s=He.g,r=He.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,h,d=(o+a)/2;if(o===a)l=0,h=0;else{let f=a-o;switch(h=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=h,t.l=d,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Pe){Yt.workingToColorSpace(He.copy(this),t);let e=He.r,i=He.g,s=He.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(Pr);let i=ks(ni.h,Pr.h,e),s=ks(ni.s,Pr.s,e),r=ks(ni.l,Pr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new Ct;Ct.NAMES=Ch;var Ys=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ri=class extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},gn=new k,Hn=new k,Vo=new k,Gn=new k,Hi=new k,Gi=new k,Ic=new k,Ho=new k,Go=new k,Wo=new k,Xo=new pe,qo=new pe,Yo=new pe,ai=class n{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),gn.subVectors(t,e),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){gn.subVectors(s,e),Hn.subVectors(i,e),Vo.subVectors(t,e);let a=gn.dot(gn),o=gn.dot(Hn),l=gn.dot(Vo),h=Hn.dot(Hn),d=Hn.dot(Vo),f=a*h-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(h*l-o*d)*u,x=(a*d-o*l)*u;return r.set(1-p-x,x,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Xo.setScalar(0),qo.setScalar(0),Yo.setScalar(0),Xo.fromBufferAttribute(t,e),qo.fromBufferAttribute(t,i),Yo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Xo,r.x),a.addScaledVector(qo,r.y),a.addScaledVector(Yo,r.z),a}static isFrontFacing(t,e,i,s){return gn.subVectors(i,e),Hn.subVectors(t,e),gn.cross(Hn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),gn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Hi.subVectors(s,i),Gi.subVectors(r,i),Ho.subVectors(t,i);let l=Hi.dot(Ho),h=Gi.dot(Ho);if(l<=0&&h<=0)return e.copy(i);Go.subVectors(t,s);let d=Hi.dot(Go),f=Gi.dot(Go);if(d>=0&&f<=d)return e.copy(s);let u=l*f-d*h;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(i).addScaledVector(Hi,a);Wo.subVectors(t,r);let p=Hi.dot(Wo),x=Gi.dot(Wo);if(x>=0&&p<=x)return e.copy(r);let E=p*h-l*x;if(E<=0&&h>=0&&x<=0)return o=h/(h-x),e.copy(i).addScaledVector(Gi,o);let m=d*x-p*f;if(m<=0&&f-d>=0&&p-x>=0)return Ic.subVectors(r,s),o=(f-d)/(f-d+(p-x)),e.copy(s).addScaledVector(Ic,o);let c=1/(m+E+u);return a=E*c,o=u*c,e.copy(i).addScaledVector(Hi,a).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ln=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),Lr.subVectors(this.max,Ns),Wi.subVectors(t.a,Ns),Xi.subVectors(t.b,Ns),qi.subVectors(t.c,Ns),ii.subVectors(Xi,Wi),si.subVectors(qi,Xi),bi.subVectors(Wi,qi);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-bi.z,bi.y,ii.z,0,-ii.x,si.z,0,-si.x,bi.z,0,-bi.x,-ii.y,ii.x,0,-si.y,si.x,0,-bi.y,bi.x,0];return!Zo(e,Wi,Xi,qi,Lr)||(e=[1,0,0,0,1,0,0,0,1],!Zo(e,Wi,Xi,qi,Lr))?!1:(Dr.crossVectors(ii,si),e=[Dr.x,Dr.y,Dr.z],Zo(e,Wi,Xi,qi,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wn=[new k,new k,new k,new k,new k,new k,new k,new k],_n=new k,Ir=new Ln,Wi=new k,Xi=new k,qi=new k,ii=new k,si=new k,bi=new k,Ns=new k,Lr=new k,Dr=new k,Ei=new k;function Zo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ei.fromArray(n,r);let o=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),l=t.dot(Ei),h=e.dot(Ei),d=i.dot(Ei);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>o)return!1}return!0}var Ae=new k,Nr=new qt,Md=0,Re=class extends Cn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Md++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Eh,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Qi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Zs=class extends Re{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Js=class extends Re{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var fe=class extends Re{constructor(t,e,i){super(new Float32Array(t),e,i)}},Sd=new Ln,Us=new k,Jo=new k,Yn=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Sd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);let e=Us.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Us,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(Jo)),this.expandByPoint(Us.copy(t.center).sub(Jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},bd=0,ln=new ae,$o=new me,Yi=new k,nn=new Ln,Fs=new Ln,Ue=new k,Ce=class n extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yu(t)?Js:Zs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Nt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,i){return ln.makeTranslation(t,e,i),this.applyMatrix4(ln),this}scale(t,e,i){return ln.makeScale(t,e,i),this.applyMatrix4(ln),this}lookAt(t){return $o.lookAt(t),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let i=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(nn.min,Fs.min),nn.expandByPoint(Ue),Ue.addVectors(nn.max,Fs.max),nn.expandByPoint(Ue)):(nn.expandByPoint(Fs.min),nn.expandByPoint(Fs.max))}nn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let h=0,d=o.count;h<d;h++)Ue.fromBufferAttribute(o,h),l&&(Yi.fromBufferAttribute(t,h),Ue.add(Yi)),s=Math.max(s,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Re(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new k,l[_]=new k;let h=new k,d=new k,f=new k,u=new qt,p=new qt,x=new qt,E=new k,m=new k;function c(_,T,I){h.fromBufferAttribute(i,_),d.fromBufferAttribute(i,T),f.fromBufferAttribute(i,I),u.fromBufferAttribute(r,_),p.fromBufferAttribute(r,T),x.fromBufferAttribute(r,I),d.sub(h),f.sub(h),p.sub(u),x.sub(u);let R=1/(p.x*x.y-x.x*p.y);isFinite(R)&&(E.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(R),o[_].add(E),o[T].add(E),o[I].add(E),l[_].add(m),l[T].add(m),l[I].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let _=0,T=v.length;_<T;++_){let I=v[_],R=I.start,N=I.count;for(let z=R,L=R+N;z<L;z+=3)c(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let w=new k,y=new k,S=new k,b=new k;function P(_){S.fromBufferAttribute(s,_),b.copy(S);let T=o[_];w.copy(T),w.sub(S.multiplyScalar(S.dot(T))).normalize(),y.crossVectors(b,T);let R=y.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,R)}for(let _=0,T=v.length;_<T;++_){let I=v[_],R=I.start,N=I.count;for(let z=R,L=R+N;z<L;z+=3)P(t.getX(z+0)),P(t.getX(z+1)),P(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,h=new k,d=new k,f=new k;if(t)for(let u=0,p=t.count;u<p;u+=3){let x=t.getX(u+0),E=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,m),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,E),h.fromBufferAttribute(i,m),o.add(d),l.add(d),h.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){let h=o.array,d=o.itemSize,f=o.normalized,u=new h.constructor(l.length*d),p=0,x=0;for(let E=0,m=l.length;E<m;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*d;for(let c=0;c<d;c++)u[x++]=h[p++]}return new Re(u,d,f)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],h=t(l,i);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let d=0,f=h.length;d<f;d++){let u=h[d],p=t(u,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],d=[];for(let f=0,u=h.length;f<u;f++){let p=h[f];d.push(p.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let h in s){let d=s[h];this.setAttribute(h,d.clone(e))}let r=t.morphAttributes;for(let h in r){let d=[],f=r[h];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,d=a.length;h<d;h++){let f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ko=new k,Ed=new k,Td=new Nt,xn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ko.subVectors(i,e).cross(Ed.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Ko),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Td.getNormalMatrix(t),s=this.coplanarPoint(Ko).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},wd=0,Dn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=pi,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pl,this.blendDst=ml,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new xn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Xn=new k,Qo=new k,Ur=new k,Fr=new k,$s=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Qo.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),Fr.copy(this.origin).sub(Qo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ur),o=Fr.dot(this.direction),l=-Fr.dot(Ur),h=Fr.lengthSq(),d=Math.abs(1-a*a),f,u,p,x;if(d>0)if(f=a*l-o,u=a*o-l,x=r*d,f>=0)if(u>=-x)if(u<=x){let E=1/d;f*=E,u*=E,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+h}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+h;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+h;else u<=-x?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+h):u<=x?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+h):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+h);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Qo).addScaledVector(Ur,u),p}intersectSphere(t,e){if(t.radius<0)return null;Xn.subVectors(t.center,this.origin);let i=Xn.dot(this.direction),s=Xn.dot(Xn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return h>=0?(i=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(i=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),d>=0?(r=(t.min.y-u.y)*d,a=(t.max.y-u.y)*d):(r=(t.max.y-u.y)*d,a=(t.min.y-u.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,h=o.y,d=o.z,f=t.x-a.x,u=t.y-a.y,p=t.z-a.z,x=e.x-a.x,E=e.y-a.y,m=e.z-a.z,c=i.x-a.x,v=i.y-a.y,w=i.z-a.z,y=Math.abs(l),S=Math.abs(h),b=Math.abs(d),P,_,T,I,R,N,z,L,V,$,K,st;if(y>=S&&y>=b?(T=l,N=f,V=x,st=c,l>=0?(P=h,_=d,I=u,R=p,z=E,L=m,$=v,K=w):(P=d,_=h,I=p,R=u,z=m,L=E,$=w,K=v)):S>=b?(T=h,N=u,V=E,st=v,h>=0?(P=d,_=l,I=p,R=f,z=m,L=x,$=w,K=c):(P=l,_=d,I=f,R=p,z=x,L=m,$=c,K=w)):(T=d,N=p,V=m,st=w,d>=0?(P=l,_=h,I=f,R=u,z=x,L=E,$=c,K=v):(P=h,_=l,I=u,R=f,z=E,L=x,$=v,K=c)),T===0)return null;let Z=P/T,et=_/T,nt=1/T,wt=I-Z*N,vt=R-et*N,Kt=z-Z*V,Bt=L-et*V,Jt=$-Z*st,Q=K-et*st,tt=Jt*Bt-Q*Kt,mt=wt*Q-vt*Jt,It=Kt*vt-Bt*wt;if(s){if(tt<0||mt<0||It<0)return null}else if((tt<0||mt<0||It<0)&&(tt>0||mt>0||It>0))return null;let gt=tt+mt+It;if(gt===0)return null;let Ft=nt*(tt*N+mt*V+It*st);return(gt>0?Ft<0:Ft>0)?null:this.at(Ft/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sn=class extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Lc=new ae,Ti=new $s,Or=new Yn,Dc=new k,Br=new k,zr=new k,kr=new k,jo=new k,Vr=new k,Nc=new k,Hr=new k,zt=class extends me{constructor(t=new Ce,e=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Vr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let d=o[l],f=r[l];d!==0&&(jo.fromBufferAttribute(f,t),a?Vr.addScaledVector(jo,d):Vr.addScaledVector(jo.sub(e),d))}e.add(Vr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(Or.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Or,Dc)===null||Ti.origin.distanceToSquared(Dc)>(t.far-t.near)**2))&&(Lc.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(Lc),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,E=u.length;x<E;x++){let m=u[x],c=a[m.materialIndex],v=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,S=w;y<S;y+=3){let b=o.getX(y),P=o.getX(y+1),_=o.getX(y+2);s=Gr(this,c,t,i,h,d,f,b,P,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let m=x,c=E;m<c;m+=3){let v=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);s=Gr(this,a,t,i,h,d,f,v,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,E=u.length;x<E;x++){let m=u[x],c=a[m.materialIndex],v=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,S=w;y<S;y+=3){let b=y,P=y+1,_=y+2;s=Gr(this,c,t,i,h,d,f,b,P,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=x,c=E;m<c;m+=3){let v=m,w=m+1,y=m+2;s=Gr(this,a,t,i,h,d,f,v,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ad(n,t,e,i,s,r,a,o){let l;if(t.side===Ie?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===fi,o),l===null)return null;Hr.copy(o),Hr.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Hr);return h<e.near||h>e.far?null:{distance:h,point:Hr.clone(),object:n}}function Gr(n,t,e,i,s,r,a,o,l,h){n.getVertexPosition(o,Br),n.getVertexPosition(l,zr),n.getVertexPosition(h,kr);let d=Ad(n,t,e,i,Br,zr,kr,Nc);if(d){let f=new k;ai.getBarycoord(Nc,Br,zr,kr,f),s&&(d.uv=ai.getInterpolatedAttribute(s,o,l,h,f,new qt)),r&&(d.uv1=ai.getInterpolatedAttribute(r,o,l,h,f,new qt)),a&&(d.normal=ai.getInterpolatedAttribute(a,o,l,h,f,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new k,materialIndex:0};ai.getNormal(Br,zr,kr,u.normal),d.face=u,d.barycoord=f}return d}var Ks=class extends Ye{constructor(t=null,e=1,i=1,s,r,a,o,l,h=Fe,d=Fe,f,u){super(null,a,o,l,h,d,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qs=class extends Re{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Zi=new ae,Uc=new ae,Wr=[],Fc=new Ln,Rd=new ae,Os=new zt,Bs=new Yn,js=class extends zt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Rd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Zi),Fc.copy(t.boundingBox).applyMatrix4(Zi),this.boundingBox.union(Fc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Zi),Bs.copy(t.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(i),t.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zi),Uc.multiplyMatrices(i,Zi),Os.matrixWorld=Uc,Os.raycast(t,Wr);for(let a=0,o=Wr.length;a<o;a++){let l=Wr[a];l.instanceId=r,l.object=this,e.push(l)}Wr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ks(new Float32Array(s*this.count),s,this.count,Na,hn));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<i.length;h++)a+=i[h];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},wi=new Yn,Cd=new qt(.5,.5),Xr=new k,as=class{constructor(t=new xn,e=new xn,i=new xn,s=new xn,r=new xn,a=new xn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=vn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],h=r[3],d=r[4],f=r[5],u=r[6],p=r[7],x=r[8],E=r[9],m=r[10],c=r[11],v=r[12],w=r[13],y=r[14],S=r[15];if(s[0].setComponents(h-a,p-d,c-x,S-v).normalize(),s[1].setComponents(h+a,p+d,c+x,S+v).normalize(),s[2].setComponents(h+o,p+f,c+E,S+w).normalize(),s[3].setComponents(h-o,p-f,c-E,S-w).normalize(),i)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(h-l,p-u,c-m,S-y).normalize();else if(s[4].setComponents(h-l,p-u,c-m,S-y).normalize(),e===vn)s[5].setComponents(h+l,p+u,c+m,S+y).normalize();else if(e===es)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){wi.center.set(0,0,0);let e=Cd.distanceTo(t.center);return wi.radius=.7071067811865476+e,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Xr.x=s.normal.x>0?t.max.x:t.min.x,Xr.y=s.normal.y>0?t.max.y:t.min.y,Xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ci=class extends Dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Oc=new ae,al=new $s,qr=new Yn,Yr=new k,os=class extends me{constructor(t=new Ce,e=new Ci){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,t.ray.intersectsSphere(qr)===!1)return;Oc.copy(s).invert(),al.copy(t.ray).applyMatrix4(Oc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,f=i.attributes.position;if(h!==null){let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=u,E=p;x<E;x++){let m=h.getX(x);Yr.fromBufferAttribute(f,m),Bc(Yr,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=u,E=p;x<E;x++)Yr.fromBufferAttribute(f,x),Bc(Yr,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Bc(n,t,e,i,s,r,a){let o=al.distanceSqToPoint(n);if(o<e){let l=new k;al.closestPointToPoint(n,l),l.applyMatrix4(i);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var tr=class extends Ye{constructor(t=[],e=mi,i,s,r,a,o,l,h,d){super(t,e,i,s,r,a,o,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Nn=class extends Ye{constructor(t,e,i,s,r,a,o,l,h){super(t,e,i,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var oi=class extends Ye{constructor(t,e,i=Mn,s,r,a,o=Fe,l=Fe,h,d=Rn,f=1){if(d!==Rn&&d!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,d,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ss(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ua=class extends oi{constructor(t,e=Mn,i=mi,s,r,a=Fe,o=Fe,l,h=Rn){let d={width:t,height:t,depth:1},f=[d,d,d,d,d,d];super(t,t,e,i,s,r,a,o,l,h),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},er=class extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ke=class n extends Ce{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],d=[],f=[],u=0,p=0;x("z","y","x",-1,-1,i,e,t,a,r,0),x("z","y","x",1,-1,i,e,-t,a,r,1),x("x","z","y",1,1,t,i,e,s,a,2),x("x","z","y",1,-1,t,i,-e,s,a,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(h,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function x(E,m,c,v,w,y,S,b,P,_,T){let I=y/P,R=S/_,N=y/2,z=S/2,L=b/2,V=P+1,$=_+1,K=0,st=0,Z=new k;for(let et=0;et<$;et++){let nt=et*R-z;for(let wt=0;wt<V;wt++){let vt=wt*I-N;Z[E]=vt*v,Z[m]=nt*w,Z[c]=L,h.push(Z.x,Z.y,Z.z),Z[E]=0,Z[m]=0,Z[c]=b>0?1:-1,d.push(Z.x,Z.y,Z.z),f.push(wt/P),f.push(1-et/_),K+=1}}for(let et=0;et<_;et++)for(let nt=0;nt<P;nt++){let wt=u+nt+V*et,vt=u+nt+V*(et+1),Kt=u+(nt+1)+V*(et+1),Bt=u+(nt+1)+V*et;l.push(wt,vt,Bt),l.push(vt,Kt,Bt),st+=6}o.addGroup(p,st,T),p+=st,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},nr=class n extends Ce{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],h=[],d=e/2,f=Math.PI/2*t,u=e,p=2*f+u,x=i*2+r,E=s+1,m=new k,c=new k;for(let v=0;v<=x;v++){let w=0,y=0,S=0,b=0;if(v<=i){let T=v/i,I=T*Math.PI/2;y=-d-t*Math.cos(I),S=t*Math.sin(I),b=-t*Math.cos(I),w=T*f}else if(v<=i+r){let T=(v-i)/r;y=-d+T*e,S=t,b=0,w=f+T*u}else{let T=(v-i-r)/i,I=T*Math.PI/2;y=d+t*Math.sin(I),S=t*Math.cos(I),b=t*Math.sin(I),w=f+u+T*f}let P=Math.max(0,Math.min(1,w/p)),_=0;v===0?_=.5/s:v===x&&(_=-.5/s);for(let T=0;T<=s;T++){let I=T/s,R=I*Math.PI*2,N=Math.sin(R),z=Math.cos(R);c.x=-S*z,c.y=y,c.z=S*N,o.push(c.x,c.y,c.z),m.set(-S*z,b,S*N),m.normalize(),l.push(m.x,m.y,m.z),h.push(I+_,P)}if(v>0){let T=(v-1)*E;for(let I=0;I<s;I++){let R=T+I,N=T+I+1,z=v*E+I,L=v*E+I+1;a.push(R,N,z),a.push(N,L,z)}}}this.setIndex(a),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var ls=class n extends Ce{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let d=[],f=[],u=[],p=[],x=0,E=[],m=i/2,c=0;v(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new fe(f,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(p,2));function v(){let y=new k,S=new k,b=0,P=(e-t)/i;for(let _=0;_<=r;_++){let T=[],I=_/r,R=I*(e-t)+t;for(let N=0;N<=s;N++){let z=N/s,L=z*l+o,V=Math.sin(L),$=Math.cos(L);S.x=R*V,S.y=-I*i+m,S.z=R*$,f.push(S.x,S.y,S.z),y.set(V,P,$).normalize(),u.push(y.x,y.y,y.z),p.push(z,1-I),T.push(x++)}E.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let I=E[T][_],R=E[T+1][_],N=E[T+1][_+1],z=E[T][_+1];(t>0||T!==0)&&(d.push(I,R,z),b+=3),(e>0||T!==r-1)&&(d.push(R,N,z),b+=3)}h.addGroup(c,b,0),c+=b}function w(y){let S=x,b=new qt,P=new k,_=0,T=y===!0?t:e,I=y===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,m*I,0),u.push(0,I,0),p.push(.5,.5),x++;let R=x;for(let N=0;N<=s;N++){let L=N/s*l+o,V=Math.cos(L),$=Math.sin(L);P.x=T*$,P.y=m*I,P.z=T*V,f.push(P.x,P.y,P.z),u.push(0,I,0),b.x=V*.5+.5,b.y=$*.5*I+.5,p.push(b.x,b.y),x++}for(let N=0;N<s;N++){let z=S+N,L=R+N;y===!0?d.push(L,L+1,z):d.push(L+1,L,z),_+=3}h.addGroup(c,_,y===!0?1:2),c+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},cs=class n extends ls{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Un=class n extends Ce{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),h=o+1,d=l+1,f=t/o,u=e/l,p=[],x=[],E=[],m=[];for(let c=0;c<d;c++){let v=c*u-a;for(let w=0;w<h;w++){let y=w*f-r;x.push(y,-v,0),E.push(0,0,1),m.push(w/o),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<o;v++){let w=v+h*c,y=v+h*(c+1),S=v+1+h*(c+1),b=v+1+h*c;p.push(w,y,b),p.push(y,S,b)}this.setIndex(p),this.setAttribute("position",new fe(x,3)),this.setAttribute("normal",new fe(E,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var li=class n extends Ce{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),h=0,d=[],f=new k,u=new k,p=[],x=[],E=[],m=[];for(let c=0;c<=i;c++){let v=[],w=c/i,y=a+w*o,S=t*Math.cos(y),b=Math.sqrt(t*t-S*S),P=0;c===0&&a===0?P=.5/e:c===i&&l===Math.PI&&(P=-.5/e);for(let _=0;_<=e;_++){let T=_/e,I=s+T*r;f.x=-b*Math.cos(I),f.y=S,f.z=b*Math.sin(I),x.push(f.x,f.y,f.z),u.copy(f).normalize(),E.push(u.x,u.y,u.z),m.push(T+P,1-w),v.push(h++)}d.push(v)}for(let c=0;c<i;c++)for(let v=0;v<e;v++){let w=d[c][v+1],y=d[c][v],S=d[c+1][v],b=d[c+1][v+1];(c!==0||a>0)&&p.push(w,y,b),(c!==i-1||l<Math.PI)&&p.push(y,S,b)}this.setIndex(p),this.setAttribute("position",new fe(x,3)),this.setAttribute("normal",new fe(E,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var hs=class n extends Ce{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],h=[],d=[],f=[],u=new k,p=new k,x=new k;for(let E=0;E<=i;E++){let m=a+E/i*o;for(let c=0;c<=s;c++){let v=c/s*r;p.x=(t+e*Math.cos(m))*Math.cos(v),p.y=(t+e*Math.cos(m))*Math.sin(v),p.z=e*Math.sin(m),h.push(p.x,p.y,p.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),x.subVectors(p,u).normalize(),d.push(x.x,x.y,x.z),f.push(c/s),f.push(E/i)}}for(let E=1;E<=i;E++)for(let m=1;m<=s;m++){let c=(s+1)*E+m-1,v=(s+1)*(E-1)+m-1,w=(s+1)*(E-1)+m,y=(s+1)*E+m;l.push(c,v,y),l.push(v,w,y)}this.setIndex(l),this.setAttribute("position",new fe(h,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Di(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(zc(s))s.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(zc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ge(n){let t={};for(let e=0;e<n.length;e++){let i=Di(n[e]);for(let s in i)t[s]=i[s]}return t}function zc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Pd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ll(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var Ph={clone:Di,merge:Ge},Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ze=class extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=Pd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ct().setHex(s.value);break;case"v2":this.uniforms[i].value=new qt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new k().fromArray(s.value);break;case"v4":this.uniforms[i].value=new pe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ae().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},da=class extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ee=class extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vr,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ir=class extends Dn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vr,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Aa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},fa=class extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pa=class extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ji(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function tl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ci=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ma=class extends ci{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:il,endingEnd:il}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sl:r=t,o=2*e-i;break;case rl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case sl:a=t,l=2*i-e;break;case rl:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let h=(i-e)*.5,d=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-i),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,d=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,x=(i-e)/(s-e),E=x*x,m=E*x,c=-u*m+2*u*E-u*x,v=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*x+1,w=(-1-p)*m+(1.5+p)*E+.5*x,y=p*m-p*E;for(let S=0;S!==o;++S)r[S]=c*a[d+S]+v*a[h+S]+w*a[l+S]+y*a[f+S];return r}},ga=class extends ci{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,d=(i-e)/(s-e),f=1-d;for(let u=0;u!==o;++u)r[u]=a[h+u]*f+a[l+u]*d;return r}},_a=class extends ci{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xa=class extends ci{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,d=this.inTangents,f=this.outTangents;if(!d||!f){let x=(i-e)/(s-e),E=1-x;for(let m=0;m!==o;++m)r[m]=a[h+m]*E+a[l+m]*x;return r}let u=o*2,p=t-1;for(let x=0;x!==o;++x){let E=a[h+x],m=a[l+x],c=p*u+x*2,v=f[c],w=f[c+1],y=t*u+x*2,S=d[y],b=d[y+1],P=Nd(i,e,v,S,s);r[x]=Ih(P,E,w,b,m)}return r}};function Ih(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Dd(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Nd(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Ih(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Dd(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var rn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ji(e,this.TimeBufferType),this.values=Ji(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ji(t.times,Array),values:Ji(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),tl(t.settings)&&(i.settings={inTangents:Ji(t.settings.inTangents,Array),outTangents:Ji(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new _a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Vs:e=this.InterpolantFactoryMethodDiscrete;break;case oa:e=this.InterpolantFactoryMethodLinear;break;case $r:e=this.InterpolantFactoryMethodSmooth;break;case nl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Pt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return oa;case this.InterpolantFactoryMethodSmooth:return $r;case this.InterpolantFactoryMethodBezier:return nl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;tl(this.settings)&&(kc(this.settings.inTangents,t),kc(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Lt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Lt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Lt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Zu(s))for(let o=0,l=s.length;o!==l;++o){let h=s[o];if(isNaN(h)){Lt("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===$r,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=t[o],d=t[o+1];if(h!==d&&(o!==1||h!==t[0]))if(s)l=!0;else{let f=o*i,u=f-i,p=f+i;for(let x=0;x!==i;++x){let E=e[f+x];if(E!==e[u+x]||E!==e[p+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*i,u=a*i;for(let p=0;p!==i;++p)e[u+p]=e[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,h=0;h!==i;++h)e[l+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,tl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function kc(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=oa;var hi=class extends rn{constructor(t,e,i){super(t,e,i)}};hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Vs;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var va=class extends rn{constructor(t,e,i,s){super(t,e,i,s)}};va.prototype.ValueTypeName="color";var ya=class extends rn{constructor(t,e,i,s){super(t,e,i,s)}};ya.prototype.ValueTypeName="number";var Ma=class extends ci{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),h=t*o;for(let d=h+o;h!==d;h+=4)Pn.slerpFlat(r,0,a,h-o,a,h,l);return r}},sr=class extends rn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Ma(this.times,this.values,this.getValueSize(),t)}};sr.prototype.ValueTypeName="quaternion";sr.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends rn{constructor(t,e,i){super(t,e,i)}};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Vs;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends rn{constructor(t,e,i,s){super(t,e,i,s)}};Sa.prototype.ValueTypeName="vector";var ba=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return h.push(d,f),this},this.removeHandler=function(d){let f=h.indexOf(d);return f!==-1&&h.splice(f,2),this},this.getHandler=function(d){for(let f=0,u=h.length;f<u;f+=2){let p=h[f],x=h[f+1];if(p.global&&(p.lastIndex=0),p.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lh=new ba,Ea=class{constructor(t){this.manager=t!==void 0?t:Lh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ea.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pi=class extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},rr=class extends Pi{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},el=new ae,Vc=new k,Hc=new k,ar=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vc),Hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){el.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(el,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===es||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(el)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Zr=new k,Jr=new Pn,wn=new k,or=class extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zr,Jr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,wn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Zr,Jr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ri=new k,Gc=new qt,Wc=new qt,Oe=class extends or{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return is*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Wc),e.subVectors(Wc,Gc)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/h,s*=a.width/l,i*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ol=class extends ar{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0}},di=class extends Pi{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ol}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},us=class extends or{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ll=class extends ar{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends Pi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new ll}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},lr=class extends Pi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var $i=-90,Ki=1,Ta=class extends me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe($i,Ki,t,e);s.layers=this.layers,this.add(s);let r=new Oe($i,Ki,t,e);r.layers=this.layers,this.add(r);let a=new Oe($i,Ki,t,e);a.layers=this.layers,this.add(a);let o=new Oe($i,Ki,t,e);o.layers=this.layers,this.add(o);let l=new Oe($i,Ki,t,e);l.layers=this.layers,this.add(l);let h=new Oe($i,Ki,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let h of e)this.remove(h);if(t===vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===es)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,d]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(f,u,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},wa=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Dl="\\[\\]\\.:\\/",Ud=new RegExp("["+Dl+"]","g"),Nl="[^"+Dl+"]",Fd="[^"+Dl.replace("\\.","")+"]",Od=/((?:WC+[\/:])*)/.source.replace("WC",Nl),Bd=/(WCOD+)?/.source.replace("WCOD",Fd),zd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nl),kd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nl),Vd=new RegExp("^"+Od+Bd+zd+kd+"$"),Hd=["material","materials","bones","map"],cl=class{constructor(t,e,i){let s=i||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},de=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ud,"")}static parseTrackName(t){let e=Vd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Hd.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;Lt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=cl;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var h_=new Float32Array(1);var hl=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function Ul(n,t,e,i){let s=Gd(i);switch(e){case Al:return n*t;case Na:return n*t/s.components*s.byteLength;case Ua:return n*t/s.components*s.byteLength;case xi:return n*t*2/s.components*s.byteLength;case Fa:return n*t*2/s.components*s.byteLength;case Rl:return n*t*3/s.components*s.byteLength;case un:return n*t*4/s.components*s.byteLength;case Oa:return n*t*4/s.components*s.byteLength;case fr:case pr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case za:case Va:return Math.max(n,16)*Math.max(t,8)/4;case Ba:case ka:return Math.max(n,8)*Math.max(t,8)/2;case Ha:case Ga:case Xa:case qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wa:case _r:case Ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $a:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case to:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case eo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case no:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case io:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case so:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ro:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ao:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case oo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case lo:case co:case ho:return Math.ceil(n/4)*Math.ceil(t/4)*16;case uo:case fo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case xr:case po:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gd(n){switch(n){case Qe:case bl:return{byteLength:1,components:1};case ps:case El:case Sn:return{byteLength:2,components:1};case La:case Da:return{byteLength:2,components:4};case Mn:case Ia:case hn:return{byteLength:4,components:1};case Tl:case wl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function tu(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Xd(n){let t=new WeakMap;function e(o,l){let h=o.array,d=o.usage,f=h.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,h,d),o.onUploadCallback();let p;if(h instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=n.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=n.SHORT;else if(h instanceof Uint32Array)p=n.UNSIGNED_INT;else if(h instanceof Int32Array)p=n.INT;else if(h instanceof Int8Array)p=n.BYTE;else if(h instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,h){let d=l.array,f=l.updateRanges;if(n.bindBuffer(h,o),f.length===0)n.bufferSubData(h,0,d);else{f.sort((p,x)=>p.start-x.start);let u=0;for(let p=1;p<f.length;p++){let x=f[u],E=f[p];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++u,f[u]=E)}f.length=u+1;for(let p=0,x=f.length;p<x;p++){let E=f[p];n.bufferSubData(h,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,af=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,of=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_f=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,If=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,zf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ip=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,em=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:qd,alphahash_pars_fragment:Yd,alphamap_fragment:Zd,alphamap_pars_fragment:Jd,alphatest_fragment:$d,alphatest_pars_fragment:Kd,aomap_fragment:Qd,aomap_pars_fragment:jd,batching_pars_vertex:tf,batching_vertex:ef,begin_vertex:nf,beginnormal_vertex:sf,bsdfs:rf,iridescence_fragment:af,bumpmap_pars_fragment:of,clipping_planes_fragment:lf,clipping_planes_pars_fragment:cf,clipping_planes_pars_vertex:hf,clipping_planes_vertex:uf,color_fragment:df,color_pars_fragment:ff,color_pars_vertex:pf,color_vertex:mf,common:gf,cube_uv_reflection_fragment:_f,defaultnormal_vertex:xf,displacementmap_pars_vertex:vf,displacementmap_vertex:yf,emissivemap_fragment:Mf,emissivemap_pars_fragment:Sf,colorspace_fragment:bf,colorspace_pars_fragment:Ef,envmap_fragment:Tf,envmap_common_pars_fragment:wf,envmap_pars_fragment:Af,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:zf,envmap_vertex:Cf,fog_vertex:Pf,fog_pars_vertex:If,fog_fragment:Lf,fog_pars_fragment:Df,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Uf,lights_lambert_fragment:Ff,lights_lambert_pars_fragment:Of,lights_pars_begin:Bf,lights_toon_fragment:kf,lights_toon_pars_fragment:Vf,lights_phong_fragment:Hf,lights_phong_pars_fragment:Gf,lights_physical_fragment:Wf,lights_physical_pars_fragment:Xf,lights_fragment_begin:qf,lights_fragment_maps:Yf,lights_fragment_end:Zf,lightprobes_pars_fragment:Jf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Kf,logdepthbuf_pars_vertex:Qf,logdepthbuf_vertex:jf,map_fragment:tp,map_pars_fragment:ep,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:ap,morphcolor_vertex:op,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:xp,clearcoat_pars_fragment:vp,iridescence_pars_fragment:yp,opaque_fragment:Mp,packing:Sp,premultiplied_alpha_fragment:bp,project_vertex:Ep,dithering_fragment:Tp,dithering_pars_fragment:wp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Lp,skinbase_vertex:Dp,skinning_pars_vertex:Np,skinning_vertex:Up,skinnormal_vertex:Fp,specularmap_fragment:Op,specularmap_pars_fragment:Bp,tonemapping_fragment:zp,tonemapping_pars_fragment:kp,transmission_fragment:Vp,transmission_pars_fragment:Hp,uv_pars_fragment:Gp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:Zp,backgroundCube_vert:Jp,backgroundCube_frag:$p,cube_vert:Kp,cube_frag:Qp,depth_vert:jp,depth_frag:tm,distance_vert:em,distance_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:am,meshbasic_vert:om,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:_m,meshphysical_frag:xm,meshtoon_vert:vm,meshtoon_frag:ym,points_vert:Mm,points_frag:Sm,shadow_vert:bm,shadow_frag:Em,sprite_vert:Tm,sprite_frag:wm},ut={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},zn={basic:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ge([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ge([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ge([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ge([ut.points,ut.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ge([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ge([ut.common,ut.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ge([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ge([ut.sprite,ut.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Ge([ut.common,ut.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Ge([ut.lights,ut.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};zn.physical={uniforms:Ge([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var xo={r:0,b:0,g:0},Am=new ae,eu=new Nt;eu.set(-1,0,0,0,1,0,0,0,1);function Rm(n,t,e,i,s,r){let a=new Ct(0),o=s===!0?0:1,l,h,d=null,f=0,u=null;function p(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let y=v.backgroundBlurriness>0;w=t.get(w,y)}return w}function x(v){let w=!1,y=p(v);y===null?m(a,o):y&&y.isColor&&(m(y,1),w=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(v,w){let y=p(w);y&&(y.isCubeTexture||y.mapping===ur)?(h===void 0&&(h=new zt(new Ke(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:Di(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(eu),h.material.toneMapped=Yt.getTransfer(y.colorSpace)!==ee,(d!==y||f!==y.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,f=y.version,u=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new zt(new Un(2,2),new Ze({name:"BackgroundMaterial",uniforms:Di(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(y.colorSpace)!==ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,w){v.getRGB(xo,Ll(n)),e.buffers.color.setClear(xo.r,xo.g,xo.b,w,r)}function c(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:x,addToRenderList:E,dispose:c}}function Cm(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(R,N,z,L,V){let $=!1,K=f(R,L,z,N);r!==K&&(r=K,h(r.object)),$=p(R,L,z,V),$&&x(R,L,z,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(R,N,z,L),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return n.createVertexArray()}function h(R){return n.bindVertexArray(R)}function d(R){return n.deleteVertexArray(R)}function f(R,N,z,L){let V=L.wireframe===!0,$=i[N.id];$===void 0&&($={},i[N.id]=$);let K=R.isInstancedMesh===!0?R.id:0,st=$[K];st===void 0&&(st={},$[K]=st);let Z=st[z.id];Z===void 0&&(Z={},st[z.id]=Z);let et=Z[V];return et===void 0&&(et=u(l()),Z[V]=et),et}function u(R){let N=[],z=[],L=[];for(let V=0;V<e;V++)N[V]=0,z[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:L,object:R,attributes:{},index:null}}function p(R,N,z,L){let V=r.attributes,$=N.attributes,K=0,st=z.getAttributes();for(let Z in st)if(st[Z].location>=0){let nt=V[Z],wt=$[Z];if(wt===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(wt=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(wt=R.instanceColor)),nt===void 0||nt.attribute!==wt||wt&&nt.data!==wt.data)return!0;K++}return r.attributesNum!==K||r.index!==L}function x(R,N,z,L){let V={},$=N.attributes,K=0,st=z.getAttributes();for(let Z in st)if(st[Z].location>=0){let nt=$[Z];nt===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor));let wt={};wt.attribute=nt,nt&&nt.data&&(wt.data=nt.data),V[Z]=wt,K++}r.attributes=V,r.attributesNum=K,r.index=L}function E(){let R=r.newAttributes;for(let N=0,z=R.length;N<z;N++)R[N]=0}function m(R){c(R,0)}function c(R,N){let z=r.newAttributes,L=r.enabledAttributes,V=r.attributeDivisors;z[R]=1,L[R]===0&&(n.enableVertexAttribArray(R),L[R]=1),V[R]!==N&&(n.vertexAttribDivisor(R,N),V[R]=N)}function v(){let R=r.newAttributes,N=r.enabledAttributes;for(let z=0,L=N.length;z<L;z++)N[z]!==R[z]&&(n.disableVertexAttribArray(z),N[z]=0)}function w(R,N,z,L,V,$,K){K===!0?n.vertexAttribIPointer(R,N,z,V,$):n.vertexAttribPointer(R,N,z,L,V,$)}function y(R,N,z,L){E();let V=L.attributes,$=z.getAttributes(),K=N.defaultAttributeValues;for(let st in $){let Z=$[st];if(Z.location>=0){let et=V[st];if(et===void 0&&(st==="instanceMatrix"&&R.instanceMatrix&&(et=R.instanceMatrix),st==="instanceColor"&&R.instanceColor&&(et=R.instanceColor)),et!==void 0){let nt=et.normalized,wt=et.itemSize,vt=t.get(et);if(vt===void 0)continue;let Kt=vt.buffer,Bt=vt.type,Jt=vt.bytesPerElement,Q=Bt===n.INT||Bt===n.UNSIGNED_INT||et.gpuType===Ia;if(et.isInterleavedBufferAttribute){let tt=et.data,mt=tt.stride,It=et.offset;if(tt.isInstancedInterleavedBuffer){for(let gt=0;gt<Z.locationSize;gt++)c(Z.location+gt,tt.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let gt=0;gt<Z.locationSize;gt++)m(Z.location+gt);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let gt=0;gt<Z.locationSize;gt++)w(Z.location+gt,wt/Z.locationSize,Bt,nt,mt*Jt,(It+wt/Z.locationSize*gt)*Jt,Q)}else{if(et.isInstancedBufferAttribute){for(let tt=0;tt<Z.locationSize;tt++)c(Z.location+tt,et.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let tt=0;tt<Z.locationSize;tt++)m(Z.location+tt);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let tt=0;tt<Z.locationSize;tt++)w(Z.location+tt,wt/Z.locationSize,Bt,nt,wt*Jt,wt/Z.locationSize*tt*Jt,Q)}}else if(K!==void 0){let nt=K[st];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(Z.location,nt);break;case 3:n.vertexAttrib3fv(Z.location,nt);break;case 4:n.vertexAttrib4fv(Z.location,nt);break;default:n.vertexAttrib1fv(Z.location,nt)}}}}v()}function S(){T();for(let R in i){let N=i[R];for(let z in N){let L=N[z];for(let V in L){let $=L[V];for(let K in $)d($[K].object),delete $[K];delete L[V]}}delete i[R]}}function b(R){if(i[R.id]===void 0)return;let N=i[R.id];for(let z in N){let L=N[z];for(let V in L){let $=L[V];for(let K in $)d($[K].object),delete $[K];delete L[V]}}delete i[R.id]}function P(R){for(let N in i){let z=i[N];for(let L in z){let V=z[L];if(V[R.id]===void 0)continue;let $=V[R.id];for(let K in $)d($[K].object),delete $[K];delete V[R.id]}}}function _(R){for(let N in i){let z=i[N],L=R.isInstancedMesh===!0?R.id:0,V=z[L];if(V!==void 0){for(let $ in V){let K=V[$];for(let st in K)d(K[st].object),delete K[st];delete V[$]}delete z[L],Object.keys(z).length===0&&delete i[N]}}}function T(){I(),a=!0,r!==s&&(r=s,h(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:m,disableUnusedAttributes:v}}function Pm(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function a(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),e.update(h,i,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let u=0;for(let p=0;p<d;p++)u+=h[p];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Im(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==un&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let _=P===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Qe&&P!==hn&&!_&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",d=l(h);d!==h&&(Pt("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),c=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:m,maxAttributes:c,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:S,samples:b}}function Lm(n){let t=this,e=null,i=0,s=!1,r=!1,a=new xn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||i!==0||s;return s=u,i=f.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=d(f,u,0)},this.setState=function(f,u,p){let x=f.clippingPlanes,E=f.clipIntersection,m=f.clipShadows,c=n.get(f);if(!s||x===null||x.length===0||r&&!m)r?d(null):h();else{let v=r?0:i,w=v*4,y=c.clippingState||null;l.value=y,y=d(x,u,w,p);for(let S=0;S!==w;++S)y[S]=e[S];c.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(f,u,p,x){let E=f!==null?f.length:0,m=null;if(E!==0){if(m=l.value,x!==!0||m===null){let c=p+E*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<c)&&(m=new Float32Array(c));for(let w=0,y=p;w!==E;++w,y+=4)a.copy(f[w]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,m}}var xs=4,Dm=6,Nm=20,Um=256,yr=new us,Dh=new Ct,Fl=null,Ol=0,Bl=0,zl=!1,Fm=new k,Ni=new k,ys=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Fm}=r;Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fl,Ol,Bl),this._renderer.xr.enabled=zl,t.scissorTest=!1,_s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:Sn,format:un,colorSpace:Hs,depthBuffer:!1},s=Nh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nh(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Om(r)),this._blurMaterial=zm(r,t,e),this._ggxMaterial=Bm(r,t,e)}return s}_compileMaterial(t){let e=new zt(new Ce,t);this._renderer.compile(e,yr)}_sceneToCubeUV(t,e,i,s,r){let l=new Oe(90,1,e,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(Dh),f.toneMapping=yn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zt(new Ke,new sn({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,m=E.material,c=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,c=!0):(m.color.copy(Dh),c=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(l.up.set(0,h[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[w],r.y,r.z)):y===1?(l.up.set(0,0,h[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[w],r.z)):(l.up.set(0,h[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[w]));let S=this._cubeSize;_s(s,y*S,w>2?S:0,S,S),f.setRenderTarget(s),c&&f.render(E,l),f.render(t,l)}f.toneMapping=p,f.autoClear=u,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===mi||t.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;_s(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,yr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,h=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),f=Math.sqrt(h*h-d*d),u=h*1.25,p=f*u,{_lodMax:x}=this,E=this._sizeLods[i],m=3*E*(i>x-xs?i-x+xs:0),c=4*(this._cubeSize-E);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=x-e,_s(r,m,c,3*E,2*E),s.setRenderTarget(r),s.render(o,yr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,_s(t,m,c,3*E,2*E),s.setRenderTarget(t),s.render(o,yr)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let h=o.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-i;let d=this._sizeLods[s],f=3*d*(s>this._lodMax-xs?s-this._lodMax+xs:0),u=4*(this._cubeSize-d);_s(e,f,u,3*d,2*d),a.setRenderTarget(e),a.render(l,yr)}};function Om(n){let t=[],e=[],i=n,s=n-xs+1+Dm;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,h=1+o,d=[l,l,h,l,h,h,l,l,h,h,l,h],f=6,u=6,p=3,x=new Float32Array(p*u*f),E=new Float32Array(p*u*f);for(let c=0;c<f;c++){let v=c%3*2/3-1,w=c>2?0:-1,y=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];x.set(y,p*u*c);for(let S=0;S<u;S++){let b=d[S*2]*2-1,P=d[S*2+1]*2-1;c===0?Ni.set(1,P,b):c===1?Ni.set(-b,1,-P):c===2?Ni.set(-b,P,1):c===3?Ni.set(-1,P,-b):c===4?Ni.set(-b,-1,P):Ni.set(b,P,-1),Ni.toArray(E,(c*u+S)*p)}}let m=new Ce;m.setAttribute("position",new Re(x,p)),m.setAttribute("outputDirection",new Re(E,p)),e.push(new zt(m,null)),i>xs&&i--}return{lodMeshes:e,sizeLods:t}}function Nh(n,t,e){let i=new $e(n,t,e);return i.texture.mapping=ur,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _s(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Bm(n,t,e){return new Ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Um,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:So(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function zm(n,t,e){return new Ze({name:"SphericalGaussianBlur",defines:{SAMPLES:Nm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:So(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Uh(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Fh(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function So(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yo=class extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new tr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ke(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:Di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ie,blending:Fn});r.uniforms.tEquirect.value=e;let a=new zt(s,r),o=e.minFilter;return e.minFilter===gi&&(e.minFilter=Be),new Ta(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function km(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Ra||p===Ca)if(t.has(u)){let x=t.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let E=new yo(x.height);return E.fromEquirectangularTexture(n,u),t.set(u,E),u.addEventListener("dispose",h),o(E.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,x=p===Ra||p===Ca,E=p===mi||p===Li;if(x||E){let m=e.get(u),c=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==c)return i===null&&(i=new ys(n)),m=x?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return x&&v&&v.height>0||E&&v&&l(v)?(i===null&&(i=new ys(n)),m=x?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,p){return p===Ra?u.mapping=mi:p===Ca&&(u.mapping=Li),u}function l(u){let p=0,x=6;for(let E=0;E<x;E++)u[E]!==void 0&&p++;return p===x}function h(u){let p=u.target;p.removeEventListener("dispose",h);let x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function d(u){let p=u.target;p.removeEventListener("dispose",d);let x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Vm(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ai("WebGLRenderer: "+i+" extension not supported."),s}}}function Hm(n,t,e,i){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let p in u)t.update(u[p],n.ARRAY_BUFFER)}function h(f){let u=[],p=f.index,x=f.attributes.position,E=0;if(x===void 0)return;if(p!==null){let v=p.array;E=p.version;for(let w=0,y=v.length;w<y;w+=3){let S=v[w+0],b=v[w+1],P=v[w+2];u.push(S,b,b,P,P,S)}}else{let v=x.array;E=x.version;for(let w=0,y=v.length/3-1;w<y;w+=3){let S=w+0,b=w+1,P=w+2;u.push(S,b,b,P,P,S)}}let m=new(x.count>=65535?Js:Zs)(u,1);m.version=E;let c=r.get(f);c&&t.remove(c),r.set(f,m)}function d(f){let u=r.get(f);if(u){let p=f.index;p!==null&&u.version<p.version&&h(f)}else h(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function Gm(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function h(f,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,f*a,p),e.update(u,i,p))}function d(f,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,p);let E=0;for(let m=0;m<p;m++)E+=u[m];e.update(E,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=d}function Wm(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Xm(n,t,e){let i=new WeakMap,s=new pe;function r(a,o,l){let h=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0,u=i.get(o);if(u===void 0||u.count!==f){let T=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],w=0;p===!0&&(w=1),x===!0&&(w=2),E===!0&&(w=3);let y=o.attributes.position.count*w,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*S*4*f),P=new Xs(b,y,S,f);P.type=hn,P.needsUpdate=!0;let _=w*4;for(let I=0;I<f;I++){let R=m[I],N=c[I],z=v[I],L=y*S*4*I;for(let V=0;V<R.count;V++){let $=V*_;p===!0&&(s.fromBufferAttribute(R,V),b[L+$+0]=s.x,b[L+$+1]=s.y,b[L+$+2]=s.z,b[L+$+3]=0),x===!0&&(s.fromBufferAttribute(N,V),b[L+$+4]=s.x,b[L+$+5]=s.y,b[L+$+6]=s.z,b[L+$+7]=0),E===!0&&(s.fromBufferAttribute(z,V),b[L+$+8]=s.x,b[L+$+9]=s.y,b[L+$+10]=s.z,b[L+$+11]=z.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new qt(y,S)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let E=0;E<h.length;E++)p+=h[E];let x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function qm(n,t,e,i,s){let r=new WeakMap;function a(h){let d=s.render.frame,f=h.geometry,u=t.get(h,f);if(r.get(u)!==d&&(t.update(u),r.set(u,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==d&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){let p=h.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return u}function o(){r=new WeakMap}function l(h){let d=h.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}var Ym={[gl]:"LINEAR_TONE_MAPPING",[_l]:"REINHARD_TONE_MAPPING",[xl]:"CINEON_TONE_MAPPING",[hr]:"ACES_FILMIC_TONE_MAPPING",[yl]:"AGX_TONE_MAPPING",[Ml]:"NEUTRAL_TONE_MAPPING",[vl]:"CUSTOM_TONE_MAPPING"};function Zm(n,t,e,i,s,r){let a=new $e(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new Ce;h.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new fe([0,2,0,0,2,0],2));let d=new da({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new zt(h,d),u=new us(-1,1,1,-1,0,1),p=null,x=null,E=!1,m,c=null,v=[],w=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let b=0;b<v.length;b++){let P=v[b];P.setSize&&P.setSize(y,S)}},this.setEffects=function(y){v=y,w=v.length>0&&v[0].isRenderPass===!0;let S=a.width,b=a.height;v.length>0&&o===null&&(o=new $e(S,b,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new $e(S,b,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<v.length;P++){let _=v[P];_.setSize&&_.setSize(S,b)}},this.begin=function(y,S){if(E||y.toneMapping===yn&&v.length===0)return!1;if(c=S,S!==null){let b=S.width,P=S.height;(a.width!==b||a.height!==P)&&this.setSize(b,P)}return w===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=yn,!0},this.hasRenderPass=function(){return w},this.end=function(y,S){y.toneMapping=m,E=!0;let b=a,P=o;for(let _=0;_<v.length;_++){let T=v[_];T.enabled!==!1&&(T.render(y,P,b,S),T.needsSwap!==!1&&(b=P,P=P===o?l:o))}if(p!==y.outputColorSpace||x!==y.toneMapping){p=y.outputColorSpace,x=y.toneMapping,d.defines={},Yt.getTransfer(p)===ee&&(d.defines.SRGB_TRANSFER="");let _=Ym[x];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(c),y.render(f,u),c=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var nu=new Ye,Hl=new oi(1,1),iu=new Xs,su=new ha,ru=new tr,Oh=[],Bh=[],zh=new Float32Array(16),kh=new Float32Array(9),Vh=new Float32Array(4);function Ms(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Oh[s];if(r===void 0&&(r=new Float32Array(s),Oh[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function bo(n,t){let e=Bh[t];e===void 0&&(e=new Int32Array(t),Bh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Jm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function $m(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function Km(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function Qm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function jm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;Vh.set(i),n.uniformMatrix2fv(this.addr,!1,Vh),De(e,i)}}function tg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;kh.set(i),n.uniformMatrix3fv(this.addr,!1,kh),De(e,i)}}function eg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;zh.set(i),n.uniformMatrix4fv(this.addr,!1,zh),De(e,i)}}function ng(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ig(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function sg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function rg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function ag(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function og(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function lg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function cg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function hg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Hl.compareFunction=e.isReversedDepthBuffer()?go:mo,r=Hl):r=nu,e.setTexture2D(t||r,s)}function ug(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||su,s)}function dg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||ru,s)}function fg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||iu,s)}function pg(n){switch(n){case 5126:return Jm;case 35664:return $m;case 35665:return Km;case 35666:return Qm;case 35674:return jm;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return ag;case 36294:return og;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}function mg(n,t){n.uniform1fv(this.addr,t)}function gg(n,t){let e=Ms(t,this.size,2);n.uniform2fv(this.addr,e)}function _g(n,t){let e=Ms(t,this.size,3);n.uniform3fv(this.addr,e)}function xg(n,t){let e=Ms(t,this.size,4);n.uniform4fv(this.addr,e)}function vg(n,t){let e=Ms(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function yg(n,t){let e=Ms(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Mg(n,t){let e=Ms(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Sg(n,t){n.uniform1iv(this.addr,t)}function bg(n,t){n.uniform2iv(this.addr,t)}function Eg(n,t){n.uniform3iv(this.addr,t)}function Tg(n,t){n.uniform4iv(this.addr,t)}function wg(n,t){n.uniform1uiv(this.addr,t)}function Ag(n,t){n.uniform2uiv(this.addr,t)}function Rg(n,t){n.uniform3uiv(this.addr,t)}function Cg(n,t){n.uniform4uiv(this.addr,t)}function Pg(n,t,e){let i=this.cache,s=t.length,r=bo(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Hl:a=nu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ig(n,t,e){let i=this.cache,s=t.length,r=bo(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||su,r[a])}function Lg(n,t,e){let i=this.cache,s=t.length,r=bo(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ru,r[a])}function Dg(n,t,e){let i=this.cache,s=t.length,r=bo(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||iu,r[a])}function Ng(n){switch(n){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return xg;case 35674:return vg;case 35675:return yg;case 35676:return Mg;case 5124:case 35670:return Sg;case 35667:case 35671:return bg;case 35668:case 35672:return Eg;case 35669:case 35673:return Tg;case 5125:return wg;case 36294:return Ag;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}var Gl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=pg(e.type)}},Wl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ng(e.type)}},Xl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},kl=/(\w+)(\])?(\[|\.)?/g;function Hh(n,t){n.seq.push(t),n.map[t.id]=t}function Ug(n,t,e){let i=n.name,s=i.length;for(kl.lastIndex=0;;){let r=kl.exec(i),a=kl.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){Hh(e,h===void 0?new Gl(o,n,t):new Wl(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new Xl(o),Hh(e,f)),e=f}}}var vs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ug(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Gh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Fg=37297,Og=0;function Bg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Wh=new Nt;function zg(n){Yt._getMatrix(Wh,Yt.workingColorSpace,n);let t=`mat3( ${Wh.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case Gs:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Xh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Bg(n.getShaderSource(t),o)}else return r}function kg(n,t){let e=zg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Vg={[gl]:"Linear",[_l]:"Reinhard",[xl]:"Cineon",[hr]:"ACESFilmic",[yl]:"AgX",[Ml]:"Neutral",[vl]:"Custom"};function Hg(n,t){let e=Vg[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vo=new k;function Gg(){Yt.getLuminanceCoefficients(vo);let n=vo.x.toFixed(4),t=vo.y.toFixed(4),e=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function Xg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function qg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Sr(n){return n!==""}function qh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(n){return n.replace(Yg,Jg)}var Zg=new Map;function Jg(n,t){let e=Vt[t];if(e===void 0){let i=Zg.get(t);if(i!==void 0)e=Vt[i],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ql(e)}var $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(n){return n.replace($g,Kg)}function Kg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Qg={[cr]:"SHADOWMAP_TYPE_PCF",[fs]:"SHADOWMAP_TYPE_VSM"};function jg(n){return Qg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var t0={[mi]:"ENVMAP_TYPE_CUBE",[Li]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE_UV"};function e0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":t0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var n0={[Li]:"ENVMAP_MODE_REFRACTION"};function i0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":n0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var s0={[Aa]:"ENVMAP_BLENDING_MULTIPLY",[dh]:"ENVMAP_BLENDING_MIX",[fh]:"ENVMAP_BLENDING_ADD"};function r0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":s0[n.combine]||"ENVMAP_BLENDING_NONE"}function a0(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function o0(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=jg(e),h=e0(e),d=i0(e),f=r0(e),u=a0(e),p=Wg(e),x=Xg(r),E=s.createProgram(),m,c,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Sr).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Sr).join(`
`),c.length>0&&(c+=`
`)):(m=[Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),c=[Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==yn?Hg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,kg("linearToOutputTexel",e.outputColorSpace),Gg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sr).join(`
`)),a=ql(a),a=qh(a,e),a=Yh(a,e),o=ql(o),o=qh(o,e),o=Yh(o,e),a=Zh(a),o=Zh(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",e.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);let w=v+m+a,y=v+c+o,S=Gh(s,s.VERTEX_SHADER,w),b=Gh(s,s.FRAGMENT_SHADER,y);s.attachShader(E,S),s.attachShader(E,b),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function P(R){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(E)||"",z=s.getShaderInfoLog(S)||"",L=s.getShaderInfoLog(b)||"",V=N.trim(),$=z.trim(),K=L.trim(),st=!0,Z=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,S,b);else{let et=Xh(s,S,"vertex"),nt=Xh(s,b,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+et+`
`+nt)}else V!==""?Pt("WebGLProgram: Program Info Log:",V):($===""||K==="")&&(Z=!1);Z&&(R.diagnostics={runnable:st,programLog:V,vertexShader:{log:$,prefix:m},fragmentShader:{log:K,prefix:c}})}s.deleteShader(S),s.deleteShader(b),_=new vs(s,E),T=qg(s,E)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(E,Fg)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Og++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=S,this.fragmentShader=b,this}var l0=0,Yl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Zl(t),e.set(t,i)),i}},Zl=class{constructor(t){this.id=l0++,this.code=t,this.usedTimes=0}};function c0(n){return n===xi||n===_r||n===xr}function h0(n,t,e,i,s,r){let a=new qs,o=new Yl,l=new Set,h=[],d=new Map,f=i.logarithmicDepthBuffer,u=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function E(_,T,I,R,N,z){let L=R.fog,V=N.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,st=t.get(_.envMap||$,K),Z=st&&st.mapping===ur?st.image.height:null,et=p[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Pt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let nt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,wt=nt!==void 0?nt.length:0,vt=0;V.morphAttributes.position!==void 0&&(vt=1),V.morphAttributes.normal!==void 0&&(vt=2),V.morphAttributes.color!==void 0&&(vt=3);let Kt,Bt,Jt,Q;if(et){let le=zn[et];Kt=le.vertexShader,Bt=le.fragmentShader}else{Kt=_.vertexShader,Bt=_.fragmentShader;let le=o.getVertexShaderStage(_),jt=o.getFragmentShaderStage(_);o.update(_,le,jt),Jt=le.id,Q=jt.id}let tt=n.getRenderTarget(),mt=n.state.buffers.depth.getReversed(),It=N.isInstancedMesh===!0,gt=N.isBatchedMesh===!0,Ft=!!_.map,Me=!!_.matcap,Dt=!!st,Wt=!!_.aoMap,ne=!!_.lightMap,Gt=!!_.bumpMap&&_.wireframe===!1,oe=!!_.normalMap,Se=!!_.displacementMap,ze=!!_.emissiveMap,he=!!_.metalnessMap,ve=!!_.roughnessMap,B=_.anisotropy>0,Ne=_.clearcoat>0,Qt=_.dispersion>0,A=_.retroreflectivity>0,g=_.iridescence>0,C=_.sheen>0,F=_.transmission>0,H=B&&!!_.anisotropyMap,Y=Ne&&!!_.clearcoatMap,it=Ne&&!!_.clearcoatNormalMap,X=Ne&&!!_.clearcoatRoughnessMap,J=g&&!!_.iridescenceMap,at=g&&!!_.iridescenceThicknessMap,yt=C&&!!_.sheenColorMap,lt=C&&!!_.sheenRoughnessMap,ot=!!_.specularMap,bt=!!_.specularColorMap,Rt=!!_.specularIntensityMap,Ot=F&&!!_.transmissionMap,O=F&&!!_.thicknessMap,ct=!!_.gradientMap,j=!!_.alphaMap,ht=_.alphaTest>0,pt=!!_.alphaHash,rt=!!_.extensions,At=yn;_.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(At=n.toneMapping);let Et={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Kt,fragmentShader:Bt,defines:_.defines,customVertexShaderID:Jt,customFragmentShaderID:Q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:gt,batchingColor:gt&&N._colorsTexture!==null,instancing:It,instancingColor:It&&N.instanceColor!==null,instancingMorph:It&&N.morphTexture!==null,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ft,matcap:Me,envMap:Dt,envMapMode:Dt&&st.mapping,envMapCubeUVHeight:Z,aoMap:Wt,lightMap:ne,bumpMap:Gt,normalMap:oe,displacementMap:Se,emissiveMap:ze,normalMapObjectSpace:oe&&_.normalMapType===gh,normalMapTangentSpace:oe&&_.normalMapType===vr,packedNormalMap:oe&&_.normalMapType===vr&&c0(_.normalMap.format),metalnessMap:he,roughnessMap:ve,anisotropy:B,anisotropyMap:H,clearcoat:Ne,clearcoatMap:Y,clearcoatNormalMap:it,clearcoatRoughnessMap:X,dispersion:Qt,retroreflection:A,iridescence:g,iridescenceMap:J,iridescenceThicknessMap:at,sheen:C,sheenColorMap:yt,sheenRoughnessMap:lt,specularMap:ot,specularColorMap:bt,specularIntensityMap:Rt,transmission:F,transmissionMap:Ot,thicknessMap:O,gradientMap:ct,opaque:_.transparent===!1&&_.blending===pi&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:ht,alphaHash:pt,combine:_.combine,mapUv:Ft&&x(_.map.channel),aoMapUv:Wt&&x(_.aoMap.channel),lightMapUv:ne&&x(_.lightMap.channel),bumpMapUv:Gt&&x(_.bumpMap.channel),normalMapUv:oe&&x(_.normalMap.channel),displacementMapUv:Se&&x(_.displacementMap.channel),emissiveMapUv:ze&&x(_.emissiveMap.channel),metalnessMapUv:he&&x(_.metalnessMap.channel),roughnessMapUv:ve&&x(_.roughnessMap.channel),anisotropyMapUv:H&&x(_.anisotropyMap.channel),clearcoatMapUv:Y&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:it&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:at&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:lt&&x(_.sheenRoughnessMap.channel),specularMapUv:ot&&x(_.specularMap.channel),specularColorMapUv:bt&&x(_.specularColorMap.channel),specularIntensityMapUv:Rt&&x(_.specularIntensityMap.channel),transmissionMapUv:Ot&&x(_.transmissionMap.channel),thicknessMapUv:O&&x(_.thicknessMap.channel),alphaMapUv:j&&x(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(oe||B),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(Ft||j),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&oe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:mt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:vt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,decodeVideoTexture:Ft&&_.map.isVideoTexture===!0&&Yt.getTransfer(_.map.colorSpace)===ee,decodeVideoTextureEmissive:ze&&_.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(_.emissiveMap.colorSpace)===ee,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===cn,flipSided:_.side===Ie,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:rt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&_.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)T.push(I),T.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(c(T,_),v(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function c(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function v(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){let T=p[_.type],I;if(T){let R=zn[T];I=Ph.clone(R.uniforms)}else I=_.uniforms;return I}function y(_,T){let I=d.get(T);return I!==void 0?++I.usedTimes:(I=new o0(n,T,_,s),h.push(I),d.set(T,I)),I}function S(_){if(--_.usedTimes===0){let T=h.indexOf(_);h[T]=h[h.length-1],h.pop(),d.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function P(){o.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:S,releaseShaderCache:b,programs:h,dispose:P}}function u0(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function d0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function $h(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Kh(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,x,E,m,c){let v=n[t];return v===void 0?(v={id:u.id,object:u,geometry:p,material:x,materialVariant:a(u),groupOrder:E,renderOrder:u.renderOrder,z:m,group:c},n[t]=v):(v.id=u.id,v.object=u,v.geometry=p,v.material=x,v.materialVariant=a(u),v.groupOrder=E,v.renderOrder=u.renderOrder,v.z=m,v.group=c),t++,v}function l(u,p,x,E,m,c,v){v.reversedDepth===!0&&(m=-m);let w=o(u,p,x,E,m,c);x.transmission>0?i.push(w):x.transparent===!0?s.push(w):e.push(w)}function h(u,p,x,E,m,c){let v=o(u,p,x,E,m,c);x.transmission>0?i.unshift(v):x.transparent===!0?s.unshift(v):e.unshift(v)}function d(u,p){e.length>1&&e.sort(u||d0),i.length>1&&i.sort(p||$h),s.length>1&&s.sort(p||$h)}function f(){for(let u=t,p=n.length;u<p;u++){let x=n[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:h,finish:f,sort:d}}function f0(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Kh,n.set(i,[a])):s>=r.length?(a=new Kh,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function p0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Ct};break;case"SpotLight":e={position:new k,direction:new k,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function m0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var g0=0;function _0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function x0(n){let t=new p0,e=m0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new k);let s=new k,r=new ae,a=new ae;function o(h){let d=0,f=0,u=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let p=0,x=0,E=0,m=0,c=0,v=0,w=0,y=0,S=0,b=0,P=0,_=0,T=0,I=0;h.sort(_0);for(let N=0,z=h.length;N<z;N++){let L=h[N],V=L.color,$=L.intensity,K=L.distance,st=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===xi?st=L.shadow.map.texture:st=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=V.r*$,f+=V.g*$,u+=V.b*$;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],$);I++}else if(L.isSunLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let et=L.shadow,nt=e.get(L);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[x]=nt,i.sunShadowMap[x]=st;let wt=et.getViewportCount();for(let vt=0;vt<wt;vt++)i.sunShadowMatrix[E+vt]=et.getMatrix(vt),i.sunShadowCascade[E+vt]=et._cascadeData[vt];E+=wt,x++}i.sun[p]=Z,p++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let et=L.shadow,nt=e.get(L);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,i.directionalShadow[m]=nt,i.directionalShadowMap[m]=st,i.directionalShadowMatrix[m]=L.shadow.matrix,S++}i.directional[m]=Z,m++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(V).multiplyScalar($),Z.distance=K,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[v]=Z;let et=L.shadow;if(L.map&&(i.spotLightMap[_]=L.map,_++,et.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[v]=et.matrix,L.castShadow){let nt=e.get(L);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,i.spotShadow[v]=nt,i.spotShadowMap[v]=st,P++}v++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(V).multiplyScalar($),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[w]=Z,w++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let et=L.shadow,nt=e.get(L);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,nt.shadowCameraNear=et.camera.near,nt.shadowCameraFar=et.camera.far,i.pointShadow[c]=nt,i.pointShadowMap[c]=st,i.pointShadowMatrix[c]=L.shadow.matrix,b++}i.point[c]=Z,c++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar($),Z.groundColor.copy(L.groundColor).multiplyScalar($),i.hemi[y]=Z,y++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;let R=i.hash;(R.sunLength!==p||R.directionalLength!==m||R.pointLength!==c||R.spotLength!==v||R.rectAreaLength!==w||R.hemiLength!==y||R.numSunShadows!==x||R.numDirectionalShadows!==S||R.numPointShadows!==b||R.numSpotShadows!==P||R.numSpotMaps!==_||R.numLightProbes!==I)&&(i.sun.length=p,i.directional.length=m,i.spot.length=v,i.rectArea.length=w,i.point.length=c,i.hemi.length=y,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,R.sunLength=p,R.directionalLength=m,R.pointLength=c,R.spotLength=v,R.rectAreaLength=w,R.hemiLength=y,R.numSunShadows=x,R.numDirectionalShadows=S,R.numPointShadows=b,R.numSpotShadows=P,R.numSpotMaps=_,R.numLightProbes=I,i.version=g0++)}function l(h,d){let f=0,u=0,p=0,x=0,E=0,m=0,c=d.matrixWorldInverse;for(let v=0,w=h.length;v<w;v++){let y=h[v];if(y.isSunLight){let S=i.sun[f];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(c),f++}else if(y.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(c),u++}else if(y.isSpotLight){let S=i.spot[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(c),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(c),x++}else if(y.isRectAreaLight){let S=i.rectArea[E];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(c),a.identity(),r.copy(y.matrixWorld),r.premultiply(c),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),E++}else if(y.isPointLight){let S=i.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(c),p++}else if(y.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(c),m++}}}return{setup:o,setupView:l,state:i}}function Qh(n){let t=new x0(n),e=[],i=[],s=[];function r(u){f.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function h(){t.setup(e)}function d(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:h,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function v0(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Qh(n),t.set(s,[o])):r>=a.length?(o=new Qh(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,S0=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],b0=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],jh=new ae,Mr=new k,Vl=new k;function E0(n,t,e){let i=new as,s=new qt,r=new qt,a=new pe,o=new fa,l=new pa,h={},d=e.maxTextureSize,f={[fi]:Ie,[Ie]:fi,[cn]:cn},u=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:y0,fragmentShader:M0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let x=new Ce;x.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new zt(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cr;let c=this.type;this.render=function(b,P,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Yc&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cr);let T=n.getRenderTarget(),I=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Fn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=c!==this.type;z&&P.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=b.length;L<V;L++){let $=b[L],K=$.shadow;if(K===void 0){Pt("WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let st=K.getFrameExtents();s.multiply(st),r.copy(K.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/st.x),s.x=r.x*st.x,K.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/st.y),s.y=r.y*st.y,K.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Z,K.map===null||z===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===fs){if($.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new $e(s.x,s.y,{format:xi,type:Sn,minFilter:Be,magFilter:Be,generateMipmaps:!1}),K.map.texture.name=$.name+".shadowMap",K.map.depthTexture=new oi(s.x,s.y,hn),K.map.depthTexture.name=$.name+".shadowMapDepth",K.map.depthTexture.format=Rn,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Fe,K.map.depthTexture.magFilter=Fe}else $.isPointLight?(K.map=new yo(s.x),K.map.depthTexture=new ua(s.x,Mn)):(K.map=new $e(s.x,s.y),K.map.depthTexture=new oi(s.x,s.y,Mn)),K.map.depthTexture.name=$.name+".shadowMap",K.map.depthTexture.format=Rn,this.type===cr?(K.map.depthTexture.compareFunction=Z?go:mo,K.map.depthTexture.minFilter=Be,K.map.depthTexture.magFilter=Be):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Fe,K.map.depthTexture.magFilter=Fe);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let et=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();$.isPointLight!==!0&&K.updateMatrices($,_);for(let nt=0;nt<et;nt++){let wt=K.getCamera(nt);if($.isPointLight){let vt=K.camera,Kt=K.matrix,Bt=$.distance||vt.far;Bt!==vt.far&&(vt.far=Bt,vt.updateProjectionMatrix()),Mr.setFromMatrixPosition($.matrixWorld),vt.position.copy(Mr),Vl.copy(vt.position),Vl.add(S0[nt]),vt.up.copy(b0[nt]),vt.lookAt(Vl),vt.updateMatrixWorld(),Kt.makeTranslation(-Mr.x,-Mr.y,-Mr.z),jh.multiplyMatrices(vt.projectionMatrix,vt.matrixWorldInverse),K._frustum.setFromProjectionMatrix(jh,vt.coordinateSystem,vt.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,nt),n.clear();else{nt===0&&(n.setRenderTarget(K.map),n.clear());let vt=K.getViewport(nt);a.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),N.viewport(a)}i=K.getFrustum(nt),y(P,_,wt,$,this.type)}K.isPointLightShadow!==!0&&this.type===fs&&v(K,_),K.needsUpdate=!1}c=this.type,m.needsUpdate=!1,n.setRenderTarget(T,I,R)};function v(b,P){let _=t.update(E);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new $e(s.x,s.y,{format:xi,type:Sn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(P,null,_,u,E,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(P,null,_,p,E,null)}function w(b,P,_,T){let I=null,R=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)I=R;else if(I=_.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let N=I.uuid,z=P.uuid,L=h[N];L===void 0&&(L={},h[N]=L);let V=L[z];V===void 0&&(V=I.clone(),L[z]=V,P.addEventListener("dispose",S)),I=V}if(I.visible=P.visible,I.wireframe=P.wireframe,T===fs?I.side=P.shadowSide!==null?P.shadowSide:P.side:I.side=P.shadowSide!==null?P.shadowSide:f[P.side],I.alphaMap=P.alphaMap,I.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,I.map=P.map,I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.displacementMap=P.displacementMap,I.displacementScale=P.displacementScale,I.displacementBias=P.displacementBias,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let N=n.properties.get(I);N.light=_}return I}function y(b,P,_,T,I){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===fs)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let z=t.update(b),L=b.material;if(Array.isArray(L)){let V=z.groups;for(let $=0,K=V.length;$<K;$++){let st=V[$],Z=L[st.materialIndex];if(Z&&Z.visible){let et=w(b,Z,T,I);b.onBeforeShadow(n,b,P,_,z,et,st),n.renderBufferDirect(_,null,z,et,b,st),b.onAfterShadow(n,b,P,_,z,et,st)}}}else if(L.visible){let V=w(b,L,T,I);b.onBeforeShadow(n,b,P,_,z,V,null),n.renderBufferDirect(_,null,z,V,b,null),b.onAfterShadow(n,b,P,_,z,V,null)}}let N=b.children;for(let z=0,L=N.length;z<L;z++)y(N[z],P,_,T,I)}function S(b){b.target.removeEventListener("dispose",S);for(let _ in h){let T=h[_],I=b.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function T0(n,t){function e(){let O=!1,ct=new pe,j=null,ht=new pe(0,0,0,0);return{setMask:function(pt){j!==pt&&!O&&(n.colorMask(pt,pt,pt,pt),j=pt)},setLocked:function(pt){O=pt},setClear:function(pt,rt,At,Et,le){le===!0&&(pt*=Et,rt*=Et,At*=Et),ct.set(pt,rt,At,Et),ht.equals(ct)===!1&&(n.clearColor(pt,rt,At,Et),ht.copy(ct))},reset:function(){O=!1,j=null,ht.set(-1,0,0,0)}}}function i(){let O=!1,ct=!1,j=null,ht=null,pt=null;return{setReversed:function(rt){if(ct!==rt){let At=t.get("EXT_clip_control");rt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),ct=rt;let Et=pt;pt=null,this.setClear(Et)}},getReversed:function(){return ct},setTest:function(rt){rt?tt(n.DEPTH_TEST):mt(n.DEPTH_TEST)},setMask:function(rt){j!==rt&&!O&&(n.depthMask(rt),j=rt)},setFunc:function(rt){if(ct&&(rt=Rh[rt]),ht!==rt){switch(rt){case Qr:n.depthFunc(n.NEVER);break;case jr:n.depthFunc(n.ALWAYS);break;case ta:n.depthFunc(n.LESS);break;case ts:n.depthFunc(n.LEQUAL);break;case ea:n.depthFunc(n.EQUAL);break;case na:n.depthFunc(n.GEQUAL);break;case ia:n.depthFunc(n.GREATER);break;case sa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ht=rt}},setLocked:function(rt){O=rt},setClear:function(rt){pt!==rt&&(pt=rt,ct&&(rt=1-rt),n.clearDepth(rt))},reset:function(){O=!1,j=null,ht=null,pt=null,ct=!1}}}function s(){let O=!1,ct=null,j=null,ht=null,pt=null,rt=null,At=null,Et=null,le=null;return{setTest:function(jt){O||(jt?tt(n.STENCIL_TEST):mt(n.STENCIL_TEST))},setMask:function(jt){ct!==jt&&!O&&(n.stencilMask(jt),ct=jt)},setFunc:function(jt,pn,En){(j!==jt||ht!==pn||pt!==En)&&(n.stencilFunc(jt,pn,En),j=jt,ht=pn,pt=En)},setOp:function(jt,pn,En){(rt!==jt||At!==pn||Et!==En)&&(n.stencilOp(jt,pn,En),rt=jt,At=pn,Et=En)},setLocked:function(jt){O=jt},setClear:function(jt){le!==jt&&(n.clearStencil(jt),le=jt)},reset:function(){O=!1,ct=null,j=null,ht=null,pt=null,rt=null,At=null,Et=null,le=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,h=new WeakMap,d={},f={},u={},p=new WeakMap,x=[],E=null,m=!1,c=null,v=null,w=null,y=null,S=null,b=null,P=null,_=new Ct(0,0,0),T=0,I=!1,R=null,N=null,z=null,L=null,V=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,st=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=st>=1):Z.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=st>=2);let et=null,nt={},wt=n.getParameter(n.SCISSOR_BOX),vt=n.getParameter(n.VIEWPORT),Kt=new pe().fromArray(wt),Bt=new pe().fromArray(vt);function Jt(O,ct,j,ht){let pt=new Uint8Array(4),rt=n.createTexture();n.bindTexture(O,rt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let At=0;At<j;At++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,ht,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(ct+At,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return rt}let Q={};Q[n.TEXTURE_2D]=Jt(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=Jt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=Jt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=Jt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(n.DEPTH_TEST),a.setFunc(ts),Gt(!1),oe(ul),tt(n.CULL_FACE),Wt(Fn);function tt(O){d[O]!==!0&&(n.enable(O),d[O]=!0)}function mt(O){d[O]!==!1&&(n.disable(O),d[O]=!1)}function It(O,ct){return u[O]!==ct?(n.bindFramebuffer(O,ct),u[O]=ct,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ct),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function gt(O,ct){let j=x,ht=!1;if(O){j=p.get(ct),j===void 0&&(j=[],p.set(ct,j));let pt=O.textures;if(j.length!==pt.length||j[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,At=pt.length;rt<At;rt++)j[rt]=n.COLOR_ATTACHMENT0+rt;j.length=pt.length,ht=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ht=!0);ht&&n.drawBuffers(j)}function Ft(O){return E!==O?(n.useProgram(O),E=O,!0):!1}let Me={[Ii]:n.FUNC_ADD,[Jc]:n.FUNC_SUBTRACT,[$c]:n.FUNC_REVERSE_SUBTRACT};Me[Kc]=n.MIN,Me[Qc]=n.MAX;let Dt={[jc]:n.ZERO,[th]:n.ONE,[eh]:n.SRC_COLOR,[pl]:n.SRC_ALPHA,[oh]:n.SRC_ALPHA_SATURATE,[rh]:n.DST_COLOR,[ih]:n.DST_ALPHA,[nh]:n.ONE_MINUS_SRC_COLOR,[ml]:n.ONE_MINUS_SRC_ALPHA,[ah]:n.ONE_MINUS_DST_COLOR,[sh]:n.ONE_MINUS_DST_ALPHA,[lh]:n.CONSTANT_COLOR,[ch]:n.ONE_MINUS_CONSTANT_COLOR,[hh]:n.CONSTANT_ALPHA,[uh]:n.ONE_MINUS_CONSTANT_ALPHA};function Wt(O,ct,j,ht,pt,rt,At,Et,le,jt){if(O===Fn){m===!0&&(mt(n.BLEND),m=!1);return}if(m===!1&&(tt(n.BLEND),m=!0),O!==Zc){if(O!==c||jt!==I){if((v!==Ii||S!==Ii)&&(n.blendEquation(n.FUNC_ADD),v=Ii,S=Ii),jt)switch(O){case pi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case On:n.blendFunc(n.ONE,n.ONE);break;case dl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Lt("WebGLState: Invalid blending: ",O);break}else switch(O){case pi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case On:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case dl:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fl:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",O);break}w=null,y=null,b=null,P=null,_.set(0,0,0),T=0,c=O,I=jt}return}pt=pt||ct,rt=rt||j,At=At||ht,(ct!==v||pt!==S)&&(n.blendEquationSeparate(Me[ct],Me[pt]),v=ct,S=pt),(j!==w||ht!==y||rt!==b||At!==P)&&(n.blendFuncSeparate(Dt[j],Dt[ht],Dt[rt],Dt[At]),w=j,y=ht,b=rt,P=At),(Et.equals(_)===!1||le!==T)&&(n.blendColor(Et.r,Et.g,Et.b,le),_.copy(Et),T=le),c=O,I=!1}function ne(O,ct){O.side===cn?mt(n.CULL_FACE):tt(n.CULL_FACE);let j=O.side===Ie;ct&&(j=!j),Gt(j),O.blending===pi&&O.transparent===!1?Wt(Fn):Wt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let ht=O.stencilWrite;o.setTest(ht),ht&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ze(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(O){R!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),R=O)}function oe(O){O!==Xc?(tt(n.CULL_FACE),O!==N&&(O===ul?n.cullFace(n.BACK):O===qc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):mt(n.CULL_FACE),N=O}function Se(O){O!==z&&(K&&n.lineWidth(O),z=O)}function ze(O,ct,j){O?(tt(n.POLYGON_OFFSET_FILL),(L!==ct||V!==j)&&(L=ct,V=j,a.getReversed()&&(ct=-ct),n.polygonOffset(ct,j))):mt(n.POLYGON_OFFSET_FILL)}function he(O){O?tt(n.SCISSOR_TEST):mt(n.SCISSOR_TEST)}function ve(O){O===void 0&&(O=n.TEXTURE0+$-1),et!==O&&(n.activeTexture(O),et=O)}function B(O,ct,j){j===void 0&&(et===null?j=n.TEXTURE0+$-1:j=et);let ht=nt[j];ht===void 0&&(ht={type:void 0,texture:void 0},nt[j]=ht),(ht.type!==O||ht.texture!==ct)&&(et!==j&&(n.activeTexture(j),et=j),n.bindTexture(O,ct||Q[O]),ht.type=O,ht.texture=ct)}function Ne(){let O=nt[et];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Qt(){try{n.compressedTexImage2D(...arguments)}catch(O){Lt("WebGLState:",O)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(O){Lt("WebGLState:",O)}}function g(){try{n.texSubImage2D(...arguments)}catch(O){Lt("WebGLState:",O)}}function C(){try{n.texSubImage3D(...arguments)}catch(O){Lt("WebGLState:",O)}}function F(){try{n.compressedTexSubImage2D(...arguments)}catch(O){Lt("WebGLState:",O)}}function H(){try{n.compressedTexSubImage3D(...arguments)}catch(O){Lt("WebGLState:",O)}}function Y(){try{n.texStorage2D(...arguments)}catch(O){Lt("WebGLState:",O)}}function it(){try{n.texStorage3D(...arguments)}catch(O){Lt("WebGLState:",O)}}function X(){try{n.texImage2D(...arguments)}catch(O){Lt("WebGLState:",O)}}function J(){try{n.texImage3D(...arguments)}catch(O){Lt("WebGLState:",O)}}function at(O){return f[O]!==void 0?f[O]:n.getParameter(O)}function yt(O,ct){f[O]!==ct&&(n.pixelStorei(O,ct),f[O]=ct)}function lt(O){Kt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Kt.copy(O))}function ot(O){Bt.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Bt.copy(O))}function bt(O,ct){let j=h.get(ct);j===void 0&&(j=new WeakMap,h.set(ct,j));let ht=j.get(O);ht===void 0&&(ht=n.getUniformBlockIndex(ct,O.name),j.set(O,ht))}function Rt(O,ct){let ht=h.get(ct).get(O);l.get(ct)!==ht&&(n.uniformBlockBinding(ct,ht,O.__bindingPointIndex),l.set(ct,ht))}function Ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},f={},et=null,nt={},u={},p=new WeakMap,x=[],E=null,m=!1,c=null,v=null,w=null,y=null,S=null,b=null,P=null,_=new Ct(0,0,0),T=0,I=!1,R=null,N=null,z=null,L=null,V=null,Kt.set(0,0,n.canvas.width,n.canvas.height),Bt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:mt,bindFramebuffer:It,drawBuffers:gt,useProgram:Ft,setBlending:Wt,setMaterial:ne,setFlipSided:Gt,setCullFace:oe,setLineWidth:Se,setPolygonOffset:ze,setScissorTest:he,activeTexture:ve,bindTexture:B,unbindTexture:Ne,compressedTexImage2D:Qt,compressedTexImage3D:A,texImage2D:X,texImage3D:J,pixelStorei:yt,getParameter:at,updateUBOMapping:bt,uniformBlockBinding:Rt,texStorage2D:Y,texStorage3D:it,texSubImage2D:g,texSubImage3D:C,compressedTexSubImage2D:F,compressedTexSubImage3D:H,scissor:lt,viewport:ot,reset:Ot}}function w0(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qt,d=new WeakMap,f=new Set,u,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(A,g){return x?new OffscreenCanvas(A,g):Ws("canvas")}function m(A,g,C){let F=1,H=Qt(A);if((H.width>C||H.height>C)&&(F=C/Math.max(H.width,H.height)),F<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Y=Math.floor(F*H.width),it=Math.floor(F*H.height);u===void 0&&(u=E(Y,it));let X=g?E(Y,it):u;return X.width=Y,X.height=it,X.getContext("2d").drawImage(A,0,0,Y,it),Pt("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+Y+"x"+it+")."),X}else return"data"in A&&Pt("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),A;return A}function c(A){return A.generateMipmaps}function v(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,g,C,F,H,Y=!1){if(A!==null){if(n[A]!==void 0)return n[A];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let it;F&&(it=t.get("EXT_texture_norm16"),it||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=g;if(g===n.RED&&(C===n.FLOAT&&(X=n.R32F),C===n.HALF_FLOAT&&(X=n.R16F),C===n.UNSIGNED_BYTE&&(X=n.R8),C===n.UNSIGNED_SHORT&&it&&(X=it.R16_EXT),C===n.SHORT&&it&&(X=it.R16_SNORM_EXT)),g===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(X=n.R8UI),C===n.UNSIGNED_SHORT&&(X=n.R16UI),C===n.UNSIGNED_INT&&(X=n.R32UI),C===n.BYTE&&(X=n.R8I),C===n.SHORT&&(X=n.R16I),C===n.INT&&(X=n.R32I)),g===n.RG&&(C===n.FLOAT&&(X=n.RG32F),C===n.HALF_FLOAT&&(X=n.RG16F),C===n.UNSIGNED_BYTE&&(X=n.RG8),C===n.UNSIGNED_SHORT&&it&&(X=it.RG16_EXT),C===n.SHORT&&it&&(X=it.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(X=n.RG8UI),C===n.UNSIGNED_SHORT&&(X=n.RG16UI),C===n.UNSIGNED_INT&&(X=n.RG32UI),C===n.BYTE&&(X=n.RG8I),C===n.SHORT&&(X=n.RG16I),C===n.INT&&(X=n.RG32I)),g===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(X=n.RGB8UI),C===n.UNSIGNED_SHORT&&(X=n.RGB16UI),C===n.UNSIGNED_INT&&(X=n.RGB32UI),C===n.BYTE&&(X=n.RGB8I),C===n.SHORT&&(X=n.RGB16I),C===n.INT&&(X=n.RGB32I)),g===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),C===n.UNSIGNED_INT&&(X=n.RGBA32UI),C===n.BYTE&&(X=n.RGBA8I),C===n.SHORT&&(X=n.RGBA16I),C===n.INT&&(X=n.RGBA32I)),g===n.RGB&&(C===n.UNSIGNED_SHORT&&it&&(X=it.RGB16_EXT),C===n.SHORT&&it&&(X=it.RGB16_SNORM_EXT),C===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),C===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),g===n.RGBA){let J=Y?Gs:Yt.getTransfer(H);C===n.FLOAT&&(X=n.RGBA32F),C===n.HALF_FLOAT&&(X=n.RGBA16F),C===n.UNSIGNED_BYTE&&(X=J===ee?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT&&it&&(X=it.RGBA16_EXT),C===n.SHORT&&it&&(X=it.RGBA16_SNORM_EXT),C===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function S(A,g){let C;return A?g===null||g===Mn||g===ms?C=n.DEPTH24_STENCIL8:g===hn?C=n.DEPTH32F_STENCIL8:g===ps&&(C=n.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Mn||g===ms?C=n.DEPTH_COMPONENT24:g===hn?C=n.DEPTH_COMPONENT32F:g===ps&&(C=n.DEPTH_COMPONENT16),C}function b(A,g){return c(A)===!0||A.isFramebufferTexture&&A.minFilter!==Fe&&A.minFilter!==Be?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function P(A){let g=A.target;g.removeEventListener("dispose",P),T(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&f.delete(g)}function _(A){let g=A.target;g.removeEventListener("dispose",_),R(g)}function T(A){let g=i.get(A);if(g.__webglInit===void 0)return;let C=A.source,F=p.get(C);if(F){let H=F[g.__cacheKey];H.usedTimes--,H.usedTimes===0&&I(A),Object.keys(F).length===0&&p.delete(C)}i.remove(A)}function I(A){let g=i.get(A);n.deleteTexture(g.__webglTexture);let C=A.source,F=p.get(C);delete F[g.__cacheKey],a.memory.textures--}function R(A){let g=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(g.__webglFramebuffer[F]))for(let H=0;H<g.__webglFramebuffer[F].length;H++)n.deleteFramebuffer(g.__webglFramebuffer[F][H]);else n.deleteFramebuffer(g.__webglFramebuffer[F]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[F])}else{if(Array.isArray(g.__webglFramebuffer))for(let F=0;F<g.__webglFramebuffer.length;F++)n.deleteFramebuffer(g.__webglFramebuffer[F]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let F=0;F<g.__webglColorRenderbuffer.length;F++)g.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[F]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let C=A.textures;for(let F=0,H=C.length;F<H;F++){let Y=i.get(C[F]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(C[F])}i.remove(A)}let N=0;function z(){N=0}function L(){return N}function V(A){N=A}function $(){let A=N;return A>=s.maxTextures&&Pt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,A}function K(A){let g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function st(A,g){let C=i.get(A);if(A.isVideoTexture&&B(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&C.__version!==A.version){let F=A.image;if(F===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(C,A,g);return}}else A.isExternalTexture&&(C.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+g)}function Z(A,g){let C=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&C.__version!==A.version){mt(C,A,g);return}else A.isExternalTexture&&(C.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+g)}function et(A,g){let C=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&C.__version!==A.version){mt(C,A,g);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+g)}function nt(A,g){let C=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&C.__version!==A.version){It(C,A,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+g)}let wt={[ra]:n.REPEAT,[An]:n.CLAMP_TO_EDGE,[aa]:n.MIRRORED_REPEAT},vt={[Fe]:n.NEAREST,[ph]:n.NEAREST_MIPMAP_NEAREST,[dr]:n.NEAREST_MIPMAP_LINEAR,[Be]:n.LINEAR,[Pa]:n.LINEAR_MIPMAP_NEAREST,[gi]:n.LINEAR_MIPMAP_LINEAR},Kt={[xh]:n.NEVER,[bh]:n.ALWAYS,[vh]:n.LESS,[mo]:n.LEQUAL,[yh]:n.EQUAL,[go]:n.GEQUAL,[Mh]:n.GREATER,[Sh]:n.NOTEQUAL};function Bt(A,g){if(g.type===hn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Be||g.magFilter===Pa||g.magFilter===dr||g.magFilter===gi||g.minFilter===Be||g.minFilter===Pa||g.minFilter===dr||g.minFilter===gi)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,wt[g.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,wt[g.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,wt[g.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,vt[g.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,vt[g.minFilter]),g.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Kt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Fe||g.minFilter!==dr&&g.minFilter!==gi||g.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Jt(A,g){let C=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",P));let F=g.source,H=p.get(F);H===void 0&&(H={},p.set(F,H));let Y=K(g);if(Y!==A.__cacheKey){H[Y]===void 0&&(H[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,C=!0),H[Y].usedTimes++;let it=H[A.__cacheKey];it!==void 0&&(H[A.__cacheKey].usedTimes--,it.usedTimes===0&&I(g)),A.__cacheKey=Y,A.__webglTexture=H[Y].texture}return C}function Q(A,g,C){return Math.floor(Math.floor(A/C)/g)}function tt(A,g,C,F){let Y=A.updateRanges;if(Y.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,C,F,g.data);else{Y.sort((yt,lt)=>yt.start-lt.start);let it=0;for(let yt=1;yt<Y.length;yt++){let lt=Y[it],ot=Y[yt],bt=lt.start+lt.count,Rt=Q(ot.start,g.width,4),Ot=Q(lt.start,g.width,4);ot.start<=bt+1&&Rt===Ot&&Q(ot.start+ot.count-1,g.width,4)===Rt?lt.count=Math.max(lt.count,ot.start+ot.count-lt.start):(++it,Y[it]=ot)}Y.length=it+1;let X=e.getParameter(n.UNPACK_ROW_LENGTH),J=e.getParameter(n.UNPACK_SKIP_PIXELS),at=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let yt=0,lt=Y.length;yt<lt;yt++){let ot=Y[yt],bt=Math.floor(ot.start/4),Rt=Math.ceil(ot.count/4),Ot=bt%g.width,O=Math.floor(bt/g.width),ct=Rt,j=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(n.UNPACK_SKIP_ROWS,O),e.texSubImage2D(n.TEXTURE_2D,0,Ot,O,ct,j,C,F,g.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,X),e.pixelStorei(n.UNPACK_SKIP_PIXELS,J),e.pixelStorei(n.UNPACK_SKIP_ROWS,at)}}function mt(A,g,C){let F=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(F=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(F=n.TEXTURE_3D);let H=Jt(A,g),Y=g.source;e.bindTexture(F,A.__webglTexture,n.TEXTURE0+C);let it=i.get(Y);if(Y.version!==it.__version||H===!0){if(e.activeTexture(n.TEXTURE0+C),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let j=Yt.getPrimaries(Yt.workingColorSpace),ht=g.colorSpace===Zn?null:Yt.getPrimaries(g.colorSpace),pt=g.colorSpace===Zn||j===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let J=m(g.image,!1,s.maxTextureSize);J=Ne(g,J);let at=r.convert(g.format,g.colorSpace),yt=r.convert(g.type),lt=y(g.internalFormat,at,yt,g.normalized,g.colorSpace,g.isVideoTexture);Bt(F,g);let ot,bt=g.mipmaps,Rt=g.isVideoTexture!==!0,Ot=it.__version===void 0||H===!0,O=Y.dataReady,ct=b(g,J);if(g.isDepthTexture)lt=S(g.format===_i,g.type),Ot&&(Rt?e.texStorage2D(n.TEXTURE_2D,1,lt,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,lt,J.width,J.height,0,at,yt,null));else if(g.isDataTexture)if(bt.length>0){Rt&&Ot&&e.texStorage2D(n.TEXTURE_2D,ct,lt,bt[0].width,bt[0].height);for(let j=0,ht=bt.length;j<ht;j++)ot=bt[j],Rt?O&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ot.width,ot.height,at,yt,ot.data):e.texImage2D(n.TEXTURE_2D,j,lt,ot.width,ot.height,0,at,yt,ot.data);g.generateMipmaps=!1}else Rt?(Ot&&e.texStorage2D(n.TEXTURE_2D,ct,lt,J.width,J.height),O&&tt(g,J,at,yt)):e.texImage2D(n.TEXTURE_2D,0,lt,J.width,J.height,0,at,yt,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Rt&&Ot&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,lt,bt[0].width,bt[0].height,J.depth);for(let j=0,ht=bt.length;j<ht;j++)if(ot=bt[j],g.format!==un)if(at!==null)if(Rt){if(O)if(g.layerUpdates.size>0){let pt=Ul(ot.width,ot.height,g.format,g.type);for(let rt of g.layerUpdates){let At=ot.data.subarray(rt*pt/ot.data.BYTES_PER_ELEMENT,(rt+1)*pt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,rt,ot.width,ot.height,1,at,At)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ot.width,ot.height,J.depth,at,ot.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,lt,ot.width,ot.height,J.depth,0,ot.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ot.width,ot.height,J.depth,at,yt,ot.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,lt,ot.width,ot.height,J.depth,0,at,yt,ot.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Rt&&Ot&&e.texStorage2D(n.TEXTURE_2D,ct,lt,bt[0].width,bt[0].height);for(let j=0,ht=bt.length;j<ht;j++)ot=bt[j],g.format!==un?at!==null?Rt?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ot.width,ot.height,at,ot.data):e.compressedTexImage2D(n.TEXTURE_2D,j,lt,ot.width,ot.height,0,ot.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?O&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ot.width,ot.height,at,yt,ot.data):e.texImage2D(n.TEXTURE_2D,j,lt,ot.width,ot.height,0,at,yt,ot.data)}else if(g.isDataArrayTexture)if(Rt){if(Ot&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,lt,J.width,J.height,J.depth),O)if(g.layerUpdates.size>0){let j=Ul(J.width,J.height,g.format,g.type);for(let ht of g.layerUpdates){let pt=J.data.subarray(ht*j/J.data.BYTES_PER_ELEMENT,(ht+1)*j/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ht,J.width,J.height,1,at,yt,pt)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,at,yt,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,lt,J.width,J.height,J.depth,0,at,yt,J.data);else if(g.isData3DTexture)Rt?(Ot&&e.texStorage3D(n.TEXTURE_3D,ct,lt,J.width,J.height,J.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,at,yt,J.data)):e.texImage3D(n.TEXTURE_3D,0,lt,J.width,J.height,J.depth,0,at,yt,J.data);else if(g.isFramebufferTexture){if(Ot)if(Rt)e.texStorage2D(n.TEXTURE_2D,ct,lt,J.width,J.height);else{let j=J.width,ht=J.height;for(let pt=0;pt<ct;pt++)e.texImage2D(n.TEXTURE_2D,pt,lt,j,ht,0,at,yt,null),j>>=1,ht>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){let j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),J.parentNode!==j){j.appendChild(J),f.add(g),j.onpaint=ht=>{let pt=ht.changedElements;for(let rt of f)pt.includes(rt.image)&&(rt.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{let pt=n.RGBA,rt=n.RGBA,At=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,pt,rt,At,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(bt.length>0){if(Rt&&Ot){let j=Qt(bt[0]);e.texStorage2D(n.TEXTURE_2D,ct,lt,j.width,j.height)}for(let j=0,ht=bt.length;j<ht;j++)ot=bt[j],Rt?O&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,at,yt,ot):e.texImage2D(n.TEXTURE_2D,j,lt,at,yt,ot);g.generateMipmaps=!1}else if(Rt){if(Ot){let j=Qt(J);e.texStorage2D(n.TEXTURE_2D,ct,lt,j.width,j.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at,yt,J)}else e.texImage2D(n.TEXTURE_2D,0,lt,at,yt,J);c(g)&&v(F),it.__version=Y.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function It(A,g,C){if(g.image.length!==6)return;let F=Jt(A,g),H=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+C);let Y=i.get(H);if(H.version!==Y.__version||F===!0){e.activeTexture(n.TEXTURE0+C);let it=Yt.getPrimaries(Yt.workingColorSpace),X=g.colorSpace===Zn?null:Yt.getPrimaries(g.colorSpace),J=g.colorSpace===Zn||it===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let at=g.isCompressedTexture||g.image[0].isCompressedTexture,yt=g.image[0]&&g.image[0].isDataTexture,lt=[];for(let rt=0;rt<6;rt++)!at&&!yt?lt[rt]=m(g.image[rt],!0,s.maxCubemapSize):lt[rt]=yt?g.image[rt].image:g.image[rt],lt[rt]=Ne(g,lt[rt]);let ot=lt[0],bt=r.convert(g.format,g.colorSpace),Rt=r.convert(g.type),Ot=y(g.internalFormat,bt,Rt,g.normalized,g.colorSpace),O=g.isVideoTexture!==!0,ct=Y.__version===void 0||F===!0,j=H.dataReady,ht=b(g,ot);Bt(n.TEXTURE_CUBE_MAP,g);let pt;if(at){O&&ct&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,Ot,ot.width,ot.height);for(let rt=0;rt<6;rt++){pt=lt[rt].mipmaps;for(let At=0;At<pt.length;At++){let Et=pt[At];g.format!==un?bt!==null?O?j&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,At,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,At,Ot,Et.width,Et.height,0,Et.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,At,0,0,Et.width,Et.height,bt,Rt,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,At,Ot,Et.width,Et.height,0,bt,Rt,Et.data)}}}else{if(pt=g.mipmaps,O&&ct){pt.length>0&&ht++;let rt=Qt(lt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,Ot,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(yt){O?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,lt[rt].width,lt[rt].height,bt,Rt,lt[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ot,lt[rt].width,lt[rt].height,0,bt,Rt,lt[rt].data);for(let At=0;At<pt.length;At++){let le=pt[At].image[rt].image;O?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,At+1,0,0,le.width,le.height,bt,Rt,le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,At+1,Ot,le.width,le.height,0,bt,Rt,le.data)}}else{O?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,bt,Rt,lt[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ot,bt,Rt,lt[rt]);for(let At=0;At<pt.length;At++){let Et=pt[At];O?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,At+1,0,0,bt,Rt,Et.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,At+1,Ot,bt,Rt,Et.image[rt])}}}c(g)&&v(n.TEXTURE_CUBE_MAP),Y.__version=H.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function gt(A,g,C,F,H,Y){let it=r.convert(C.format,C.colorSpace),X=r.convert(C.type),J=y(C.internalFormat,it,X,C.normalized,C.colorSpace),at=i.get(g),yt=i.get(C);if(yt.__renderTarget=g,!at.__hasExternalTextures){let lt=Math.max(1,g.width>>Y),ot=Math.max(1,g.height>>Y);H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?e.texImage3D(H,Y,J,lt,ot,g.depth,0,it,X,null):e.texImage2D(H,Y,J,lt,ot,0,it,X,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,F,H,yt.__webglTexture,0,he(g)):(H===n.TEXTURE_2D||H>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,F,H,yt.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(A,g,C){if(n.bindRenderbuffer(n.RENDERBUFFER,A),g.depthBuffer){let F=g.depthTexture,H=F&&F.isDepthTexture?F.type:null,Y=S(g.stencilBuffer,H),it=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ve(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he(g),Y,g.width,g.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,he(g),Y,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Y,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,A)}else{let F=g.textures;for(let H=0;H<F.length;H++){let Y=F[H],it=r.convert(Y.format,Y.colorSpace),X=r.convert(Y.type),J=y(Y.internalFormat,it,X,Y.normalized,Y.colorSpace);ve(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he(g),J,g.width,g.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,he(g),J,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,J,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(A,g,C){let F=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let H=i.get(g.depthTexture);if(H.__renderTarget=g,(!H.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),F){if(H.__webglInit===void 0&&(H.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),H.__webglTexture===void 0){H.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Bt(n.TEXTURE_CUBE_MAP,g.depthTexture);let at=r.convert(g.depthTexture.format),yt=r.convert(g.depthTexture.type),lt;g.depthTexture.format===Rn?lt=n.DEPTH_COMPONENT24:g.depthTexture.format===_i&&(lt=n.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,lt,g.width,g.height,0,at,yt,null)}}else st(g.depthTexture,0);let Y=H.__webglTexture,it=he(g),X=F?n.TEXTURE_CUBE_MAP_POSITIVE_X+C:n.TEXTURE_2D,J=g.depthTexture.format===_i?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Rn)ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,X,Y,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,J,X,Y,0);else if(g.depthTexture.format===_i)ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,X,Y,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,J,X,Y,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Dt(A){let g=i.get(A),C=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){let F=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),F){let H=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,F.removeEventListener("dispose",H)};F.addEventListener("dispose",H),g.__depthDisposeCallback=H}g.__boundDepthTexture=F}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(C)for(let F=0;F<6;F++)Me(g.__webglFramebuffer[F],A,F);else{let F=A.texture.mipmaps;F&&F.length>0?Me(g.__webglFramebuffer[0],A,0):Me(g.__webglFramebuffer,A,0)}else if(C){g.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[F]),g.__webglDepthbuffer[F]===void 0)g.__webglDepthbuffer[F]=n.createRenderbuffer(),Ft(g.__webglDepthbuffer[F],A,!1);else{let H=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer[F];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,Y)}}else{let F=A.texture.mipmaps;if(F&&F.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Ft(g.__webglDepthbuffer,A,!1);else{let H=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,Y)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(A,g,C){let F=i.get(A);g!==void 0&&gt(F.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&Dt(A)}function ne(A){let g=A.texture,C=i.get(A),F=i.get(g);A.addEventListener("dispose",_);let H=A.textures,Y=A.isWebGLCubeRenderTarget===!0,it=H.length>1;if(it||(F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture()),F.__version=g.version,a.memory.textures++),Y){C.__webglFramebuffer=[];for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer[X]=[];for(let J=0;J<g.mipmaps.length;J++)C.__webglFramebuffer[X][J]=n.createFramebuffer()}else C.__webglFramebuffer[X]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer=[];for(let X=0;X<g.mipmaps.length;X++)C.__webglFramebuffer[X]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(it)for(let X=0,J=H.length;X<J;X++){let at=i.get(H[X]);at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&ve(A)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let X=0;X<H.length;X++){let J=H[X];C.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[X]);let at=r.convert(J.format,J.colorSpace),yt=r.convert(J.type),lt=y(J.internalFormat,at,yt,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),ot=he(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,lt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,C.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Ft(C.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture),Bt(n.TEXTURE_CUBE_MAP,g);for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)gt(C.__webglFramebuffer[X][J],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,J);else gt(C.__webglFramebuffer[X],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);c(g)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){for(let X=0,J=H.length;X<J;X++){let at=H[X],yt=i.get(at),lt=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,yt.__webglTexture),Bt(lt,at),gt(C.__webglFramebuffer,A,at,n.COLOR_ATTACHMENT0+X,lt,0),c(at)&&v(lt)}e.unbindTexture()}else{let X=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(X=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(X,F.__webglTexture),Bt(X,g),g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)gt(C.__webglFramebuffer[J],A,g,n.COLOR_ATTACHMENT0,X,J);else gt(C.__webglFramebuffer,A,g,n.COLOR_ATTACHMENT0,X,0);c(g)&&v(X),e.unbindTexture()}A.depthBuffer&&Dt(A)}function Gt(A){let g=A.textures;for(let C=0,F=g.length;C<F;C++){let H=g[C];if(c(H)){let Y=w(A),it=i.get(H).__webglTexture;e.bindTexture(Y,it),v(Y),e.unbindTexture()}}}let oe=[],Se=[];function ze(A){if(A.samples>0){if(ve(A)===!1){let g=A.textures,C=A.width,F=A.height,H=n.COLOR_BUFFER_BIT,Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=i.get(A),X=g.length>1;if(X)for(let at=0;at<g.length;at++)e.bindFramebuffer(n.FRAMEBUFFER,it.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,it.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer);let J=A.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,it.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let at=0;at<g.length;at++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(H|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(H|=n.STENCIL_BUFFER_BIT)),X){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,it.__webglColorRenderbuffer[at]);let yt=i.get(g[at]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,yt,0)}n.blitFramebuffer(0,0,C,F,0,0,C,F,H,n.NEAREST),l===!0&&(oe.length=0,Se.length=0,oe.push(n.COLOR_ATTACHMENT0+at),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(oe.push(Y),Se.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Se)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let at=0;at<g.length;at++){e.bindFramebuffer(n.FRAMEBUFFER,it.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,it.__webglColorRenderbuffer[at]);let yt=i.get(g[at]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,it.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let g=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function he(A){return Math.min(s.maxSamples,A.samples)}function ve(A){let g=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function B(A){let g=a.render.frame;d.get(A)!==g&&(d.set(A,g),A.update())}function Ne(A,g){let C=A.colorSpace,F=A.format,H=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||C!==Hs&&C!==Zn&&(Yt.getTransfer(C)===ee?(F!==un||H!==Qe)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",C)),g}function Qt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=V,this.setTexture2D=st,this.setTexture2DArray=Z,this.setTexture3D=et,this.setTextureCube=nt,this.rebindTextures=Wt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function A0(n,t){function e(i,s=Zn){let r,a=Yt.getTransfer(s);if(i===Qe)return n.UNSIGNED_BYTE;if(i===La)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Da)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===bl)return n.BYTE;if(i===El)return n.SHORT;if(i===ps)return n.UNSIGNED_SHORT;if(i===Ia)return n.INT;if(i===Mn)return n.UNSIGNED_INT;if(i===hn)return n.FLOAT;if(i===Sn)return n.HALF_FLOAT;if(i===Al)return n.ALPHA;if(i===Rl)return n.RGB;if(i===un)return n.RGBA;if(i===Rn)return n.DEPTH_COMPONENT;if(i===_i)return n.DEPTH_STENCIL;if(i===Na)return n.RED;if(i===Ua)return n.RED_INTEGER;if(i===xi)return n.RG;if(i===Fa)return n.RG_INTEGER;if(i===Oa)return n.RGBA_INTEGER;if(i===fr||i===pr||i===mr||i===gr)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ba||i===za||i===ka||i===Va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ha||i===Ga||i===Wa||i===Xa||i===qa||i===_r||i===Ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ha||i===Ga)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xa)return r.COMPRESSED_R11_EAC;if(i===qa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===_r)return r.COMPRESSED_RG11_EAC;if(i===Ya)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Za||i===Ja||i===$a||i===Ka||i===Qa||i===ja||i===to||i===eo||i===no||i===io||i===so||i===ro||i===ao||i===oo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Za)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ja)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$a)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ka)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ja)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===to)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===no)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===io)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===so)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ro)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ao)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lo||i===co||i===ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===lo)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uo||i===fo||i===xr||i===po)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===uo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var R0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new er(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ze({vertexShader:R0,fragmentShader:C0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new Un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$l=class extends Cn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,h=null,d=null,f=null,u=null,p=null,x=null,E=typeof XRWebGLBinding<"u",m=new Jl,c={},v=e.getContextAttributes(),w=null,y=null,S=[],b=[],P=new qt,_=null,T=null,I=new Oe;I.viewport=new pe;let R=new Oe;R.viewport=new pe;let N=[I,R],z=new wa,L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let tt=S[Q];return tt===void 0&&(tt=new rs,S[Q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Q){let tt=S[Q];return tt===void 0&&(tt=new rs,S[Q]=tt),tt.getGripSpace()},this.getHand=function(Q){let tt=S[Q];return tt===void 0&&(tt=new rs,S[Q]=tt),tt.getHandSpace()};function $(Q){let tt=b.indexOf(Q.inputSource);if(tt===-1)return;let mt=S[tt];mt!==void 0&&(mt.update(Q.inputSource,Q.frame,h||a),mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function K(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",st);for(let Q=0;Q<S.length;Q++){let tt=b[Q];tt!==null&&(b[Q]=null,S[Q].disconnect(tt))}L=null,V=null,m.reset();for(let Q in c)delete c[Q];if(t.setRenderTarget(w),p=null,u=null,f=null,s=null,y=null,Jt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(P.width,P.height,!1),T!==null){let Q=T.camera;Q.fov=T.fov,Q.zoom=T.zoom,Q.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&E&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",K),s.addEventListener("inputsourceschange",st),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,It=null,gt=null;v.depth&&(gt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=v.stencil?_i:Rn,It=v.stencil?ms:Mn);let Ft={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ft),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new $e(u.textureWidth,u.textureHeight,{format:un,type:Qe,depthTexture:new oi(u.textureWidth,u.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let mt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new $e(p.framebufferWidth,p.framebufferHeight,{format:un,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(Q){for(let tt=0;tt<Q.removed.length;tt++){let mt=Q.removed[tt],It=b.indexOf(mt);It>=0&&(b[It]=null,S[It].disconnect(mt))}for(let tt=0;tt<Q.added.length;tt++){let mt=Q.added[tt],It=b.indexOf(mt);if(It===-1){for(let Ft=0;Ft<S.length;Ft++)if(Ft>=b.length){b.push(mt),It=Ft;break}else if(b[Ft]===null){b[Ft]=mt,It=Ft;break}if(It===-1)break}let gt=S[It];gt&&gt.connect(mt)}}let Z=new k,et=new k;function nt(Q,tt,mt){Z.setFromMatrixPosition(tt.matrixWorld),et.setFromMatrixPosition(mt.matrixWorld);let It=Z.distanceTo(et),gt=tt.projectionMatrix.elements,Ft=mt.projectionMatrix.elements,Me=gt[14]/(gt[10]-1),Dt=gt[14]/(gt[10]+1),Wt=(gt[9]+1)/gt[5],ne=(gt[9]-1)/gt[5],Gt=(gt[8]-1)/gt[0],oe=(Ft[8]+1)/Ft[0],Se=Me*Gt,ze=Me*oe,he=It/(-Gt+oe),ve=he*-Gt;if(tt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ve),Q.translateZ(he),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),gt[10]===-1)Q.projectionMatrix.copy(tt.projectionMatrix),Q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let B=Me+he,Ne=Dt+he,Qt=Se-ve,A=ze+(It-ve),g=Wt*Dt/Ne*B,C=ne*Dt/Ne*B;Q.projectionMatrix.makePerspective(Qt,A,g,C,B,Ne),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function wt(Q,tt){tt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(tt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let tt=Q.near,mt=Q.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),z.near=R.near=I.near=tt,z.far=R.far=I.far=mt,(L!==z.near||V!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,V=z.far),z.layers.mask=Q.layers.mask|6,I.layers.mask=z.layers.mask&-5,R.layers.mask=z.layers.mask&-3;let It=Q.parent,gt=z.cameras;wt(z,It);for(let Ft=0;Ft<gt.length;Ft++)wt(gt[Ft],It);gt.length===2?nt(z,I,R):z.projectionMatrix.copy(I.projectionMatrix),T===null&&Q.isPerspectiveCamera&&(T={camera:Q,fov:Q.fov,zoom:Q.zoom}),vt(Q,z,It)};function vt(Q,tt,mt){mt===null?Q.matrix.copy(tt.matrixWorld):(Q.matrix.copy(mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(tt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(tt.projectionMatrix),Q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=is*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Q){return c[Q]};let Kt=null;function Bt(Q,tt){if(d=tt.getViewerPose(h||a),x=tt,d!==null){let mt=d.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let It=!1;mt.length!==z.cameras.length&&(z.cameras.length=0,It=!0);for(let Dt=0;Dt<mt.length;Dt++){let Wt=mt[Dt],ne=null;if(p!==null)ne=p.getViewport(Wt);else{let oe=f.getViewSubImage(u,Wt);ne=oe.viewport,Dt===0&&(t.setRenderTargetTextures(y,oe.colorTexture,oe.depthStencilTexture),t.setRenderTarget(y))}let Gt=N[Dt];Gt===void 0&&(Gt=new Oe,Gt.layers.enable(Dt),Gt.viewport=new pe,N[Dt]=Gt),Gt.matrix.fromArray(Wt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Wt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ne.x,ne.y,ne.width,ne.height),Dt===0&&(z.matrix.copy(Gt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),It===!0&&z.cameras.push(Gt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){f=i.getBinding();let Dt=f.getDepthInformation(mt[0]);Dt&&Dt.isValid&&Dt.texture&&m.init(Dt,s.renderState)}if(gt&&gt.includes("camera-access")&&E){t.state.unbindTexture(),f=i.getBinding();for(let Dt=0;Dt<mt.length;Dt++){let Wt=mt[Dt].camera;if(Wt){let ne=c[Wt];ne||(ne=new er,c[Wt]=ne);let Gt=f.getCameraImage(Wt);ne.sourceTexture=Gt}}}}for(let mt=0;mt<S.length;mt++){let It=b[mt],gt=S[mt];It!==null&&gt!==void 0&&gt.update(It,tt,h||a)}Kt&&Kt(Q,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),x=null}let Jt=new tu;Jt.setAnimationLoop(Bt),this.setAnimationLoop=function(Q){Kt=Q},this.dispose=function(){}}},P0=new ae,au=new Nt;au.set(-1,0,0,0,1,0,0,0,1);function I0(n,t){function e(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,Ll(n)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function s(m,c,v,w,y){c.isNodeMaterial?c.uniformsNeedUpdate=!1:c.isMeshBasicMaterial?r(m,c):c.isMeshLambertMaterial?(r(m,c),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)):c.isMeshToonMaterial?(r(m,c),f(m,c)):c.isMeshPhongMaterial?(r(m,c),d(m,c),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)):c.isMeshStandardMaterial?(r(m,c),u(m,c),c.isMeshPhysicalMaterial&&p(m,c,y)):c.isMeshMatcapMaterial?(r(m,c),x(m,c)):c.isMeshDepthMaterial?r(m,c):c.isMeshDistanceMaterial?(r(m,c),E(m,c)):c.isMeshNormalMaterial?r(m,c):c.isLineBasicMaterial?(a(m,c),c.isLineDashedMaterial&&o(m,c)):c.isPointsMaterial?l(m,c,v,w):c.isSpriteMaterial?h(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,e(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,e(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,e(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===Ie&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,e(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===Ie&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,e(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,e(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,e(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);let v=t.get(c),w=v.envMap,y=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(P0.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(au),m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,e(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,e(c.aoMap,m.aoMapTransform))}function a(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,e(c.map,m.mapTransform))}function o(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,v,w){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*v,m.scale.value=w*.5,c.map&&(m.map.value=c.map,e(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,e(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function h(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,e(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,e(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function d(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function f(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function u(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,v){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Ie&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.retroreflectivity>0&&(m.retroreflectivity.value=c.retroreflectivity),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,c){c.matcap&&(m.matcap.value=c.matcap)}function E(m,c){let v=t.get(c).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function L0(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let b=S.program;i.uniformBlockBinding(y,b)}function h(y,S){let b=s[y.id];b===void 0&&(m(y),b=d(y),s[y.id]=b,y.addEventListener("dispose",v));let P=S.program;i.updateUBOMapping(y,P);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function d(y){let S=f();y.__bindingPointIndex=S;let b=n.createBuffer(),P=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,P,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=s[y.id],b=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let _=0,T=b.length;_<T;_++){let I=b[_];if(Array.isArray(I))for(let R=0,N=I.length;R<N;R++)p(I[R],_,R,P);else p(I,_,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,S,b,P){if(E(y,S,b,P)===!0){let _=y.__offset,T=y.value;if(Array.isArray(T)){let I=0;for(let R=0;R<T.length;R++){let N=T[R],z=c(N);x(N,y.__data,I),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(I+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(T,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function x(y,S,b){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,b)}function E(y,S,b,P){let _=y.value,T=S+"_"+b;if(P[T]===void 0)return typeof _=="number"||typeof _=="boolean"?P[T]=_:ArrayBuffer.isView(_)?P[T]=_.slice():P[T]=_.clone(),!0;{let I=P[T];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return P[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function m(y){let S=y.uniforms,b=0,P=16;for(let T=0,I=S.length;T<I;T++){let R=Array.isArray(S[T])?S[T]:[S[T]];for(let N=0,z=R.length;N<z;N++){let L=R[N],V=Array.isArray(L.value)?L.value:[L.value];for(let $=0,K=V.length;$<K;$++){let st=V[$],Z=c(st),et=b%P,nt=et%Z.boundary,wt=et+nt;b+=nt,wt!==0&&P-wt<Z.storage&&(b+=P-wt),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=Z.storage}}}let _=b%P;return _>0&&(b+=P-_),y.__size=b,y.__cache={},this}function c(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",y),S}function v(y){let S=y.target;S.removeEventListener("dispose",v);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function w(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:h,dispose:w}}var D0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function N0(){return Bn===null&&(Bn=new Ks(D0,16,16,xi,Sn),Bn.name="DFG_LUT",Bn.minFilter=Be,Bn.magFilter=Be,Bn.wrapS=An,Bn.wrapT=An,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}var Mo=class{constructor(t={}){let{canvas:e=Th(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Qe}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let E=p,m=new Set([Oa,Fa,Ua]),c=new Set([Qe,Mn,ps,ms,La,Da]),v=new Uint32Array(4),w=new Int32Array(4),y=new k,S=null,b=null,P=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,R=!1,N=null,z=null,L=null,V=null;this._outputColorSpace=Pe;let $=0,K=0,st=null,Z=-1,et=null,nt=new pe,wt=new pe,vt=null,Kt=new Ct(0),Bt=0,Jt=e.width,Q=e.height,tt=1,mt=null,It=null,gt=new pe(0,0,Jt,Q),Ft=new pe(0,0,Jt,Q),Me=!1,Dt=new as,Wt=!1,ne=!1,Gt=new ae,oe=new k,Se=new pe,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function ve(){return st===null?tt:1}let B=i;function Ne(M,U){return e.getContext(M,U)}let Qt,A,g,C,F,H,Y,it,X,J,at,yt,lt,ot,bt,Rt,Ot,O,ct,j,ht,pt,rt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",le,!1),e.addEventListener("webglcontextrestored",jt,!1),e.addEventListener("webglcontextcreationerror",pn,!1),B===null){let U="webgl2";if(B=Ne(U,M),B===null)throw Ne(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(M){throw e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),Lt("WebGLRenderer: "+M.message),M}function At(){Qt=new Vm(B),Qt.init(),ht=new A0(B,Qt),A=new Im(B,Qt,t,ht),g=new T0(B,Qt),A.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),z=B.createFramebuffer(),L=B.createFramebuffer(),V=B.createFramebuffer(),C=new Wm(B),F=new u0,H=new w0(B,Qt,g,F,A,ht,C),Y=new km(I),it=new Xd(B),pt=new Cm(B,it),X=new Hm(B,it,C,pt),J=new qm(B,X,it,pt,C),O=new Xm(B,A,H),bt=new Lm(F),at=new h0(I,Y,Qt,A,pt,bt),yt=new I0(I,F),lt=new f0,ot=new v0(Qt),Ot=new Rm(I,Y,g,J,x,l),Rt=new E0(I,J,A),rt=new L0(B,C,A,g),ct=new Pm(B,Qt,C),j=new Gm(B,Qt,C),C.programs=at.programs,I.capabilities=A,I.extensions=Qt,I.properties=F,I.renderLists=lt,I.shadowMap=Rt,I.state=g,I.info=C}E!==Qe&&(T=new Zm(E,e.width,e.height,o,s,r));let Et=new $l(I,B);this.xr=Et,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=Qt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Qt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(M){M!==void 0&&(tt=M,this.setSize(Jt,Q,!1))},this.getSize=function(M){return M.set(Jt,Q)},this.setSize=function(M,U,q=!0){if(Et.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}Jt=M,Q=U,e.width=Math.floor(M*tt),e.height=Math.floor(U*tt),q===!0&&(e.style.width=M+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Jt*tt,Q*tt).floor()},this.setDrawingBufferSize=function(M,U,q){Jt=M,Q=U,tt=q,e.width=Math.floor(M*q),e.height=Math.floor(U*q),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(E===Qe){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(nt)},this.getViewport=function(M){return M.copy(gt)},this.setViewport=function(M,U,q,G){M.isVector4?gt.set(M.x,M.y,M.z,M.w):gt.set(M,U,q,G),g.viewport(nt.copy(gt).multiplyScalar(tt).round())},this.getScissor=function(M){return M.copy(Ft)},this.setScissor=function(M,U,q,G){M.isVector4?Ft.set(M.x,M.y,M.z,M.w):Ft.set(M,U,q,G),g.scissor(wt.copy(Ft).multiplyScalar(tt).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(M){g.setScissorTest(Me=M)},this.setOpaqueSort=function(M){mt=M},this.setTransparentSort=function(M){It=M},this.getClearColor=function(M){return M.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,q=!0){let G=0;if(M){let W=!1;if(st!==null){let ft=st.texture.format;W=m.has(ft)}if(W){let ft=st.texture.type,xt=c.has(ft),dt=Ot.getClearColor(),Mt=Ot.getClearAlpha(),Tt=dt.r,kt=dt.g,Xt=dt.b;xt?(v[0]=Tt,v[1]=kt,v[2]=Xt,v[3]=Mt,B.clearBufferuiv(B.COLOR,0,v)):(w[0]=Tt,w[1]=kt,w[2]=Xt,w[3]=Mt,B.clearBufferiv(B.COLOR,0,w))}else G|=B.COLOR_BUFFER_BIT}U&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),N=M},this.dispose=function(){e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),Ot.dispose(),lt.dispose(),ot.dispose(),F.dispose(),Y.dispose(),J.dispose(),pt.dispose(),rt.dispose(),at.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",hc),Et.removeEventListener("sessionend",uc),Si.stop()};function le(M){M.preventDefault(),Pl("WebGLRenderer: Context Lost."),R=!0}function jt(){Pl("WebGLRenderer: Context Restored."),R=!1;let M=C.autoReset,U=Rt.enabled,q=Rt.autoUpdate,G=Rt.needsUpdate,W=Rt.type;At(),C.autoReset=M,Rt.enabled=U,Rt.autoUpdate=q,Rt.needsUpdate=G,Rt.type=W}function pn(M){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function En(M){let U=M.target;U.removeEventListener("dispose",En),ku(U)}function ku(M){Vu(M),F.remove(M)}function Vu(M){let U=F.get(M).programs;U!==void 0&&(U.forEach(function(q){at.releaseProgram(q)}),M.isShaderMaterial&&at.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,q,G,W,ft){U===null&&(U=ze);let xt=W.isMesh&&W.matrixWorld.determinantAffine()<0,dt=Wu(M,U,q,G,W);g.setMaterial(G,xt);let Mt=q.index,Tt=1;if(G.wireframe===!0){if(Mt=X.getWireframeAttribute(q),Mt===void 0)return;Tt=2}let kt=q.drawRange,Xt=q.attributes.position,St=kt.start*Tt,te=(kt.start+kt.count)*Tt;ft!==null&&(St=Math.max(St,ft.start*Tt),te=Math.min(te,(ft.start+ft.count)*Tt)),Mt!==null?(St=Math.max(St,0),te=Math.min(te,Mt.count)):Xt!=null&&(St=Math.max(St,0),te=Math.min(te,Xt.count));let we=te-St;if(we<0||we===1/0)return;pt.setup(W,G,dt,q,Mt);let ue,se=ct;if(Mt!==null&&(ue=it.get(Mt),se=j,se.setIndex(ue)),W.isMesh)G.wireframe===!0?(g.setLineWidth(G.wireframeLinewidth*ve()),se.setMode(B.LINES)):se.setMode(B.TRIANGLES);else if(W.isLine){let ke=G.linewidth;ke===void 0&&(ke=1),g.setLineWidth(ke*ve()),W.isLineSegments?se.setMode(B.LINES):W.isLineLoop?se.setMode(B.LINE_LOOP):se.setMode(B.LINE_STRIP)}else W.isPoints?se.setMode(B.POINTS):W.isSprite&&se.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))se.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ke=W._multiDrawStarts,_t=W._multiDrawCounts,Xe=W._multiDrawCount,$t=Mt?it.get(Mt).bytesPerElement:1,on=F.get(G).currentProgram.getUniforms();for(let Tn=0;Tn<Xe;Tn++)on.setValue(B,"_gl_DrawID",Tn),se.render(ke[Tn]/$t,_t[Tn])}else if(W.isInstancedMesh)se.renderInstances(St,we,W.count);else if(q.isInstancedBufferGeometry){let ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,_t=Math.min(q.instanceCount,ke);se.renderInstances(St,we,_t)}else se.render(St,we)};function cc(M,U,q,G){N!==null&&M.isNodeMaterial&&N.setObject(G,M),Wt===!0&&bt.setState(M,q,!1),M.transparent===!0&&M.side===cn&&M.forceSinglePass===!1?(M.side=Ie,M.needsUpdate=!0,Ar(M,U,G),M.side=fi,M.needsUpdate=!0,Ar(M,U,G),M.side=cn):Ar(M,U,G)}this.compile=function(M,U,q=null){q===null&&(q=M),N!==null&&N.renderStart(M,U,q),b=ot.get(q),b.init(U),_.push(b),q.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),M!==q&&M.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),ne=this.localClippingEnabled,Wt=bt.init(this.clippingPlanes,ne),Wt===!0&&bt.setGlobalState(this.clippingPlanes,U),N!==null&&Rt.render(b.state.shadowsArray,q,U);let G=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ft=W.material;if(ft)if(Array.isArray(ft))for(let xt=0;xt<ft.length;xt++){let dt=ft[xt];cc(dt,q,U,W),G.add(dt)}else cc(ft,q,U,W),G.add(ft)}),b=_.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(M,U,q=null){let G=this.compile(M,U,q);return new Promise(W=>{function ft(){if(G.forEach(function(xt){let Mt=F.get(xt).currentProgram;(Mt===void 0||Mt.isReady())&&G.delete(xt)}),G.size===0){W(M);return}setTimeout(ft,10)}Qt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Do=null;function Hu(M){Do&&Do(M)}function hc(){Si.stop()}function uc(){Si.start()}let Si=new tu;Si.setAnimationLoop(Hu),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(M){Do=M,Et.setAnimationLoop(M),M===null?Si.stop():Si.start()},Et.addEventListener("sessionstart",hc),Et.addEventListener("sessionend",uc),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;N!==null&&N.renderStart(M,U);let q=Et.enabled===!0&&Et.isPresenting===!0,G=T!==null&&(st===null||q)&&T.begin(I,st);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(U),U=Et.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,U,st),b=ot.get(M,_.length),b.init(U),b.state.textureUnits=H.getTextureUnits(),_.push(b),Gt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Dt.setFromProjectionMatrix(Gt,vn,U.reversedDepth),ne=this.localClippingEnabled,Wt=bt.init(this.clippingPlanes,ne),S=lt.get(M,P.length),S.init(),P.push(S),Et.enabled===!0&&Et.isPresenting===!0){let xt=I.xr.getDepthSensingMesh();xt!==null&&No(xt,U,-1/0,I.sortObjects)}No(M,U,0,I.sortObjects),S.finish(),N!==null&&N.updateLights(b.state.lightsArray),I.sortObjects===!0&&S.sort(mt,It),he=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,he&&Ot.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Wt===!0&&bt.beginShadows();let W=b.state.shadowsArray;if(Rt.render(W,M,U),Wt===!0&&bt.endShadows(),(G&&T.hasRenderPass())===!1){let xt=S.opaque,dt=S.transmissive;if(b.setupLights(),U.isArrayCamera){let Mt=U.cameras;if(dt.length>0)for(let Tt=0,kt=Mt.length;Tt<kt;Tt++){let Xt=Mt[Tt];fc(xt,dt,M,Xt)}he&&Ot.render(M);for(let Tt=0,kt=Mt.length;Tt<kt;Tt++){let Xt=Mt[Tt];dc(S,M,Xt,Xt.viewport)}}else dt.length>0&&fc(xt,dt,M,U),he&&Ot.render(M),dc(S,M,U)}st!==null&&K===0&&(H.updateMultisampleRenderTarget(st),H.updateRenderTargetMipmap(st)),G&&T.end(I),M.isScene===!0&&M.onAfterRender(I,M,U),pt.resetDefaultState(),Z=-1,et=null,_.pop(),_.length>0?(b=_[_.length-1],H.setTextureUnits(b.state.textureUnits),Wt===!0&&bt.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,P.pop(),P.length>0?S=P[P.length-1]:S=null,N!==null&&N.renderEnd()};function No(M,U,q,G){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Dt)){G&&Se.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Gt);let xt=J.update(M),dt=M.material;dt.visible&&S.push(M,xt,dt,q,Se.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Dt))){let xt=J.update(M),dt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Se.copy(M.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Se.copy(xt.boundingSphere.center)),Se.applyMatrix4(M.matrixWorld).applyMatrix4(Gt)),Array.isArray(dt)){let Mt=xt.groups;for(let Tt=0,kt=Mt.length;Tt<kt;Tt++){let Xt=Mt[Tt],St=dt[Xt.materialIndex];St&&St.visible&&S.push(M,xt,St,q,Se.z,Xt,U)}}else dt.visible&&S.push(M,xt,dt,q,Se.z,null,U)}}let ft=M.children;for(let xt=0,dt=ft.length;xt<dt;xt++)No(ft[xt],U,q,G)}function dc(M,U,q,G){let{opaque:W,transmissive:ft,transparent:xt}=M;b.setupLightsView(q),Wt===!0&&bt.setGlobalState(I.clippingPlanes,q),G&&g.viewport(nt.copy(G)),W.length>0&&wr(W,U,q),ft.length>0&&wr(ft,U,q),xt.length>0&&wr(xt,U,q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function fc(M,U,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let St=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new $e(1,1,{generateMipmaps:!0,type:St?Sn:Qe,minFilter:gi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let ft=b.state.transmissionRenderTarget[G.id],xt=G.viewport||nt;ft.setSize(xt.z*I.transmissionResolutionScale,xt.w*I.transmissionResolutionScale);let dt=I.getRenderTarget(),Mt=I.getActiveCubeFace(),Tt=I.getActiveMipmapLevel();I.setRenderTarget(ft),I.getClearColor(Kt),Bt=I.getClearAlpha(),Bt<1&&I.setClearColor(16777215,.5),I.clear(),he&&Ot.render(q);let kt=I.toneMapping;I.toneMapping=yn;let Xt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),Wt===!0&&bt.setGlobalState(I.clippingPlanes,G),wr(M,q,G),H.updateMultisampleRenderTarget(ft),H.updateRenderTargetMipmap(ft),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let te=0,we=U.length;te<we;te++){let ue=U[te],{object:se,geometry:ke,material:_t,group:Xe}=ue;if(_t.side===cn&&se.layers.test(G.layers)){let $t=_t.side;_t.side=Ie,_t.needsUpdate=!0,pc(se,q,G,ke,_t,Xe),_t.side=$t,_t.needsUpdate=!0,St=!0}}St===!0&&(H.updateMultisampleRenderTarget(ft),H.updateRenderTargetMipmap(ft))}I.setRenderTarget(dt,Mt,Tt),I.setClearColor(Kt,Bt),Xt!==void 0&&(G.viewport=Xt),I.toneMapping=kt}function wr(M,U,q){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,ft=M.length;W<ft;W++){let xt=M[W],{object:dt,geometry:Mt,group:Tt}=xt,kt=xt.material;kt.allowOverride===!0&&G!==null&&(kt=G),dt.layers.test(q.layers)&&pc(dt,U,q,Mt,kt,Tt)}}function pc(M,U,q,G,W,ft){N!==null&&W.isNodeMaterial&&N.setObject(M,W),M.onBeforeRender(I,U,q,G,W,ft),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(I,U,q,G,M,ft),W.transparent===!0&&W.side===cn&&W.forceSinglePass===!1?(W.side=Ie,W.needsUpdate=!0,I.renderBufferDirect(q,U,G,W,M,ft),W.side=fi,W.needsUpdate=!0,I.renderBufferDirect(q,U,G,W,M,ft),W.side=cn):I.renderBufferDirect(q,U,G,W,M,ft),M.onAfterRender(I,U,q,G,W,ft)}function Ar(M,U,q){U.isScene!==!0&&(U=ze);let G=F.get(M),W=b.state.lights,ft=b.state.shadowsArray,xt=W.state.version,dt=at.getParameters(M,W.state,ft,U,q,b.state.lightProbeGridArray),Mt=at.getProgramCacheKey(dt),Tt=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let kt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=Y.get(M.envMap||G.environment,kt),G.envMapRotation=G.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Tt===void 0&&(M.addEventListener("dispose",En),Tt=new Map,G.programs=Tt);let Xt=Tt.get(Mt);if(Xt!==void 0){if(G.currentProgram===Xt&&G.lightsStateVersion===xt)return gc(M,dt),Xt}else dt.uniforms=at.getUniforms(M),N!==null&&M.isNodeMaterial&&N.build(M,q,dt),M.onBeforeCompile(dt,I),Xt=at.acquireProgram(dt,Mt),Tt.set(Mt,Xt),G.uniforms=dt.uniforms;let St=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(St.clippingPlanes=bt.uniform),gc(M,dt),G.needsLights=qu(M),G.lightsStateVersion=xt,G.needsLights&&(St.ambientLightColor.value=W.state.ambient,St.lightProbe.value=W.state.probe,St.sunLights.value=W.state.sun,St.sunLightShadows.value=W.state.sunShadow,St.directionalLights.value=W.state.directional,St.directionalLightShadows.value=W.state.directionalShadow,St.spotLights.value=W.state.spot,St.spotLightShadows.value=W.state.spotShadow,St.rectAreaLights.value=W.state.rectArea,St.ltc_1.value=W.state.rectAreaLTC1,St.ltc_2.value=W.state.rectAreaLTC2,St.pointLights.value=W.state.point,St.pointLightShadows.value=W.state.pointShadow,St.hemisphereLights.value=W.state.hemi,St.sunShadowMatrix.value=W.state.sunShadowMatrix,St.sunShadowCascade.value=W.state.sunShadowCascade,St.directionalShadowMatrix.value=W.state.directionalShadowMatrix,St.spotLightMatrix.value=W.state.spotLightMatrix,St.spotLightMap.value=W.state.spotLightMap,St.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=Xt,G.uniformsList=null,Xt}function mc(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=vs.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function gc(M,U){let q=F.get(M);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Gu(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let q=0,G=M.length;q<G;q++){let W=M[q];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function Wu(M,U,q,G,W){U.isScene!==!0&&(U=ze),H.resetTextureUnits();let ft=U.fog,xt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,dt=st===null?I.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Yt.workingColorSpace,Mt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Tt=Y.get(G.envMap||xt,Mt),kt=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xt=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),St=!!q.morphAttributes.position,te=!!q.morphAttributes.normal,we=!!q.morphAttributes.color,ue=yn;G.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ue=I.toneMapping);let se=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ke=se!==void 0?se.length:0,_t=F.get(G),Xe=b.state.lights;if(Wt===!0&&(ne===!0||M!==et)){let ce=M===et&&G.id===Z;bt.setState(G,M,ce)}let $t=!1;G.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==Xe.state.version||_t.outputColorSpace!==dt||W.isBatchedMesh&&_t.batching===!1||!W.isBatchedMesh&&_t.batching===!0||W.isBatchedMesh&&_t.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&_t.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&_t.instancing===!1||!W.isInstancedMesh&&_t.instancing===!0||W.isSkinnedMesh&&_t.skinning===!1||!W.isSkinnedMesh&&_t.skinning===!0||W.isInstancedMesh&&_t.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&_t.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&_t.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&_t.instancingMorph===!1&&W.morphTexture!==null||_t.envMap!==Tt||G.fog===!0&&_t.fog!==ft||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==bt.numPlanes||_t.numIntersection!==bt.numIntersection)||_t.vertexAlphas!==kt||_t.vertexTangents!==Xt||_t.morphTargets!==St||_t.morphNormals!==te||_t.morphColors!==we||_t.toneMapping!==ue||_t.morphTargetsCount!==ke||!!_t.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&($t=!0):($t=!0,_t.__version=G.version);let on=_t.currentProgram;$t===!0&&(on=Ar(G,U,W),N&&G.isNodeMaterial&&N.onUpdateProgram(G,on,_t));let Tn=!1,Qn=!1,Fi=!1,ie=on.getUniforms(),be=_t.uniforms;if(g.useProgram(on.program)&&(Tn=!0,Qn=!0,Fi=!0),G.id!==Z&&(Z=G.id,Qn=!0),_t.needsLights){let ce=Gu(b.state.lightProbeGridArray,W);_t.lightProbeGrid!==ce&&(_t.lightProbeGrid=ce,Qn=!0)}if(Tn||et!==M){g.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ie.setValue(B,"projectionMatrix",M.projectionMatrix),ie.setValue(B,"viewMatrix",M.matrixWorldInverse);let ti=ie.map.cameraPosition;ti!==void 0&&ti.setValue(B,oe.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&ie.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ie.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),et!==M&&(et=M,Qn=!0,Fi=!0)}if(_t.needsLights&&(Xe.state.sunShadowMap.length>0&&ie.setValue(B,"sunShadowMap",Xe.state.sunShadowMap,H),Xe.state.directionalShadowMap.length>0&&ie.setValue(B,"directionalShadowMap",Xe.state.directionalShadowMap,H),Xe.state.spotShadowMap.length>0&&ie.setValue(B,"spotShadowMap",Xe.state.spotShadowMap,H),Xe.state.pointShadowMap.length>0&&ie.setValue(B,"pointShadowMap",Xe.state.pointShadowMap,H)),W.isSkinnedMesh){ie.setOptional(B,W,"bindMatrix"),ie.setOptional(B,W,"bindMatrixInverse");let ce=W.skeleton;ce&&(ce.boneTexture===null&&ce.computeBoneTexture(),ie.setValue(B,"boneTexture",ce.boneTexture,H))}W.isBatchedMesh&&(ie.setOptional(B,W,"batchingTexture"),ie.setValue(B,"batchingTexture",W._matricesTexture,H),ie.setOptional(B,W,"batchingIdTexture"),ie.setValue(B,"batchingIdTexture",W._indirectTexture,H),ie.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&ie.setValue(B,"batchingColorTexture",W._colorsTexture,H));let jn=q.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&O.update(W,q,on),(Qn||_t.receiveShadow!==W.receiveShadow)&&(_t.receiveShadow=W.receiveShadow,ie.setValue(B,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(be.envMapIntensity.value=U.environmentIntensity),be.dfgLUT!==void 0&&(be.dfgLUT.value=N0()),Qn){if(ie.setValue(B,"toneMappingExposure",I.toneMappingExposure),_t.needsLights&&Xu(be,Fi),ft&&G.fog===!0&&yt.refreshFogUniforms(be,ft),yt.refreshMaterialUniforms(be,G,tt,Q,b.state.transmissionRenderTarget[M.id]),_t.needsLights&&_t.lightProbeGrid){let ce=_t.lightProbeGrid;be.probesSH.value=ce.texture,be.probesMin.value.copy(ce.boundingBox.min),be.probesMax.value.copy(ce.boundingBox.max),be.probesResolution.value.copy(ce.resolution)}vs.upload(B,mc(_t),be,H)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(vs.upload(B,mc(_t),be,H),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ie.setValue(B,"center",W.center),ie.setValue(B,"modelViewMatrix",W.modelViewMatrix),ie.setValue(B,"normalMatrix",W.normalMatrix),ie.setValue(B,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let ce=G.uniformsGroups;for(let ti=0,Oi=ce.length;ti<Oi;ti++){let xc=ce[ti];rt.update(xc,on),rt.bind(xc,on)}}return on}function Xu(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function qu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(M,U,q){let G=F.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),F.get(M.texture).__webglTexture=U,F.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let q=F.get(M);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,q=0){st=M,$=U,K=q;let G=null,W=!1,ft=!1;if(M){let dt=F.get(M);if(dt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(B.FRAMEBUFFER,dt.__webglFramebuffer),nt.copy(M.viewport),wt.copy(M.scissor),vt=M.scissorTest,g.viewport(nt),g.scissor(wt),g.setScissorTest(vt),Z=-1;return}else if(dt.__webglFramebuffer===void 0)H.setupRenderTarget(M);else if(dt.__hasExternalTextures)H.rebindTextures(M,F.get(M.texture).__webglTexture,F.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let kt=M.depthTexture;if(dt.__boundDepthTexture!==kt){if(kt!==null&&F.has(kt)&&(M.width!==kt.image.width||M.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(M)}}let Mt=M.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ft=!0);let Tt=F.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Tt[U])?G=Tt[U][q]:G=Tt[U],W=!0):M.samples>0&&H.useMultisampledRTT(M)===!1?G=F.get(M).__webglMultisampledFramebuffer:Array.isArray(Tt)?G=Tt[q]:G=Tt,nt.copy(M.viewport),wt.copy(M.scissor),vt=M.scissorTest}else nt.copy(gt).multiplyScalar(tt).floor(),wt.copy(Ft).multiplyScalar(tt).floor(),vt=Me;if(q!==0&&(G=z),g.bindFramebuffer(B.FRAMEBUFFER,G)&&g.drawBuffers(M,G),g.viewport(nt),g.scissor(wt),g.setScissorTest(vt),W){let dt=F.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,dt.__webglTexture,q)}else if(ft){let dt=U;for(let Mt=0;Mt<M.textures.length;Mt++){let Tt=F.get(M.textures[Mt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Mt,Tt.__webglTexture,q,dt)}}else if(M!==null&&q!==0){let dt=F.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,dt.__webglTexture,q)}Z=-1};function _c(M){let U=F.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=A.textureFormatReadable(M.format),U.__typeReadable=A.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,q,G,W,ft,xt,dt=0){if(!(M&&M.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=F.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt){g.bindFramebuffer(B.FRAMEBUFFER,Mt);try{let Tt=M.textures[dt],kt=Tt.format,Xt=Tt.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+dt);let St=_c(Tt);if(St.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-G&&q>=0&&q<=M.height-W&&B.readPixels(U,q,G,W,ht.convert(kt),ht.convert(Xt),ft)}finally{let Tt=st!==null?F.get(st).__webglFramebuffer:null;g.bindFramebuffer(B.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,U,q,G,W,ft,xt,dt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=F.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt)if(U>=0&&U<=M.width-G&&q>=0&&q<=M.height-W){g.bindFramebuffer(B.FRAMEBUFFER,Mt);let Tt=M.textures[dt],kt=Tt.format,Xt=Tt.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+dt);let St=_c(Tt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,te),B.bufferData(B.PIXEL_PACK_BUFFER,ft.byteLength,B.STREAM_READ),B.readPixels(U,q,G,W,ht.convert(kt),ht.convert(Xt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let we=st!==null?F.get(st).__webglFramebuffer:null;g.bindFramebuffer(B.FRAMEBUFFER,we);let ue=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ah(B,ue,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,te),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ft),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(te),B.deleteSync(ue),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,q=0){let G=Math.pow(2,-q),W=Math.floor(M.image.width*G),ft=Math.floor(M.image.height*G),xt=U!==null?U.x:0,dt=U!==null?U.y:0;H.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,xt,dt,W,ft),g.unbindTexture()},this.copyTextureToTexture=function(M,U,q=null,G=null,W=0,ft=0){let xt,dt,Mt,Tt,kt,Xt,St,te,we,ue=M.isCompressedTexture?M.mipmaps[ft]:M.image;if(q!==null)xt=q.max.x-q.min.x,dt=q.max.y-q.min.y,Mt=q.isBox3?q.max.z-q.min.z:1,Tt=q.min.x,kt=q.min.y,Xt=q.isBox3?q.min.z:0;else{let be=Math.pow(2,-W);xt=Math.floor(ue.width*be),dt=Math.floor(ue.height*be),M.isDataArrayTexture?Mt=ue.depth:M.isData3DTexture?Mt=Math.floor(ue.depth*be):Mt=1,Tt=0,kt=0,Xt=0}G!==null?(St=G.x,te=G.y,we=G.z):(St=0,te=0,we=0);let se=ht.convert(U.format),ke=ht.convert(U.type),_t;U.isData3DTexture?(H.setTexture3D(U,0),_t=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(H.setTexture2DArray(U,0),_t=B.TEXTURE_2D_ARRAY):(H.setTexture2D(U,0),_t=B.TEXTURE_2D),g.activeTexture(B.TEXTURE0),g.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let Xe=g.getParameter(B.UNPACK_ROW_LENGTH),$t=g.getParameter(B.UNPACK_IMAGE_HEIGHT),on=g.getParameter(B.UNPACK_SKIP_PIXELS),Tn=g.getParameter(B.UNPACK_SKIP_ROWS),Qn=g.getParameter(B.UNPACK_SKIP_IMAGES);g.pixelStorei(B.UNPACK_ROW_LENGTH,ue.width),g.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ue.height),g.pixelStorei(B.UNPACK_SKIP_PIXELS,Tt),g.pixelStorei(B.UNPACK_SKIP_ROWS,kt),g.pixelStorei(B.UNPACK_SKIP_IMAGES,Xt);let Fi=M.isDataArrayTexture||M.isData3DTexture,ie=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let be=F.get(M),jn=F.get(U),ce=F.get(be.__renderTarget),ti=F.get(jn.__renderTarget);g.bindFramebuffer(B.READ_FRAMEBUFFER,ce.__webglFramebuffer),g.bindFramebuffer(B.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let Oi=0;Oi<Mt;Oi++)Fi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,F.get(M).__webglTexture,W,Xt+Oi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,F.get(U).__webglTexture,ft,we+Oi)),B.blitFramebuffer(Tt,kt,xt,dt,St,te,xt,dt,B.DEPTH_BUFFER_BIT,B.NEAREST);g.bindFramebuffer(B.READ_FRAMEBUFFER,null),g.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||F.has(M)){let be=F.get(M),jn=F.get(U);g.bindFramebuffer(B.READ_FRAMEBUFFER,L),g.bindFramebuffer(B.DRAW_FRAMEBUFFER,V);for(let ce=0;ce<Mt;ce++)Fi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,be.__webglTexture,W,Xt+ce):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,be.__webglTexture,W),ie?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,jn.__webglTexture,ft,we+ce):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,jn.__webglTexture,ft),W!==0?B.blitFramebuffer(Tt,kt,xt,dt,St,te,xt,dt,B.COLOR_BUFFER_BIT,B.NEAREST):ie?B.copyTexSubImage3D(_t,ft,St,te,we+ce,Tt,kt,xt,dt):B.copyTexSubImage2D(_t,ft,St,te,Tt,kt,xt,dt);g.bindFramebuffer(B.READ_FRAMEBUFFER,null),g.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ie?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(_t,ft,St,te,we,xt,dt,Mt,se,ke,ue.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(_t,ft,St,te,we,xt,dt,Mt,se,ue.data):B.texSubImage3D(_t,ft,St,te,we,xt,dt,Mt,se,ke,ue):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ft,St,te,xt,dt,se,ke,ue.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ft,St,te,ue.width,ue.height,se,ue.data):B.texSubImage2D(B.TEXTURE_2D,ft,St,te,xt,dt,se,ke,ue);g.pixelStorei(B.UNPACK_ROW_LENGTH,Xe),g.pixelStorei(B.UNPACK_IMAGE_HEIGHT,$t),g.pixelStorei(B.UNPACK_SKIP_PIXELS,on),g.pixelStorei(B.UNPACK_SKIP_ROWS,Tn),g.pixelStorei(B.UNPACK_SKIP_IMAGES,Qn),ft===0&&U.generateMipmaps&&B.generateMipmap(_t),g.unbindTexture()},this.initRenderTarget=function(M){F.get(M).__webglFramebuffer===void 0&&H.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?H.setTextureCube(M,0):M.isData3DTexture?H.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?H.setTexture2DArray(M,0):H.setTexture2D(M,0),g.unbindTexture()},this.resetState=function(){$=0,K=0,st=null,g.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var Eo=class extends Ri{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Ke;t.deleteAttribute("uv");let e=new Ee({side:Ie}),i=new Ee,s=new di(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new zt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new js(t,i,6),o=new me;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new zt(t,Ss(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let h=new zt(t,Ss(50));h.position.set(-16.109,18.021,-8.207),h.scale.set(.1,2.425,2.751),this.add(h);let d=new zt(t,Ss(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let f=new zt(t,Ss(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new zt(t,Ss(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let p=new zt(t,Ss(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ss(n){return new ir({color:0,emissive:16777215,emissiveIntensity:n})}var ou=Math.PI*2;function lu(n,t,e){let i=n,s=new Ce,r=new Float32Array(i*6),a=[];for(let l=0;l<i-1;l++)a.push(2*l,2*l+1,2*l+2,2*l+1,2*l+3,2*l+2);s.setAttribute("position",new Re(r,3)),s.setIndex(a);let o=new zt(s,e);return o.frustumCulled=!1,{mesh:o,update(l,h=t){for(let d=0;d<i;d++){let f=l[d];r.set([f.x,f.y+h/2,f.z,f.x,f.y-h/2,f.z],d*6)}s.attributes.position.needsUpdate=!0}}}function U0(n,t){let e=new Ce,i=new Float32Array(n*9),s=new Float32Array(n*9),r=[];for(let d=0;d<n-1;d++){let f=d*3,u=(d+1)*3;r.push(f,f+1,u,f+1,u+1,u),r.push(f+1,f+2,u+1,f+2,u+2,u+1)}e.setAttribute("position",new Re(i,3)),e.setAttribute("color",new Re(s,3)),e.setIndex(r);let a=new Ee({color:13482382,roughness:.72,vertexColors:!0}),o=new zt(e,a);o.frustumCulled=!1;let l=d=>Math.sin(d*1.9+.4)*.12+.88,h=[.5,1,.4];return{mesh:o,update(d,f=t){for(let u=0;u<n;u++){let p=d[u],x=[p.y+f/2,p.y,p.y-f/2],E=l(u);for(let m=0;m<3;m++){let c=(u*3+m)*3;i[c]=p.x,i[c+1]=x[m],i[c+2]=p.z,s[c]=s[c+1]=s[c+2]=h[m]*E}}e.attributes.position.needsUpdate=!0,e.attributes.color.needsUpdate=!0}}}function cu(n){let t=new Mo({canvas:n,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.toneMapping=hr,t.toneMappingExposure=1.18;let e=new Ri,i=new ys(t);e.environment=i.fromScene(new Eo,.04).texture,e.environmentIntensity=.58;let s=new Ct(1379592);e.fog=new Ys(s,8,34),e.background=s.clone();let r=new li(60,24,16),a=new Ze({side:Ie,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ct(657157)},mid:{value:new Ct(1970697)},bot:{value:new Ct(393986)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP;void main(){ float h = clamp((vP.y / 60.0) * .5 + .5, 0.0, 1.0); vec3 c = h < .5 ? mix(bot, mid, smoothstep(0.18, .5, h)) : mix(mid, top, smoothstep(.5, .9, h)); gl_FragColor = vec4(c, 1.0); }"}),o=new zt(r,a);e.add(o);let l=(()=>{let C=document.createElement("canvas");C.width=160,C.height=320;let F=C.getContext("2d");F.fillStyle="#0d0907",F.fillRect(0,0,160,320);let H=31,Y=()=>(H=H*16807%2147483647,H/2147483647);for(let X=0;X<150;X++){let J=.2+Y()*.6;F.fillStyle=`rgba(255,178,96,${J})`,F.fillRect(7+Math.floor(Y()*19)*7.9,9+Math.floor(Y()*39)*7.9,3.6,5.4)}let it=new Nn(C);return it.colorSpace=Pe,it.anisotropy=4,it})(),h=new Ee({map:l,color:12563882,roughness:1,emissive:16751181,emissiveMap:l,emissiveIntensity:.62}),d=new Ee({color:1314827,roughness:1,emissive:16751181,emissiveMap:l,emissiveIntensity:.45}),f=77,u=()=>(f=f*16807%2147483647,f/2147483647);for(let C=0;C<14;C++){let F=6+u()*16,H=1.8+u()*2.2,Y=-26+C*4+(u()-.5)*2.2,it=-9.5-u()*11,X=new zt(new Ke(H,F,H),C%3===0?h:d);if(X.position.set(Y,F/2-6.5,it),X.rotation.y=(u()-.5)*.3,e.add(X),C%3===1){let J=new zt(new Ke(.09,2.6,.09),d);J.position.set(Y,F-6.5+1.3,it),e.add(J);let at=new zt(new li(.09,6,6),new sn({color:16733769}));at.position.set(Y,F-6.5+2.65,it),e.add(at)}}let p=(()=>{let C=document.createElement("canvas");C.width=C.height=256;let F=C.getContext("2d"),H=F.createRadialGradient(128,128,0,128,128,128);H.addColorStop(0,"rgba(255,255,255,.85)"),H.addColorStop(.4,"rgba(255,255,255,.25)"),H.addColorStop(1,"rgba(255,255,255,0)"),F.fillStyle=H,F.fillRect(0,0,256,256);let Y=new Nn(C);return Y.colorSpace=Pe,Y})(),x=new sn({map:p,transparent:!0,opacity:.55,blending:On,depthWrite:!1,fog:!1}),E=new zt(new Un(1,1),x);E.scale.set(60,34,1),E.position.set(0,1.5,-10),e.add(E);let m=(()=>{let C=document.createElement("canvas");C.width=160,C.height=72;let F=C.getContext("2d"),H=917,Y=()=>(H=H*16807%2147483647,H/2147483647);for(let X=0;X<260;X++){let J=.12+Y()*.55;F.fillStyle=`rgba(255,170,90,${J})`,F.fillRect(Y()*158,Y()*70,1.4+Y()*1.6,1.1+Y()*1.3)}let it=new Nn(C);return it.colorSpace=Pe,it})(),c=new zt(new Un(80,30),new sn({map:m,transparent:!0,opacity:.5,color:16756838,blending:On,depthWrite:!1,fog:!1}));c.rotation.x=-Math.PI/2,c.position.set(0,-8.5,-3),e.add(c);let v=new zt(new Un(90,40),new sn({map:p,transparent:!0,opacity:.26,color:11752478,blending:On,depthWrite:!1,fog:!1}));v.rotation.x=-Math.PI/2,v.position.set(0,-6.4,-4),e.add(v);let w=(()=>{let C=document.createElement("canvas");C.width=C.height=128;let F=C.getContext("2d"),H=F.createRadialGradient(64,64,0,64,64,64);return H.addColorStop(0,"rgba(0,0,0,.95)"),H.addColorStop(.6,"rgba(0,0,0,.45)"),H.addColorStop(1,"rgba(0,0,0,0)"),F.fillStyle=H,F.fillRect(0,0,128,128),new Nn(C)})(),y=new sn({map:w,transparent:!0,opacity:.34,depthWrite:!1,fog:!1}),S=new zt(new Un(1,1),y),b=S.clone();S.scale.set(.5,.15,1),b.scale.set(.5,.15,1),S.position.z=.02,b.position.z=.02,e.add(S,b);function P(C,F,H,Y){S.position.set(C,F+.012,.02),b.position.set(H,Y+.012,.02)}e.add(new lr(2759700,.4)),e.add(new rr(2365458,656900,.36));let _=new di(16756782,46,0,2);_.position.set(2.2,2.2,2.8);let T=new di(16733769,46,0,2);T.position.set(-2.2,2.2,2.8);let I=new ds(16768174,1.7);I.position.set(2.6,4,4.6);let R=new ds(16763274,2);R.position.set(0,3.4,-6),e.add(_,T,I,R);let N=121,z=new re;e.add(z);let L=lu(N,.34,new sn({color:16756782,transparent:!0,opacity:.2,blending:On,depthWrite:!1})),V=U0(N,.085),$=lu(N,.022,new sn({color:16182486,transparent:!0,opacity:.92}));z.add(L.mesh,V.mesh,$.mesh);function K(C,F,H,Y,it=!0){let X=new Ce,J=new Float32Array(C*3);X.setAttribute("position",new Re(J,3));let at=new Ci({color:F,size:H,transparent:!0,opacity:Y,depthWrite:!1,blending:it?On:pi,sizeAttenuation:!0}),yt=new os(X,at);return yt.frustumCulled=!1,e.add(yt),{pts:yt,pos:J,geo:X}}let st=K(150,15918022,.04,.38),Z=[],et=[];for(let C=0;C<150;C++)st.pos.set([(u()-.5)*34,u()*9-1,-8+u()*12],C*3),Z.push(.08+u()*.3),et.push(u()*ou);let nt=K(42,16760426,.065,.5),wt=[];for(let C=0;C<42;C++)nt.pos.set([(u()-.5)*16,-1-u()*7,-2+u()*5],C*3),wt.push(.35+u()*.9);let vt=120,Kt=new Ce,Bt=new Float32Array(vt*3).fill(-999),Jt=new Float32Array(vt*3).fill(0);Kt.setAttribute("position",new Re(Bt,3)),Kt.setAttribute("color",new Re(Jt,3));let Q=new Ci({size:.085,vertexColors:!0,transparent:!0,opacity:1,blending:On,depthWrite:!1,sizeAttenuation:!0}),tt=new os(Kt,Q);tt.frustumCulled=!1,e.add(tt);let mt=new Float32Array(vt*3),It=new Float32Array(vt),gt={i:0},Ft=new Ct;function Me(C,F,H,Y,it,X,J,at="#ffd27a",yt=1.1){Ft.set(at);for(let lt=0;lt<X;lt++){let ot=gt.i++%vt,bt=Math.atan2(it||0,Y||1)+(Math.random()-.5)*yt+(Y||it?0:Math.random()*ou),Rt=J*(.4+Math.random()*.9);Bt.set([C,F,H],ot*3),mt.set([Math.cos(bt)*Rt,Math.sin(bt)*Rt+.6,(Math.random()-.5)*.8],ot*3),It[ot]=.3+Math.random()*.4,Jt.set([Ft.r,Ft.g,Ft.b],ot*3)}Kt.attributes.color.needsUpdate=!0}let Dt=new Oe(38,1,.1,120),Wt=6,ne=1,Gt=1;function oe(C=0){let F=Math.tan(_o.degToRad(19)),H=ne/Gt,Y=3.5,it=2.8,X=Y/2/(F*H),J=it/2/F;return _o.clamp(Math.max(X,J)*1.12,4.4,12.4)*(1+C)}function Se(C,F){ne=C,Gt=F,t.setSize(C,F,!1),Dt.aspect=C/F,Wt=oe(),Dt.position.set(0,1.55,Wt),Dt.updateProjectionMatrix(),e.fog.near=Wt*1.05,e.fog.far=Wt*5}Se(n.clientWidth||390,n.clientHeight||844);function ze(C=1,F=0,H=0,Y=.6,it=0){let X=Wt/(C||1);Dt.position.x=F+it,Dt.position.y=1.55+H,Dt.position.z=X,Dt.lookAt(it*.3,.95+Y*.35,0)}let he=new Ct(1377539),ve=new Ct(1182211),B=new Ct(16733769),Ne=new Ct(16756782);function Qt(C){s.copy(he).lerp(ve,C),e.fog.color.copy(s),e.background.copy(s),x.color.copy(B).lerp(Ne,C)}function A(C,F){_.intensity=14+40*C*F,T.intensity=14+40*(1-C)*F,R.intensity=.8+1.1*Math.abs(C*2-1)}function g(C,F,H){for(let Y=0;Y<150;Y++){let it=st.pos[Y*3+1]+Z[Y]*C,X=st.pos[Y*3]+Math.sin(F*.5+et[Y])*.12*C;it>8.5&&(it=-1.2),st.pos[Y*3+1]=it,st.pos[Y*3]=X}st.geo.attributes.position.needsUpdate=!0;for(let Y=0;Y<42;Y++){let it=nt.pos[Y*3+1]+wt[Y]*C;it>H-.6&&(it=H-4-Math.random()*4,nt.pos[Y*3]=(Math.random()-.5)*16),nt.pos[Y*3+1]=it}nt.geo.attributes.position.needsUpdate=!0;for(let Y=0;Y<vt;Y++)It[Y]>0&&(It[Y]-=C,mt[Y*3+1]-=7.5*C,Bt[Y*3]+=mt[Y*3]*C,Bt[Y*3+1]+=mt[Y*3+1]*C,Bt[Y*3+2]+=mt[Y*3+2]*C,It[Y]<=0&&(Bt[Y*3+1]=-999));Kt.attributes.position.needsUpdate=!0}return{renderer:t,scene:e,camera:Dt,resize:Se,frame:ze,setFogTint:Qt,setLamps:A,updateParticles:g,setShadows:P,rope:{glow:L,body:V,core:$,N,update(C){L.update(C,.42),V.update(C,.105),$.update(C,.026)}},ropeGlowMat:L.mesh.material,spawnSparks:Me,glow:E}}var zy=Math.PI*2;function hu(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);let s=new Nn(i);return s.colorSpace=Pe,s}function F0(n,t){return hu(128,128,(e,i,s)=>{e.fillStyle=n,e.fillRect(0,0,i,s);let r=9,a=()=>(r=r*16807%2147483647,r/2147483647);for(let o=0;o<520;o++){let l=a()*i,h=a()*s,d=3+a()*7,f=(a()-.5)*.9;e.strokeStyle=a()<.55?t:n,e.globalAlpha=.05+a()*.07,e.lineWidth=.7+a(),e.beginPath(),e.moveTo(l,h),e.lineTo(l+Math.sin(f)*2,h+d),e.stroke()}e.globalAlpha=1})}function Ql(n,t){return hu(64,64,(e,i,s)=>{e.fillStyle=n,e.fillRect(0,0,i,s),e.globalAlpha=.16,e.strokeStyle=t;for(let r=0;r<i;r+=4)e.beginPath(),e.moveTo(r,0),e.lineTo(r,s),e.stroke();for(let r=0;r<s;r+=4)e.beginPath(),e.moveTo(0,r),e.lineTo(i,r),e.stroke();e.globalAlpha=1})}var O0={gato:{fur:"#b3713c",furDark:"#8a5227",cloth:"#25314c",clothDark:"#182238",accent:"#ff5649",accentDark:"#b23a30",metal:"#cfd6d8"},sultan:{fur:"#a9683a",furDark:"#7d4a24",cloth:"#8a5a22",clothDark:"#6b4318",accent:"#ffb02e",accentDark:"#b37722",metal:"#d8cfae"}};function B0(n){let t=new Ee({map:F0(n.fur,n.furDark),roughness:.92}),e=new Ee({color:n.furDark,roughness:.95}),i=new Ee({color:"#e8d3ae",roughness:.9}),s=new Ee({map:Ql(n.cloth,n.clothDark),roughness:.85}),r=new Ee({map:Ql(n.accent,n.accentDark),roughness:.8}),a=new Ee({color:n.accentDark,roughness:.85}),o=new Ee({color:"#0b0a0c",roughness:.35}),l=new Ee({color:"#e4e9ea",roughness:.26,metalness:.8}),h=new Ee({color:"#c99a3f",roughness:.4,metalness:.7});return{fur:t,furDark:e,cream:i,cloth:s,accent:r,accentAxis:a,black:o,metal:l,gold:h}}function Ht(n,t,e,i,s,r,a=1,o=1,l=1,h=0,d=0,f=0){let u=new zt(n,t);return u.position.set(i,s,r),u.scale.set(a,o,l),u.rotation.set(h,d,f),e.add(u),u}function jl(n){let t=O0[n],e=B0(t),i=new li(1,18,14),s=new nr(1,1,6,14),r=new cs(1,1,16),a=new Ke(1,1,1),o=new re;o.rotation.order="YXZ";let l=[["L",-.14],["R",.14]],h={};for(let[R,N]of l){let z=new re;z.position.set(N,.62,0),o.add(z),Ht(s,e.fur,z,0,-.17,.02,.085,.17,.085);let L=new re;L.position.set(0,-.34,.02),z.add(L),Ht(s,e.fur,L,0,-.14,-.01,.065,.14,.065);let V=new re;V.position.set(0,-.29,0),L.add(V),Ht(i,e.cream,V,0,.02,0,.075,.035,.08),Ht(i,e.fur,V,0,-.045,.055,.095,.05,.175),Ht(i,e.cream,V,0,-.05,.175,.07,.038,.1),h[R]={hip:z,knee:L,foot:V}}let d=new re;d.position.set(0,.62,0),o.add(d),Ht(i,e.fur,d,0,.22,-.02,.3,.34,.27),Ht(i,e.cream,d,0,.16,.17,.17,.22,.1),Ht(i,e.fur,d,0,.55,.01,.26,.3,.23);let f=new re;f.position.set(0,.78,.03),d.add(f),Ht(s,e.fur,f,0,.06,0,.13,.1,.13);let u=new re;u.position.set(0,.17,.02),f.add(u),Ht(i,e.fur,u,0,0,0,.26,.235,.25),Ht(i,e.cream,u,0,-.06,.19,.13,.1,.12),Ht(i,e.black,u,0,-.035,.3,.028,.02,.02);let p=Ht(i,e.black,u,-.095,.035,.215,.045,.052,.045),x=Ht(i,e.black,u,.095,.035,.215,.045,.052,.045);Ht(i,e.cream,u,-.079,.058,.246,.013,.013,.01),Ht(i,e.cream,u,.079,.058,.246,.013,.013,.01),Ht(a,e.furDark,u,0,-.105,.265,.05,.007,.01);for(let R of[-1,1])Ht(a,e.furDark,u,R*.13,-.045,.225,.13,.005,.005,0,R*.45,R*.1),Ht(a,e.furDark,u,R*.125,-.06,.225,.12,.005,.005,0,R*.35,R*-.06);let E=[];for(let R of[-1,1]){let N=new re;N.position.set(R*.145,.195,-.015),N.rotation.z=R*-.28,u.add(N),Ht(r,e.fur,N,0,.13,0,.115,.26,.085),Ht(r,e.cream,N,0,.11,.014,.068,.16,.05),E.push(N)}if(n==="sultan")for(let R of[-1,1]){let N=new re;N.position.set(R*.055,-.065,.26),u.add(N),N.rotation.z=R*-.35,N.rotation.x=-.25,Ht(s,e.furDark,N,0,-.05,.02,.028,.06,.028),Ht(s,e.furDark,N,R*.045,-.115,.03,.02,.045,.02,0,0,R*.5)}let m={};for(let[R,N]of[["L",-1],["R",1]]){let z=new re;z.position.set(N*.24,.6,.02),d.add(z),Ht(i,e.cloth,z,0,.02,0,.115,.105,.11),Ht(s,e.fur,z,0,-.16,0,.062,.14,.062);let L=new re;L.position.set(0,-.3,0),z.add(L),Ht(s,e.fur,L,0,-.13,0,.055,.12,.055);let V=new re;V.position.set(0,-.26,0),L.add(V),Ht(i,e.cream,V,0,-.02,.01,.075,.07,.08),m[R]={sh:z,el:L,paw:V}}let c=[],v=new re;v.position.set(0,.3,-.24),d.add(v);for(let R=0;R<8;R++){let N=new zt(i,R===7?e.cream:e.fur),z=.072*(1-R*.06);N.scale.setScalar(z),v.add(N),c.push(N)}let w=null;if(n==="sultan")w=new zt(new cs(.215,.5,12,1,!0),new Ee({map:Ql(t.accent,t.accentDark),roughness:.82,side:cn})),w.position.set(0,.14,-.2),w.rotation.x=.3,w.scale.set(1,1,.6),d.add(w);else{let R=new zt(new hs(.145,.036,8,22),e.accentAxis);R.position.set(0,.02,0),R.rotation.x=1.32,f.add(R)}let y=new zt(new ls(.24,.31,.36,12,1,!0),e.cloth);y.position.set(0,.01,0),y.scale.set(1,1,.9),d.add(y);let S=new zt(new hs(.29,.05,8,24),e.accentAxis);if(S.position.set(0,.16,0),S.rotation.x=Math.PI/2,S.scale.set(1,.94,1),d.add(S),n==="sultan"){let R=new re;R.position.set(0,.19,-.01),R.rotation.x=-.08,u.add(R),Ht(i,e.cloth,R,0,-.02,0,.34,.1,.34),Ht(s,e.accent,R,0,.12,0,.13,.1,.13),Ht(a,e.cream,R,.17,.13,-.02,.3,.045,.02,0,.4,.45)}else{let R=new re;R.position.set(0,.18,0),R.rotation.z=.06,u.add(R),Ht(i,e.cloth,R,0,0,0,.27,.12,.27),Ht(i,e.accent,R,0,.05,0,.09,.07,.09),Ht(r,e.cloth,R,0,-.03,.21,.08,.12,.05,1.9,0,0)}let b=new re,P=new Ke(.075,1,.115),_=new zt(P,e.metal);if(_.scale.y=.85,_.position.y=.5,_.rotation.z=n==="gato"?.1:.02,b.add(_),Ht(r,e.metal,b,0,.955,0,.062,.17,.095,0,Math.PI/4,0),Ht(a,e.gold,b,0,.075,0,.058,.03,.118),Ht(a,e.gold,b,0,.05,0,.16,.035,.05),Ht(s,e.accent,b,0,-.02,0,.032,.05,.032),Ht(i,e.gold,b,0,-.09,0,.038,.032,.038),n==="gato")Ht(a,e.gold,b,.012,.1,0,.09,.1,.05,0,0,.5);else{let R=new re;R.position.set(0,.055,0),b.add(R),Ht(i,e.gold,R,0,0,0,.085,.045,.085)}m[n==="gato"?"L":"R"].paw.add(b);let I={root:o,torso:d,neck:f,head:u,ears:E,earsBase:E.map(R=>R.rotation.z),arms:m,legs:h,tail:c,tailRoot:v,cape:w,sword:b,eyes:[p,x],hat:n==="sultan"};return{key:n,style:t,M:e,group:o,joints:I}}(function(n,t){let e=globalThis&&globalThis.module&&globalThis.module.exports;e?e.exports=t():n.BtcTradeFeed=t()})(typeof self<"u"?self:void 0,function(){"use strict";var n="1.1.0",t="btcusdt",e=[{kind:"binance",url:"wss://data-stream.binance.vision/stream?streams=btcusdt@trade/btcusdt@ticker/btcusdt@kline_1s",label:"binance.vision (trade+ticker+1s klines)"},{kind:"bybit",url:"wss://stream.bybit.com/v5/public/spot",label:"bybit spot (trade+ticker; answers where binance is geo-blocked)"},{kind:"binance",url:"wss://stream.binance.com:9443/stream?streams=btcusdt@trade/btcusdt@ticker/btcusdt@kline_1s",label:"stream.binance.com:9443 (trade+ticker+1s klines)"},{kind:"binance",url:"wss://stream.binance.com:443/ws/btcusdt@trade",label:"stream.binance.com:443 (trade only, candles from prints)"}],i={binance:"Binance",bybit:"Bybit"},s=300,r="https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1s&limit=300",a="https://api.bybit.com/v5/market/recent-trade?category=spot&symbol=BTCUSDT&limit=1000",o="wss://stream.bybit.com/v5/public/spot";function l(c){this.max=c||s,this.rev=0,this.seeded=!1,this.t=[],this.o=[],this.h=[],this.l=[],this.c=[]}l.prototype.lastT=function(){return this.t.length?this.t[this.t.length-1]:-1},l.prototype._append=function(c,v,w,y,S){this.t.push(c),this.o.push(v),this.h.push(w),this.l.push(y),this.c.push(S),this.t.length>this.max&&(this.t.shift(),this.o.shift(),this.h.shift(),this.l.shift(),this.c.shift()),this.rev++},l.prototype.ingestTrade=function(c,v){if(isFinite(v)){var w=Math.floor(c/1e3)*1e3,y=this.t.length;if(y&&w===this.t[y-1]){var S=y-1;v>this.h[S]&&(this.h[S]=v),v<this.l[S]&&(this.l[S]=v),this.c[S]=v,this.rev++;return}w<=this.lastT()||this._append(w,v,v,v,v)}},l.prototype.ingestKline=function(c,v,w,y,S){if(!(!isFinite(c)||!isFinite(v)||!isFinite(w)||!isFinite(y)||!isFinite(S))){var b=this.t.length;if(b&&c===this.t[b-1]){this.o[b-1]=v,this.h[b-1]=w,this.l[b-1]=y,this.c[b-1]=S,this.rev++;return}c<this.lastT()||this._append(c,v,w,y,S)}},l.prototype.seedRows=function(c){if(Array.isArray(c)){for(var v=0;v<c.length;v++){var w=c[v];if(!(!Array.isArray(w)||w.length<5)){var y=+w[0],S=+w[1],b=+w[2],P=+w[3],_=+w[4];!isFinite(y)||!isFinite(_)||y<=this.lastT()||this._append(y,S,b,P,_)}}this.seeded=!0,this.rev++}},l.prototype.seedHistory=function(c){if(!(!Array.isArray(c)||!c.length)){for(var v=[],w=0;w<c.length;w++){var y=c[w];if(!(!Array.isArray(y)||y.length<5)){var S=+y[0],b=+y[1],P=+y[2],_=+y[3],T=+y[4];!isFinite(S)||!isFinite(T)||(!this.t.length||S<this.t[0]?v.push([S,b,P,_,T]):S>this.lastT()&&this._append(S,b,P,_,T))}}v.length&&this._prepend(v),this.seeded=!0,this.rev++}},l.prototype._prepend=function(c){for(var v=c.length-1;v>=0;v--){var w=c[v];this.t.unshift(w[0]),this.o.unshift(w[1]),this.h.unshift(w[2]),this.l.unshift(w[3]),this.c.unshift(w[4])}var y=this.t.length-this.max;y>0&&(this.t.splice(0,y),this.o.splice(0,y),this.h.splice(0,y),this.l.splice(0,y),this.c.splice(0,y))},l.prototype.snapshot=function(){return{rev:this.rev,seeded:this.seeded,count:this.t.length,t:this.t,o:this.o,h:this.h,l:this.l,c:this.c}};function h(c,v,w){return c<v?v:c>w?w:c}function d(c){c=c||{},this.windowMs=c.windowMs||3e4,this.tauMs=c.tauMs||12e3,this.alpha=c.alpha||.05,this.normFloor=c.normFloor||5e3,this.trades=[],this._ewma=0}d.prototype.push=function(c){if(!(!c||typeof c.price!="number"||typeof c.qty!="number")&&!(!isFinite(c.price)||!isFinite(c.qty))&&!(c.side!=="buy"&&c.side!=="sell")){var v=c.price*c.qty;isFinite(v)&&this.trades.push({ts:c.ts,v:c.side==="sell"?-v:v})}},d.prototype.compute=function(c){for(;this.trades.length&&c-this.trades[0].ts>this.windowMs;)this.trades.shift();for(var v=0,w=0;w<this.trades.length;w++){var y=this.trades[w];v+=y.v*Math.exp(-(c-y.ts)/this.tauMs)}this._ewma+=this.alpha*(Math.abs(v)-this._ewma);var S=Math.max(this._ewma*.6,this.normFloor),b=Math.tanh(v/S);return isFinite(b)||(b=0),{raw:v,pressure:h(b,-1,1),trades:this.trades.length}},d.prototype.reset=function(){this.trades.length=0,this._ewma=0};function f(c){var v=c>>>0;return function(){v|=0,v=v+1831565813|0;var w=Math.imul(v^v>>>15,1|v);return w=w+Math.imul(w^w>>>7,61|w)^w,((w^w>>>14)>>>0)/4294967296}}function u(c){c=c||{},this.rnd=f(c.seed!==void 0?c.seed:12648430),this.price=c.startPrice||78e3,this.startPriceUsed=this.price,this.vol=c.vol||35e-5,this.momentum=0}u.prototype.next=function(c){for(var v=[],w=1+Math.floor(this.rnd()*5),y=0;y<w;y++){var S=h(this.momentum,-.15,.15),b=this.rnd()<.5+S?"buy":"sell",P=Math.pow(10,-4+this.rnd()*3.2),_=(this.rnd()-.5)*2*this.price*this.vol;this.rnd()<.02&&(P*=5+this.rnd()*15,_*=3),this.price=Math.max(1e3,this.price+_),this.momentum=this.momentum*.9+(b==="buy"?.01:-.01),v.push({ts:c,price:this.price,qty:P,side:b})}return v};function p(c){c=c||{},this.symbol=(c.symbol||t).toLowerCase(),this.mode=c.mode||"auto",this.emitIntervalMs=c.emitIntervalMs||250,this.endpoints=c.endpoints&&c.endpoints.length?c.endpoints:e,this.backoffBaseMs=c.backoffBaseMs||1e3,this.backoffMaxMs=c.backoffMaxMs||15e3,this.demoFallbackAfter=c.demoFallbackAfter||2,this.connectTimeoutMs=c.connectTimeoutMs||8e3,this.liveRetryMs=c.liveRetryMs||6e4,this.demoSeed=c.demoSeed,this.demoStartPrice=c.demoStartPrice||78e3,this.priceDecimals=c.priceDecimals!==void 0?c.priceDecimals:2,this._acc=new d(c),this._candles=new l(c.maxCandles),this._seedStarted=!1,this.seedHistory=c.seedHistory!==!1,this._kind=this.endpoints[0]&&this.endpoints[0].kind||"binance",this._bsym=this.symbol.toUpperCase(),this._connectTimer=null,this._lastPing=0,this._demo=null,this._ws=null,this._running=!1,this._closing=!1,this._status="stopped",this._attempt=0,this._endpointIdx=0,this._lastError=null,this._price=null,this._lastSide=null,this._lastQty=null,this._lastTs=null,this._rawPressure=0,this._pressure=0,this._chg24hPct=null,this._chg24hAbs=null,this._high24h=null,this._low24h=null,this._tradeCounter=0,this._tps=0,this._chg={change:[],trade:[],status:[]},this._emitTimer=null,this._backoffTimer=null,this._liveRetryTimer=null,this._fmt=new Intl.NumberFormat("en-US",{minimumFractionDigits:this.priceDecimals,maximumFractionDigits:this.priceDecimals})}p.VERSION=n,p.DEFAULT_ENDPOINTS=e,p.PressureAccumulator=d,p.CandleStore=l,p.KLINE_SEED_URL=r,p.BYBIT_SEED_URL=a,p.BYBIT_WS_URL=o,p.PROVIDER_LABELS=i,p.DemoSource=u,p.prototype._on=function(c,v){if(typeof v!="function")return function(){};c.push(v);var w=c;return function(){var y=w.indexOf(v);y>=0&&w.splice(y,1)}},p.prototype.onChange=function(c){return this._on(this._chg.change,c)},p.prototype.onTrade=function(c){return this._on(this._chg.trade,c)},p.prototype.onStatus=function(c){return this._on(this._chg.status,c)},p.prototype._fire=function(c,v){for(var w=0;w<c.length;w++)try{c[w](v)}catch{}},p.prototype._setStatus=function(c,v){if(!(this._status===c&&!v)){this._status=c;var w=c==="open";this._fire(this._chg.status,{status:c,mode:this.effectiveMode(),endpoint:w?this._endpoint():null,provider:w?this._kind:null,providerLabel:w?i[this._kind]||this._kind:null,connected:w,simulated:c==="demo",attempt:this._attempt,detail:v||null,lastError:this._lastError,ts:Date.now()})}},p.prototype._endpoint=function(){var c=this.endpoints[this._endpointIdx%this.endpoints.length];return c?c.url:null},p.prototype.effectiveMode=function(){return this.mode==="demo"||this._demoFallback?"demo":"live"},p.prototype.start=function(){this._running||(this._running=!0,this._closing=!1,this.mode==="demo"?this._startDemo("demo mode"):this._connect(),this._emitTimer=setInterval(this._tick.bind(this),this.emitIntervalMs))};function x(c){return fetch(r,{cache:"no-store"}).then(function(v){return v.ok?v.json():[]}).then(function(v){c._candles.seedHistory(v)})}function E(c){return fetch(a,{cache:"no-store"}).then(function(v){return v.ok?v.json():null}).then(function(v){var w=v&&v.result&&v.result.list;if(Array.isArray(w)){for(var y=[],S=w.length-1;S>=0;S--){var b=w[S],P=+b.time,_=parseFloat(b.price);!isFinite(P)||!isFinite(_)||y.push([P,_,_,_,_])}c._candles.seedHistory(y)}})}var m={binance:x,bybit:E};return p.prototype._seedProvider=function(c){if(!this._seedStarted&&this.seedHistory&&this.mode!=="demo"){var v=m[c||"binance"];if(v){this._seedStarted=!0;try{v(this).catch(function(){})}catch{}}}},p.prototype.stop=function(){if(this._running=!1,this._closing=!0,this._emitTimer&&(clearInterval(this._emitTimer),this._emitTimer=null),this._backoffTimer&&(clearTimeout(this._backoffTimer),this._backoffTimer=null),this._liveRetryTimer&&(clearTimeout(this._liveRetryTimer),this._liveRetryTimer=null),this._connectTimer&&(clearTimeout(this._connectTimer),this._connectTimer=null),this._lastPing=0,this._stopDemo(),this._ws){try{this._ws.close()}catch{}this._ws=null}this._setStatus("stopped")},p.prototype._startDemo=function(c){this._demo||(this._demo=new u({seed:this.demoSeed,startPrice:this._price||this.demoStartPrice}),this._demoFallback=!0,this._setStatus("demo",c),this.mode==="auto"&&this._scheduleLiveRetry())},p.prototype._stopDemo=function(){this._demo=null,this._demoFallback=!1},p.prototype._scheduleLiveRetry=function(){if(!(this.mode!=="auto"||!this._running||this._liveRetryTimer)){var c=this;this._liveRetryTimer=setTimeout(function(){c._liveRetryTimer=null,c._running&&c._demoFallback&&c._connect()},this.liveRetryMs)}},p.prototype._connect=function(){if(!(!this._running||this._ws)){var c=this,v=this.endpoints[this._endpointIdx%this.endpoints.length]||{},w=v.url;this._kind=v.kind||"binance",this._setStatus(this._attempt>0?"backoff":"connecting");var y;try{y=new WebSocket(w)}catch(S){return this._lastError=String(S),this._onSocketDead(!1)}this._ws=y,this._connectTimer&&clearTimeout(this._connectTimer),this._connectTimer=setTimeout(function(){if(c._connectTimer=null,c._ws===y)try{y.close()}catch{}},this.connectTimeoutMs),y.onopen=function(){if(c._ws===y){if(c._connectTimer&&(clearTimeout(c._connectTimer),c._connectTimer=null),c._kind==="bybit"){try{y.send(JSON.stringify({op:"subscribe",args:["publicTrade."+c._bsym,"tickers."+c._bsym]}))}catch{c._lastError="subscribe frame failed"}c._lastPing=Date.now()}var S=c._demoFallback;c._attempt=0,c._lastError=null,c._stopDemo(),c._liveRetryTimer&&(clearTimeout(c._liveRetryTimer),c._liveRetryTimer=null),c._seedProvider(c._kind),c._setStatus("open",S?"recovered to live feed":null)}},y.onmessage=function(S){c._handleMessage(S.data)},y.onerror=function(){c._ws===y&&(c._lastError="websocket error")},y.onclose=function(){c._ws===y&&(c._ws=null,c._onSocketDead(!0))}}},p.prototype._onSocketDead=function(c){if(!this._running||this._closing){this._setStatus("stopped");return}this._attempt++,this._endpointIdx++;var v=c&&this.mode==="auto"&&this._attempt>=this.demoFallbackAfter;if(v){this._startDemo("live feed unreachable after "+this._attempt+" attempts");return}var w=Math.min(this.backoffBaseMs*Math.pow(2,this._attempt-1),this.backoffMaxMs);w*=.7+.6*Math.random(),w=Math.round(w);var y=this;this._setStatus("backoff","retry in "+w+" ms"),this._backoffTimer=setTimeout(function(){y._backoffTimer=null,y._running&&!y._ws&&y._connect()},w)},p.prototype._handleMessage=function(c){var v;try{v=JSON.parse(c)}catch{return}if(this._kind==="bybit")return this._handleBybit(v);if(v&&typeof v.stream=="string"&&v.data&&(v=v.data),!(!v||typeof v.e!="string")){if(v.e==="trade"||v.e==="aggTrade"){var w;if(v.m===!0)w="sell";else if(v.m===!1)w="buy";else return;var y=parseFloat(v.p),S=parseFloat(v.q);if(!isFinite(y)||!isFinite(S))return;this._ingestTrade({ts:v.T||v.E||Date.now(),price:y,qty:S,side:w})}else if(v.e==="24hrTicker"){var b=parseFloat(v.c);isFinite(b)&&(this._price=b);var P=parseFloat(v.P);isFinite(P)&&(this._chg24hPct=P);var _=parseFloat(v.p);isFinite(_)&&(this._chg24hAbs=_);var T=parseFloat(v.h);isFinite(T)&&(this._high24h=T);var I=parseFloat(v.l);isFinite(I)&&(this._low24h=I)}else if(v.e==="kline"){var R=v.k;R&&this._candles.ingestKline(+R.t,+R.o,+R.h,+R.l,+R.c)}}},p.prototype._handleBybit=function(c){if(c){var v=c.topic;if(typeof v=="string"){if(v.indexOf("publicTrade")===0){var w=c.data;if(!Array.isArray(w))return;for(var y=0;y<w.length;y++){var S=w[y];if(S){var b=S.S==="Buy"?"buy":S.S==="Sell"?"sell":null;if(b){var P=parseFloat(S.p),_=parseFloat(S.v);!isFinite(P)||!isFinite(_)||this._ingestTrade({ts:+S.T||Date.now(),price:P,qty:_,side:b})}}}}else if(v.indexOf("tickers")===0){var T=c.data;if(!T)return;var I=parseFloat(T.lastPrice);isFinite(I)&&(this._price=I,this._markPrice(I,Date.now()));var R=parseFloat(T.price24hPcnt);isFinite(R)&&(this._chg24hPct=R*100);var N=parseFloat(T.prevPrice24h);isFinite(N)&&isFinite(I)&&(this._chg24hAbs=I-N);var z=parseFloat(T.highPrice24h);isFinite(z)&&(this._high24h=z);var L=parseFloat(T.lowPrice24h);isFinite(L)&&(this._low24h=L)}}}},p.prototype._ingestTrade=function(c){this._acc.push(c),this._candles.ingestTrade(c.ts,c.price),this._price=c.price,this._lastSide=c.side,this._lastQty=c.qty,this._lastTs=c.ts,this._tradeCounter++,this._chg.trade.length&&this._fire(this._chg.trade,{ts:c.ts,price:c.price,qty:c.qty,side:c.side,notional:c.price*c.qty})},p.prototype._markPrice=function(c,v){isFinite(c)&&this._candles.ingestTrade(v||Date.now(),c)},p.prototype._tick=function(){if(this._running){var c=Date.now();if(this._demo){for(var v=this._demo.next(c),w=0;w<v.length;w++)this._ingestTrade(v[w]);if(this._price!=null){var y=this._demo.startPriceUsed;this._chg24hPct=(this._price-y)/y*100,this._chg24hAbs=this._price-y,this._high24h=this._high24h==null?this._price:Math.max(this._high24h,this._price),this._low24h=this._low24h==null?this._price:Math.min(this._low24h,this._price)}}if(this._kind==="bybit"&&this._ws&&this._ws.readyState===1&&c-this._lastPing>2e4){this._lastPing=c;try{this._ws.send('{"op":"ping"}')}catch{}}var S=this._acc.compute(c);this._rawPressure=S.raw,this._pressure=S.pressure,this._tps=this._tradeCounter*1e3/this.emitIntervalMs,this._tradeCounter=0;var b=this.snap();this._fire(this._chg.change,b)}},p.prototype.candles=function(){return this._candles.snapshot()},p.prototype.snap=function(){return{ts:Date.now(),price:this._price,change24hPct:this._chg24hPct,change24hAbs:this._chg24hAbs,high24h:this._high24h,low24h:this._low24h,pressure:this._pressure,rawPressure:this._rawPressure,lastSide:this._lastSide,lastQty:this._lastQty,lastNotional:this._lastQty!=null&&this._price!=null?this._lastQty*this._price:null,tps:this._tps,status:this._status,mode:this.effectiveMode(),connected:this._status==="open",simulated:this._status==="demo",endpoint:this._status==="open"?this._endpoint():null,provider:this._status==="open"?this._kind:null,providerLabel:this._status==="open"?i[this._kind]||this._kind:null,attempt:this._attempt,lastError:this._lastError}},p.prototype.state=function(){return{status:this._status,mode:this.effectiveMode(),attempt:this._attempt,price:this._price,pressure:this._pressure}},p.prototype.formatPrice=function(c){var v=c===void 0?this._price:c;return v==null||!isFinite(v)?"\u2014":this._fmt.format(v)},p});var uu=typeof window<"u"?window.BtcTradeFeed:null;var Hy=Math.PI*2,ge=(n,t,e)=>n<t?t:n>e?e:n,z0=n=>ge(n,0,1),vi=(n,t,e)=>n+(t-n)*e;var br=n=>(n=z0(n),n*n*(3-2*n));var dn=(n,t,e,i)=>e<=0?t:t+(n-t)*Math.exp(-i/e);var tc=n=>1-Math.pow(1-n,3),du=n=>1-Math.pow(1-n,5);var xe=n=>document.getElementById(n),Cs=xe("stage"),_e=cu(Cs),Je=Math.random,k0=Math.PI*2,V0=new URLSearchParams(location.search),H0=V0.get("demo")==="1",G0={gato:{key:"gato",name:"DON GATO",side:"sell",accent:"#ff5649",tempo:1.12,weight:.85,dir:1,yaw:Math.PI/2},sultan:{key:"sultan",name:"SULTAN BIGOTES",side:"buy",accent:"#ffb02e",tempo:.92,weight:1.22,dir:-1,yaw:-Math.PI/2}},Ui={idle:{dur:.9},guard:{dur:1.1,guard:!0},flick:{dur:.42,guard:!0},lunge:{dur:.95,hit:[.38,.6],dmg:13,gb:!0},slash:{dur:.85,hit:[.36,.56],dmg:11},cut:{dur:.62,hit:[.3,.52],dmg:8},reel:{dur:.95},taunt:{dur:1.2},fall:{dur:1.5}},Mi={lunge:1,slash:1,cut:1},rc={guard:1,flick:1},lc=1.5,ec=lc*.44,fu=lc*.55,W0=lc*.16,Ts={lunge:{windup:{fwd:-.07,up:.02,torso:-.3,torsoYaw:.1,shR:[-.35,.15,-.2],elR:-.75,wrR:[.3,0,0],shL:[.25,0,.45],elL:-.5,hipL:.25,kneeL:-.45,hipR:-.15,kneeR:-.35,tail:.5,tailLift:.25,head:-.05},strike:{fwd:.3,up:-.025,torso:.4,torsoYaw:-.4,shR:[-1.05,.1,-.05],elR:-.65,wrR:[-.15,0,0],shL:[-.35,0,.55],elL:-.65,hipL:-.35,kneeL:-.3,hipR:.3,kneeR:-.42,tail:-.6,tailLift:-.15,head:.08}},slash:{windup:{fwd:-.05,up:.015,torso:-.24,torsoYaw:.22,shR:[-.55,.35,.1],elR:-1.15,wrR:[.2,0,.3],shL:[.2,0,.4],elL:-.4,hipL:.2,kneeL:-.4,tail:.4,tailLift:.2},strike:{fwd:.3,up:-.015,torso:.3,torsoYaw:-.55,shR:[-.95,-.25,-.35],elR:-.45,wrR:[-.3,0,-.2],shL:[-.3,0,.5],elL:-.6,hipL:-.3,kneeL:-.25,hipR:.4,kneeR:-.5,tail:-.5,tailLift:-.1}},cut:{windup:{fwd:-.03,torso:-.15,torsoYaw:.12,shR:[-.35,.2,.05],elR:-.9,shL:[.15,0,.35],hipL:.12,kneeL:-.3,tail:.25},strike:{fwd:.22,up:-.02,torso:.24,torsoYaw:-.3,shR:[-.85,-.1,-.2],elR:-.4,wrR:[-.3,0,0],shL:[-.2,0,.45],elL:-.5,hipL:-.2,kneeL:-.2,hipR:.3,kneeR:-.4,tail:-.3}},guard:{fwd:-.04,up:.03,torso:.1,torsoYaw:.3,shR:[-.6,.4,.3],elR:-1.05,wrR:[.45,0,.2],shL:[-.35,.15,.55],elL:-.9,hipL:.22,kneeL:-.45,hipR:.1,kneeR:-.4,head:-.05,tail:.5,tailLift:.15},flick:{fwd:.02,torso:.06,torsoYaw:-.18,shR:[-1,.05,.15],elR:-.8,wrR:[-.2,0,-.4],shL:[-.4,0,.5],elL:-.6,tail:.2},reel:{fwd:-.14,up:.02,torso:-.42,torsoYaw:-.15,head:-.18,shR:[-.5,.5,.6],elR:-.5,shL:[-.6,-.3,.8],elL:-.5,hipL:.35,kneeL:-.65,hipR:-.25,kneeR:-.4,tail:.7,tailLift:.3},taunt:{fwd:-.02,torso:-.12,shR:[-1.7,.1,0],elR:-.3,shL:[.3,0,.5],elL:-.4,head:-.12,tail:.5}},D={ready:!1,time:0,last:0,freeze:0,shake:0,zoomT:1,zoom:1,timeScale:1,mode:"choose",lock:0,fallRaw:0,loser:null,endShown:!1,hp:{gato:100,sultan:100},hits:0,blocks:0,breaks:0,locks:0,parries:0,whiffs:0,taken:0,roundT:0,lastWhiffAt:-9,movesSeen:{},frames:0,price:null,pressure:0,pressureS:0,prov:"",freezeTape:!1,hintUsed:{},call:null,callAge:9,_lastLock:-9},bn=[];function pu(n){let t=G0[n];return{key:n,cat:t,actor:null,rig:null,baseX:0,xKnock:0,rideY:null,x:0,y:0,move:"idle",age:0,resolved:!1,_winMin:1e9,stun:0,vx:0,flash:0,bufAt:null,chainI:0,lastAtkAt:-9,lastTapAt:-9,lastGuardAt:-9,guardHeld:!1,counterUntil:-9,atkId:0,whooshAt:-1,whooshed:!1,isPlayer:n==="gato",armSword:n==="gato"?"L":"R",armOff:n==="gato"?"R":"L",hpCur:100,blinkT:2+Je()*3,blinking:0,pose:null,poseT:null,tailPos:[],tailInit:!1}}var Ut={gato:pu("gato"),sultan:pu("sultan")},Ps=[Ut.gato,Ut.sultan],Kn=()=>Ut.gato.isPlayer?Ut.gato:Ut.sultan,X0=()=>Ut.gato.isPlayer?Ut.sultan:Ut.gato,Mu=n=>n.key==="gato"?Ut.sultan:Ut.gato,Su=n=>n.cat.side==="buy"?D.pressureS:-D.pressureS,nc=n=>1+.25*ge(Su(n),-1,1);function je(){return{fwd:0,up:0,side:0,rootPitch:0,torso:0,torsoYaw:0,torsoRoll:0,head:0,headYaw:0,shR:[0,0,0],elR:0,wrR:[0,0,0],shL:[0,0,0],elL:0,hipL:0,kneeL:0,hipR:0,kneeR:0,tail:0,tailLift:0,cape:0}}function yi(n,t,e){let i=je();for(let s of Object.keys(i)){let r=n[s],a=t[s];if(Array.isArray(i[s])){let o=r||[0,0,0],l=a||[0,0,0];i[s]=[vi(o[0],l[0],e),vi(o[1],l[1],e),vi(o[2],l[2],e)]}else i[s]=vi(r||0,a||0,e)}return i}var q0={fwd:.1,up:.1,side:.1,rootPitch:.09,torso:.07,torsoYaw:.08,torsoRoll:.08,head:.1,headYaw:.1,shR:.055,elR:.055,wrR:.06,shL:.06,elL:.06,hipL:.08,kneeL:.08,hipR:.08,kneeR:.08,tail:.14,tailLift:.12,cape:.12};function Y0(n,t){let e=n.move;if(e==="idle"){let r=Math.sin(n.age*2)*.5,a=je();return a.torso=.06+r*.05,a.head=-.05-r*.04,a.shR[0]=-1.05-r*.06,a.shR[1]=.28,a.shR[2]=.3,a.elR=-.35+r*.05,a.shL[0]=-.1,a.elL=-.25,a.hipL=.12,a.kneeL=-.24,a.hipR=-.05,a.kneeR=-.12,a.side=Math.sin(n.age*.8)*.01,a.fwd=Math.sin(n.age*.6)*.008,a.tail=Math.sin(n.age*1.1)*.35,a.tailLift=.25,a.up=Math.sin(n.age*1.3)*.004,a}let i=t.dur/n.cat.tempo,s=ge(n.age/i,0,1);if(e==="lunge"||e==="slash"||e==="cut"){let r=Ts[e];return s<.3?yi(je(),r.windup,br(s/.3)):s<.62?yi(r.windup,r.strike,du((s-.3)/.32)):yi(r.strike,je(),br((s-.62)/.38))}return e==="guard"?yi(je(),Ts.guard,1):e==="flick"?yi(je(),Ts.flick,br(ge(s/.2,0,1))):e==="reel"?yi(je(),Ts.reel,tc(ge(s/.2,0,1))):e==="taunt"?yi(je(),Ts.taunt,br(ge(s/.3,0,1))):je()}var ye=null,Rs=null,tn=null,Jn=null;function Ls(){if(!ye)try{ye=new(window.AudioContext||window.webkitAudioContext),Rs=ye.createGain(),Rs.gain.value=.85,Rs.connect(ye.destination),ye.resume()}catch{ye=null}}function kn(n,t,e,i,s){if(ye)try{let r=ye.currentTime,a=ye.createOscillator(),o=ye.createGain();a.type=i,a.frequency.setValueAtTime(Math.max(20,n),r),t&&a.frequency.exponentialRampToValueAtTime(Math.max(20,t),r+e),o.gain.setValueAtTime(s,r),o.gain.exponentialRampToValueAtTime(8e-4,r+e),a.connect(o),o.connect(Rs),a.start(r),a.stop(r+e+.03)}catch{}}var To=null;function bs(n,t,e,i,s){if(ye)try{if(!To){To=ye.createBuffer(1,ye.sampleRate,ye.sampleRate);let h=To.getChannelData(0);for(let d=0;d<h.length;d++)h[d]=Je()*2-1}let r=ye.currentTime,a=ye.createBufferSource(),o=ye.createBiquadFilter(),l=ye.createGain();a.buffer=To,a.loop=!0,o.type="bandpass",o.Q.value=e,o.frequency.setValueAtTime(t,r),s&&o.frequency.exponentialRampToValueAtTime(s,r+n),l.gain.setValueAtTime(i,r),l.gain.exponentialRampToValueAtTime(8e-4,r+n),a.connect(o),o.connect(l),l.connect(Rs),a.start(r),a.stop(r+n+.02)}catch{}}var $n={whoosh:()=>bs(.16,420,1,.18,1700),hit:()=>{kn(115,42,.22,"sine",.7),bs(.12,1300,.8,.34)},clang:()=>{kn(1250,0,.32,"square",.06),kn(1870,0,.28,"triangle",.09),bs(.08,4200,1,.2)},breaker:()=>{kn(180,70,.3,"sawtooth",.22),bs(.14,900,.7,.3)},parry:()=>{kn(2100,0,.42,"triangle",.16),kn(3150,0,.28,"sine",.09),bs(.06,5e3,1,.2)},lock:()=>{$n.clang(),kn(160,70,.3,"sawtooth",.14)},ko:()=>{kn(90,30,.6,"sine",.5),bs(.5,300,.6,.2)},gong:()=>{kn(220,0,.7,"sine",.18),kn(331,0,.5,"sine",.1)}};function Z0(){if(!(!ye||tn))try{tn=ye.createOscillator(),Jn=ye.createBiquadFilter();let n=ye.createGain();tn.type="sawtooth",tn.frequency.value=55,Jn.type="lowpass",Jn.frequency.value=190,Jn.Q.value=.8,n.gain.value=.035,tn.connect(Jn),Jn.connect(n),n.connect(Rs),tn.start(),tn.gainNode=n}catch{tn=null}}function J0(){if(tn){try{tn.stop()}catch{}tn=null,Jn=null}}function bu(n){Jn&&(Jn.frequency.value=190+n*130),tn&&tn.gainNode&&(tn.gainNode.gain.value=.03+n*.02)}var Eu=document.body,ac=1,oc=1;function Es(n,t,e,i){let s=e.clone().project(_e.camera),r=document.createElement("div");r.className="cl",r.textContent=n,r.style.left=(s.x+1)/2*ac+"px",r.style.top=(1-s.y)/2*oc+"px",r.style.color=t,i&&(r.style.fontSize=i+"px"),Eu.appendChild(r),setTimeout(()=>r.remove(),780)}function $0(n,t){let e=document.createElement("div");e.className="bigcall",e.textContent=n,e.style.color=t||"#f2e3c6",Eu.appendChild(e),setTimeout(()=>e.remove(),1e3)}function We(n,t){return!Ui[t]||n.move===t&&t!=="idle"?!1:(n.move=t,n.age=0,n.resolved=!1,n._winMin=1e9,D.movesSeen[t]=(D.movesSeen[t]||0)+1,Mi[t]?(n.atkId++,n.whooshAt=Ui[t].dur/n.cat.tempo*.3,n.whooshed=!1):n.whooshAt=-1,!0)}function Ao(n,t,e){let i=t.x-n.x,s=t.y-n.y,r=t.z-n.z,a=ge(((e.x-n.x)*i+(e.y-n.y)*s+(e.z-n.z)*r)/Math.max(i*i+s*s+r*r,1e-6),0,1),o=n.x+i*a,l=n.y+s*a,h=n.z+r*a;return{d:Math.hypot(e.x-o,e.y-l,e.z-h),x:o,y:l,z:h,t:a}}var mu=new k,gu=new k,K0=new k;function Is(n,t){let e=n.markers;return e.tip.getWorldPosition(mu),e.hilt.getWorldPosition(gu),t.a.copy(gu),t.b.copy(mu),t}var fn={a:new k,b:new k},ws={a:new k,b:new k},Ro=new k;function ic(n,t){n.hpCur=Math.max(0,n.hpCur-t),D.hp[n.key]=n.hpCur,n.flash=1,n.isPlayer&&(D.taken+=t),n.hpCur<=0&&D.mode==="fight"&&e_(n)}function Q0(n,t,e){let i=Is(n,fn),s=Is(t,ws);t.markers.chest.getWorldPosition(Ro);let r=Ao(i.a,i.b,Ro),a=Math.min(e!==void 0?e:1e9,r.d),o=K0.set(r.x,r.y,r.z),l=Ui[n.move],h=!!rc[t.move];if(n.resolved=!0,!l)return;let d=D.time-t.lastTapAt;if(a<fu&&t.isPlayer&&d>=0&&d<.26&&!Mi[t.move]&&t.stun<=0){As("PARRY",o,n,t),n.vx=-n.cat.dir*2.8,n.stun=Math.max(n.stun,.55),We(n,"reel"),t.counterUntil=D.time+1.4,D.mode==="fight"&&t.move!=="flick"&&We(t,"flick");return}if(h&&a<fu){let f=D.time-t.lastGuardAt;if(l.gb&&f>.4&&a<ec*1.2){As("BREAK",o,n,t),ic(t,(l.dmg||10)*n.cat.weight*nc(n)*.45),t.flash=.7,t.stun=Math.max(t.stun,.4),t.vx=n.cat.dir*2.3;return}if(a<ec){As("BLOCK",o,n,t),ic(t,(l.dmg||10)*n.cat.weight*nc(n)*.12),t.flash=.3,t.vx=n.cat.dir*1.1;return}}if(a<ec){let f=D.time<t.counterUntil;As("HIT",o,n,t),ic(t,(l.dmg||10)*n.cat.weight*nc(n)*(f?1.4:1)),t.stun=Math.max(t.stun,.36),t.vx=n.cat.dir*(f?3:2.3),D.mode==="fight"&&We(t,"reel");return}As("WHIFF",i.b,n,t)}function As(n,t,e,i){let s=e?e.cat.accent:"#f2e3c6",r=t;n==="HIT"?(D.hits++,D.freeze=.085,D.shake=.16,D.zoomT=1.15,_e.spawnSparks(r.x,r.y,r.z,-e.cat.dir,.4,26,3.4,"#fff4d2"),_e.spawnSparks(r.x,r.y,r.z,0,0,8,1.6,s,k0),Es("HIT","#ff8d7f",r,26),$n.hit()):n==="BREAK"?(D.breaks++,D.freeze=.11,D.shake=.14,D.zoomT=1.17,_e.spawnSparks(r.x,r.y,r.z,0,.5,24,3.2,"#ffd9a0"),Es("BREAK","#ffb02e",r,26),$n.breaker()):n==="BLOCK"?(D.blocks++,D.freeze=.04,D.shake=.06,D.zoomT=1.05,_e.spawnSparks(r.x,r.y,r.z,0,.6,14,2.2,"#ffe7a3"),Es("CLANG","#f2e3c6",r,20),$n.clang()):n==="LOCK"?(D.locks++,D.freeze=.13,D.shake=.12,D.zoomT=1.2,_e.spawnSparks(r.x,r.y,r.z,0,.5,22,3,"#ffffff"),Es("LOCK","#f2e3c6",r,26),$n.lock()):n==="PARRY"?(D.parries++,D.freeze=.1,D.shake=.09,D.zoomT=1.14,_e.spawnSparks(r.x,r.y,r.z,0,.7,18,2.6,"#ffe7a3"),Es("PARRY","#ffb02e",r,24),$n.parry()):n==="WHIFF"&&(D.whiffs++,D.lastWhiffAt=D.time,Es("WHIFF","#9c8e74",r,16))}function _u(n){let t=Ui[n.move];if(!Mi[n.move]||!t)return!1;let e=n.age/(t.dur/n.cat.tempo);return e>=t.hit[0]&&e<=t.hit[1]}function j0(){let[n,t]=Ps;if(n.resolved||t.resolved||D.time-D._lastLock<3||!_u(n)||!_u(t))return;Is(n,fn),Is(t,ws);let e=new k().addVectors(fn.b,ws.b).multiplyScalar(.5);Math.min(Ao(fn.a,fn.b,ws.b).d,Ao(ws.a,ws.b,fn.b).d)<W0*1.4&&(D._lastLock=D.time,As("LOCK",e,n,t),n.stun=Math.max(n.stun,.5),t.stun=Math.max(t.stun,.5),n.vx=-n.cat.dir*3,t.vx=-t.cat.dir*3,We(n,"reel"),We(t,"reel"),n.resolved=!0,t.resolved=!0)}var Te={cool:1.4,plan:null,seen:-1,off:!1};function t_(n){if(Te.off||D.mode!=="fight"||D.lock>0)return;let t=X0(),e=Kn();if(!t||!e)return;let i=ge(Su(t),-1,1),s=ge(.3+.7*ge(i,0,1),.3,1),r=ge(-i,0,1);if(Te.cool-=n,e.atkId!==Te.seen&&Mi[e.move]&&(Te.seen=e.atkId,Je()<.3+.34*r)){let d=Ui[e.move],f=d.dur/e.cat.tempo,u=D.time+Math.max(0,f*d.hit[0]-e.age);Te.plan={at:u-(.13+Je()*.18)}}if(Te.plan&&D.time>=Te.plan.at&&((t.move==="idle"||rc[t.move])&&(t.lastTapAt=D.time,t.lastGuardAt=D.time,We(t,"guard")),Te.plan=null),t.move!=="idle"||t.stun>0||D.lock>0||Te.cool>0)return;let a=D.time-D.lastWhiffAt<.45&&D.lastWhiffAt>0,o=rc[e.move]&&D.time-e.lastGuardAt>.4,l=Mi[e.move]&&e.age<Ui[e.move].dur/e.cat.tempo*.55,h=null;if(a)h=Je()<.5?"cut":"slash";else if(o)h="lunge";else if(l)h=Je()<.7?"cut":"slash";else{if(Je()>s){Je()<.55&&(t.lastTapAt=D.time,t.lastGuardAt=D.time,We(t,"guard")),Te.cool=.3+Je()*.45;return}let d=Je();h=d<.42?"lunge":d<.76?"slash":"cut"}We(t,h),Te.cool=vi(1.15,.48,s)*(.82+Je()*.36)}function e_(n){D.mode="fall",D.fallRaw=0,n.stun=0,n.knockDir=Math.sign(n.vx||n.cat.dir)||1,D.loser=n,We(n,"fall"),n.fallT=0,D.freeze=.1,D.timeScale=.35,D.zoomT=1.25,D.shake=.2;let t=Mu(n);t.move!=="idle"&&We(t,"idle"),_e.spawnSparks(n.x,n.y+.1,0,0,.3,20,1.8,"#c9b491"),$n.ko(),bu(1.2)}function n_(){if(D.endShown)return;D.endShown=!0,D.mode="over",D.timeScale=1,document.body.classList.add("menu");let n=D.loser&&D.loser.key!==Kn().key;xe("et").textContent=n?"YOU WIN":"YOU FALL",xe("et").style.color=n?"#ffb02e":"#ff5649",xe("es").textContent=`HITS ${D.hits} / PARRIES ${D.parries} / TAKEN ${Math.round(D.taken)} / ${Math.round(D.roundT)}s`,xe("end").hidden=!1}function Lo(){for(let n of Ps)n.hpCur=100,n.move="idle",n.age=0,n.resolved=!1,n._winMin=1e9,n.stun=0,n.vx=0,n.xKnock=0,n.bufAt=null,n.chainI=0,n.flash=0,n.lastAtkAt=-9,n.lastTapAt=-9,n.lastGuardAt=-9,n.counterUntil=-9,n.whooshed=!1,n.pose=je(),n.poseT=je(),n.tailInit=!1,n.move="idle";Te.cool=1.2,Te.plan=null,Te.seen=-1,Co.clear(),Po=new Map,D.hp={gato:100,sultan:100},D.hits=D.blocks=D.breaks=D.locks=D.parries=D.whiffs=0,D.taken=0,D.roundT=0,D.lastWhiffAt=-9,D._lastLock=-9,D.timeScale=1,D.freeze=0,D.shake=0,D.zoomT=1,D.endShown=!1,D.loser=null,D.fallRaw=0,xe("gYou").textContent=Kn().key==="gato"?"YOU":"",xe("sYou").textContent=Kn().key==="sultan"?"YOU":"",xe("end").hidden=!0,Nu()}function Tr(n){D.mode!=="choose"&&D.mode!=="over"||(Ls(),document.body.classList.remove("menu"),Ut.gato.isPlayer=n==="gato",Ut.sultan.isPlayer=n==="sultan",xe("menu").hidden=!0,Lo(),D.mode="fight",D.lock=.4,Z0(),$n.gong(),$0("FIGHT","#f2e3c6"),Te.cool=.9+Je()*.5)}function Tu(){Tr(Kn().key)}function i_(){xe("end").hidden=!0,xe("menu").hidden=!1,document.body.classList.add("menu"),D.mode="choose",Lo(),J0()}var Co=new Set,Po=new Map;function wu(){if(D.mode!=="fight"||D.lock>0)return;let n=Kn();n&&(n.bufAt=D.time,Cu("a"))}function Au(n){if(D.mode!=="fight"||D.lock>0)return;let t=Kn();t&&(Co.add(n),t.guardHeld=!0,t.lastTapAt=D.time,t.lastGuardAt=D.time,t.move==="idle"&&We(t,"guard"),Cu("g"))}function Ru(n){Co.delete(n);let t=Kn();t&&(t.guardHeld=Co.size>0,!t.guardHeld&&t.move==="guard"&&t.age>.16&&We(t,"idle"))}function Cu(n){D.hintUsed[n]||(D.hintUsed[n]=1,xe(n==="a"?"ha":"hg").classList.add("off"))}Cs.addEventListener("pointerdown",n=>{if(Ls(),D.mode==="choose"){Tr(n.clientX<innerWidth*.5?"gato":"sultan");return}if(D.mode!=="fight")return;let t=n.clientX<innerWidth*.5?"a":"g";Po.set(n.pointerId,t),t==="a"?wu():Au(n.pointerId)});var Pu=n=>{let t=Po.get(n.pointerId);Po.delete(n.pointerId),t==="g"&&Ru(n.pointerId)};Cs.addEventListener("pointerup",Pu);Cs.addEventListener("pointercancel",Pu);addEventListener("keydown",n=>{n.repeat||(Ls(),["KeyA","KeyJ","ArrowLeft"].includes(n.code)?wu():["Space","KeyL","ArrowRight"].includes(n.code)?(n.preventDefault(),Au("kb")):n.code==="Enter"&&D.mode==="over"&&Tu())});addEventListener("keyup",n=>{["Space","KeyL","ArrowRight"].includes(n.code)&&Ru("kb")});xe("b0").addEventListener("click",()=>Tr("gato"));xe("b1").addEventListener("click",()=>Tr("sultan"));xe("again").addEventListener("click",()=>{Ls(),Tu()});xe("change").addEventListener("click",()=>{Ls(),i_()});function s_(n){if(D.freezeTape){bn.push(n.price!=null?n.price:D.price||0),bn.length>96&&bn.shift();return}D.pressure=n.pressure||0,D.price=n.price,D.prov=n.connected?"LIVE \xB7 "+(n.providerLabel||""):n.simulated?"DEMO TAPE":"RECONNECTING",n.price!=null&&(bn.push(n.price),bn.length>96&&bn.shift())}function r_(){let n=1/0,t=-1/0;for(let e of bn)e<n&&(n=e),e>t&&(t=e);return isFinite(n)?{min:n,span:Math.max(t-n,t*2e-4,6)}:{min:0,span:1}}var Io=-2.9,Iu=2.9;function Er(n,t){if(bn.length<2)return .62;let{min:i,span:s}=r_(),r=bn.length,a=ge((n-Io)/(Iu-Io),0,1),o=ge(a*r-1,0,r-1),l=Math.floor(o),h=o-l,f=(vi(bn[l],bn[Math.min(l+1,r-1)],h)-i)/s,u=n/2.9;return .62+(f-.5)*.36-.05*(1-u*u)+Math.sin((t||0)*1.4+n*.8)*.012}var Lu=xe("gBar"),Du=xe("sBar"),a_=xe("px"),wo=xe("fl"),xu=xe("prov"),an={pxNum:0,fl:"",prov:"",g:"",s:""};function Nu(){Lu.style.transform=`scaleX(${ge((D.hp.gato||0)/100,0,1)})`,Du.style.transform=`scaleX(${ge((D.hp.sultan||0)/100,0,1)})`}function o_(){if(D.price!=null&&D.price!==an.pxNum&&(an.pxNum=D.price,a_.innerHTML=`${Math.round(D.price).toLocaleString("en-US")} <small>USDT</small>`),D.price==null)an.fl!=="waiting"&&(an.fl="waiting",wo.textContent="AWAITING TAPE",wo.removeAttribute("data-side"),D.prov||(an.prov="LINKING TAPE",xu.textContent="LINKING TAPE"));else{let e=D.pressureS>=0,i=Math.round(Math.abs(D.pressureS)*100),s=i===0?"PRESSURE 0":`${e?"BUY":"SELL"} PRESSURE ${e?"+":"-"}${i}`;s!==an.fl&&(an.fl=s,wo.textContent=s,wo.dataset.side=e?"buy":"sell")}D.prov&&D.prov!==an.prov&&(an.prov=D.prov,xu.textContent=D.prov);let n=ge((D.hp.gato||0)/100,0,1).toFixed(3),t=ge((D.hp.sultan||0)/100,0,1).toFixed(3);n!==an.g&&(an.g=n,Lu.style.transform=`scaleX(${n})`),t!==an.s&&(an.s=t,Du.style.transform=`scaleX(${t})`)}function l_(n,t){let e=n.pose,i=n.poseT,s=n.actor.joints;for(let f of Object.keys(e)){let u=q0[f]||.1;if(Array.isArray(e[f]))for(let p=0;p<3;p++)e[f][p]=dn(e[f][p],i[f][p],u,t);else e[f]=dn(e[f],i[f],u,t)}let r=e;s.root.rotation.y=n.cat.yaw,s.root.rotation.x=r.rootPitch,s.torso.rotation.set(r.torso,r.torsoYaw,r.torsoRoll),s.head.rotation.set(r.head,r.headYaw,0);let a=s.arms[n.armSword],o=s.arms[n.armOff],l=n.armSword==="L"?-1:1,h=n.armOff==="L"?-1:1;if(a.sh.rotation.set(r.shR[0],r.shR[1]*l,r.shR[2]*l),a.el.rotation.x=r.elR,a.paw.rotation.set(r.wrR[0],r.wrR[1]*l,r.wrR[2]*l),o.sh.rotation.set(r.shL[0],r.shL[1]*h,r.shL[2]*h),o.el.rotation.x=r.elL,s.legs.L.hip.rotation.x=r.hipL,s.legs.L.knee.rotation.x=r.kneeL,s.legs.R.hip.rotation.x=r.hipR,s.legs.R.knee.rotation.x=r.kneeR,s.tailRoot.rotation.y=r.tail,s.tailRoot.rotation.x=r.tailLift,s.cape&&(s.cape.rotation.z=Math.sin(D.time*2.6)*.05),!n.tailInit){n.tailPos=[];for(let f=0;f<8;f++)n.tailPos.push(new k(0,.02-f*.075,-f*.075));n.tailInit=!0}let d=.075;for(let f=1;f<8;f++){let u=n.tailPos[f-1],p=n.tailPos[f],x=p.sub(u);x.lengthSq()<1e-6&&x.set(0,-1,0),x.normalize().multiplyScalar(d),p.copy(u).add(x),p.y-=.01*f*(t*8),p.x+=Math.sin(D.time*2.2+f*.6)*.0018*f}s.tail.forEach((f,u)=>f.position.copy(n.tailPos[u]))}function c_(n,t){let e=Ui[n.move],i=e.dur/n.cat.tempo;if(n.age+=t,n.stun=Math.max(0,n.stun-t),n.move!=="idle"&&n.move!=="fall"&&n.age>=i&&We(n,"idle"),n.isPlayer&&n.guardHeld&&n.move==="idle"&&n.stun<=0&&D.lock<=0&&D.mode==="fight"&&We(n,"guard"),n.move==="fall"){let s=ge(n.age/.55,0,1);n.poseT=yi(Ts.reel,je(),.45),n.poseT.rootPitch=-1.3*tc(s)-Math.sin(Math.min(n.age,1)*4)*.06*(1-s),n.poseT.up=.04*s,n.xKnock=dn(n.xKnock,n.knockDir*.35,.5,t)}else n.poseT=Y0(n,e);if(n.isPlayer&&n.bufAt!=null&&n.stun<=0&&D.lock<=0&&D.mode==="fight"){if(n.move==="idle")vu(n);else if(Mi[n.move]){let s=Math.max(e.hit[1]*i+.02,i*.62);n.age>=s&&vu(n)}}if(n.blinkT-=t,n.blinkT<=0&&(n.blinking=.09,n.blinkT=2+Je()*3.5),n.blinking>0){n.blinking-=t;let s=n.blinking>0?.18:1;n.actor.joints.eyes.forEach(r=>{r.scale.y=.05*(s===1?1:.25)})}else n.actor.joints.eyes.forEach(s=>{s.scale.y=dn(s.scale.y,.05,.1,t)});if(n.vx=dn(n.vx,0,.12,t),n.xKnock=ge(n.xKnock+n.vx*t,-.55,.55),n.flash=Math.max(0,(n.flash||0)-t*6),Mi[n.move]&&!n.whooshed&&n.age>=n.whooshAt&&(n.whooshed=!0,n.whooshAt>=0&&$n.whoosh()),Mi[n.move]&&e.hit){let s=n.age/i;if(s>=e.hit[0]&&s<=e.hit[1]){let r=Mu(n);Is(n,fn),r.markers.chest.getWorldPosition(Ro);let a=Ao(fn.a,fn.b,Ro);n._winMin=Math.min(n._winMin,a.d),(s+t/i>=e.hit[1]||n.age+t>=i)&&!n.resolved&&D.mode==="fight"&&(Q0(n,r,n._winMin),n.resolved=!0)}}}function vu(n){let t=["lunge","slash","cut"];D.time-n.lastAtkAt<1.6?n.chainI=(n.chainI+1)%3:n.chainI=0,n.lastAtkAt=D.time,n.bufAt=null,We(n,t[n.chainI])}var sc=0;function Uu(n){if(requestAnimationFrame(Uu),!D.ready)return;let t=n/1e3,e=D.last?Math.min(.05,t-D.last):.016;D.last=t,D.callAge+=e,D.freeze>0&&(D.freeze-=e,e*=.02);let i=e*D.timeScale;D.time+=i,D.lock>0&&(D.lock-=e),D.mode==="fight"&&(D.roundT+=e),D.mode==="fall"&&(D.fallRaw+=e,D.fallRaw>.6&&(D.timeScale=dn(D.timeScale,1,.25,e)),D.fallRaw>2.05&&n_()),D.pressureS=dn(D.pressureS,D.pressure,.35,e),bu(ge(Math.abs(D.pressureS),0,1)+(D.mode==="fall"?.8:0));let a=vi(2.7,.98,D.mode==="choose"?.12:1);Ut.gato.x=-a/2+Ut.gato.xKnock,Ut.sultan.x=a/2+Ut.sultan.xKnock;for(let p of Ps){let x=Er(p.x,D.time);p.rideY=p.rideY==null?x:dn(p.rideY,x,.13,Math.max(i,1e-4)),p.y=p.rideY+.01}(D.mode==="fight"||D.mode==="fall")&&t_(i);for(let p of Ps)c_(p,i),l_(p,i),p.actor.joints.root.position.set(p.x+p.pose.fwd*p.cat.dir,p.y+p.pose.up+.095,0);_e.scene.updateMatrixWorld(!0),D.mode==="fight"&&j0();let o=(Ut.gato.x+Ut.sultan.x)/2;sc=dn(sc,o+Math.sin(D.time*.4)*.06,.5,e),D.zoom=dn(D.zoom,D.zoomT,.09,e),D.zoomT=dn(D.zoomT,1,.18,e),D.shake=Math.max(0,D.shake-e*1.6);let l=(Je()-.5)*D.shake,h=(Je()-.5)*D.shake,d=1+ge(1.35-a,0,.6)*.18;_e.frame(D.zoom*d,l,h,Er(o,D.time)-.6,sc);let f=(D.pressureS+1)/2;_e.setFogTint(f),_e.setLamps(f,1+D.zoomT);let u=[];for(let p=0;p<_e.rope.N;p++){let x=Io+(Iu-Io)*p/(_e.rope.N-1);u.push({x,y:Er(x,D.time),z:Math.sin(p*.33+D.time*1.2)*.02})}_e.rope.update(u),_e.ropeGlowMat.color.set(D.pressureS>=0?"#ffb02e":"#ff5649"),_e.setShadows(Ut.gato.x,Ut.gato.y-.085,Ut.sultan.x,Ut.sultan.y-.085),_e.updateParticles(i,D.time,Er(0,D.time)),_e.renderer.render(_e.scene,_e.camera),o_(),D.frames++}function Fu(){ac=Cs.clientWidth,oc=Cs.clientHeight,_e.resize(ac,oc)}Fu();addEventListener("resize",Fu);document.addEventListener("pointerdown",Ls,{once:!0});var Ou=new uu({mode:H0?"demo":"auto",seedHistory:!1,demoSeed:7});Ou.onChange(s_);Ou.start();var Bu=jl("gato"),zu=jl("sultan");Ut.gato.actor=Bu;Ut.sultan.actor=zu;_e.scene.add(Bu.group,zu.group);for(let n of Ps){let t=new me;t.position.set(0,1.02,0),n.actor.joints.sword.add(t);let e=new me;e.position.set(0,.06,0),n.actor.joints.sword.add(e);let i=new me;i.position.set(0,.55,.01),n.actor.joints.torso.add(i),n.markers={tip:t,hilt:e,chest:i},n.pose=je(),n.poseT=je()}Ut.gato.x=-1.25;Ut.sultan.x=1.25;Ut.gato.y=Ut.sultan.y=Er(0,0)+.01;Lo();D.ready=!0;var yu=xe("boot");yu&&yu.remove();requestAnimationFrame(Uu);window.__duel3d={ready:()=>D.ready,reset:()=>Lo(),brainOff:n=>{Te.off=!!n},choose:n=>Tr(n),drive:n=>{n==null?D.freezeTape=!1:(D.freezeTape=!0,D.pressure=n)},force:(n,t)=>{t==="guard"&&(Ut[n].lastGuardAt=D.time),We(Ut[n],t)},setHp:(n,t)=>{Ut[n].hpCur=t,D.hp[n]=t,Nu()},state:()=>({time:+D.time.toFixed(3),pressure:+D.pressureS.toFixed(3),price:D.price,status:D.prov,mode:D.mode,hp:{gato:+Ut.gato.hpCur.toFixed(1),sultan:+Ut.sultan.hpCur.toFixed(1)},move:{gato:Ut.gato.move,sultan:Ut.sultan.move},age:{gato:+Ut.gato.age.toFixed(3),sultan:+Ut.sultan.age.toFixed(3)},pos:{gato:{x:+Ut.gato.x.toFixed(2),y:+Ut.gato.y.toFixed(2)},sultan:{x:+Ut.sultan.x.toFixed(2),y:+Ut.sultan.y.toFixed(2)}},player:Kn().key,contacts:{hits:D.hits,blocks:D.blocks,breaks:D.breaks,locks:D.locks,parries:D.parries,whiffs:D.whiffs,taken:+D.taken.toFixed(1)},movesSeen:D.movesSeen,frames:D.frames,gap:+(Ut.sultan.x-Ut.gato.x).toFixed(2),zoom:+(D.zoom*(1+ge(1.35-(Ut.sultan.x-Ut.gato.x),0,.6)*.18)).toFixed(3)}),brain:()=>({cool:+Te.cool.toFixed(2),off:Te.off,plan:Te.plan?+Te.plan.at.toFixed(2):null,seen:Te.seen}),measure:()=>{let n={};for(let t of Ps)Is(t,fn),n[t.key]={tip:{x:+fn.b.x.toFixed(2),y:+fn.b.y.toFixed(2)},x:+t.x.toFixed(2),y:+t.y.toFixed(2),move:t.move,age:+t.age.toFixed(2),hp:t.hpCur};return n}};
