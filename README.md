# THE ROPE DUEL - 2D (Shadow Cut)

Live BTC/USDT order flow performed on a lit shadow screen: two cut-leather cats duel on a rope
that **is the price line**, and two oil lamps (green = buy pressure, red = sell pressure) light
them from behind.

Built with zero dependencies: Canvas2D, a hand-authored skeleton rig, and a price-driven verlet rope.

- Live: https://rope-duel-2d.surge.sh
- GitHub Pages mirror: https://shojaee76-cmyk.github.io/rope-duel-2d/
- Source of truth: `C:\Users\capit\rope-duel-2d` (PROJECT.md has the full build + verification log)
- 3D sibling: https://shojaee76-cmyk.github.io/rope-duel/

The fight is decoration. The tape is real: prices come from a public exchange stream
(Binance, falling back to Bybit) and the page pulls nothing else - no CDN, no fonts, no trackers.
