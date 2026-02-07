// 社员数据
const membersData = [
    {
        name: "境内外",
        pinyin: "jingneiwai",
        role: "画师",
        mainTags: ["绘画"],
        bio: "在线时间：晚上8点至9点",
        businesses: [
            {
                name: "Q版头像",
                price: "￥20r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_jingneiwai1_1.jpg",
                        thumb: "images/gallerys/work_jingneiwai1_1_thumb.jpg"
                    },
                ],
                tags: ["伪厚涂", "Q版", "头像"]
            },
            {
                name: "正比头像",
                price: "￥35r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_jingneiwai2_1.jpg",
                        thumb: "images/gallerys/work_jingneiwai2_1_thumb.jpg"
                    },
                ],
                tags: ["伪厚涂", "正比", "头像"]
            },
            {
                name: "Q版立绘",
                price: "￥37r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_jingneiwai3_1.jpg",
                        thumb: "images/gallerys/work_jingneiwai3_1_thumb.jpg"
                    },
                ],
                tags: ["伪厚涂", "Q版", "立绘"]
            },

        ],
    },
    {
        name: "小咪",
        pinyin: "xiaomi",
        role: "画师",
        mainTags: ["绘画"],
        bio: "",
        businesses: [
            {
                name: "狂草胸像",
                price: "￥20r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_xiaomi1_1.jpg",
                        thumb: "images/gallerys/work_xiaomi1_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_xiaomi1_2.jpg",
                        thumb: "images/gallerys/work_xiaomi1_2_thumb.jpg"
                    }
                ],
                tags: ["草稿", "正比", "胸像"]
            },
            {
                name: "狂草大头",
                price: "￥12r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_xiaomi2_1.jpg",
                        thumb: "images/gallerys/work_xiaomi2_1_thumb.jpg"
                    }
                ],
                tags: ["草稿", "正比", "头像"]
            }
        ],
    },
    {
        name: "尧刊",
        pinyin: "yaokan",
        role: "画师",
        mainTags: ["绘画"],
        bio: "",
        businesses: [
            {
                name: "萌萌大头",
                price: "￥40r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_yaokan1_1.jpg",
                        thumb: "images/gallerys/work_yaokan1_1_thumb.jpg"
                    }
                ],
                tags: ["平涂", "正比", "头像"]
            },
        ],
    },
    {
        name: "反话",
        pinyin: "fanhua",
        role: "画师",
        mainTags: ["绘画"],
        bio: "",
        businesses: [
            {
                name: "帅气大头",
                price: "￥90r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_fanhua1_1.jpg",
                        thumb: "images/gallerys/work_fanhua1_1_thumb.jpg"
                    }
                ],
                tags: ["伪厚涂", "正比", "头像"]
            },
            {
                name: "半身插像",
                price: "￥260r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_fanhua2_1.jpg",
                        thumb: "images/gallerys/work_fanhua2_1_thumb.jpg"
                    }
                ],
                tags: ["半厚涂", "正比", "半身"]
            }
        ],
    },
    {
        name: "呵呵",
        pinyin: "hehe",
        role: "文手",
        mainTags: ["写文"],
        bio: "-雷点：柜子",
        businesses: [
            {
                name: "文相关业务",
                price: "￥10r/500字",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_hehe1_1.jpg",
                        thumb: "images/gallerys/work_hehe1_1_thumb.jpg"
                    }
                ],
                tags: []
            }
        ],
    },
    {
        name: "时已",
        pinyin: "shiyi",
        role: "画师",
        mainTags: ["绘画"],
        bio: "",
        businesses: [
            {
                name: "大头",
                price: "￥50r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_shiyi1_1.jpg",
                        thumb: "images/gallerys/work_shiyi1_1_thumb.jpg"
                    }
                ],
                tags: ["伪厚涂", "正比", "头像"]
            },
        ],
    },
    {
        name: "晚风淮雨",
        pinyin: "wanfenghuaiyu",
        role: "画师",
        mainTags: ["绘画"],
        bio: "",
        businesses: [
            {
                name: "萌萌大头",
                price: "￥25r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_wanfenghuaiyu1_1.jpg",
                        thumb: "images/gallerys/work_wanfenghuaiyu1_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_wanfenghuaiyu1_2.jpg",
                        thumb: "images/gallerys/work_wanfenghuaiyu1_2_thumb.jpg"
                    }
                ],
                tags: ["平涂", "正比", "头像"]
            },
            {
                name: "QQ大头",
                price: "￥30r",
                desc: "-抱娃+￥5r",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_wanfenghuaiyu2_1.jpg",
                        thumb: "images/gallerys/work_wanfenghuaiyu2_1_thumb.jpg"
                    }
                ],
                tags: ["平涂", "Q版", "头像"]
            },
            {
                name: "QQ人小零食",
                price: "￥13r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_wanfenghuaiyu3_1.jpg",
                        thumb: "images/gallerys/work_wanfenghuaiyu3_1_thumb.jpg"
                    }
                ],
                tags: ["平涂", "Q版"]
            }
        ]
    },
    {
        name: "弍浬",
        pinyin: "erli",
        role: "画师",
        mainTags: ["绘画"],
        bio: "",
        businesses: [
            {
                name: "QQ人线稿大头",
                price: "暂无价格",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_erli1_1.jpg",
                        thumb: "images/gallerys/work_erli1_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_erli1_2.jpg",
                        thumb: "images/gallerys/work_erli1_2_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_erli1_3.jpg",
                        thumb: "images/gallerys/work_erli1_3_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_erli1_4.jpg",
                        thumb: "images/gallerys/work_erli1_4_thumb.jpg"
                    },
                ],
                tags: ["线稿", "Q版", "头像"]
            }
        ],
    },
    {
        name: "凉白开",
        pinyin: "liangbaikai",
        role: "画师",
        mainTags: ["绘画"],
        bio: "",
        businesses: [
            {
                name: "萌萌大头",
                price: "暂无价格",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_liangbaikai1_1.jpg",
                        thumb: "images/gallerys/work_liangbaikai1_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_liangbaikai1_2.jpg",
                        thumb: "images/gallerys/work_liangbaikai1_2_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_liangbaikai1_3.jpg",
                        thumb: "images/gallerys/work_liangbaikai1_3_thumb.jpg"
                    },
                ],
                tags: ["伪厚涂", "正比", "头像"]
            }
        ],
    },
    {
        name: "望霁",
        pinyin: "wangji",
        role: "画师",
        mainTags: ["绘画"],
        bio: "",
        businesses: [
            {
                name: "QQ人立绘",
                price: "￥10r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_wangji1_1.jpg",
                        thumb: "images/gallerys/work_wangji1_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_wangji1_2.jpg",
                        thumb: "images/gallerys/work_wangji1_2_thumb.jpg"
                    },
                ],
                tags: ["平涂", "Q版", "立绘"]
            },
            {
                name: "仿画风QQ大头",
                price: "￥10r",
                desc: "-画风可选",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_wangji2_1.jpg",
                        thumb: "images/gallerys/work_wangji2_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_wangji2_2.jpg",
                        thumb: "images/gallerys/work_wangji2_2_thumb.jpg"
                    },
                ],
                tags: ["平涂", "仿画风", "Q版", "头像"]
            },
            {
                name: "QQ大头",
                price: "￥5r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_wangji3_1.jpg",
                        thumb: "images/gallerys/work_wangji3_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_wangji3_2.jpg",
                        thumb: "images/gallerys/work_wangji3_2_thumb.jpg"
                    },
                ],
                tags: ["平涂", "Q版", "头像"]
            }
        ],
    },
    {
        name: "梵骨",
        pinyin: "fangu",
        role: "画师",
        mainTags: ["绘画"],
        bio: "",
        businesses: [
            {
                name: "正比横插",
                price: "暂无价格",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_fangu1_1.jpg",
                        thumb: "images/gallerys/work_fangu1_1_thumb.jpg"
                    },
                ],
                tags: ["平涂", "正比", "横插"]
            },
            {
                name: "正比竖插",
                price: "暂无价格",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_fangu2_1.jpg",
                        thumb: "images/gallerys/work_fangu2_1_thumb.jpg"
                    },
                ],
                tags: ["平涂", "正比", "竖插"]
            },
            {
                name: "正比大头",
                price: "暂无价格",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_fangu3_1.jpg",
                        thumb: "images/gallerys/work_fangu3_1_thumb.jpg"
                    },
                ],
                tags: ["平涂", "正比", "头像"]
            },
            {
                name: "正比双人头像",
                price: "暂无价格",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_fangu4_1.jpg",
                        thumb: "images/gallerys/work_fangu4_1_thumb.jpg"
                    },
                ],
                tags: ["平涂", "正比", "双人", "头像"]
            }
        ],
    },
    {
        name: "晶闪蝶奶奶",
        pinyin: "jingshandienainai",
        role: "画师",
        mainTags: ["绘画"],
        bio: "",
        businesses: [
            {
                name: "",
                price: "暂无价格",
                desc: "",
                gallery: [
                    // {
                    //     type: "image",
                    //     url: "images/gallerys/work_1_1.jpg",
                    //     thumb: "images/gallerys/work_1_1.jpg"
                    // },
                ],
                tags: []
            }
        ],
    },
    {
        name: "草少",
        pinyin: "caoshao",
        role: "手作",
        mainTags: ["手作"],
        bio: "",
        businesses: [
            {
                name: "珠串手链",
                price: "￥30-80r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_caoshao1_1.jpg",
                        thumb: "images/gallerys/work_caoshao1_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_caoshao1_2.jpg",
                        thumb: "images/gallerys/work_caoshao1_2_thumb.jpg"
                    },
                    {
                        type: "video",
                        url: "images/gallerys/work_caoshao1_3.mp4",
                        thumb: "images/gallerys/work_caoshao1_3.mp4"
                    }
                ],
                tags: ["珠串链"]
            }
        ],
    },
    {
        name: "发动世界大战",
        pinyin: "fadongshijiedazhan",
        role: "画师",
        mainTags: ["绘画"],
        bio: "照片写生，人物素描图，彩色头像线稿，单头，半身带手，全身都可。",
        businesses: [
            {
                name: "黑白线稿半身",
                price: "￥60r",
                desc: "-改动要求请一次性说完",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_fadongshijiedazhan1_1.jpg",
                        thumb: "images/gallerys/work_fadongshijiedazhan1_1_thumb.jpg"
                    },
                ],
                tags: ["厚涂", "线稿", "正比", "半身"]
            },
            {
                name: "厚涂半身",
                price: "￥150r",
                desc: "-改动要求请一次性说完",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_fadongshijiedazhan2_1.jpg",
                        thumb: "images/gallerys/work_fadongshijiedazhan2_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_fadongshijiedazhan2_2.jpg",
                        thumb: "images/gallerys/work_fadongshijiedazhan2_2_thumb.jpg"
                    },
                ],
                tags: ["厚涂", "正比", "半身"]
            }
        ],
    },
    {
        name: "塑造大神附体",
        pinyin: "suzaodashenfuti",
        role: "画师",
        mainTags: ["绘画"],
        bio: "",
        businesses: [
            {
                name: "双人贴贴竖插",
                price: "暂无价格",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_suzaodashenfuti1_1.jpg",
                        thumb: "images/gallerys/work_suzaodashenfuti1_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_suzaodashenfuti1_2.jpg",
                        thumb: "images/gallerys/work_suzaodashenfuti1_2_thumb.jpg"  
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_suzaodashenfuti1_3.jpg",
                        thumb: "images/gallerys/work_suzaodashenfuti1_3_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_suzaodashenfuti1_4.jpg",
                        thumb: "images/gallerys/work_suzaodashenfuti1_4_thumb.jpg"
                    },
                ],
                tags: ["伪厚涂", "正比", "双人", "竖插"]
            }
        ],
    },
    {
        name: "Echo",
        pinyin: "echo",
        role: "画师",
        mainTags: ["绘画"],
        bio: "",
        businesses: [
            {
                name: "亮晶晶大头",
                price: "￥108r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_echo1_1.jpg",
                        thumb: "images/gallerys/work_echo1_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_echo1_2.jpg",
                        thumb: "images/gallerys/work_echo1_2_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_echo1_3.jpg",
                        thumb: "images/gallerys/work_echo1_3_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_echo1_4.jpg",
                        thumb: "images/gallerys/work_echo1_4_thumb.jpg"
                    },
                ],
                tags: ["伪厚涂", "正比", "头像"]
            }
        ],
    },
    {
        name: "YoRHa",
        pinyin: "yorha",
        role: "画师",
        mainTags: ["绘画"],
        bio: "",
        businesses: [
            {
                name: "氛围竖插",
                price: "￥400r+",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_yorha1_1.jpg",
                        thumb: "images/gallerys/work_yorha1_1_thumb.jpg"
                    },
                ],
                tags: ["伪厚涂", "正比", "竖插"]
            }
        ],
    },
    {
        name: "依霾",
        pinyin: "yimai",
        role: "画师",
        mainTags: ["绘画"],
        bio: "",
        businesses: [
            {
                name: "QQ大头",
                price: "￥9.9-12r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_yimai1_1.jpg",
                        thumb: "images/gallerys/work_yimai1_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_yimai1_2.jpg",
                        thumb: "images/gallerys/work_yimai1_2_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_yimai1_3.jpg",
                        thumb: "images/gallerys/work_yimai1_3_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_yimai1_4.jpg",
                        thumb: "images/gallerys/work_yimai1_4_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_yimai1_5.jpg",
                        thumb: "images/gallerys/work_yimai1_5_thumb.jpg"
                    },
                ],
                tags: ["平涂", "Q版", "头像"]
            },
            {
                name: "QQ人立绘",
                price: "￥11r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_yimai2_1.jpg",
                        thumb: "images/gallerys/work_yimai2_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_yimai2_2.jpg",
                        thumb: "images/gallerys/work_yimai2_2_thumb.jpg"
                    },
                ],
                tags: ["平涂", "Q版", "立绘"]
            },
            {
                name: "简单背景半身",
                price: "￥23r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_yimai3_1.jpg",
                        thumb: "images/gallerys/work_yimai3_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_yimai3_2.jpg",
                        thumb: "images/gallerys/work_yimai3_2_thumb.jpg"    
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_yimai3_3.jpg",
                        thumb: "images/gallerys/work_yimai3_3_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_yimai3_4.jpg",
                        thumb: "images/gallerys/work_yimai3_4_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_yimai3_5.jpg",
                        thumb: "images/gallerys/work_yimai3_5_thumb.jpg"
                    },
                ],
                tags: ["平涂", "正比", "半身"]
            },
            {
                name: "带背景立绘",
                price: "￥32r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_yimai4_1.jpg",
                        thumb: "images/gallerys/work_yimai4_1_thumb.jpg"
                    },
                ],
                tags: ["平涂", "正比", "立绘"]
            },
        ],
    },
    {
        name: "莲瑾",
        pinyin: "lianjin",
        role: "原创妹",
        mainTags: ["水印"],
        bio: "",
        businesses: [
            {
                name: "帮打水印",
                price: "暂无价格",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_lianjin1_1.jpg",
                        thumb: "images/gallerys/work_lianjin1_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_lianjin1_2.jpg",
                        thumb: "images/gallerys/work_lianjin1_2_thumb.jpg"  
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_lianjin1_3.jpg",
                        thumb: "images/gallerys/work_lianjin1_3_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_lianjin1_4.jpg",
                        thumb: "images/gallerys/work_lianjin1_4_thumb.jpg"
                    },
                ],
                tags: ["帮打水印"]
            }
        ],
    },
    {
        name: "DQ",
        pinyin: "dq",
        role: "画师",
        mainTags: ["绘画"],
        bio: "",
        businesses: [
            {
                name: "盲盒",
                price: "￥5r",
                desc: "-其他自带价",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_dq1_1.jpg",
                        thumb: "images/gallerys/work_dq1_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_dq1_2.jpg",
                        thumb: "images/gallerys/work_dq1_2_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_dq1_3.jpg",
                        thumb: "images/gallerys/work_dq1_3_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_dq1_4.jpg",
                        thumb: "images/gallerys/work_dq1_4_thumb.jpg"
                    },
                ],
                tags: ["盲盒"]
            }
        ],
    },
    {
        name: "light",
        pinyin: "light",
        role: "画师",
        mainTags: ["绘画"],
        bio: "",
        businesses: [
            {
                name: "单人半身像",
                price: "￥25-30r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_light1_1.jpg",
                        thumb: "images/gallerys/work_light1_1_thumb.jpg"
                    },
                ],
                tags: ["线稿", "正比", "半身"]
            }
        ],
    },
    {
        name: "暂无姓名",
        pinyin: "abc",
        role: "画师",
        mainTags: ["绘画"],
        bio: "",
        businesses: [
            {
                name: "半身插",
                price: "￥650r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_x1_1.jpg",
                        thumb: "images/gallerys/work_x1_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x1_2.jpg",
                        thumb: "images/gallerys/work_x1_2_thumb.jpg"
                    },
                ],
                tags: ["伪厚涂", "正比", "半身","横插"]
            },
            {
                name: "横胸插",
                price: "￥350r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_x2_1.jpg",
                        thumb: "images/gallerys/work_x2_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x2_2.jpg",
                        thumb: "images/gallerys/work_x2_2_thumb.jpg"
                    },
                ],
                tags: ["伪厚涂", "正比", "半身","横插"]
            },
            {
                name: "半身",
                price: "￥460r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_x3_1.jpg",
                        thumb: "images/gallerys/work_x3_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x3_2.jpg",
                        thumb: "images/gallerys/work_x3_2_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x3_3.jpg",
                        thumb: "images/gallerys/work_x3_3_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x3_4.jpg",
                        thumb: "images/gallerys/work_x3_4_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x3_5.jpg",
                        thumb: "images/gallerys/work_x3_5_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x3_6.jpg",
                        thumb: "images/gallerys/work_x3_6_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x3_7.jpg",
                        thumb: "images/gallerys/work_x3_7_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x3_8.jpg",
                        thumb: "images/gallerys/work_x3_8_thumb.jpg"
                    },
                ],
                tags: ["伪厚涂", "正比", "半身"]
            },
            {
                name: "精细头像",
                price: "￥265r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_x4_1.jpg",
                        thumb: "images/gallerys/work_x4_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x4_2.jpg",
                        thumb: "images/gallerys/work_x4_2_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x4_3.jpg",
                        thumb: "images/gallerys/work_x4_3_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x4_4.jpg",
                        thumb: "images/gallerys/work_x4_4_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x4_5.jpg",
                        thumb: "images/gallerys/work_x4_5_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x4_6.jpg",
                        thumb: "images/gallerys/work_x4_6_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x4_7.jpg",
                        thumb: "images/gallerys/work_x4_7_thumb.jpg"    
                    },
                ],
                tags: ["伪厚涂", "正比", "头像"]
            },
            {
                name: "抱娃头像",
                price: "￥285r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_x5_1.jpg",
                        thumb: "images/gallerys/work_x5_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x5_2.jpg",
                        thumb: "images/gallerys/work_x5_2_thumb.jpg"
                    },
                ],
                tags: ["伪厚涂", "正比", "双人", "头像"]
            },
            {
                name: "全身插",
                price: "￥800r+",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_x6_1.jpg",
                        thumb: "images/gallerys/work_x6_1_thumb.jpg"
                    },
                ],
                tags: ["伪厚涂", "正比", "立绘", "竖插"]
            },
            {
                name: "简单背景头像",
                price: "￥210r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_x7_1.jpg",
                        thumb: "images/gallerys/work_x7_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x7_2.jpg",
                        thumb: "images/gallerys/work_x7_2_thumb.jpg"
                    },
                ],
                tags: ["伪厚涂", "正比", "头像"]
            },
            {
                name: "眼睛条",
                price: "￥45r",
                desc: "",
                gallery: [
                    {
                        type: "image",
                        url: "images/gallerys/work_x8_1.jpg",
                        thumb: "images/gallerys/work_x8_1_thumb.jpg"
                    },
                    {
                        type: "image",
                        url: "images/gallerys/work_x8_2.jpg",
                        thumb: "images/gallerys/work_x8_2_thumb.jpg"
                    },
                ],
                tags: ["伪厚涂", "正比", "眼睛条"]
            }
        ],
    },
    // {
    //     name: "",
    //     pinyin: "",
    //     role: "",
    //     mainTags: [""],
    //     bio: "",
    //     businesses: [
    //         {
    //             name: "",
    //             price: "暂无价格",
    //             desc: "",
    //             gallery: [
    //                 {
    //                     type: "image",
    //                     url: "images/gallerys/work_1_1.jpg",
    //                     thumb: "images/gallerys/work_1_1.jpg"
    //                 },
    //             ],
    //             tags: []
    //         }
    //     ],
    // },
];

// 标签系统配置
const tagSystem = {
    "绘画": {
        "风格": ["平涂", "伪厚涂", "厚涂", "纸绘", "线稿", "草稿", "美漫风", "仿画风"],
        "类型": ["正比", "Q版", "兽设", "双人", "群绘"],
        "业务": ["头像", "胸像", "半身", "立绘", "横插", "竖插", "眼睛条", "服设", "盲盒"]
    },
    "写文": {
        "类型": ["OC文", "世界观", "印象鉴", "短句"]
    },
    "水印": {
        "类型": ["帮打水印", "定制水印"]
    },
    "占卜": {
        "类型": ["塔罗", "灵摆", "星盘"]
    },
    "手作": {
        "类型": ["黏土", "不织布", "羊毛毡"],
        "业务": ["珠串链"]
    }
};

// 公告数据
const announcementsData = [
    // 示例历史数据，当前最新暂无


    {
        date: "2025-12-01",
        content: "万画画社官网正式上线啦！欢迎各位加入我们的大家庭。"
    },
];
