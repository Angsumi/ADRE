/**
 * Lightweight custom Markdown-to-HTML parser tailored for ADRE & AxomRank articles.
 * Converts markdown headers, tables, blockquotes, lists, bold/italics, and internal links.
 */

export function renderMarkdownToHtml(markdown: string): string {
  if (!markdown) return '';

  let text = markdown;

  // Strip metadata header block (lines starting with > **Meta title..., etc.)
  text = text.replace(/^>\s*\*\*Meta title[\s\S]*?---\n/m, '');
  text = text.replace(/^#\s+.+$/m, ''); // Strip main H1 as page renders it in hero banner

  // Convert links to relative paths with /ADRE subpath prefix if needed
  text = text.replace(/https?:\/\/(?:axomrank\.com|Angsumi\.github\.io\/ADRE)(\/[^\s\)\"]*)/gi, (match, path) => {
    let p = path.replace(/\/+/g, '/');
    if (!p.startsWith('/ADRE')) {
      p = '/ADRE' + p;
    }
    return p;
  });

  const lines = text.split('\n');
  const htmlLines: string[] = [];
  let inTable = false;
  let tableHeaderProcessed = false;
  let tableRows: string[] = [];
  let inList = false;
  let listType: 'ul' | 'ol' | null = null;

  const closeList = () => {
    if (inList && listType) {
      htmlLines.push(`</${listType}>`);
      inList = false;
      listType = null;
    }
  };

  const closeTable = () => {
    if (inTable) {
      htmlLines.push('<div class="overflow-x-auto my-6"><table class="w-full text-left text-xs sm:text-sm border-collapse bg-[#F3EDE2] rounded-2xl overflow-hidden border border-[#E5DAC8]">');
      htmlLines.push(tableRows.join(''));
      htmlLines.push('</table></div>');
      inTable = false;
      tableHeaderProcessed = false;
      tableRows = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Table processing
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      closeList();
      if (!inTable) {
        inTable = true;
      }

      // Skip separator row e.g. | --- | --- |
      if (line.includes('---')) {
        tableHeaderProcessed = true;
        continue;
      }

      const cells = line.split('|').slice(1, -1).map((c) => parseInlineMarkdown(c.trim()));
      if (!tableHeaderProcessed && tableRows.length === 0) {
        tableRows.push('<thead class="bg-[#E5DAC8]/70 text-[#1D1814] font-mono font-bold uppercase"><tr>');
        cells.forEach((cell) => tableRows.push(`<th class="p-3 border-b border-[#E5DAC8]">${cell}</th>`));
        tableRows.push('</tr></thead><tbody>');
      } else {
        tableRows.push('<tr class="hover:bg-[#EBE2D4]/60 transition-colors">');
        cells.forEach((cell) => tableRows.push(`<td class="p-3 border-b border-[#E5DAC8]/60 text-[#1D1814]">${cell}</td>`));
        tableRows.push('</tr>');
      }
      continue;
    } else if (inTable) {
      tableRows.push('</tbody>');
      closeTable();
    }

    // Headings
    if (line.startsWith('#### ')) {
      closeList();
      htmlLines.push(`<h4 class="text-base font-bold text-[#1D1814] mt-6 mb-2">${parseInlineMarkdown(line.slice(5))}</h4>`);
      continue;
    }
    if (line.startsWith('### ')) {
      closeList();
      htmlLines.push(`<h3 class="text-lg sm:text-xl font-bold text-[#1D1814] mt-8 mb-3 pb-1 border-b border-[#E5DAC8]">${parseInlineMarkdown(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith('## ')) {
      closeList();
      htmlLines.push(`<h2 class="text-xl sm:text-2xl font-extrabold text-[#1D1814] mt-10 mb-4 pb-2 border-b-2 border-[#9E3A26]/30">${parseInlineMarkdown(line.slice(3))}</h2>`);
      continue;
    }

    // Blockquotes / Callouts
    if (line.startsWith('> ')) {
      closeList();
      htmlLines.push(`<blockquote class="p-4 my-4 rounded-2xl bg-[#9E3A26]/10 border-l-4 border-[#9E3A26] text-[#1D1814] text-xs sm:text-sm italic font-medium leading-relaxed">${parseInlineMarkdown(line.slice(2))}</blockquote>`);
      continue;
    }

    // Lists
    const ulMatch = line.match(/^[\*\-]\s+(.+)/);
    if (ulMatch) {
      if (!inList || listType !== 'ul') {
        closeList();
        inList = true;
        listType = 'ul';
        htmlLines.push('<ul class="list-disc pl-6 my-4 space-y-2 text-xs sm:text-sm text-[#2C241E] leading-relaxed font-medium">');
      }
      htmlLines.push(`<li>${parseInlineMarkdown(ulMatch[1])}</li>`);
      continue;
    }

    const olMatch = line.match(/^\d+\.\s+(.+)/);
    if (olMatch) {
      if (!inList || listType !== 'ol') {
        closeList();
        inList = true;
        listType = 'ol';
        htmlLines.push('<ol class="list-decimal pl-6 my-4 space-y-2 text-xs sm:text-sm text-[#2C241E] leading-relaxed font-medium">');
      }
      htmlLines.push(`<li>${parseInlineMarkdown(olMatch[1])}</li>`);
      continue;
    }

    closeList();

    // Blank lines
    if (!line.trim()) {
      continue;
    }

    // Standard Paragraphs
    htmlLines.push(`<p class="my-3 text-xs sm:text-sm sm:text-base text-[#2C241E] leading-relaxed font-medium">${parseInlineMarkdown(line.trim())}</p>`);
  }

  closeList();
  closeTable();

  return htmlLines.join('\n');
}

function parseInlineMarkdown(text: string): string {
  return text
    // Bold + Italic
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#1D1814]">$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    // Inline code
    .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded bg-[#EBE2D4] font-mono text-xs font-bold text-[#9E3A26]">$1</code>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, (match, label, href) => {
      let cleanHref = href.trim();
      // Ensure relative link uses /ADRE prefix for GitHub pages if needed
      if (cleanHref.startsWith('https://Angsumi.github.io/ADRE')) {
        cleanHref = cleanHref.replace('https://Angsumi.github.io/ADRE', '/ADRE');
      } else if (cleanHref.startsWith('/') && !cleanHref.startsWith('/ADRE')) {
        cleanHref = '/ADRE' + cleanHref;
      }
      return `<a href="${cleanHref}" class="text-[#9E3A26] font-bold underline hover:text-[#7D5618] transition-colors">${label}</a>`;
    });
}
