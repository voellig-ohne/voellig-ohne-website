export default function({ source, location }) {
    const path = location.substr(1);
    return require('!file!scale?size=1800!../.././pages/' + path + source + '.jpg');
}
