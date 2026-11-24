# Packing Weight Audit

Compare packed items and quantities against a baggage weight allowance.

## Run

Use Node.js 20+. Run `node cli.mjs example.txt`, or pipe UTF-8 text into `node cli.mjs -`. Redirect stdout to keep the result. Other Node.js projects can import `transform` from `./transform.mjs`.

## Example

First line: kg limit. Following lines: item | quantity | kg each. The bundled sample produces output including:

```text
Remaining: 3.00 kg
```

## Limitations

Input is processed in memory. Use the format shown in the example file.

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md) for checks and [CHANGELOG.md](CHANGELOG.md) for changes.

## License

[MIT License](LICENSE). Copyright (c) 2026 packing-weight-audit contributors.
