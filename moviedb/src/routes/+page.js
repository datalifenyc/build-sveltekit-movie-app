/** @type {import('./$types').PageLoad} */
export function load({ data }) {
    return {
      a: data.a, 
      b: data.a * 2
    };
}