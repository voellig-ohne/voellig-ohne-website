// taken from / inspired by https://github.com/scottnonnenberg/blog thanks!

import fs from 'fs';
import path from 'path';

import _ from 'lodash';
import frontMatter from 'front-matter';
import markdownIt from 'markdown-it';

const md = markdownIt({
    html: true,
    linkify: true,
    typographer: false,
});
const fileFilter = /.md$/;

export default function loadPosts(providedOptions) {
    const options = providedOptions || {};

    const limit = options.limit || Infinity;
    const markdown = typeof options.markdown === 'undefined' ? true : options.markdown;

    const postsPath = path.join(__dirname, '../../pages/neuigkeiten');
    const postFiles = fs.readdirSync(postsPath);

    return _.chain(postFiles)
        .map(file => {
            if (file.includes('.')) {
                return false;
            } else {
                return file + '/index.md';
            }
        })
        .filter(file => fileFilter.test(file))
        .sortBy()
        .reverse() // eslint-disable-line
        .take(limit)
        .map(file => {
            const filePath = path.join(postsPath, file);
            const contents = fs.readFileSync(filePath).toString();
            const metadata = frontMatter(contents);

            metadata.attributes.path =
                metadata.attributes.path ||
                filePath.replace(process.cwd(), '').replace('/index.md', '').replace('/pages', '');

            return {
                path: filePath,
                contents,
                body: markdown ? md.render(metadata.body) : null,
                data: metadata.attributes,
            };
        })
        .value();
}
