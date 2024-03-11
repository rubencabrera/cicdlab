
module.exports = {
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "master",
    "next",
    "next-major",
    {
      name: "beta",
      prerelease: true,
    },
    {
      name: "alpha",
      prerelease: true,
    },
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        "parserOpts": {
          "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
        },
        "releaseRules": [
          {
            "type": "chore",
            "scope": "deps",
            "release": "patch"
          },
        ]
      }
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};
