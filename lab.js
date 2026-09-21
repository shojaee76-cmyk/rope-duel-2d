(() => {
  // src/util.js
  var TAU = Math.PI * 2;

  // src/rig.js
  var L = {
    spine: 0.285,
    neck: 0.068,
    headR: 0.114,
    upArm: 0.155,
    foreArm: 0.15,
    hand: 0.055,
    blade: 0.44,
    thigh: 0.2,
    shin: 0.175,
    foot: 0.075,
    tailSeg: 0.082,
    tailN: 7,
    shoulderF: 0.052,
    shoulderB: -0.05,
    shoulderUp: 0.028,
    hipSpread: 0.022
  };
  var D2R = Math.PI / 180;
  var dir = (deg2, len = 1) => ({ x: Math.sin(deg2 * D2R) * len, y: Math.cos(deg2 * D2R) * len });
  var up = (deg2, len = 1) => ({ x: Math.sin(deg2 * D2R) * len, y: -Math.cos(deg2 * D2R) * len });
  var add = (p, v) => ({ x: p.x + v.x, y: p.y + v.y });
  var BASE = {
    lean: 7,
    head: 4,
    tilt: 0,
    shF: 40,
    elF: 64,
    blade: 132,
    shB: -26,
    elB: 34,
    thF: 30,
    knF: -32,
    thB: -26,
    knB: 26,
    crouch: 0.25,
    hop: 0,
    slip: 0,
    tail: 202,
    tailCurl: 0.42,
    grip: 0.5,
    locked: 0,
    shake: 0,
    guardOpen: 0
  };
  var P = {
    READY: {},
    SIT_GUARD: { lean: -6, head: 7, shF: 54, elF: 38, blade: 148, shB: -48, elB: 72, thF: 46, knF: -58, thB: -32, knB: 66, crouch: 0.88, slip: -0.05, tail: 26, tailCurl: 0.5 },
    LUNGE_WIND: { lean: -15, head: -2, shF: 18, elF: 82, blade: 162, shB: -34, elB: 44, thF: 38, knF: -48, thB: -20, knB: 24, crouch: 0.62, slip: -0.06, tail: -34 },
    LUNGE_HIT: { lean: 31, head: 11, shF: 86, elF: 12, blade: 101, shB: -10, elB: 26, thF: 58, knF: -26, thB: -54, knB: 62, crouch: 0.06, slip: 0.15, tail: -46 },
    LUNGE_HOLD: { lean: 27, head: 9, shF: 82, elF: 16, blade: 104, shB: -12, elB: 28, thF: 56, knF: -30, thB: -52, knB: 60, crouch: 0.1, slip: 0.13, tail: -42 },
    THRUST_COIL: { lean: -5, head: 2, shF: 26, elF: 80, blade: 122, shB: -30, elB: 40, thF: 34, knF: -40, crouch: 0.5, slip: -0.03, tail: -24 },
    THRUST_HIT: { lean: 20, head: 8, shF: 74, elF: 22, blade: 93, shB: -14, elB: 30, thF: 52, knF: -30, thB: -46, knB: 52, crouch: 0.12, slip: 0.11, tail: -38 },
    SLASHUP_WIND: { lean: -10, head: 8, shF: 6, elF: 30, blade: 34, shB: -20, elB: 40, thF: 30, knF: -44, crouch: 0.7, slip: -0.05, tail: 34, tailCurl: 0.7 },
    SLASHUP_HIT: { lean: 13, head: -6, shF: 34, elF: 92, blade: 176, shB: -40, elB: 40, thF: 44, knF: -30, thB: -36, knB: 40, crouch: 0.18, hop: 0.05, slip: 0.1, tail: -54 },
    SLASHSPIN_WIND: { lean: -18, head: 4, shF: -34, elF: 54, blade: -26, shB: -56, elB: 30, thF: 26, knF: -46, crouch: 0.66, slip: -0.07, tail: 42, tailCurl: 0.9 },
    SLASHSPIN_HIT: { lean: 34, head: 6, shF: 96, elF: -4, blade: 96, shB: 34, elB: 20, thF: 54, knF: -28, thB: -48, knB: 54, crouch: 0.14, slip: 0.13, tail: -58 },
    FEINT_FAKE: { lean: 22, head: 10, shF: 80, elF: 20, blade: 104, crouch: 0.2, slip: 0.11, tail: -40 },
    FEINT_PULL: { lean: -22, head: 2, shF: 22, elF: 78, blade: 156, shB: -40, elB: 60, thF: 34, knF: -44, thB: -34, knB: 40, crouch: 0.6, slip: -0.12, tail: 30 },
    PARRY_WIND: { lean: -6, head: 6, shF: 16, elF: 58, blade: 44, shB: -34, elB: 48, thF: 34, knF: -42, crouch: 0.45, tail: 12 },
    PARRY_BEAT: { lean: 14, head: 5, shF: 72, elF: 34, blade: 128, shB: -16, elB: 34, thF: 44, knF: -36, thB: -40, knB: 46, crouch: 0.3, slip: 0.05, tail: -28 },
    PARRY_SETTLE: { lean: 4, head: 4, shF: 48, elF: 56, blade: 146, crouch: 0.35, slip: 0.01 },
    PARRY_HOP: { lean: -20, head: -3, shF: 24, elF: 70, blade: 150, shB: -44, elB: 56, thF: 40, knF: -54, thB: -30, knB: 50, crouch: 0.5, hop: 0.07, slip: -0.14, tail: 40, tailCurl: 0.6 },
    LOCK: { lean: 19, head: 8, shF: 66, elF: 36, blade: 122, shB: -14, elB: 40, thF: 50, knF: -38, thB: -44, knB: 48, crouch: 0.42, slip: 0.07, tail: -30, locked: 1 },
    LOCK_DEEP: { lean: 24, head: 10, shF: 72, elF: 30, blade: 118, shB: -10, elB: 44, thF: 54, knF: -34, thB: -48, knB: 52, crouch: 0.36, slip: 0.09, tail: -34, locked: 1 },
    CLASH_RECOIL: { lean: -12, head: -4, shF: 28, elF: 74, blade: 156, shB: -40, elB: 48, thF: 34, knF: -46, thB: -30, knB: 44, crouch: 0.52, hop: 0.02, slip: -0.08, tail: 36, tailCurl: 0.5 },
    HIT_REEL: { lean: -26, head: -10, shF: 6, elF: 34, blade: 52, shB: -52, elB: 62, thF: 40, knF: -52, thB: -38, knB: 58, crouch: 0.72, hop: 0.03, slip: -0.14, tail: 56, tailCurl: 0.9 },
    HIT_SETTLE: { lean: -14, head: -3, shF: 20, elF: 52, blade: 78, thF: 36, knF: -44, crouch: 0.55, slip: -0.07, tail: 34 },
    RECOVER: { lean: 12, head: 5, shF: 50, elF: 52, blade: 120, crouch: 0.4, slip: 0.03, tail: -22 },
    TAUNT: { lean: 12, head: -2, shF: 58, elF: 30, blade: 158, shB: -34, elB: 26, thF: 36, knF: -34, crouch: 0.2, tail: -30 },
    FLOURISH_A: { lean: 16, head: -4, shF: 62, elF: 20, blade: 250, shB: -30, elB: 40, crouch: 0.15, slip: 0.05, tail: -42 },
    FLOURISH_B: { lean: 18, head: 2, shF: 68, elF: 30, blade: 348, shB: -26, elB: 36, crouch: 0.18, slip: 0.06, tail: -46 },
    CHARGE: { lean: 26, head: 8, shF: 78, elF: 16, blade: 96, shB: -8, elB: 30, thF: 54, knF: -34, thB: -48, knB: 54, crouch: 0.16, tail: -44 }
  };
  var K = (t, p, o = {}) => ({ t, p, hit: o.hit || false, ease: o.ease || "inout" });
  var MOVES = {
    READY: { dur: 0.62, keys: [K(0, {}), K(1, {})] },
    SIT_GUARD: { dur: 3.6, keys: [K(0, P.SIT_GUARD, { ease: "out" }), K(0.14, P.SIT_GUARD), K(1, P.SIT_GUARD)], guard: true },
    LUNGE: {
      dur: 0.78,
      off: true,
      reach: 1.02,
      adv: 0.3,
      hitAt: 0.4,
      hitUntil: 0.72,
      blade: "thrust",
      keys: [K(0, {}), K(0.22, P.LUNGE_WIND, { ease: "out" }), K(0.5, P.LUNGE_HIT, { ease: "in", hit: true }), K(0.68, P.LUNGE_HOLD), K(1, P.RECOVER)]
    },
    THRUST: {
      dur: 0.56,
      off: true,
      reach: 0.92,
      adv: 0.22,
      hitAt: 0.36,
      hitUntil: 0.64,
      blade: "thrust",
      keys: [K(0, {}), K(0.2, P.THRUST_COIL, { ease: "out" }), K(0.44, P.THRUST_HIT, { ease: "in", hit: true }), K(0.62, P.THRUST_HIT), K(1, P.RECOVER)]
    },
    SLASH_UP: {
      dur: 0.72,
      off: true,
      reach: 0.95,
      adv: 0.16,
      hitAt: 0.42,
      hitUntil: 0.7,
      blade: "cut",
      keys: [K(0, {}), K(0.24, P.SLASHUP_WIND, { ease: "out" }), K(0.5, P.SLASHUP_HIT, { ease: "in", hit: true }), K(0.66, P.SLASHUP_HIT), K(1, P.RECOVER)]
    },
    SLASH_SPIN: {
      dur: 0.86,
      off: true,
      reach: 1.05,
      adv: 0.32,
      hitAt: 0.4,
      hitUntil: 0.7,
      blade: "cut",
      keys: [K(0, {}), K(0.26, P.SLASHSPIN_WIND, { ease: "out" }), K(0.52, P.SLASHSPIN_HIT, { ease: "in", hit: true }), K(0.7, P.SLASHSPIN_HIT), K(1, P.RECOVER)]
    },
    RUSH: {
      dur: 0.92,
      off: true,
      reach: 0.98,
      adv: 0.62,
      hitAt: 0.44,
      hitUntil: 0.74,
      blade: "cut",
      walk: 1,
      keys: [K(0, {}), K(0.2, P.CHARGE, { ease: "out" }), K(0.52, P.SLASHSPIN_HIT, { ease: "in", hit: true }), K(0.74, P.CHARGE), K(1, P.RECOVER)]
    },
    RIPOSTE: {
      dur: 0.62,
      off: true,
      reach: 0.9,
      adv: 0.24,
      hitAt: 0.34,
      hitUntil: 0.62,
      blade: "thrust",
      keys: [K(0, P.PARRY_SETTLE), K(0.18, P.THRUST_COIL, { ease: "out" }), K(0.44, P.THRUST_HIT, { ease: "in", hit: true }), K(0.62, P.THRUST_HIT), K(1, P.RECOVER)]
    },
    FEINT: {
      dur: 0.88,
      off: true,
      reach: 0.6,
      adv: -0.1,
      blade: "cut",
      keys: [K(0, {}), K(0.3, P.FEINT_FAKE, { ease: "out" }), K(0.46, P.FEINT_PULL, { ease: "in" }), K(0.68, P.FEINT_PULL), K(1, P.RECOVER)]
    },
    TAUNT: { dur: 1.15, adv: -0.06, keys: [K(0, {}), K(0.22, P.TAUNT, { ease: "out" }), K(0.42, { ...P.TAUNT, blade: 178, head: -4 }), K(0.58, { ...P.TAUNT, blade: 142, head: 6 }), K(0.74, { ...P.TAUNT, blade: 172 }), K(1, P.RECOVER)] },
    PARRY_BEAT: { dur: 0.54, guard: true, adv: -0.03, keys: [K(0, {}), K(0.22, P.PARRY_WIND, { ease: "out" }), K(0.46, P.PARRY_BEAT, { ease: "in" }), K(1, P.PARRY_SETTLE)] },
    PARRY_HOP: { dur: 0.6, guard: true, adv: -0.26, keys: [K(0, {}), K(0.26, P.PARRY_HOP, { ease: "out" }), K(0.62, P.PARRY_HOP), K(1, P.READY)] },
    BLADE_LOCK: { dur: 0.66, guard: true, keys: [K(0, P.LOCK, { ease: "out" }), K(0.4, P.LOCK_DEEP), K(1, P.CLASH_RECOIL)] },
    CLASH: { dur: 0.42, keys: [K(0, P.CLASH_RECOIL, { ease: "out" }), K(1, P.READY)] },
    REEL: { dur: 0.94, adv: -0.3, keys: [K(0, P.HIT_REEL, { ease: "out" }), K(0.36, P.HIT_REEL), K(0.66, P.HIT_SETTLE), K(1, P.RECOVER)] },
    RECOVER: { dur: 0.44, keys: [K(0, P.RECOVER), K(1, {})] },
    FLOURISH: { dur: 1.05, keys: [K(0, {}), K(0.3, P.FLOURISH_A, { ease: "out" }), K(0.58, P.FLOURISH_B, { ease: "out" }), K(1, P.RECOVER)] },
    IDLE: { dur: 1.8, keys: [K(0, {}), K(1, {})] }
  };
  var EASE = {
    linear: (t) => t,
    out: (t) => 1 - Math.pow(1 - t, 3),
    in: (t) => t * t * t,
    inout: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  };
  function samplePose(name, t) {
    const m = MOVES[name] || MOVES.READY;
    const keys = m.keys;
    const tt = t < 0 ? 0 : t > 1 ? 1 : t;
    let a = keys[0], b = keys[keys.length - 1];
    for (let i = 0; i < keys.length - 1; i++) {
      if (tt >= keys[i].t && tt <= keys[i + 1].t) {
        a = keys[i];
        b = keys[i + 1];
        break;
      }
    }
    const span = b.t - a.t;
    const raw = span <= 1e-6 ? 1 : (tt - a.t) / span;
    const f = (EASE[b.ease] || EASE.inout)(raw);
    const out = {};
    for (const k of Object.keys(BASE)) {
      const av = a.p[k] === void 0 ? BASE[k] : a.p[k];
      const bv = b.p[k] === void 0 ? BASE[k] : b.p[k];
      out[k] = av + (bv - av) * f;
    }
    if (m.walk) {
      const cyc = Math.sin(tt * Math.PI * 2 * 2.2);
      out.thF += cyc * 16;
      out.thB -= cyc * 16;
      out.knF -= Math.max(0, cyc) * 22;
      out.knB -= Math.max(0, -cyc) * 22;
    }
    return out;
  }
  function skeleton(pose, cat) {
    const crouch = pose.crouch || 0;
    const thF = pose.thF + crouch * 20;
    const knF = pose.knF - crouch * 26;
    const thB = pose.thB - crouch * 18;
    const knB = pose.knB + crouch * 24;
    const lean = pose.lean;
    const hip = { x: 0, y: 0 };
    const perp = dir(lean, 1);
    const axis = up(lean, 1);
    const chest = add(hip, { x: axis.x * L.spine, y: axis.y * L.spine });
    const neckA = lean + (pose.head || 0);
    const headBase = add(chest, { x: Math.sin(neckA * D2R) * L.neck, y: -Math.cos(neckA * D2R) * L.neck });
    const headC = add(headBase, { x: Math.sin(neckA * D2R) * L.headR * 0.85, y: -Math.cos(neckA * D2R) * L.headR * 0.85 });
    const shF = add(chest, { x: perp.x * L.shoulderF, y: perp.y * L.shoulderF - L.shoulderUp });
    const shB = add(chest, { x: perp.x * L.shoulderB, y: perp.y * L.shoulderB - L.shoulderUp });
    const elF = add(shF, dir(pose.shF, L.upArm));
    const handF = add(elF, dir(pose.shF + pose.elF, L.foreArm));
    const elB = add(shB, dir(pose.shB, L.upArm));
    const handB = add(elB, dir(pose.shB + pose.elB, L.foreArm));
    const bladeA = add(handF, dir(pose.blade - 96, 0.06));
    const bladeB = add(bladeA, dir(pose.blade, L.blade));
    const hipF = add(hip, { x: perp.x * L.hipSpread, y: perp.y * L.hipSpread });
    const hipB = add(hip, { x: perp.x * -L.hipSpread, y: perp.y * -L.hipSpread });
    const kneeF = add(hipF, dir(thF, L.thigh));
    const footF0 = add(kneeF, dir(thF + knF, L.shin));
    const kneeB = add(hipB, dir(thB, L.thigh));
    const footB0 = add(kneeB, dir(thB + knB, L.shin));
    const footF = { x: footF0.x, y: footF0.y - 0.012 };
    const footB = { x: footB0.x, y: footB0.y - 0.012 };
    const tail2 = [];
    const tailRoot = add(hip, { x: axis.x * -0.035 + perp.x * -0.085, y: axis.y * -0.035 + perp.y * -0.085 });
    let cur = tailRoot, ang = pose.tail;
    for (let i = 0; i < L.tailN; i++) {
      ang += (pose.tailCurl || 0) * 14;
      cur = add(cur, dir(ang, L.tailSeg));
      tail2.push({ ...cur, a: ang });
    }
    const footY = Math.max(footF.y, footB.y);
    return { hip, chest, headBase, headC, neckA, lean, shF, elF, handF, bladeA, bladeB, shB, elB, handB, footF, footB, kneeF, kneeB, tail: tail2, tailRoot, footY, perp, axis, thF, thB, crouch };
  }

  // src/puppet-art.js
  var TAU2 = Math.PI * 2;
  var deg = (d) => d * Math.PI / 180;
  function taper(p, a, b, ra, rb) {
    const ang = Math.atan2(b.y - a.y, b.x - a.x);
    const h = Math.PI / 2, q = Math.PI * 3 / 2;
    p.moveTo(a.x + Math.cos(ang + h) * ra, a.y + Math.sin(ang + h) * ra);
    p.lineTo(b.x + Math.cos(ang + h) * rb, b.y + Math.sin(ang + h) * rb);
    p.arc(b.x, b.y, Math.max(rb, 8e-4), ang + h, ang + q, false);
    p.lineTo(b.x + Math.cos(ang + q) * rb, b.y + Math.sin(ang + q) * rb);
    p.arc(a.x, a.y, Math.max(ra, 8e-4), ang + q, ang + h, true);
    p.closePath();
  }
  function blob(p, cx, cy, rx, ry, rot = 0) {
    p.ellipse(cx, cy, rx, ry, rot, 0, TAU2, false);
  }
  function ring(p, cx, cy, R, r, rot = 0, squish = 1) {
    p.ellipse(cx, cy, R, R * squish, rot, 0, TAU2, false);
    p.ellipse(cx, cy, r, r * squish, rot, 0, TAU2, true);
  }
  function poly(p, pts) {
    p.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) p.lineTo(pts[i].x, pts[i].y);
    p.closePath();
  }
  function off(pt, dx, dy) {
    return { x: pt.x + dx, y: pt.y + dy };
  }
  function ell(p, pts) {
    const n = pts.length;
    p.moveTo(pts[0].x, pts[0].y);
    for (let i = 0; i < n; i++) {
      const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      p.bezierCurveTo(p1.x + (p2.x - p0.x) / 6, p1.y + (p2.y - p0.y) / 6, p2.x - (p3.x - p1.x) / 6, p2.y - (p3.y - p1.y) / 6, p2.x, p2.y);
    }
    p.closePath();
  }
  function bladeStrip(out, a, b, bow, w, core) {
    const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy) || 1e-6;
    const nx = -dy / len, ny = dx / len;
    const c = { x: (a.x + b.x) / 2 + nx * bow * len, y: (a.y + b.y) / 2 + ny * bow * len };
    const edge = (k, path) => {
      path.moveTo(a.x + nx * k * 0.5, a.y + ny * k * 0.5);
      path.quadraticCurveTo(c.x + nx * k * 0.5, c.y + ny * k * 0.5, b.x + nx * k * 0.28, b.y + ny * k * 0.28);
      path.quadraticCurveTo(c.x - nx * k * 0.5, c.y - ny * k * 0.5, a.x - nx * k * 0.5, a.y - ny * k * 0.5);
      path.closePath();
    };
    edge(w, out.solid);
    if (core) edge(core, out.holes);
    const g = 0.052;
    taper(out.solid, off(a, nx * -g * 0.5, ny * -g * 0.5), off(a, nx * g * 0.5, ny * g * 0.5), 0.011, 0.011);
    const hp = { x: a.x - dx / len * 0.045, y: a.y - dy / len * 0.045 };
    blob(out.solid, hp.x, hp.y, 0.019, 0.019);
    blob(out.holes, hp.x, hp.y, 8e-3, 8e-3);
  }
  function headFrame(sk) {
    const a = sk.neckA;
    const fwd = { x: Math.cos(deg(a)), y: Math.sin(deg(a)) };
    const upH = { x: Math.sin(deg(a)), y: -Math.cos(deg(a)) };
    return { a, fwd, upH };
  }
  function catHead(sk, out, o) {
    const { headC, headBase } = sk;
    const { a, fwd, upH } = headFrame(sk);
    const R = L.headR;
    blob(out.solid, headC.x, headC.y, R, R * 0.92, a);
    taper(out.solid, headBase, { x: headC.x - fwd.x * 0.02, y: headC.y - fwd.y * 0.02 }, 0.05, 0.07);
    const mz = { x: headC.x + fwd.x * 0.09 + upH.x * -0.016, y: headC.y + fwd.y * 0.09 + upH.y * -0.016 };
    blob(out.solid, mz.x, mz.y, 0.062, 0.048, a);
    blob(out.holes, mz.x + fwd.x * 0.038, mz.y + fwd.y * 0.038 + 9e-3, 0.014, 0.011, a);
    blob(out.solid, headC.x + fwd.x * 0.05 + upH.x * -0.062, headC.y + fwd.y * 0.05 + upH.y * -0.062, 0.032, 0.024, a);
    const eye = (dx, dy, r) => {
      const c = { x: headC.x + fwd.x * dx + upH.x * dy, y: headC.y + fwd.y * dx + upH.y * dy };
      ell(out.holes, [
        { x: c.x - fwd.x * r * 1.5, y: c.y - fwd.y * r * 1.5 },
        { x: c.x + upH.x * r, y: c.y + upH.y * r },
        { x: c.x + fwd.x * r * 1.5, y: c.y + fwd.y * r * 1.5 },
        { x: c.x - upH.x * r, y: c.y - upH.y * r }
      ]);
    };
    eye(0.038, -8e-3, 0.019);
    eye(-0.028, 0.01, 0.0145);
    const ear = (ang, len, wid, inner) => {
      const bx = headC.x + Math.sin(deg(ang)) * R * 0.7, by = headC.y - Math.cos(deg(ang)) * R * 0.7;
      const tip = { x: bx + Math.sin(deg(ang)) * len, y: by - Math.cos(deg(ang)) * len };
      const pad = { x: Math.cos(deg(ang)) * wid, y: Math.sin(deg(ang)) * wid };
      poly(out.solid, [{ x: bx - pad.x, y: by - pad.y }, tip, { x: bx + pad.x, y: by + pad.y }]);
      if (inner) {
        const t2 = { x: bx + Math.sin(deg(ang)) * len * 0.52, y: by - Math.cos(deg(ang)) * len * 0.52 };
        poly(out.holes, [
          { x: bx - pad.x * 0.42, y: by - pad.y * 0.42 },
          t2,
          { x: bx + pad.x * 0.42, y: by + pad.y * 0.42 }
        ]);
      }
    };
    ear(-108, 0.116, 0.054, true);
    ear(-34, 0.124, 0.057, true);
    const w0 = { x: mz.x + fwd.x * 0.03, y: mz.y + fwd.y * 0.03 };
    return { w0, fwd, upH, a };
  }
  function whiskers(out, w0, fwd, upH) {
    for (const [spread, drop, len] of [[1, -0.34, 0.115], [1, -0.02, 0.132], [1, 0.3, 0.115], [-1, -0.32, 0.105], [-1, 0, 0.12], [-1, 0.32, 0.1]]) {
      const b = { x: w0.x + fwd.x * len, y: w0.y + fwd.y * len + upH.y * spread * -drop };
      const c = { x: w0.x + fwd.x * len * 0.5 - upH.x * 0.026 * spread, y: w0.y + fwd.y * len * 0.5 - upH.y * 0.026 * spread };
      out.fine.moveTo(w0.x + upH.x * spread * 0.014, w0.y + upH.y * spread * 0.014);
      out.fine.quadraticCurveTo(c.x, c.y, b.x, b.y);
    }
  }
  function fist(out, hand, bladeAng, size = 0.042) {
    const u = dir(bladeAng, 1);
    const c = { x: hand.x + u.x * 0.022, y: hand.y + u.y * 0.022 };
    blob(out.solid, c.x, c.y, size, size * 0.85);
    blob(out.holes, c.x - u.y * 0.012, c.y + u.x * 0.012, 0.011, 9e-3);
    taper(out.solid, { x: c.x - u.y * size * 0.5, y: c.y + u.x * size * 0.5 }, { x: c.x + u.x * size * 0.5 - u.y * size * 0.2, y: c.y + u.y * size * 0.5 + u.x * size * 0.2 }, 0.014, 0.012);
  }
  function sultan(sk, cat, out, hf) {
    const { chest, hip, perp, axis, handF, handB, bladeA, bladeB } = sk;
    taper(out.solid, off(hip, perp.x * 4e-3, perp.y * 4e-3), chest, 0.082, 0.098);
    const hemY = sk.footY - 0.095;
    const waistA = { x: hip.x + perp.x * 0.05, y: hip.y + perp.y * 0.05 };
    const waistB = { x: hip.x - perp.x * 0.055, y: hip.y - perp.y * 0.055 };
    const hemA = { x: hip.x + 0.145, y: hemY };
    const hemB = { x: hip.x - 0.155, y: hemY + 0.012 };
    const hem = cat.lag && cat.lag.hem ? cat.lag.hem : [];
    const hmA = hem[0] ? hem[0] : hemA, hmMid = hem[1] ? hem[1] : { x: hip.x, y: hemY + 0.03 }, hmB = hem[2] ? hem[2] : hemB;
    ell(out.solid, [waistB, { x: hip.x - 0.115, y: hip.y + 0.16 }, hmB, hmMid, hmA, { x: hip.x + 0.115, y: hip.y + 0.16 }, waistA]);
    taper(out.holes, { x: hip.x - 8e-3 + perp.x * 0.02, y: hip.y + 0.05 }, { x: hip.x - 0.03, y: hemY - 0.01 }, 8e-3, 8e-3);
    taper(out.holes, { x: hip.x + 0.05 + perp.x * 0.02, y: hip.y + 0.08 }, { x: hip.x + 0.06, y: hemY - 0.01 }, 7e-3, 7e-3);
    ell(out.gel, [
      { x: hip.x + perp.x * 0.02, y: hip.y + 0.02 },
      { x: hip.x + 0.1, y: hip.y + 0.18 },
      { x: hip.x + 0.075, y: hemY - 0.02 },
      { x: hip.x - 0.06, y: hemY - 0.01 },
      { x: hip.x - 0.08, y: hip.y + 0.18 },
      { x: hip.x - perp.x * 0.03, y: hip.y + 0.02 }
    ]);
    for (let i = -2; i <= 2; i++) {
      const cx = hip.x + i * 0.072, cy = hemY - 0.045 + Math.abs(i) * 8e-3;
      const pts = [];
      for (let k = 0; k < 8; k++) {
        const a2 = k / 8 * TAU2, r = k % 2 ? 7e-3 : 0.016;
        pts.push({ x: cx + Math.cos(a2) * r, y: cy + Math.sin(a2) * r });
      }
      poly(out.holes, pts);
    }
    for (let i = 0; i < 2; i++) blob(out.holes, hip.x - 0.012, hip.y + 0.1 + i * 0.055, 9e-3, 9e-3);
    taper(out.solid, { x: hip.x - 0.12, y: hip.y - 0.015 }, { x: hip.x + 0.115, y: hip.y - 0.03 }, 0.026, 0.026);
    blob(out.holes, hip.x + 0.02, hip.y - 0.022, 0.02, 7e-3, -0.2);
    const top = { x: sk.headC.x - hf.fwd.x * 0.048 + hf.upH.x * 0.02, y: sk.headC.y - hf.fwd.y * 0.048 + hf.upH.y * 0.02 };
    ring(out.solid, top.x, top.y, 0.116, 0.088, hf.a, 0.9);
    blob(out.solid, top.x - hf.fwd.x * 0.03 + hf.upH.x * 0.03, top.y - hf.fwd.y * 0.03 + hf.upH.y * 0.03, 0.082, 0.058, hf.a);
    {
      const bx = top.x + hf.upH.x * 0.045 + hf.fwd.x * 0.088, by = top.y + hf.upH.y * 0.045 + hf.fwd.y * 0.088;
      const p2 = new Path2D();
      p2.arc(bx, by, 0.019, 0, TAU2, false);
      p2.arc(bx + hf.fwd.x * 7e-3, by + hf.fwd.y * 7e-3, 0.018, 0, TAU2, true);
      out.holes.addPath(p2);
    }
    {
      const t = cat.lag && cat.lag.plume ? cat.lag.plume : null;
      const pts = t && t.length ? t : [{ x: sk.headC.x - hf.fwd.x * 0.05, y: sk.headC.y - hf.fwd.y * 0.05 + 0.01 }, { x: sk.headC.x - 0.12, y: sk.headC.y + 0.1 }, { x: sk.headC.x - 0.19, y: sk.headC.y + 0.19 }];
      const w = [0.055, 0.045, 0.03];
      for (let i = 0; i < pts.length - 1; i++) taper(out.solid, pts[i], pts[i + 1], w[i], w[i + 1]);
      for (let i = 1; i < pts.length; i++) blob(out.holes, pts[i].x, pts[i].y, 8e-3, 8e-3);
    }
    taper(out.solid, sk.shF, sk.elF, 0.045, 0.038);
    taper(out.solid, sk.elF, handF, 0.042, 0.05);
    blob(out.holes, (sk.elF.x + handF.x) / 2, (sk.elF.y + handF.y) / 2, 0.03, 6e-3);
    taper(out.solid, sk.shB, sk.elB, 0.042, 0.036);
    taper(out.solid, sk.elB, handB, 0.04, 0.046);
    bladeStrip(out, bladeA, bladeB, 0.13, 0.024, 0.0105);
    fist(out, handF, Math.atan2(bladeB.x - bladeA.x, bladeB.y - bladeA.y) * 180 / Math.PI, 0.046);
    const bc = { x: handB.x + perp.x * 0.02, y: handB.y - 0.01 };
    blob(out.solid, bc.x, bc.y, 0.072, 0.072, 0);
    ring(out.holes, bc.x, bc.y, 0.05, 0.042, 0);
    {
      const pts = [];
      for (let k = 0; k < 10; k++) {
        const a2 = k / 10 * TAU2 + 0.3, r = k % 2 ? 9e-3 : 0.022;
        pts.push({ x: bc.x + Math.cos(a2) * r, y: bc.y + Math.sin(a2) * r });
      }
      poly(out.holes, pts);
    }
    fist(out, handB, Math.atan2(bladeB.x - bladeA.x, bladeB.y - bladeA.y) * 180 / Math.PI, 0.04);
  }
  function gato(sk, cat, out, hf) {
    const { chest, hip, perp, axis, handF, handB, bladeA, bladeB } = sk;
    taper(out.solid, off(hip, perp.x * 4e-3, perp.y * 4e-3), chest, 0.086, 0.104);
    ell(out.gel, [
      { x: chest.x + perp.x * 0.06, y: chest.y + perp.y * 0.06 },
      { x: chest.x + perp.x * 0.11, y: chest.y + perp.y * 0.11 - 0.02 },
      { x: hip.x + perp.x * 0.09, y: hip.y + 0.02 },
      { x: hip.x - perp.x * 0.1, y: hip.y + 0.02 },
      { x: chest.x - perp.x * 0.11, y: chest.y + perp.y * 0.11 - 0.02 },
      { x: chest.x - perp.x * 0.06, y: chest.y + perp.y * 0.06 }
    ]);
    for (let i = 0; i < 2; i++) {
      const c = { x: hip.x + perp.x * (0.02 - i * 0.02), y: chest.y + perp.y * (0.02 - i * 0.02) + 0.1 + i * 0.07 };
      taper(out.holes, { x: c.x - perp.x * 0.05, y: c.y - perp.y * 0.05 }, { x: c.x + perp.x * 0.045, y: c.y + perp.y * 0.045 }, 5e-3, 5e-3);
    }
    for (let i = -1; i <= 1; i += 2) {
      const x0 = hip.x + i * 0.062;
      poly(out.solid, [{ x: x0 - 0.048, y: hip.y - 0.01 }, { x: x0 + 0.048, y: hip.y - 0.01 }, { x: x0 + 0.054, y: hip.y + 0.105 }, { x: x0 - 0.054, y: hip.y + 0.105 }]);
      blob(out.holes, x0, hip.y + 0.03, 0.012, 0.012);
      blob(out.holes, x0, hip.y + 0.072, 0.02, 6e-3);
    }
    {
      const nx = chest.x + axis.x * 0.055, ny = chest.y + axis.y * 0.055;
      const pts = [];
      const N = 16;
      for (let k = 0; k < N; k++) {
        const a2 = k / N * TAU2 - Math.PI * 0.5;
        const rr = k % 2 ? 0.072 : 0.088;
        pts.push({ x: nx + Math.cos(a2) * rr, y: ny + Math.sin(a2) * rr * 0.46 });
      }
      poly(out.solid, pts);
      blob(out.holes, nx, ny, 0.038, 0.024);
    }
    {
      const top = { x: sk.headC.x - hf.fwd.x * 0.03 + hf.upH.x * 0.014, y: sk.headC.y - hf.fwd.y * 0.03 + hf.upH.y * 0.014 };
      ell(out.solid, [
        { x: top.x + hf.upH.x * 4e-3 + hf.fwd.x * 0.07, y: top.y + hf.upH.y * 4e-3 + hf.fwd.y * 0.07 },
        { x: top.x + hf.upH.x * 0.03 + hf.fwd.x * 0, y: top.y + hf.upH.y * 0.03 + hf.fwd.y * 0 },
        { x: top.x + hf.upH.x * 0.032 - hf.fwd.x * 0.06, y: top.y + hf.upH.y * 0.032 - hf.fwd.y * 0.06 },
        { x: top.x + hf.upH.x * 0.01 - hf.fwd.x * 0.112, y: top.y + hf.upH.y * 0.01 - hf.fwd.y * 0.112 }
      ]);
      blob(out.solid, sk.headC.x - hf.fwd.x * 0.045 + hf.upH.x * -0.026, sk.headC.y - hf.fwd.y * 0.045 + hf.upH.y * -0.026, 0.112, 0.03, hf.a - 0.1);
      blob(out.solid, top.x + hf.upH.x * 0.01, top.y + hf.upH.y * 0.01, 0.1, 0.08, hf.a);
      const s = { x: sk.headC.x + hf.fwd.x * 0.05 + hf.upH.x * 5e-3, y: sk.headC.y + hf.fwd.y * 0.05 + hf.upH.y * 5e-3 };
      blob(out.holes, s.x, s.y, 0.03, 0.011, hf.a);
      for (let i = 0; i < 3; i++) blob(out.holes, s.x + hf.upH.x * (0.016 * (i - 1)), s.y + hf.upH.y * (0.016 * (i - 1)), 0.026, 45e-4, hf.a);
      const bt = cat.lag && cat.lag.plume ? cat.lag.plume : null;
      const pts = bt && bt.length ? bt : [
        { x: top.x + hf.upH.x * 0.1 - hf.fwd.x * 0.02, y: top.y + hf.upH.y * 0.1 - hf.fwd.y * 0.02 },
        { x: top.x - hf.fwd.x * 0.02 + hf.upH.x * 0.18, y: top.y - hf.fwd.y * 0.02 + hf.upH.y * 0.18 },
        { x: top.x - hf.fwd.x * 0.09 + hf.upH.x * 0.25, y: top.y - hf.fwd.y * 0.09 + hf.upH.y * 0.25 }
      ];
      const w = [0.045, 0.036, 0.022];
      for (let i = 0; i < pts.length - 1; i++) taper(out.solid, pts[i], pts[i + 1], w[i], w[i + 1]);
      for (let i = 1; i < pts.length; i++) blob(out.holes, pts[i].x, pts[i].y, 7e-3, 7e-3);
    }
    taper(out.solid, sk.shF, sk.elF, 0.046, 0.04);
    taper(out.solid, sk.elF, handF, 0.042, 0.044);
    taper(out.solid, sk.shB, sk.elB, 0.042, 0.036);
    taper(out.solid, sk.elB, handB, 0.038, 0.042);
    for (const [knee, foot, t] of [[sk.kneeF, sk.footF, 1], [sk.kneeB, sk.footB, 0]]) {
      taper(out.solid, knee, foot, 0.05, 0.036);
      blob(out.holes, (knee.x + foot.x) / 2, (knee.y + foot.y) / 2, 0.03, 6e-3);
    }
    {
      const dx = bladeB.x - bladeA.x, dy = bladeB.y - bladeA.y, len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len, ny = dx / len;
      const ux = dx / len, uy = dy / len;
      out.solid.moveTo(bladeA.x + nx * 0.011, bladeA.y + ny * 0.011);
      out.solid.lineTo(bladeB.x + nx * 3e-3, bladeB.y + ny * 3e-3);
      out.solid.lineTo(bladeB.x - nx * 3e-3, bladeB.y - ny * 3e-3);
      out.solid.lineTo(bladeA.x - nx * 0.011, bladeA.y - ny * 0.011);
      out.solid.closePath();
      out.holes.moveTo(bladeA.x + nx * 4e-3, bladeA.y + ny * 4e-3);
      out.holes.lineTo(bladeB.x, bladeB.y);
      out.holes.lineTo(bladeA.x - nx * 4e-3, bladeA.y - ny * 4e-3);
      out.holes.closePath();
      blob(out.solid, bladeA.x, bladeA.y, 0.03, 0.03);
      blob(out.holes, bladeA.x, bladeA.y, 0.014, 0.014);
      const b1 = { x: bladeA.x + nx * 0.05 - ux * 0.01, y: bladeA.y + ny * 0.05 - uy * 0.01 };
      const b2 = { x: bladeA.x + nx * 0.02 - ux * 0.075, y: bladeA.y + ny * 0.02 - uy * 0.075 };
      const b3 = { x: bladeA.x - nx * 0.04 - ux * 0.055, y: bladeA.y - ny * 0.04 - uy * 0.055 };
      taper(out.solid, b1, b2, 8e-3, 8e-3);
      taper(out.solid, b2, b3, 8e-3, 8e-3);
      fist(out, handF, Math.atan2(bladeB.x - bladeA.x, bladeB.y - bladeA.y) * 180 / Math.PI, 0.046);
    }
    fist(out, handB, Math.atan2(bladeB.x - bladeA.x, bladeB.y - bladeA.y) * 180 / Math.PI, 0.038);
  }
  function tail(sk, cat, out) {
    const pts = cat.lag && cat.lag.tail ? cat.lag.tail : sk.tail;
    const n = pts.length;
    for (let i = 0; i < n - 1; i++) {
      const r0 = 0.056 * (1 - i / n * 0.6), r1 = 0.056 * (1 - (i + 1) / n * 0.6);
      taper(out.solid, pts[i], pts[i + 1], r0, r1);
    }
    for (let i = 1; i < n; i += 2) blob(out.holes, pts[i].x, pts[i].y, 9e-3, 9e-3);
    blob(out.solid, pts[n - 1].x, pts[n - 1].y, 0.026, 0.026);
    blob(out.holes, pts[n - 1].x, pts[n - 1].y, 0.012, 0.012);
  }
  function rivets(sk, out) {
    const pts = [sk.shF, sk.elF, sk.shB, sk.elB, sk.kneeF, sk.kneeB, sk.chest];
    for (const p of pts) {
      blob(out.solid, p.x, p.y, 0.013, 0.013);
      blob(out.holes, p.x, p.y, 72e-4, 72e-4);
    }
  }
  function legs(sk, out, o) {
    for (const [hipJ, knee, foot, t] of [[sk.hip, sk.kneeF, sk.footF, 1], [sk.hip, sk.kneeB, sk.footB, 0]]) {
      taper(out.solid, { x: (hipJ.x + knee.x) / 2, y: (hipJ.y + knee.y) / 2 }, knee, 0.05, 0.044);
      if (o.bare) taper(out.solid, knee, foot, 0.042, 0.03);
    }
    for (const foot of [sk.footF, sk.footB]) {
      const cy = foot.y - 0.026;
      blob(out.solid, foot.x + 0.018, cy, 0.062, 0.03, 0);
      blob(out.holes, foot.x + 0.052, cy, 0.013, 9e-3);
      blob(out.holes, foot.x + 0.03, cy + 8e-3, 6e-3, 5e-3);
      blob(out.holes, foot.x + 8e-3, cy + 9e-3, 6e-3, 5e-3);
    }
    for (const foot of [sk.footF, sk.footB]) blob(out.holes, foot.x - 0.012, foot.y - 0.062, 7e-3, 7e-3);
  }
  function cuts(sk, out, hf) {
    const { fwd, upH } = hf;
    const R = L.headR;
    const mz = { x: sk.headC.x + fwd.x * 0.082 + upH.x * -0.014, y: sk.headC.y + fwd.y * 0.082 + upH.y * -0.014 };
    const P2 = (a, dx, dy) => ({ x: a.x + fwd.x * dx + upH.x * dy, y: a.y + fwd.y * dx + upH.y * dy });
    const j0 = P2(sk.headC, -0.075, -0.085), j1 = P2(sk.headC, 0.01, -0.078), j2 = P2(mz, 0.03, -0.038);
    taper(out.holes, j0, j1, 85e-4, 8e-3), taper(out.holes, j1, j2, 8e-3, 65e-4);
    const e0 = P2(sk.headC, 0.03, 0.024), e1 = P2(sk.headC, 0.07, 6e-3);
    taper(out.holes, e0, e1, 6e-3, 5e-3);
    for (const ang of [-108, -34]) {
      const bx = sk.headC.x + Math.sin(deg(ang)) * R * 0.7, by = sk.headC.y - Math.cos(deg(ang)) * R * 0.7;
      const px = Math.cos(deg(ang)), py = Math.sin(deg(ang));
      taper(out.holes, { x: bx - px * 0.05, y: by - py * 0.05 - 4e-3 }, { x: bx + px * 0.05, y: by + py * 0.05 - 4e-3 }, 75e-4, 75e-4);
    }
    const n0 = { x: sk.headBase.x - fwd.x * 0.03, y: sk.headBase.y - fwd.y * 0.03 + 0.012 };
    const n1 = { x: sk.chest.x + fwd.x * 0.045, y: sk.chest.y + fwd.y * 0.045 - 0.01 };
    taper(out.holes, n0, n1, 7e-3, 7e-3);
    for (const h of [sk.handF, sk.handB]) taper(out.holes, { x: h.x - upH.x * 0.03, y: h.y - upH.y * 0.03 }, { x: h.x + upH.x * 0.03, y: h.y + upH.y * 0.03 }, 7e-3, 7e-3);
    for (const f of [sk.footF, sk.footB]) {
      taper(out.holes, { x: f.x - 0.036, y: f.y - 0.052 }, { x: f.x + 0.036, y: f.y - 0.056 }, 75e-4, 75e-4);
    }
  }
  function buildPaths(cat, sk, out) {
    const hf = headFrame(sk);
    const o = { bare: cat.kind === "sultan" };
    legs(sk, out, o);
    tail(sk, cat, out);
    if (cat.kind === "sultan") sultan(sk, cat, out, hf);
    else gato(sk, cat, out, hf);
    const h = catHead(sk, out, o);
    rivets(sk, out);
    cuts(sk, out, hf);
    whiskers(out, h.w0, h.fwd, h.upH);
  }
  function restChains(sk, cat) {
    const hf = headFrame(sk);
    const { chest, hip, perp } = sk;
    const top = { x: sk.headC.x + hf.upH.x * 0.03, y: sk.headC.y + hf.upH.y * 0.03 };
    const hemY = sk.footY - 0.115;
    const out = { tail: sk.tail.map((p) => ({ x: p.x, y: p.y })) };
    if (cat.kind === "sultan") {
      out.plume = [
        { x: sk.headC.x - hf.fwd.x * 0.05, y: sk.headC.y - hf.fwd.y * 0.05 + 0.01 },
        { x: sk.headC.x - 0.12, y: sk.headC.y + 0.1 },
        { x: sk.headC.x - 0.19, y: sk.headC.y + 0.19 }
      ];
      out.hem = [
        { x: hip.x + 0.19, y: hemY },
        { x: hip.x, y: hemY + 0.03 },
        { x: hip.x - 0.2, y: hemY + 0.012 }
      ];
    } else {
      out.plume = [
        { x: top.x + hf.upH.x * 0.1 - hf.fwd.x * 0.02, y: top.y + hf.upH.y * 0.1 - hf.fwd.y * 0.02 },
        { x: top.x - hf.fwd.x * 0.02 + hf.upH.x * 0.18, y: top.y - hf.fwd.y * 0.02 + hf.upH.y * 0.18 },
        { x: top.x - hf.fwd.x * 0.09 + hf.upH.x * 0.25, y: top.y - hf.fwd.y * 0.09 + hf.upH.y * 0.25 }
      ];
      const tp = { x: chest.x - perp.x * 0.07, y: chest.y - perp.y * 0.07 - 0.02 };
      out.cape = null;
      out.hem = null;
    }
    return out;
  }
  function paintPuppet(ctx2, cat, sk, theme) {
    const out = { solid: new Path2D(), gel: new Path2D(), holes: new Path2D(), fine: new Path2D() };
    buildPaths(cat, sk, out);
    const S = cat.scale;
    const tr = (n) => {
      if (theme.trace) theme.trace(n, ctx2);
    };
    const lampA = 0.25 + 0.75 * cat.lamp;
    const rim = theme.rim[cat.side] || "#ffd9a0";
    ctx2.save();
    ctx2.shadowColor = "rgba(26,12,4,0.5)";
    ctx2.shadowBlur = S * 0.075;
    ctx2.fillStyle = "rgba(28,14,5,0.35)";
    ctx2.fill(out.solid);
    ctx2.restore();
    tr("penumbra");
    ctx2.save();
    ctx2.strokeStyle = rim;
    ctx2.globalAlpha = 0.16 + 0.34 * lampA;
    ctx2.lineWidth = 75e-4;
    ctx2.lineJoin = "round";
    ctx2.stroke(out.solid);
    ctx2.restore();
    tr("rim");
    ctx2.save();
    ctx2.fillStyle = theme.ink;
    ctx2.fill(out.solid);
    ctx2.restore();
    tr("ink");
    ctx2.save();
    ctx2.globalAlpha = 0.55;
    ctx2.fillStyle = theme.gel && theme.gel[cat.side] || rim;
    ctx2.fill(out.gel);
    ctx2.globalAlpha = 0.85;
    ctx2.strokeStyle = theme.ink;
    ctx2.lineWidth = 9e-3;
    ctx2.stroke(out.gel);
    ctx2.restore();
    tr("gel");
    ctx2.save();
    ctx2.globalCompositeOperation = "destination-out";
    ctx2.fill(out.holes);
    ctx2.globalAlpha = 0.75;
    ctx2.lineWidth = 6e-3;
    ctx2.stroke(out.holes);
    ctx2.restore();
    tr("holes");
    ctx2.save();
    ctx2.strokeStyle = theme.ink;
    ctx2.lineWidth = 75e-4;
    ctx2.lineCap = "round";
    ctx2.stroke(out.fine);
    ctx2.restore();
    return out;
  }

  // src/stage.js
  var THEME = {
    ink: "#160C06",
    surround: "#0A0705",
    wood: "#241812",
    woodLit: "#3A2517",
    woodDark: "#150D08",
    screenCore: "#FFEABE",
    screenMid: "#F0B75F",
    screenEdge: "#8B4F1D",
    gold: "#FFC24A",
    brass: "#C98A2E",
    lapis: "#3E6FB0",
    rim: { buy: "#8CF6B8", sell: "#FF9585" },
    gel: { buy: "#1C8C50", sell: "#B8352A" },
    buy: "#35D07F",
    sell: "#EF5350"
  };

  // tools/lab.js
  var POSES = [
    ["READY", 0.5],
    ["SIT_GUARD", 0.5],
    ["LUNGE", 0.5],
    ["THRUST", 0.46],
    ["SLASH_UP", 0.5],
    ["SLASH_SPIN", 0.52],
    ["RUSH", 0.52],
    ["FEINT", 0.42],
    ["TAUNT", 0.4],
    ["PARRY_BEAT", 0.5],
    ["PARRY_HOP", 0.4],
    ["BLADE_LOCK", 0.45],
    ["CLASH", 0.05],
    ["REEL", 0.2],
    ["RECOVER", 0.1],
    ["FLOURISH", 0.5]
  ];
  var canvas = document.getElementById("lab");
  var ctx = canvas.getContext("2d");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  function mkFighter(kind, side, facing, hue) {
    return { kind, side, facing, hue, scale: 260, lamp: 0.85, x: 0, y: 0, lag: {}, rnd: Math.random, canvas: null, cctx: null };
  }
  function paintAt(ctx2, f, name, t, S) {
    const pose = samplePose(name, t);
    const sk = skeleton(pose, f);
    f.scale = S;
    f.sk = sk;
    const rest = restChains(sk, f);
    for (const k of Object.keys(rest)) if (rest[k]) f.lag[k] = rest[k];
    const w = Math.ceil(2.1 * S), h = Math.ceil(1.62 * S);
    if (!f.canvas) {
      f.canvas = document.createElement("canvas");
      f.cctx = f.canvas.getContext("2d");
    }
    const cw = Math.ceil(w * dpr), ch = Math.ceil(h * dpr);
    if (f.canvas.width !== cw || f.canvas.height !== ch) {
      f.canvas.width = cw;
      f.canvas.height = ch;
    }
    const c = f.cctx;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.clearRect(0, 0, cw, ch);
    const ox = w * 0.5, oy = h * 0.6;
    c.setTransform(dpr * f.facing * S, 0, 0, dpr * S, ox * dpr, oy * dpr);
    paintPuppet(c, f, sk, THEME);
    c.setTransform(1, 0, 0, 1, 0, 0);
    ctx2.drawImage(f.canvas, 0, 0, cw, ch, -ox, -oy, w, h);
    return sk;
  }
  function draw() {
    const pad = 20;
    const heroS = 420;
    const cols = 8, cellW = 340, cellH = 300;
    const rows = Math.ceil(POSES.length / cols);
    const W = Math.max(1200, cols * cellW) + pad * 2;
    const H = 540 + rows * cellH + pad * 2;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const g = ctx.createRadialGradient(W * 0.5, H * 0.32, 0, W * 0.5, H * 0.32, Math.max(W, H) * 0.72);
    g.addColorStop(0, THEME.screenCore);
    g.addColorStop(0.42, THEME.screenMid);
    g.addColorStop(1, "#2A1508");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    const label = (txt, x, y, size = 15) => {
      ctx.fillStyle = "rgba(22,11,4,0.9)";
      ctx.font = `700 ${size}px "Martian Mono", monospace`;
      ctx.fillText(txt, x, y);
    };
    const heroPoses = ["READY", "LUNGE", "SLASH_UP", "BLADE_LOCK"];
    const HERO = [["gato", "sell", 1], ["sultan", "buy", -1]];
    HERO.forEach(([kind, side, facing], row) => {
      const f = mkFighter(kind, side, facing);
      label(kind.toUpperCase(), pad, 34 + row * 250);
      heroPoses.forEach((name, i) => {
        ctx.save();
        ctx.translate(pad + 190 + i * 290, 130 + row * 250 - 90 + heroS * 0.62);
        paintAt(ctx, f, name, 0.5, heroS);
        ctx.restore();
        label(name, pad + 90 + i * 290, 130 + row * 250 + 110, 13);
      });
    });
    ctx.save();
    ctx.translate(pad, 540);
    label("ALL POSES - left: Don Gato (SELL) / right: Sultan Bigotes (BUY)", 0, -14);
    POSES.forEach(([name, t], i) => {
      const cx = i % cols * cellW + cellW / 2;
      const cy = Math.floor(i / cols) * cellH + cellH * 0.72;
      const gA = mkFighter("gato", "sell", 1);
      const gB = mkFighter("sultan", "buy", -1);
      ctx.save();
      ctx.translate(cx - 72, cy);
      paintAt(ctx, gA, name, t, 190);
      ctx.restore();
      ctx.save();
      ctx.translate(cx + 72, cy + 6);
      paintAt(ctx, gB, name, t, 190);
      ctx.restore();
      label(name, i % cols * cellW + 8, Math.floor(i / cols) * cellH + 22, 13);
    });
    ctx.restore();
    document.title = "puppet lab ready";
  }
  function drawOne(str) {
    const [kind, pose, tt, ss] = str.split(":");
    const t = tt ? +tt : 0.5;
    const S = ss ? +ss : 520;
    const W = Math.round(S * 1.95), H = Math.round(S * 1.72);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const g = ctx.createRadialGradient(W * 0.5, H * 0.42, 0, W * 0.5, H * 0.42, Math.max(W, H) * 0.72);
    g.addColorStop(0, THEME.screenCore);
    g.addColorStop(0.45, THEME.screenMid);
    g.addColorStop(1, "#7A4418");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "rgba(60,30,10,0.10)";
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let y = 0; y < H; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }
    const f = mkFighter(kind, kind === "gato" ? "sell" : "buy", kind === "gato" ? 1 : -1);
    ctx.save();
    ctx.translate(W * (kind === "gato" ? 0.4 : 0.6), H * 0.7);
    paintAt(ctx, f, pose, t, S);
    ctx.restore();
    ctx.strokeStyle = "rgba(255,194,74,0.85)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, H * 0.7 + 0.352 * S);
    ctx.lineTo(W, H * 0.7 + 0.352 * S);
    ctx.stroke();
    document.title = "one:" + str;
  }
  var params = new URLSearchParams(location.search);
  if (params.get("one")) drawOne(params.get("one"));
  else draw();
})();
