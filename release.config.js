require('dotenv').config()

thisBranch = process.env.GITHUB_REF_NAME  // testing
module.exports = {
  branches: [
    {
      name: "9.0",
      range: "1.x",
      channel: "1.x",
    },
    "+([0-9])?.([0-1])",
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
  tagFormat: "${thisBranch}.${version}",
};
