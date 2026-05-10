const GENESIS_STORY_BRANCHES = {
  beginning: {
    title: 'The Beginning',
    range: 'Genesis 1–2',
    opening: 'In the beginning, God created the heavens and the earth.',
    summary: 'Adam and Eve stand at the beginning of the human family line in Genesis.',
    width: 360,
    height: 270,
    focus: 'Adam',
    nodes: [
      { id: 'God', label: 'God', initial: 'G', avatar: 'assets/images/people/god.png', x: 180, y: 58, chapters: 'Genesis 1–2', note: 'Creator of the heavens, the earth, and humanity.' },
      { id: 'Adam', label: 'Adam', initial: 'A', avatar: 'assets/images/people/adam.png', x: 115, y: 165, chapters: 'Genesis 1–5', note: 'First man in Genesis and husband of Eve.' },
      { id: 'Eve', label: 'Eve', initial: 'E', avatar: 'assets/images/people/eve.png', x: 245, y: 165, chapters: 'Genesis 2–4', note: 'First woman in Genesis and mother of Cain, Abel, and Seth.' }
    ],
    links: [
      { from: 'God', to: 'Adam', type: 'divine' },
      { from: 'God', to: 'Eve', type: 'divine' },
      { from: 'Adam', to: 'Eve', type: 'spouse' }
    ]
  },
  fall: {
    title: 'The Fall',
    range: 'Genesis 3–5',
    opening: 'Now the serpent was more subtle than any beast of the field which the LORD God had made.',
    summary: 'The first human pair falls, and the first family line unfolds through Cain, Abel, and Seth.',
    width: 460,
    height: 360,
    focus: 'Eve',
    nodes: [
      { id: 'God', label: 'God', initial: 'G', avatar: 'assets/images/people/god.png', x: 230, y: 52, chapters: 'Genesis 3–5', note: 'Confronts Adam and Eve after the fall and continues the human line.' },
      { id: 'Serpent', label: 'Serpent', initial: 'S', avatar: 'assets/images/people/serpent.png', x: 78, y: 145, chapters: 'Genesis 3', note: 'Tempts Eve in the garden narrative.' },
      { id: 'Adam', label: 'Adam', initial: 'A', avatar: 'assets/images/people/adam.png', x: 190, y: 145, chapters: 'Genesis 3–5', note: 'Husband of Eve and father of Cain, Abel, and Seth.' },
      { id: 'Eve', label: 'Eve', initial: 'E', avatar: 'assets/images/people/eve.png', x: 310, y: 145, chapters: 'Genesis 3–4', note: 'Wife of Adam and mother of Cain, Abel, and Seth.' },
      { id: 'Cain', label: 'Cain', initial: 'C', avatar: 'assets/images/people/cain.png', x: 130, y: 285, chapters: 'Genesis 4', note: 'First son of Adam and Eve, brother of Abel.' },
      { id: 'Abel', label: 'Abel', initial: 'A', avatar: 'assets/images/people/abel.png', x: 230, y: 285, chapters: 'Genesis 4', note: 'Son of Adam and Eve, murdered by Cain.' },
      { id: 'Seth', label: 'Seth', initial: 'S', avatar: 'assets/images/people/seth.png', x: 330, y: 285, chapters: 'Genesis 4–5', note: 'Son of Adam and Eve through whom the later line to Noah is traced.' }
    ],
    links: [
      { from: 'Adam', to: 'Eve', type: 'spouse' },
      { from: 'Serpent', to: 'Eve', type: 'event' },
      { from: 'God', to: 'Adam', type: 'divine' },
      { from: 'God', to: 'Eve', type: 'divine' },
      { from: 'Adam', to: 'Cain', type: 'parent' },
      { from: 'Eve', to: 'Cain', type: 'parent' },
      { from: 'Adam', to: 'Abel', type: 'parent' },
      { from: 'Eve', to: 'Abel', type: 'parent' },
      { from: 'Adam', to: 'Seth', type: 'parent' },
      { from: 'Eve', to: 'Seth', type: 'parent' }
    ]
  },
  noah: {
    title: 'Noah',
    range: 'Genesis 6–9',
    opening: 'These are the generations of Noah. Noah was a righteous man, blameless among the people of his time.',
    summary: 'The flood story centers on Noah, his wife, his three sons, and the renewed human family after the covenant.',
    width: 460,
    height: 360,
    focus: 'Noah',
    nodes: [
      { id: 'Lamech', label: 'Lamech', initial: 'L', x: 230, y: 50, chapters: 'Genesis 5', note: 'Father of Noah in the line from Seth.' },
      { id: 'Noah', label: 'Noah', initial: 'N', x: 175, y: 145, chapters: 'Genesis 5–10', note: 'Righteous man preserved through the flood and recipient of God’s covenant.' },
      { id: 'NoahsWife', label: 'Noah’s wife', initial: 'W', x: 295, y: 145, chapters: 'Genesis 6–8', note: 'Unnamed wife of Noah and mother of his three sons.' },
      { id: 'Shem', label: 'Shem', initial: 'S', x: 115, y: 285, chapters: 'Genesis 6–11', note: 'Son of Noah and ancestor in the line toward Abraham.' },
      { id: 'Ham', label: 'Ham', initial: 'H', x: 230, y: 285, chapters: 'Genesis 6–10', note: 'Son of Noah and father of Canaan.' },
      { id: 'Japheth', label: 'Japheth', initial: 'J', x: 345, y: 285, chapters: 'Genesis 6–10', note: 'Son of Noah, named in the table of nations.' }
    ],
    links: [
      { from: 'Lamech', to: 'Noah', type: 'parent' },
      { from: 'Noah', to: 'NoahsWife', type: 'spouse' },
      { from: 'Noah', to: 'Shem', type: 'parent' },
      { from: 'NoahsWife', to: 'Shem', type: 'parent' },
      { from: 'Noah', to: 'Ham', type: 'parent' },
      { from: 'NoahsWife', to: 'Ham', type: 'parent' },
      { from: 'Noah', to: 'Japheth', type: 'parent' },
      { from: 'NoahsWife', to: 'Japheth', type: 'parent' }
    ]
  },
  babel: {
    title: 'Nations Begin',
    range: 'Genesis 10–11',
    opening: 'Now this is the history of the generations of the sons of Noah and of Shem, Ham, and Japheth.',
    summary: 'Genesis moves from Noah’s sons to the nations, Babel, and the line that leads to Abram.',
    width: 720,
    height: 460,
    focus: 'Shem',
    nodes: [
      { id: 'Noah', label: 'Noah', initial: 'N', x: 360, y: 48, chapters: 'Genesis 5–10', note: 'Father of Shem, Ham, and Japheth.' },
      { id: 'Shem', label: 'Shem', initial: 'S', x: 170, y: 140, chapters: 'Genesis 10–11', note: 'Son of Noah; his line is traced toward Abraham.' },
      { id: 'Ham', label: 'Ham', initial: 'H', x: 360, y: 140, chapters: 'Genesis 10', note: 'Son of Noah; father of Cush, Mizraim, Put, and Canaan.' },
      { id: 'Japheth', label: 'Japheth', initial: 'J', x: 550, y: 140, chapters: 'Genesis 10', note: 'Son of Noah; ancestor of northern and maritime peoples in the table of nations.' },
      { id: 'Arpachshad', label: 'Arpachshad', initial: 'A', x: 170, y: 235, chapters: 'Genesis 10–11', note: 'Descendant of Shem in the line toward Abram.' },
      { id: 'Cush', label: 'Cush', initial: 'C', x: 315, y: 235, chapters: 'Genesis 10', note: 'Son of Ham and father of Nimrod.' },
      { id: 'Canaan', label: 'Canaan', initial: 'C', x: 425, y: 235, chapters: 'Genesis 10', note: 'Son of Ham; ancestor of the Canaanite peoples.' },
      { id: 'Nimrod', label: 'Nimrod', initial: 'N', x: 315, y: 340, chapters: 'Genesis 10', note: 'Mighty figure associated with Babel and kingdoms in Shinar.' },
      { id: 'Terah', label: 'Terah', initial: 'T', x: 170, y: 340, chapters: 'Genesis 11', note: 'Descendant of Shem and father of Abram, Nahor, and Haran.' },
      { id: 'Abram', label: 'Abram', initial: 'A', x: 100, y: 430, chapters: 'Genesis 11–17', note: 'Son of Terah, later named Abraham.' },
      { id: 'Nahor', label: 'Nahor', initial: 'N', x: 170, y: 430, chapters: 'Genesis 11, 22, 24', note: 'Son of Terah and brother of Abram.' },
      { id: 'Haran', label: 'Haran', initial: 'H', x: 240, y: 430, chapters: 'Genesis 11', note: 'Son of Terah and father of Lot.' }
    ],
    links: [
      { from: 'Noah', to: 'Shem', type: 'parent' },
      { from: 'Noah', to: 'Ham', type: 'parent' },
      { from: 'Noah', to: 'Japheth', type: 'parent' },
      { from: 'Shem', to: 'Arpachshad', type: 'parent' },
      { from: 'Ham', to: 'Cush', type: 'parent' },
      { from: 'Ham', to: 'Canaan', type: 'parent' },
      { from: 'Cush', to: 'Nimrod', type: 'parent' },
      { from: 'Arpachshad', to: 'Terah', type: 'lineage' },
      { from: 'Terah', to: 'Abram', type: 'parent' },
      { from: 'Terah', to: 'Nahor', type: 'parent' },
      { from: 'Terah', to: 'Haran', type: 'parent' }
    ]
  },
  abraham: {
    title: 'Abraham',
    range: 'Genesis 12–25',
    opening: 'Now the LORD had said to Abram, “Go from your country, your people, and your father’s house to the land I will show you.”',
    summary: 'The promise moves through Abraham, Sarah, Hagar, Ishmael, Isaac, Lot, and the wider household of Terah.',
    width: 760,
    height: 640,
    focus: 'Abraham',
    nodes: [
      { id: 'Terah', label: 'Terah', initial: 'T', x: 380, y: 46, chapters: 'Genesis 11', note: 'Father of Abram, Nahor, and Haran.' },
      { id: 'Haran', label: 'Haran', initial: 'H', x: 160, y: 170, chapters: 'Genesis 11', note: 'Brother of Abram and father of Lot.' },
      { id: 'Abraham', label: 'Abraham', initial: 'A', x: 380, y: 170, chapters: 'Genesis 11–25', note: 'Formerly Abram, central figure of the covenant promise.' },
      { id: 'Lot', label: 'Lot', initial: 'L', x: 160, y: 320, chapters: 'Genesis 11–19', note: 'Nephew of Abraham, separated from him and later rescued.' },
      { id: 'Hagar', label: 'Hagar', initial: 'H', x: 270, y: 320, chapters: 'Genesis 16, 21', note: 'Mother of Ishmael.' },
      { id: 'Sarah', label: 'Sarah', initial: 'S', x: 380, y: 320, chapters: 'Genesis 11–23', note: 'Wife of Abraham and mother of Isaac.' },
      { id: 'Keturah', label: 'Keturah', initial: 'K', x: 490, y: 320, chapters: 'Genesis 25', note: 'Later wife of Abraham and mother of additional sons.' },
      { id: 'Ishmael', label: 'Ishmael', initial: 'I', x: 270, y: 500, chapters: 'Genesis 16–25', note: 'Son of Abraham and Hagar.' },
      { id: 'Isaac', label: 'Isaac', initial: 'I', x: 380, y: 500, chapters: 'Genesis 17–35', note: 'Son of Abraham and Sarah, child of the promise.' },
      { id: 'Midian', label: 'Midian', initial: 'M', x: 490, y: 500, chapters: 'Genesis 25', note: 'One of Abraham’s sons through Keturah.' }
    ],
    links: [
      { from: 'Terah', to: 'Abraham', type: 'parent' },
      { from: 'Terah', to: 'Haran', type: 'parent' },
      { from: 'Haran', to: 'Lot', type: 'parent' },
      { from: 'Abraham', to: 'Hagar', type: 'spouse' },
      { from: 'Abraham', to: 'Sarah', type: 'spouse' },
      { from: 'Abraham', to: 'Keturah', type: 'spouse' },
      { from: 'Abraham', to: 'Ishmael', type: 'parent' },
      { from: 'Hagar', to: 'Ishmael', type: 'parent' },
      { from: 'Abraham', to: 'Isaac', type: 'parent' },
      { from: 'Sarah', to: 'Isaac', type: 'parent' },
      { from: 'Abraham', to: 'Midian', type: 'parent' },
      { from: 'Keturah', to: 'Midian', type: 'parent' }
    ]
  },
  isaac: {
    title: 'Isaac',
    range: 'Genesis 21–27',
    opening: 'The LORD visited Sarah as he had said, and did for Sarah what he had promised.',
    summary: 'Isaac receives the promise, marries Rebekah, and becomes father of the rival twins Jacob and Esau.',
    width: 500,
    height: 390,
    focus: 'Isaac',
    nodes: [
      { id: 'Abraham', label: 'Abraham', initial: 'A', x: 160, y: 52, chapters: 'Genesis 11–25', note: 'Father of Isaac.' },
      { id: 'Sarah', label: 'Sarah', initial: 'S', x: 285, y: 52, chapters: 'Genesis 11–23', note: 'Mother of Isaac.' },
      { id: 'Isaac', label: 'Isaac', initial: 'I', x: 220, y: 160, chapters: 'Genesis 17–35', note: 'Son of Abraham and Sarah, husband of Rebekah.' },
      { id: 'Rebekah', label: 'Rebekah', initial: 'R', x: 345, y: 160, chapters: 'Genesis 22–49', note: 'Wife of Isaac and mother of Jacob and Esau.' },
      { id: 'Esau', label: 'Esau', initial: 'E', x: 170, y: 310, chapters: 'Genesis 25–36', note: 'Firstborn son of Isaac and Rebekah, ancestor of Edom.' },
      { id: 'Jacob', label: 'Jacob', initial: 'J', x: 325, y: 310, chapters: 'Genesis 25–50', note: 'Son of Isaac and Rebekah, later named Israel.' }
    ],
    links: [
      { from: 'Abraham', to: 'Sarah', type: 'spouse' },
      { from: 'Abraham', to: 'Isaac', type: 'parent' },
      { from: 'Sarah', to: 'Isaac', type: 'parent' },
      { from: 'Isaac', to: 'Rebekah', type: 'spouse' },
      { from: 'Isaac', to: 'Esau', type: 'parent' },
      { from: 'Rebekah', to: 'Esau', type: 'parent' },
      { from: 'Isaac', to: 'Jacob', type: 'parent' },
      { from: 'Rebekah', to: 'Jacob', type: 'parent' }
    ]
  },
  jacob: {
    title: 'Jacob',
    range: 'Genesis 25–36',
    opening: 'This is the history of the generations of Isaac, Abraham’s son. Abraham became the father of Isaac.',
    summary: 'Jacob becomes Israel, marries Leah and Rachel, and fathers the children who become the tribes of Israel.',
    width: 980,
    height: 860,
    focus: 'Jacob',
    nodes: [
      { id: 'Isaac', label: 'Isaac', initial: 'I', x: 380, y: 42, chapters: 'Genesis 17–35', note: 'Father of Jacob and Esau.' },
      { id: 'Rebekah', label: 'Rebekah', initial: 'R', x: 520, y: 42, chapters: 'Genesis 22–49', note: 'Mother of Jacob and Esau.' },
      { id: 'Esau', label: 'Esau', initial: 'E', x: 250, y: 165, chapters: 'Genesis 25–36', note: 'Brother of Jacob and ancestor of Edom.' },
      { id: 'Jacob', label: 'Jacob', initial: 'J', x: 520, y: 165, chapters: 'Genesis 25–50', note: 'Also named Israel, father of the twelve sons.' },
      { id: 'Leah', label: 'Leah', initial: 'L', x: 170, y: 330, chapters: 'Genesis 29–49', note: 'Wife of Jacob and mother of Reuben, Simeon, Levi, Judah, Issachar, Zebulun, and Dinah.' },
      { id: 'Rachel', label: 'Rachel', initial: 'R', x: 390, y: 330, chapters: 'Genesis 29–48', note: 'Wife of Jacob and mother of Joseph and Benjamin.' },
      { id: 'Bilhah', label: 'Bilhah', initial: 'B', x: 610, y: 330, chapters: 'Genesis 29–35', note: 'Mother of Dan and Naphtali.' },
      { id: 'Zilpah', label: 'Zilpah', initial: 'Z', x: 830, y: 330, chapters: 'Genesis 29–35', note: 'Mother of Gad and Asher.' },
      { id: 'Reuben', label: 'Reuben', initial: 'R', x: 80, y: 500, chapters: 'Genesis 29–49', note: 'Firstborn son of Jacob and Leah.' },
      { id: 'Simeon', label: 'Simeon', initial: 'S', x: 170, y: 500, chapters: 'Genesis 29–49', note: 'Son of Jacob and Leah.' },
      { id: 'Levi', label: 'Levi', initial: 'L', x: 260, y: 500, chapters: 'Genesis 29–49', note: 'Son of Jacob and Leah.' },
      { id: 'Joseph', label: 'Joseph', initial: 'J', x: 345, y: 500, chapters: 'Genesis 30–50', note: 'Son of Jacob and Rachel.' },
      { id: 'Benjamin', label: 'Benjamin', initial: 'B', x: 435, y: 500, chapters: 'Genesis 35–49', note: 'Son of Jacob and Rachel.' },
      { id: 'Dan', label: 'Dan', initial: 'D', x: 565, y: 500, chapters: 'Genesis 30–49', note: 'Son of Jacob and Bilhah.' },
      { id: 'Naphtali', label: 'Naphtali', initial: 'N', x: 655, y: 500, chapters: 'Genesis 30–49', note: 'Son of Jacob and Bilhah.' },
      { id: 'Gad', label: 'Gad', initial: 'G', x: 785, y: 500, chapters: 'Genesis 30–49', note: 'Son of Jacob and Zilpah.' },
      { id: 'Asher', label: 'Asher', initial: 'A', x: 875, y: 500, chapters: 'Genesis 30–49', note: 'Son of Jacob and Zilpah.' },
      { id: 'Judah', label: 'Judah', initial: 'J', x: 80, y: 675, chapters: 'Genesis 29–49', note: 'Son of Jacob and Leah, prominent in the Joseph narrative.' },
      { id: 'Issachar', label: 'Issachar', initial: 'I', x: 170, y: 675, chapters: 'Genesis 30–49', note: 'Son of Jacob and Leah.' },
      { id: 'Zebulun', label: 'Zebulun', initial: 'Z', x: 260, y: 675, chapters: 'Genesis 30–49', note: 'Son of Jacob and Leah.' },
      { id: 'Dinah', label: 'Dinah', initial: 'D', x: 350, y: 675, chapters: 'Genesis 30, 34', note: 'Daughter of Jacob and Leah.' }
    ],
    links: [
      { from: 'Isaac', to: 'Rebekah', type: 'spouse' },
      { from: 'Isaac', to: 'Esau', type: 'parent' },
      { from: 'Rebekah', to: 'Esau', type: 'parent' },
      { from: 'Isaac', to: 'Jacob', type: 'parent' },
      { from: 'Rebekah', to: 'Jacob', type: 'parent' },
      { from: 'Jacob', to: 'Leah', type: 'spouse' },
      { from: 'Jacob', to: 'Rachel', type: 'spouse' },
      { from: 'Jacob', to: 'Bilhah', type: 'spouse' },
      { from: 'Jacob', to: 'Zilpah', type: 'spouse' },
      ...['Reuben','Simeon','Levi','Judah','Issachar','Zebulun','Dinah'].flatMap(child => [{ from: 'Jacob', to: child, type: 'parent' }, { from: 'Leah', to: child, type: 'parent' }]),
      ...['Joseph','Benjamin'].flatMap(child => [{ from: 'Jacob', to: child, type: 'parent' }, { from: 'Rachel', to: child, type: 'parent' }]),
      ...['Dan','Naphtali'].flatMap(child => [{ from: 'Jacob', to: child, type: 'parent' }, { from: 'Bilhah', to: child, type: 'parent' }]),
      ...['Gad','Asher'].flatMap(child => [{ from: 'Jacob', to: child, type: 'parent' }, { from: 'Zilpah', to: child, type: 'parent' }])
    ]
  },
  joseph: {
    title: 'Joseph',
    range: 'Genesis 37–50',
    opening: 'This is the history of the generations of Jacob. Joseph, being seventeen years old, was feeding the flock with his brothers.',
    summary: 'Joseph’s story follows Jacob’s household into Egypt and closes with Ephraim and Manasseh brought into the family blessing.',
    width: 920,
    height: 760,
    focus: 'Joseph',
    nodes: [
      { id: 'Jacob', label: 'Jacob', initial: 'J', x: 460, y: 46, chapters: 'Genesis 25–50', note: 'Father of Joseph and his brothers, later named Israel.' },
      { id: 'Leah', label: 'Leah', initial: 'L', x: 170, y: 180, chapters: 'Genesis 29–49', note: 'Mother of several of Joseph’s brothers.' },
      { id: 'Rachel', label: 'Rachel', initial: 'R', x: 390, y: 180, chapters: 'Genesis 29–48', note: 'Mother of Joseph and Benjamin.' },
      { id: 'Bilhah', label: 'Bilhah', initial: 'B', x: 610, y: 180, chapters: 'Genesis 29–35', note: 'Mother of Dan and Naphtali.' },
      { id: 'Zilpah', label: 'Zilpah', initial: 'Z', x: 830, y: 180, chapters: 'Genesis 29–35', note: 'Mother of Gad and Asher.' },
      { id: 'Judah', label: 'Judah', initial: 'J', x: 170, y: 370, chapters: 'Genesis 29–49', note: 'Brother of Joseph, whose line is highlighted in Genesis 38 and 49.' },
      { id: 'Brothers', label: 'Brothers', initial: 'B', x: 310, y: 370, chapters: 'Genesis 37–50', note: 'Joseph’s brothers as a grouped line in the narrative.' },
      { id: 'Joseph', label: 'Joseph', initial: 'J', x: 460, y: 370, chapters: 'Genesis 30–50', note: 'Son of Jacob and Rachel, sold into Egypt and later raised to power.' },
      { id: 'Benjamin', label: 'Benjamin', initial: 'B', x: 610, y: 370, chapters: 'Genesis 35–49', note: 'Younger brother of Joseph and son of Rachel.' },
      { id: 'Perez', label: 'Perez', initial: 'P', x: 120, y: 565, chapters: 'Genesis 38, 46', note: 'Son of Judah and Tamar.' },
      { id: 'Zerah', label: 'Zerah', initial: 'Z', x: 220, y: 565, chapters: 'Genesis 38, 46', note: 'Son of Judah and Tamar.' },
      { id: 'Asenath', label: 'Asenath', initial: 'A', x: 620, y: 565, chapters: 'Genesis 41, 46', note: 'Wife of Joseph and mother of Manasseh and Ephraim.' },
      { id: 'Manasseh', label: 'Manasseh', initial: 'M', x: 545, y: 710, chapters: 'Genesis 41, 48', note: 'Son of Joseph and Asenath, blessed by Jacob.' },
      { id: 'Ephraim', label: 'Ephraim', initial: 'E', x: 695, y: 710, chapters: 'Genesis 41, 48', note: 'Son of Joseph and Asenath, blessed by Jacob before Manasseh.' }
    ],
    links: [
      { from: 'Jacob', to: 'Leah', type: 'spouse' },
      { from: 'Jacob', to: 'Rachel', type: 'spouse' },
      { from: 'Jacob', to: 'Bilhah', type: 'spouse' },
      { from: 'Jacob', to: 'Zilpah', type: 'spouse' },
      { from: 'Jacob', to: 'Judah', type: 'parent' },
      { from: 'Leah', to: 'Judah', type: 'parent' },
      { from: 'Jacob', to: 'Brothers', type: 'parent' },
      { from: 'Jacob', to: 'Joseph', type: 'parent' },
      { from: 'Rachel', to: 'Joseph', type: 'parent' },
      { from: 'Jacob', to: 'Benjamin', type: 'parent' },
      { from: 'Rachel', to: 'Benjamin', type: 'parent' },
      { from: 'Joseph', to: 'Asenath', type: 'spouse' },
      { from: 'Judah', to: 'Perez', type: 'parent' },
      { from: 'Judah', to: 'Zerah', type: 'parent' },
      { from: 'Joseph', to: 'Manasseh', type: 'parent' },
      { from: 'Asenath', to: 'Manasseh', type: 'parent' },
      { from: 'Joseph', to: 'Ephraim', type: 'parent' },
      { from: 'Asenath', to: 'Ephraim', type: 'parent' }
    ]
  }
};


// Chapter-by-chapter family data for Genesis.
// Purpose: this is the data layer. The renderer can later compute a tree from
// the people and relationship edges for one chapter, or for a chapter range.

const GENESIS_PEOPLE = {
  God: { id: 'God', label: 'God', kind: 'divine' },
  Humanity: { id: 'Humanity', label: 'Humanity', kind: 'group' },
  Adam: { id: 'Adam', label: 'Adam', kind: 'person' },
  Eve: { id: 'Eve', label: 'Eve', kind: 'person' },
  Cain: { id: 'Cain', label: 'Cain', kind: 'person' },
  Abel: { id: 'Abel', label: 'Abel', kind: 'person' },
  Seth: { id: 'Seth', label: 'Seth', kind: 'person' },
  Enosh: { id: 'Enosh', label: 'Enosh', kind: 'person' },
  CainLine: { id: 'CainLine', label: 'Line of Cain', kind: 'group' },
  SethLine: { id: 'SethLine', label: 'Line of Seth', kind: 'group' },
  EnochCain: { id: 'EnochCain', label: 'Enoch, son of Cain', kind: 'person' },
  Irad: { id: 'Irad', label: 'Irad', kind: 'person' },
  Mehujael: { id: 'Mehujael', label: 'Mehujael', kind: 'person' },
  Methushael: { id: 'Methushael', label: 'Methushael', kind: 'person' },
  LamechCain: { id: 'LamechCain', label: 'Lamech, Cain line', kind: 'person' },
  Adah: { id: 'Adah', label: 'Adah', kind: 'person' },
  Zillah: { id: 'Zillah', label: 'Zillah', kind: 'person' },
  Jabal: { id: 'Jabal', label: 'Jabal', kind: 'person' },
  Jubal: { id: 'Jubal', label: 'Jubal', kind: 'person' },
  TubalCain: { id: 'TubalCain', label: 'Tubal-cain', kind: 'person' },
  Naamah: { id: 'Naamah', label: 'Naamah', kind: 'person' },
  Kenan: { id: 'Kenan', label: 'Kenan', kind: 'person' },
  Mahalalel: { id: 'Mahalalel', label: 'Mahalalel', kind: 'person' },
  Jared: { id: 'Jared', label: 'Jared', kind: 'person' },
  EnochSeth: { id: 'EnochSeth', label: 'Enoch, Seth line', kind: 'person' },
  Methuselah: { id: 'Methuselah', label: 'Methuselah', kind: 'person' },
  LamechNoahFather: { id: 'LamechNoahFather', label: 'Lamech, father of Noah', kind: 'person' },
  Noah: { id: 'Noah', label: 'Noah', kind: 'person' },
  NoahsWife: { id: 'NoahsWife', label: 'Noah’s wife', kind: 'person' },
  Shem: { id: 'Shem', label: 'Shem', kind: 'person' },
  Ham: { id: 'Ham', label: 'Ham', kind: 'person' },
  Japheth: { id: 'Japheth', label: 'Japheth', kind: 'person' },
  Canaan: { id: 'Canaan', label: 'Canaan', kind: 'person' },
  JaphethLine: { id: 'JaphethLine', label: 'Line of Japheth', kind: 'group' },
  HamLine: { id: 'HamLine', label: 'Line of Ham', kind: 'group' },
  ShemLine: { id: 'ShemLine', label: 'Line of Shem', kind: 'group' },
  Cush: { id: 'Cush', label: 'Cush', kind: 'person' },
  Mizraim: { id: 'Mizraim', label: 'Mizraim', kind: 'person' },
  Put: { id: 'Put', label: 'Put', kind: 'person' },
  Nimrod: { id: 'Nimrod', label: 'Nimrod', kind: 'person' },
  Arpachshad: { id: 'Arpachshad', label: 'Arpachshad', kind: 'person' },
  Shelah: { id: 'Shelah', label: 'Shelah', kind: 'person' },
  Eber: { id: 'Eber', label: 'Eber', kind: 'person' },
  Peleg: { id: 'Peleg', label: 'Peleg', kind: 'person' },
  Reu: { id: 'Reu', label: 'Reu', kind: 'person' },
  Serug: { id: 'Serug', label: 'Serug', kind: 'person' },
  NahorAncestor: { id: 'NahorAncestor', label: 'Nahor, ancestor of Abram', kind: 'person' },
  Terah: { id: 'Terah', label: 'Terah', kind: 'person' },
  Abram: { id: 'Abram', label: 'Abram', kind: 'person' },
  Abraham: { id: 'Abraham', label: 'Abraham', kind: 'person' },
  Sarai: { id: 'Sarai', label: 'Sarai', kind: 'person' },
  Sarah: { id: 'Sarah', label: 'Sarah', kind: 'person' },
  NahorBrother: { id: 'NahorBrother', label: 'Nahor, brother of Abraham', kind: 'person' },
  Haran: { id: 'Haran', label: 'Haran', kind: 'person' },
  Lot: { id: 'Lot', label: 'Lot', kind: 'person' },
  Milcah: { id: 'Milcah', label: 'Milcah', kind: 'person' },
  Bethuel: { id: 'Bethuel', label: 'Bethuel', kind: 'person' },
  Laban: { id: 'Laban', label: 'Laban', kind: 'person' },
  Rebekah: { id: 'Rebekah', label: 'Rebekah', kind: 'person' },
  Hagar: { id: 'Hagar', label: 'Hagar', kind: 'person' },
  Ishmael: { id: 'Ishmael', label: 'Ishmael', kind: 'person' },
  IshmaelLine: { id: 'IshmaelLine', label: 'Line of Ishmael', kind: 'group' },
  Isaac: { id: 'Isaac', label: 'Isaac', kind: 'person' },
  Keturah: { id: 'Keturah', label: 'Keturah', kind: 'person' },
  KeturahSons: { id: 'KeturahSons', label: 'Sons of Keturah', kind: 'group' },
  Moab: { id: 'Moab', label: 'Moab', kind: 'person' },
  BenAmmi: { id: 'BenAmmi', label: 'Ben-ammi', kind: 'person' },
  Jacob: { id: 'Jacob', label: 'Jacob', kind: 'person' },
  Israel: { id: 'Israel', label: 'Israel', kind: 'person' },
  Esau: { id: 'Esau', label: 'Esau', kind: 'person' },
  Edom: { id: 'Edom', label: 'Edom', kind: 'person' },
  Leah: { id: 'Leah', label: 'Leah', kind: 'person' },
  Rachel: { id: 'Rachel', label: 'Rachel', kind: 'person' },
  Bilhah: { id: 'Bilhah', label: 'Bilhah', kind: 'person' },
  Zilpah: { id: 'Zilpah', label: 'Zilpah', kind: 'person' },
  Reuben: { id: 'Reuben', label: 'Reuben', kind: 'person' },
  Simeon: { id: 'Simeon', label: 'Simeon', kind: 'person' },
  Levi: { id: 'Levi', label: 'Levi', kind: 'person' },
  Judah: { id: 'Judah', label: 'Judah', kind: 'person' },
  Dan: { id: 'Dan', label: 'Dan', kind: 'person' },
  Naphtali: { id: 'Naphtali', label: 'Naphtali', kind: 'person' },
  Gad: { id: 'Gad', label: 'Gad', kind: 'person' },
  Asher: { id: 'Asher', label: 'Asher', kind: 'person' },
  Issachar: { id: 'Issachar', label: 'Issachar', kind: 'person' },
  Zebulun: { id: 'Zebulun', label: 'Zebulun', kind: 'person' },
  Dinah: { id: 'Dinah', label: 'Dinah', kind: 'person' },
  Joseph: { id: 'Joseph', label: 'Joseph', kind: 'person' },
  Benjamin: { id: 'Benjamin', label: 'Benjamin', kind: 'person' },
  Shechem: { id: 'Shechem', label: 'Shechem', kind: 'person' },
  Hamor: { id: 'Hamor', label: 'Hamor', kind: 'person' },
  EsauWives: { id: 'EsauWives', label: 'Esau’s wives', kind: 'group' },
  EsauSons: { id: 'EsauSons', label: 'Sons of Esau', kind: 'group' },
  EdomiteChiefs: { id: 'EdomiteChiefs', label: 'Edomite chiefs', kind: 'group' },
  Tamar: { id: 'Tamar', label: 'Tamar', kind: 'person' },
  Er: { id: 'Er', label: 'Er', kind: 'person' },
  Onan: { id: 'Onan', label: 'Onan', kind: 'person' },
  ShelahJudah: { id: 'ShelahJudah', label: 'Shelah, son of Judah', kind: 'person' },
  Perez: { id: 'Perez', label: 'Perez', kind: 'person' },
  Zerah: { id: 'Zerah', label: 'Zerah', kind: 'person' },
  Potiphar: { id: 'Potiphar', label: 'Potiphar', kind: 'person' },
  Pharaoh: { id: 'Pharaoh', label: 'Pharaoh', kind: 'person' },
  Asenath: { id: 'Asenath', label: 'Asenath', kind: 'person' },
  Manasseh: { id: 'Manasseh', label: 'Manasseh', kind: 'person' },
  Ephraim: { id: 'Ephraim', label: 'Ephraim', kind: 'person' },
  JacobHousehold: { id: 'JacobHousehold', label: 'Household of Jacob', kind: 'group' },
  Brothers: { id: 'Brothers', label: 'Joseph’s brothers', kind: 'group' }
};

const GENESIS_GLOBAL_RELATIONS = [
  ['God','Humanity','created'],
  ['God','Adam','created'], ['God','Eve','created'], ['Adam','Eve','spouse'],
  ['Adam','Cain','parent'], ['Eve','Cain','parent'], ['Adam','Abel','parent'], ['Eve','Abel','parent'], ['Adam','Seth','parent'], ['Eve','Seth','parent'],
  ['Cain','EnochCain','parent'], ['EnochCain','Irad','parent'], ['Irad','Mehujael','parent'], ['Mehujael','Methushael','parent'], ['Methushael','LamechCain','parent'], ['LamechCain','Adah','spouse'], ['LamechCain','Zillah','spouse'], ['LamechCain','Jabal','parent'], ['Adah','Jabal','parent'], ['LamechCain','Jubal','parent'], ['Adah','Jubal','parent'], ['LamechCain','TubalCain','parent'], ['Zillah','TubalCain','parent'], ['LamechCain','Naamah','parent'], ['Zillah','Naamah','parent'],
  ['Seth','Enosh','parent'], ['Enosh','Kenan','parent'], ['Kenan','Mahalalel','parent'], ['Mahalalel','Jared','parent'], ['Jared','EnochSeth','parent'], ['EnochSeth','Methuselah','parent'], ['Methuselah','LamechNoahFather','parent'], ['LamechNoahFather','Noah','parent'],
  ['Noah','NoahsWife','spouse'], ['Noah','Shem','parent'], ['NoahsWife','Shem','parent'], ['Noah','Ham','parent'], ['NoahsWife','Ham','parent'], ['Noah','Japheth','parent'], ['NoahsWife','Japheth','parent'], ['Ham','Canaan','parent'],
  ['Japheth','JaphethLine','parent'], ['Ham','HamLine','parent'], ['Shem','ShemLine','parent'], ['Ham','Cush','parent'], ['Ham','Mizraim','parent'], ['Ham','Put','parent'], ['Ham','Canaan','parent'], ['Cush','Nimrod','parent'],
  ['Shem','Arpachshad','parent'], ['Arpachshad','Shelah','parent'], ['Shelah','Eber','parent'], ['Eber','Peleg','parent'], ['Peleg','Reu','parent'], ['Reu','Serug','parent'], ['Serug','NahorAncestor','parent'], ['NahorAncestor','Terah','parent'],
  ['Terah','Abram','parent'], ['Terah','NahorBrother','parent'], ['Terah','Haran','parent'], ['Haran','Lot','parent'], ['Haran','Milcah','parent'], ['Abram','Sarai','spouse'], ['Abraham','Sarah','spouse'], ['NahorBrother','Milcah','spouse'], ['NahorBrother','Bethuel','parent'], ['Milcah','Bethuel','parent'], ['Bethuel','Laban','parent'], ['Bethuel','Rebekah','parent'],
  ['Abraham','Hagar','spouse'], ['Abraham','Ishmael','parent'], ['Hagar','Ishmael','parent'], ['Abraham','Isaac','parent'], ['Sarah','Isaac','parent'], ['Abraham','Keturah','spouse'], ['Abraham','KeturahSons','parent'], ['Keturah','KeturahSons','parent'], ['Ishmael','IshmaelLine','parent'],
  ['Lot','Moab','parent'], ['Lot','BenAmmi','parent'],
  ['Isaac','Rebekah','spouse'], ['Isaac','Jacob','parent'], ['Rebekah','Jacob','parent'], ['Isaac','Esau','parent'], ['Rebekah','Esau','parent'], ['Esau','EsauWives','spouse'], ['Esau','EsauSons','parent'], ['Esau','EdomiteChiefs','lineage'],
  ['Jacob','Leah','spouse'], ['Jacob','Rachel','spouse'], ['Jacob','Bilhah','spouse'], ['Jacob','Zilpah','spouse'],
  ['Jacob','Reuben','parent'], ['Leah','Reuben','parent'], ['Jacob','Simeon','parent'], ['Leah','Simeon','parent'], ['Jacob','Levi','parent'], ['Leah','Levi','parent'], ['Jacob','Judah','parent'], ['Leah','Judah','parent'], ['Jacob','Issachar','parent'], ['Leah','Issachar','parent'], ['Jacob','Zebulun','parent'], ['Leah','Zebulun','parent'], ['Jacob','Dinah','parent'], ['Leah','Dinah','parent'],
  ['Jacob','Dan','parent'], ['Bilhah','Dan','parent'], ['Jacob','Naphtali','parent'], ['Bilhah','Naphtali','parent'], ['Jacob','Gad','parent'], ['Zilpah','Gad','parent'], ['Jacob','Asher','parent'], ['Zilpah','Asher','parent'], ['Jacob','Joseph','parent'], ['Rachel','Joseph','parent'], ['Jacob','Benjamin','parent'], ['Rachel','Benjamin','parent'], ['Jacob','Brothers','parent'],
  ['Hamor','Shechem','parent'], ['Judah','Tamar','spouse'], ['Judah','Er','parent'], ['Judah','Onan','parent'], ['Judah','ShelahJudah','parent'], ['Judah','Perez','parent'], ['Tamar','Perez','parent'], ['Judah','Zerah','parent'], ['Tamar','Zerah','parent'],
  ['Joseph','Asenath','spouse'], ['Joseph','Manasseh','parent'], ['Asenath','Manasseh','parent'], ['Joseph','Ephraim','parent'], ['Asenath','Ephraim','parent'], ['Jacob','JacobHousehold','parent']
].map(([from, to, type]) => ({ from, to, type }));

const GENESIS_CHAPTER_FAMILIES = {
  1: { title: 'Creation of Humanity', reference: 'Genesis 1', opening: 'In the beginning God created the heaven and the earth.', families: ['Creation', 'Humanity'], people: ['God','Humanity'], focus: 'Humanity' },
  2: { title: 'Adam and Eve', reference: 'Genesis 2', opening: 'Thus the heavens and the earth were finished, and all the host of them.', families: ['First human household'], people: ['God','Adam','Eve'], focus: 'Adam' },
  3: { title: 'The Fall', reference: 'Genesis 3', opening: 'Now the serpent was more subtil than any beast of the field.', families: ['Adam and Eve'], people: ['God','Adam','Eve'], extraPeople: ['Serpent'], focus: 'Eve' },
  4: { title: 'Cain, Abel, and Seth', reference: 'Genesis 4', opening: 'And Adam knew Eve his wife; and she conceived, and bare Cain.', families: ['Adam and Eve', 'Line of Cain', 'Line of Seth'], people: ['Adam','Eve','Cain','Abel','Seth','Enosh','EnochCain','Irad','Mehujael','Methushael','LamechCain','Adah','Zillah','Jabal','Jubal','TubalCain','Naamah'], focus: 'Cain' },
  5: { title: 'Adam to Noah', reference: 'Genesis 5', opening: 'This is the book of the generations of Adam.', families: ['Line of Seth', 'Household of Noah'], people: ['Adam','Seth','Enosh','Kenan','Mahalalel','Jared','EnochSeth','Methuselah','LamechNoahFather','Noah','Shem','Ham','Japheth'], focus: 'Noah' },
  6: { title: 'Noah Before the Flood', reference: 'Genesis 6', opening: 'And it came to pass, when men began to multiply on the face of the earth.', families: ['Household of Noah'], people: ['Noah','NoahsWife','Shem','Ham','Japheth'], focus: 'Noah' },
  7: { title: 'Noah Enters the Ark', reference: 'Genesis 7', opening: 'And the LORD said unto Noah, Come thou and all thy house into the ark.', families: ['Household of Noah'], people: ['Noah','NoahsWife','Shem','Ham','Japheth'], focus: 'Noah' },
  8: { title: 'Noah Leaves the Ark', reference: 'Genesis 8', opening: 'And God remembered Noah, and every living thing.', families: ['Household of Noah'], people: ['Noah','NoahsWife','Shem','Ham','Japheth'], focus: 'Noah' },
  9: { title: 'Covenant With Noah', reference: 'Genesis 9', opening: 'And God blessed Noah and his sons.', families: ['Household of Noah', 'Shem, Ham, and Japheth', 'Canaan'], people: ['Noah','NoahsWife','Shem','Ham','Japheth','Canaan'], focus: 'Shem' },
  10: { title: 'Table of Nations', reference: 'Genesis 10', opening: 'Now these are the generations of the sons of Noah.', families: ['Line of Japheth', 'Line of Ham', 'Line of Shem', 'Canaanite peoples'], people: ['Noah','Shem','Ham','Japheth','JaphethLine','HamLine','ShemLine','Cush','Mizraim','Put','Canaan','Nimrod','Arpachshad','Shelah','Eber','Peleg'], focus: 'Shem' },
  11: { title: 'Babel and the Line to Abram', reference: 'Genesis 11', opening: 'And the whole earth was of one language, and of one speech.', families: ['Line of Shem', 'Household of Terah'], people: ['Shem','Arpachshad','Shelah','Eber','Peleg','Reu','Serug','NahorAncestor','Terah','Abram','Sarai','NahorBrother','Haran','Lot','Milcah'], focus: 'Abram' },
  12: { title: 'Abram Called', reference: 'Genesis 12', opening: 'Now the LORD had said unto Abram, Get thee out of thy country.', families: ['Household of Abram', 'Household of Lot'], people: ['Terah','Abram','Sarai','Lot'], focus: 'Abram' },
  13: { title: 'Abram and Lot Separate', reference: 'Genesis 13', opening: 'And Abram went up out of Egypt, he, and his wife, and all that he had.', families: ['Household of Abram', 'Household of Lot'], people: ['Abram','Sarai','Lot'], focus: 'Lot' },
  14: { title: 'Abram Rescues Lot', reference: 'Genesis 14', opening: 'And it came to pass in the days of Amraphel king of Shinar.', families: ['Household of Abram', 'Household of Lot'], people: ['Abram','Sarai','Lot'], focus: 'Abram' },
  15: { title: 'Covenant Promise', reference: 'Genesis 15', opening: 'After these things the word of the LORD came unto Abram in a vision.', families: ['Household of Abram'], people: ['Abram','Sarai'], focus: 'Abram' },
  16: { title: 'Hagar and Ishmael', reference: 'Genesis 16', opening: 'Now Sarai Abram’s wife bare him no children.', families: ['Household of Abram', 'Hagar and Ishmael'], people: ['Abram','Sarai','Hagar','Ishmael'], focus: 'Ishmael' },
  17: { title: 'Abraham, Sarah, and Isaac Promised', reference: 'Genesis 17', opening: 'And when Abram was ninety years old and nine, the LORD appeared to Abram.', families: ['Household of Abraham', 'Line of Ishmael', 'Promised line of Isaac'], people: ['Abraham','Sarah','Hagar','Ishmael','Isaac'], focus: 'Isaac' },
  18: { title: 'Visitors and Promise', reference: 'Genesis 18', opening: 'And the LORD appeared unto him in the plains of Mamre.', families: ['Household of Abraham', 'Household of Lot'], people: ['Abraham','Sarah','Isaac','Lot'], focus: 'Sarah' },
  19: { title: 'Lot and His Daughters', reference: 'Genesis 19', opening: 'And there came two angels to Sodom at even.', families: ['Household of Lot', 'Moab and Ammon'], people: ['Lot','Moab','BenAmmi','Abraham','Sarah'], focus: 'Lot' },
  20: { title: 'Abraham and Sarah in Gerar', reference: 'Genesis 20', opening: 'And Abraham journeyed from thence toward the south country.', families: ['Household of Abraham'], people: ['Abraham','Sarah'], extraPeople: ['Abimelech'], focus: 'Sarah' },
  21: { title: 'Isaac Born, Ishmael Sent Away', reference: 'Genesis 21', opening: 'And the LORD visited Sarah as he had said.', families: ['Household of Abraham', 'Isaac line', 'Ishmael line'], people: ['Abraham','Sarah','Isaac','Hagar','Ishmael'], focus: 'Isaac' },
  22: { title: 'Binding of Isaac and Nahor’s Family', reference: 'Genesis 22', opening: 'And it came to pass after these things, that God did tempt Abraham.', families: ['Household of Abraham', 'Household of Nahor'], people: ['Abraham','Sarah','Isaac','NahorBrother','Milcah','Bethuel','Rebekah'], focus: 'Isaac' },
  23: { title: 'Death of Sarah', reference: 'Genesis 23', opening: 'And Sarah was an hundred and seven and twenty years old.', families: ['Household of Abraham'], people: ['Abraham','Sarah','Isaac'], focus: 'Sarah' },
  24: { title: 'Isaac and Rebekah', reference: 'Genesis 24', opening: 'And Abraham was old, and well stricken in age.', families: ['Household of Abraham', 'Household of Bethuel'], people: ['Abraham','Sarah','Isaac','Rebekah','Bethuel','Laban','NahorBrother','Milcah'], focus: 'Rebekah' },
  25: { title: 'Abraham’s Sons and Isaac’s Twins', reference: 'Genesis 25', opening: 'Then again Abraham took a wife, and her name was Keturah.', families: ['Household of Abraham', 'Keturah’s sons', 'Line of Ishmael', 'Household of Isaac'], people: ['Abraham','Sarah','Keturah','KeturahSons','Hagar','Ishmael','IshmaelLine','Isaac','Rebekah','Jacob','Esau'], focus: 'Jacob' },
  26: { title: 'Isaac in Gerar', reference: 'Genesis 26', opening: 'And there was a famine in the land, beside the first famine.', families: ['Household of Isaac', 'Household of Esau'], people: ['Isaac','Rebekah','Jacob','Esau','EsauWives'], focus: 'Isaac' },
  27: { title: 'Jacob Receives the Blessing', reference: 'Genesis 27', opening: 'And it came to pass, that when Isaac was old.', families: ['Household of Isaac'], people: ['Isaac','Rebekah','Jacob','Esau'], focus: 'Jacob' },
  28: { title: 'Jacob Leaves for Haran', reference: 'Genesis 28', opening: 'And Isaac called Jacob, and blessed him.', families: ['Household of Isaac', 'Household of Laban', 'Household of Ishmael'], people: ['Isaac','Rebekah','Jacob','Esau','Ishmael','Laban','Rebekah'], focus: 'Jacob' },
  29: { title: 'Jacob, Leah, and Rachel', reference: 'Genesis 29', opening: 'Then Jacob went on his journey, and came into the land of the people of the east.', families: ['Household of Jacob', 'Household of Laban'], people: ['Jacob','Laban','Leah','Rachel','Bilhah','Zilpah','Reuben','Simeon','Levi','Judah'], focus: 'Leah' },
  30: { title: 'Jacob’s Children', reference: 'Genesis 30', opening: 'And when Rachel saw that she bare Jacob no children.', families: ['Household of Jacob'], people: ['Jacob','Leah','Rachel','Bilhah','Zilpah','Reuben','Simeon','Levi','Judah','Dan','Naphtali','Gad','Asher','Issachar','Zebulun','Dinah','Joseph','Laban'], focus: 'Joseph' },
  31: { title: 'Jacob Leaves Laban', reference: 'Genesis 31', opening: 'And he heard the words of Laban’s sons.', families: ['Household of Jacob', 'Household of Laban'], people: ['Jacob','Leah','Rachel','Bilhah','Zilpah','Reuben','Simeon','Levi','Judah','Dan','Naphtali','Gad','Asher','Issachar','Zebulun','Dinah','Joseph','Laban'], focus: 'Jacob' },
  32: { title: 'Jacob Prepares to Meet Esau', reference: 'Genesis 32', opening: 'And Jacob went on his way, and the angels of God met him.', families: ['Household of Jacob', 'Household of Esau'], people: ['Jacob','Esau','Leah','Rachel','Bilhah','Zilpah','Reuben','Simeon','Levi','Judah','Dan','Naphtali','Gad','Asher','Issachar','Zebulun','Dinah','Joseph'], focus: 'Esau' },
  33: { title: 'Jacob and Esau Reunite', reference: 'Genesis 33', opening: 'And Jacob lifted up his eyes, and looked, and, behold, Esau came.', families: ['Household of Jacob', 'Household of Esau'], people: ['Jacob','Esau','Leah','Rachel','Bilhah','Zilpah','Reuben','Simeon','Levi','Judah','Dan','Naphtali','Gad','Asher','Issachar','Zebulun','Dinah','Joseph'], focus: 'Jacob' },
  34: { title: 'Dinah, Shechem, Simeon, and Levi', reference: 'Genesis 34', opening: 'And Dinah the daughter of Leah went out.', families: ['Household of Jacob', 'Household of Hamor'], people: ['Jacob','Leah','Dinah','Simeon','Levi','Shechem','Hamor'], focus: 'Dinah' },
  35: { title: 'Israel, Benjamin, and the Twelve Sons', reference: 'Genesis 35', opening: 'And God said unto Jacob, Arise, go up to Bethel.', families: ['Household of Jacob', 'Household of Isaac'], people: ['Jacob','Israel','Rachel','Leah','Bilhah','Zilpah','Benjamin','Reuben','Simeon','Levi','Judah','Dan','Naphtali','Gad','Asher','Issachar','Zebulun','Dinah','Joseph','Isaac','Esau'], focus: 'Benjamin' },
  36: { title: 'The Line of Esau', reference: 'Genesis 36', opening: 'Now these are the generations of Esau, who is Edom.', families: ['Household of Esau', 'Edomite chiefs'], people: ['Esau','Edom','EsauWives','EsauSons','EdomiteChiefs'], focus: 'Esau' },
  37: { title: 'Joseph and His Brothers', reference: 'Genesis 37', opening: 'And Jacob dwelt in the land wherein his father was a stranger.', families: ['Household of Jacob'], people: ['Jacob','Joseph','Benjamin','Reuben','Judah','Brothers'], focus: 'Joseph' },
  38: { title: 'Judah and Tamar', reference: 'Genesis 38', opening: 'And it came to pass at that time, that Judah went down from his brethren.', families: ['Household of Judah', 'Line of Perez and Zerah'], people: ['Judah','Tamar','Er','Onan','ShelahJudah','Perez','Zerah'], focus: 'Tamar' },
  39: { title: 'Joseph in Potiphar’s House', reference: 'Genesis 39', opening: 'And Joseph was brought down to Egypt.', families: ['Joseph in Egypt'], people: ['Jacob','Joseph','Potiphar'], focus: 'Joseph' },
  40: { title: 'Joseph and Pharaoh’s Servants', reference: 'Genesis 40', opening: 'And it came to pass after these things.', families: ['Joseph in Egypt'], people: ['Joseph','Pharaoh'], focus: 'Joseph' },
  41: { title: 'Joseph, Asenath, Manasseh, and Ephraim', reference: 'Genesis 41', opening: 'And it came to pass at the end of two full years.', families: ['Household of Joseph'], people: ['Joseph','Pharaoh','Asenath','Manasseh','Ephraim'], focus: 'Joseph' },
  42: { title: 'Joseph’s Brothers Come to Egypt', reference: 'Genesis 42', opening: 'Now when Jacob saw that there was corn in Egypt.', families: ['Household of Jacob', 'Joseph in Egypt'], people: ['Jacob','Joseph','Benjamin','Simeon','Brothers'], focus: 'Joseph' },
  43: { title: 'Benjamin Goes to Egypt', reference: 'Genesis 43', opening: 'And the famine was sore in the land.', families: ['Household of Jacob', 'Joseph in Egypt'], people: ['Jacob','Judah','Benjamin','Joseph','Brothers'], focus: 'Benjamin' },
  44: { title: 'Judah Pleads for Benjamin', reference: 'Genesis 44', opening: 'And he commanded the steward of his house.', families: ['Household of Jacob', 'Joseph in Egypt'], people: ['Joseph','Judah','Benjamin','Brothers','Jacob'], focus: 'Judah' },
  45: { title: 'Joseph Reveals Himself', reference: 'Genesis 45', opening: 'Then Joseph could not refrain himself before all them that stood by him.', families: ['Household of Jacob', 'Household of Joseph'], people: ['Joseph','Jacob','Benjamin','Judah','Brothers','Pharaoh'], focus: 'Joseph' },
  46: { title: 'Jacob’s Household Enters Egypt', reference: 'Genesis 46', opening: 'And Israel took his journey with all that he had.', families: ['Household of Jacob', 'Household of Joseph', 'Seventy persons of Israel'], people: ['Jacob','Israel','Joseph','Asenath','Manasseh','Ephraim','Reuben','Simeon','Levi','Judah','Issachar','Zebulun','Dinah','Gad','Asher','Dan','Naphtali','Benjamin','JacobHousehold'], focus: 'JacobHousehold' },
  47: { title: 'Jacob’s Family Settles in Goshen', reference: 'Genesis 47', opening: 'Then Joseph came and told Pharaoh.', families: ['Household of Jacob', 'Household of Joseph'], people: ['Jacob','Joseph','Brothers','Pharaoh','Manasseh','Ephraim'], focus: 'Joseph' },
  48: { title: 'Jacob Blesses Ephraim and Manasseh', reference: 'Genesis 48', opening: 'And it came to pass after these things.', families: ['Household of Jacob', 'Household of Joseph'], people: ['Jacob','Joseph','Manasseh','Ephraim'], focus: 'Ephraim' },
  49: { title: 'Jacob Blesses His Sons', reference: 'Genesis 49', opening: 'And Jacob called unto his sons.', families: ['Twelve sons of Jacob'], people: ['Jacob','Reuben','Simeon','Levi','Judah','Zebulun','Issachar','Dan','Gad','Asher','Naphtali','Joseph','Benjamin'], focus: 'Judah' },
  50: { title: 'Death of Jacob and Joseph', reference: 'Genesis 50', opening: 'And Joseph fell upon his father’s face.', families: ['Household of Jacob', 'Household of Joseph'], people: ['Jacob','Joseph','Brothers','Manasseh','Ephraim'], focus: 'Joseph' }
};

function normalizeRelation(edge) {
  return Array.isArray(edge) ? { from: edge[0], to: edge[1], type: edge[2] || 'related' } : edge;
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function getPerson(id) {
  return GENESIS_PEOPLE[id] || { id, label: id, kind: 'person' };
}

function getGenesisChapterFamily(chapterNumber) {
  const chapter = GENESIS_CHAPTER_FAMILIES[Number(chapterNumber)];
  if (!chapter) return null;
  const ids = unique([...(chapter.people || []), ...(chapter.extraPeople || [])]);
  const idSet = new Set(ids);
  const globalEdges = GENESIS_GLOBAL_RELATIONS.filter(edge => idSet.has(edge.from) && idSet.has(edge.to));
  const chapterEdges = (chapter.relations || []).map(normalizeRelation);
  return {
    ...chapter,
    nodes: ids.map(getPerson),
    links: unique([...globalEdges, ...chapterEdges].map(edge => JSON.stringify(edge))).map(edge => JSON.parse(edge))
  };
}

function getGenesisRangeFamily(startChapter, endChapter) {
  const chapters = [];
  const ids = new Set();
  const families = new Set();
  const links = [];
  for (let chapter = Number(startChapter); chapter <= Number(endChapter); chapter += 1) {
    const branch = getGenesisChapterFamily(chapter);
    if (!branch) continue;
    chapters.push(branch);
    branch.nodes.forEach(node => ids.add(node.id));
    branch.families.forEach(family => families.add(family));
    branch.links.forEach(edge => links.push(edge));
  }
  const idSet = ids;
  const globalEdges = GENESIS_GLOBAL_RELATIONS.filter(edge => idSet.has(edge.from) && idSet.has(edge.to));
  return {
    reference: `Genesis ${startChapter}–${endChapter}`,
    chapters,
    families: [...families],
    nodes: [...ids].map(getPerson),
    links: unique([...globalEdges, ...links].map(edge => JSON.stringify(edge))).map(edge => JSON.parse(edge))
  };
}

if (typeof window !== 'undefined') {
  window.GENESIS_STORY_BRANCHES = GENESIS_STORY_BRANCHES;
  window.GENESIS_PEOPLE = GENESIS_PEOPLE;
  window.GENESIS_GLOBAL_RELATIONS = GENESIS_GLOBAL_RELATIONS;
  window.GENESIS_CHAPTER_FAMILIES = GENESIS_CHAPTER_FAMILIES;
  window.getGenesisChapterFamily = getGenesisChapterFamily;
  window.getGenesisRangeFamily = getGenesisRangeFamily;
}

if (typeof module !== 'undefined') {
  module.exports = {
    GENESIS_STORY_BRANCHES,
    GENESIS_PEOPLE,
    GENESIS_GLOBAL_RELATIONS,
    GENESIS_CHAPTER_FAMILIES,
    getGenesisChapterFamily,
    getGenesisRangeFamily
  };
}
