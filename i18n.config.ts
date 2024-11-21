import tw from './locales/tw';
import en from './locales/en';
import ja from './locales/ja';

export default defineI18nConfig(() => ({
  legacy: false, // 是否使用Option API
  locale: 'tw', // 預設文本
  messages: { tw, en, ja } //文本們
}));
