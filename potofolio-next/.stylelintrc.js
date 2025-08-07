// .stylelintrc.js
module.exports = {
  extends: [
    "stylelint-config-standard",
    // kalau perlu: "stylelint-config-recommended-scss",
  ],
  rules: {
    // Izinkan at-rules milik Tailwind
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "custom-variant",
        ],
      },
    ],
  },
};
