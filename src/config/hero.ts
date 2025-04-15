type Hero = {
  title: string;
  description: string;
  typeAnimationTexts: (string | number)[];
  achievementsList: Achievement[];
};

type Achievement = {
  metric: string;
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
    { metric: "高一社團", postfix: "巧藝社" },
    { metric: "高二社團", postfix: "機器人社" },
    { metric: "高一上選修",  postfix: "生活中的心理學" },
    { metric: "高一下選修", postfix: "文心光影" },
    { metric: "高三上選修", postfix: "科技應用專題" },
    { metric: "高三下選修",postfix: "實用日語" },
  ],
};
