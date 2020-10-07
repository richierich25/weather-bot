# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).

Some thoughts to help you contribute to this project

## Recommended Communication Style

1. Always leave screenshots for visuals changes
1. Always leave a detailed description in the Pull Request. Leave nothing ambiguous for the reviewer.
1. Always review your code first. Do this by leaving comments in your coding noting questions, or interesting things for the reviewer.
1. Always communicate. Whether it is in the issue or the pull request, keeping the lines of communication helps everyone around you.

## Setup (forks are preferred)

```sh
$ git clone https://github.com/<your-name>/weather-bot
$ cd weather-bot
$ npm install
```

## Building

```sh
$ npm run build
```

## Testing

```sh
# the tests will run in watch mode by default
$ npm run test
```

## Pull Requests

### _We actively welcome your pull requests, however linking your work to an existing issue is preferred._

1. Fork the repo and create your branch from `main`.
1. Name your branch something that is descriptive to the work you are doing. i.e. adds-new-thing or fixes-mobile
1. If you've added code that should be tested, add tests.
1. If you've changed APIs, update the documentation.
1. If you make visual changes, screenshots are required.
1. Ensure the test suite passes.
1. Make sure you address any lint warnings.
1. If you make the existing code better, please let us know in your PR description.
1. A PR description and title are required.
1. [Link to an issue](https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls) in the project. Unsolicited code is welcomed, but an issue is the best place to announce your intentions to work on things.

*note for maintainers: All pull requests need a label to assist automation. See the [template](https://github.com/open-sauced/open-sauced/blob/HEAD/.github/release-drafter.yml) to guide which labels to use.*

## Issues

If you plan to contribute a change based on an open issue, please assign yourself by commenting on the following word `.take`. Issues that are not assigned are assumed open, and to avoid conflicts, please assign yourself before beginning work on any issues.

If you would like to contribute to the project for the first time, please consider joining checking the [bug](https://github.com/richierich25/weather-bot/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%90%9B+bug%22) or [good first issue](https://github.com/richierich25/weather-bot/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) labels.

Also, all questions are welcomed.

## Community

Got Questions? Join the conversation in our [Discord](https://discord.gg/sMpeWr).

## Coding Tips

- Ask questions if you are stuck.
- Always use [rel="noreferrer" on all target="_blank" links](https://web.dev/external-anchors-use-rel-noopener/).

## License

By contributing to the Open Sauced project, you agree that your contributions will be licensed
under its [GPL-3.0 License](LICENSE).
