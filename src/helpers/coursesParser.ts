import cheerio from 'cheerio';

export default function Parse(text: string) {
    const $ = cheerio.load(text);
    const table = $('table .edication-plan > tbody');

}