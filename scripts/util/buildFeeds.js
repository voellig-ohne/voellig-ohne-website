// taken from / inspired by https://github.com/scottnonnenberg/blog thanks!

import fs from 'fs';
import path from 'path';

import Feed from 'feed';
import _ from 'lodash';
import moment from 'moment';
import toml from 'toml';

const configPath = path.join(__dirname, '../../config.toml');

export default function buildFeeds(posts) {
    const config = toml.parse(fs.readFileSync(configPath).toString());
    const now = moment(new Date());

    const author = {
        name: config.authorName,
        email: config.authorEmail,
        link: config.authorURL,
    };

    const feed = new Feed({
        title: config.siteTitle,
        id: `${config.domain}/`,
        description: config.description,
        link: config.domain,
        copyright: `All rights reserved ${now.format('YYYY')}, Völlig Ohne`,
        updated: now.toJSON(),
        feed: `${config.domain}/atom.xml`,
        author,
    });

    _.forEach(posts, post => {
        const data = post.data;
        const url = config.domain + data.path;

        feed.addItem({
            title: data.title,
            link: url,
            content: post.body,
            date: data.date,
            author: [author],
        });
    });

    fs.writeFileSync('public/rss.xml', feed.render('rss-2.0'));
    fs.writeFileSync('public/atom.xml', feed.render('atom-1.0'));
}
