const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /#005344/gi, replace: '#0A3D91' },
  { regex: /#003d30/gi, replace: '#062763' },
  { regex: /#85f6e5/gi, replace: '#F57C00' },
  { regex: /#96ebd5/gi, replace: '#FF9800' },
  { regex: /#009688/gi, replace: '#F57C00' },
  { regex: /#006d5b/gi, replace: '#09347A' },
  { regex: /rgba\(0,\s*83,\s*68/gi, replace: 'rgba(10, 61, 145' },
  { regex: /rgba\(133,\s*246,\s*229/gi, replace: 'rgba(245, 124, 0' },
  { regex: /rgba\(157,\s*243,\s*220/gi, replace: 'rgba(255, 152, 0' },
  { regex: /#EBEFEC/gi, replace: '#F0F4F8' },
  { regex: /#F2F9F8/gi, replace: '#F4F6F9' },
  { regex: /#E5E9E6/gi, replace: '#E2E8F0' },
];

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walkDir('./src').filter(f => f.endsWith('.css') || f.endsWith('.js') || f.endsWith('.jsx'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  replacements.forEach(({ regex, replace }) => {
    if (regex.test(content)) {
      content = content.replace(regex, replace);
      changed = true;
    }
  });
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated: ' + file);
  }
});
