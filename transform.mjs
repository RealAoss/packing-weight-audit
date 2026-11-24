function fail(message) {
    throw new Error(message);
}
const lines = text => text.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
export function transform(s) {
    if (!s.trim()) fail('Enter some source text.');
    const [limit, ...items] = lines(s);
    if (!(Number(limit) > 0) || !items.length) fail('Enter a positive limit and some items');
    let sum = 0;
    const out = items.map(l => {
        const [name, n, w, ...rest] = l.split('|').map(x => x.trim());
        if (!name || rest.length || !Number.isInteger(+n) || +n <= 0 || !w || !Number.isFinite(+w) || +w < 0) fail('Use item | count | kg');
        sum += n * w;
        return name + ': ' + (n * w).toFixed(2) + ' kg'
    });
    out.push('Total: ' + sum.toFixed(2) + ' kg', 'Remaining: ' + (Number(limit) - sum).toFixed(2) + ' kg');
    return out.join('\n')
}
