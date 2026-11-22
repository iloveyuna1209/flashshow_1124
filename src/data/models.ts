export type ThemeId = 'museum' | 'openai' | 'anthropic' | 'google' | 'perfume';

export type TierIndex = 0 | 1 | 2 | 3;

export interface TierMeta {
  index: TierIndex;
  short: string;
  label: string;
  sub: string;
  color: string;
}

export const TIERS: TierMeta[] = [
  {
    index: 0,
    short: 'T1',
    label: '輕量日常',
    sub: '極速・批量處理',
    color: '#38BDF8',
  },
  {
    index: 1,
    short: 'T2',
    label: '平衡主力',
    sub: '高速・實務首選',
    color: '#34D399',
  },
  {
    index: 2,
    short: 'T3',
    label: '高階專業',
    sub: '重型・深度任務',
    color: '#FBBF24',
  },
  {
    index: 3,
    short: 'T4',
    label: '頂規天花板',
    sub: '旗艦・禁區級',
    color: '#F472B6',
  },
];

export interface ModelItem {
  id: string;
  company: 'openai' | 'anthropic' | 'google';
  name: string;
  zh: string;
  tier: TierIndex;
  tag: string;
  metaphor: string;
  asset: string;
  accent: string;
  atomicNo?: string;
  extra?: string;
}

export const OPENAI_MODELS: ModelItem[] = [
  {
    id: 'luna',
    company: 'openai',
    name: 'Luna',
    zh: '月亮',
    tier: 0,
    tag: '最小星體・體積小最便宜',
    metaphor: '拉丁文「月亮」',
    asset: './assets/openai-luna.jpg',
    accent: '#CBD5E1',
  },
  {
    id: 'terra',
    company: 'openai',
    name: 'Terra',
    zh: '大地 / 地球',
    tier: 1,
    tag: '最熟悉星體・效率品質平衡',
    metaphor: '拉丁文「地球」',
    asset: './assets/openai-terra.jpg',
    accent: '#38BDF8',
  },
  {
    id: 'sol',
    company: 'openai',
    name: 'Sol',
    zh: '太陽',
    tier: 2,
    tag: '太陽系中心・又快又聰明',
    metaphor: '拉丁文「太陽」',
    asset: './assets/openai-sol.jpg',
    accent: '#FBBF24',
  },
  {
    id: 'astra',
    company: 'openai',
    name: 'Astra',
    zh: '銀河',
    tier: 3,
    tag: '跳脫太陽系・宇宙極限最強',
    metaphor: '拉丁文「星辰 / 銀河」',
    asset: './assets/openai-astra.jpg',
    accent: '#A78BFA',
  },
];

export const ANTHROPIC_MODELS: ModelItem[] = [
  {
    id: 'haiku',
    company: 'anthropic',
    name: 'Haiku',
    zh: '俳句',
    tier: 0,
    tag: '僅 17 音節・啟動極快低成本',
    metaphor: '日本最短詩體',
    asset: './assets/claude-haiku.jpg',
    accent: '#FDA4AF',
  },
  {
    id: 'sonnet',
    company: 'anthropic',
    name: 'Sonnet',
    zh: '十四行詩',
    tier: 1,
    tag: '14 行嚴謹韻律・速度智商平衡',
    metaphor: '莎士比亞抒情詩',
    asset: './assets/claude-sonnet.jpg',
    accent: '#E5B87A',
  },
  {
    id: 'opus',
    company: 'anthropic',
    name: 'Opus',
    zh: '鉅作',
    tier: 2,
    tag: '最高代表作・深度思考高品質',
    metaphor: '拉丁文「偉大作品」',
    asset: './assets/claude-opus.jpg',
    accent: '#F59E0B',
  },
  {
    id: 'fable',
    company: 'anthropic',
    name: 'Fable',
    zh: '寓言',
    tier: 3,
    tag: '道德與規範・最強調安全合法',
    metaphor: '蘊含人生道理',
    asset: './assets/claude-fable.jpg',
    accent: '#FDE68A',
  },
  {
    id: 'mythos',
    company: 'anthropic',
    name: 'Mythos',
    zh: '神話',
    tier: 3,
    tag: '超越自然限制・不受規範束縛',
    metaphor: '無限延伸神力',
    asset: './assets/claude-mythos.jpg',
    accent: '#FB7185',
  },
];

export const CLAUDE_SAGA: ModelItem = {
  id: 'saga',
  company: 'anthropic',
  name: 'Saga',
  zh: '傳奇 / 史詩',
  tier: 3,
  tag: '跨越數百年的英雄史詩・海量記憶與長時運作',
  metaphor: '北歐文學・尚未推出',
  asset: './assets/claude-saga.jpg',
  accent: '#93C5FD',
  extra: 'COMING SOON',
};

export const GOOGLE_MODELS: ModelItem[] = [
  {
    id: 'hydrogen',
    company: 'google',
    name: 'Hydrogen',
    zh: '氫',
    atomicNo: '#1',
    tier: 0,
    tag: '全宇宙最輕・體積最小反應最快',
    metaphor: '原子結構最單純',
    asset: './assets/gemini-hydrogen.jpg',
    accent: '#67E8F9',
  },
  {
    id: 'neon',
    company: 'google',
    name: 'Neon',
    zh: '氖',
    atomicNo: '#10',
    tier: 1,
    tag: '惰性極穩定・霓虹燈＝細部專精',
    metaphor: '極少幻覺・特殊用途',
    asset: './assets/gemini-neon.jpg',
    accent: '#F472B6',
  },
  {
    id: 'argon',
    company: 'google',
    name: 'Argon',
    zh: '氬',
    atomicNo: '#18',
    tier: 2,
    tag: '惰性極穩定・燈泡保護氣＝整體規劃',
    metaphor: '極少幻覺・全域覆蓋',
    asset: './assets/gemini-argon.jpg',
    accent: '#818CF8',
  },
  {
    id: 'carbon',
    company: 'google',
    name: 'Carbon',
    zh: '碳',
    atomicNo: '#6',
    tier: 3,
    tag: '石墨↔鑽石重組・有機生命骨架',
    metaphor: '多元複雜・任務基座',
    asset: './assets/gemini-carbon.jpg',
    accent: '#34D399',
  },
];

export interface PerfumeItem {
  id: string;
  name: string;
  zh: string;
  tier: TierIndex;
  origin: string;
  concentration: string;
  concentrationPct: number;
  evapSpeed: number; // higher = evaporates faster (small/fast model)
  longevity: number; // higher = lingers longer (big/deep model)
  metaphor: string;
  asset: string;
  color: string;
}

export const PERFUMES: PerfumeItem[] = [
  {
    id: 'cologne',
    name: 'Cologne',
    zh: '古龍水',
    tier: 0,
    origin: '18 世紀德國科隆・柑橘草本提神',
    concentration: '2–5%',
    concentrationPct: 18,
    evapSpeed: 3.6,
    longevity: 0.25,
    metaphor: '秒散極快 → 輕量小模型',
    asset: './assets/perfume-cologne.jpg',
    color: '#BAE6FD',
  },
  {
    id: 'toilette',
    name: 'Toilette',
    zh: '淡香水',
    tier: 1,
    origin: '古典法文「梳妝打扮」faire sa toilette',
    concentration: '5-15%',
    concentrationPct: 42,
    evapSpeed: 2.3,
    longevity: 0.5,
    metaphor: '日常輕盈 → 高速主力',
    asset: './assets/perfume-toilette.jpg',
    color: '#FDE68A',
  },
  {
    id: 'parfum',
    name: 'Parfum',
    zh: '淡香精',
    tier: 2,
    origin: '拉丁文 per fumum「穿過煙霧」',
    concentration: '15–20%',
    concentrationPct: 72,
    evapSpeed: 1.3,
    longevity: 0.78,
    metaphor: '純粹高濃 → 高階重型',
    asset: './assets/perfume-parfum.jpg',
    color: '#FBBF24',
  },
  {
    id: 'extrait',
    name: 'Extrait',
    zh: '濃香精',
    tier: 3,
    origin: '原料提煉的純粹最高精華',
    concentration: '20–40%',
    concentrationPct: 100,
    evapSpeed: 0.65,
    longevity: 1.0,
    metaphor: '持香極久 → 頂規深度思考',
    asset: './assets/perfume-extrait.jpg',
    color: '#EA580C',
  },
];

export const COMPANIES = [
  {
    id: 'openai' as const,
    name: 'OpenAI',
    series: 'GPT-6 系列',
    world: '宇宙星體',
    accent: '#60A5FA',
  },
  {
    id: 'anthropic' as const,
    name: 'Anthropic',
    series: 'Claude 5 系列',
    world: '文學創作',
    accent: '#E5B87A',
  },
  {
    id: 'google' as const,
    name: 'Google',
    series: 'Gemini 4 系列',
    world: '化學元素',
    accent: '#22D3EE',
  },
];
