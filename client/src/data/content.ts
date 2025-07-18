export interface Content {
  en: string;
  zh: string;
}

export const content = {
  // Navigation
  nav: {
    home: { en: "Home", zh: "首页" },
    about: { en: "About", zh: "关于" },
    projects: { en: "Projects", zh: "项目" },
    blog: { en: "Blog", zh: "博客" },
    contact: { en: "Contact", zh: "联系" },
    langToggle: { en: "中文", zh: "English" }
  },

  // Hero Section
  hero: {
    title: { en: "Data Science & NLP Researcher", zh: "数据科学与自然语言处理研究者" },
    subtitle: { 
      en: "I'm an aspiring AI researcher and statistics undergraduate passionate about natural language processing and machine learning. I led a university-funded research project on Chinese irony recognition using LLaMA-2.",
      zh: "我是一名有抱负的AI研究者和统计学本科生，专注于自然语言处理和机器学习。我领导了一个大学资助的关于使用LLaMA-2进行中文讽刺识别的研究项目。"
    },
    viewWork: { en: "View My Work", zh: "查看我的作品" },
    downloadCV: { en: "Download CV", zh: "下载简历" }
  },

  // About Section
  about: {
    title: { en: "About Me", zh: "关于我" },
    subtitle: { en: "Statistics Student @ Beijing Normal University | AI Research Enthusiast", zh: "北京师范大学统计学学生 | AI研究爱好者" },
    education: {
      title: { en: "Education", zh: "教育背景" },
      school: { en: "Beijing Normal University", zh: "北京师范大学" },
      degree: { en: "B.S. in Statistics | GPA: 3.8/4.0", zh: "统计学学士 | GPA: 3.8/4.0" }
    },
    research: {
      title: { en: "Research Focus", zh: "研究重点" },
      area: { en: "NLP & Machine Learning", zh: "自然语言处理与机器学习" },
      details: { en: "Chinese Irony Recognition, Statistical Modeling", zh: "中文讽刺识别，统计建模" }
    },
    role: {
      title: { en: "Current Role", zh: "当前职位" },
      position: { en: "Project Leader", zh: "项目负责人" },
      organization: { en: "Beijing Undergraduate Research Fund", zh: "北京市大学生科研基金" }
    },
    skills: {
      title: { en: "Technical Skills", zh: "技术技能" },
      programming: { en: "Programming", zh: "编程语言" },
      dataScience: { en: "Data Science", zh: "数据科学" },
      mlnlp: { en: "ML/NLP", zh: "机器学习/自然语言处理" },
      tools: { en: "Tools", zh: "工具" }
    }
  },

  // Projects Section
  projects: {
    title: { en: "Featured Projects", zh: "精选项目" },
    subtitle: { en: "Research projects and competitions that showcase my expertise", zh: "展示我专业能力的研究项目和竞赛" },
    ironyDetection: {
      title: { en: "Irony Detection in Chinese Social Media", zh: "中文社交媒体讽刺检测" },
      description: { 
        en: "Built and trained NLP models (LSTM, RoBERTa, LLaMA-2) on a custom sarcasm-labeled dataset. Implemented evaluation pipeline for precision, recall, F1-score optimization.",
        zh: "构建并训练NLP模型（LSTM、RoBERTa、LLaMA-2）在自定义讽刺标注数据集上。实现了精确率、召回率、F1分数优化的评估管道。"
      },
      timeline: { en: "May 2025 - Present | Funded by Beijing Undergraduate Research Fund", zh: "2025年5月 - 至今 | 北京市大学生科研基金资助" }
    },
    carbonNeutral: {
      title: { en: "Statistical Modeling for Carbon-Neutral Bus Network", zh: "碳中性公交网络统计建模" },
      description: {
        en: "Applied time-series and spatial regression models to optimize Beijing public transport routes under carbon emission constraints. Integrated metro data for dual-mode network optimization.",
        zh: "应用时间序列和空间回归模型在碳排放约束下优化北京公共交通路线。整合地铁数据进行双模式网络优化。"
      },
      timeline: { en: "Competition Project | Second Prize Winner", zh: "竞赛项目 | 二等奖获得者" }
    },
    marketResearch: {
      title: { en: "Market Research & Pricing Strategy Analysis", zh: "市场研究与定价策略分析" },
      description: {
        en: "Led team in conducting conjoint analysis and pricing strategy simulations using R and Excel. Developed data-driven recommendations for market positioning.",
        zh: "领导团队使用R和Excel进行联合分析和定价策略模拟。为市场定位制定数据驱动的建议。"
      },
      timeline: { en: "2025 | First Prize Winner", zh: "2025年 | 一等奖获得者" }
    },
    teaching: {
      title: { en: "Mathematics Teaching & Student Mentorship", zh: "数学教学与学生指导" },
      description: {
        en: "Designed interactive math lessons for 40+ middle school students during summer outreach program. Developed individualized support plans and received Outstanding Educator award.",
        zh: "在暑期推广项目中为40多名中学生设计互动数学课程。制定个性化支持计划并获得优秀教育工作者奖。"
      },
      timeline: { en: "Summer 2024 | Outstanding Educator Award", zh: "2024年夏季 | 优秀教育工作者奖" }
    }
  },

  // Blog Section
  blog: {
    title: { en: "Latest Blog Posts", zh: "最新博客文章" },
    subtitle: { en: "Insights on AI research, statistics, and academic journey", zh: "关于AI研究、统计学和学术旅程的见解" },
    viewAll: { en: "View All Posts", zh: "查看所有文章" },
    readTime: { en: "min read", zh: "分钟阅读" },
    posts: [
      {
        category: { en: "Technical Notes", zh: "技术笔记" },
        title: { en: "Fine-tuning LLaMA-2 for Chinese Text Understanding", zh: "微调LLaMA-2进行中文文本理解" },
        excerpt: { 
          en: "Exploring the challenges and solutions in adapting large language models for Chinese natural language processing tasks...",
          zh: "探索在将大型语言模型适配到中文自然语言处理任务中的挑战和解决方案..."
        },
        readTime: "5",
        date: { en: "Jan 15, 2025", zh: "2025年1月15日" }
      },
      {
        category: { en: "Reflections", zh: "反思" },
        title: { en: "Leading a Research Team as an Undergraduate", zh: "作为本科生领导研究团队" },
        excerpt: {
          en: "Lessons learned from managing a funded research project and collaborating with peers in academic research...",
          zh: "从管理资助研究项目和与同行在学术研究中合作中学到的经验..."
        },
        readTime: "8",
        date: { en: "Jan 10, 2025", zh: "2025年1月10日" }
      },
      {
        category: { en: "Competition Recap", zh: "竞赛回顾" },
        title: { en: "Winning the National Statistical Modeling Competition", zh: "赢得全国统计建模竞赛" },
        excerpt: {
          en: "A detailed walkthrough of our approach to the carbon-neutral transportation optimization problem...",
          zh: "详细介绍我们解决碳中性交通优化问题的方法..."
        },
        readTime: "12",
        date: { en: "Jan 5, 2025", zh: "2025年1月5日" }
      }
    ]
  },

  // Contact Section
  contact: {
    title: { en: "Let's Connect", zh: "联系我" },
    subtitle: { 
      en: "I'm always interested in discussing AI research, collaboration opportunities, or academic insights.",
      zh: "我总是有兴趣讨论AI研究、合作机会或学术见解。"
    },
    email: "manyaoli@berkeley.edu",
    linkedin: "Connect with me",
    github: "View my code",
    wechat: "xftvhunko111",
    location: {
      title: { en: "Current Location", zh: "当前位置" },
      place: { en: "Berkeley, California, United States", zh: "美国加利福尼亚州伯克利" },
      status: { en: "Open to research collaborations and internship opportunities", zh: "开放研究合作和实习机会" }
    }
  },

  // Footer
  footer: {
    copyright: { en: "© 2025 ManYao Li. Built with passion for AI research.", zh: "© 2025 李曼遥。用对AI研究的热情构建。" },
    lastUpdated: { en: "Last updated: January 2025", zh: "最后更新：2025年1月" }
  }
};

export type Language = 'en' | 'zh';
