/**
 * This code has been instrumented using Recognizer
 * https://github.com/equiet/recognizer
 */

var __recognizer432552797 = (function () {
    'use strict';

    var global = this;

    function Tracer() {
        this._calls = [];
        this._args = [];
        this.global = global;

        this._probeValues = {};
    }
    Tracer.prototype = {
        logEntry: function (location, args) {
            this._calls.push({
                index: this._calls.length,
                position: location,
                // args: Array.prototype.slice.call(args),
                argsCount: args.length,
                time: Date.now()
            });
            this._args.push(_.cloneDeep(args));
        },

        getCalls: function (since) {
            var calls = this._calls.filter(function(call) {
                return (since) ? call.time > since : true;
            });
            return stringify(calls);
        },

        getCallCount: function () {
            return this._calls.length;
        },

        logProbe: function (location, result) {
            this._probeValues[location.toString()] = _.cloneDeep(result);
            return result;
        },

        updateProbeValues: function () {
            var self = this;

            var probeIds = Object.keys(this._probeValues);
            var output = probeIds.map(function(probeId) {
               return {
                   id: probeId,
                   type: self.getType(self._probeValues[probeId])
               };
            });

            return stringify(output);
        },

        getType: function (value) {
            var type = typeof value;

            if (type === 'number' && isNaN(value)) {
                type = 'NaN';
            }
            if (type === null) {
                type = 'null';
            }

            return type;
        },

        test: function () {
            console.log('[recognizer tracer] test function run successfully');
        },

        connect: function () {
            return this;
        }
    };


    /**
     * JSON stringify with circular references
     * Copyright (c) Isaac Z. Schlueter ("Author")
     * The BSD License
     */
    function getSerialize(a,b){var c=[],d=[];return b=b||function(a,b){return"[Circular "+getPath(b,c,d)+"]"},function(e,f){var g=f;return"object"==typeof f&&f&&(-1!==c.indexOf(f)?g=b(e,f):(c.push(f),d.push(e))),a&&(g=a(e,g)),g}}
    function getPath(a,b,c){var d=b.indexOf(a),e=[c[d]];for(d--;d>=0;d--)b[d][e[0]]===a&&(a=b[d],e.unshift(c[d]));return"~"+e.join(".")}
    function stringify(a,b,c,d){return JSON.stringify(a,getSerialize(b,d),c)}stringify.getSerialize=getSerialize;


    /**
     * @license
     * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
     * Build: `lodash modern -o ./dist/lodash.js`
     */
    ;(function(){function n(n,t,e){e=(e||0)-1;for(var r=n?n.length:0;++e<r;)if(n[e]===t)return e;return-1}function t(t,e){var r=typeof e;if(t=t.l,"boolean"==r||null==e)return t[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?e:m+e;return t=(t=t[r])&&t[u],"object"==r?t&&-1<n(t,e)?0:-1:t?0:-1}function e(n){var t=this.l,e=typeof n;if("boolean"==e||null==n)t[n]=true;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?n:m+n,t=t[e]||(t[e]={});"object"==e?(t[r]||(t[r]=[])).push(n):t[r]=true
    }}function r(n){return n.charCodeAt(0)}function u(n,t){for(var e=n.m,r=t.m,u=-1,o=e.length;++u<o;){var i=e[u],a=r[u];if(i!==a){if(i>a||typeof i=="undefined")return 1;if(i<a||typeof a=="undefined")return-1}}return n.n-t.n}function o(n){var t=-1,r=n.length,u=n[0],o=n[r/2|0],i=n[r-1];if(u&&typeof u=="object"&&o&&typeof o=="object"&&i&&typeof i=="object")return false;for(u=f(),u["false"]=u["null"]=u["true"]=u.undefined=false,o=f(),o.k=n,o.l=u,o.push=e;++t<r;)o.push(n[t]);return o}function i(n){return"\\"+U[n]
    }function a(){return h.pop()||[]}function f(){return g.pop()||{k:null,l:null,m:null,"false":false,n:0,"null":false,number:null,object:null,push:null,string:null,"true":false,undefined:false,o:null}}function l(n){n.length=0,h.length<_&&h.push(n)}function c(n){var t=n.l;t&&c(t),n.k=n.l=n.m=n.object=n.number=n.string=n.o=null,g.length<_&&g.push(n)}function p(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Array(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function s(e){function h(n,t,e){if(!n||!V[typeof n])return n;
        t=t&&typeof e=="undefined"?t:tt(t,e,3);for(var r=-1,u=V[typeof n]&&Fe(n),o=u?u.length:0;++r<o&&(e=u[r],false!==t(n[e],e,n)););return n}function g(n,t,e){var r;if(!n||!V[typeof n])return n;t=t&&typeof e=="undefined"?t:tt(t,e,3);for(r in n)if(false===t(n[r],r,n))break;return n}function _(n,t,e){var r,u=n,o=u;if(!u)return o;for(var i=arguments,a=0,f=typeof e=="number"?2:i.length;++a<f;)if((u=i[a])&&V[typeof u])for(var l=-1,c=V[typeof u]&&Fe(u),p=c?c.length:0;++l<p;)r=c[l],"undefined"==typeof o[r]&&(o[r]=u[r]);
        return o}function U(n,t,e){var r,u=n,o=u;if(!u)return o;var i=arguments,a=0,f=typeof e=="number"?2:i.length;if(3<f&&"function"==typeof i[f-2])var l=tt(i[--f-1],i[f--],2);else 2<f&&"function"==typeof i[f-1]&&(l=i[--f]);for(;++a<f;)if((u=i[a])&&V[typeof u])for(var c=-1,p=V[typeof u]&&Fe(u),s=p?p.length:0;++c<s;)r=p[c],o[r]=l?l(o[r],u[r]):u[r];return o}function H(n){var t,e=[];if(!n||!V[typeof n])return e;for(t in n)me.call(n,t)&&e.push(t);return e}function J(n){return n&&typeof n=="object"&&!Te(n)&&me.call(n,"__wrapped__")?n:new Q(n)
    }function Q(n,t){this.__chain__=!!t,this.__wrapped__=n}function X(n){function t(){if(r){var n=p(r);be.apply(n,arguments)}if(this instanceof t){var o=nt(e.prototype),n=e.apply(o,n||arguments);return wt(n)?n:o}return e.apply(u,n||arguments)}var e=n[0],r=n[2],u=n[4];return $e(t,n),t}function Z(n,t,e,r,u){if(e){var o=e(n);if(typeof o!="undefined")return o}if(!wt(n))return n;var i=ce.call(n);if(!K[i])return n;var f=Ae[i];switch(i){case T:case F:return new f(+n);case W:case P:return new f(n);case z:return o=f(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o
    }if(i=Te(n),t){var c=!r;r||(r=a()),u||(u=a());for(var s=r.length;s--;)if(r[s]==n)return u[s];o=i?f(n.length):{}}else o=i?p(n):U({},n);return i&&(me.call(n,"index")&&(o.index=n.index),me.call(n,"input")&&(o.input=n.input)),t?(r.push(n),u.push(o),(i?St:h)(n,function(n,i){o[i]=Z(n,t,e,r,u)}),c&&(l(r),l(u)),o):o}function nt(n){return wt(n)?ke(n):{}}function tt(n,t,e){if(typeof n!="function")return Ut;if(typeof t=="undefined"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r=="undefined"&&(De.funcNames&&(r=!n.name),r=r||!De.funcDecomp,!r)){var u=ge.call(n);
        De.funcNames||(r=!O.test(u)),r||(r=E.test(u),$e(n,r))}if(false===r||true!==r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)}}return Mt(n,t)}function et(n){function t(){var n=f?i:this;if(u){var h=p(u);be.apply(h,arguments)}return(o||c)&&(h||(h=p(arguments)),o&&be.apply(h,o),c&&h.length<a)?(r|=16,et([e,s?r:-4&r,h,null,i,a])):(h||(h=arguments),l&&(e=n[v]),this instanceof t?(n=nt(e.prototype),h=e.apply(n,h),wt(h)?h:n):e.apply(n,h))
    }var e=n[0],r=n[1],u=n[2],o=n[3],i=n[4],a=n[5],f=1&r,l=2&r,c=4&r,s=8&r,v=e;return $e(t,n),t}function rt(e,r){var u=-1,i=st(),a=e?e.length:0,f=a>=b&&i===n,l=[];if(f){var p=o(r);p?(i=t,r=p):f=false}for(;++u<a;)p=e[u],0>i(r,p)&&l.push(p);return f&&c(r),l}function ut(n,t,e,r){r=(r||0)-1;for(var u=n?n.length:0,o=[];++r<u;){var i=n[r];if(i&&typeof i=="object"&&typeof i.length=="number"&&(Te(i)||yt(i))){t||(i=ut(i,t,e));var a=-1,f=i.length,l=o.length;for(o.length+=f;++a<f;)o[l++]=i[a]}else e||o.push(i)}return o
    }function ot(n,t,e,r,u,o){if(e){var i=e(n,t);if(typeof i!="undefined")return!!i}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&V[typeof n]||t&&V[typeof t]))return false;if(null==n||null==t)return n===t;var f=ce.call(n),c=ce.call(t);if(f==D&&(f=q),c==D&&(c=q),f!=c)return false;switch(f){case T:case F:return+n==+t;case W:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case z:case P:return n==oe(t)}if(c=f==$,!c){var p=me.call(n,"__wrapped__"),s=me.call(t,"__wrapped__");if(p||s)return ot(p?n.__wrapped__:n,s?t.__wrapped__:t,e,r,u,o);
        if(f!=q)return false;if(f=n.constructor,p=t.constructor,f!=p&&!(dt(f)&&f instanceof f&&dt(p)&&p instanceof p)&&"constructor"in n&&"constructor"in t)return false}for(f=!u,u||(u=a()),o||(o=a()),p=u.length;p--;)if(u[p]==n)return o[p]==t;var v=0,i=true;if(u.push(n),o.push(t),c){if(p=n.length,v=t.length,(i=v==p)||r)for(;v--;)if(c=p,s=t[v],r)for(;c--&&!(i=ot(n[c],s,e,r,u,o)););else if(!(i=ot(n[v],s,e,r,u,o)))break}else g(t,function(t,a,f){return me.call(f,a)?(v++,i=me.call(n,a)&&ot(n[a],t,e,r,u,o)):void 0}),i&&!r&&g(n,function(n,t,e){return me.call(e,t)?i=-1<--v:void 0
    });return u.pop(),o.pop(),f&&(l(u),l(o)),i}function it(n,t,e,r,u){(Te(t)?St:h)(t,function(t,o){var i,a,f=t,l=n[o];if(t&&((a=Te(t))||Pe(t))){for(f=r.length;f--;)if(i=r[f]==t){l=u[f];break}if(!i){var c;e&&(f=e(l,t),c=typeof f!="undefined")&&(l=f),c||(l=a?Te(l)?l:[]:Pe(l)?l:{}),r.push(t),u.push(l),c||it(l,t,e,r,u)}}else e&&(f=e(l,t),typeof f=="undefined"&&(f=t)),typeof f!="undefined"&&(l=f);n[o]=l})}function at(n,t){return n+he(Re()*(t-n+1))}function ft(e,r,u){var i=-1,f=st(),p=e?e.length:0,s=[],v=!r&&p>=b&&f===n,h=u||v?a():s;
        for(v&&(h=o(h),f=t);++i<p;){var g=e[i],y=u?u(g,i,e):g;(r?!i||h[h.length-1]!==y:0>f(h,y))&&((u||v)&&h.push(y),s.push(g))}return v?(l(h.k),c(h)):u&&l(h),s}function lt(n){return function(t,e,r){var u={};e=J.createCallback(e,r,3),r=-1;var o=t?t.length:0;if(typeof o=="number")for(;++r<o;){var i=t[r];n(u,i,e(i,r,t),t)}else h(t,function(t,r,o){n(u,t,e(t,r,o),o)});return u}}function ct(n,t,e,r,u,o){var i=1&t,a=4&t,f=16&t,l=32&t;if(!(2&t||dt(n)))throw new ie;f&&!e.length&&(t&=-17,f=e=false),l&&!r.length&&(t&=-33,l=r=false);
        var c=n&&n.__bindData__;return c&&true!==c?(c=p(c),c[2]&&(c[2]=p(c[2])),c[3]&&(c[3]=p(c[3])),!i||1&c[1]||(c[4]=u),!i&&1&c[1]&&(t|=8),!a||4&c[1]||(c[5]=o),f&&be.apply(c[2]||(c[2]=[]),e),l&&we.apply(c[3]||(c[3]=[]),r),c[1]|=t,ct.apply(null,c)):(1==t||17===t?X:et)([n,t,e,r,u,o])}function pt(n){return Be[n]}function st(){var t=(t=J.indexOf)===Wt?n:t;return t}function vt(n){return typeof n=="function"&&pe.test(n)}function ht(n){var t,e;return n&&ce.call(n)==q&&(t=n.constructor,!dt(t)||t instanceof t)?(g(n,function(n,t){e=t
    }),typeof e=="undefined"||me.call(n,e)):false}function gt(n){return We[n]}function yt(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==D||false}function mt(n,t,e){var r=Fe(n),u=r.length;for(t=tt(t,e,3);u--&&(e=r[u],false!==t(n[e],e,n)););return n}function bt(n){var t=[];return g(n,function(n,e){dt(n)&&t.push(e)}),t.sort()}function _t(n){for(var t=-1,e=Fe(n),r=e.length,u={};++t<r;){var o=e[t];u[n[o]]=o}return u}function dt(n){return typeof n=="function"}function wt(n){return!(!n||!V[typeof n])
    }function jt(n){return typeof n=="number"||n&&typeof n=="object"&&ce.call(n)==W||false}function kt(n){return typeof n=="string"||n&&typeof n=="object"&&ce.call(n)==P||false}function xt(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;)u[t]=n[e[t]];return u}function Ct(n,t,e){var r=-1,u=st(),o=n?n.length:0,i=false;return e=(0>e?Ie(0,o+e):e)||0,Te(n)?i=-1<u(n,t,e):typeof o=="number"?i=-1<(kt(n)?n.indexOf(t,e):u(n,t,e)):h(n,function(n){return++r<e?void 0:!(i=n===t)}),i}function Ot(n,t,e){var r=true;t=J.createCallback(t,e,3),e=-1;
        var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&(r=!!t(n[e],e,n)););else h(n,function(n,e,u){return r=!!t(n,e,u)});return r}function Nt(n,t,e){var r=[];t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}else h(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function It(n,t,e){t=J.createCallback(t,e,3),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return h(n,function(n,e,r){return t(n,e,r)?(u=n,false):void 0}),u}for(;++e<r;){var o=n[e];
        if(t(o,e,n))return o}}function St(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof u=="number")for(;++r<u&&false!==t(n[r],r,n););else h(n,t);return n}function Et(n,t,e){var r=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof r=="number")for(;r--&&false!==t(n[r],r,n););else{var u=Fe(n),r=u.length;h(n,function(n,e,o){return e=u?u[--r]:--r,t(o[e],e,o)})}return n}function Rt(n,t,e){var r=-1,u=n?n.length:0;if(t=J.createCallback(t,e,3),typeof u=="number")for(var o=Xt(u);++r<u;)o[r]=t(n[r],r,n);
    else o=[],h(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function At(n,t,e){var u=-1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a>o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e>u&&(u=e,o=n)});return o}function Dt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=J.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else h(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)
    });return e}function $t(n,t,e,r){var u=3>arguments.length;return t=J.createCallback(t,r,4),Et(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)}),e}function Tt(n){var t=-1,e=n?n.length:0,r=Xt(typeof e=="number"?e:0);return St(n,function(n){var e=at(0,++t);r[t]=r[e],r[e]=n}),r}function Ft(n,t,e){var r;t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else h(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function Bt(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=-1;
        for(t=J.createCallback(t,e,3);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[0]:v;return p(n,0,Se(Ie(0,r),u))}function Wt(t,e,r){if(typeof r=="number"){var u=t?t.length:0;r=0>r?Ie(0,u+r):r||0}else if(r)return r=zt(t,e),t[r]===e?r:-1;return n(t,e,r)}function qt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=J.createCallback(t,e,3);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Ie(0,t);return p(n,r)}function zt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?J.createCallback(e,r,1):Ut,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;
        return u}function Pt(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(e=J.createCallback(e,r,3)),ft(n,t,e)}function Kt(){for(var n=1<arguments.length?arguments:arguments[0],t=-1,e=n?At(Ve(n,"length")):0,r=Xt(0>e?0:e);++t<e;)r[t]=Ve(n,t);return r}function Lt(n,t){var e=-1,r=n?n.length:0,u={};for(t||!r||Te(n[0])||(t=[]);++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function Mt(n,t){return 2<arguments.length?ct(n,17,p(arguments,2),null,t):ct(n,1,null,null,t)
    }function Vt(n,t,e){function r(){c&&ve(c),i=c=p=v,(g||h!==t)&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null))}function u(){var e=t-(Ue()-f);0<e?c=_e(u,e):(i&&ve(i),e=p,i=c=p=v,e&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null)))}var o,i,a,f,l,c,p,s=0,h=false,g=true;if(!dt(n))throw new ie;if(t=Ie(0,t)||0,true===e)var y=true,g=false;else wt(e)&&(y=e.leading,h="maxWait"in e&&(Ie(t,e.maxWait)||0),g="trailing"in e?e.trailing:g);return function(){if(o=arguments,f=Ue(),l=this,p=g&&(c||!y),false===h)var e=y&&!c;else{i||y||(s=f);var v=h-(f-s),m=0>=v;
        m?(i&&(i=ve(i)),s=f,a=n.apply(l,o)):i||(i=_e(r,v))}return m&&c?c=ve(c):c||t===h||(c=_e(u,t)),e&&(m=true,a=n.apply(l,o)),!m||c||i||(o=l=null),a}}function Ut(n){return n}function Gt(n,t,e){var r=true,u=t&&bt(t);t&&(e||u.length)||(null==e&&(e=t),o=Q,t=n,n=J,u=bt(t)),false===e?r=false:wt(e)&&"chain"in e&&(r=e.chain);var o=n,i=dt(o);St(u,function(e){var u=n[e]=t[e];i&&(o.prototype[e]=function(){var t=this.__chain__,e=this.__wrapped__,i=[e];if(be.apply(i,arguments),i=u.apply(n,i),r||t){if(e===i&&wt(i))return this;
        i=new o(i),i.__chain__=t}return i})})}function Ht(){}function Jt(n){return function(t){return t[n]}}function Qt(){return this.__wrapped__}e=e?Y.defaults(G.Object(),e,Y.pick(G,A)):G;var Xt=e.Array,Yt=e.Boolean,Zt=e.Date,ne=e.Function,te=e.Math,ee=e.Number,re=e.Object,ue=e.RegExp,oe=e.String,ie=e.TypeError,ae=[],fe=re.prototype,le=e._,ce=fe.toString,pe=ue("^"+oe(ce).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),se=te.ceil,ve=e.clearTimeout,he=te.floor,ge=ne.prototype.toString,ye=vt(ye=re.getPrototypeOf)&&ye,me=fe.hasOwnProperty,be=ae.push,_e=e.setTimeout,de=ae.splice,we=ae.unshift,je=function(){try{var n={},t=vt(t=re.defineProperty)&&t,e=t(n,n,n)&&t
    }catch(r){}return e}(),ke=vt(ke=re.create)&&ke,xe=vt(xe=Xt.isArray)&&xe,Ce=e.isFinite,Oe=e.isNaN,Ne=vt(Ne=re.keys)&&Ne,Ie=te.max,Se=te.min,Ee=e.parseInt,Re=te.random,Ae={};Ae[$]=Xt,Ae[T]=Yt,Ae[F]=Zt,Ae[B]=ne,Ae[q]=re,Ae[W]=ee,Ae[z]=ue,Ae[P]=oe,Q.prototype=J.prototype;var De=J.support={};De.funcDecomp=!vt(e.a)&&E.test(s),De.funcNames=typeof ne.name=="string",J.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,variable:"",imports:{_:J}},ke||(nt=function(){function n(){}return function(t){if(wt(t)){n.prototype=t;
        var r=new n;n.prototype=null}return r||e.Object()}}());var $e=je?function(n,t){M.value=t,je(n,"__bindData__",M)}:Ht,Te=xe||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==$||false},Fe=Ne?function(n){return wt(n)?Ne(n):[]}:H,Be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},We=_t(Be),qe=ue("("+Fe(We).join("|")+")","g"),ze=ue("["+Fe(Be).join("")+"]","g"),Pe=ye?function(n){if(!n||ce.call(n)!=q)return false;var t=n.valueOf,e=vt(t)&&(e=ye(t))&&ye(e);return e?n==e||ye(n)==e:ht(n)
    }:ht,Ke=lt(function(n,t,e){me.call(n,e)?n[e]++:n[e]=1}),Le=lt(function(n,t,e){(me.call(n,e)?n[e]:n[e]=[]).push(t)}),Me=lt(function(n,t,e){n[e]=t}),Ve=Rt,Ue=vt(Ue=Zt.now)&&Ue||function(){return(new Zt).getTime()},Ge=8==Ee(d+"08")?Ee:function(n,t){return Ee(kt(n)?n.replace(I,""):n,t||0)};return J.after=function(n,t){if(!dt(t))throw new ie;return function(){return 1>--n?t.apply(this,arguments):void 0}},J.assign=U,J.at=function(n){for(var t=arguments,e=-1,r=ut(t,true,false,1),t=t[2]&&t[2][t[1]]===n?1:r.length,u=Xt(t);++e<t;)u[e]=n[r[e]];
        return u},J.bind=Mt,J.bindAll=function(n){for(var t=1<arguments.length?ut(arguments,true,false,1):bt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=ct(n[u],1,null,null,n)}return n},J.bindKey=function(n,t){return 2<arguments.length?ct(t,19,p(arguments,2),null,n):ct(t,3,null,null,n)},J.chain=function(n){return n=new Q(n),n.__chain__=true,n},J.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},J.compose=function(){for(var n=arguments,t=n.length;t--;)if(!dt(n[t]))throw new ie;
        return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},J.constant=function(n){return function(){return n}},J.countBy=Ke,J.create=function(n,t){var e=nt(n);return t?U(e,t):e},J.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return tt(n,t,e);if("object"!=r)return Jt(n);var u=Fe(n),o=u[0],i=n[o];return 1!=u.length||i!==i||wt(i)?function(t){for(var e=u.length,r=false;e--&&(r=ot(t[u[e]],n[u[e]],null,true)););return r}:function(n){return n=n[o],i===n&&(0!==i||1/i==1/n)
    }},J.curry=function(n,t){return t=typeof t=="number"?t:+t||n.length,ct(n,4,null,null,null,t)},J.debounce=Vt,J.defaults=_,J.defer=function(n){if(!dt(n))throw new ie;var t=p(arguments,1);return _e(function(){n.apply(v,t)},1)},J.delay=function(n,t){if(!dt(n))throw new ie;var e=p(arguments,2);return _e(function(){n.apply(v,e)},t)},J.difference=function(n){return rt(n,ut(arguments,true,true,1))},J.filter=Nt,J.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(n=Rt(n,e,r)),ut(n,t)
    },J.forEach=St,J.forEachRight=Et,J.forIn=g,J.forInRight=function(n,t,e){var r=[];g(n,function(n,t){r.push(t,n)});var u=r.length;for(t=tt(t,e,3);u--&&false!==t(r[u--],r[u],n););return n},J.forOwn=h,J.forOwnRight=mt,J.functions=bt,J.groupBy=Le,J.indexBy=Me,J.initial=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return p(n,0,Se(Ie(0,u-r),u))},J.intersection=function(){for(var e=[],r=-1,u=arguments.length,i=a(),f=st(),p=f===n,s=a();++r<u;){var v=arguments[r];
        (Te(v)||yt(v))&&(e.push(v),i.push(p&&v.length>=b&&o(r?e[r]:s)))}var p=e[0],h=-1,g=p?p.length:0,y=[];n:for(;++h<g;){var m=i[0],v=p[h];if(0>(m?t(m,v):f(s,v))){for(r=u,(m||s).push(v);--r;)if(m=i[r],0>(m?t(m,v):f(e[r],v)))continue n;y.push(v)}}for(;u--;)(m=i[u])&&c(m);return l(i),l(s),y},J.invert=_t,J.invoke=function(n,t){var e=p(arguments,2),r=-1,u=typeof t=="function",o=n?n.length:0,i=Xt(typeof o=="number"?o:0);return St(n,function(n){i[++r]=(u?t:n[t]).apply(n,e)}),i},J.keys=Fe,J.map=Rt,J.mapValues=function(n,t,e){var r={};
        return t=J.createCallback(t,e,3),h(n,function(n,e,u){r[e]=t(n,e,u)}),r},J.max=At,J.memoize=function(n,t){function e(){var r=e.cache,u=t?t.apply(this,arguments):m+arguments[0];return me.call(r,u)?r[u]:r[u]=n.apply(this,arguments)}if(!dt(n))throw new ie;return e.cache={},e},J.merge=function(n){var t=arguments,e=2;if(!wt(n))return n;if("number"!=typeof t[2]&&(e=t.length),3<e&&"function"==typeof t[e-2])var r=tt(t[--e-1],t[e--],2);else 2<e&&"function"==typeof t[e-1]&&(r=t[--e]);for(var t=p(arguments,1,e),u=-1,o=a(),i=a();++u<e;)it(n,t[u],r,o,i);
        return l(o),l(i),n},J.min=function(n,t,e){var u=1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a<o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e<u&&(u=e,o=n)});return o},J.omit=function(n,t,e){var r={};if(typeof t!="function"){var u=[];g(n,function(n,t){u.push(t)});for(var u=rt(u,ut(arguments,true,false,1)),o=-1,i=u.length;++o<i;){var a=u[o];r[a]=n[a]}}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)||(r[e]=n)
    });return r},J.once=function(n){var t,e;if(!dt(n))throw new ie;return function(){return t?e:(t=true,e=n.apply(this,arguments),n=null,e)}},J.pairs=function(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;){var o=e[t];u[t]=[o,n[o]]}return u},J.partial=function(n){return ct(n,16,p(arguments,1))},J.partialRight=function(n){return ct(n,32,null,p(arguments,1))},J.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,o=ut(arguments,true,false,1),i=wt(n)?o.length:0;++u<i;){var a=o[u];a in n&&(r[a]=n[a])
    }else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},J.pluck=Ve,J.property=Jt,J.pull=function(n){for(var t=arguments,e=0,r=t.length,u=n?n.length:0;++e<r;)for(var o=-1,i=t[e];++o<u;)n[o]===i&&(de.call(n,o--,1),u--);return n},J.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=Ie(0,se((t-n)/(e||1)));for(var u=Xt(t);++r<t;)u[r]=n,n+=e;return u},J.reject=function(n,t,e){return t=J.createCallback(t,e,3),Nt(n,function(n,e,r){return!t(n,e,r)
    })},J.remove=function(n,t,e){var r=-1,u=n?n.length:0,o=[];for(t=J.createCallback(t,e,3);++r<u;)e=n[r],t(e,r,n)&&(o.push(e),de.call(n,r--,1),u--);return o},J.rest=qt,J.shuffle=Tt,J.sortBy=function(n,t,e){var r=-1,o=Te(t),i=n?n.length:0,p=Xt(typeof i=="number"?i:0);for(o||(t=J.createCallback(t,e,3)),St(n,function(n,e,u){var i=p[++r]=f();o?i.m=Rt(t,function(t){return n[t]}):(i.m=a())[0]=t(n,e,u),i.n=r,i.o=n}),i=p.length,p.sort(u);i--;)n=p[i],p[i]=n.o,o||l(n.m),c(n);return p},J.tap=function(n,t){return t(n),n
    },J.throttle=function(n,t,e){var r=true,u=true;if(!dt(n))throw new ie;return false===e?r=false:wt(e)&&(r="leading"in e?e.leading:r,u="trailing"in e?e.trailing:u),L.leading=r,L.maxWait=t,L.trailing=u,Vt(n,t,L)},J.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Xt(n);for(t=tt(t,e,1);++r<n;)u[r]=t(r);return u},J.toArray=function(n){return n&&typeof n.length=="number"?p(n):xt(n)},J.transform=function(n,t,e,r){var u=Te(n);if(null==e)if(u)e=[];else{var o=n&&n.constructor;e=nt(o&&o.prototype)}return t&&(t=J.createCallback(t,r,4),(u?St:h)(n,function(n,r,u){return t(e,n,r,u)
    })),e},J.union=function(){return ft(ut(arguments,true,true))},J.uniq=Pt,J.values=xt,J.where=Nt,J.without=function(n){return rt(n,p(arguments,1))},J.wrap=function(n,t){return ct(t,16,[n])},J.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var e=arguments[n];if(Te(e)||yt(e))var r=r?ft(rt(r,e).concat(rt(e,r))):e}return r||[]},J.zip=Kt,J.zipObject=Lt,J.collect=Rt,J.drop=qt,J.each=St,J.eachRight=Et,J.extend=U,J.methods=bt,J.object=Lt,J.select=Nt,J.tail=qt,J.unique=Pt,J.unzip=Kt,Gt(J),J.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=false),Z(n,t,typeof e=="function"&&tt(e,r,1))
    },J.cloneDeep=function(n,t,e){return Z(n,true,typeof t=="function"&&tt(t,e,1))},J.contains=Ct,J.escape=function(n){return null==n?"":oe(n).replace(ze,pt)},J.every=Ot,J.find=It,J.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=J.createCallback(t,e,3);++r<u;)if(t(n[r],r,n))return r;return-1},J.findKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),h(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.findLast=function(n,t,e){var r;return t=J.createCallback(t,e,3),Et(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0
    }),r},J.findLastIndex=function(n,t,e){var r=n?n.length:0;for(t=J.createCallback(t,e,3);r--;)if(t(n[r],r,n))return r;return-1},J.findLastKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),mt(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.has=function(n,t){return n?me.call(n,t):false},J.identity=Ut,J.indexOf=Wt,J.isArguments=yt,J.isArray=Te,J.isBoolean=function(n){return true===n||false===n||n&&typeof n=="object"&&ce.call(n)==T||false},J.isDate=function(n){return n&&typeof n=="object"&&ce.call(n)==F||false
    },J.isElement=function(n){return n&&1===n.nodeType||false},J.isEmpty=function(n){var t=true;if(!n)return t;var e=ce.call(n),r=n.length;return e==$||e==P||e==D||e==q&&typeof r=="number"&&dt(n.splice)?!r:(h(n,function(){return t=false}),t)},J.isEqual=function(n,t,e,r){return ot(n,t,typeof e=="function"&&tt(e,r,2))},J.isFinite=function(n){return Ce(n)&&!Oe(parseFloat(n))},J.isFunction=dt,J.isNaN=function(n){return jt(n)&&n!=+n},J.isNull=function(n){return null===n},J.isNumber=jt,J.isObject=wt,J.isPlainObject=Pe,J.isRegExp=function(n){return n&&typeof n=="object"&&ce.call(n)==z||false
    },J.isString=kt,J.isUndefined=function(n){return typeof n=="undefined"},J.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Ie(0,r+e):Se(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},J.mixin=Gt,J.noConflict=function(){return e._=le,this},J.noop=Ht,J.now=Ue,J.parseInt=Ge,J.random=function(n,t,e){var r=null==n,u=null==t;return null==e&&(typeof n=="boolean"&&u?(e=n,n=1):u||typeof t!="boolean"||(e=t,u=true)),r&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,e||n%1||t%1?(e=Re(),Se(n+e*(t-n+parseFloat("1e-"+((e+"").length-1))),t)):at(n,t)
    },J.reduce=Dt,J.reduceRight=$t,J.result=function(n,t){if(n){var e=n[t];return dt(e)?n[t]():e}},J.runInContext=s,J.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:Fe(n).length},J.some=Ft,J.sortedIndex=zt,J.template=function(n,t,e){var r=J.templateSettings;n=oe(n||""),e=_({},e,r);var u,o=_({},e.imports,r.imports),r=Fe(o),o=xt(o),a=0,f=e.interpolate||S,l="__p+='",f=ue((e.escape||S).source+"|"+f.source+"|"+(f===N?x:S).source+"|"+(e.evaluate||S).source+"|$","g");n.replace(f,function(t,e,r,o,f,c){return r||(r=o),l+=n.slice(a,c).replace(R,i),e&&(l+="'+__e("+e+")+'"),f&&(u=true,l+="';"+f+";\n__p+='"),r&&(l+="'+((__t=("+r+"))==null?'':__t)+'"),a=c+t.length,t
    }),l+="';",f=e=e.variable,f||(e="obj",l="with("+e+"){"+l+"}"),l=(u?l.replace(w,""):l).replace(j,"$1").replace(k,"$1;"),l="function("+e+"){"+(f?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";try{var c=ne(r,"return "+l).apply(v,o)}catch(p){throw p.source=l,p}return t?c(t):(c.source=l,c)},J.unescape=function(n){return null==n?"":oe(n).replace(qe,gt)},J.uniqueId=function(n){var t=++y;return oe(null==n?"":n)+t
    },J.all=Ot,J.any=Ft,J.detect=It,J.findWhere=It,J.foldl=Dt,J.foldr=$t,J.include=Ct,J.inject=Dt,Gt(function(){var n={};return h(J,function(t,e){J.prototype[e]||(n[e]=t)}),n}(),false),J.first=Bt,J.last=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[u-1]:v;return p(n,Ie(0,u-r))},J.sample=function(n,t,e){return n&&typeof n.length!="number"&&(n=xt(n)),null==t||e?n?n[at(0,n.length-1)]:v:(n=Tt(n),n.length=Se(Ie(0,t),n.length),n)
    },J.take=Bt,J.head=Bt,h(J,function(n,t){var e="sample"!==t;J.prototype[t]||(J.prototype[t]=function(t,r){var u=this.__chain__,o=n(this.__wrapped__,t,r);return u||null!=t&&(!r||e&&typeof t=="function")?new Q(o,u):o})}),J.VERSION="2.4.1",J.prototype.chain=function(){return this.__chain__=true,this},J.prototype.toString=function(){return oe(this.__wrapped__)},J.prototype.value=Qt,J.prototype.valueOf=Qt,St(["join","pop","shift"],function(n){var t=ae[n];J.prototype[n]=function(){var n=this.__chain__,e=t.apply(this.__wrapped__,arguments);
        return n?new Q(e,n):e}}),St(["push","reverse","sort","unshift"],function(n){var t=ae[n];J.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),St(["concat","slice","splice"],function(n){var t=ae[n];J.prototype[n]=function(){return new Q(t.apply(this.__wrapped__,arguments),this.__chain__)}}),J}var v,h=[],g=[],y=0,m=+new Date+"",b=75,_=40,d=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p\+='';/g,j=/\b(__p\+=)''\+/g,k=/(__e\(.*?\)|\b__t\))\+'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,I=RegExp("^["+d+"]*0+(?=.$)"),S=/($^)/,E=/\bthis\b/,R=/['\n\r\t\u2028\u2029\\]/g,A="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),D="[object Arguments]",$="[object Array]",T="[object Boolean]",F="[object Date]",B="[object Function]",W="[object Number]",q="[object Object]",z="[object RegExp]",P="[object String]",K={};
        K[B]=false,K[D]=K[$]=K[T]=K[F]=K[W]=K[q]=K[z]=K[P]=true;var L={leading:false,maxWait:0,trailing:false},M={configurable:false,enumerable:false,value:null,writable:false},V={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false},U={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},G=V[typeof window]&&window||this,H=V[typeof exports]&&exports&&!exports.nodeType&&exports,J=V[typeof module]&&module&&!module.nodeType&&module,Q=J&&J.exports===H&&H,X=V[typeof global]&&global;!X||X.global!==X&&X.window!==X||(G=X);
        var Y=s();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(G._=Y, define(function(){return Y})):H&&J?Q?(J.exports=Y)._=Y:H._=Y:G._=Y}).call(this);


    return new Tracer();

}());


/**
 * Instrumented code
 */

window.onload = function () {
    __recognizer432552797.logEntry([
        8,
        16,
        8,
        24
    ], arguments);
    (function () {
        var obj = function () {
                var obj = __recognizer432552797.logProbe([
                        9,
                        4,
                        9,
                        12
                    ], document), fn = __recognizer432552797.logProbe([
                        9,
                        13,
                        9,
                        27
                    ], obj.getElementById);
                return fn.apply(obj, arguments);
            }.bind(this)('Logo'), fn = __recognizer432552797.logProbe([
                9,
                36,
                9,
                52
            ], obj.addEventListener);
        return fn.apply(obj, arguments);
    }.bind(this)('click', __recognizer432552797.logProbe([
        9,
        62,
        9,
        72
    ], logoSwitch), false));
    var temp = function () {
            var obj = __recognizer432552797.logProbe([
                    11,
                    15,
                    11,
                    27
                ], localStorage), fn = __recognizer432552797.logProbe([
                    11,
                    28,
                    11,
                    35
                ], obj.getItem);
            return fn.apply(obj, arguments);
        }.bind(this)('panel');
    if (__recognizer432552797.logProbe([
            12,
            8,
            12,
            12
        ], temp) == 1) {
        __recognizer432552797.logProbe([
            12,
            21,
            12,
            29
        ], __recognizer432552797.logProbe([
            12,
            21,
            12,
            27
        ], flickr)());
    } else {
        __recognizer432552797.logProbe([
            12,
            38,
            12,
            47
        ], __recognizer432552797.logProbe([
            12,
            38,
            12,
            45
        ], canvas2)());
    }
};
var paint = false;
var canvas;
var cntxt;
var canvastop;
var left;
var fill;
var thickness;
var colors;
var canvas;
var context;
var temp;
var searches = '';
var numItems;
function doMouseDown(event) {
    __recognizer432552797.logEntry([
        36,
        9,
        36,
        20
    ], arguments);
    paint = true;
    x = __recognizer432552797.logProbe([
        38,
        14,
        38,
        21
    ], __recognizer432552797.logProbe([
        38,
        8,
        38,
        13
    ], event).clientX);
    y = __recognizer432552797.logProbe([
        39,
        14,
        39,
        20
    ], __recognizer432552797.logProbe([
        39,
        8,
        39,
        13
    ], event).layerY);
    (function () {
        var obj = __recognizer432552797.logProbe([
                41,
                4,
                41,
                9
            ], cntxt), fn = __recognizer432552797.logProbe([
                41,
                10,
                41,
                16
            ], obj.moveTo);
        return fn.apply(obj, arguments);
    }.bind(this)(__recognizer432552797.logProbe([
        41,
        17,
        41,
        18
    ], x) - __recognizer432552797.logProbe([
        41,
        21,
        41,
        25
    ], left), __recognizer432552797.logProbe([
        41,
        27,
        41,
        28
    ], y) - __recognizer432552797.logProbe([
        41,
        31,
        41,
        40
    ], canvastop)));
    (function () {
        var obj = __recognizer432552797.logProbe([
                42,
                4,
                42,
                9
            ], cntxt), fn = __recognizer432552797.logProbe([
                42,
                10,
                42,
                19
            ], obj.beginPath);
        return fn.apply(obj, arguments);
    }.bind(this)());
    (function () {
        var obj = __recognizer432552797.logProbe([
                43,
                4,
                43,
                9
            ], cntxt), fn = __recognizer432552797.logProbe([
                43,
                10,
                43,
                16
            ], obj.stroke);
        return fn.apply(obj, arguments);
    }.bind(this)());
}
function doMouseUp(event) {
    __recognizer432552797.logEntry([
        48,
        9,
        48,
        18
    ], arguments);
    paint = false;
    x = __recognizer432552797.logProbe([
        50,
        14,
        50,
        21
    ], __recognizer432552797.logProbe([
        50,
        8,
        50,
        13
    ], event).clientX);
    y = __recognizer432552797.logProbe([
        51,
        14,
        51,
        21
    ], __recognizer432552797.logProbe([
        51,
        8,
        51,
        13
    ], event).clientY);
    (function () {
        var obj = __recognizer432552797.logProbe([
                53,
                4,
                53,
                9
            ], cntxt), fn = __recognizer432552797.logProbe([
                53,
                10,
                53,
                16
            ], obj.lineTo);
        return fn.apply(obj, arguments);
    }.bind(this)(__recognizer432552797.logProbe([
        53,
        17,
        53,
        18
    ], x) - __recognizer432552797.logProbe([
        53,
        21,
        53,
        25
    ], left) + 1, __recognizer432552797.logProbe([
        53,
        31,
        53,
        32
    ], y) - __recognizer432552797.logProbe([
        53,
        35,
        53,
        44
    ], canvastop) + 1));
    (function () {
        var obj = __recognizer432552797.logProbe([
                54,
                4,
                54,
                9
            ], cntxt), fn = __recognizer432552797.logProbe([
                54,
                10,
                54,
                16
            ], obj.stroke);
        return fn.apply(obj, arguments);
    }.bind(this)());
    (function () {
        var obj = __recognizer432552797.logProbe([
                55,
                4,
                55,
                9
            ], cntxt), fn = __recognizer432552797.logProbe([
                55,
                10,
                55,
                19
            ], obj.closePath);
        return fn.apply(obj, arguments);
    }.bind(this)());
}
function doMouseMove(event) {
    __recognizer432552797.logEntry([
        60,
        9,
        60,
        20
    ], arguments);
    fill = __recognizer432552797.logProbe([
        61,
        43,
        61,
        48
    ], function () {
        var obj = __recognizer432552797.logProbe([
                61,
                11,
                61,
                19
            ], document), fn = __recognizer432552797.logProbe([
                61,
                20,
                61,
                34
            ], obj.getElementById);
        return fn.apply(obj, arguments);
    }.bind(this)('fill').value);
    thickness = __recognizer432552797.logProbe([
        62,
        50,
        62,
        55
    ], function () {
        var obj = __recognizer432552797.logProbe([
                62,
                16,
                62,
                24
            ], document), fn = __recognizer432552797.logProbe([
                62,
                25,
                62,
                39
            ], obj.getElementById);
        return fn.apply(obj, arguments);
    }.bind(this)('width2').value);
    colors = __recognizer432552797.logProbe([
        63,
        47,
        63,
        52
    ], function () {
        var obj = __recognizer432552797.logProbe([
                63,
                13,
                63,
                21
            ], document), fn = __recognizer432552797.logProbe([
                63,
                22,
                63,
                36
            ], obj.getElementById);
        return fn.apply(obj, arguments);
    }.bind(this)('colors').value);
    cntxt = function () {
        var obj = __recognizer432552797.logProbe([
                64,
                12,
                64,
                18
            ], canvas), fn = __recognizer432552797.logProbe([
                64,
                19,
                64,
                29
            ], obj.getContext);
        return fn.apply(obj, arguments);
    }.bind(this)('2d');
    cntxt.strokeStyle = __recognizer432552797.logProbe([
        65,
        24,
        65,
        30
    ], colors);
    cntxt.lineWidth = __recognizer432552797.logProbe([
        66,
        22,
        66,
        31
    ], thickness);
    cntxt.lineCap = 'round';
    rect = function () {
        var obj = __recognizer432552797.logProbe([
                69,
                11,
                69,
                17
            ], canvas), fn = __recognizer432552797.logProbe([
                69,
                18,
                69,
                39
            ], obj.getBoundingClientRect);
        return fn.apply(obj, arguments);
    }.bind(this)();
    canvastop = __recognizer432552797.logProbe([
        70,
        21,
        70,
        24
    ], __recognizer432552797.logProbe([
        70,
        16,
        70,
        20
    ], rect).top);
    left = __recognizer432552797.logProbe([
        71,
        16,
        71,
        20
    ], __recognizer432552797.logProbe([
        71,
        11,
        71,
        15
    ], rect).left);
    if (__recognizer432552797.logProbe([
            73,
            8,
            73,
            13
        ], paint)) {
        x = __recognizer432552797.logProbe([
            74,
            18,
            74,
            25
        ], __recognizer432552797.logProbe([
            74,
            12,
            74,
            17
        ], event).clientX);
        y = __recognizer432552797.logProbe([
            75,
            18,
            75,
            25
        ], __recognizer432552797.logProbe([
            75,
            12,
            75,
            17
        ], event).clientY);
        (function () {
            var obj = __recognizer432552797.logProbe([
                    76,
                    8,
                    76,
                    13
                ], cntxt), fn = __recognizer432552797.logProbe([
                    76,
                    14,
                    76,
                    20
                ], obj.lineTo);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer432552797.logProbe([
            76,
            21,
            76,
            22
        ], x) - __recognizer432552797.logProbe([
            76,
            25,
            76,
            29
        ], left), __recognizer432552797.logProbe([
            76,
            31,
            76,
            32
        ], y) - __recognizer432552797.logProbe([
            76,
            35,
            76,
            44
        ], canvastop)));
        (function () {
            var obj = __recognizer432552797.logProbe([
                    77,
                    8,
                    77,
                    13
                ], cntxt), fn = __recognizer432552797.logProbe([
                    77,
                    14,
                    77,
                    20
                ], obj.stroke);
            return fn.apply(obj, arguments);
        }.bind(this)());
        __recognizer432552797.logProbe([
            78,
            8,
            78,
            27
        ], __recognizer432552797.logProbe([
            78,
            8,
            78,
            20
        ], isKeyPressed)(__recognizer432552797.logProbe([
            78,
            21,
            78,
            26
        ], event)));
    }
}
function downloadCanvas() {
    __recognizer432552797.logEntry([
        89,
        9,
        89,
        23
    ], arguments);
    var d = function () {
            var obj = __recognizer432552797.logProbe([
                    90,
                    12,
                    90,
                    18
                ], canvas), fn = __recognizer432552797.logProbe([
                    90,
                    19,
                    90,
                    28
                ], obj.toDataURL);
            return fn.apply(obj, arguments);
        }.bind(this)('image/png');
    (function () {
        var obj = __recognizer432552797.logProbe([
                91,
                4,
                91,
                10
            ], window), fn = __recognizer432552797.logProbe([
                91,
                11,
                91,
                15
            ], obj.open);
        return fn.apply(obj, arguments);
    }.bind(this)(function () {
        var obj = __recognizer432552797.logProbe([
                91,
                16,
                91,
                22
            ], canvas), fn = __recognizer432552797.logProbe([
                91,
                23,
                91,
                32
            ], obj.toDataURL);
        return fn.apply(obj, arguments);
    }.bind(this)('image/png')));
}
function isKeyPressed(event) {
    __recognizer432552797.logEntry([
        96,
        9,
        96,
        21
    ], arguments);
    if (__recognizer432552797.logProbe([
            97,
            14,
            97,
            22
        ], __recognizer432552797.logProbe([
            97,
            8,
            97,
            13
        ], event).shiftKey) == 1) {
        var fill = __recognizer432552797.logProbe([
                98,
                51,
                98,
                56
            ], function () {
                var obj = __recognizer432552797.logProbe([
                        98,
                        19,
                        98,
                        27
                    ], document), fn = __recognizer432552797.logProbe([
                        98,
                        28,
                        98,
                        42
                    ], obj.getElementById);
                return fn.apply(obj, arguments);
            }.bind(this)('fill').value);
        var thickness = __recognizer432552797.logProbe([
                99,
                58,
                99,
                63
            ], function () {
                var obj = __recognizer432552797.logProbe([
                        99,
                        24,
                        99,
                        32
                    ], document), fn = __recognizer432552797.logProbe([
                        99,
                        33,
                        99,
                        47
                    ], obj.getElementById);
                return fn.apply(obj, arguments);
            }.bind(this)('width2').value);
        var colors = __recognizer432552797.logProbe([
                100,
                55,
                100,
                60
            ], function () {
                var obj = __recognizer432552797.logProbe([
                        100,
                        21,
                        100,
                        29
                    ], document), fn = __recognizer432552797.logProbe([
                        100,
                        30,
                        100,
                        44
                    ], obj.getElementById);
                return fn.apply(obj, arguments);
            }.bind(this)('colors').value);
        cntxt.lineWidth = 5;
        cntxt.fillStyle = __recognizer432552797.logProbe([
            104,
            28,
            104,
            32
        ], fill);
        cntxt.strokeStyle = __recognizer432552797.logProbe([
            105,
            30,
            105,
            36
        ], colors);
        (function () {
            var obj = __recognizer432552797.logProbe([
                    106,
                    10,
                    106,
                    15
                ], cntxt), fn = __recognizer432552797.logProbe([
                    106,
                    16,
                    106,
                    22
                ], obj.lineTo);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer432552797.logProbe([
            106,
            23,
            106,
            24
        ], x) - __recognizer432552797.logProbe([
            106,
            43,
            106,
            44
        ], __recognizer432552797.logProbe([
            106,
            27,
            106,
            42
        ], __recognizer432552797.logProbe([
            106,
            27,
            106,
            34
        ], findPos)(__recognizer432552797.logProbe([
            106,
            35,
            106,
            41
        ], canvas)))[0]), __recognizer432552797.logProbe([
            106,
            47,
            106,
            48
        ], y) - __recognizer432552797.logProbe([
            106,
            67,
            106,
            68
        ], __recognizer432552797.logProbe([
            106,
            51,
            106,
            66
        ], __recognizer432552797.logProbe([
            106,
            51,
            106,
            58
        ], findPos)(__recognizer432552797.logProbe([
            106,
            59,
            106,
            65
        ], canvas)))[1])));
        (function () {
            var obj = __recognizer432552797.logProbe([
                    107,
                    10,
                    107,
                    15
                ], cntxt), fn = __recognizer432552797.logProbe([
                    107,
                    16,
                    107,
                    20
                ], obj.fill);
            return fn.apply(obj, arguments);
        }.bind(this)());
        (function () {
            var obj = __recognizer432552797.logProbe([
                    108,
                    10,
                    108,
                    15
                ], cntxt), fn = __recognizer432552797.logProbe([
                    108,
                    16,
                    108,
                    22
                ], obj.stroke);
            return fn.apply(obj, arguments);
        }.bind(this)());
    }
}
function findPos(obj) {
    __recognizer432552797.logEntry([
        114,
        9,
        114,
        16
    ], arguments);
    var curleft = curtop = 0;
    if (__recognizer432552797.logProbe([
            117,
            12,
            117,
            24
        ], __recognizer432552797.logProbe([
            117,
            8,
            117,
            11
        ], obj).offsetParent)) {
        do {
            curleft += __recognizer432552797.logProbe([
                119,
                27,
                119,
                37
            ], __recognizer432552797.logProbe([
                119,
                23,
                119,
                26
            ], obj).offsetLeft);
            curtop += __recognizer432552797.logProbe([
                120,
                26,
                120,
                35
            ], __recognizer432552797.logProbe([
                120,
                22,
                120,
                25
            ], obj).offsetTop);
        } while (obj = __recognizer432552797.logProbe([
            121,
            27,
            121,
            39
        ], __recognizer432552797.logProbe([
            121,
            23,
            121,
            26
        ], obj).offsetParent));
        return [
            __recognizer432552797.logProbe([
                122,
                16,
                122,
                23
            ], curleft),
            __recognizer432552797.logProbe([
                122,
                25,
                122,
                31
            ], curtop)
        ];
    }
}
function logoSwitch() {
    __recognizer432552797.logEntry([
        132,
        9,
        132,
        19
    ], arguments);
    if (!function () {
            var obj = __recognizer432552797.logProbe([
                    134,
                    9,
                    134,
                    17
                ], document), fn = __recognizer432552797.logProbe([
                    134,
                    18,
                    134,
                    32
                ], obj.getElementById);
            return fn.apply(obj, arguments);
        }.bind(this)('menu')) {
    } else {
        var parent = function () {
                var obj = __recognizer432552797.logProbe([
                        136,
                        17,
                        136,
                        25
                    ], document), fn = __recognizer432552797.logProbe([
                        136,
                        26,
                        136,
                        40
                    ], obj.getElementById);
                return fn.apply(obj, arguments);
            }.bind(this)('left');
        var child = function () {
                var obj = __recognizer432552797.logProbe([
                        137,
                        16,
                        137,
                        24
                    ], document), fn = __recognizer432552797.logProbe([
                        137,
                        25,
                        137,
                        39
                    ], obj.getElementById);
                return fn.apply(obj, arguments);
            }.bind(this)('menu');
        (function () {
            var obj = __recognizer432552797.logProbe([
                    138,
                    8,
                    138,
                    14
                ], parent), fn = __recognizer432552797.logProbe([
                    138,
                    15,
                    138,
                    26
                ], obj.removeChild);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer432552797.logProbe([
            138,
            27,
            138,
            32
        ], child)));
        var mydiv = function () {
                var obj = __recognizer432552797.logProbe([
                        140,
                        17,
                        140,
                        25
                    ], document), fn = __recognizer432552797.logProbe([
                        140,
                        26,
                        140,
                        40
                    ], obj.getElementById);
                return fn.apply(obj, arguments);
            }.bind(this)('right');
        while (__recognizer432552797.logProbe([
                141,
                21,
                141,
                31
            ], __recognizer432552797.logProbe([
                141,
                15,
                141,
                20
            ], mydiv).firstChild)) {
            (function () {
                var obj = __recognizer432552797.logProbe([
                        141,
                        34,
                        141,
                        39
                    ], mydiv), fn = __recognizer432552797.logProbe([
                        141,
                        40,
                        141,
                        51
                    ], obj.removeChild);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer432552797.logProbe([
                141,
                58,
                141,
                68
            ], __recognizer432552797.logProbe([
                141,
                52,
                141,
                57
            ], mydiv).firstChild)));
        }
    }
    temp = function () {
        var obj = __recognizer432552797.logProbe([
                143,
                11,
                143,
                23
            ], localStorage), fn = __recognizer432552797.logProbe([
                143,
                24,
                143,
                31
            ], obj.getItem);
        return fn.apply(obj, arguments);
    }.bind(this)('panel');
    if (__recognizer432552797.logProbe([
            144,
            8,
            144,
            12
        ], temp) == 1) {
        __recognizer432552797.logProbe([
            144,
            20,
            144,
            29
        ], __recognizer432552797.logProbe([
            144,
            20,
            144,
            27
        ], canvas2)());
        (function () {
            var obj = __recognizer432552797.logProbe([
                    144,
                    30,
                    144,
                    42
                ], localStorage), fn = __recognizer432552797.logProbe([
                    144,
                    43,
                    144,
                    48
                ], obj.clear);
            return fn.apply(obj, arguments);
        }.bind(this)());
    } else {
        __recognizer432552797.logProbe([
            145,
            12,
            145,
            20
        ], __recognizer432552797.logProbe([
            145,
            12,
            145,
            18
        ], flickr)());
        (function () {
            var obj = __recognizer432552797.logProbe([
                    145,
                    21,
                    145,
                    33
                ], localStorage), fn = __recognizer432552797.logProbe([
                    145,
                    34,
                    145,
                    41
                ], obj.setItem);
            return fn.apply(obj, arguments);
        }.bind(this)('panel', '1'));
    }
}
function flickr() {
    __recognizer432552797.logEntry([
        155,
        9,
        155,
        15
    ], arguments);
    document.getElementById('Logo').style.background = 'url(images/' + 'dj.png' + ')center';
    var leftDiv = function () {
            var obj = __recognizer432552797.logProbe([
                    157,
                    18,
                    157,
                    26
                ], document), fn = __recognizer432552797.logProbe([
                    157,
                    27,
                    157,
                    41
                ], obj.getElementById);
            return fn.apply(obj, arguments);
        }.bind(this)('left');
    var rightDiv = function () {
            var obj = __recognizer432552797.logProbe([
                    158,
                    19,
                    158,
                    27
                ], document), fn = __recognizer432552797.logProbe([
                    158,
                    28,
                    158,
                    42
                ], obj.getElementById);
            return fn.apply(obj, arguments);
        }.bind(this)('right');
    var Div = function () {
            var obj = __recognizer432552797.logProbe([
                    160,
                    14,
                    160,
                    22
                ], document), fn = __recognizer432552797.logProbe([
                    160,
                    23,
                    160,
                    36
                ], obj.createElement);
            return fn.apply(obj, arguments);
        }.bind(this)('div');
    (function () {
        var obj = __recognizer432552797.logProbe([
                161,
                8,
                161,
                11
            ], Div), fn = __recognizer432552797.logProbe([
                161,
                12,
                161,
                24
            ], obj.setAttribute);
        return fn.apply(obj, arguments);
    }.bind(this)('id', 'menu'));
    (function () {
        var obj = __recognizer432552797.logProbe([
                162,
                8,
                162,
                15
            ], leftDiv), fn = __recognizer432552797.logProbe([
                162,
                16,
                162,
                27
            ], obj.appendChild);
        return fn.apply(obj, arguments);
    }.bind(this)(__recognizer432552797.logProbe([
        162,
        28,
        162,
        31
    ], Div)));
    var menuDiv = function () {
            var obj = __recognizer432552797.logProbe([
                    164,
                    18,
                    164,
                    26
                ], document), fn = __recognizer432552797.logProbe([
                    164,
                    27,
                    164,
                    41
                ], obj.getElementById);
            return fn.apply(obj, arguments);
        }.bind(this)('menu');
    var searchTerm = function () {
            var obj = __recognizer432552797.logProbe([
                    166,
                    21,
                    166,
                    29
                ], document), fn = __recognizer432552797.logProbe([
                    166,
                    30,
                    166,
                    43
                ], obj.createElement);
            return fn.apply(obj, arguments);
        }.bind(this)('input');
    (function () {
        var obj = __recognizer432552797.logProbe([
                167,
                8,
                167,
                18
            ], searchTerm), fn = __recognizer432552797.logProbe([
                167,
                19,
                167,
                31
            ], obj.setAttribute);
        return fn.apply(obj, arguments);
    }.bind(this)('class', 'searchterm'));
    (function () {
        var obj = __recognizer432552797.logProbe([
                168,
                8,
                168,
                18
            ], searchTerm), fn = __recognizer432552797.logProbe([
                168,
                19,
                168,
                31
            ], obj.setAttribute);
        return fn.apply(obj, arguments);
    }.bind(this)('name', 'searchterm'));
    (function () {
        var obj = __recognizer432552797.logProbe([
                169,
                8,
                169,
                18
            ], searchTerm), fn = __recognizer432552797.logProbe([
                169,
                19,
                169,
                31
            ], obj.setAttribute);
        return fn.apply(obj, arguments);
    }.bind(this)('value', function () {
        var obj = __recognizer432552797.logProbe([
                169,
                40,
                169,
                52
            ], localStorage), fn = __recognizer432552797.logProbe([
                169,
                53,
                169,
                60
            ], obj.getItem);
        return fn.apply(obj, arguments);
    }.bind(this)('searchterm')));
    (function () {
        var obj = __recognizer432552797.logProbe([
                170,
                8,
                170,
                15
            ], menuDiv), fn = __recognizer432552797.logProbe([
                170,
                16,
                170,
                27
            ], obj.appendChild);
        return fn.apply(obj, arguments);
    }.bind(this)(__recognizer432552797.logProbe([
        170,
        28,
        170,
        38
    ], searchTerm)));
    var searchButton = function () {
            var obj = __recognizer432552797.logProbe([
                    172,
                    23,
                    172,
                    31
                ], document), fn = __recognizer432552797.logProbe([
                    172,
                    32,
                    172,
                    45
                ], obj.createElement);
            return fn.apply(obj, arguments);
        }.bind(this)('button');
    (function () {
        var obj = __recognizer432552797.logProbe([
                173,
                8,
                173,
                20
            ], searchButton), fn = __recognizer432552797.logProbe([
                173,
                21,
                173,
                33
            ], obj.setAttribute);
        return fn.apply(obj, arguments);
    }.bind(this)('id', 'search'));
    searchButton.innerHTML = 'Search';
    (function () {
        var obj = __recognizer432552797.logProbe([
                175,
                8,
                175,
                15
            ], menuDiv), fn = __recognizer432552797.logProbe([
                175,
                16,
                175,
                27
            ], obj.appendChild);
        return fn.apply(obj, arguments);
    }.bind(this)(__recognizer432552797.logProbe([
        175,
        28,
        175,
        40
    ], searchButton)));
    var addButton = function () {
            var obj = __recognizer432552797.logProbe([
                    178,
                    20,
                    178,
                    28
                ], document), fn = __recognizer432552797.logProbe([
                    178,
                    29,
                    178,
                    42
                ], obj.createElement);
            return fn.apply(obj, arguments);
        }.bind(this)('button');
    (function () {
        var obj = __recognizer432552797.logProbe([
                179,
                8,
                179,
                17
            ], addButton), fn = __recognizer432552797.logProbe([
                179,
                18,
                179,
                30
            ], obj.setAttribute);
        return fn.apply(obj, arguments);
    }.bind(this)('id', 'add'));
    addButton.innerHTML = '+';
    (function () {
        var obj = __recognizer432552797.logProbe([
                181,
                8,
                181,
                15
            ], menuDiv), fn = __recognizer432552797.logProbe([
                181,
                16,
                181,
                27
            ], obj.appendChild);
        return fn.apply(obj, arguments);
    }.bind(this)(__recognizer432552797.logProbe([
        181,
        28,
        181,
        37
    ], addButton)));
    var resultsDiv = function () {
            var obj = __recognizer432552797.logProbe([
                    184,
                    21,
                    184,
                    29
                ], document), fn = __recognizer432552797.logProbe([
                    184,
                    30,
                    184,
                    43
                ], obj.createElement);
            return fn.apply(obj, arguments);
        }.bind(this)('div');
    (function () {
        var obj = __recognizer432552797.logProbe([
                185,
                8,
                185,
                18
            ], resultsDiv), fn = __recognizer432552797.logProbe([
                185,
                19,
                185,
                31
            ], obj.setAttribute);
        return fn.apply(obj, arguments);
    }.bind(this)('id', 'results'));
    (function () {
        var obj = __recognizer432552797.logProbe([
                186,
                8,
                186,
                15
            ], menuDiv), fn = __recognizer432552797.logProbe([
                186,
                16,
                186,
                27
            ], obj.appendChild);
        return fn.apply(obj, arguments);
    }.bind(this)(__recognizer432552797.logProbe([
        186,
        28,
        186,
        38
    ], resultsDiv)));
    (function () {
        var obj = function () {
                var obj = __recognizer432552797.logProbe([
                        188,
                        4,
                        188,
                        12
                    ], document), fn = __recognizer432552797.logProbe([
                        188,
                        13,
                        188,
                        27
                    ], obj.getElementById);
                return fn.apply(obj, arguments);
            }.bind(this)('search'), fn = __recognizer432552797.logProbe([
                188,
                38,
                188,
                54
            ], obj.addEventListener);
        return fn.apply(obj, arguments);
    }.bind(this)('click', __recognizer432552797.logProbe([
        188,
        64,
        188,
        79
    ], searchButtonrun), false));
    (function () {
        var obj = function () {
                var obj = __recognizer432552797.logProbe([
                        189,
                        4,
                        189,
                        12
                    ], document), fn = __recognizer432552797.logProbe([
                        189,
                        13,
                        189,
                        27
                    ], obj.getElementById);
                return fn.apply(obj, arguments);
            }.bind(this)('add'), fn = __recognizer432552797.logProbe([
                189,
                35,
                189,
                51
            ], obj.addEventListener);
        return fn.apply(obj, arguments);
    }.bind(this)('click', __recognizer432552797.logProbe([
        189,
        61,
        189,
        71
    ], addbuttons), false));
}
function canvas2() {
    __recognizer432552797.logEntry([
        197,
        9,
        197,
        16
    ], arguments);
    document.getElementById('Logo').style.background = 'url(images/' + 'w.png' + ')center';
    var leftDiv = function () {
            var obj = __recognizer432552797.logProbe([
                    200,
                    18,
                    200,
                    26
                ], document), fn = __recognizer432552797.logProbe([
                    200,
                    27,
                    200,
                    41
                ], obj.getElementById);
            return fn.apply(obj, arguments);
        }.bind(this)('left');
    var rightDiv = function () {
            var obj = __recognizer432552797.logProbe([
                    201,
                    19,
                    201,
                    27
                ], document), fn = __recognizer432552797.logProbe([
                    201,
                    28,
                    201,
                    42
                ], obj.getElementById);
            return fn.apply(obj, arguments);
        }.bind(this)('right');
    var Div = function () {
            var obj = __recognizer432552797.logProbe([
                    203,
                    14,
                    203,
                    22
                ], document), fn = __recognizer432552797.logProbe([
                    203,
                    23,
                    203,
                    36
                ], obj.createElement);
            return fn.apply(obj, arguments);
        }.bind(this)('div');
    (function () {
        var obj = __recognizer432552797.logProbe([
                204,
                8,
                204,
                11
            ], Div), fn = __recognizer432552797.logProbe([
                204,
                12,
                204,
                24
            ], obj.setAttribute);
        return fn.apply(obj, arguments);
    }.bind(this)('id', 'menu'));
    (function () {
        var obj = __recognizer432552797.logProbe([
                205,
                8,
                205,
                15
            ], leftDiv), fn = __recognizer432552797.logProbe([
                205,
                16,
                205,
                27
            ], obj.appendChild);
        return fn.apply(obj, arguments);
    }.bind(this)(__recognizer432552797.logProbe([
        205,
        28,
        205,
        31
    ], Div)));
    var menuDiv = function () {
            var obj = __recognizer432552797.logProbe([
                    207,
                    18,
                    207,
                    26
                ], document), fn = __recognizer432552797.logProbe([
                    207,
                    27,
                    207,
                    41
                ], obj.getElementById);
            return fn.apply(obj, arguments);
        }.bind(this)('menu');
    var downloadButton = function () {
            var obj = __recognizer432552797.logProbe([
                    209,
                    25,
                    209,
                    33
                ], document), fn = __recognizer432552797.logProbe([
                    209,
                    34,
                    209,
                    47
                ], obj.createElement);
            return fn.apply(obj, arguments);
        }.bind(this)('button');
    (function () {
        var obj = __recognizer432552797.logProbe([
                210,
                8,
                210,
                22
            ], downloadButton), fn = __recognizer432552797.logProbe([
                210,
                23,
                210,
                35
            ], obj.setAttribute);
        return fn.apply(obj, arguments);
    }.bind(this)('id', 'download'));
    downloadButton.innerHTML = 'Download';
    (function () {
        var obj = __recognizer432552797.logProbe([
                212,
                8,
                212,
                15
            ], menuDiv), fn = __recognizer432552797.logProbe([
                212,
                16,
                212,
                27
            ], obj.appendChild);
        return fn.apply(obj, arguments);
    }.bind(this)(__recognizer432552797.logProbe([
        212,
        28,
        212,
        42
    ], downloadButton)));
    var clearButton = function () {
            var obj = __recognizer432552797.logProbe([
                    214,
                    22,
                    214,
                    30
                ], document), fn = __recognizer432552797.logProbe([
                    214,
                    31,
                    214,
                    44
                ], obj.createElement);
            return fn.apply(obj, arguments);
        }.bind(this)('button');
    (function () {
        var obj = __recognizer432552797.logProbe([
                215,
                8,
                215,
                19
            ], clearButton), fn = __recognizer432552797.logProbe([
                215,
                20,
                215,
                32
            ], obj.setAttribute);
        return fn.apply(obj, arguments);
    }.bind(this)('id', 'clear'));
    clearButton.innerHTML = 'Clear';
    (function () {
        var obj = __recognizer432552797.logProbe([
                217,
                8,
                217,
                15
            ], menuDiv), fn = __recognizer432552797.logProbe([
                217,
                16,
                217,
                27
            ], obj.appendChild);
        return fn.apply(obj, arguments);
    }.bind(this)(__recognizer432552797.logProbe([
        217,
        28,
        217,
        39
    ], clearButton)));
    var lineH2 = function () {
            var obj = __recognizer432552797.logProbe([
                    219,
                    17,
                    219,
                    25
                ], document), fn = __recognizer432552797.logProbe([
                    219,
                    26,
                    219,
                    39
                ], obj.createElement);
            return fn.apply(obj, arguments);
        }.bind(this)('h2');
    lineH2.innerHTML = 'Line';
    (function () {
        var obj = __recognizer432552797.logProbe([
                221,
                8,
                221,
                15
            ], menuDiv), fn = __recognizer432552797.logProbe([
                221,
                16,
                221,
                27
            ], obj.appendChild);
        return fn.apply(obj, arguments);
    }.bind(this)(__recognizer432552797.logProbe([
        221,
        28,
        221,
        34
    ], lineH2)));
    var lineWidth = function () {
            var obj = __recognizer432552797.logProbe([
                    223,
                    20,
                    223,
                    28
                ], document), fn = __recognizer432552797.logProbe([
                    223,
                    29,
                    223,
                    42
                ], obj.createElement);
            return fn.apply(obj, arguments);
        }.bind(this)('select');
    (function () {
        var obj = __recognizer432552797.logProbe([
                224,
                8,
                224,
                17
            ], lineWidth), fn = __recognizer432552797.logProbe([
                224,
                18,
                224,
                30
            ], obj.setAttribute);
        return fn.apply(obj, arguments);
    }.bind(this)('id', 'width2'));
    var value = [
            '4',
            '10',
            '15'
        ];
    var text = [
            'Light',
            'Middle',
            'Thick'
        ];
    for (var i = 0; __recognizer432552797.logProbe([
            229,
            20,
            229,
            21
        ], i) < __recognizer432552797.logProbe([
            229,
            29,
            229,
            35
        ], __recognizer432552797.logProbe([
            229,
            24,
            229,
            28
        ], text).length); __recognizer432552797.logProbe([
            229,
            37,
            229,
            38
        ], i)++) {
        var options = function () {
                var obj = __recognizer432552797.logProbe([
                        230,
                        22,
                        230,
                        30
                    ], document), fn = __recognizer432552797.logProbe([
                        230,
                        31,
                        230,
                        44
                    ], obj.createElement);
                return fn.apply(obj, arguments);
            }.bind(this)('option');
        (function () {
            var obj = __recognizer432552797.logProbe([
                    231,
                    12,
                    231,
                    19
                ], options), fn = __recognizer432552797.logProbe([
                    231,
                    20,
                    231,
                    32
                ], obj.setAttribute);
            return fn.apply(obj, arguments);
        }.bind(this)('value', __recognizer432552797.logProbe([
            231,
            48,
            231,
            49
        ], __recognizer432552797.logProbe([
            231,
            42,
            231,
            47
        ], value)[i])));
        options.innerHTML = __recognizer432552797.logProbe([
            232,
            37,
            232,
            38
        ], __recognizer432552797.logProbe([
            232,
            32,
            232,
            36
        ], text)[i]);
        (function () {
            var obj = __recognizer432552797.logProbe([
                    233,
                    12,
                    233,
                    21
                ], lineWidth), fn = __recognizer432552797.logProbe([
                    233,
                    22,
                    233,
                    33
                ], obj.appendChild);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer432552797.logProbe([
            233,
            34,
            233,
            41
        ], options)));
    }
    (function () {
        var obj = __recognizer432552797.logProbe([
                236,
                4,
                236,
                11
            ], menuDiv), fn = __recognizer432552797.logProbe([
                236,
                12,
                236,
                23
            ], obj.appendChild);
        return fn.apply(obj, arguments);
    }.bind(this)(__recognizer432552797.logProbe([
        236,
        24,
        236,
        33
    ], lineWidth)));
    var colorH2 = function () {
            var obj = __recognizer432552797.logProbe([
                    239,
                    18,
                    239,
                    26
                ], document), fn = __recognizer432552797.logProbe([
                    239,
                    27,
                    239,
                    40
                ], obj.createElement);
            return fn.apply(obj, arguments);
        }.bind(this)('h2');
    colorH2.innerHTML = 'Colors';
    (function () {
        var obj = __recognizer432552797.logProbe([
                241,
                8,
                241,
                15
            ], menuDiv), fn = __recognizer432552797.logProbe([
                241,
                16,
                241,
                27
            ], obj.appendChild);
        return fn.apply(obj, arguments);
    }.bind(this)(__recognizer432552797.logProbe([
        241,
        28,
        241,
        35
    ], colorH2)));
    var lineWidth2 = function () {
            var obj = __recognizer432552797.logProbe([
                    243,
                    21,
                    243,
                    29
                ], document), fn = __recognizer432552797.logProbe([
                    243,
                    30,
                    243,
                    43
                ], obj.createElement);
            return fn.apply(obj, arguments);
        }.bind(this)('select');
    (function () {
        var obj = __recognizer432552797.logProbe([
                244,
                8,
                244,
                18
            ], lineWidth2), fn = __recognizer432552797.logProbe([
                244,
                19,
                244,
                31
            ], obj.setAttribute);
        return fn.apply(obj, arguments);
    }.bind(this)('id', 'colors'));
    var value1 = [
            '#000000',
            '#e74c3c',
            '#2980b9',
            '#2ecc71',
            '#d35400',
            '#8e44ad',
            '#ecf0f1'
        ];
    var text1 = [
            'Black',
            'Red',
            'Blue',
            'Green',
            'Orange',
            'Purple',
            'White'
        ];
    for (var i = 0; __recognizer432552797.logProbe([
            249,
            20,
            249,
            21
        ], i) < __recognizer432552797.logProbe([
            249,
            30,
            249,
            36
        ], __recognizer432552797.logProbe([
            249,
            24,
            249,
            29
        ], text1).length); __recognizer432552797.logProbe([
            249,
            38,
            249,
            39
        ], i)++) {
        var optionss = function () {
                var obj = __recognizer432552797.logProbe([
                        250,
                        23,
                        250,
                        31
                    ], document), fn = __recognizer432552797.logProbe([
                        250,
                        32,
                        250,
                        45
                    ], obj.createElement);
                return fn.apply(obj, arguments);
            }.bind(this)('option');
        (function () {
            var obj = __recognizer432552797.logProbe([
                    251,
                    12,
                    251,
                    20
                ], optionss), fn = __recognizer432552797.logProbe([
                    251,
                    21,
                    251,
                    33
                ], obj.setAttribute);
            return fn.apply(obj, arguments);
        }.bind(this)('value', __recognizer432552797.logProbe([
            251,
            50,
            251,
            51
        ], __recognizer432552797.logProbe([
            251,
            43,
            251,
            49
        ], value1)[i])));
        optionss.innerHTML = __recognizer432552797.logProbe([
            252,
            39,
            252,
            40
        ], __recognizer432552797.logProbe([
            252,
            33,
            252,
            38
        ], text1)[i]);
        (function () {
            var obj = __recognizer432552797.logProbe([
                    253,
                    12,
                    253,
                    22
                ], lineWidth2), fn = __recognizer432552797.logProbe([
                    253,
                    23,
                    253,
                    34
                ], obj.appendChild);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer432552797.logProbe([
            253,
            35,
            253,
            43
        ], optionss)));
    }
    (function () {
        var obj = __recognizer432552797.logProbe([
                255,
                4,
                255,
                11
            ], menuDiv), fn = __recognizer432552797.logProbe([
                255,
                12,
                255,
                23
            ], obj.appendChild);
        return fn.apply(obj, arguments);
    }.bind(this)(__recognizer432552797.logProbe([
        255,
        24,
        255,
        34
    ], lineWidth2)));
    var colorH2 = function () {
            var obj = __recognizer432552797.logProbe([
                    258,
                    18,
                    258,
                    26
                ], document), fn = __recognizer432552797.logProbe([
                    258,
                    27,
                    258,
                    40
                ], obj.createElement);
            return fn.apply(obj, arguments);
        }.bind(this)('h2');
    colorH2.innerHTML = 'Fill';
    (function () {
        var obj = __recognizer432552797.logProbe([
                260,
                8,
                260,
                15
            ], menuDiv), fn = __recognizer432552797.logProbe([
                260,
                16,
                260,
                27
            ], obj.appendChild);
        return fn.apply(obj, arguments);
    }.bind(this)(__recognizer432552797.logProbe([
        260,
        28,
        260,
        35
    ], colorH2)));
    var lineWidth3 = function () {
            var obj = __recognizer432552797.logProbe([
                    263,
                    21,
                    263,
                    29
                ], document), fn = __recognizer432552797.logProbe([
                    263,
                    30,
                    263,
                    43
                ], obj.createElement);
            return fn.apply(obj, arguments);
        }.bind(this)('select');
    (function () {
        var obj = __recognizer432552797.logProbe([
                264,
                8,
                264,
                18
            ], lineWidth3), fn = __recognizer432552797.logProbe([
                264,
                19,
                264,
                31
            ], obj.setAttribute);
        return fn.apply(obj, arguments);
    }.bind(this)('id', 'fill'));
    for (var i = 0; __recognizer432552797.logProbe([
            266,
            20,
            266,
            21
        ], i) < __recognizer432552797.logProbe([
            266,
            30,
            266,
            36
        ], __recognizer432552797.logProbe([
            266,
            24,
            266,
            29
        ], text1).length); __recognizer432552797.logProbe([
            266,
            38,
            266,
            39
        ], i)++) {
        var options = function () {
                var obj = __recognizer432552797.logProbe([
                        267,
                        22,
                        267,
                        30
                    ], document), fn = __recognizer432552797.logProbe([
                        267,
                        31,
                        267,
                        44
                    ], obj.createElement);
                return fn.apply(obj, arguments);
            }.bind(this)('option');
        (function () {
            var obj = __recognizer432552797.logProbe([
                    268,
                    12,
                    268,
                    19
                ], options), fn = __recognizer432552797.logProbe([
                    268,
                    20,
                    268,
                    32
                ], obj.setAttribute);
            return fn.apply(obj, arguments);
        }.bind(this)('value', __recognizer432552797.logProbe([
            268,
            49,
            268,
            50
        ], __recognizer432552797.logProbe([
            268,
            42,
            268,
            48
        ], value1)[i])));
        options.innerHTML = __recognizer432552797.logProbe([
            269,
            38,
            269,
            39
        ], __recognizer432552797.logProbe([
            269,
            32,
            269,
            37
        ], text1)[i]);
        (function () {
            var obj = __recognizer432552797.logProbe([
                    270,
                    12,
                    270,
                    22
                ], lineWidth3), fn = __recognizer432552797.logProbe([
                    270,
                    23,
                    270,
                    34
                ], obj.appendChild);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer432552797.logProbe([
            270,
            35,
            270,
            42
        ], options)));
    }
    (function () {
        var obj = __recognizer432552797.logProbe([
                272,
                4,
                272,
                11
            ], menuDiv), fn = __recognizer432552797.logProbe([
                272,
                12,
                272,
                23
            ], obj.appendChild);
        return fn.apply(obj, arguments);
    }.bind(this)(__recognizer432552797.logProbe([
        272,
        24,
        272,
        34
    ], lineWidth3)));
    var newCanvas = function () {
            var obj = __recognizer432552797.logProbe([
                    274,
                    20,
                    274,
                    28
                ], document), fn = __recognizer432552797.logProbe([
                    274,
                    29,
                    274,
                    42
                ], obj.createElement);
            return fn.apply(obj, arguments);
        }.bind(this)('canvas');
    newCanvas.width = 400;
    newCanvas.height = 600;
    (function () {
        var obj = __recognizer432552797.logProbe([
                277,
                8,
                277,
                17
            ], newCanvas), fn = __recognizer432552797.logProbe([
                277,
                18,
                277,
                30
            ], obj.setAttribute);
        return fn.apply(obj, arguments);
    }.bind(this)('id', 'canvas_1'));
    (function () {
        var obj = function () {
                var obj = __recognizer432552797.logProbe([
                        278,
                        8,
                        278,
                        16
                    ], document), fn = __recognizer432552797.logProbe([
                        278,
                        17,
                        278,
                        31
                    ], obj.getElementById);
                return fn.apply(obj, arguments);
            }.bind(this)('right'), fn = __recognizer432552797.logProbe([
                278,
                41,
                278,
                52
            ], obj.appendChild);
        return fn.apply(obj, arguments);
    }.bind(this)(__recognizer432552797.logProbe([
        278,
        53,
        278,
        62
    ], newCanvas)));
    canvas = function () {
        var obj = __recognizer432552797.logProbe([
                281,
                17,
                281,
                25
            ], document), fn = __recognizer432552797.logProbe([
                281,
                26,
                281,
                40
            ], obj.getElementById);
        return fn.apply(obj, arguments);
    }.bind(this)('canvas_1');
    (function () {
        var obj = __recognizer432552797.logProbe([
                282,
                8,
                282,
                14
            ], canvas), fn = __recognizer432552797.logProbe([
                282,
                15,
                282,
                31
            ], obj.addEventListener);
        return fn.apply(obj, arguments);
    }.bind(this)('mousedown', __recognizer432552797.logProbe([
        282,
        45,
        282,
        56
    ], doMouseDown), false));
    (function () {
        var obj = __recognizer432552797.logProbe([
                283,
                8,
                283,
                14
            ], canvas), fn = __recognizer432552797.logProbe([
                283,
                15,
                283,
                31
            ], obj.addEventListener);
        return fn.apply(obj, arguments);
    }.bind(this)('mouseup', __recognizer432552797.logProbe([
        283,
        43,
        283,
        52
    ], doMouseUp), false));
    (function () {
        var obj = __recognizer432552797.logProbe([
                284,
                8,
                284,
                14
            ], canvas), fn = __recognizer432552797.logProbe([
                284,
                15,
                284,
                31
            ], obj.addEventListener);
        return fn.apply(obj, arguments);
    }.bind(this)('mousemove', __recognizer432552797.logProbe([
        284,
        45,
        284,
        56
    ], doMouseMove), false));
    (function () {
        var obj = function () {
                var obj = __recognizer432552797.logProbe([
                        285,
                        8,
                        285,
                        16
                    ], document), fn = __recognizer432552797.logProbe([
                        285,
                        17,
                        285,
                        31
                    ], obj.getElementById);
                return fn.apply(obj, arguments);
            }.bind(this)('clear'), fn = __recognizer432552797.logProbe([
                285,
                41,
                285,
                57
            ], obj.addEventListener);
        return fn.apply(obj, arguments);
    }.bind(this)('click', __recognizer432552797.logProbe([
        285,
        67,
        285,
        77
    ], cleanStart), false));
    (function () {
        var obj = function () {
                var obj = __recognizer432552797.logProbe([
                        286,
                        8,
                        286,
                        16
                    ], document), fn = __recognizer432552797.logProbe([
                        286,
                        17,
                        286,
                        31
                    ], obj.getElementById);
                return fn.apply(obj, arguments);
            }.bind(this)('download'), fn = __recognizer432552797.logProbe([
                286,
                44,
                286,
                60
            ], obj.addEventListener);
        return fn.apply(obj, arguments);
    }.bind(this)('click', __recognizer432552797.logProbe([
        286,
        70,
        286,
        84
    ], downloadCanvas), false));
    __recognizer432552797.logProbe([
        288,
        4,
        288,
        16
    ], __recognizer432552797.logProbe([
        288,
        4,
        288,
        14
    ], cleanStart)());
}
function cleanStart() {
    __recognizer432552797.logEntry([
        296,
        9,
        296,
        19
    ], arguments);
    var canvas = function () {
            var obj = __recognizer432552797.logProbe([
                    297,
                    16,
                    297,
                    24
                ], document), fn = __recognizer432552797.logProbe([
                    297,
                    25,
                    297,
                    39
                ], obj.getElementById);
            return fn.apply(obj, arguments);
        }.bind(this)('canvas_1');
    var cntxt = function () {
            var obj = __recognizer432552797.logProbe([
                    298,
                    16,
                    298,
                    22
                ], canvas), fn = __recognizer432552797.logProbe([
                    298,
                    23,
                    298,
                    33
                ], obj.getContext);
            return fn.apply(obj, arguments);
        }.bind(this)('2d');
    var imageObj = new (__recognizer432552797.logProbe([
            299,
            22,
            299,
            27
        ], Image))();
    imageObj.onload = function () {
        __recognizer432552797.logEntry([
            301,
            22,
            301,
            30
        ], arguments);
        (function () {
            var obj = __recognizer432552797.logProbe([
                    302,
                    9,
                    302,
                    14
                ], cntxt), fn = __recognizer432552797.logProbe([
                    302,
                    15,
                    302,
                    24
                ], obj.drawImage);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer432552797.logProbe([
            302,
            25,
            302,
            33
        ], imageObj), 0, 0));
    };
    imageObj.src = 'images/mona.jpg';
}
function addbuttons() {
    __recognizer432552797.logEntry([
        311,
        9,
        311,
        19
    ], arguments);
    numItems = __recognizer432552797.logProbe([
        313,
        56,
        313,
        62
    ], function () {
        var obj = __recognizer432552797.logProbe([
                313,
                15,
                313,
                23
            ], document), fn = __recognizer432552797.logProbe([
                313,
                24,
                313,
                41
            ], obj.getElementsByName);
        return fn.apply(obj, arguments);
    }.bind(this)('searchterm').length);
    if (__recognizer432552797.logProbe([
            314,
            8,
            314,
            16
        ], numItems) == 5) {
    } else {
        var menuDiv = function () {
                var obj = __recognizer432552797.logProbe([
                        316,
                        22,
                        316,
                        30
                    ], document), fn = __recognizer432552797.logProbe([
                        316,
                        31,
                        316,
                        45
                    ], obj.getElementById);
                return fn.apply(obj, arguments);
            }.bind(this)('menu');
        var inputsearch = function () {
                var obj = __recognizer432552797.logProbe([
                        318,
                        26,
                        318,
                        34
                    ], document), fn = __recognizer432552797.logProbe([
                        318,
                        35,
                        318,
                        48
                    ], obj.createElement);
                return fn.apply(obj, arguments);
            }.bind(this)('input');
        (function () {
            var obj = __recognizer432552797.logProbe([
                    319,
                    12,
                    319,
                    23
                ], inputsearch), fn = __recognizer432552797.logProbe([
                    319,
                    24,
                    319,
                    36
                ], obj.setAttribute);
            return fn.apply(obj, arguments);
        }.bind(this)('class', 'searchterm'));
        (function () {
            var obj = __recognizer432552797.logProbe([
                    320,
                    12,
                    320,
                    23
                ], inputsearch), fn = __recognizer432552797.logProbe([
                    320,
                    24,
                    320,
                    36
                ], obj.setAttribute);
            return fn.apply(obj, arguments);
        }.bind(this)('name', 'searchterm'));
        inputsearch.innerHTML = 'Line';
        (function () {
            var obj = __recognizer432552797.logProbe([
                    322,
                    8,
                    322,
                    15
                ], menuDiv), fn = __recognizer432552797.logProbe([
                    322,
                    16,
                    322,
                    27
                ], obj.appendChild);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer432552797.logProbe([
            322,
            28,
            322,
            39
        ], inputsearch)));
        var removeButton = function () {
                var obj = __recognizer432552797.logProbe([
                        324,
                        27,
                        324,
                        35
                    ], document), fn = __recognizer432552797.logProbe([
                        324,
                        36,
                        324,
                        49
                    ], obj.createElement);
                return fn.apply(obj, arguments);
            }.bind(this)('button');
        (function () {
            var obj = __recognizer432552797.logProbe([
                    325,
                    12,
                    325,
                    24
                ], removeButton), fn = __recognizer432552797.logProbe([
                    325,
                    25,
                    325,
                    37
                ], obj.setAttribute);
            return fn.apply(obj, arguments);
        }.bind(this)('class', 'remove'));
        (function () {
            var obj = __recognizer432552797.logProbe([
                    326,
                    12,
                    326,
                    24
                ], removeButton), fn = __recognizer432552797.logProbe([
                    326,
                    25,
                    326,
                    37
                ], obj.setAttribute);
            return fn.apply(obj, arguments);
        }.bind(this)('name', 'remove'));
        (function () {
            var obj = __recognizer432552797.logProbe([
                    327,
                    12,
                    327,
                    24
                ], removeButton), fn = __recognizer432552797.logProbe([
                    327,
                    25,
                    327,
                    41
                ], obj.addEventListener);
            return fn.apply(obj, arguments);
        }.bind(this)('click', __recognizer432552797.logProbe([
            327,
            51,
            327,
            63
        ], removebutton), false));
        removeButton.innerHTML = '-';
        (function () {
            var obj = __recognizer432552797.logProbe([
                    329,
                    8,
                    329,
                    15
                ], menuDiv), fn = __recognizer432552797.logProbe([
                    329,
                    16,
                    329,
                    27
                ], obj.appendChild);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer432552797.logProbe([
            329,
            28,
            329,
            40
        ], removeButton)));
    }
}
function removebutton() {
    __recognizer432552797.logEntry([
        337,
        9,
        337,
        21
    ], arguments);
    numItems = __recognizer432552797.logProbe([
        338,
        56,
        338,
        62
    ], function () {
        var obj = __recognizer432552797.logProbe([
                338,
                15,
                338,
                23
            ], document), fn = __recognizer432552797.logProbe([
                338,
                24,
                338,
                41
            ], obj.getElementsByName);
        return fn.apply(obj, arguments);
    }.bind(this)('searchterm').length);
    var numremove = __recognizer432552797.logProbe([
            339,
            57,
            339,
            63
        ], function () {
            var obj = __recognizer432552797.logProbe([
                    339,
                    20,
                    339,
                    28
                ], document), fn = __recognizer432552797.logProbe([
                    339,
                    29,
                    339,
                    46
                ], obj.getElementsByName);
            return fn.apply(obj, arguments);
        }.bind(this)('remove').length);
    var menuDiv = function () {
            var obj = __recognizer432552797.logProbe([
                    340,
                    18,
                    340,
                    26
                ], document), fn = __recognizer432552797.logProbe([
                    340,
                    27,
                    340,
                    41
                ], obj.getElementById);
            return fn.apply(obj, arguments);
        }.bind(this)('menu');
    if (__recognizer432552797.logProbe([
            342,
            8,
            342,
            16
        ], numItems) == 0) {
    } else {
        (function () {
            var obj = __recognizer432552797.logProbe([
                    343,
                    8,
                    343,
                    15
                ], menuDiv), fn = __recognizer432552797.logProbe([
                    343,
                    16,
                    343,
                    27
                ], obj.removeChild);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer432552797.logProbe([
            343,
            69,
            343,
            81
        ], function () {
            var obj = __recognizer432552797.logProbe([
                    343,
                    28,
                    343,
                    36
                ], document), fn = __recognizer432552797.logProbe([
                    343,
                    37,
                    343,
                    54
                ], obj.getElementsByName);
            return fn.apply(obj, arguments);
        }.bind(this)('searchterm')[__recognizer432552797.logProbe([
            343,
            69,
            343,
            77
        ], numItems) - 1])));
        (function () {
            var obj = __recognizer432552797.logProbe([
                    344,
                    8,
                    344,
                    15
                ], menuDiv), fn = __recognizer432552797.logProbe([
                    344,
                    16,
                    344,
                    27
                ], obj.removeChild);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer432552797.logProbe([
            344,
            65,
            344,
            78
        ], function () {
            var obj = __recognizer432552797.logProbe([
                    344,
                    28,
                    344,
                    36
                ], document), fn = __recognizer432552797.logProbe([
                    344,
                    37,
                    344,
                    54
                ], obj.getElementsByName);
            return fn.apply(obj, arguments);
        }.bind(this)('remove')[__recognizer432552797.logProbe([
            344,
            65,
            344,
            74
        ], numremove) - 1])));
    }
}
function searchButtonrun() {
    __recognizer432552797.logEntry([
        355,
        9,
        355,
        24
    ], arguments);
    (function () {
        var obj = __recognizer432552797.logProbe([
                356,
                4,
                356,
                16
            ], localStorage), fn = __recognizer432552797.logProbe([
                356,
                17,
                356,
                24
            ], obj.setItem);
        return fn.apply(obj, arguments);
    }.bind(this)('searchterm', __recognizer432552797.logProbe([
        356,
        82,
        356,
        87
    ], __recognizer432552797.logProbe([
        356,
        79,
        356,
        80
    ], function () {
        var obj = __recognizer432552797.logProbe([
                356,
                38,
                356,
                46
            ], document), fn = __recognizer432552797.logProbe([
                356,
                47,
                356,
                64
            ], obj.getElementsByName);
        return fn.apply(obj, arguments);
    }.bind(this)('searchterm')[0]).value)));
    (function () {
        var obj = __recognizer432552797.logProbe([
                357,
                4,
                357,
                15
            ], __recognizer432552797.logProbe([
                357,
                4,
                357,
                5
            ], $)(__recognizer432552797.logProbe([
                357,
                6,
                357,
                14
            ], document))), fn = __recognizer432552797.logProbe([
                357,
                16,
                357,
                21
            ], obj.ready);
        return fn.apply(obj, arguments);
    }.bind(this)(function ($) {
        __recognizer432552797.logEntry([
            357,
            22,
            357,
            30
        ], arguments);
        searches = '';
        (function () {
            var obj = __recognizer432552797.logProbe([
                    359,
                    8,
                    359,
                    24
                ], __recognizer432552797.logProbe([
                    359,
                    8,
                    359,
                    9
                ], $)('.searchterm')), fn = __recognizer432552797.logProbe([
                    359,
                    25,
                    359,
                    29
                ], obj.each);
            return fn.apply(obj, arguments);
        }.bind(this)(function (index) {
            __recognizer432552797.logEntry([
                359,
                30,
                359,
                38
            ], arguments);
            searches += function () {
                var obj = __recognizer432552797.logProbe([
                        361,
                        24,
                        361,
                        31
                    ], __recognizer432552797.logProbe([
                        361,
                        24,
                        361,
                        25
                    ], $)(__recognizer432552797.logProbe([
                        361,
                        26,
                        361,
                        30
                    ], this))), fn = __recognizer432552797.logProbe([
                        361,
                        32,
                        361,
                        35
                    ], obj.val);
                return fn.apply(obj, arguments);
            }.bind(this)() + '+';
        }));
        (function () {
            var obj = __recognizer432552797.logProbe([
                    363,
                    8,
                    363,
                    20
                ], __recognizer432552797.logProbe([
                    363,
                    8,
                    363,
                    9
                ], $)('#search')), fn = __recognizer432552797.logProbe([
                    363,
                    21,
                    363,
                    25
                ], obj.html);
            return fn.apply(obj, arguments);
        }.bind(this)('loading'));
        (function () {
            var obj = __recognizer432552797.logProbe([
                    365,
                    8,
                    365,
                    15
                ], __recognizer432552797.logProbe([
                    365,
                    8,
                    365,
                    9
                ], $)('h1')), fn = __recognizer432552797.logProbe([
                    365,
                    16,
                    365,
                    22
                ], obj.remove);
            return fn.apply(obj, arguments);
        }.bind(this)());
        (function () {
            var obj = __recognizer432552797.logProbe([
                    366,
                    8,
                    366,
                    16
                ], __recognizer432552797.logProbe([
                    366,
                    8,
                    366,
                    9
                ], $)('img')), fn = __recognizer432552797.logProbe([
                    366,
                    17,
                    366,
                    23
                ], obj.remove);
            return fn.apply(obj, arguments);
        }.bind(this)());
        var term = searches;
        var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8b010ef32af4006f4fac0249a746289e&tags=toy&safe_search=1&per_page=1';
        var src;
        (function () {
            var obj = __recognizer432552797.logProbe([
                    370,
                    8,
                    370,
                    9
                ], $), fn = __recognizer432552797.logProbe([
                    370,
                    10,
                    370,
                    17
                ], obj.getJSON);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer432552797.logProbe([
            370,
            18,
            370,
            21
        ], url) + '&format=json&jsoncallback=?', function (data) {
            __recognizer432552797.logEntry([
                370,
                55,
                370,
                63
            ], arguments);
            if (__recognizer432552797.logProbe([
                    372,
                    34,
                    372,
                    40
                ], __recognizer432552797.logProbe([
                    372,
                    28,
                    372,
                    33
                ], __recognizer432552797.logProbe([
                    372,
                    21,
                    372,
                    27
                ], __recognizer432552797.logProbe([
                    372,
                    16,
                    372,
                    20
                ], data).photos).photo).length) === 0) {
                (function () {
                    var obj = function () {
                            var obj = __recognizer432552797.logProbe([
                                    374,
                                    16,
                                    374,
                                    26
                                ], __recognizer432552797.logProbe([
                                    374,
                                    16,
                                    374,
                                    17
                                ], $)('<h1/>')), fn = __recognizer432552797.logProbe([
                                    374,
                                    27,
                                    374,
                                    31
                                ], obj.attr);
                            return fn.apply(obj, arguments);
                        }.bind(this)('class', 's'), fn = __recognizer432552797.logProbe([
                            374,
                            46,
                            374,
                            54
                        ], obj.appendTo);
                    return fn.apply(obj, arguments);
                }.bind(this)('#right'));
                (function () {
                    var obj = __recognizer432552797.logProbe([
                            375,
                            16,
                            375,
                            23
                        ], __recognizer432552797.logProbe([
                            375,
                            16,
                            375,
                            17
                        ], $)('.s')), fn = __recognizer432552797.logProbe([
                            375,
                            24,
                            375,
                            28
                        ], obj.html);
                    return fn.apply(obj, arguments);
                }.bind(this)('None found :-o'));
            }
            (function () {
                var obj = __recognizer432552797.logProbe([
                        377,
                        12,
                        377,
                        13
                    ], $), fn = __recognizer432552797.logProbe([
                        377,
                        14,
                        377,
                        18
                    ], obj.each);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer432552797.logProbe([
                377,
                31,
                377,
                36
            ], __recognizer432552797.logProbe([
                377,
                24,
                377,
                30
            ], __recognizer432552797.logProbe([
                377,
                19,
                377,
                23
            ], data).photos).photo), function (i, item) {
                __recognizer432552797.logEntry([
                    377,
                    38,
                    377,
                    46
                ], arguments);
                src = 'http://farm' + __recognizer432552797.logProbe([
                    378,
                    43,
                    378,
                    47
                ], __recognizer432552797.logProbe([
                    378,
                    38,
                    378,
                    42
                ], item).farm) + '.static.flickr.com/' + __recognizer432552797.logProbe([
                    378,
                    79,
                    378,
                    85
                ], __recognizer432552797.logProbe([
                    378,
                    74,
                    378,
                    78
                ], item).server) + '/' + __recognizer432552797.logProbe([
                    378,
                    99,
                    378,
                    101
                ], __recognizer432552797.logProbe([
                    378,
                    94,
                    378,
                    98
                ], item).id) + '_' + __recognizer432552797.logProbe([
                    378,
                    115,
                    378,
                    121
                ], __recognizer432552797.logProbe([
                    378,
                    110,
                    378,
                    114
                ], item).secret) + '_m.jpg';
                (function () {
                    var obj = function () {
                            var obj = __recognizer432552797.logProbe([
                                    379,
                                    16,
                                    379,
                                    27
                                ], __recognizer432552797.logProbe([
                                    379,
                                    16,
                                    379,
                                    17
                                ], $)('<img/>')), fn = __recognizer432552797.logProbe([
                                    379,
                                    28,
                                    379,
                                    32
                                ], obj.attr);
                            return fn.apply(obj, arguments);
                        }.bind(this)('src', __recognizer432552797.logProbe([
                            379,
                            40,
                            379,
                            43
                        ], src)), fn = __recognizer432552797.logProbe([
                            379,
                            45,
                            379,
                            53
                        ], obj.appendTo);
                    return fn.apply(obj, arguments);
                }.bind(this)('#right'));
                (function () {
                    var obj = __recognizer432552797.logProbe([
                            380,
                            16,
                            380,
                            24
                        ], __recognizer432552797.logProbe([
                            380,
                            16,
                            380,
                            17
                        ], $)('img')), fn = __recognizer432552797.logProbe([
                            380,
                            25,
                            380,
                            28
                        ], obj.css);
                    return fn.apply(obj, arguments);
                }.bind(this)('opacity', 0));
                (function () {
                    var obj = __recognizer432552797.logProbe([
                            381,
                            16,
                            381,
                            24
                        ], __recognizer432552797.logProbe([
                            381,
                            16,
                            381,
                            17
                        ], $)('img')), fn = __recognizer432552797.logProbe([
                            381,
                            25,
                            381,
                            29
                        ], obj.show);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                (function () {
                    var obj = __recognizer432552797.logProbe([
                            382,
                            16,
                            382,
                            24
                        ], __recognizer432552797.logProbe([
                            382,
                            16,
                            382,
                            17
                        ], $)('img')), fn = __recognizer432552797.logProbe([
                            382,
                            25,
                            382,
                            32
                        ], obj.animate);
                    return fn.apply(obj, arguments);
                }.bind(this)({ opacity: 1 }, {
                    queue: false,
                    duration: 'slow'
                }));
                (function () {
                    var obj = __recognizer432552797.logProbe([
                            388,
                            16,
                            388,
                            24
                        ], __recognizer432552797.logProbe([
                            388,
                            16,
                            388,
                            17
                        ], $)('img')), fn = __recognizer432552797.logProbe([
                            388,
                            25,
                            388,
                            32
                        ], obj.animate);
                    return fn.apply(obj, arguments);
                }.bind(this)({ top: '-10px' }, 'slow'));
                if (__recognizer432552797.logProbe([
                        392,
                        20,
                        392,
                        21
                    ], i) == 1000) {
                    return false;
                }
            }));
            (function () {
                var obj = __recognizer432552797.logProbe([
                        397,
                        12,
                        397,
                        24
                    ], __recognizer432552797.logProbe([
                        397,
                        12,
                        397,
                        13
                    ], $)('#search')), fn = __recognizer432552797.logProbe([
                        397,
                        25,
                        397,
                        29
                    ], obj.html);
                return fn.apply(obj, arguments);
            }.bind(this)('Search'));
        }));
    }));
}