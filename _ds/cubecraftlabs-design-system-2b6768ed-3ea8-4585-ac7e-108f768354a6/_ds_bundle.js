/* @ds-bundle: {"format":4,"namespace":"CubeCraftLabsDesignSystem_2b6768","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CubeMark","sourcePath":"components/core/CubeMark.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"IconButton","sourcePath":"components/icons/IconButton.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Terminal","sourcePath":"components/surfaces/Terminal.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"50c45f49da35","components/core/Button.jsx":"087dcdc50d45","components/core/CubeMark.jsx":"7a96e1741919","components/core/Tag.jsx":"ea1e944a96a7","components/forms/Checkbox.jsx":"592838bb9779","components/forms/Field.jsx":"196f83876689","components/forms/Input.jsx":"26553d450868","components/forms/Radio.jsx":"716134d10b87","components/forms/Select.jsx":"69de0b5bcb27","components/forms/Switch.jsx":"a69c505754b7","components/forms/Textarea.jsx":"b3ed8158d293","components/icons/Icon.jsx":"b15d55d54fda","components/icons/IconButton.jsx":"d527f3ed7682","components/surfaces/Card.jsx":"9207500d3b6e","components/surfaces/Terminal.jsx":"30e901262a42"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CubeCraftLabsDesignSystem_2b6768 = window.CubeCraftLabsDesignSystem_2b6768 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status/label chip. Square, outlined, lowercase mono.
 * Tones: default (gold), success (green), error (red), muted (gray).
 */
function Badge({
  tone = "default",
  children,
  style,
  ...rest
}) {
  const tones = {
    default: {
      color: "var(--ccl-gold, #8f7ae0)",
      border: "var(--ccl-gold, #8f7ae0)"
    },
    success: {
      color: "var(--ccl-green, #98c379)",
      border: "var(--ccl-green, #98c379)"
    },
    error: {
      color: "var(--ccl-red, #e06c75)",
      border: "var(--ccl-red, #e06c75)"
    },
    muted: {
      color: "var(--ccl-text-muted, #6b6b6b)",
      border: "var(--ccl-border-2, #333333)"
    }
  };
  const t = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      fontSize: "11px",
      fontWeight: 500,
      letterSpacing: "0.06em",
      textTransform: "lowercase",
      padding: "2px 8px",
      borderRadius: 0,
      border: `1px solid ${t.border}`,
      color: t.color,
      background: "transparent",
      lineHeight: 1.4,
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — CubeCraftLabs action. Square corners, uppercase, mono, tracked.
 * Variants: primary (gold fill), secondary (gold outline), ghost (text only).
 */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: "6px 12px",
      fontSize: "11px"
    },
    md: {
      padding: "9px 18px",
      fontSize: "12px"
    },
    lg: {
      padding: "12px 24px",
      fontSize: "13px"
    }
  };
  const base = {
    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    borderRadius: 0,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "background var(--dur-fast,100ms) var(--ease-out), color var(--dur-fast,100ms) var(--ease-out), border-color var(--dur-fast,100ms) var(--ease-out)",
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: hover ? "var(--ccl-gold-dim, #7a63cc)" : "var(--ccl-gold, #8f7ae0)",
      color: "var(--ccl-ink, #2a2431)",
      border: "1.5px solid transparent"
    },
    secondary: {
      background: hover ? "rgba(143,122,224,0.12)" : "transparent",
      color: "var(--ccl-gold, #8f7ae0)",
      border: "1.5px solid var(--ccl-gold, #8f7ae0)"
    },
    ghost: {
      background: "transparent",
      color: hover ? "var(--ccl-gold, #8f7ae0)" : "var(--ccl-text, #d4d4d4)",
      border: "1.5px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...variants[variant],
      transform: active && !disabled ? "translateY(1px)" : "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CubeMark.jsx
try { (() => {
/**
 * CubeMark — the CubeCraftLabs isometric cube, rendered as an inline SVG.
 * One geometry, three renderings: wireframe (default), exploded (primary
 * brand mark), and grid (graph-paper stamp).
 */
function CubeMark({
  variant = "wireframe",
  size = 48,
  color = "#8f7ae0",
  strokeWidth,
  style,
  ...rest
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 200 200",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      display: "block",
      ...style
    },
    ...rest
  };
  if (variant === "exploded") {
    return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("polygon", {
      points: "100,26 144,51 100,76 56,51",
      fill: color,
      fillOpacity: "0.14",
      stroke: color,
      strokeWidth: strokeWidth ?? 2.4,
      strokeLinejoin: "miter"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "44,80 88,105 88,157 44,132",
      fill: color,
      fillOpacity: "0.05",
      stroke: color,
      strokeWidth: strokeWidth ?? 2.4,
      strokeLinejoin: "miter"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "156,80 112,105 112,157 156,132",
      fill: color,
      fillOpacity: "0.02",
      stroke: color,
      strokeWidth: strokeWidth ?? 2.4,
      strokeLinejoin: "miter"
    }), /*#__PURE__*/React.createElement("g", {
      stroke: color,
      strokeWidth: "1.2",
      strokeOpacity: "0.35",
      strokeDasharray: "3 4"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "100",
      y1: "76",
      x2: "100",
      y2: "100"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "88",
      y1: "105",
      x2: "97",
      y2: "100"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "112",
      y1: "105",
      x2: "103",
      y2: "100"
    })), /*#__PURE__*/React.createElement("g", {
      stroke: color,
      strokeWidth: "1",
      strokeOpacity: "0.22"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "100,82 117,91 100,100 83,91",
      fill: "none"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "83",
      y1: "91",
      x2: "83",
      y2: "110"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "117",
      y1: "91",
      x2: "117",
      y2: "110"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "100",
      y1: "100",
      x2: "100",
      y2: "119"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "83",
      y1: "110",
      x2: "100",
      y2: "119"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "117",
      y1: "110",
      x2: "100",
      y2: "119"
    })));
  }
  if (variant === "grid") {
    return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("g", {
      stroke: "#333333",
      strokeWidth: "0.7"
    }, [20, 52, 84, 116, 148, 180].map(y => /*#__PURE__*/React.createElement("line", {
      key: "h" + y,
      x1: "20",
      y1: y,
      x2: "180",
      y2: y
    })), [20, 52, 84, 116, 148, 180].map(x => /*#__PURE__*/React.createElement("line", {
      key: "v" + x,
      x1: x,
      y1: "20",
      x2: x,
      y2: "180"
    }))), /*#__PURE__*/React.createElement("g", {
      stroke: color,
      strokeWidth: "1",
      strokeOpacity: "0.55"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "100",
      y1: "10",
      x2: "100",
      y2: "26"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "100",
      y1: "174",
      x2: "100",
      y2: "190"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      y1: "100",
      x2: "26",
      y2: "100"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "174",
      y1: "100",
      x2: "190",
      y2: "100"
    })), /*#__PURE__*/React.createElement("polygon", {
      points: "100,48 144,73 100,98 56,73",
      fill: color,
      fillOpacity: "0.12"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "56,73 100,98 100,150 56,125",
      fill: color,
      fillOpacity: "0.05"
    }), /*#__PURE__*/React.createElement("g", {
      stroke: color,
      strokeWidth: strokeWidth ?? 2.4,
      strokeLinejoin: "miter"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "100,48 144,73 100,98 56,73",
      fill: "none"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "144",
      y1: "73",
      x2: "144",
      y2: "125"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "100",
      y1: "98",
      x2: "100",
      y2: "150"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "56",
      y1: "73",
      x2: "56",
      y2: "125"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "56",
      y1: "125",
      x2: "100",
      y2: "150"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "144",
      y1: "125",
      x2: "100",
      y2: "150"
    })));
  }

  // wireframe (default)
  return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("polygon", {
    points: "100,44 146,70 100,96 54,70",
    fill: color,
    fillOpacity: "0.10"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "54,70 100,96 100,150 54,124",
    fill: color,
    fillOpacity: "0.045"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "146,70 100,96 100,150 146,124",
    fill: color,
    fillOpacity: "0.02"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: color,
    strokeWidth: strokeWidth ?? 2.4,
    strokeLinejoin: "miter"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "100,44 146,70 100,96 54,70",
    fill: "none"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "146",
    y1: "70",
    x2: "146",
    y2: "124"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "100",
    y1: "96",
    x2: "100",
    y2: "150"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "54",
    y1: "70",
    x2: "54",
    y2: "124"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "54",
    y1: "124",
    x2: "100",
    y2: "150"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "146",
    y1: "124",
    x2: "100",
    y2: "150"
  })));
}
Object.assign(__ds_scope, { CubeMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CubeMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — lowercase content tag. Square, mono, hairline border. Optional leading
 * "#" and a removable "×". Distinct from Badge: Tag is user/content metadata
 * (categories, versions, filters); Badge is system status.
 */
function Tag({
  children,
  hash = false,
  onRemove,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      fontSize: "11px",
      fontWeight: 500,
      letterSpacing: "0.04em",
      textTransform: "lowercase",
      padding: "3px 8px",
      borderRadius: 0,
      border: `1px solid ${hover && onRemove ? "var(--ccl-gold, #8f7ae0)" : "var(--ccl-border-2, #333333)"}`,
      color: hover && onRemove ? "var(--ccl-gold, #8f7ae0)" : "var(--ccl-text, #d4d4d4)",
      background: "var(--ccl-charcoal-2, #202020)",
      lineHeight: 1.3,
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      transition: "color 100ms, border-color 100ms",
      ...style
    }
  }, rest), hash ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ccl-text-muted, #6b6b6b)"
    }
  }, "#") : null, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      all: "unset",
      cursor: "pointer",
      fontSize: "12px",
      lineHeight: 1,
      marginLeft: "1px",
      color: "inherit",
      opacity: 0.7
    }
  }, "\u2717") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — square (of course) box with a gold check when on. Custom-drawn so
 * it matches the brand exactly; wraps a hidden native input for a11y + forms.
 */
function Checkbox({
  checked,
  defaultChecked,
  disabled = false,
  label,
  onChange,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "9px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      fontSize: "13px",
      color: "var(--ccl-text, #d4d4d4)",
      userSelect: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle
  }, rest, {
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "16px",
      height: "16px",
      flex: "none",
      border: `1px solid ${on ? "var(--ccl-gold, #8f7ae0)" : "var(--ccl-border-2, #333333)"}`,
      background: on ? "var(--ccl-gold, #8f7ae0)" : "var(--ccl-charcoal-3, #262626)",
      color: "var(--ccl-ink, #2a2431)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: 1,
      transition: "background var(--dur-fast, 100ms), border-color var(--dur-fast, 100ms)"
    }
  }, on ? "\u2713" : ""), label != null ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field — form-row wrapper. An uppercase tracked label above the control, with
 * an optional hint and an error message that replaces the hint when present.
 * Wrap any Input/Textarea/Select/Checkbox group.
 */
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      ...style
    }
  }, rest), label != null ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      fontSize: "10px",
      fontWeight: 500,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--ccl-text-muted, #6b6b6b)",
      display: "inline-flex",
      gap: "5px"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ccl-gold, #8f7ae0)"
    }
  }, "*") : null) : null, children, error != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      fontSize: "11px",
      color: "var(--ccl-red, #e06c75)",
      letterSpacing: "0.02em"
    }
  }, error) : hint != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      fontSize: "11px",
      color: "var(--ccl-text-muted, #6b6b6b)",
      letterSpacing: "0.02em",
      lineHeight: 1.5
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field. Square, mono, charcoal-3 well with a
 * hairline border that turns gold on focus. Optional leading terminal
 * "prompt" glyph and an invalid (red) state.
 */
function Input({
  size = "md",
  invalid = false,
  disabled = false,
  prompt,
  type = "text",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    sm: {
      padding: "6px 10px",
      fontSize: "12px"
    },
    md: {
      padding: "9px 12px",
      fontSize: "13px"
    },
    lg: {
      padding: "12px 14px",
      fontSize: "14px"
    }
  };
  const borderColor = invalid ? "var(--ccl-red, #e06c75)" : focus ? "var(--ccl-gold, #8f7ae0)" : "var(--ccl-border-2, #333333)";
  const field = /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      fontWeight: 400,
      color: "var(--ccl-text, #d4d4d4)",
      background: "transparent",
      border: "none",
      outline: "none",
      width: "100%",
      letterSpacing: "0.01em",
      ...sizes[size],
      ...(prompt ? {
        paddingLeft: 0
      } : null),
      ...(disabled ? {
        cursor: "not-allowed"
      } : null)
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      background: "var(--ccl-charcoal-3, #262626)",
      border: `1px solid ${borderColor}`,
      borderRadius: 0,
      opacity: disabled ? 0.5 : 1,
      transition: "border-color var(--dur-fast, 100ms) var(--ease-out)",
      ...style
    }
  }, prompt ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      paddingLeft: sizes[size].padding.split(" ")[1],
      color: "var(--ccl-gold, #8f7ae0)",
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      fontSize: sizes[size].fontSize,
      fontWeight: 500,
      userSelect: "none"
    }
  }, prompt === true ? "$" : prompt) : null, field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Radio — a single radio option. On brand, it's a square with a smaller filled
 * gold square inside when selected (never a circle). Use inside RadioGroup or
 * wire `name`/`checked` yourself.
 */
function Radio({
  checked,
  defaultChecked,
  disabled = false,
  label,
  onChange,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const pick = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "9px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      fontSize: "13px",
      color: "var(--ccl-text, #d4d4d4)",
      userSelect: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    checked: on,
    disabled: disabled,
    onChange: pick
  }, rest, {
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "16px",
      height: "16px",
      flex: "none",
      border: `1px solid ${on ? "var(--ccl-gold, #8f7ae0)" : "var(--ccl-border-2, #333333)"}`,
      background: "var(--ccl-charcoal-3, #262626)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "border-color var(--dur-fast, 100ms)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "8px",
      height: "8px",
      background: on ? "var(--ccl-gold, #8f7ae0)" : "transparent",
      transition: "background var(--dur-fast, 100ms)"
    }
  })), label != null ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — native select styled to match the CubeCraftLabs well. Square,
 * mono, custom gold chevron, gold focus border.
 */
function Select({
  size = "md",
  invalid = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    sm: {
      padding: "6px 30px 6px 10px",
      fontSize: "12px"
    },
    md: {
      padding: "9px 32px 9px 12px",
      fontSize: "13px"
    },
    lg: {
      padding: "12px 36px 12px 14px",
      fontSize: "14px"
    }
  };
  const borderColor = invalid ? "var(--ccl-red, #e06c75)" : focus ? "var(--ccl-gold, #8f7ae0)" : "var(--ccl-border-2, #333333)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      fontWeight: 400,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      color: "var(--ccl-text, #d4d4d4)",
      background: "var(--ccl-charcoal-3, #262626)",
      border: `1px solid ${borderColor}`,
      borderRadius: 0,
      outline: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      width: "100%",
      transition: "border-color var(--dur-fast, 100ms) var(--ease-out)",
      ...sizes[size]
    }
  }), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "10px",
      color: "var(--ccl-gold, #8f7ae0)",
      fontSize: sizes[size].fontSize,
      pointerEvents: "none",
      lineHeight: 1
    }
  }, "\u203A"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — square toggle. A rectangular track with a square knob that slides
 * left→right and turns the track gold when on. Brand-square, no pill shapes.
 */
function Switch({
  checked,
  defaultChecked,
  disabled = false,
  label,
  onChange,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      fontSize: "13px",
      color: "var(--ccl-text, #d4d4d4)",
      userSelect: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: toggle
  }, rest, {
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: "34px",
      height: "18px",
      flex: "none",
      border: `1px solid ${on ? "var(--ccl-gold, #8f7ae0)" : "var(--ccl-border-2, #333333)"}`,
      background: on ? "rgba(143,122,224,0.22)" : "var(--ccl-charcoal-3, #262626)",
      transition: "background var(--dur-fast, 100ms), border-color var(--dur-fast, 100ms)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "2px",
      left: on ? "18px" : "2px",
      width: "12px",
      height: "12px",
      background: on ? "var(--ccl-gold, #8f7ae0)" : "var(--ccl-text-muted, #6b6b6b)",
      transition: "left var(--dur-base, 160ms) var(--ease-out), background var(--dur-fast, 100ms)"
    }
  })), label != null ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — multi-line text field. Same square/mono well as Input, with a
 * gold focus border. Vertical resize only.
 */
function Textarea({
  invalid = false,
  disabled = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = invalid ? "var(--ccl-red, #e06c75)" : focus ? "var(--ccl-gold, #8f7ae0)" : "var(--ccl-border-2, #333333)";
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: 1.6,
      color: "var(--ccl-text, #d4d4d4)",
      background: "var(--ccl-charcoal-3, #262626)",
      border: `1px solid ${borderColor}`,
      borderRadius: 0,
      outline: "none",
      padding: "10px 12px",
      width: "100%",
      resize: "vertical",
      opacity: disabled ? 0.5 : 1,
      transition: "border-color var(--dur-fast, 100ms) var(--ease-out)",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — CubeCraftLabs icon wrapper with TWO sets:
 *   set="lucide"   → stroke-based Lucide glyph (requires the Lucide CDN script
 *                    on the page; see prompt). Recolors to currentColor.
 *   set="terminal" → a monospace terminal glyph (functional CLI-style marks:
 *                    prompt, check, cross, chevron, …). No dependency.
 * The terminal set is the brand-signature set; lucide covers general UI chrome.
 */
const TERMINAL = {
  prompt: "$",
  chevron: "\u203A",
  // ›
  "chevron-right": "\u203A",
  caret: "\u25B8",
  // ▸
  check: "\u2713",
  // ✓
  cross: "\u2717",
  // ✗
  arrow: "\u2192",
  // →
  "arrow-left": "\u2190",
  "arrow-up": "\u2191",
  "arrow-down": "\u2193",
  branch: "\u2387",
  // ⎇
  dot: "\u2022",
  // •
  diamond: "\u25C6",
  // ◆
  star: "\u2726",
  // ✦
  ellipsis: "\u2026",
  // …
  box: "\u25A2",
  // ▢
  "box-filled": "\u25A0",
  // ■
  hash: "#",
  tilde: "~",
  plus: "+",
  minus: "\u2212",
  // −
  equals: "=",
  pipe: "|",
  slash: "/",
  cursor: "\u2588",
  // █
  spinner: "\u2237",
  // ∷
  warn: "\u26A0" // ⚠ (kept for status lines only)
};
function Icon({
  name,
  set = "lucide",
  size = 18,
  color = "currentColor",
  strokeWidth = 2,
  style,
  ...rest
}) {
  if (set === "terminal") {
    return /*#__PURE__*/React.createElement("span", _extends({
      "aria-hidden": "true",
      style: {
        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
        fontSize: typeof size === "number" ? size + "px" : size,
        lineHeight: 1,
        color,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 500,
        ...style
      }
    }, rest), TERMINAL[name] || name);
  }

  // lucide set
  const ref = React.useRef(null);
  React.useEffect(() => {
    let tries = 0;
    const render = () => {
      const el = ref.current;
      if (!el) return;
      if (window.lucide && window.lucide.createIcons) {
        el.innerHTML = "";
        const i = document.createElement("i");
        i.setAttribute("data-lucide", name);
        i.setAttribute("width", String(size));
        i.setAttribute("height", String(size));
        i.setAttribute("stroke-width", String(strokeWidth));
        el.appendChild(i);
        window.lucide.createIcons({
          nameAttr: "data-lucide"
        });
      } else if (tries++ < 40) {
        setTimeout(render, 75);
      }
    };
    render();
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: typeof size === "number" ? size + "px" : size,
      height: typeof size === "number" ? size + "px" : size,
      color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/icons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square, icon-only action. Same square/mono language as Button.
 * Variants: ghost (default, transparent), outline (gold border), solid (gold fill).
 */
function IconButton({
  name,
  set = "lucide",
  variant = "ghost",
  size = "md",
  disabled = false,
  label,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const boxes = {
    sm: 28,
    md: 34,
    lg: 40
  };
  const glyphs = {
    sm: 15,
    md: 18,
    lg: 20
  };
  const box = boxes[size] || boxes.md;
  const variants = {
    ghost: {
      background: hover ? "rgba(143,122,224,0.14)" : "transparent",
      color: hover ? "var(--ccl-gold, #8f7ae0)" : "var(--ccl-text, #d4d4d4)",
      border: "1px solid transparent"
    },
    outline: {
      background: hover ? "rgba(143,122,224,0.12)" : "transparent",
      color: "var(--ccl-gold, #8f7ae0)",
      border: "1px solid var(--ccl-gold, #8f7ae0)"
    },
    solid: {
      background: hover ? "var(--ccl-gold-dim, #7a63cc)" : "var(--ccl-gold, #8f7ae0)",
      color: "var(--ccl-ink, #2a2431)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label || name,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      width: box,
      height: box,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 0,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "background var(--dur-fast,100ms) var(--ease-out), color var(--dur-fast,100ms) var(--ease-out), border-color var(--dur-fast,100ms) var(--ease-out)",
      transform: active && !disabled ? "translateY(1px)" : "none",
      ...variants[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    set: set,
    size: glyphs[size] || glyphs.md,
    color: "currentColor"
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the base surface. A charcoal-2 panel with a hairline border (borders
 * do the work shadows would in a flat brand). Optional eyebrow + title header,
 * a gold accent rail on the top edge, and a footer.
 */
function Card({
  title,
  eyebrow,
  actions,
  footer,
  accent = false,
  padding = 20,
  children,
  style,
  ...rest
}) {
  const hasHeader = title != null || eyebrow != null || actions != null;
  const pad = typeof padding === "number" ? padding + "px" : padding;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--ccl-charcoal-2, #202020)",
      border: "1px solid var(--ccl-border, #2a2a2a)",
      borderTop: accent ? "2px solid var(--ccl-gold, #8f7ae0)" : "1px solid var(--ccl-border, #2a2a2a)",
      borderRadius: 0,
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      color: "var(--ccl-text, #d4d4d4)",
      ...style
    }
  }, rest), hasHeader ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      padding: `${pad} ${pad} 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, eyebrow != null ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "10px",
      fontWeight: 500,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--ccl-text-muted, #6b6b6b)",
      marginBottom: title != null ? "5px" : 0
    }
  }, eyebrow) : null, title != null ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "15px",
      fontWeight: 700,
      letterSpacing: "0.02em",
      color: "#fff",
      lineHeight: 1.25
    }
  }, title) : null), actions != null ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      display: "flex",
      gap: "8px"
    }
  }, actions) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad,
      flex: 1
    }
  }, children), footer != null ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${pad} ${pad}`,
      borderTop: "1px solid var(--ccl-border, #2a2a2a)",
      marginTop: "auto",
      paddingTop: pad,
      fontSize: "12px",
      color: "var(--ccl-text-muted, #6b6b6b)"
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Terminal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Terminal — a code / console block. A deep-charcoal window with a title bar
 * (three square "traffic dots" + a label), then monospace lines. Each line can
 * be a plain string or an object { text, prompt, tone } where tone ∈
 * out|muted|gold|green|red and prompt renders a leading "$".
 */
const TONES = {
  out: "var(--ccl-text, #d4d4d4)",
  muted: "var(--ccl-text-muted, #6b6b6b)",
  gold: "var(--ccl-gold, #8f7ae0)",
  green: "var(--ccl-green, #98c379)",
  red: "var(--ccl-red, #e06c75)"
};
function Terminal({
  title = "bash",
  lines,
  showDots = true,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--ccl-charcoal-3, #232327)",
      border: "1px solid var(--ccl-border-2, #4e4e57)",
      borderRadius: 0,
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 12px",
      borderBottom: "1px solid var(--ccl-border, #2a2a2a)",
      background: "var(--ccl-charcoal-2, #202020)"
    }
  }, showDots ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: "5px"
    }
  }, ["#6a6a72", "#6a6a72", "#8f7ae0"].map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: "9px",
      height: "9px",
      background: c,
      display: "block"
    }
  }))) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--ccl-text-muted, #6b6b6b)",
      marginLeft: showDots ? "4px" : 0
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 14px",
      fontSize: "12.5px",
      lineHeight: 1.7
    }
  }, lines ? lines.map((ln, i) => {
    const o = typeof ln === "string" ? {
      text: ln
    } : ln;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        color: TONES[o.tone] || TONES.out,
        whiteSpace: "pre-wrap",
        display: "flex",
        gap: "8px"
      }
    }, o.prompt ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ccl-gold, #8f7ae0)",
        userSelect: "none"
      }
    }, "$") : null, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, o.text));
  }) : children));
}
Object.assign(__ds_scope, { Terminal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Terminal.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CubeMark = __ds_scope.CubeMark;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Terminal = __ds_scope.Terminal;

})();
