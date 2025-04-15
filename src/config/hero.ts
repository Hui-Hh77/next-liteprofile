type Hero = {
  title: string;
  description: string;
  typeAnimationTexts: (string | number)[];
  achievementsList: Achievement[];
};

type Achievement = {
  metric: string;
  value: string;
  postfix?: string;
  prefix?: string;
};

export const hero: Hero = {
  title: "我是 黃郁惠",
  description: "一位申請資工系的高中生自我介紹",
  typeAnimationTexts: [
    "曾擔任輔導股長",
    1000,
    "曾擔任英文小老師",
    1000,
  ],
  achievementsList: [
    { metric: "高一社團", value: "巧藝", postfix: "社" },
    { metric: "高二社團", value: "機器人", postfix: "社" },
    { metric: "高一上選修", value: "生活中的", postfix: "心理學" },
    { metric: "高一下選修", value: "文心", postfix: "光影" },
    { metric: "高三上選修", value: "科技應用", postfix: "專題" },
    { metric: "高三下選修", value: "實用", postfix: "日語" },
  ],
};
