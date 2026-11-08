/* Neon Pac-Man: original Adsterra tags, menu-only.
 * One ad request per initial page load, approved hostname only.
 * Opt-in from existing Apps & Games shared 5-language consent.
 * Return to menu reuses the existing banner; never refresh automatically.
 * Parser-time document.write preserves the supplied GET CODE, subject to
 * outstanding provider confirmation of this integration technique.
 */
(() => {
  "use strict";
  if (location.hostname !== "neonpacman.appsandgames.org") return;
  if (document.readyState !== "loading") return;
  if (navigator.onLine === false) return;
  const current = document.currentScript;
  const slot = current?.parentElement;
  const area = slot?.parentElement;
  if (!slot?.classList.contains("neon-ad-unit") ||
      !area?.classList.contains("neon-ad-area")) return;
  if (document.getElementById("menuScreen")?.classList.contains("hidden")) return;
  if (!matchMedia("(min-width: 320px)").matches) return;
  const desktop = matchMedia("(min-width: 800px)").matches;
  const unit = current.dataset.unit;
  if ((desktop && unit !== "desktop") || (!desktop && unit !== "mobile")) return;
  let allowed = false;
  try {
    const entry = document.cookie.split(";").map(v => v.trim())
      .find(v => v.startsWith("ag_privacy_choices_v1="));
    const data = entry && JSON.parse(decodeURIComponent(
      entry.slice("ag_privacy_choices_v1=".length)));
    const age = data && Date.now() - data.timestamp;
    allowed = !!data && data.version === 1 &&
      data.partnerRevision === "adsterra-2026-11" &&
      data.advertising === true && Number.isFinite(age) &&
      age >= 0 && age <= 180 * 24 * 60 * 60 * 1000;
  } catch (_) { allowed = false; }
  if (!allowed) return;
  const tags = {
    desktop: "<script>\n  atOptions = {\n    'key' : 'b3df95268fdef0632bbc80d86a931c38',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/b3df95268fdef0632bbc80d86a931c38\"></script>",
    mobile: "<script>\n  atOptions = {\n    'key' : 'dfa154b5f44e15abb985887aab7207f5',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/dfa154b5f44e15abb985887aab7207f5\"></script>"
  };
  area.hidden = false;
  slot.hidden = false;
  const label = document.createElement("span");
  label.className = "neon-ad-label";
  label.textContent = "Advertisement";
  slot.insertBefore(label, current);
  document.write(tags[unit]);
})();
