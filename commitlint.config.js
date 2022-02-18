
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [0, "always", 1000],
    "body-max-line-length": [0, "always", 1000],
    "footer-max-line-length": [0, "always", 2000],
    "type-enum": [
      2,
      "always",
      [
        "release",
        "wip",
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "merge"
      ]
    ]
  }
};
