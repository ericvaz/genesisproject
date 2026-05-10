const genesisStories = window.GENESIS_STORY_BRANCHES || {};
const genesisChapterFamilies = window.GENESIS_CHAPTER_FAMILIES || {};
const genesisPeople = window.GENESIS_PEOPLE || {};

const storyOrder = ['beginning','fall','noah','babel','abraham','isaac','jacob','joseph'];
const storyRanges = {
  beginning: { start: 1, end: 2 },
  fall: { start: 3, end: 5 },
  noah: { start: 6, end: 9 },
  babel: { start: 10, end: 11 },
  abraham: { start: 12, end: 25 },
  isaac: { start: 21, end: 27 },
  jacob: { start: 25, end: 36 },
  joseph: { start: 37, end: 50 }
};

const STORY_ROOM_DATA = {
  beginning: {
    heading: 'Creation and the beginning of humanity',
    intro: 'Use this room to watch overview material, read the opening passage, and reflect on the first movement of Genesis.',
    film: {
      text: 'Open a film search focused on Genesis 1 and creation scenes.',
      url: 'https://www.youtube.com/results?search_query=Genesis+1+creation+movie'
    },
    study: {
      text: 'BibleProject overview for Genesis 1–11.',
      url: 'https://bibleproject.com/explore/video/genesis-1-11/'
    },
    scripture: {
      ref: 'Genesis 1–2',
      text: 'Read the creation narrative, the garden, and the making of Adam and Eve.',
      url: 'https://www.biblegateway.com/passage/?search=Genesis%201-2&version=KJV'
    },
    map: {
      text: 'Context for Eden and the rivers named in Genesis.',
      url: 'https://en.wikipedia.org/wiki/Garden_of_Eden'
    },
    prompts: {
      title: 'Reflect on the beginning',
      items: [
        'What does creation reveal about order, goodness, and purpose?',
        'Why is humanity placed in a garden with both freedom and responsibility?',
        'How do Genesis 1 and Genesis 2 complement each other?'
      ]
    }
  },
  fall: {
    heading: 'Temptation, exile, and the first family',
    intro: 'This room gathers the fall narrative and the first generations after Eden.',
    film: {
      text: 'Open a film search focused on Genesis 3–4 and the expulsion from Eden.',
      url: 'https://www.youtube.com/results?search_query=Genesis+3+4+fall+of+man+movie'
    },
    study: {
      text: 'BibleProject overview for Genesis 1–11, including the fall and Cain and Abel.',
      url: 'https://bibleproject.com/explore/video/genesis-1-11/'
    },
    scripture: {
      ref: 'Genesis 3–5',
      text: 'Read the temptation, the curse, Cain and Abel, and the line through Seth.',
      url: 'https://www.biblegateway.com/passage/?search=Genesis%203-5&version=KJV'
    },
    map: {
      text: 'Background reading on Eden and the eastward movement after exile.',
      url: 'https://en.wikipedia.org/wiki/Garden_of_Eden'
    },
    prompts: {
      title: 'Reflect on the fall',
      items: [
        'How does Genesis describe the movement from innocence to alienation?',
        'What patterns of sin and consequence appear in Cain’s story?',
        'Why is Seth’s line important for the later story?'
      ]
    }
  },
  noah: {
    heading: 'The flood and the covenant with Noah',
    intro: 'Explore the story of judgment, preservation, and covenant renewal.',
    film: {
      text: 'Open a film search focused on Noah and the flood.',
      url: 'https://www.youtube.com/results?search_query=Noah+Genesis+movie+flood'
    },
    study: {
      text: 'BibleProject overview for Genesis 1–11, including the flood narrative.',
      url: 'https://bibleproject.com/explore/video/genesis-1-11/'
    },
    scripture: {
      ref: 'Genesis 6–9',
      text: 'Read the corruption of the earth, the ark, the flood, and the rainbow covenant.',
      url: 'https://www.biblegateway.com/passage/?search=Genesis%206-9&version=KJV'
    },
    map: {
      text: 'Geographic background on the traditional Mount Ararat setting.',
      url: 'https://en.wikipedia.org/wiki/Ararat'
    },
    prompts: {
      title: 'Reflect on Noah',
      items: [
        'What does the covenant with Noah say about God’s relationship to all living things?',
        'Why are Noah’s sons important for the story that follows?',
        'How does Genesis balance judgment and mercy in this section?'
      ]
    }
  },
  babel: {
    heading: 'Nations, Babel, and the line to Abram',
    intro: 'This room tracks the table of nations, Babel, and the narrowing line that leads to Abram.',
    film: {
      text: 'Open a film search focused on Genesis 10–11 and the Tower of Babel.',
      url: 'https://www.youtube.com/results?search_query=Tower+of+Babel+Genesis+movie'
    },
    study: {
      text: 'BibleProject overview for Genesis 1–11.',
      url: 'https://bibleproject.com/explore/video/genesis-1-11/'
    },
    scripture: {
      ref: 'Genesis 10–11',
      text: 'Read the table of nations, the Babel episode, and the genealogy to Terah.',
      url: 'https://www.biblegateway.com/passage/?search=Genesis%2010-11&version=KJV'
    },
    map: {
      text: 'Background on Shinar and ancient Mesopotamia.',
      url: 'https://en.wikipedia.org/wiki/Shinar'
    },
    prompts: {
      title: 'Reflect on the nations',
      items: [
        'What is Babel trying to achieve, and why is it judged?',
        'Why does Genesis move from nations back into a single family line?',
        'How does Genesis 11 prepare for Abraham?'
      ]
    }
  },
  abraham: {
    heading: 'Abraham and the covenant promise',
    intro: 'Trace the call of Abraham, the household around him, and the promise that shapes the rest of Genesis.',
    film: {
      text: 'Open a film search focused on Abraham, Sarah, Lot, and Isaac.',
      url: 'https://www.youtube.com/results?search_query=Abraham+Genesis+movie'
    },
    study: {
      text: 'BibleProject overview for Genesis 12–50.',
      url: 'https://bibleproject.com/explore/video/genesis-12-50/'
    },
    scripture: {
      ref: 'Genesis 12–25',
      text: 'Read Abraham’s call, covenant, travels, the birth of Isaac, and Abraham’s death.',
      url: 'https://www.biblegateway.com/passage/?search=Genesis%2012-25&version=KJV'
    },
    map: {
      text: 'Background on Ur, Haran, Canaan, Hebron, and Moriah.',
      url: 'https://en.wikipedia.org/wiki/Abraham'
    },
    prompts: {
      title: 'Reflect on Abraham',
      items: [
        'How does the promise to Abraham shape the narrative?',
        'What tensions appear between faith, fear, and waiting?',
        'Why are Lot, Ishmael, and Isaac all important to this section?'
      ]
    }
  },
  isaac: {
    heading: 'Isaac, Rebekah, and the next generation',
    intro: 'This room covers the continuation of the promise through Isaac and Rebekah.',
    film: {
      text: 'Open a film search focused on Isaac, Rebekah, Esau, and Jacob.',
      url: 'https://www.youtube.com/results?search_query=Isaac+Rebekah+Genesis+movie'
    },
    study: {
      text: 'BibleProject overview for Genesis 12–50.',
      url: 'https://bibleproject.com/explore/video/genesis-12-50/'
    },
    scripture: {
      ref: 'Genesis 21–27',
      text: 'Read Isaac’s place in the promise, his marriage to Rebekah, and the blessing narrative.',
      url: 'https://www.biblegateway.com/passage/?search=Genesis%2021-27&version=KJV'
    },
    map: {
      text: 'Background on Beersheba and Gerar in Isaac’s story.',
      url: 'https://en.wikipedia.org/wiki/Beersheba'
    },
    prompts: {
      title: 'Reflect on Isaac',
      items: [
        'How does Isaac’s story continue and differ from Abraham’s?',
        'Why is the blessing scene so decisive for Jacob and Esau?',
        'What role does Rebekah play in the unfolding promise?'
      ]
    }
  },
  jacob: {
    heading: 'Jacob, Esau, and the forming of Israel',
    intro: 'Follow Jacob from conflict and exile into family expansion and covenant identity.',
    film: {
      text: 'Open a film search focused on Jacob’s ladder, Laban, and the return to Canaan.',
      url: 'https://www.youtube.com/results?search_query=Jacob+Genesis+movie'
    },
    study: {
      text: 'BibleProject overview for Genesis 12–50.',
      url: 'https://bibleproject.com/explore/video/genesis-12-50/'
    },
    scripture: {
      ref: 'Genesis 25–36',
      text: 'Read the rivalry with Esau, Jacob’s time with Laban, and his return as Israel.',
      url: 'https://www.biblegateway.com/passage/?search=Genesis%2025-36&version=KJV'
    },
    map: {
      text: 'Background on Bethel, Paddan-aram, and Shechem.',
      url: 'https://en.wikipedia.org/wiki/Jacob'
    },
    prompts: {
      title: 'Reflect on Jacob',
      items: [
        'How does Jacob change over the course of Genesis?',
        'Why do Jacob’s marriages and children matter for later biblical history?',
        'What is the significance of the name Israel?'
      ]
    }
  },
  joseph: {
    heading: 'Joseph, Egypt, and providence',
    intro: 'This room follows Joseph’s rise in Egypt, family reconciliation, and the close of Genesis.',
    film: {
      text: 'Open a film search focused on Joseph in Egypt.',
      url: 'https://www.youtube.com/results?search_query=Joseph+Genesis+movie+Egypt'
    },
    study: {
      text: 'BibleProject overview for Genesis 12–50.',
      url: 'https://bibleproject.com/explore/video/genesis-12-50/'
    },
    scripture: {
      ref: 'Genesis 37–50',
      text: 'Read Joseph’s dreams, descent into Egypt, rise to power, reconciliation, and final blessings.',
      url: 'https://www.biblegateway.com/passage/?search=Genesis%2037-50&version=KJV'
    },
    map: {
      text: 'Background on Egypt, Goshen, and the migration of Jacob’s household.',
      url: 'https://en.wikipedia.org/wiki/Joseph_(Genesis)'
    },
    prompts: {
      title: 'Reflect on Joseph',
      items: [
        'How does Joseph’s story show providence working through suffering?',
        'Why is Judah important inside Joseph’s narrative?',
        'How does Genesis end with both fulfillment and expectation?'
      ]
    }
  }
};

function ensureMissingPeople() {
  if (!window.GENESIS_PEOPLE) return;
  if (!window.GENESIS_PEOPLE.Serpent) {
    window.GENESIS_PEOPLE.Serpent = { id: 'Serpent', label: 'Serpent', kind: 'person' };
  }
  if (!window.GENESIS_PEOPLE.Abimelech) {
    window.GENESIS_PEOPLE.Abimelech = { id: 'Abimelech', label: 'Abimelech', kind: 'person' };
  }
}
ensureMissingPeople();

const treeDiagram = document.getElementById('treeDiagram');
const treeLinks = document.getElementById('treeLinks');
const treeNodes = document.getElementById('treeNodes');
const treeStage = document.getElementById('treeStage');
const result = document.getElementById('personResult');
const personInput = document.getElementById('personSearch');
const globalSearchInput = document.getElementById('globalSearch');
const globalSearchResults = document.getElementById('globalSearchResults');
const focusTitle = document.getElementById('focusTitle');
const focusRange = document.getElementById('focusRange');
const focusOpening = document.getElementById('focusOpening');
const treeChapterTitle = document.getElementById('treeChapterTitle');
const treeChapterSummary = document.getElementById('treeChapterSummary');
const treeScriptureLabel = document.getElementById('treeScriptureLabel');
const treeScriptureRange = document.getElementById('treeScriptureRange');
const treeScriptureOpening = document.getElementById('treeScriptureOpening');
const chapterCards = document.querySelectorAll('.chapter-card');
const chapterList = document.getElementById('chapterList');
const chapterDetailNumber = document.getElementById('chapterDetailNumber');
const chapterDetailTitle = document.getElementById('chapterDetailTitle');
const chapterDetailReference = document.getElementById('chapterDetailReference');
const chapterDetailOpening = document.getElementById('chapterDetailOpening');
const chapterDetailFamilies = document.getElementById('chapterDetailFamilies');
const chapterDetailPeople = document.getElementById('chapterDetailPeople');
const chapterDetailStory = document.getElementById('chapterDetailStory');
const chapterDetailTreeJump = document.getElementById('chapterDetailTreeJump');
const bibleExternalLink = document.getElementById('bibleExternalLink');
const bibleReader = document.getElementById('bibleReader');
const chapterTabButtons = document.querySelectorAll('.chapter-tab');
const chapterTabPanels = document.querySelectorAll('.chapter-tab-panel');
const studyPanelHeading = document.getElementById('studyPanelHeading');
const studyPanelFocus = document.getElementById('studyPanelFocus');
const studyInsightList = document.getElementById('studyInsightList');
const studyQuestionList = document.getElementById('studyQuestionList');
const studyContextText = document.getElementById('studyContextText');
const studyContextPeople = document.getElementById('studyContextPeople');
const zoomRange = document.getElementById('treeZoomRange');
const zoomOut = document.getElementById('treeZoomOut');
const zoomIn = document.getElementById('treeZoomIn');
const zoomReset = document.getElementById('treeZoomReset');
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const mobileBackdrop = document.getElementById('mobileBackdrop');
const mediaTiles = document.querySelectorAll('[data-story-jump]');

const storyRoomHeading = document.getElementById('storyRoomHeading');
const storyRoomIntro = document.getElementById('storyRoomIntro');
const storyFilmText = document.getElementById('storyFilmText');
const storyFilmLink = document.getElementById('storyFilmLink');
const storyStudyText = document.getElementById('storyStudyText');
const storyStudyLink = document.getElementById('storyStudyLink');
const storyScriptureRef = document.getElementById('storyScriptureRef');
const storyScriptureText = document.getElementById('storyScriptureText');
const storyScriptureLink = document.getElementById('storyScriptureLink');
const storyMapText = document.getElementById('storyMapText');
const storyMapLink = document.getElementById('storyMapLink');
const storyPromptTitle = document.getElementById('storyPromptTitle');
const storyPromptList = document.getElementById('storyPromptList');

let currentStoryKey = 'beginning';
let currentChapterNumber = 1;
let currentNodesById = new Map();
let currentPersonId = null;
const baseNodeSize = 60;
let currentNodeSize = baseNodeSize;
let treeZoom = 0.65;
let lastViewportWidth = window.innerWidth;
let bibleCache = new Map();

const bibleVersionLabels = {
  KJV: 'King James Version'
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function scrollToSection(selector) {
  const target = typeof selector === 'string' ? document.querySelector(selector) : selector;
  if (!target) return;
  const topbar = document.querySelector('.topbar');
  const offset = (topbar ? topbar.offsetHeight : 0) + 12;
  const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}

function scrollToChaptersHeader() {
  const panel = document.getElementById('chapters');
  const heading = panel ? panel.querySelector('.panel-head') : null;
  scrollToSection(heading || panel);
}

function normalizeString(value) {
  return String(value || '').trim().toLowerCase();
}

function getStoryKeyForChapter(chapterNumber) {
  const chapter = Number(chapterNumber);
  if (chapter <= 2) return 'beginning';
  if (chapter <= 5) return 'fall';
  if (chapter <= 9) return 'noah';
  if (chapter <= 11) return 'babel';
  if (chapter <= 20) return 'abraham';
  if (chapter <= 24) return 'isaac';
  if (chapter <= 36) return 'jacob';
  return 'joseph';
}

function getChapterNumberForStory(storyKey) {
  return storyRanges[storyKey] ? storyRanges[storyKey].start : 1;
}

function lineClass(type) {
  if (type === 'spouse') return 'tree-link spouse';
  if (type === 'divine' || type === 'created' || type === 'called') return 'tree-link divine';
  if (type === 'event') return 'tree-link event';
  if (type === 'lineage') return 'tree-link lineage';
  return 'tree-link parent';
}

function buildPeopleIndex() {
  const seen = new Set();
  const items = [];
  Object.entries(genesisStories).forEach(([storyKey, story]) => {
    (story.nodes || []).forEach(person => {
      const uniqueKey = `${storyKey}:${person.id}`;
      if (seen.has(uniqueKey)) return;
      seen.add(uniqueKey);
      items.push({ type: 'person', storyKey, person, label: person.label, sub: person.chapters || story.range });
    });
  });
  return items;
}

function buildSearchIndex() {
  const storyItems = storyOrder.map(storyKey => {
    const story = genesisStories[storyKey];
    return { type: 'story', storyKey, label: story.title, sub: story.range };
  });

  const chapterItems = Object.entries(genesisChapterFamilies).map(([chapterNumber, chapter]) => ({
    type: 'chapter',
    chapterNumber: Number(chapterNumber),
    label: `Chapter ${chapterNumber}: ${chapter.title}`,
    sub: chapter.reference
  }));

  return [...storyItems, ...chapterItems, ...buildPeopleIndex()];
}

const searchIndex = buildSearchIndex();

function hideGlobalResults() {
  if (!globalSearchResults) return;
  globalSearchResults.hidden = true;
  globalSearchResults.innerHTML = '';
}

function renderGlobalResults(query) {
  if (!globalSearchResults) return;
  const q = normalizeString(query);
  if (!q) {
    hideGlobalResults();
    return;
  }

  const results = searchIndex
    .filter(item => normalizeString(item.label).includes(q) || normalizeString(item.sub).includes(q))
    .slice(0, 8);

  globalSearchResults.hidden = false;
  if (!results.length) {
    globalSearchResults.innerHTML = '<div class="search-empty">No results found.</div>';
    return;
  }

  globalSearchResults.innerHTML = '';
  results.forEach(item => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'search-result';
    button.innerHTML = `
      <div>
        <strong>${item.label}</strong>
        <small>${item.sub}</small>
      </div>
      <span class="search-chip">${item.type}</span>
    `;
    button.addEventListener('click', () => {
      handleSearchResult(item);
      hideGlobalResults();
      if (globalSearchInput) globalSearchInput.value = '';
    });
    globalSearchResults.appendChild(button);
  });
}

function handleSearchResult(item) {
  if (!item) return;
  if (item.type === 'story') {
    selectStory(item.storyKey, { scroll: '#chapters' });
    selectChapter(getChapterNumberForStory(item.storyKey));
    return;
  }
  if (item.type === 'chapter') {
    const storyKey = getStoryKeyForChapter(item.chapterNumber);
    selectStory(storyKey);
    selectChapter(item.chapterNumber);
    scrollToSection('#chapter-explorer');
    return;
  }
  if (item.type === 'person') {
    selectStory(item.storyKey, { personId: item.person.id });
    scrollToSection('#tree');
  }
}

function updateStoryRoom(storyKey) {
  const data = STORY_ROOM_DATA[storyKey] || STORY_ROOM_DATA.beginning;
  if (storyRoomHeading) storyRoomHeading.textContent = data.heading;
  if (storyRoomIntro) storyRoomIntro.textContent = data.intro;
  if (storyFilmText) storyFilmText.textContent = data.film.text;
  if (storyFilmLink) storyFilmLink.href = data.film.url;
  if (storyStudyText) storyStudyText.textContent = data.study.text;
  if (storyStudyLink) storyStudyLink.href = data.study.url;
  if (storyScriptureRef) storyScriptureRef.textContent = data.scripture.ref;
  if (storyScriptureText) storyScriptureText.textContent = data.scripture.text;
  if (storyScriptureLink) storyScriptureLink.href = data.scripture.url;
  if (storyMapText) storyMapText.textContent = data.map.text;
  if (storyMapLink) storyMapLink.href = data.map.url;
  if (storyPromptTitle) storyPromptTitle.textContent = data.prompts.title;
  if (storyPromptList) {
    storyPromptList.innerHTML = '';
    data.prompts.items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      storyPromptList.appendChild(li);
    });
  }
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getCurrentBibleVersion() {
  return 'KJV';
}

function getBibleGatewayUrl(version, chapterNumber) {
  const chapter = Number(chapterNumber) || 1;
  const safeVersion = version || 'KJV';
  return `https://www.biblegateway.com/passage/?search=Genesis+${chapter}&version=${encodeURIComponent(safeVersion)}`;
}

function updateBibleExternalLink(version, chapterNumber) {
  if (!bibleExternalLink) return;
  bibleExternalLink.href = getBibleGatewayUrl(version, chapterNumber);
  bibleExternalLink.textContent = 'Open source →';
}

function renderBibleLoading(version, chapterNumber) {
  if (!bibleReader) return;
  bibleReader.innerHTML = `<p class="bible-status">Loading Genesis ${chapterNumber} (${version})...</p>`;
}

function renderBibleVerses({ version, versionLabel, chapterNumber, verses, sourceNote }) {
  if (!bibleReader) return;
  const verseRows = (verses || []).map(verse => {
    const verseNumber = verse.verse || verse.number || '';
    const verseText = verse.text || '';
    return `
      <div class="bible-verse">
        <span class="bible-verse-number">${escapeHtml(verseNumber)}</span>
        <span>${escapeHtml(verseText)}</span>
      </div>
    `;
  }).join('');

  bibleReader.innerHTML = `
    <div class="bible-reader-title">
      <div>
        <h5>Genesis ${escapeHtml(chapterNumber)}</h5>
        <p>${escapeHtml(versionLabel || bibleVersionLabels[version] || version)}${sourceNote ? ` · ${escapeHtml(sourceNote)}` : ''}</p>
      </div>
      <span class="bible-source-pill">${escapeHtml(version)}</span>
    </div>
    <div class="bible-verses">${verseRows}</div>
  `;
}

function renderLicensedBibleNotice(version, chapterNumber) {
  if (!bibleReader) return;
  const label = bibleVersionLabels[version] || version;
  const link = getBibleGatewayUrl(version, chapterNumber);
  bibleReader.innerHTML = `
    <div class="bible-notice-card">
      <h5>${escapeHtml(label)} reader ready</h5>
      <p>The selector is wired for ${escapeHtml(version)}, but the full ${escapeHtml(label)} text is not bundled inside this static zip. Add licensed text to <code>window.GENESIS_LICENSED_BIBLE_TEXT</code>, or open the selected chapter through the external reader.</p>
      <a class="reader-link" href="${escapeHtml(link)}" target="_blank" rel="noopener">Read Genesis ${escapeHtml(chapterNumber)} in ${escapeHtml(version)} →</a>
    </div>
  `;
}

function extractVersesFromBibleApiPayload(payload, chapterNumber) {
  if (!payload) return [];
  if (Array.isArray(payload.verses)) return payload.verses;
  if (Array.isArray(payload.data?.verses)) return payload.data.verses;
  if (Array.isArray(payload.chapter?.verses)) return payload.chapter.verses;
  if (typeof payload.text === 'string' && payload.text.trim()) {
    return payload.text
      .split(/\n+/)
      .map((text, index) => ({ chapter: chapterNumber, verse: index + 1, text: text.trim() }))
      .filter(verse => verse.text);
  }
  return [];
}

function getLicensedText(version, chapterNumber) {
  const store = window.GENESIS_LICENSED_BIBLE_TEXT;
  if (!store || !store[version]) return null;
  return store[version][chapterNumber] || store[version][String(chapterNumber)] || null;
}

function normalizeLicensedVerses(content, chapterNumber) {
  if (Array.isArray(content)) {
    return content.map((item, index) => {
      if (typeof item === 'string') return { chapter: chapterNumber, verse: index + 1, text: item };
      return { chapter: chapterNumber, verse: item.verse || index + 1, text: item.text || '' };
    }).filter(verse => verse.text);
  }
  if (typeof content === 'string') {
    return content
      .split(/\n+/)
      .map((text, index) => ({ chapter: chapterNumber, verse: index + 1, text: text.trim() }))
      .filter(verse => verse.text);
  }
  return [];
}

async function fetchKjvChapter(chapterNumber) {
  const cacheKey = `KJV:${chapterNumber}`;
  if (bibleCache.has(cacheKey)) return bibleCache.get(cacheKey);

  const urls = [
    `https://bible-api.com/data/kjv/GEN/${chapterNumber}`,
    `https://bible-api.com/Genesis%20${chapterNumber}?translation=kjv`
  ];

  for (const url of urls) {
    try {
      const response = await fetch(url, { cache: 'force-cache' });
      if (!response.ok) continue;
      const payload = await response.json();
      const verses = extractVersesFromBibleApiPayload(payload, chapterNumber);
      if (verses.length) {
        const result = {
          verses,
          versionLabel: payload.translation_name || payload.translation?.name || 'King James Version',
          sourceNote: payload.translation_note || 'Public domain text loaded online'
        };
        bibleCache.set(cacheKey, result);
        return result;
      }
    } catch (error) {
      // Try the next endpoint, then fall back to a graceful message.
    }
  }

  throw new Error('KJV chapter could not be loaded.');
}

async function renderBibleReader() {
  if (!bibleReader) return;
  const version = getCurrentBibleVersion();
  const chapterNumber = currentChapterNumber || 1;
  updateBibleExternalLink(version, chapterNumber);

  const licensedContent = getLicensedText(version, chapterNumber);
  if (licensedContent) {
    renderBibleVerses({
      version,
      versionLabel: bibleVersionLabels[version] || version,
      chapterNumber,
      verses: normalizeLicensedVerses(licensedContent, chapterNumber),
      sourceNote: 'licensed local text'
    });
    return;
  }

  if (version !== 'KJV') {
    renderLicensedBibleNotice(version, chapterNumber);
    return;
  }

  renderBibleLoading(version, chapterNumber);
  try {
    const data = await fetchKjvChapter(chapterNumber);
    if (getCurrentBibleVersion() !== version || currentChapterNumber !== chapterNumber) return;
    renderBibleVerses({
      version,
      versionLabel: data.versionLabel,
      chapterNumber,
      verses: data.verses,
      sourceNote: data.sourceNote
    });
  } catch (error) {
    bibleReader.innerHTML = `
      <div class="bible-notice-card">
        <h5>Genesis ${escapeHtml(chapterNumber)} KJV</h5>
        <p>The in-page KJV reader could not load from the online public-domain source. The external KJV reader is still available, and the chapter summary above remains available offline.</p>
        <a class="reader-link" href="${escapeHtml(getBibleGatewayUrl('KJV', chapterNumber))}" target="_blank" rel="noopener">Read Genesis ${escapeHtml(chapterNumber)} in KJV →</a>
      </div>
    `;
  }
}

function createTag(content) {
  const span = document.createElement('span');
  span.className = 'tag';
  span.textContent = content;
  return span;
}


function createListItems(target, items) {
  if (!target) return;
  target.innerHTML = '';
  (items || []).forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    target.appendChild(li);
  });
}

function switchChapterTab(tabName) {
  const nextTab = tabName || 'summary';
  chapterTabButtons.forEach(button => {
    const active = button.dataset.tab === nextTab;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  chapterTabPanels.forEach(panel => {
    const active = panel.dataset.panel === nextTab;
    panel.classList.toggle('active', active);
    panel.hidden = !active;
  });
  if (nextTab === 'scripture') renderBibleReader();
}

function getStoryStudyTemplate(storyKey) {
  const templates = {
    beginning: {
      heading: 'Creation, order, and human vocation',
      focus: 'Read these opening chapters with attention to God as creator, the goodness of creation, and the place of humanity inside that ordered world.',
      insights: [
        'Notice repeated patterns, divine speech, and the movement from chaos to order.',
        'Watch how human identity is tied to calling, stewardship, and relationship.',
        'Pay attention to how the chapter prepares later tensions in Genesis.'
      ],
      questions: [
        'What does this chapter reveal about the character and purposes of God?',
        'What human responsibility or response is emphasized here?',
        'How does this chapter establish themes that return later in Genesis?'
      ]
    },
    fall: {
      heading: 'Sin, fracture, and the widening consequences of rebellion',
      focus: 'These chapters should be read as the unraveling of the created order. The narrative exposes temptation, blame, violence, mortality, and the need for grace.',
      insights: [
        'Notice how desire, speech, and choice move the story toward alienation.',
        'Watch the spread of brokenness from the garden into the family line.',
        'Look for both judgment and the signs of God preserving a future.'
      ],
      questions: [
        'Where do you see disordered desire or misdirected worship in this chapter?',
        'How are family relationships altered by sin here?',
        'What traces of mercy remain alongside judgment?'
      ]
    },
    noah: {
      heading: 'Judgment, preservation, and covenant renewal',
      focus: 'The flood narrative should be read as both severe judgment and a carefully preserved continuation of the human family through Noah.',
      insights: [
        'Notice the contrast between corruption in the earth and Noah’s preservation.',
        'Watch the literary movement from warning to flood to remembrance and renewal.',
        'Pay attention to covenant language and the reshaping of human responsibility.'
      ],
      questions: [
        'How does this chapter balance justice and mercy?',
        'What kind of human future is being preserved through Noah?',
        'How does the covenant language change the tone of the story?'
      ]
    },
    babel: {
      heading: 'Nations, dispersion, and the narrowing line to Abram',
      focus: 'Genesis 10 and 11 move from broad humanity to the line that will carry the promise. Read these chapters as both a map of peoples and a theological explanation of dispersion.',
      insights: [
        'Notice the contrast between human expansion and human pride.',
        'Watch how genealogy becomes a narrative bridge toward Abraham.',
        'Pay attention to the way names, cities, and nations frame the biblical world.'
      ],
      questions: [
        'How does this chapter explain the diversity or division of the nations?',
        'Why does the narrative narrow from many peoples to one family line?',
        'What kind of human ambition is being critiqued here?'
      ]
    },
    abraham: {
      heading: 'Promise, covenant, and the testing of faith',
      focus: 'The Abraham cycle should be read through promise. Land, descendants, blessing, and trust in God shape the movement of these chapters.',
      insights: [
        'Notice how promise and delay are held together in tension.',
        'Watch household relationships closely, because family decisions drive the narrative.',
        'Look for scenes where faith, fear, and obedience are set beside one another.'
      ],
      questions: [
        'What aspect of God’s promise is most central in this chapter?',
        'How does Abraham or his household respond to uncertainty?',
        'What does this chapter contribute to the covenant storyline?'
      ]
    },
    isaac: {
      heading: 'Continuity of the promise through Isaac and his household',
      focus: 'These chapters show the promise continuing, but not without tension. The family line is preserved through blessing, marriage, and conflict between brothers.',
      insights: [
        'Notice what remains continuous from Abraham’s story and what changes.',
        'Watch how blessing functions as a decisive narrative force.',
        'Pay attention to Rebekah, Esau, and Jacob as agents in the unfolding line.'
      ],
      questions: [
        'How is the promise carried forward in this chapter?',
        'What family tensions are shaping the future line?',
        'Why does blessing matter so much in this section of Genesis?'
      ]
    },
    jacob: {
      heading: 'Transformation, struggle, and the formation of Israel',
      focus: 'The Jacob chapters reveal a life marked by conflict, encounter, and gradual transformation. Read them as the formation of the family that becomes Israel.',
      insights: [
        'Notice repeated patterns of struggle, flight, negotiation, and return.',
        'Watch how the household expands and how rivalry shapes that expansion.',
        'Pay attention to moments where God redirects Jacob’s path or identity.'
      ],
      questions: [
        'How is Jacob being changed in this chapter?',
        'What do the family conflicts reveal about the future of Israel?',
        'Where do you see divine guidance or confrontation here?'
      ]
    },
    joseph: {
      heading: 'Providence, reconciliation, and survival in Egypt',
      focus: 'These closing chapters of Genesis should be read with attention to providence. What looks like betrayal and loss is slowly reworked into preservation, wisdom, and reconciliation.',
      insights: [
        'Notice how dreams, testing, and reversal structure the narrative.',
        'Watch how Joseph’s story also develops Judah and the brothers.',
        'Pay attention to how family restoration and national survival intersect.'
      ],
      questions: [
        'How does this chapter turn suffering into a larger purpose?',
        'What does this scene reveal about repentance, wisdom, or reconciliation?',
        'How does the chapter move Genesis toward its ending in Egypt?'
      ]
    }
  };
  return templates[storyKey] || templates.beginning;
}

function getChapterSpecificAdjustments(chapterNumber) {
  const map = {
    1: {
      insights: ['Observe the sevenfold rhythm of creation and rest.', 'Notice the dignity of humanity as made in the image of God.', 'Watch how blessing and fruitfulness are built into creation from the start.'],
      questions: ['How does Genesis 1 shape a biblical view of creation and humanity?', 'Why is the image of God so important for interpreting this chapter?', 'What is the significance of God calling creation good?']
    },
    2: {
      insights: ['Notice the more intimate portrayal of the garden and humanity.', 'Watch how work, command, and companionship are woven together.', 'Pay attention to marriage as a creation pattern.'],
      questions: ['How does Genesis 2 deepen or complement Genesis 1?', 'What does this chapter suggest about human vocation?', 'Why is the companionship of man and woman central here?']
    },
    3: {
      insights: ['Follow the movement from temptation to concealment to judgment.', 'Notice the role of speech, distortion, and blame.', 'Look for the first hints of hope in the midst of curse.'],
      questions: ['What does the serpent distort in this chapter?', 'How are the human relationships altered by the fall?', 'Where do you see both judgment and mercy in Genesis 3?']
    },
    6: { heading: 'Human corruption and Noah’s preservation' },
    7: { heading: 'The flood as judgment enacted' },
    8: { heading: 'Remembering Noah and the beginning of renewal' },
    9: { heading: 'Covenant after the flood and the dignity of life' },
    11: { heading: 'Babel, dispersion, and the road to Abram' },
    12: { heading: 'The call of Abram and the beginning of the promise' },
    15: { heading: 'Covenant assurance and counted righteousness' },
    17: { heading: 'Covenant sign, renamed identity, and promised seed' },
    18: { heading: 'Promise, hospitality, and the justice of God' },
    19: { heading: 'Sodom, rescue, and catastrophic judgment' },
    22: { heading: 'The binding of Isaac and the testing of Abraham' },
    24: { heading: 'Finding Rebekah and securing the promise line' },
    27: { heading: 'Blessing, deception, and the transfer to Jacob' },
    28: { heading: 'Bethel, promise, and Jacob’s departure' },
    29: { heading: 'Jacob’s household begins under tension' },
    30: { heading: 'Births, rivalry, and the expansion of Jacob’s house' },
    32: { heading: 'Fear, prayer, and Jacob’s struggle with God' },
    35: { heading: 'Return, renaming, and consolidation of Israel’s family' },
    37: { heading: 'Joseph’s descent begins and family fracture deepens' },
    38: { heading: 'Judah and Tamar inside the Joseph cycle' },
    39: { heading: 'Faithfulness under pressure in Potiphar’s house' },
    41: { heading: 'Dreams interpreted and Joseph raised to power' },
    45: { heading: 'Recognition, reconciliation, and providence revealed' },
    48: { heading: 'Blessing the next generation in Egypt' },
    49: { heading: 'Jacob’s final blessings and the shape of the tribes' },
    50: { heading: 'Death, burial, forgiveness, and Genesis completed' }
  };
  return map[chapterNumber] || {};
}

function getInterpretationStudyContent(chapterNumber) {
  const chapter = genesisChapterFamilies[chapterNumber];
  const storyKey = getStoryKeyForChapter(chapterNumber);
  const template = getStoryStudyTemplate(storyKey);
  const adjustment = getChapterSpecificAdjustments(chapterNumber);
  const peopleLabels = (chapter?.people || []).slice(0, 8).map(personId => (genesisPeople[personId] && genesisPeople[personId].label) || personId);
  const families = (chapter?.families || []).slice(0, 4);
  const heading = adjustment.heading || template.heading;
  const focus = adjustment.focus || `${template.focus} In ${chapter?.reference || `Genesis ${chapterNumber}`}, the key movement is “${chapter?.title || 'this chapter'},” so keep the people, the family line, and the wider narrative progression in view while reading.`;
  const insights = adjustment.insights || template.insights;
  const questions = adjustment.questions || template.questions.map(question => question.replace('this chapter', chapter?.reference || `Genesis ${chapterNumber}`));
  const familyText = families.length
    ? `This chapter sits inside ${families.join(', ')}. The narrative matters not only as an isolated episode, but as part of the unfolding family history that Genesis is building.`
    : `This chapter belongs to the ${storyKey} movement in Genesis and should be read as part of a larger family and covenant storyline.`;
  return { heading, focus, insights, questions, familyText, peopleLabels };
}

function renderStudyPanel(chapterNumber) {
  const content = getInterpretationStudyContent(chapterNumber);
  if (studyPanelHeading) studyPanelHeading.textContent = content.heading;
  if (studyPanelFocus) studyPanelFocus.textContent = content.focus;
  if (studyContextText) studyContextText.textContent = content.familyText;
  createListItems(studyInsightList, content.insights);
  createListItems(studyQuestionList, content.questions);
  if (studyContextPeople) {
    studyContextPeople.innerHTML = '';
    content.peopleLabels.forEach(label => studyContextPeople.appendChild(createTag(label)));
  }
}

function renderChapterList() {
  if (!chapterList) return;
  chapterList.innerHTML = '';
  Object.entries(genesisChapterFamilies).forEach(([chapterNumber, chapter]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'chapter-list-btn';
    button.dataset.chapter = chapterNumber;
    button.innerHTML = `
      <strong>Chapter ${chapterNumber}</strong>
      <span>${chapter.title}</span>
    `;
    button.addEventListener('click', () => selectChapter(Number(chapterNumber), { scrollIntoView: false }));
    chapterList.appendChild(button);
  });
}

function selectChapter(chapterNumber) {
  const chapter = genesisChapterFamilies[chapterNumber];
  if (!chapter) return;
  currentChapterNumber = Number(chapterNumber);

  document.querySelectorAll('.chapter-list-btn').forEach(button => {
    button.classList.toggle('active', Number(button.dataset.chapter) === currentChapterNumber);
  });

  if (chapterDetailNumber) chapterDetailNumber.textContent = `Chapter ${chapterNumber}`;
  if (chapterDetailTitle) chapterDetailTitle.textContent = chapter.title;
  if (chapterDetailReference) chapterDetailReference.textContent = chapter.reference;
  if (chapterDetailOpening) chapterDetailOpening.textContent = chapter.opening;
  if (chapterDetailFamilies) {
    chapterDetailFamilies.innerHTML = '';
    (chapter.families || []).forEach(family => chapterDetailFamilies.appendChild(createTag(family)));
  }
  if (chapterDetailPeople) {
    chapterDetailPeople.innerHTML = '';
    (chapter.people || []).slice(0, 12).forEach(personId => {
      const label = (genesisPeople[personId] && genesisPeople[personId].label) || personId;
      chapterDetailPeople.appendChild(createTag(label));
    });
  }
  const storyKey = getStoryKeyForChapter(chapterNumber);
  const story = genesisStories[storyKey] || genesisStories.beginning;
  if (chapterDetailStory) chapterDetailStory.textContent = `${story.title} (${story.range})`;
  renderStudyPanel(chapterNumber);
  renderBibleReader();
}

function renderPerson(person) {
  if (!result || !person) return;
  currentPersonId = person.id;
  result.innerHTML = `
    <h3>${person.label}</h3>
    <p>${person.chapters || ''}</p>
    <small>${person.note || ''}</small>
  `;

  document.querySelectorAll('.node').forEach(node => {
    node.classList.toggle('active', node.dataset.person === person.id);
  });
}

function getTreeMetrics(story) {
  const stageWidth = treeStage ? treeStage.clientWidth : 360;
  const fitWidth = Math.max(0.3, (stageWidth - 64) / story.width);
  const effectiveZoom = treeZoom;
  const denseTreeFactor = story.nodes.length >= 18 ? 0.84 : story.nodes.length >= 14 ? 0.9 : 1;
  currentNodeSize = clamp(baseNodeSize * denseTreeFactor * (fitWidth * 0.48 + effectiveZoom * 0.24), 36, 60);
  const paddingX = Math.round(currentNodeSize / 2 + 18);
  const paddingTop = 24;
  const xScale = Math.max(0.22, (stageWidth - paddingX * 2 - 10) / story.width);
  const yStretchBase = story.nodes.length >= 14 ? 1.12 : 1.04;
  const yStretch = yStretchBase + (effectiveZoom - 0.55) * 1.1;
  const yScale = xScale * clamp(yStretch, 0.82, 1.72);
  const labelAllowance = currentNodeSize + (story.nodes.length >= 14 ? 48 : 42);
  const displayWidth = Math.round(story.width * xScale + paddingX * 2);
  const displayHeight = Math.round(story.height * yScale + paddingTop + labelAllowance + 56);
  return { xScale, yScale, paddingX, paddingTop, labelAllowance, displayWidth, displayHeight };
}

function renderLink(link) {
  const from = currentNodesById.get(link.from);
  const to = currentNodesById.get(link.to);
  if (!from || !to || !treeLinks) return;
  const className = lineClass(link.type);

  if (link.type === 'spouse') {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', from.x);
    line.setAttribute('y1', from.y);
    line.setAttribute('x2', to.x);
    line.setAttribute('y2', to.y);
    line.setAttribute('class', className);
    treeLinks.appendChild(line);
    return;
  }

  const startY = from.y + currentNodeSize / 2 - 3;
  const endY = to.y - currentNodeSize / 2 + 3;
  const midY = Math.round((startY + endY) / 2);
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', `M ${from.x} ${startY} V ${midY} H ${to.x} V ${endY}`);
  path.setAttribute('class', className);
  treeLinks.appendChild(path);
}

function centerTreeOnPerson(person) {
  if (!treeStage || !person) return;
  window.requestAnimationFrame(() => {
    treeStage.scrollTop = Math.max(0, person.y - treeStage.clientHeight / 2 + currentNodeSize * 0.35);
    treeStage.scrollLeft = 0;
  });
}

function renderTree(storyKey, selectedPersonId) {
  const story = genesisStories[storyKey] || genesisStories.beginning;
  currentStoryKey = storyKey;

  if (focusTitle) focusTitle.textContent = story.title;
  if (focusRange) focusRange.textContent = story.range;
  if (focusOpening) focusOpening.textContent = story.opening;
  if (treeChapterTitle) treeChapterTitle.textContent = story.title;
  if (treeChapterSummary) treeChapterSummary.textContent = story.summary;
  if (treeScriptureLabel) treeScriptureLabel.textContent = story.title;
  if (treeScriptureRange) treeScriptureRange.textContent = story.range;
  if (treeScriptureOpening) treeScriptureOpening.textContent = story.opening;

  chapterCards.forEach(card => {
    const isActive = card.dataset.story === storyKey;
    card.classList.toggle('active', isActive);
    card.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  if (zoomRange) zoomRange.value = treeZoom.toFixed(2);
  if (!treeDiagram || !treeLinks || !treeNodes) return;

  const metrics = getTreeMetrics(story);
  const scaledNodes = (story.nodes || []).map(person => ({
    ...person,
    x: Math.round(metrics.paddingX + person.x * metrics.xScale),
    y: Math.round(metrics.paddingTop + person.y * metrics.yScale)
  }));
  currentNodesById = new Map(scaledNodes.map(person => [person.id, person]));

  treeDiagram.style.width = `${metrics.displayWidth}px`;
  treeDiagram.style.height = `${metrics.displayHeight}px`;
  treeDiagram.style.setProperty('--node-size', `${currentNodeSize}px`);
  treeDiagram.style.setProperty('--node-font-size', `${Math.max(14, Math.round(currentNodeSize * 0.31))}px`);
  treeLinks.setAttribute('viewBox', `0 0 ${metrics.displayWidth} ${metrics.displayHeight}`);
  treeLinks.setAttribute('width', metrics.displayWidth);
  treeLinks.setAttribute('height', metrics.displayHeight);
  treeLinks.innerHTML = '';
  treeNodes.innerHTML = '';

  (story.links || []).forEach(renderLink);

  scaledNodes.forEach(person => {
    const button = document.createElement('button');
    button.className = 'node';
    if (person.avatar) button.classList.add('has-avatar');
    button.type = 'button';
    button.dataset.person = person.id;
    button.style.left = `${person.x - currentNodeSize / 2}px`;
    button.style.top = `${person.y - currentNodeSize / 2}px`;
    button.setAttribute('aria-label', `${person.label}, ${person.chapters || ''}`);
    button.innerHTML = person.avatar
      ? `<img src="${person.avatar}" alt="${person.label}" /><span>${person.label}</span>`
      : `${person.initial || person.label.charAt(0)}<span>${person.label}</span>`;
    button.addEventListener('click', () => renderPerson(person));
    treeNodes.appendChild(button);
  });

  const selectedPerson = currentNodesById.get(selectedPersonId) || currentNodesById.get(story.focus) || scaledNodes[0];
  renderPerson(selectedPerson);
  centerTreeOnPerson(selectedPerson);
}

function selectStory(storyKey, options = {}) {
  const { personId = null, scroll = null } = options;
  renderTree(storyKey, personId);
  updateStoryRoom(storyKey);
  selectChapter(getChapterNumberForStory(storyKey));
  if (scroll) scrollToSection(scroll);
}

function setTreeZoom(nextZoom) {
  treeZoom = clamp(Number(nextZoom) || 0.65, 0.45, 1.25);
  renderTree(currentStoryKey, currentPersonId);
}

function findPerson(query) {
  const q = normalizeString(query);
  if (!q) return null;
  return buildPeopleIndex().find(({ person }) => {
    return normalizeString(person.label).includes(q) || normalizeString(person.id).includes(q);
  });
}

function closeMobileNav() {
  document.body.classList.remove('nav-open');
  if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
}

function openMobileNav() {
  document.body.classList.add('nav-open');
  if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
}

function toggleMobileNav() {
  const isOpen = document.body.classList.contains('nav-open');
  if (isOpen) {
    closeMobileNav();
  } else {
    openMobileNav();
  }
}

function wireChapterCards() {
  chapterCards.forEach(card => {
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.addEventListener('click', () => {
      const storyKey = card.dataset.story || 'beginning';
      selectStory(storyKey);
      scrollToChaptersHeader();
    });
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.click();
      }
    });
  });
}

function wireEvents() {
  if (personInput) {
    personInput.addEventListener('input', event => {
      const match = findPerson(event.target.value);
      if (!match) return;
      if (match.storyKey !== currentStoryKey) {
        renderTree(match.storyKey, match.person.id);
        updateStoryRoom(match.storyKey);
        selectChapter(getChapterNumberForStory(match.storyKey));
      } else {
        const scaledPerson = currentNodesById.get(match.person.id) || match.person;
        renderPerson(scaledPerson);
        centerTreeOnPerson(scaledPerson);
      }
    });
  }

  if (zoomRange) zoomRange.addEventListener('input', event => setTreeZoom(event.target.value));
  if (zoomOut) zoomOut.addEventListener('click', () => setTreeZoom(treeZoom - 0.05));
  if (zoomIn) zoomIn.addEventListener('click', () => setTreeZoom(treeZoom + 0.05));
  if (zoomReset) zoomReset.addEventListener('click', () => setTreeZoom(0.65));

  chapterTabButtons.forEach(button => {
    button.addEventListener('click', () => switchChapterTab(button.dataset.tab));
  });

  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', event => renderGlobalResults(event.target.value));
    globalSearchInput.addEventListener('focus', event => renderGlobalResults(event.target.value));
  }

  document.addEventListener('click', event => {
    if (!event.target.closest('.global-search-wrap')) hideGlobalResults();
    if (window.innerWidth <= 760 && !event.target.closest('.sidebar') && !event.target.closest('#menuBtn')) {
      closeMobileNav();
    }
  });

  if (menuBtn) menuBtn.addEventListener('click', toggleMobileNav);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileNav);
  document.querySelectorAll('.side-nav a').forEach(link => link.addEventListener('click', closeMobileNav));

  if (chapterDetailTreeJump) {
    chapterDetailTreeJump.addEventListener('click', () => {
      const storyKey = getStoryKeyForChapter(currentChapterNumber);
      selectStory(storyKey);
      scrollToSection('#tree');
    });
  }

  mediaTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      scrollToSection('#story-detail');
    });
  });

  if (treeStage) {
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let startScrollTop = 0;
    let startScrollLeft = 0;
    let pinchStartDistance = 0;
    let pinchStartZoom = treeZoom;

    const touchDistance = touches => {
      const [a, b] = touches;
      const dx = a.clientX - b.clientX;
      const dy = a.clientY - b.clientY;
      return Math.hypot(dx, dy);
    };

    treeStage.addEventListener('pointerdown', event => {
      if (event.target.closest('.node, button, input')) return;
      isDragging = true;
      startX = event.clientX;
      startY = event.clientY;
      startScrollTop = treeStage.scrollTop;
      startScrollLeft = treeStage.scrollLeft;
      treeStage.classList.add('is-dragging');
      treeStage.setPointerCapture(event.pointerId);
    });

    treeStage.addEventListener('pointermove', event => {
      if (!isDragging) return;
      event.preventDefault();
      treeStage.scrollTop = startScrollTop - (event.clientY - startY);
      treeStage.scrollLeft = startScrollLeft - (event.clientX - startX);
    });

    const stopDragging = event => {
      if (!isDragging) return;
      isDragging = false;
      treeStage.classList.remove('is-dragging');
      if (treeStage.hasPointerCapture(event.pointerId)) {
        treeStage.releasePointerCapture(event.pointerId);
      }
    };

    treeStage.addEventListener('pointerup', stopDragging);
    treeStage.addEventListener('pointercancel', stopDragging);
    treeStage.addEventListener('pointerleave', stopDragging);

    treeStage.addEventListener('touchstart', event => {
      if (event.touches.length !== 2) return;
      pinchStartDistance = touchDistance(event.touches);
      pinchStartZoom = treeZoom;
      isDragging = false;
      treeStage.classList.remove('is-dragging');
    }, { passive: true });

    treeStage.addEventListener('touchmove', event => {
      if (event.touches.length !== 2 || !pinchStartDistance) return;
      event.preventDefault();
      const nextDistance = touchDistance(event.touches);
      const scale = nextDistance / pinchStartDistance;
      setTreeZoom(pinchStartZoom * scale);
    }, { passive: false });
  }

  window.addEventListener('resize', () => {
    if (Math.abs(window.innerWidth - lastViewportWidth) < 12) return;
    lastViewportWidth = window.innerWidth;
    renderTree(currentStoryKey, currentPersonId);
    if (window.innerWidth > 760) closeMobileNav();
  });

  const sectionIds = ['home', 'chapters', 'tree', 'chapter-explorer', 'story-detail', 'schools', 'about'];
  const linksByTarget = new Map(
    [...document.querySelectorAll('.side-nav a')].map(link => [link.getAttribute('href')?.slice(1), link])
  );
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      linksByTarget.forEach(link => link.classList.remove('active'));
      const link = linksByTarget.get(entry.target.id);
      if (link) link.classList.add('active');
    });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: 0.1 });

  sectionIds.forEach(id => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

function init() {
  renderChapterList();
  wireChapterCards();
  wireEvents();
  selectStory('beginning');
  selectChapter(1);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
