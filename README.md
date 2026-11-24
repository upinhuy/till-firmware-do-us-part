# Till Firmware Do Us Part

[![make.fun](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)
[![rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/upinhuy/till-firmware-do-us-part/rank.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)
[![reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/upinhuy/till-firmware-do-us-part/reward.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)

One wedding vow a robot speaks at its own wedding — one sentence, under
200 characters, funny and heartfelt at the same time. An entry for the
[make.fun bounty "Till Firmware Do Us Part"](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929).

> I promise to love you in low battery and in full charge, through every update and every crash, till firmware do us part.

The vow borrows the shape of the classic wedding promise — "in sickness
and in health, till death do us part" — and replays it in machine terms:
low battery and full charge, updates and crashes, firmware instead of
death. The joke comes from the situation itself (a robot marrying), and
the tenderness sits underneath it: a promise to stay through every bad
state, not just the good ones.

## How it works

`main.ts` (Node 22, no dependencies) writes the vow to
`/output/entry.txt` and validates it first: 1–200 characters, exactly
one sentence, no leading or trailing whitespace.

```sh
node main.ts
cat /output/entry.txt
```

## Referral

Built with [make.fun](https://make.fun/r/hv9zk8y5) — join with my referral link: https://make.fun/r/hv9zk8y5

## License

MIT — see [LICENSE](LICENSE).
