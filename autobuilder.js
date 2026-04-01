#!/usr/bin/env node
/**
 * SIRVATO Autobuilder
 * Reads sirvato.config.json, converts Markdown sources to HTML,
 * injects into template.html, and writes output to /site/.
 *
 * No external dependencies — Node.js core only.
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ─── Paths ────────────────────────────────────────────────────────────────────

const ROOT       = path.resolve(__dirname);
const CONFIG     = path.join(ROOT, 'sirvato.config.json');
const TEMPLATE   = path.join(ROOT, 'template.html');
const STYLE_SRC  = path.join(ROOT, 'style.css');
const SITE_DIR   = path.join(ROOT, 'site');

// ─── Minimal Markdown → HTML converter ───────────────────────────────────────

function mdToHtml(md) {
  // Normalise line endings
  let src = md.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  const lines = src.split('\n');
  const out   = [];
  let i = 0;

  // Helpers
  function inlineFormat(text) {
    return text
      // Raw HTML pass-through (preserve existing tags like <span>, <div>, etc.)
      // Code spans
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Bold
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/__(.+?)__/g, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/_(.+?)_/g, '<em>$1</em>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  }

  function flushTable(rows) {
    const html  = ['<table>'];
    let isHead  = true;
    for (const row of rows) {
      // Skip separator rows (---|---)
      if (/^\|?[-: |]+\|?$/.test(row.trim())) { isHead = false; continue; }
      const cells = row.replace(/^\|/, '').replace(/\|$/, '').split('|');
      if (isHead) {
        html.push('<thead><tr>');
        cells.forEach(c => html.push(`<th>${inlineFormat(c.trim())}</th>`));
        html.push('</tr></thead><tbody>');
        isHead = false;
      } else {
        html.push('<tr>');
        cells.forEach(c => html.push(`<td>${inlineFormat(c.trim())}</td>`));
        html.push('</tr>');
      }
    }
    html.push('</tbody></table>');
    return html.join('');
  }

  while (i < lines.length) {
    const line = lines[i];

    // ── Blank line ──────────────────────────────────────────────────────────
    if (line.trim() === '') { i++; continue; }

    // ── Raw HTML block (pass through) ───────────────────────────────────────
    if (/^<[a-zA-Z]/.test(line.trim())) {
      const htmlBlock = [];
      while (i < lines.length && lines[i].trim() !== '') {
        htmlBlock.push(lines[i]);
        i++;
      }
      out.push(htmlBlock.join('\n'));
      continue;
    }

    // ── Horizontal rule ─────────────────────────────────────────────────────
    if (/^[-*_]{3,}$/.test(line.trim())) {
      out.push('<hr />');
      i++;
      continue;
    }

    // ── Headings ────────────────────────────────────────────────────────────
    const hMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (hMatch) {
      const level = hMatch[1].length;
      out.push(`<h${level}>${inlineFormat(hMatch[2])}</h${level}>`);
      i++;
      continue;
    }

    // ── Blockquote ──────────────────────────────────────────────────────────
    if (/^>\s/.test(line)) {
      const bqLines = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        bqLines.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }
      out.push(`<blockquote><p>${inlineFormat(bqLines.join(' '))}</p></blockquote>`);
      continue;
    }

    // ── Fenced code block ───────────────────────────────────────────────────
    if (/^```/.test(line)) {
      const codeLines = [];
      i++; // skip opening fence
      while (i < lines.length && !/^```/.test(lines[i])) {
        codeLines.push(
          lines[i]
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
        );
        i++;
      }
      i++; // skip closing fence
      out.push(`<pre><code>${codeLines.join('\n')}</code></pre>`);
      continue;
    }

    // ── Table ────────────────────────────────────────────────────────────────
    if (/^\|/.test(line)) {
      const tableRows = [];
      while (i < lines.length && /^\|/.test(lines[i])) {
        tableRows.push(lines[i]);
        i++;
      }
      out.push(flushTable(tableRows));
      continue;
    }

    // ── Unordered list ───────────────────────────────────────────────────────
    if (/^[-*+]\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^[-*+]\s/.test(lines[i])) {
        items.push(`<li>${inlineFormat(lines[i].replace(/^[-*+]\s/, ''))}</li>`);
        i++;
      }
      out.push(`<ul>${items.join('')}</ul>`);
      continue;
    }

    // ── Ordered list ─────────────────────────────────────────────────────────
    if (/^\d+\.\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(`<li>${inlineFormat(lines[i].replace(/^\d+\.\s/, ''))}</li>`);
        i++;
      }
      out.push(`<ol>${items.join('')}</ol>`);
      continue;
    }

    // ── Paragraph ────────────────────────────────────────────────────────────
    const paraLines = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^#{1,6}\s/.test(lines[i]) &&
      !/^[-*+]\s/.test(lines[i]) &&
      !/^\d+\.\s/.test(lines[i]) &&
      !/^>\s/.test(lines[i]) &&
      !/^```/.test(lines[i]) &&
      !/^\|/.test(lines[i]) &&
      !/^[-*_]{3,}$/.test(lines[i].trim()) &&
      !/^<[a-zA-Z]/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length) {
      out.push(`<p>${inlineFormat(paraLines.join(' '))}</p>`);
    }
  }

  return out.join('\n');
}

// ─── Build one page ───────────────────────────────────────────────────────────

function buildPage(page, template) {
  const srcPath = path.join(ROOT, page.source);

  if (!fs.existsSync(srcPath)) {
    console.error(`  [ERROR] Source not found: ${page.source}`);
    process.exitCode = 1;
    return;
  }

  const markdown = fs.readFileSync(srcPath, 'utf8');
  const content  = mdToHtml(markdown);

  const html = template
    .replace(/\{\{TITLE\}\}/g,   page.title)
    .replace(/\{\{CONTENT\}\}/g, content);

  const outPath = path.join(SITE_DIR, page.output);
  fs.writeFileSync(outPath, html, 'utf8');
  console.log(`  [OK]    ${page.output}`);
}

// ─── Validate generated site ──────────────────────────────────────────────────

function validate(config) {
  let ok = true;

  for (const page of config.pages) {
    const outPath = path.join(SITE_DIR, page.output);

    if (!fs.existsSync(outPath)) {
      console.error(`  [FAIL]  Missing output: ${page.output}`);
      ok = false;
      continue;
    }

    const html = fs.readFileSync(outPath, 'utf8');

    // Check for unresolved placeholders
    if (/\{\{[A-Z]+\}\}/.test(html)) {
      console.error(`  [FAIL]  Unresolved placeholder in: ${page.output}`);
      ok = false;
    }

    // Check that <title> is present
    if (!html.includes('<title>')) {
      console.error(`  [FAIL]  Missing <title> in: ${page.output}`);
      ok = false;
    }

    // Check stylesheet link is present
    if (!html.includes('style.css')) {
      console.error(`  [FAIL]  Missing stylesheet in: ${page.output}`);
      ok = false;
    }
  }

  return ok;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function build() {
  console.log('\nSIRVATO Autobuilder — starting build\n');

  // Read config
  if (!fs.existsSync(CONFIG)) {
    console.error('[FATAL] sirvato.config.json not found.');
    process.exit(1);
  }
  const config = JSON.parse(fs.readFileSync(CONFIG, 'utf8'));

  // Read template
  if (!fs.existsSync(TEMPLATE)) {
    console.error('[FATAL] template.html not found.');
    process.exit(1);
  }
  const template = fs.readFileSync(TEMPLATE, 'utf8');

  // Ensure /site directory exists
  if (!fs.existsSync(SITE_DIR)) {
    fs.mkdirSync(SITE_DIR, { recursive: true });
  }

  // Build each page
  console.log('Building pages:');
  for (const page of config.pages) {
    buildPage(page, template);
  }

  // Copy stylesheet into /site/ so pages are self-contained
  const styleDest = path.join(SITE_DIR, 'style.css');
  fs.copyFileSync(STYLE_SRC, styleDest);
  console.log('  [OK]    style.css (copied to site/)');

  // Validate
  console.log('\nValidating output:');
  const valid = validate(config);

  if (valid) {
    console.log('\n✓ Build complete. All pages valid.\n');
  } else {
    console.error('\n✗ Build finished with errors.\n');
    process.exitCode = 1;
  }
}

// ─── Watch mode ───────────────────────────────────────────────────────────────

function watch() {
  build();

  const watchTargets = [
    path.join(ROOT, 'content'),
    CONFIG,
    TEMPLATE,
    path.join(ROOT, 'style.css'),
  ];

  console.log('Watching for changes... (Ctrl+C to stop)\n');

  watchTargets.forEach(target => {
    const isDir = fs.existsSync(target) && fs.statSync(target).isDirectory();
    if (isDir) {
      fs.watch(target, { recursive: true }, (event, filename) => {
        if (filename) {
          console.log(`Change detected: ${filename}`);
          build();
        }
      });
    } else if (fs.existsSync(target)) {
      fs.watch(target, () => {
        console.log(`Change detected: ${path.basename(target)}`);
        build();
      });
    }
  });
}

// ─── Entry point ─────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
if (args.includes('--watch') || args.includes('-w')) {
  watch();
} else {
  build();
}
